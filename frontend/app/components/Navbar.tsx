"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
    { label: "Home",     href: "/"         },
    { label: "Projects", href: "/projects" },
];

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [open, setOpen] = useState(false);

    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isHome) {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false);
    };

    return (
        <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-[rgba(255,255,255,0.06)]">
            <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-sm font-semibold text-white tracking-wide hover:text-[#67E8F9] transition-colors">
                    Sinu<span className="text-[#67E8F9]">.</span>dev
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-7 text-sm text-[#94A3B8]">
                    {links.map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`hover:text-white transition-colors ${pathname === href ? "text-white" : ""}`}
                        >
                            {label}
                        </Link>
                    ))}
                    <a
                        href={isHome ? "#contact" : "/#contact"}
                        onClick={scrollToContact}
                        className="hover:text-white transition-colors cursor-pointer"
                    >
                        Contact
                    </a>
                    <Link
                        href="/ai"
                        className="text-xs px-3 py-1.5 rounded-md border border-[rgba(103,232,249,0.25)] text-[#67E8F9] hover:bg-[rgba(103,232,249,0.06)] transition-colors font-medium"
                    >
                        AI Demo
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-[#94A3B8] hover:text-white transition-colors"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <div className={`w-5 h-px bg-current mb-1.5 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
                    <div className={`w-5 h-px bg-current mb-1.5 transition-all ${open ? "opacity-0" : ""}`} />
                    <div className={`w-5 h-px bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden px-6 pb-4 pt-2 flex flex-col gap-3 text-sm text-[#94A3B8] border-t border-[rgba(255,255,255,0.06)]">
                    {links.map(({ label, href }) => (
                        <Link key={href} href={href} onClick={() => setOpen(false)} className="hover:text-white transition-colors py-1">
                            {label}
                        </Link>
                    ))}
                    <a href={isHome ? "#contact" : "/#contact"} onClick={scrollToContact} className="hover:text-white transition-colors py-1">
                        Contact
                    </a>
                    <Link href="/ai" onClick={() => setOpen(false)} className="text-[#67E8F9] py-1">
                        AI Demo
                    </Link>
                </div>
            )}
        </nav>
    );
}

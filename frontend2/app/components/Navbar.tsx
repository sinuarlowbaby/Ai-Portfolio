"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icons } from "./ui/Icons";

const links = [
    { label: "Home", href: "/" },
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
        <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold flex items-center gap-2 group">
                    <Icons.Brain className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
                    <span>SINU <span className="text-primary">BABY</span></span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    {links.map(({ label, href }) => (
                        <Link key={href} href={href} className="hover:text-white transition-colors">{label}</Link>
                    ))}
                    <a
                        href={isHome ? "#contact" : "/#contact"}
                        onClick={scrollToContact}
                        className="hover:text-white transition-colors cursor-pointer"
                    >
                        Contact
                    </a>
                </div>

                <Link
                    href="/ai"
                    className="hidden md:inline-flex px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all text-sm font-medium"
                >
                    Try AI Demo
                </Link>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-gray-300 hover:text-white transition-colors"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
                    <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${open ? "opacity-0" : ""}`} />
                    <div className={`w-5 h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm font-medium text-gray-300 border-t border-white/5">
                    {links.map(({ label, href }) => (
                        <Link key={href} href={href} onClick={() => setOpen(false)} className="hover:text-white transition-colors py-1">{label}</Link>
                    ))}
                    <a href={isHome ? "#contact" : "/#contact"} onClick={scrollToContact} className="hover:text-white transition-colors py-1">Contact</a>
                    <Link href="/ai" onClick={() => setOpen(false)} className="text-primary py-1">Try AI Demo</Link>
                </div>
            )}
        </nav>
    );
}

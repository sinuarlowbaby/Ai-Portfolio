"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
    { label: "Home",     href: "/"         },
    { label: "Projects", href: "/projects" },
];

export default function Navbar() {
    const pathname  = usePathname();
    const isHome    = pathname === "/";
    const [open,     setOpen]     = useState(false);
    const [scrolled, setScrolled] = useState(false);

    /* ── Scroll listener — tighten navbar on scroll ── */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 32);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isHome) {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false);
    };

    const isActive = (href: string) => pathname === href;

    /* ── Dynamic nav container style ── */
    const containerStyle: React.CSSProperties = {
        background:     scrolled ? "rgba(5, 8, 18, 0.88)" : "rgba(7, 10, 20, 0.72)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border:         "1px solid rgba(255,255,255,0.05)",
        borderRadius:   18,
        boxShadow:      scrolled
            ? "0 8px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(103,232,249,0.04)"
            : "0 8px 32px rgba(0,0,0,0.25)",
        transition:     "all 0.3s ease",
        height:         scrolled ? 56 : 68,
    };

    const linkClass = (href: string) =>
        `flex items-center px-3.5 py-2 rounded-[10px] text-sm font-medium transition-all duration-200 ${
            isActive(href)
                ? "text-[#67E8F9]"
                : "text-[#94A3B8] hover:text-white hover:bg-[rgba(255,255,255,0.04)]"
        }`;

    return (
        /* ── Outer positioning wrapper — floats above page ── */
        <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
            <div
                className="w-full pointer-events-auto"
                style={{ maxWidth: 1100 }}
            >
                <nav style={containerStyle} className="flex items-center px-6">

                    {/* ── Logo ── */}
                    <Link href="/" className="flex flex-col justify-center mr-8 shrink-0 group">
                        <span className="text-sm font-bold text-white tracking-wide leading-none group-hover:text-[#67E8F9] transition-colors">
                            SINU ARLOW BABY
                        </span>
                        <span className="text-[10px] text-[#475569] font-medium tracking-widest leading-none mt-0.5 uppercase">
                            AI Systems Engineer
                        </span>
                    </Link>

                    {/* ── Desktop nav links ── */}
                    <div className="hidden md:flex items-center gap-0.5 flex-1">
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link key={href} href={href} className={linkClass(href)}>
                                {label}
                            </Link>
                        ))}
                        <a
                            href={isHome ? "#contact" : "/#contact"}
                            onClick={scrollToContact}
                            className={`flex items-center px-3.5 py-2 rounded-[10px] text-sm font-medium text-[#94A3B8] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200 cursor-pointer`}
                        >
                            Contact
                        </a>
                    </div>

                    {/* ── AI Demo CTA ── */}
                    <div className="hidden md:flex items-center ml-auto">
                        <Link
                            href="/ai"
                            style={{
                                border:     "1px solid rgba(103,232,249,0.18)",
                                background: "rgba(103,232,249,0.05)",
                                color:      "#67E8F9",
                                borderRadius: 10,
                                padding:    "7px 16px",
                                fontSize:   "0.8125rem",
                                fontWeight: 600,
                                transition: "all 0.2s ease",
                                lineHeight: 1,
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.background = "rgba(103,232,249,0.10)";
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.background = "rgba(103,232,249,0.05)";
                            }}
                        >
                            AI Demo
                        </Link>
                    </div>

                    {/* ── Mobile hamburger ── */}
                    <button
                        className="md:hidden ml-auto flex flex-col justify-center gap-[5px] p-2 rounded-lg hover:bg-[rgba(255,255,255,0.04)] transition-colors"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-[1.5px] bg-[#94A3B8] transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
                        <span className={`block w-5 h-[1.5px] bg-[#94A3B8] transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
                        <span className={`block w-5 h-[1.5px] bg-[#94A3B8] transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
                    </button>
                </nav>

                {/* ── Mobile dropdown ── */}
                {open && (
                    <div
                        className="md:hidden mt-2 flex flex-col gap-1 p-3"
                        style={{
                            background:     "rgba(7, 10, 20, 0.92)",
                            backdropFilter: "blur(16px)",
                            border:         "1px solid rgba(255,255,255,0.06)",
                            borderRadius:   14,
                            boxShadow:      "0 8px 32px rgba(0,0,0,0.3)",
                        }}
                    >
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setOpen(false)}
                                className={`flex items-center px-4 py-2.5 rounded-[10px] text-sm font-medium transition-colors ${
                                    isActive(href) ? "text-[#67E8F9] bg-[rgba(103,232,249,0.06)]" : "text-[#94A3B8] hover:text-white hover:bg-[rgba(255,255,255,0.04)]"
                                }`}
                            >
                                {label}
                            </Link>
                        ))}
                        <a
                            href={isHome ? "#contact" : "/#contact"}
                            onClick={scrollToContact}
                            className="flex items-center px-4 py-2.5 rounded-[10px] text-sm font-medium text-[#94A3B8] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-colors"
                        >
                            Contact
                        </a>
                        <div className="h-px bg-[rgba(255,255,255,0.05)] my-1" />
                        <Link
                            href="/ai"
                            onClick={() => setOpen(false)}
                            className="flex items-center px-4 py-2.5 rounded-[10px] text-sm font-semibold text-[#67E8F9]"
                        >
                            AI Demo →
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./ui/Icons";

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    // On home page, Contact scrolls to #contact section.
    // On other pages, Contact navigates back to home and scrolls.
    const contactHref = isHome ? "#contact" : "/#contact";

    const handleContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isHome) {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass border-b-0">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold tracking-wide flex items-center gap-2 group">
                    <Icons.Brain className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
                    <span>SINU <span className="text-primary">BABY</span></span>
                </Link>

                <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
                    <a
                        href={contactHref}
                        onClick={handleContact}
                        className="hover:text-white transition-colors cursor-pointer"
                    >
                        Contact
                    </a>
                </div>

                <a
                    href="/ai"
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all text-sm font-medium"
                >
                    Try AI Demo
                </a>
            </div>
        </nav>
    );
}

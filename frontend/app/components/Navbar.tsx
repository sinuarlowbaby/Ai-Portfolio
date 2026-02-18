import Link from "next/link"
import { Icons } from "./ui/Icons"

export default function Navbar() {
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
                    <Link href="/skills" className="hover:text-white transition-colors">Skills</Link>
                    <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                </div>

                <a
                    href="/ai"
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all text-sm font-medium"
                >
                    Try AI Demo
                </a>
            </div>
        </nav>
    )
}

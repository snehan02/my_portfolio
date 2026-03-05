"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            const sections = navLinks.map((l) => l.href.slice(1));
            for (const section of sections.reverse()) {
                const el = document.getElementById(section);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive(section);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNav = (href: string) => {
        setIsOpen(false);
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-[#050510]/90 backdrop-blur-md border-b border-[#1a1a30]"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-12">
                {/* Logo */}
                <a
                    onClick={() => handleNav("#home")}
                    className="cursor-pointer flex items-center gap-3 font-display font-bold text-xl"
                >
                    <img src="/logo.jpg" alt="Logo" className="w-8 h-8 rounded-full border border-primary-500/30 object-cover" />
                    <span className="text-gradient">Sneha N.</span>
                </a>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <button
                                onClick={() => handleNav(link.href)}
                                className={`nav-link text-sm font-medium transition-colors ${active === link.href.slice(1)
                                    ? "text-white active"
                                    : "text-[#a0a0c0] hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>



                {/* Mobile hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-[#a0a0c0] hover:text-white transition-colors p-2"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0d0d1f]/98 backdrop-blur-xl border-b border-[#1a1a30]">
                    <ul className="px-4 py-4 space-y-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <button
                                    onClick={() => handleNav(link.href)}
                                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${active === link.href.slice(1)
                                        ? "bg-primary-600/20 text-primary-400"
                                        : "text-[#a0a0c0] hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}

                    </ul>
                </div>
            )}
        </header>
    );
}

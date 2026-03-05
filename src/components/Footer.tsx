"use client";

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#030308] border-t border-[#1a1a30]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <span className="font-display font-bold text-2xl text-gradient">Sneha N.</span>
                        <p className="text-[#505070] text-sm mt-1">
                            Full-Stack Developer · UI/UX Designer · ML Enthusiast
                        </p>
                    </div>

                    {/* Nav links */}
                    <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                        {["home", "about", "experience", "projects", "education", "contact"].map((item) => (
                            <button
                                key={item}
                                onClick={() =>
                                    document.getElementById(item)?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="text-[#505070] hover:text-white text-sm capitalize transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    {/* Socials */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/snehan02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg border border-[#1a1a30] hover:border-primary-500/50 bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#606080] hover:text-white transition-all"
                        >
                            <Github size={16} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sneha-n02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg border border-[#1a1a30] hover:border-sky-500/50 bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#606080] hover:text-sky-400 transition-all"
                        >
                            <Linkedin size={16} />
                        </a>
                        <a
                            href="mailto:snehan102@gmail.com"
                            className="w-9 h-9 rounded-lg border border-[#1a1a30] hover:border-primary-500/50 bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#606080] hover:text-primary-400 transition-all"
                        >
                            <Mail size={16} />
                        </a>
                        <button
                            onClick={scrollToTop}
                            className="w-9 h-9 rounded-lg border border-[#1a1a30] hover:border-accent-500/50 bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#606080] hover:text-accent-400 transition-all ml-2"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp size={16} />
                        </button>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#1a1a30] text-center">
                    <p className="text-[#404060] text-xs flex items-center justify-center gap-1.5">
                        Built by Sneha N. with{" "}
                        <Heart size={12} className="text-red-500 fill-red-500" />{" "}
                        using Next.js & Tailwind CSS · {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
}

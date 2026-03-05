"use client";

import { Github, Linkedin, Mail, Phone, ChevronDown, Download, Eye } from "lucide-react";

export default function Hero() {
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
        >
            {/* Ambient background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/15 rounded-full blur-3xl animate-glow-pulse" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-3xl" />
            </div>

            {/* Floating orbs */}
            <div className="absolute top-20 right-20 w-4 h-4 bg-primary-500 rounded-full animate-float opacity-60" />
            <div className="absolute top-40 left-16 w-3 h-3 bg-accent-400 rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }} />
            <div className="absolute bottom-32 right-32 w-2 h-2 bg-pink-400 rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-medium mb-8">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Open to Work
                </div>

                {/* Name */}
                <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl mb-4 leading-none">
                    <span className="text-white">Hi, I'm </span>
                    <span className="text-gradient">Sneha N.</span>
                </h1>

                {/* Titles */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-8">
                    <span className="text-xl sm:text-2xl font-light text-[#a0a0c0]">Software Intern</span>
                    <span className="hidden sm:inline text-2xl text-primary-500">·</span>
                    <span className="text-xl sm:text-2xl font-light text-[#a0a0c0]">UI/UX Designer</span>
                    <span className="hidden sm:inline text-2xl text-accent-500">·</span>
                    <span className="text-xl sm:text-2xl font-light text-[#a0a0c0]">AI/ML Enthusiast</span>
                </div>

                {/* Description */}
                <p className="max-w-2xl mx-auto text-[#7070a0] text-lg leading-relaxed mb-12">
                    Final-year B.E. Information Science student at Global Academy of Technology, building
                    full-stack applications and intelligent systems with a passion for clean design.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <a
                        href="/resume.pdf"
                        download
                        className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold text-base transition-all duration-300 hover:shadow-2xl hover:shadow-primary-600/40 hover:scale-105"
                    >
                        <Download size={18} />
                        Download Resume
                    </a>
                    <button
                        onClick={scrollToProjects}
                        className="group flex items-center gap-3 px-8 py-4 rounded-xl border border-[#1a1a30] hover:border-primary-500/50 bg-white/5 hover:bg-white/10 text-white font-semibold text-base transition-all duration-300"
                    >
                        <Eye size={18} />
                        View My Projects
                    </button>
                </div>

                {/* Social links */}
                <div className="flex items-center justify-center gap-6">
                    <a
                        href="https://github.com/snehan02"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#a0a0c0] hover:text-white transition-colors group"
                    >
                        <Github size={20} className="group-hover:scale-110 transition-transform" />
                        <span className="text-sm">GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sneha-n02"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#a0a0c0] hover:text-[#0077b5] transition-colors group"
                    >
                        <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                        <span className="text-sm">LinkedIn</span>
                    </a>
                    <a
                        href="mailto:snehan102@gmail.com"
                        className="flex items-center gap-2 text-[#a0a0c0] hover:text-primary-400 transition-colors group"
                    >
                        <Mail size={20} className="group-hover:scale-110 transition-transform" />
                        <span className="text-sm">Email</span>
                    </a>
                    <a
                        href="tel:8088939506"
                        className="flex items-center gap-2 text-[#a0a0c0] hover:text-accent-400 transition-colors group"
                    >
                        <Phone size={20} className="group-hover:scale-110 transition-transform" />
                        <span className="text-sm">Phone</span>
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4040608] animate-bounce">
                <span className="text-xs text-[#404060] uppercase tracking-widest">Scroll</span>
                <ChevronDown size={16} className="text-[#404060]" />
            </div>
        </section>
    );
}

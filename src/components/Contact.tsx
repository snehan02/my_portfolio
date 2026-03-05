"use client";

import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";

const contactLinks = [
    {
        icon: <Mail size={22} />,
        label: "Email",
        value: "snehan102@gmail.com",
        href: "mailto:snehan102@gmail.com",
        color: "from-blue-500 to-primary-600",
        hover: "hover:border-blue-500/50 hover:shadow-blue-500/20",
    },
    {
        icon: <Phone size={22} />,
        label: "Phone",
        value: "+91 8088939506",
        href: "tel:8088939506",
        color: "from-emerald-500 to-teal-600",
        hover: "hover:border-emerald-500/50 hover:shadow-emerald-500/20",
    },
    {
        icon: <Linkedin size={22} />,
        label: "LinkedIn",
        value: "linkedin.com/in/sneha-n02",
        href: "https://www.linkedin.com/in/sneha-n02",
        color: "from-sky-500 to-blue-600",
        hover: "hover:border-sky-500/50 hover:shadow-sky-500/20",
    },
    {
        icon: <Github size={22} />,
        label: "GitHub",
        value: "github.com/sneha-n02",
        href: "https://github.com/snehan02",
        color: "from-gray-500 to-zinc-600",
        hover: "hover:border-gray-500/50 hover:shadow-gray-500/20",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="section-padding bg-[#050510]">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-primary-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                        Let's Connect
                    </p>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full mb-6" />
                    <p className="text-[#7070a0] max-w-xl mx-auto leading-relaxed">
                        I'm currently open to internship opportunities and collaborations.
                        Whether you have a project idea or just want to say hi — my inbox is always open!
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                    {contactLinks.map((contact) => (
                        <a
                            key={contact.label}
                            href={contact.href}
                            target={contact.href.startsWith("http") ? "_blank" : undefined}
                            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className={`glass-card rounded-2xl p-6 border border-white/10 flex items-center gap-5 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${contact.hover}`}
                        >
                            {/* Icon */}
                            <div
                                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                            >
                                {contact.icon}
                            </div>
                            {/* Info */}
                            <div>
                                <p className="text-xs text-[#6060a0] uppercase tracking-wider font-medium mb-0.5">
                                    {contact.label}
                                </p>
                                <p className="text-white font-medium text-sm">{contact.value}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* CTA Box */}
                <div className="glass-card rounded-2xl p-8 text-center relative overflow-hidden glow-blue">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-accent-600/10 opacity-50" />
                    <div className="relative">
                        <div className="text-4xl mb-4">👋</div>
                        <h3 className="font-display font-bold text-2xl text-white mb-3">
                            Open to Opportunities
                        </h3>
                        <p className="text-[#7070a0] mb-6 max-w-sm mx-auto">
                            Looking for internships in Full-Stack Development, Machine Learning, or UI/UX Design.
                            Graduating in 2026.
                        </p>
                        <a
                            href="mailto:snehan102@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary-600/40 hover:scale-105"
                        >
                            <Send size={16} />
                            Send a Message
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

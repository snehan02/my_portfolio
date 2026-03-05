"use client";

import { GraduationCap, Award, ExternalLink, BadgeCheck } from "lucide-react";

const certifications = [
    {
        title: "Java Foundation & Web Development",
        issuer: "Infosys",
        color: "text-orange-400",
        iconBg: "bg-orange-500/15 border-orange-500/25",
        bg: "bg-orange-500/10 border-orange-500/20",
    },
    {
        title: "Artificial Intelligence Fundamentals",
        issuer: "IBM",
        color: "text-blue-400",
        iconBg: "bg-blue-500/15 border-blue-500/25",
        bg: "bg-blue-500/10 border-blue-500/20",
    },
    {
        title: "Generative AI for UX Designers",
        issuer: "Coursera",
        color: "text-purple-400",
        iconBg: "bg-purple-500/15 border-purple-500/25",
        bg: "bg-purple-500/10 border-purple-500/20",
    },
    {
        title: "Software Testing",
        issuer: "GAT Upskill",
        color: "text-emerald-400",
        iconBg: "bg-emerald-500/15 border-emerald-500/25",
        bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
        title: "Data Analytics Foundation",
        issuer: "LinkedIn Learning",
        color: "text-sky-400",
        iconBg: "bg-sky-500/15 border-sky-500/25",
        bg: "bg-sky-500/10 border-sky-500/20",
    },
];

export default function Education() {
    return (
        <section id="education" className="section-padding bg-[#080812]">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-primary-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                        Academia & Learning
                    </p>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
                        Education &{" "}
                        <span className="text-gradient">Certifications</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full" />
                </div>

                {/* Degree Card */}
                <div className="glass-card rounded-2xl p-8 mb-12 glow-blue relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/5 rounded-full -translate-y-32 translate-x-32" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-600/5 rounded-full translate-y-24 -translate-x-24" />

                    <div className="relative flex flex-col sm:flex-row items-start gap-6">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center flex-shrink-0">
                            <GraduationCap size={28} className="text-white" />
                        </div>

                        {/* Details */}
                        <div className="flex-1">
                            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                                <div>
                                    <h3 className="font-display font-bold text-xl text-white">
                                        Bachelor of Engineering — Information Science
                                    </h3>
                                    <p className="text-primary-400 font-medium mt-1">
                                        Global Academy of Technology, Bengaluru
                                    </p>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-sm font-semibold">
                                    Expected 2026
                                </span>
                            </div>
                            <p className="text-[#7070a0] text-sm mt-3 leading-relaxed">
                                Pursuing a degree in Information Science with a focus on software engineering,
                                machine learning, and intelligent systems. Active participant in hackathons,
                                design sprints, and technical workshops.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Award size={20} className="text-accent-400" />
                        <h3 className="font-display font-semibold text-xl text-white">
                            Certifications
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {certifications.map((cert) => (
                            <div
                                key={cert.title}
                                className={`glass-card rounded-xl p-5 border ${cert.bg} flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300`}
                            >
                                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 ${cert.iconBg}`}>
                                    <BadgeCheck size={18} className={cert.color} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-white text-sm leading-snug">
                                        {cert.title}
                                    </h4>
                                    <p className={`text-xs mt-0.5 ${cert.color}`}>{cert.issuer}</p>
                                </div>
                                <ExternalLink
                                    size={13}
                                    className="text-[#404060] flex-shrink-0 group-hover:text-white transition-colors"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

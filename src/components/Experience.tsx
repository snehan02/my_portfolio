"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        role: "Software Intern",
        company: "AI4NOCODE",
        period: "2024",
        type: "Internship",
        description:
            "Focused on software development and technical implementation. Contributed to building no-code automation tools, developing features that streamline complex workflows for non-technical users.",
        highlights: [
            "Software development and feature implementation",
            "Building automation workflows for non-technical users",
            "Collaborating in agile sprints",
        ],
        icon: "💻",
        color: "primary",
    },
    {
        role: "UI/UX Designer",
        company: "Jarurat Care Foundation",
        period: "2024",
        type: "Internship",
        description:
            "Designed user interfaces and conducted user experience research for healthcare-focused digital products. Created wireframes, prototypes, and high-fidelity designs in Figma.",
        highlights: [
            "User interface design and prototyping in Figma",
            "User experience research and usability testing",
            "Creating high-fidelity design systems",
        ],
        icon: "🎨",
        color: "accent",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section-padding bg-[#080812]">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-primary-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                        Work History
                    </p>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
                        Professional <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full" />
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 timeline-line rounded-full opacity-30" />

                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div
                                key={exp.company}
                                className={`relative flex gap-8 md:gap-0 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >
                                {/* Left / Right content */}
                                <div className={`hidden md:block flex-1 ${idx % 2 === 0 ? "pr-16 text-right" : "pl-16"}`} />

                                {/* Center dot */}
                                <div className="relative flex-shrink-0 flex items-start justify-center">
                                    <div className="relative z-10 w-16 h-16 rounded-2xl glass-card border border-primary-500/30 flex items-center justify-center text-2xl glow-blue mt-1">
                                        {exp.icon}
                                    </div>
                                </div>

                                {/* Card */}
                                <div className={`flex-1 md:${idx % 2 === 0 ? "pl-16" : "pr-16"} pl-8 md:pl-0`}>
                                    <div className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 glow-blue">
                                        {/* Header */}
                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                            <div>
                                                <h3 className="font-display font-bold text-xl text-white">{exp.role}</h3>
                                                <p className="text-primary-400 font-medium">{exp.company}</p>
                                            </div>
                                            <div className="flex flex-col items-end gap-1">
                                                <span className="flex items-center gap-1.5 text-[#6060808] text-sm text-[#606080]">
                                                    <Calendar size={13} />
                                                    {exp.period}
                                                </span>
                                                <span className="px-2.5 py-0.5 rounded-full bg-primary-500/15 text-primary-400 text-xs font-medium border border-primary-500/20">
                                                    {exp.type}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-[#8080a0] text-sm leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        {/* Highlights */}
                                        <ul className="space-y-1.5">
                                            {exp.highlights.map((h) => (
                                                <li key={h} className="flex items-start gap-2 text-[#6060a0] text-xs">
                                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Tripyfy",
        emoji: "✈️",
        summary:
            "Full-stack MERN travel platform enabling users to plan, share, and discover travel itineraries with real-time data and MongoDB indexing for optimized query performance.",
        tags: ["MongoDB", "Express", "React", "Node.js", "REST API"],
        gradient: "from-blue-500/20 via-blue-600/10 to-transparent",
        accent: "border-blue-500/30",
        github: "https://github.com/snehan02",
    },
    {
        title: "Personalized News Digest",
        emoji: "📰",
        summary:
            "Node.js and React application delivering tailored news feeds with JWT-based authentication and automated daily email delivery powered by Brevo (Sendinblue) API.",
        tags: ["React", "Node.js", "JWT", "Brevo API", "Email Automation"],
        gradient: "from-purple-500/20 via-purple-600/10 to-transparent",
        accent: "border-purple-500/30",
        github: "https://github.com/snehan02",
    },
    {
        title: "Political Community Management",
        emoji: "🏛️",
        summary:
            "Governance platform featuring analytics dashboards, secure region-based data segregation, and reporting tools to assist in community and constituency management.",
        tags: ["React", "Node.js", "MongoDB", "Analytics", "Role-Based Access"],
        gradient: "from-emerald-500/20 via-emerald-600/10 to-transparent",
        accent: "border-emerald-500/30",
        github: "https://github.com/snehan02",
    },
    {
        title: "Hand Gesture Recognition",
        emoji: "🤚",
        summary:
            "Human-Computer Interaction system using OpenCV and MediaPipe to detect hand gestures and map them to cursor control, volume adjustments, and math operations.",
        tags: ["Python", "OpenCV", "MediaPipe", "HCI", "ML"],
        gradient: "from-orange-500/20 via-orange-600/10 to-transparent",
        accent: "border-orange-500/30",
        github: "https://github.com/snehan02",
    },
    {
        title: "Diabetes Prediction System",
        emoji: "🩺",
        summary:
            "Machine learning model for early diabetes diagnosis trained on clinical datasets. Evaluated using precision, recall, and F1-score metrics with an interactive prediction interface.",
        tags: ["Python", "Scikit-learn", "ML", "Pandas", "Data Viz"],
        gradient: "from-pink-500/20 via-pink-600/10 to-transparent",
        accent: "border-pink-500/30",
        github: "https://github.com/snehan02",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding bg-[#050510]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-primary-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                        What I've Built
                    </p>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full mb-6" />
                    <p className="text-[#7070a0] max-w-xl mx-auto">
                        A selection of projects spanning full-stack web development, machine learning,
                        and human-computer interaction.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <div
                            key={project.title}
                            className={`project-card group glass-card rounded-2xl overflow-hidden border ${project.accent} flex flex-col`}
                        >
                            {/* Top gradient stripe */}
                            <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient.replace('/20', '').replace('/10', '').replace('via-', '').replace('to-transparent', '')}`}
                                style={{ background: undefined }}
                            />

                            <div className="p-6 flex flex-col flex-1">
                                {/* Icon & title */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">{project.emoji}</span>
                                        <h3 className="font-display font-bold text-lg text-white leading-tight">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <span className="text-[#404060] text-xs font-mono">
                                        #{String(idx + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-[#7070a0] text-sm leading-relaxed mb-5 flex-1">
                                    {project.summary}
                                </p>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#9090c0] text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-[#8080a0] hover:text-white text-sm transition-colors group-hover:text-primary-400"
                                    >
                                        <Github size={15} />
                                        View on GitHub
                                    </a>
                                    <ExternalLink size={13} className="text-[#404060] ml-auto" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub CTA */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/snehan02"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-[#1a1a30] hover:border-primary-500/50 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all duration-300"
                    >
                        <Github size={18} />
                        See All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

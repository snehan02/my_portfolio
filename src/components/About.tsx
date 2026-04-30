"use client";

const skillCategories = [
    {
        title: "Programming",
        icon: "💻",
        color: "from-primary-500/10 to-primary-600/5 border-primary-500/20",
        skills: ["Python", "Java", "JavaScript", "SQL"],
    },
    {
        title: "Web Development",
        icon: "🌐",
        color: "from-primary-500/10 to-primary-600/5 border-primary-500/20",
        skills: ["HTML", "CSS", "React.js", "Node.js", "TypeScript", "FastAPI"],
    },
    {
        title: "AI / ML",
        icon: "🤖",
        color: "from-primary-500/10 to-primary-600/5 border-primary-500/20",
        skills: ["Machine Learning", "Artificial Intelligence"],
    },
    {
        title: "Design & Analysis",
        icon: "🎨",
        color: "from-primary-500/10 to-primary-600/5 border-primary-500/20",
        skills: ["Figma", "Power BI", "Tableau"],
    },
    {
        title: "Tools",
        icon: "🛠️",
        color: "from-primary-500/10 to-primary-600/5 border-primary-500/20",
        skills: ["PyCharm", "Jupyter Notebook", "VS Code", "Eclipse"],
    },
];

export default function About() {
    return (
        <section id="about" className="section-padding bg-[#000000]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-primary-500 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                        Get to know me
                    </p>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-primary-500 mb-4">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full" />
                </div>

                {/* Bio Card */}
                <div className="glass-card rounded-2xl p-8 mb-12 glow-gold">
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Avatar placeholder */}
                        <div className="flex-shrink-0 mx-auto lg:mx-0">
                            <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-6xl font-display font-bold text-white border border-primary-500/30">
                                SN
                            </div>
                        </div>
                        {/* Bio text */}
                        <div>
                            <h3 className="font-display font-bold text-2xl text-white mb-3">
                                Sneha N.
                            </h3>
                            <p className="text-primary-500 text-sm font-medium mb-4">
                                B.E. Information Science · Global Academy of Technology · Expected 2026
                            </p>
                            <p className="text-[#a0a0a0] text-base leading-relaxed mb-4">
                                I'm a final-year Information Science engineering student with a passion for building
                                full-stack web applications, designing intuitive user experiences, and developing
                                intelligent machine learning systems. I thrive at the intersection of technology
                                and design, crafting products that are both functional and beautiful.
                            </p>
                            <p className="text-[#a0a0a0] text-base leading-relaxed">
                                My experience spans software internships and UI/UX design roles, giving me
                                a holistic view of product development — from backend APIs to polished
                                front-end experiences.
                            </p>

                            {/* Stats row */}
                            <div className="flex flex-wrap gap-8 mt-8">
                                {[
                                    { label: "Projects Built", value: "5+" },
                                    { label: "Certifications", value: "5" },
                                    { label: "Internships", value: "2" },
                                    { label: "Graduating", value: "2026" },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <div className="font-display font-bold text-2xl text-gradient-gold">
                                            {stat.value}
                                        </div>
                                        <div className="text-[#606060] text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Grid */}
                <div>
                    <h3 className="font-display font-semibold text-2xl text-white text-center mb-8">
                        Tech <span className="text-gradient">Stack</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillCategories.map((cat) => (
                            <div
                                key={cat.title}
                                className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${cat.color} border transition-all duration-300 hover:-translate-y-1 hover:glow-gold`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">{cat.icon}</span>
                                    <h4 className="font-display font-semibold text-white">{cat.title}</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="skill-badge px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-[#e0e0e0] text-sm font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

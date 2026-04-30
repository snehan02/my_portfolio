"use client";

import { Trophy, Calendar, MapPin, ExternalLink, X } from "lucide-react";
import { useState } from "react";

const achievements = [
    {
        title: "1st Place - Project Presentation",
        event: "Techno Event 2025",
        organization: "Global Academy of Technology (GAT)",
        date: "September 2025",
        description: "Secured the top position for the project 'Cursor Movement using Hand Gestures', demonstrating innovation in Human-Computer Interaction.",
        certificateUrl: "/hand-gesture-cert.jpg",
        badge: "Winner"
    },
    {
        title: "Certificate of Appreciation",
        event: "Detailed Presentation Submission",
        organization: "EY",
        date: "2024",
        description: "Recognized for active participation in the 'Detailed Presentation Submission' event organized by EY as part of Team Ecotwins.",
        certificateUrl: "/ey-participation-cert.png",
    }
];

export default function Achievements() {
    const [selectedCert, setSelectedCert] = useState<string | null>(null);

    return (
        <section id="achievements" className="section-padding bg-[#000000]">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-primary-500 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                        Milestones & Recognition
                    </p>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-primary-500 mb-4">
                        Honors & <span className="text-gradient">Achievements</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {achievements.map((achievement, idx) => (
                        <div 
                            key={idx}
                            className="glass-card rounded-2xl p-8 glow-gold flex flex-col md:flex-row items-center gap-8 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/20">
                                <Trophy size={36} className="text-white" />
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                                    <h3 className="font-display font-bold text-2xl text-white">
                                        {achievement.title}
                                    </h3>
                                    {achievement.badge && (
                                        <span className="px-3 py-1 rounded-full bg-primary-500/15 border border-primary-500/25 text-primary-500 text-xs font-bold uppercase tracking-wider">
                                            {achievement.badge}
                                        </span>
                                    )}
                                </div>
                                
                                <p className="text-primary-500 font-medium mb-4">{achievement.event}</p>
                                
                                <p className="text-[#a0a0a0] leading-relaxed mb-6 max-w-2xl">
                                    {achievement.description}
                                </p>

                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-[#606060]">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-primary-500" />
                                        {achievement.organization}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-primary-500" />
                                        {achievement.date}
                                    </div>
                                </div>
                            </div>

                            <button 
                                onClick={() => setSelectedCert(achievement.certificateUrl)}
                                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary-500/50 hover:bg-primary-500/5 text-white text-sm font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                            >
                                <ExternalLink size={16} className="text-primary-500" />
                                View Certificate
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certificate Modal */}
            {selectedCert && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
                    <div 
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedCert(null)}
                    />
                    <div className="relative max-w-4xl w-full bg-[#0a0a0a] rounded-2xl border border-primary-500/30 overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
                        <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5">
                            <h4 className="text-white font-medium">Achievement Certificate</h4>
                            <button 
                                onClick={() => setSelectedCert(null)}
                                className="p-2 rounded-lg hover:bg-white/10 text-[#a0a0a0] hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-2 sm:p-4 bg-black flex justify-center items-center min-h-[50vh]">
                            <img 
                                src={selectedCert} 
                                alt="Certificate" 
                                className="max-w-full max-h-[70vh] object-contain rounded-lg"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/000000/ffd700?text=Certificate+Not+Found\nPlease+save+image+to+public/hand-gesture-cert.jpg';
                                }}
                            />
                        </div>
                        <div className="p-4 border-t border-white/5 bg-white/5 text-center">
                            <p className="text-xs text-[#606060]">
                                1st Place - Project Presentation (Techno Event 2025)
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

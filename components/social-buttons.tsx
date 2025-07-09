"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function SocialButtons() {
    const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

    const handleSocialMouseEnter = (idx: number) => {
        setHoveredSocial(idx);
    };

    const handleSocialMouseMove = (event: React.MouseEvent<HTMLDivElement>, idx: number) => {
        if (hoveredSocial !== idx) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate offset from center (limited to small movements)
        const offsetX = Math.max(-8, Math.min(8, (event.clientX - centerX) * 0.1));
        const offsetY = Math.max(-8, Math.min(8, (event.clientY - centerY) * 0.1));

        setMouseOffset({ x: offsetX, y: offsetY });
    };

    const handleSocialMouseLeave = () => {
        setHoveredSocial(null);
        setMouseOffset({ x: 0, y: 0 });
    };

    const socials = [
        {
            name: "GitHub",
            href: "https://github.com/EsinShadrach",
            icon: <Github className="w-6 h-6" />
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/shadrach-rafe-esin-163125271/",
            icon: <Linkedin className="w-6 h-6" />
        },
        {
            name: "X",
            href: "https://x.com/rsty_rafe",
            icon: <Twitter className="w-6 h-6" />
        },
        {
            name: "Email",
            href: "mailto:esinshadrachrafe@gmail.com",
            icon: <Mail className="w-6 h-6" />
        },
    ];

    return (
        <div className="flex items-center justify-center">
            {socials.map((social, idx) => (
                <div key={idx} className="w-full bg-white">
                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                        <HandleMouseMoveContainer
                            className={`px-0 py-10 overflow-hidden bg-black border border-l-white/20 border-transparent hover:border-white/20 border-t-transparent group transition-all duration-150 ${hoveredSocial === idx ? '' : 'hover:-translate-y-3 hover:translate-x-3'
                                } hover:border-t-white/20`}
                            idx={idx}
                        >
                            <div className="flex items-center justify-center gap-2 text-white/50 text-2xl relative">
                                <div className="md:-translate-x-12 transition-all duration-300 group-hover:translate-x-0">
                                    {social.icon}
                                </div>
                                <div className="group-hover:translate-x-2 transition-all duration-300 group-hover:scale-105 whitespace-nowrap md:block hidden">
                                    {social.name}
                                </div>
                                <div className="absolute top-2 right-4 opacity-0 -translate-x-4 -translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                                    <ArrowRight className="w-4 h-4 text-white/70 -rotate-45" />
                                </div>
                            </div>
                        </HandleMouseMoveContainer>
                    </Link>
                </div>
            ))}
        </div>
    );
}


// takes in classs name and children
export function HandleMouseMoveContainer({ className, children, idx }: { className: string, children: React.ReactNode, idx: number }) {

    const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

    const handleSocialMouseEnter = (idx: number) => {
        setHoveredSocial(idx);
    };

    const handleSocialMouseMove = (event: React.MouseEvent<HTMLDivElement>, idx: number) => {
        if (hoveredSocial !== idx) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate offset from center (limited to small movements)
        const offsetX = Math.max(-8, Math.min(8, (event.clientX - centerX) * 0.1));
        const offsetY = Math.max(-8, Math.min(8, (event.clientY - centerY) * 0.1));

        setMouseOffset({ x: offsetX, y: offsetY });
    };

    const handleSocialMouseLeave = () => {
        setHoveredSocial(null);
        setMouseOffset({ x: 0, y: 0 });
    };

    return (
        <div className={className} onMouseEnter={() => handleSocialMouseEnter(idx)} onMouseMove={(e) => handleSocialMouseMove(e, idx)} onMouseLeave={handleSocialMouseLeave}
            style={{
                transform: hoveredSocial === idx
                    ? `translate(${12 + mouseOffset.x}px, ${-12 + mouseOffset.y}px)`
                    : ''
            }}
        >

            {children}
        </div>
    )
}

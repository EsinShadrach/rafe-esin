"use client";

import React, { useState } from "react";
import { GridLines } from "./utils/lines";
import SocialButtons from "./social-buttons";

interface NavbarContainerProps {
    isMenuOpen: boolean;
    isContainerVisible: boolean;
}

export default function NavbarContainer({ isMenuOpen, isContainerVisible }: NavbarContainerProps) {
    const [hoveredRoute, setHoveredRoute] = useState<number | null>(null);
    const [routeDirections, setRouteDirections] = useState<{ [key: number]: 'top' | 'bottom' }>({});

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>, idx: number) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseY = event.clientY;
        const centerY = rect.top + rect.height / 2;

        // Determine if mouse entered from top or bottom
        const direction = mouseY < centerY ? 'top' : 'bottom';
        setRouteDirections(prev => ({ ...prev, [idx]: direction }));
        setHoveredRoute(idx);
    };

    const handleMouseLeave = () => {
        setHoveredRoute(null);
    };

    const routes = [
        {
            name: "Projects",
            href: "/projects",
        },
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Blog",
            href: "/blog",
        },
        {
            name: "Contact",
            href: "/contact",
        }
    ];

    return (
        <div
            className={`fixed top-0 left-0 text-white w-full h-full bg-black z-[90] transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            {isContainerVisible && <GridLines isWhite />}
            <div className="container mx-auto md:mt-40 mt-[7.5rem] h-full w-full divide-y relative divide-white/20 border-t border-white/20">

                {routes.map((route, idx) => (
                    <div
                        key={idx}
                        className="relative bg-black/70 md:py-10 py-8 font-black text-center md:text-7xl text-5xl border-x border-white/20 overflow-hidden group cursor-pointer"
                        onMouseEnter={(e) => handleMouseEnter(e, idx)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* White background that slides in from detected direction */}
                        <div
                            className={`absolute inset-0 bg-white transition-transform duration-300 ease-out ${hoveredRoute === idx
                                ? 'scale-y-100'
                                : 'scale-y-0'
                                } ${(routeDirections[idx] || 'bottom') === 'top'
                                    ? 'origin-top'
                                    : 'origin-bottom'
                                }`}
                        />

                        {/* Route text */}
                        <div className={`relative z-10 transition-colors duration-300 ${hoveredRoute === idx ? 'text-black' : 'text-white'
                            }`}>
                            {route.name.toUpperCase()}
                        </div>
                    </div>
                ))}

                <SocialButtons />
                <div />
            </div>

        </div>
    )
} 
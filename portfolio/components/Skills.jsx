'use client'

// import { SiJavascript } from "react-icons/si";
// import { SiPocketbase } from "react-icons/si";
// import { SiNodedotjs } from "react-icons/si";
// import { SiReact } from "react-icons/si";
// import { GrMysql } from "react-icons/gr";
// import { BsGit } from "react-icons/bs";
// import { SiTailwindcss } from "react-icons/si";
// import { SiNextdotjs } from "react-icons/si";

import React, { useState, useEffect } from 'react';
import Navigator from "@/components/Navigator";
import SkillSet from '@/components/SkillSet';

const Skills = ({ reference, section }) => {
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollHeight(window.scrollY || window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const curtainWidth = Math.max(0, (screenWidth / 2) - ((scrollHeight / screenHeight) * (screenWidth / 2)));
    const textClip = curtainWidth;

    return (
        <div ref={reference} id="skills" className="relative bg-[#030204] h-screen flex justify-center items-center w-screen overflow-hidden py-10">
            <Navigator currentPage={section} />
            {/* Curtains */}
            <div
                className="absolute bg-[#af70b3] h-full"
                style={{
                    width: `${curtainWidth}px`,
                    transition: 'width ease-in-out',
                    left: 0,
                }}
            />
            <div
                className="absolute bg-[#af70b3] h-full"
                style={{
                    width: `${curtainWidth}px`,
                    transition: 'widthease-in-out',
                    right: 0,
                }}
            />
            <div className="absolute inset-0 flex justify-center items-center text-[#030204]">
                <SkillSet />
            </div>
            <div
                className='absolute inset-0 flex justify-center items-center text-zinc-50'
                style={{
                    width: '100vw',
                    clipPath: `inset(0 ${textClip}px 0 ${textClip}px)`, // Clip text from both left and right
                    WebkitClipPath: `inset(0 ${textClip}px 0 ${textClip}px)`, // For Safari
                    transition: 'clip-path ease-in-out, -webkit-clip-path ease-in-out',
                }}
            >
                <SkillSet section={section} />
            </div>

        </div>
    );
};

export default Skills;

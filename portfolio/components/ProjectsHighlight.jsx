'use client';

import React, { useState } from 'react';
import GlitchText from '@/components/GlitchText';
import Navigator from '@/components/Navigator';
import Link from 'next/link';

const ProjectsHighlight = ( {reference, section } ) => {
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        { name: 'Web Builder', description: 'Collaborative development of a website builder platform.', link: 'https://github.com/ethanvillalobos8/folio' },
        { name: 'Mobile', description: 'Development of mobile applications including a barcode scanner for inventory management and a social media app utilizing AI.', link: 'https://github.com/ethanvillalobos8/swift-scan' },
        { name: 'AI/ML', description: 'Projects involving artificial intelligence and machine learning, including deck-building algorithms and data analysis on railway safety.', link: 'https://github.com/ethanvillalobos8/summer-REU-project/tree/main/Ethan' },
        { name: 'E-Commerce', description: 'Creation of an e-commerce platform for business integration and sticker selling.', link: 'https://github.com/ethanvillalobos8/okamiofcl-website' },
        { name: 'Resource Hub', description: 'A simple resource hub for saving and managing web links.', link: 'https://github.com/ethanvillalobos8/source-hub' }
    ];    

    return (
        <div ref={reference} id="projects" className="items-center bg-black text-zinc-50 flex w-screen h-screen py-10">
            <div>
            <Navigator currentPage={section} />
            <div className="w-full">
                <GlitchText />
                {projects.map((project, index) => (
                    <div
                        key={project.name}
                        onMouseEnter={() => setActiveProject(project.name)}
                        onMouseLeave={() => setActiveProject(null)}
                        className={`relative text-5xl md:text-6xl lg:text-8xl leading-none font-semibold cursor-pointer w-screen 
                        ${index === projects.length - 1 ? 'border-y-2' : 'border-t-2'} border-zinc-900`}
                    >
                        <div className="relative px-10 md:px-20 lg:px-40 w-full z-10">
                            {/* Pseudo-element for background effect */}
                            <div
                                className={`absolute top-1/2 left-0 w-full transition-all duration-500 ease-out ${activeProject === project.name ? 'h-full' : 'h-0'} bg-[#f4d160]`}
                                style={{ transform: 'translateY(-50%)' }}
                            ></div>
                            <div className="relative flex flex-row justify-between w-full">
                                <Link href={project.link} className={`self-center uppercase transition-colors duration-500 ${activeProject === project.name ? 'text-[#030204]' : 'text-zinc-50'}`}>
                                    {project.name}
                                </Link>
                                <div className={`hidden md:flex w-80 items-center justify-end transition-opacity duration-500 ${activeProject === project.name ? 'opacity-100' : 'opacity-0'}`}>
                                    <p className={`transition-colors duration-500 ${activeProject === project.name ? 'text-[#030204]' : 'text-zinc-50'} text-xs text-justify font-normal`}>{project.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default ProjectsHighlight;

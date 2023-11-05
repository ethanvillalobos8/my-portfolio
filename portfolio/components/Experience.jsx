'use client';

import React, { useState, useEffect } from 'react';
import Navigator from '@/components/Navigator';

const Experience = ( { reference, section } ) => {
    const [activeProject, setActiveProject] = useState(null);
    const [previousActiveProject, setPreviousActiveProject] = useState(null);

    const experiences = [
        { year: 'Now', title: 'Research Assistant - ML', company: 'The University of Texas Rio Grande Valley', description: 'Engaged in research focused on railway safety using regression models for predictive analysis. Skills in Machine Learning, Technical Writing, and Python are being honed.' },
        { year: '2023', title: 'UTCRS Research Collaborator - Graph, Cluster', company: 'University of California, Riverside', description: 'Participated in graph mining and segmentation-based object categorization research with applications in transportation safety, improving communication, data analysis, and Python programming.' },
        { year: '2022', title: 'Information Systems Intern', company: 'IDEA Public Schools', description: 'Analyzed data for executive-level reporting and decision-making, with a strong emphasis on improving STEM program integration. Enhanced skills in Python, PowerSchool, TREx, analytical thinking, and Excel.' },
        { year: '2021', title: 'Career Success Data Analyst', company: 'IDEA Public Schools', description: 'Developed key insights into career success metrics to influence program development and funding, utilizing strong data analysis and communication skills.' },
        { year: '2017', title: 'Senior Web & Design Manager', company: 'South Texas Ideas (STXi)', description: 'Oversaw website redesign, enhancing user experience and increasing website traffic by over 50%, which tripled funding through donations and sponsorships. Skills in project management, Bootstrap, CSS, HTML, and JavaScript scripting were developed.' },
    ];

    useEffect(() => {
        let timeoutId;
        if (previousActiveProject) {
            timeoutId = setTimeout(() => {
                setPreviousActiveProject(null);
            }, 500);
        }
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [previousActiveProject]);      

    return (
        <div ref={reference} id="experience" className="flex flex-col items-center bg-black text-zinc-50 w-screen h-screen pt-20 pb-20">
            <Navigator currentPage={section} />
            <div className="w-full justify-center">
                <div className="pb-10 px-40 tracking-[.40em] text-zinc-100 text-sm uppercase opacity-75">
                    Experience
                </div>
                {experiences.map((experience, index) => (
                    <div
                        key={experience.year}
                        onMouseEnter={() => setActiveProject(experience.year)}
                        onMouseLeave={() => setActiveProject(null)}
                        className={`relative text-5xl leading-none font-semibold cursor-pointer w-full 
                        ${index === experiences.length - 1 ? 'border-y-2' : 'border-t-2'} border-zinc-900 transition-all duration-500`}
                    >
                        <div
                            key={experience.year}
                            onMouseEnter={() => {
                                setPreviousActiveProject(activeProject);
                                setActiveProject(experience.year);
                            }}
                            onMouseLeave={() => {
                                setTimeout(() => {
                                    setPreviousActiveProject(null);
                                }, 500);
                                setActiveProject(null);
                            }}
                            className={`flex items-center px-40 w-full h-32 ${activeProject === experience.year ? 'transition ease-in-out duration-500 bg-[#c8debf] text-[#030204]' : 'transition ease-in-out duration-500 bg-[#030204] text-zinc-50'}`}>
                            <div className="w-1/5">
                                {experience.year}
                            </div>
                            {activeProject &&
                                <div className={`${activeProject === experience.year ? 'fadeInExpand' : (previousActiveProject === experience.year ? 'fadeOutContract' : 'hidden')}`}>
                                    <p className="text-xs text-justify space-x-4 font-normal whitespace-normal">
                                        {experience.description}
                                    </p>
                                </div>
                            }
                            <div className="w-2/5 text-sm font-normal" style={{ transform: activeProject === experience.year ? 'translateX(6rem)' : 'translateX(0)' }}>
                                <p className='text-4xl font-semibold'>{experience.title}</p>
                                <p>{experience.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
'use client';

import Splash from '../components/Splash';
import Skills from '@/components/Skills';
import Navigator from '@/components/Navigator';
import ProjectsHighlight from '@/components/ProjectsHighlight';
import Experience from '@/components/Experience';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaTiktok } from "react-icons/fa";

const sentences = [
    "and I'm an aspiring software engineer.",
    'and I love solving complex problems.',
    'and I enjoy building eloquent projects.',
    'and I have a passion for programming.',
];

const Home = () => {
    const [currentSection, setCurrentSection] = useState('home');
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const experienceRef = useRef(null);

    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);
    const [currentSentence, setCurrentSentence] = useState(sentences[index]);
    const [delay, setDelay] = useState(true);
    const [typing, setTyping] = useState(true);  
    
    const onScroll = () => {
        const scrollPos = window.scrollY;
        const skillsPos = skillsRef.current.offsetTop;
        const projectsPos = projectsRef.current.offsetTop;
        const experiencePos = experienceRef.current.offsetTop;

        if (scrollPos >= experiencePos) {
            setCurrentSection('experience');
        } else if (scrollPos >= projectsPos) {
            setCurrentSection('projects');
        } else if (scrollPos >= skillsPos) {
            setCurrentSection('skills');
        } else {
            setCurrentSection('home');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        let timeoutId;
        if (!delay) {
            timeoutId = setTimeout(() => {
                if (typing) {
                    if (currentSentence.length === sentences[index].length) {
                        setTimeout(() => setTyping(false), 1500);
                    } else {
                        setCurrentSentence(
                            sentences[index].slice(0, currentSentence.length + 1)
                        );
                    }
                } else {
                    setCurrentSentence(currentSentence.slice(0, -1));
                    if (currentSentence === 'and ') {
                        setIndex((index + 1) % sentences.length);
                        setTyping(true);
                    }
                }
            }, 50);
        } else {
            timeoutId = setTimeout(() => {
                setDelay(false);
            }, 6000);
        }
        return () => clearTimeout(timeoutId);
    }, [currentSentence, delay, index, typing]);      

    useEffect(() => {
        // Simulate a long initial load (for demo purposes only)
        setTimeout(() => setLoading(false), 1000);
    }, []);

    if (loading) {
        return <Splash />;
    }

    return (
        <main id="backgroundImage" className="home snap-y snap-mandatory">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-screen bg-[#030204]">
                <Navigator currentPage={currentSection} />
                <div className='flex flex-col w-full md:mb-20'>
                    <div className="w-2/3 ml-12 mt-12 md:mb-12 lg:mb-0 text-3xl md:text-4xl lg:text-5xl text-zinc-100 justify-center" style={{ fontFamily: 'museoBold' }}>
                        <button onClick={() => {document.getElementById("skills").scrollIntoView({behavior: 'smooth'})}} className='md:hover:translate-x-6 md:hover:text-5xl lg:hover:text-6xl md:hover:text-[#af70b3] md:transition-all md:duration-300 md:ease-in-out'>SKILLS</button>
                        <br></br>
                        <button onClick={() => {document.getElementById("projects").scrollIntoView({behavior: 'smooth'})}} className='md:hover:translate-x-6 md:hover:text-5xl lg:hover:text-6xl md:hover:text-[#f4d160] md:transition-all md:duration-300 md:ease-in-out'>PROJECTS</button>
                        <br></br>
                        <button onClick={() => {document.getElementById("experience").scrollIntoView({behavior: 'smooth'})}} className='md:hover:translate-x-6 md:hover:text-5xl lg:hover:text-6xl md:hover:text-[#c8debf] md:transition-all md:duration-300 md:ease-in-out'>EXPERIENCE</button>
                    </div>
                    <section className="h-full w-full flex flex-row items-center justify-center py-12 lg:py-0">
                        <div className='w-2/3'>
                            <div className='grid content-center'>
                                <p className="pb-2 text-xs lg:text-sm font-sans tracking-[.30em] text-[#fff9e6]">
                                    Hi, my name is
                                </p>
                                <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-wider text-zinc-50 uppercase" style={{ fontFamily: 'museoBold' }}>Ethan Villalobos</h1>
                                <p className="flex max-[500px]:h-[52px] font-sans text-lg lg:text-2xl text-zinc-300">
                                    { currentSentence }
                                </p>
                                <br></br>
                                <p className="w-full text-justify text-sm font-sans text-zinc-50">
                                    Transforming innovative ideas into exceptional digital experiences - As an aspiring full-stack software 
                                    engineer with a passion for creativity, I bring a unique blend of technical skills and artistic vision 
                                    to every project; I strive to deliver cutting-edge solutions with seamless functionality and stunning design.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='flex flex-col w-full h-full items-center justify-center bg-heroBg'>
                    <div className='grid content-center w-full h-full'>
                        <div className='flex flex-row lg:flex-col w-full justify-center items-center p-2'>
                            <Link className='p-4' href={'https://www.linkedin.com/in/ethanvillalobos/'}>
                                <AiFillLinkedin className="hover:text-white text-3xl text-modifier transition-all duration-300 ease-in-out text-zinc-50" />
                            </Link>
                            <Link className='p-4' href={'https://github.com/ethanvillalobos8'}>
                                <AiFillGithub className="hover:text-white text-3xl text-modifier transition-all duration-300 ease-in-out text-zinc-50" />
                            </Link>
                            <Link className='p-4' href={'https://www.tiktok.com/@ethanvillalobos8'}>
                                <FaTiktok className="hover:text-white text-2xl text-modifier transition-all duration-300 ease-in-out text-zinc-50" />
                            </Link>
                        </div>
                    </div>
                    <div className='grid content-end w-full h-fit'>
                        <img src="/images/heat-map-ow-min.png" />
                    </div>
                </div>
            </div>
            <Skills reference={skillsRef} section={currentSection} />
            <ProjectsHighlight reference={projectsRef} section={currentSection} />
            <Experience reference={experienceRef} section={currentSection} />
        </main>
    );
};

export default Home;
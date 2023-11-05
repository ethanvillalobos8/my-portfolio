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
import { AiOutlineTwitter } from "react-icons/ai";

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
        <main id="backgroundImage" className="home">
            <div className="grid grid-cols-2 min-h-screen w-screen bg-[#030204] snap-y snap-mandatory">
                <Navigator currentPage={currentSection} />
                <div className='flex flex-col mb-20'>
                    <div className="w-2/3 ml-12 mt-12 text-5xl text-zinc-100 justify-center" style={{ fontFamily: 'museoBold' }}>
                        <button onClick={() => {document.getElementById("skills").scrollIntoView({behavior: 'smooth'})}} className='hover:translate-x-6 hover:font-bold hover:text-[#af70b3] transition-all duration-300 ease-in-out'>SKILLS</button>
                        <br></br>
                        <button onClick={() => {document.getElementById("projects").scrollIntoView({behavior: 'smooth'})}} className='hover:translate-x-6 hover:font-bold hover:text-[#f4d160] transition-all duration-300 ease-in-out'>PROJECTS</button>
                        <br></br>
                        <button onClick={() => {document.getElementById("experience").scrollIntoView({behavior: 'smooth'})}} className='hover:translate-x-6 hover:font-bold hover:text-[#c8debf] transition-all duration-300 ease-in-out'>EXPERIENCE</button>
                    </div>
                    <section className="h-full w-full flex flex-row items-center justify-center">
                        <div className="grid grid-cols-1 w-2/3 self-center">
                            <div className='grid content-center'>
                                <p className="pb-2 font-sans text-sm text-[#fff9e6]">
                                    Hi, my name is
                                </p>
                                <h1 className="text-4xl tracking-widest text-zinc-50" style={{ fontFamily: 'museo' }}>Ethan Villalobos</h1>
                                <p className="font-sans text-2xl text-zinc-300">
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
                <div className='flex flex-col w-full h-full bg-heroBg'>
                    <div className='grid content-center w-full h-full'>
                        <div className='flex flex-col w-full items-center space-y-8'>
                            <Link href={'https://www.linkedin.com/in/ethanvillalobos/'}>
                                <AiFillLinkedin className="hover:text-white text-3xl text-modifier transition-all duration-300 ease-in-out text-zinc-50" />
                            </Link>
                            <Link href={'https://github.com/ethanvillalobos8'}>
                                <AiFillGithub className="hover:text-white text-3xl text-modifier transition-all duration-300 ease-in-out text-zinc-50" />
                            </Link>
                            <AiOutlineTwitter className="hover:text-white text-3xl text-zinc-50" />
                        </div>
                    </div>
                    <div className='grid content-end w-full h-full'>
                        <img src="/images/heat-map-ow.png" />
                    </div>
                </div>
            </div>
            {/* <Skills id="skills" /> */}
            <div ref={skillsRef} id="skills">Skills Section</div>
            <ProjectsHighlight reference={projectsRef} section={currentSection} />
            <Experience reference={experienceRef} section={currentSection} />
        </main>
    );
};

export default Home;
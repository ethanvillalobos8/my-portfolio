'use client';

import Splash from '../components/Splash';
import Skills from '@/components/Skills';
import { useEffect, useState } from 'react';

const sentences = [
    "and I'm an aspiring software engineer.",
    'and I love solving complex problems.',
    'and I enjoy building eloquent projects.',
    'and I have a passion for programming.',
];

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);
    const [currentSentence, setCurrentSentence] = useState(sentences[index]);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            if (typing) {
                if (currentSentence.length === sentences[index].length) {
                    setTimeout(() => setTyping(false), 1000);
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
    }, [currentSentence, index, typing]);

    useEffect(() => {
        // Simulate a long initial load (for demo purposes only)
        setTimeout(() => setLoading(false), 1000);
    }, []);

    if (loading) {
        return <Splash />;
    }

    return (
        <main id="backgroundImage" className="home">
            <div className="grid grid-cols-2 min-h-screen w-screen bg-[#030204]">
                
                <div className='flex flex-col mb-20'>
                    <div className="w-2/3 ml-12 mt-12 text-5xl text-zinc-100 justify-center" style={{ fontFamily: 'museoBold' }}>
                        <button className='hover:translate-x-6 hover:font-bold hover:text-[#af70b3] transition-all duration-300 ease-in-out'>SKILLS</button>
                        <br></br>
                        <button className='hover:translate-x-6 hover:font-bold hover:text-[#f4d160] transition-all duration-300 ease-in-out'>PROJECTS</button>
                        <br></br>
                        <button className='hover:translate-x-6 hover:font-bold hover:text-[#c8debf] transition-all duration-300 ease-in-out'>EXPERIENCE</button>
                    </div>
                    <section className="h-full w-full flex flex-row items-center justify-center">
                        <div className="grid grid-cols-1 w-2/3 self-center">
                            <div className='grid content-center'>
                                <p className="pb-2 font-sans text-sm text-[#fff9e6]">
                                    Hi, my name is
                                </p>
                                <h1 className="text-4xl text-zinc-50" style={{ fontFamily: 'museo' }}>Ethan Villalobos</h1>
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
            <Skills id="skills" />
        </main>
    );
};

export default Home;
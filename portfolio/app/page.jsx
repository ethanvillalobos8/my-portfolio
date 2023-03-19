'use client';

import Splash from '../components/Splash';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineTwitter } from "react-icons/ai";

const sentences = [
    'and I love solving complex problems.',
    "and I'm an aspiring software engineer.",
    'and I enjoy building cool projects.',
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
    }, [currentSentence, index, typing]);

    useEffect(() => {
        // Simulate a long initial load (for demo purposes only)
        setTimeout(() => setLoading(false), 2000);
    }, []);

    if (loading) {
        return <Splash />;
    }

    return (
        <main id="backgroundImage" className="grid grid-cols-1 min-h-screen w-screen bg-heroB home">
            <div className="self-center w-2/3 ml-8 mt-8 text-4xl text-zinc-50 justify-center" style={{ fontFamily: 'museoBold' }}>
            <p>SKILLS</p><p>PROJECTS</p><p>EXPERIENCES</p>
            </div>
            <section className="h-screen w-screen flex flex-row items-center justify-center pb-64">
                <div className="grid grid-cols-2 w-2/3 self-center">
                    <div className='grid content-center'>
                        <p className="pb-2 font-sans text-sm text-[#e2d2c4]">
                            Hi, my name is
                        </p>
                        <h1 className="font-museo text-4xl text-zinc-50" style={{ fontFamily: 'museo' }}>Ethan Villalobos.</h1>
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
                    <div className='grid'>
                        <img className="w-72 h-72 border-4 place-self-center drop-shadow-xl" src="/images/headshot2.png" />
                    </div>
                </div>
                <div className="flex justify-end items-center">
                    <div>
                        <Link href={'https://www.linkedin.com/in/ethanvillalobos/'}>
                            <AiFillLinkedin className="hover:text-[#b8a3bd] text-3xl text-zinc-50" />
                        </Link>
                        <br></br>
                        <Link href={'https://github.com/ethanvillalobos8'}>
                            <AiFillGithub className="hover:text-[#b8a3bd] text-3xl text-zinc-50" />
                        </Link>
                        <br></br>
                        <AiOutlineTwitter className="hover:text-[#b8a3bd] text-3xl text-zinc-50" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
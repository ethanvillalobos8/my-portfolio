'use client';

import Splash from '../components/Splash';
import { useEffect, useState } from 'react';

const sentences = [
    "and I'm an aspiring software engineer.",
    'and I love solving complex problems.',
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
        setTimeout(() => setLoading(false), 4000);
    }, []);

    if (loading) {
        return <Splash />;
    }

    return (
        <main className="grid grid-cols-1 min-h-screen w-screen bg-[#0C090A]">
        <section className="h-screen w-screen flex items-center justify-center home">
            <div className="flex flex-col w-1/2 self-center">
            <p className="pb-2 font-sans text-sm text-[#e2d2c4]">
                Hi, my name is
            </p>
            <h1 className="font-museo text-4xl text-zinc-50" style={{ fontFamily: 'museo' }}>Ethan Villalobos.</h1>
            <p className="font-sans text-2xl text-zinc-300">
                { currentSentence }
            </p>
            <br></br>
            <p className="font-sans text-zinc-50">
                I'm currently working on a few projects.
            </p>
            </div>
        </section>
        </main>
    );
};

export default Home;
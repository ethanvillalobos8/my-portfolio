'use client'

import React, { useState, useEffect } from 'react';

const GlitchText = () => {
    const [text, setText] = useState('DONE');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setText((prevText) => (prevText === "I'VE DONE" ? "I'M DOING" : "I'VE DONE"));
        }, 2100); // switch every 2 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="pb-10 px-10 md:px-20 lg:px-40 tracking-[.40em] text-zinc-100 text-sm uppercase opacity-75">
            What <span className="glitch">{text}</span>
            <p className="lowercase tracking-widest font-thin text-zinc-400">(at least the cool stuff, anyway.)</p>
        </div>
    );
};

export default GlitchText;

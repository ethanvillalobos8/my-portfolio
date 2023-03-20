import { SiJavascript } from "react-icons/si";
import { SiPocketbase } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BsGit } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

const Skills = () => {
    return (
        <section className="grid grid-cols-4 items-center justify-center w-screen h-screen">
            <div className="flex flex-col items-center justify-center w-full h-full bg-heroBg rotate-180">
                <div className="flex flex-col">
                    <div className="flex flex-col text-zinc-50 items-center justify-center h-full w-40">
                        <p className="self-center text-3xl rotate-180 tracking-widest" style={{ fontFamily: 'museoBold' }}>SKILLS</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full h-2/3 place-self-center justify-center col-span-3"> 
                <div className="flex flex-col w-2/3 h-full self-center">
                    <p className="flex items-center self-start text-2xl text-zinc-50 tracking-wide" style={{ fontFamily: 'museoBold' }}>FRONTEND</p>
                    <div className="grid grid-cols-4 content-center self-center sm:grid-cols-4 w-full h-full pb-8">
                        <div className="flex flex-row items-center text-xs font-bold justify-center text-zinc-50 p-6">
                            <SiJavascript className="inline-block text-4xl mr-3 rounded-sm" />
                            JAVASCRIPT
                        </div>
                        <div className="flex flex-row items-center text-xs font-bold justify-center text-zinc-50 p-6">
                            <SiReact className="inline-block mr-3 text-4xl" />
                            REACT
                        </div>
                        <div className="flex flex-row items-center text-xs font-bold justify-center text-zinc-50 p-6">
                            <SiTailwindcss className="inline-block mr-3 text-4xl" />
                            TAILWIND CSS
                        </div>
                        <div className="flex flex-row items-center text-xs font-bold justify-center text-zinc-50 p-6">
                            <SiNextdotjs className="inline-block mr-3 text-4xl" />
                            NEXT.js
                        </div>
                    </div>
                    <p className="flex items-center self-start text-2xl text-zinc-50 tracking-wide" style={{ fontFamily: 'museoBold' }}>BACKEND</p>
                    {/* <img className="flex items-center self-start text-5xl text-zinc-50 tracking-wide mb-8 scale-[.35]" src='/images/skills.png' /> */}
                    <div className="grid grid-cols-4 content-center self-center sm:grid-cols-4 w-full h-full">
                        <div className="flex flex-row w-full items-center text-xs font-bold justify-center text-zinc-50 p-6">
                            <SiPocketbase className="inline-block mr-3 text-4xl" />
                            POCKETBASE
                        </div>
                        <div className="flex flex-row items-center text-xs font-bold justify-center text-zinc-50 p-6">
                            <SiNodedotjs className="inline-block mr-3 text-4xl" />
                            NODE.js
                        </div>
                        <div className="flex flex-row items-center text-xs font-bold justify-center text-zinc-50 p-6">
                            <GrMysql className="inline-block mr-3 text-4xl" />
                            MySQL
                        </div>
                        <div className="flex flex-row items-center text-xs font-bold justify-center text-zinc-50 p-6">
                            <BsGit className="inline-block mr-3 text-4xl" />
                            GIT
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
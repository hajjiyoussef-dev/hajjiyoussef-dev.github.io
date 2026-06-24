// import { useState } from "react";

import { FileText, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { TypingText } from "./TypingText";
import { MatrixRain } from './MatrixRain';
// import { NavBar } from './NavBar';



export function Hero() {

    // const [isBarOpen, setBarOpen] = useState(false);
    const scrollToProjects = () => { 
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        
        <section className=" relative min-h-screen flex items-center justify-center overflow-hidden ">
            
            <MatrixRain />
            {/* <NavBar isBarOpen={isBarOpen} onToggle={() => setBarOpen(!isBarOpen)} /> */}
            <div className="fixed top-0 left-0 right-0 h-[3px] overflow-hidden z-20">
                <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: '-100vw' }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: 'linear' }}
                    className="h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                />
            </div>
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="mb-6">
                        <span className="block text-6xl md:text-8xl lg:text-9xl neon-text glitch-text tracking-wider">
                        {/* <span className="animate-pulse text-cyan-400">|</span> */}
                             <TypingText  text="YOUSSEF HAJJI" speed= {120} restartDelay={55000} />
                        </span> 
                    </h1>

                    <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.3 ,duration : 0.8}}
                        className="mb-8"
                    >
                    
                        <p className="text-x1 md:text-2xl lg:text-2xl neon-text-sm text-cyan-400 mb-2 " > Software Developer | Full Stack Developer </p>
                        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto" >
                            Crafting systems in <span className="text-purple-400"> C </span>, <span className="text-purple-400" > C++ </span>, <span className="text-purple-400">Java</span> & <span className="text-purple-400">Spring Boot</span>
                        </p>
                        <p className="text-sm md:text-base text-gray-500 mt-2" >
                            1337/42 Network
                        </p>
                    </motion.div>
                    <motion.dev
                        initial= {{opacity: 0, y: 20}}
                        animate= {{opacity: 1, y: 0}}
                        transition={{delay: 0.6 , duration: 0.8}}
                        className="flex flex-clo sm:flex-row gap-4 justify-center items-center"
                    >
                        <button
                            onClick={scrollToProjects} 
                            className="  group relative px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 overflow-hidden hover:text-black transition-colors duration-300 w-full sm:w-auto">
                            <span className="relative z-10 flex items-center justify-center gap-2" >
                                < Briefcase  className="w-5 h-5" />
                                PROJECT 
                            </span>
                            <div className="absolute inset-0 bg-cyan-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                            <div className="absolute inset-0 shadow-[0_0_20px_rgba(6,182,212,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-[10px] my-[0px]" />
                        </button>

                        <button
                            className="  group relative px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 overflow-hidden hover:text-black transition-colors duration-300 w-full sm:w-auto">
                            <span className="relative z-10 flex items-center justify-center gap-2 ">
                                < FileText className="w-5 h-5" />
                                RESUME
                            </span>
                            <div className="absolute inset-0 bg-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                            <div className="absolute inset-0 shadow-[0_0_20px_rgba(168,85,247,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </motion.dev>
                </motion.div>
            <div className="relative p-8 grid h-56 grid-cols-3 place-items-center gap-4">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1, duration: 0.8}}
                    className=" absolute bottom-4 left-1/2 transform -translate-x-1/2"
                >
                <motion.div
                    animate={{y:[0, 10, 0]}}
                    transition={{repeat: Infinity, duration: 2}}
                    className="w-6 h-10 border-2 border-cyan-500 rounded-full flex items-start justify-center p-2"

                >
                    <motion.div className="w-1 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                </motion.div>

                </motion.div>
            </div>
            </div>
            
        </section>
    );
}
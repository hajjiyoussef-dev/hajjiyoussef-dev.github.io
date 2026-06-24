
import { motion, AnimatePresence } from "motion/react";
import {celebrateVictory} from "./celebration";
import { EmailContact } from "./EmailContact";
import { useState } from "react";


export function NavBar({isBarOpen, onToggle}) {

    const [emailOpen, setEmailOpen] = useState(false);

    const scrollToProjects = () => { 
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="absolute top-12 right-7 sm:top-12 sm:right-10 z-50">
            <div className="relative w-2 h-2 sm:w-16 sm:h-16">
                <motion.button
                    onClick={onToggle}
                    className=" absolute w-12 h-12 sm:w-14 sm:h-14 bg-black  flex items-center justify-center rounded-2xl  shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    whileHover={{scale: 1.1}}
                    animate={{rotate: isBarOpen ? 45 : 0, x: 10, y: 30}}
                    whileTap={{scale: 0.9}}
                >
                    <img
                        src="/app2.png"
                        alt="menu"
                        className="w-7 h-7 sm:w-8 sm:h-8"
                    />
                </motion.button>
                <AnimatePresence mode="wait">
                    {isBarOpen && (
                        <>
                            <motion.div
                                initial={{opacity: 0, scale: 0, x: 0 , y: 0}}
                                animate={{opacity: 1, scale: 1, x: -60, y: -40}}
                                exit={{opacity: 0, scale: 0, x: 0, y: 0}}
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                onClick={scrollToProjects}
                                transition={{type: "spring", stiffness: 200}}
                                className="absolute w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg"
                            >
                                <img
                                    src="/project.png"
                                    alt="project ico"
                                    className=" w-10 h-10 sm:w-11 sm:h-11 text-white"
                                />
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0, scale: 0}}
                                onClick={celebrateVictory}
                                exit={{opacity: 0, scale: 0}}
                                whileHover={{scale: 1.1}}
                                transition={{type: "spring", stiffness: 200, delay: 0.05}}
                                whileTap={{scale: 0.9}}
                                animate={{opacity: 1, scale: 1, x: -90, y: 30}}
                                className="absolute w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg"
                            >
                                <img
                                    src="/strategy.png"
                                    alt= "yhajji logo"
                                    className="w-10 h-10 sm:w-11 sm:h-11 text-white"
                                />
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1, x: -60, y: 100}}
                                exit={{opacity: 0, scale: 0}}
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                onClick={() => setEmailOpen(true)}
                                transition={{type: "spring", stiffness: 200, delay: 0.1}}
                                className="absolute w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg"
                            >
                                <img 
                                    src="/email.png"
                                    alt="email logo"
                                    className="w-10 h-10 sm:w-11 sm:h-11 text-white"
                                />
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {emailOpen && (
                        <EmailContact 
                            isContactOpen={emailOpen}
                            onToggleContact={() => setEmailOpen(false)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
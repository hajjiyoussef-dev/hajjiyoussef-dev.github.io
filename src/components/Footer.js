import {Github , Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer () {

    const currentYear = new Date().getFullYear();
    return (
        <footer className="relative py-12 px-4 border-t border-cyan-500/20">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center gap-6">
                    <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                    className="flex gap-6"
                    >
                        <a 
                        href="https://github.com/hajjiyoussef-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-800/50 border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                        >
                            <Github className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300"/>
                        </a>
                        <a 
                        href="https://www.linkedin.com/in/youssef-hajji-70383b267/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-800/50 border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                        >
                            <Linkedin className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300"/>
                        </a>
                        <a
                        href="mailto:hajjiyoussef016@gmail.com"
                        className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-800/50 border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                        >
                            <Mail className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                        </a>
                    </motion.div>
                    <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center space-y-2"
                    >
                        <p className="text-gray-400 text-sm">
                        &copy; {currentYear} — <span className="text-cyan-400">Yhajji</span>
                        </p>
                        <p className="text-gray-500 text-xs flex items-center justify-center gap-1">
                        Built with <Heart className="w-3 h-3 text-purple-400 fill-purple-400" /> and{' '}
                        <span className="text-cyan-400">React</span>
                        </p>
                    </motion.div>
                     <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <p className="text-xs text-gray-600 font-mono">
                        &lt;/&gt; 1337/42 Network Graduate
                        </p>
                    </motion.div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[3px] overflow-hidden">
                <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: '100vw' }}
                transition={{
                    repeat: Infinity,
                    duration: 4.5,
                    ease: 'linear',
                }}
                className="h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                />
            </div>
        </footer>
    );
}
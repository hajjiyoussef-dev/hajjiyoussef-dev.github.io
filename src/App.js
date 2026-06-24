import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { motion } from "motion/react";
import { ChatbotAssistant } from "./components/ChatbotAssistant";

import { NavBar } from "./components/NavBar"

import { useState } from "react";

export function App()
{
    const [ isChatOpen, setChatOpen] = useState(false);
    const [isBarOpen, setBarOpen] = useState(false);
    
    return(

        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <div className="fixed top-0 bottom-0 left-0 w-[3px] overflow-hidden z-20">
                <motion.div
                initial={{ y: '-100vh' }}
                animate={{ y: '100vh' }}
                transition={{
                    repeat: Infinity,
                    duration: 4.5,
                    ease: 'linear',
                }}
                className="w-full h-1/3 bg-gradient-to-b from-transparent via-purple-400 to-transparent shadow-[0_0_16px_rgba(192,132,252,0.8)]"
                />
            </div>
            <div className="fixed top-0 bottom-0 right-0 w-[3px] overflow-hidden z-20">
                <motion.div
                initial={{ y: '100vh' }}
                animate={{ y: '-100vh' }}
                transition={{
                    repeat: Infinity,
                    duration: 4.5,
                    ease: 'linear',
                }}
                className="w-full h-1/3 bg-gradient-to-b from-transparent via-purple-400 to-transparent shadow-[0_0_16px_rgba(192,132,252,0.8)]"
                />
            </div>
            <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none" ></div>
                <NavBar isBarOpen={isBarOpen} onToggle={() => setBarOpen(!isBarOpen)} />
                <Hero />
                <About />
                <Projects />
                <Footer />
                <ChatbotAssistant isOpen={isChatOpen} onToggle={() => setChatOpen(!isChatOpen) } />

        </div>

    );
}
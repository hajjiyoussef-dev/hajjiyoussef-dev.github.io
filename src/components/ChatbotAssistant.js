// import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Bot, User, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";


const initialMessage = [
    {
        id: "1",
        text: "Hello! I'm Yhajji's AI assistant. Ask me about his projects, skills, or experience.",
        time: new Date(),
        sender: "bot",
    },
]

export function ChatbotAssistant({isOpen, onToggle}) {

    const [message, setMessages] = useState(initialMessage);
    const [isTyping, setIsTyping] = useState(false);
    const messageEndRef = useRef(null);
    const [inputValue, setInputValue] = useState("");

    const scrollToBottom = () =>{
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [message, isTyping]);

    const fetchBotReply = async (message) =>{

        try {
            
            const res = await fetch("http://localhost:8080/api/chat", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({message: message}),
            });
            const data = await res.json();
            // console.log("RAW RESPONSE:", data);
            return data.reply;
        } catch (error) {
            return "Sorry, the assistant is currently unavailable."
        }
    };


    const handleSend = async () => {

        if (!inputValue.trim()) return ;

        const userMessage = 
        {
            id: Date.now().toString(),
            text: inputValue,
            time: new Date(),
            sender: "user",
        };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        const reply = await fetchBotReply(inputValue);
        // console.log("BOT REPLY:", reply);

        const BotMessage ={
            id: (Date.now() + 1).toString(),
            text: reply,
            time: new Date(),
            sender: "Bot",
        }
        setMessages((prev) => [...prev, BotMessage]);
        setIsTyping(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter"){
            e.preventDefault();
            handleSend();
        }
    }

    return (
        <>
            <motion.button
                onClick={onToggle}
                className="fixed bottom-6 right-2 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.8)] transition-shadow duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={
                isOpen ? { rotate: 0 }
                    : {
                        rotate: [0, 10, -10, 10, 0],
                        transition: {
                        repeat: Infinity,
                        duration: 3,
                        repeatDelay: 3,
                        },
                    }
                }
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                        <X className="w-8 h-8 text-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                        <MessageCircle className="w-8 h-8 text-white" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-28 right-1 lg:right-6 w-full max-w-md z-40"
                    
                    >
                        <div className="glass-card overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)] border-2 border-cyan-500/30 h-[600px] max-h-[80vh] flex flex-col mx-4 sm:mx-0" >
                            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-6 py-4 border-b border-cyan-500/30">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                                        <Bot className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className=" text-cyan-400 font-semibold">
                                            AI Assistant
                                        </h3>
                                        <p className="text-gray-400 text-xs">
                                            Online
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className=" flex-1 overflow-y-auto p-5 space-y-4">
                                {message.map((msg) =>(
                                    <div
                                    key={msg.id}
                                    className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse": ""}`}
                                    > 
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center" > 
                                            {msg.sender === "bot" ?
                                            (<Bot className="w-4 h-4 text-white"/>)
                                            : (
                                                <User className="w-4 h-4 text-white" />
                                            )}
                                        </div>
                                        <div className="max-w-[75%]">
                                            <div className="px-4 py-3 rounded-xl bg-gray-800/60 border border-cyan-500/20 text-gray-200 text-sm">
                                                {msg.text}
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {msg.time.toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex gap-3"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                                            <Bot className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="px-4 py-3 rounded-2xl bg-gray-800/50 border border-cyan-500/30">
                                            <div className="flex gap-1">
                                                <motion.div
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 0.6,
                                                    delay: 0,
                                                }}
                                                className="w-2 h-2 bg-cyan-400 rounded-full"
                                                />
                                                <motion.div
                                                    animate={{ y: [0, -5, 0] }}
                                                    transition={{
                                                        repeat: Infinity,
                                                        duration: 0.6,
                                                        delay: 0.2,
                                                    }}
                                                    className="w-2 h-2 bg-cyan-400 rounded-full"
                                                />
                                                <motion.div
                                                    animate={{ y: [0, -5, 0] }}
                                                    transition={{
                                                        repeat: Infinity,
                                                        duration: 0.6,
                                                        delay: 0.4,
                                                    }}
                                                    className="w-2 h-2 bg-cyan-400 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                    
                                )}
                                <div ref={messageEndRef} />
                            </div>
                            
                            <div className="p-4 border-t border-cyan-500/30">
                                <div className=" flex gap-2">
                                    <input 
                                       value={inputValue}
                                       onChange={(e) => setInputValue(e.target.value)}
                                       onKeyDown={handleKeyPress}
                                       className="flex-1 bg-gray-800/60 border border-cyan-500/30 rounded-full px-4 py-3 text-gray-200 outline-none"
                                    />
                                    <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                    className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-shadow duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Send className="text-white w-5 h-5"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
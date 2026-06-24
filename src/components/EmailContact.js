import { Mail } from "lucide-react"

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {celebrateVictory} from "./celebration";

export function EmailContact ({isContactOpen, onToggleContact}){

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [status, setStatus] = useState(null);


    if (!isContactOpen)
        return (null);


    const handlechange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };

    const SendEmail = (e) => {

        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim() ||
        !formData.email.trim() ||
        !formData.message.trim()) {
            setStatus("error");
            return;
        }

        
        if (!emailRegex.test(formData.email)){
            setStatus("error");
            return; 

        }

        setStatus("loading");

        emailjs.send(
            "service_m9qmavg",
            "template_pjyiia3",
            formData,
            "IG8RIbnnrlfyEoc5Z"
        )
        .then(() => {
            setStatus("success");

            setTimeout(() => {
                setStatus(null);
                onToggleContact();
            }, 2000);
            celebrateVictory();
        }
        ).catch ((error) => {
            console.error(error);
            setStatus("error");
        });
    };


    return (

        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={onToggleContact}
            >
                {isContactOpen && (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar glass-card border-2 border-cyan-500/30"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="glass-card overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)] border-2 border-cyan-500/30 h-[600px] max-h-[80vh] flex flex-col mx-4 sm:mx-0">
                            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-6 py-4 border-b border-cyan-500/30">
                                <div className="flex items-center gap-3">
                                    < Mail className="w-6 h-6 text-white" />
                                    <h3 className="text-lg font-semibold text-white">
                                        Contact Me
                                    </h3>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 p-6">

                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-white mb-2">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handlechange}
                                    placeholder="Your Name"
                                    className="w-full rounded-md bg-white/5 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value = {formData.email}
                                        placeholder="Your Email"
                                        onChange={handlechange}
                                        className="w-full rounded-md bg-white/5 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-cyan-500"
                                    />
                                </div>

                                <div>
                                    <label For="message" className="block text-sm font-medium text-white mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        maxLength={150}
                                        required
                                        value={formData.message}
                                        rows="4"
                                        onChange={handlechange}
                                        placeholder="Write your message..."
                                        className="w-full resize-none rounded-md bg-white/5 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                                <button 
                                    onClick = {SendEmail}
                                    disabled={status === "loading"}
                                    className="mt-2 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:opacity-90 transition"
                                >
                                    {status === "loading" ? "Sending..." : "Send Message"}
                                </button>
                                {status === "success" && (
                                <p className="text-green-400 mt-2 p-4">
                                    
                                    ✔ Message sent successfully!
                                </p>
                                )}

                                {status === "error" && (
                                <p className="text-red-400 mt-2 p-4">
                                    ❌ Failed to send message. Try again.
                                </p>
                                )}

                            </div>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [message, setMessage] = useState('');
    const maxChars = 500;

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    };

    return (
        <section className="bg-[#FBFBFB] py-20 px-10 md:px-20 min-h-[80vh] font-sans flex flex-col items-center justify-center">
            <div className="container mx-auto max-w-2xl">
                <motion.div
                    {...fadeIn}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-[#111] leading-tight mb-4">
                        Let's work <span className="italic text-[#666]">together</span>
                    </h2>
                    <p className="text-[#666] text-base italic font-serif opacity-70">
                        Drop a line to start a new project
                    </p>
                </motion.div>

                <motion.div
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: 0.2 }}
                    className="bg-white rounded-[2.5rem] shadow-sm p-8 md:p-12 border border-[#eee]"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-6 py-4 rounded-xl bg-[#F9F9F9] border border-[#eee] focus:border-[#111] focus:bg-white outline-none transition-all placeholder:text-[#aaa] text-base"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-6 py-4 rounded-xl bg-[#F9F9F9] border border-[#eee] focus:border-[#111] focus:bg-white outline-none transition-all placeholder:text-[#aaa] text-base"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full px-6 py-4 rounded-xl bg-[#F9F9F9] border border-[#eee] focus:border-[#111] focus:bg-white outline-none transition-all placeholder:text-[#aaa] text-base"
                        />
                        <div className="relative">
                            <textarea
                                placeholder="Your Message"
                                rows={4}
                                maxLength={maxChars}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-6 py-4 rounded-xl bg-[#F9F9F9] border border-[#eee] focus:border-[#111] focus:bg-white outline-none transition-all placeholder:text-[#aaa] text-base resize-none"
                            ></textarea>
                            <div className="text-right mt-2 text-[10px] text-[#ccc] font-medium tracking-widest">
                                {message.length}/{maxChars}
                            </div>
                        </div>

                        <div className="pt-2">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-[#111] text-white rounded-full text-base font-bold tracking-widest hover:bg-black transition-all shadow-md"
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;

"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const aboutSteps = [
    {
        step: "01",
        title: "Passionate designer with a keen eye for detail and innovation",
        description: [
            "With over 8 years of experience in the creative industry, I specialize in transforming complex ideas into elegant, user-centered designs.",
            "My approach combines strategic thinking with artistic vision to deliver solutions that not only look beautiful but also drive results."
        ],
        skills: ["UI/UX Design", "Branding", "Web Development", "Motion Graphics"]
    },
    {
        step: "02",
        title: "Crafting Digital Stories & Interactive Experiences",
        description: [
            "I believe every brand has a story to tell. My goal is to translate that story into a digital experience that resonates with users.",
            "From conceptualization to final polish, I focus on every pixel to ensure the highest quality output."
        ],
        skills: ["Interaction Design", "Prototyping", "Visual Design"]
    },
    {
        step: "03",
        title: "Strategic Thinker & Problem Solver",
        description: [
            "Beyond aesthetics, I focus on the 'why' behind every design decision. Good design is about solving problems and meeting business goals.",
            "I enjoy collaborating with visionary teams to push the boundaries of what's possible in the digital space."
        ],
        skills: ["Product Strategy", "User Research", "Design Systems"]
    }
];

const About = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? "50%" : "-50%",
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? "50%" : "-50%",
            opacity: 0,
        }),
    };

    const paginate = (newDirection) => {
        const nextIndex = current + newDirection;
        if (nextIndex >= 0 && nextIndex < aboutSteps.length) {
            setDirection(newDirection);
            setCurrent(nextIndex);
        }
    };

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    };

    const textReveal = {
        initial: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", opacity: 0 },
        animate: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 },
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    };

    const staggering = {
        animate: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const data = aboutSteps[current];

    return (
        <section className="relative min-h-screen w-full flex items-center bg-[#F8F8F8] overflow-hidden text-[#111]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={current}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 },
                    }}
                    className="w-full h-full px-10 md:px-20 py-20"
                >
                    {/* Background Number */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 0.05, scale: 1 }}
                        className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 text-[20rem] md:text-[35rem] font-serif select-none pointer-events-none text-black"
                    >
                        {data.step}
                    </motion.div>

                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                        {/* Left side spacer / Pill */}
                        <div className="hidden lg:block">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "backOut" }}
                                className="w-fit"
                            >
                                <span className="px-8 py-3 border border-[#111] rounded-full text-sm font-bold tracking-[0.2em] uppercase">
                                    About
                                </span>
                            </motion.div>
                        </div>

                        {/* Right Content */}
                        <motion.div
                            variants={staggering}
                            initial="initial"
                            animate="animate"
                            className="max-w-2xl ml-auto"
                        >
                            <motion.div className="lg:hidden mb-12" variants={fadeIn}>
                                <span className="px-6 py-2 border border-[#111] rounded-full text-xs font-bold tracking-widest uppercase">
                                    About
                                </span>
                            </motion.div>

                            <motion.h2
                                variants={textReveal}
                                className="text-5xl md:text-7xl font-serif leading-[1.1] mb-12 text-[#111]"
                            >
                                {data.title}
                            </motion.h2>

                            <motion.div variants={staggering} className="space-y-6 text-[#444] text-lg leading-relaxed mb-12">
                                {data.description.map((p, i) => (
                                    <motion.p key={i} variants={fadeIn}>{p}</motion.p>
                                ))}
                            </motion.div>

                            {/* Skill Tags */}
                            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                                {data.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.05, backgroundColor: "#111", color: "#fff" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-3 bg-white border border-[#111]/10 rounded-full text-sm font-medium shadow-sm cursor-pointer transition-colors duration-300"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Internal Slider Controls */}
            <div className="absolute bottom-10 right-10 z-50 flex gap-4">
                <button
                    onClick={() => paginate(-1)}
                    disabled={current === 0}
                    className={`w-12 h-12 rounded-full border border-black/20 flex items-center justify-center transition-all ${current === 0 ? "opacity-20 cursor-not-allowed" : "hover:bg-black hover:text-white"
                        }`}
                >
                    <svg className="w-6 h-6 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                <div className="flex items-center gap-4 text-sm font-bold tracking-widest">
                    <span>{data.step}</span>
                    <div className="w-12 h-px bg-black/20 relative">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-black"
                            initial={{ width: 0 }}
                            animate={{ width: `${((current + 1) / aboutSteps.length) * 100}%` }}
                        />
                    </div>
                    <span>0{aboutSteps.length}</span>
                </div>
                <button
                    onClick={() => paginate(1)}
                    disabled={current === aboutSteps.length - 1}
                    className={`w-12 h-12 rounded-full border border-black/20 flex items-center justify-center transition-all ${current === aboutSteps.length - 1 ? "opacity-20 cursor-not-allowed" : "hover:bg-black hover:text-white"
                        }`}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default About;
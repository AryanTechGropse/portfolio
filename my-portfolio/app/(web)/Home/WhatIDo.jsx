"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        id: 1,
        title: "Brand Identity",
        icon: "B",
        description: "Creating memorable visual identities that resonate with your audience",
        type: "dark",
        content: (
            <div className="flex flex-col items-start justify-center h-full">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8 border border-white/20">
                    <span className="text-white text-2xl font-serif">B</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Brand Identity</h3>
                <p className="text-white/60 text-lg leading-relaxed max-w-xs mt-auto">
                    Creating memorable visual identities that resonate with your audience
                </p>
            </div>
        )
    },
    {
        id: 2,
        title: "Digital Design",
        image: "/creative_agency.png",
        tag: "Creative",
        type: "image",
        content: (
            <div className="h-full flex flex-col justify-between relative z-10">
                <div className="w-fit">
                    <span className="px-6 py-2 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2 border border-white/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Creative
                    </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif text-white">Digital Design</h3>
            </div>
        )
    },
    {
        id: 3,
        title: "Art Direction",
        image: "/brand_identity.png",
        description: "Guiding creative vision from concept to execution",
        type: "light",
        content: (
            <div className="flex flex-col h-full">
                <div className="mb-8">
                    <h3 className="text-4xl md:text-5xl font-serif text-[#111] mb-6">Art Direction</h3>
                    <p className="text-[#666] text-lg leading-relaxed max-w-xs">
                        Guiding creative vision from concept to execution
                    </p>
                </div>
                <div className="mt-auto relative rounded-4xl overflow-hidden h-[250px] md:h-[300px]">
                    <img
                        src="/brand_identity.png"
                        className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-1000"
                        alt="Art Direction"
                    />
                </div>
            </div>
        )
    }
];

const WhatIDo = () => {
    const [current, setCurrent] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        })
    };

    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    };

    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        const nextIndex = current + newDirection;
        if (nextIndex >= 0 && nextIndex < services.length) {
            setCurrent(nextIndex);
        }
    };

    return (
        <section className="bg-white py-20 md:py-32 px-6 md:px-20 min-h-screen font-sans flex flex-col justify-center overflow-hidden">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif mb-6 text-[#111]">
                        What <span className="italic">I Do</span>
                    </h2>
                    <p className="text-[#666] text-base md:text-lg max-w-lg mx-auto italic font-serif opacity-80 px-4">
                        Comprehensive design services tailored to your needs
                    </p>
                </motion.div>

                {/* Mobile & Tablet Slider */}
                <div className="lg:hidden relative h-[550px] sm:h-[600px] w-full max-w-md mx-auto">
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            key={current}
                            custom={current}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -10000) {
                                    paginate(1);
                                } else if (swipe > 10000) {
                                    paginate(-1);
                                }
                            }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className={`group absolute inset-0 rounded-[3rem] overflow-hidden p-10 flex flex-col shadow-xl transition-all duration-500
                                ${services[current].type === 'dark' ? 'bg-[#111]' : services[current].type === 'light' ? 'bg-[#F9F9F7]' : ''}`}
                        >
                            {services[current].type === 'image' && (
                                <>
                                    <img
                                        src={services[current].image}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
                                        alt={services[current].title}
                                    />
                                    <div className="absolute inset-0 bg-black/20"></div>
                                </>
                            )}
                            {services[current].content}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 flex justify-between pointer-events-none z-20">
                        <button
                            onClick={() => paginate(-1)}
                            disabled={current === 0}
                            className={`w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-auto transition-all ${current === 0 ? "opacity-0 invisible" : "hover:scale-110 active:scale-95"}`}
                        >
                            <svg className="w-6 h-6 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => paginate(1)}
                            disabled={current === services.length - 1}
                            className={`w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-auto transition-all ${current === services.length - 1 ? "opacity-0 invisible" : "hover:scale-110 active:scale-95"}`}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                        {services.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-1.5 transition-all duration-500 rounded-full ${current === i ? 'w-8 bg-[#111]' : 'w-1.5 bg-black/20'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    className="hidden lg:grid grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            className={`group relative h-[600px] rounded-[3rem] overflow-hidden p-12 flex flex-col transition-all duration-500 hover:shadow-2xl
                                ${service.type === 'dark' ? 'bg-[#111]' : service.type === 'light' ? 'bg-[#F9F9F7]' : ''}`}
                        >
                            {service.type === 'image' && (
                                <>
                                    <img
                                        src={service.image}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                        alt={service.title}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                                </>
                            )}
                            {service.content}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhatIDo;

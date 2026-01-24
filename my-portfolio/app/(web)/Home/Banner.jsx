"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { getMySelf } from '../../API_Services/Controllers/MySelf';
import { useQuery } from '@tanstack/react-query';

const Banner = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['self'],
        queryFn: async () => {
            const res = await getMySelf("6974ca2644f315c73a87a5dc")
            return res
        },
    })

    return (
        <section className="relative h-dvh flex items-center bg-background px-6 md:px-10 lg:pt-0 overflow-hidden">
            <div className="bg-[#9e948c] w-full h-full absolute top-0 left-0 z-10 opacity-50 pointer-events-none"></div>
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <img src="/assets/img/bg-banner.jpg" className="w-full h-full object-cover" alt="" />
            </div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 items-center relative z-20 h-full py-20 lg:py-0">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start self-end lg:self-center"
                >
                    <h1 className="xl:mt-20 text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-serif text-white leading-[1.1] mb-4 md:mb-8">
                        {data?.data?.title} <br />
                        {/* <span className="italic lg:ml-16">Designer</span> <br />
                        Portfolio */}
                    </h1>
                    <p className="text-white/70 text-xs sm:text-sm md:text-lg max-w-md mb-6 md:mb-12 leading-relaxed text-center lg:text-left">
                        {data?.data?.description}
                    </p>

                    {/* Scroll Indicator - Hidden on small mobile to save height */}
                    <div className="hidden sm:flex flex-col items-center w-px h-16 md:h-32 bg-white/30 relative">
                        <motion.div
                            animate={{ y: [0, 60, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-[-4px] left-[-3px] w-1.5 h-1.5 bg-white rounded-full md:w-2 md:h-2"
                        ></motion.div>
                    </div>
                </motion.div>

                {/* Right Content - 3D Image Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end h-[35vh] sm:h-[45vh] lg:h-[calc(100vh-15rem)] self-start lg:self-center"
                >
                    <div className="relative w-full max-w-[280px] sm:max-w-[400px] lg:w-fit h-full bg-accent rounded-[25px] lg:rounded-[40px] overflow-hidden shadow-2xl flex items-end group">
                        <img
                            src="abstract_3d_sculpture.png"
                            alt="Abstract 3D Art"
                            className="w-full h-full object-contain transform scale-110 lg:scale-125 hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Banner

"use client";
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        category: "BRANDING",
        title: "Brand Identity System",
        description: "Complete visual identity for a sustainable fashion brand",
        image: "/brand_identity.png",
        span: "lg:col-span-2"
    },
    {
        id: 2,
        category: "WEB DESIGN",
        title: "E-commerce Platform",
        description: "Intuitive shopping experience with seamless checkout",
        image: "/ecommerce_platform.png",
        span: "lg:col-span-1"
    },
    {
        id: 3,
        category: "UI/UX",
        title: "Mobile Banking App",
        description: "Secure and user-friendly financial management",
        image: "/mobile_banking.png",
        span: "lg:col-span-1"
    },
    {
        id: 4,
        category: "WEB DESIGN",
        title: "Creative Agency Website",
        description: "Bold and dynamic digital presence",
        image: "/creative_agency.png",
        span: "lg:col-span-1"
    },
    {
        id: 5,
        category: "BRANDING",
        title: "Packaging Design",
        description: "Eco-friendly product packaging with modern appeal",
        image: "/packaging_design.png",
        span: "lg:col-span-1"
    }
];

const SelectedWorks = () => {
    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    };

    return (
        <section className="bg-white py-20 md:py-32 px-6 md:px-20 min-h-screen font-sans">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif mb-6 text-[#111]">Selected Works</h2>
                    <p className="text-[#666] text-base md:text-lg max-w-lg mx-auto italic font-serif opacity-80">
                        A showcase of recent projects and creative explorations
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className={`group relative bg-[#F9F9F9] rounded-4xl overflow-hidden p-6 md:p-8 flex flex-col transition-all duration-500 hover:shadow-2xl hover:bg-white 
                                ${project.id === 1 ? 'md:col-span-6 lg:col-span-4' : 'md:col-span-3 lg:col-span-2'}`}
                        >
                            <div className="relative mb-6 md:mb-8 overflow-hidden rounded-4xl h-[300px] sm:h-[350px] md:h-[400px]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                            </div>

                            <div className="mt-auto">
                                <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-serif text-[#111] mb-3 group-hover:text-black transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-[#666] text-xs md:text-sm leading-relaxed max-w-[90%]">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SelectedWorks;
"use client";
import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    };

    return (
        <footer className="bg-black text-white py-16 md:py-24 px-6 md:px-20 relative overflow-hidden font-sans">
            {/* Background Watermark */}
            <div className="absolute bottom-[-5%] md:bottom-[-10%] left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
                <span className="text-[8rem] sm:text-[12rem] md:text-[20rem] lg:text-[25rem] font-bold text-white/5 tracking-wider leading-none">
                    CREATIVE
                </span>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 md:mb-20">
                    {/* Column 1: Heading */}
                    <motion.div {...fadeIn} className="lg:col-span-1">
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                            Let's Work <br className="hidden sm:block" /> Together
                        </h2>
                    </motion.div>

                    {/* Column 2: Quick Links */}
                    <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.1 }}>
                        <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-6 md:mb-8 text-white/90">Quick Links</h3>
                        <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
                            <li><a href="/" className="text-white/60 hover:text-white transition-colors">Home</a></li>
                            <li><a href="/about" className="text-white/60 hover:text-white transition-colors">About</a></li>
                            <li><a href="/portfolio" className="text-white/60 hover:text-white transition-colors">Portfolio</a></li>
                            <li><a href="/services" className="text-white/60 hover:text-white transition-colors">Services</a></li>
                            <li><a href="/contact" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </motion.div>

                    {/* Column 3: Follow Me */}
                    <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
                        <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-6 md:mb-8 text-white/90">Follow Me</h3>
                        <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
                            <li>
                                <a href="#" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm md:text-base">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm md:text-base">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm md:text-base">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.779-.879-2.053-.979-.275-.1-.475-.149-.675.15-.199.299-.773.978-.948 1.173-.174.196-.347.218-.648.067-.3-.15-1.269-.47-2.411-1.493-.889-.792-1.488-1.771-1.662-2.07-.174-.299-.018-.461.13-.611.134-.134.298-.344.449-.516.15-.173.201-.299.299-.498.1-.199.05-.373-.024-.523-.075-.15-.675-1.624-.924-2.221-.242-.589-.488-.507-.674-.516-.174-.01-.374-.01-.573-.01s-.525.075-.798.373c-.273.299-1.047 1.024-1.047 2.497s1.071 2.893 1.222 3.091c.149.199 2.108 3.22 5.106 4.512.714.308 1.27.491 1.704.629.717.227 1.368.195 1.884.118.575-.085 1.779-.726 2.029-1.423.25-.697.25-1.296.173-1.423-.075-.127-.274-.204-.575-.354z" /></svg>
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Column 4: Newsletter */}
                    <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.3 }} className="sm:col-span-2 lg:col-span-1">
                        <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-6 text-white/90">
                            Subscribe to get the latest updates and creative insights
                        </h3>
                        <div className="relative group max-w-sm">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 md:px-8 py-3 md:py-4 outline-none transition-all group-focus-within:border-white/30 placeholder:text-white/30 text-sm md:text-base"
                            />
                            <button className="absolute right-1.5 md:right-2 top-1.5 md:top-2 bottom-1.5 md:bottom-2 aspect-square bg-white text-black rounded-full flex items-center justify-center hover:bg-white/90 transition-all">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    {...fadeIn}
                    className="pt-8 md:pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
                >
                    <p className="text-white/40 text-xs md:text-sm text-center md:text-left">
                        © 2026 Aryan Saini. All rights reserved.
                    </p>
                    <p className="text-white/40 text-xs md:text-sm italic font-serif">
                        Powered by Readdy
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
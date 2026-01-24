"use client";
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const navItems = ['Home', 'About', 'Portfolio', 'Services', 'Contact'];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-500 ${scrolled
            ? "py-4 bg-white/80 backdrop-blur-lg shadow-sm"
            : "py-6 bg-transparent"
            }`}>
            {/* Logo */}
            <div className={`flex flex-col text-[10px] leading-tight font-bold tracking-widest uppercase transition-colors duration-500 ${scrolled ? "text-[#111]" : "text-white/90"
                }`}>
                <span>Creative</span>
                <span>Studio</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
                {navItems.map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className={`text-sm font-medium transition-all duration-500 hover:opacity-100 ${scrolled ? "text-[#111] opacity-70" : "text-white/80 opacity-80"
                            }`}
                    >
                        {item}
                    </a>
                ))}
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
                <button className={`hidden sm:block px-8 py-3 rounded-full text-sm font-semibold transition-all duration-500 ${scrolled
                    ? "bg-[#111] text-white hover:bg-black"
                    : "bg-white text-[#111] hover:bg-white/90"
                    }`}>
                    Get Started
                </button>

                {/* Hamburger Toggle */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? "text-[#111]" : "text-white"
                        }`}
                >
                    <div className="w-6 h-5 flex flex-col justify-between items-end relative">
                        <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "w-6 absolute top-1/2 -rotate-45" : "w-6"}`}></span>
                        <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : "w-4"}`}></span>
                        <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "w-6 absolute top-1/2 rotate-45" : "w-2"}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-white z-60 flex flex-col p-10"
                    >
                        <div className="flex justify-between items-center mb-20">
                            <div className="flex flex-col text-[10px] leading-tight font-bold tracking-widest uppercase text-[#111]">
                                <span>Creative</span>
                                <span>Studio</span>
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#111]"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <nav className="flex flex-col gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-5xl font-serif text-[#111] hover:italic transition-all"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>

                        <div className="mt-auto">
                            <button className="w-full py-6 bg-[#111] text-white rounded-full text-lg font-bold tracking-widest">
                                Get Started
                            </button>
                            <p className="text-center mt-8 text-black/40 text-xs tracking-widest uppercase">
                                studio@creative.com
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header

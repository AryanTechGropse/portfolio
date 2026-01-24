"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Bell, Search, User, LogOut, Settings, ChevronDown } from 'lucide-react';

const AdminHeader = ({ isCollapsed, setIsCollapsed }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <header className="h-[70px] bg-gray-800 border-b border-gray-700 flex items-center justify-between px-6 sticky top-0 z-40 text-white">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                    <Menu size={20} className="text-gray-400" />
                </button>

                <div className="hidden md:flex items-center bg-gray-900 border border-gray-700 rounded-full px-4 py-1.5 gap-3 focus-within:border-blue-500 transition-colors">
                    <Search size={16} className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent border-none outline-none text-sm w-48 placeholder:text-gray-600"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-gray-800"></span>
                </button>

                <div className="relative">
                    <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="flex items-center gap-3 p-1.5 hover:bg-gray-700 rounded-full transition-colors"
                    >
                        <div className="w-8 h-8 rounded-full bg-linear-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold">
                            AS
                        </div>
                        <div className="hidden sm:block text-left">
                            <p className="text-xs font-semibold leading-none">Aryan Saini</p>
                            <p className="text-[10px] text-gray-400 mt-1">Administrator</p>
                        </div>
                        <ChevronDown size={14} className={`text-gray-500 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                        {isProfileOpen && (
                            <>
                                <div
                                    className="fixed inset-0 z-40"
                                    onClick={() => setIsProfileOpen(false)}
                                ></div>
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute right-0 mt-2 w-56 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden"
                                >
                                    <div className="p-4 border-b border-gray-700">
                                        <p className="text-sm font-medium">Aryan Saini</p>
                                        <p className="text-xs text-gray-400 truncate">aryan@example.com</p>
                                    </div>
                                    <div className="p-2">
                                        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors">
                                            <User size={16} />
                                            Your Profile
                                        </button>
                                        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors">
                                            <Settings size={16} />
                                            Settings
                                        </button>
                                    </div>
                                    <div className="p-2 border-t border-gray-700">
                                        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                                            <LogOut size={16} />
                                            Sign out
                                        </button>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
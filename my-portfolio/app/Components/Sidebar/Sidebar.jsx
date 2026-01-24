"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    User,
    Info,
    CheckSquare,
    Lightbulb,
    FolderKanban,
    Wrench,
    Cpu,
    LifeBuoy,
    LogOut
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
    { title: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    { title: "My Self Management", icon: User, href: "/admin/MySelf" },
    { title: "About me management", icon: Info, href: "/admin/About" },
    { title: "selected works management", icon: CheckSquare, href: "/admin/SelectedWorks" },
    { title: "What I DO management", icon: Lightbulb, href: "/admin/WhatIDo" },
    { title: "my projects management", icon: FolderKanban, href: "/admin/Projects" },
    { title: "my skills management", icon: Wrench, href: "/admin/Skills" },
    { title: "Ai Genrate Temlete Management", icon: Cpu, href: "/admin/AiTemplate" },
    { title: "support", icon: LifeBuoy, href: "/admin/Support" },
    { title: "logout", icon: LogOut, href: "/logout" },
];

const Sidebar = ({ isCollapsed }) => {
    const pathname = usePathname();

    return (
        <motion.div
            initial={false}
            animate={{ width: isCollapsed ? 80 : 280 }}
            className="h-screen bg-gray-800 text-white flex flex-col border-r border-gray-700 overflow-hidden sticky top-0"
        >
            <div className="h-[70px] flex items-center px-6 border-b border-gray-700">
                <motion.span
                    animate={{ opacity: isCollapsed ? 0 : 1 }}
                    className="text-xl font-bold tracking-tight whitespace-nowrap"
                >
                    {isCollapsed ? "A" : "Admin Panel"}
                </motion.span>
                {isCollapsed && (
                    <div className="absolute left-1/2 -translate-x-1/2 text-xl font-bold">A</div>
                )}
            </div>

            <nav className="flex-1 py-6 space-y-1 px-3 overflow-y-auto custom-scrollbar">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link key={item.title} href={item.href}>
                            <div className={`
                                flex items-center p-3 rounded-lg transition-colors group relative
                                ${isActive ? "bg-blue-600 text-white" : "text-gray-400 hover:bg-gray-700 hover:text-white"}
                            `}>
                                <div className="flex items-center justify-center min-w-[24px]">
                                    <Icon size={20} />
                                </div>
                                <motion.span
                                    animate={{
                                        opacity: isCollapsed ? 0 : 1,
                                        width: isCollapsed ? 0 : "auto",
                                        marginLeft: isCollapsed ? 0 : 12
                                    }}
                                    className="whitespace-nowrap font-medium text-sm overflow-hidden"
                                >
                                    {item.title}
                                </motion.span>

                                {isCollapsed && (
                                    <div className="absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-xs rounded-md 
                                                    whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                                        {item.title}
                                    </div>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </nav>
        </motion.div>
    );
};

export default Sidebar;
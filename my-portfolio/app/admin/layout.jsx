"use client";
import React, { useState } from 'react';
import Sidebar from "../Components/Sidebar/Sidebar";
import AdminHeader from "../Components/AdminHeader/AdminHeader";
import ReactQueryProvider from "../Providers/QueryProvider";

export default function AdminLayout({ children }) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return (
        <ReactQueryProvider>
            <div className="admin-wrapper bg-gray-900 min-h-screen">
                <div className="flex">
                    <Sidebar isCollapsed={isSidebarCollapsed} />
                    <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
                        <AdminHeader
                            isCollapsed={isSidebarCollapsed}
                            setIsCollapsed={setIsSidebarCollapsed}
                        />
                        <div className="overflow-y-auto h-[calc(100vh-70px)] p-6 md:p-10">

                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </ReactQueryProvider>
    );
}

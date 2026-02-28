"use client";

import React, { useState } from 'react';
import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isLoginPage = pathname === "/";
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="h-screen flex bg-background text-foreground selection:bg-emerald-icpc/30 transition-colors duration-300 overflow-hidden">
            {!isLoginPage && (
                <>
                    {/* Desktop Sidebar */}
                    <div className="hidden lg:block h-full">
                        <Sidebar />
                    </div>

                    {/* Mobile Sidebar Overlay */}
                    <AnimatePresence>
                        {isSidebarOpen && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                                />
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "-100%" }}
                                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                    className="fixed inset-y-0 left-0 w-72 z-50 lg:hidden"
                                >
                                    <Sidebar onClose={() => setIsSidebarOpen(false)} isMobile />
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </>
            )}

            <main className="flex-1 h-full overflow-hidden flex flex-col relative">
                {!isLoginPage && (
                    <header className="h-16 px-4 lg:px-8 flex items-center justify-between border-b border-border bg-background/50 backdrop-blur-md sticky top-0 z-30 transition-colors duration-300">
                        <div className="flex items-center space-x-4">
                            {/* Mobile Toggle */}
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="lg:hidden p-2 hover:bg-foreground/5 rounded-sm transition-colors text-foreground/40 hover:text-foreground"
                            >
                                <Menu className="w-5 h-5" />
                            </button>

                            <div className="hidden sm:flex items-center space-x-4">
                                <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest hidden md:inline">Access Node: KADUNA_SEC_01</span>
                                <div className="hidden md:block h-4 w-[1px] bg-border"></div>
                                <span className="text-[10px] font-mono text-emerald-icpc uppercase flex items-center font-bold">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-icpc mr-2 animate-pulse"></span>
                                    System Secured
                                </span>
                            </div>

                            {/* Mobile Logo (Visible only on mobile header) */}
                            <div className="lg:hidden flex items-center space-x-2">
                                <div className="w-6 h-6 rounded-sm bg-emerald-icpc flex items-center justify-center">
                                    <span className="text-[10px] font-black text-white italic">I</span>
                                </div>
                                <span className="text-xs font-black tracking-tighter uppercase italic text-foreground">ICPC</span>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 lg:space-x-6">
                            <div className="flex flex-col items-end">
                                <span className="text-[8px] lg:text-[10px] font-mono text-foreground/30 uppercase">Local Time</span>
                                <span className="text-[10px] lg:text-xs font-mono text-foreground/80">01:36:15 GMT+1</span>
                            </div>
                        </div>
                    </header>
                )}

                <div className={cn(
                    "flex-1 overflow-y-auto w-full mx-auto max-w-[2000px]",
                    isLoginPage ? "" : "p-4 md:p-8"
                )}>
                    {children}
                </div>
            </main>
        </div>
    );
}

// Utility class for common class concatenation
function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

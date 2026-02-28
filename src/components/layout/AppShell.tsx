"use client";

import React from 'react';
import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isLoginPage = pathname === "/";

    return (
        <div className="h-screen flex bg-background text-foreground selection:bg-emerald-icpc/30 transition-colors duration-300">
            {!isLoginPage && <Sidebar />}
            <main className={`flex-1 h-full overflow-hidden flex flex-col ${!isLoginPage ? 'pt-4' : ''}`}>
                {!isLoginPage && (
                    <header className="h-14 px-8 flex items-center justify-between mx-4 rounded-t-lg header-surface relative z-10 transition-colors duration-300">
                        <div className="flex items-center space-x-4">
                            <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">Access Node: KADUNA_SEC_01</span>
                            <div className="h-4 w-[1px] bg-border"></div>
                            <span className="text-[10px] font-mono text-emerald-icpc uppercase flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-icpc mr-2 animate-pulse"></span>
                                System Secured
                            </span>
                        </div>
                        <div className="flex items-center space-x-6">
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] font-mono text-foreground/30 uppercase">Local Time</span>
                                <span className="text-xs font-mono text-foreground/80">00:35:12 GMT+1</span>
                            </div>
                        </div>
                    </header>
                )}
                <div className={isLoginPage ? "h-full" : "flex-1 overflow-y-auto p-8"}>
                    {children}
                </div>
            </main>
        </div>
    );
}

"use client";

import React from 'react';
import {
    Settings,
    ShieldCheck,
    Key,
    Smartphone,
    Monitor,
    History,
    Lock,
    ChevronRight,
    LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SecuritySettings() {
    return (
        <div className="space-y-8 max-w-4xl mx-auto transition-colors duration-300">
            <div className="flex flex-col space-y-2">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center">
                    <Settings className="w-6 h-6 mr-3 text-emerald-icpc" />
                    User Security Settings
                </h2>
                <p className="text-sm text-foreground/50">Manage your credentials, authentication methods, and active session security.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Navigation / Sections */}
                <div className="md:col-span-1 space-y-2">
                    {[
                        { name: 'Authentication', icon: Key, active: true },
                        { name: 'Device Management', icon: Smartphone, active: false },
                        { name: 'Access History', icon: History, active: false },
                        { name: 'Global Privacy', icon: ShieldCheck, active: false },
                    ].map((section) => (
                        <button key={section.name} className={cn(
                            "w-full flex items-center space-x-3 p-3 rounded-sm text-xs font-bold uppercase tracking-tight transition-all",
                            section.active ? "bg-emerald-icpc text-white shadow-lg shadow-emerald-icpc/10" : "text-foreground/40 hover:text-foreground hover:bg-foreground/5"
                        )}>
                            <section.icon className="w-4 h-4" />
                            <span>{section.name}</span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="md:col-span-2 space-y-6">
                    {/* MFA Section */}
                    <div className="glass-effect p-6 rounded-sm space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-emerald-icpc/10 rounded-sm">
                                <Smartphone className="w-4 h-4 text-emerald-icpc" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-tight">Multi-Factor Authentication</h3>
                                <p className="text-[10px] text-foreground/30 font-mono uppercase">Status: Enabled // Secondary Node</p>
                            </div>
                            <span className="text-[10px] font-mono text-emerald-icpc font-black uppercase">Active</span>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-border">
                            <div className="flex items-center justify-between p-4 bg-foreground/[0.03] border border-border rounded-sm group hover:border-foreground/10 transition-all">
                                <div className="flex items-center space-x-4">
                                    <Lock className="w-5 h-5 text-foreground/20" />
                                    <div>
                                        <p className="text-xs font-bold text-foreground/90">Biometric Security Key</p>
                                        <p className="text-[10px] text-foreground/40">Yubikey 5C - Registered Jan 12</p>
                                    </div>
                                </div>
                                <button className="text-[10px] font-bold text-emerald-icpc uppercase hover:underline">Manage</button>
                            </div>
                        </div>

                        <div className="p-4 bg-emerald-icpc/5 border border-emerald-icpc/20 rounded-sm">
                            <p className="text-[10px] text-emerald-icpc leading-relaxed">
                                <ShieldCheck className="w-3 h-3 inline mr-2 mb-0.5" />
                                You are browsing from a verified IP on the Institutional White-list. Session security is heightened for the current node.
                            </p>
                        </div>
                    </div>

                    {/* Active Sessions */}
                    <div className="glass-effect p-6 rounded-sm space-y-4">
                        <h3 className="text-xs font-mono text-foreground/40 uppercase tracking-widest">Active Login Nodes</h3>
                        <div className="space-y-3">
                            {[
                                { device: 'Workstation Node-82', location: 'Abuja, NG', current: true },
                                { device: 'Mobile Secure Shell', location: 'Kaduna, NG', current: false },
                            ].map((session, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-foreground/[0.01] border border-border rounded-sm">
                                    <div className="flex items-center space-x-3">
                                        <Monitor className={cn("w-4 h-4", session.current ? "text-emerald-icpc" : "text-foreground/20")} />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-bold text-foreground/90">{session.device}</p>
                                            <p className="text-[10px] text-foreground/40">{session.location} {session.current && '(This Device)'}</p>
                                        </div>
                                    </div>
                                    {session.current ? (
                                        <span className="text-[9px] font-mono text-emerald-icpc uppercase font-bold">Encrypted</span>
                                    ) : (
                                        <button className="flex items-center space-x-1 text-[9px] font-bold text-restricted-red uppercase hover:bg-restricted-red/10 p-1 px-2 rounded-sm transition-all">
                                            <LogOut className="w-2.5 h-2.5" />
                                            <span>Terminate</span>
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Danger Zone */}
                    <div className="p-6 border border-restricted-red/10 bg-restricted-red/[0.02] rounded-sm space-y-4">
                        <h3 className="text-xs font-mono text-restricted-red/60 uppercase tracking-widest font-bold">Credential Recovery</h3>
                        <p className="text-[10px] text-foreground/40 leading-relaxed">
                            Account recovery requires physical appearance at the ICPC ICT Directorate or verification by two Level 5 Executives.
                        </p>
                        <button className="px-4 py-2 border border-restricted-red/30 text-restricted-red text-[10px] font-bold uppercase rounded-sm hover:bg-restricted-red hover:text-white transition-all">
                            Initiate Recovery Protocol
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

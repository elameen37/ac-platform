"use client";

import React, { useState } from 'react';
import {
    ShieldCheck,
    Lock,
    User,
    ChevronRight,
    Globe,
    Cpu,
    Fingerprint,
    ShieldAlert,
    Info,
    CheckCircle2
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showBriefing, setShowBriefing] = useState(true);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate high-sec verification
        setTimeout(() => {
            router.push('/dashboard');
        }, 1500);
    };

    return (
        <div className="h-screen w-full flex items-center justify-center p-6 relative overflow-hidden bg-background transition-colors duration-500">
            {/* Background Ambience */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-icpc to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-icpc to-transparent"></div>
                <div className="absolute left-1/4 top-0 h-full w-[1px] bg-foreground/[0.05]"></div>
                <div className="absolute right-1/4 top-0 h-full w-[1px] bg-foreground/[0.05]"></div>
            </div>

            <AnimatePresence>
                {showBriefing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-full max-w-2xl glass-effect p-8 rounded-sm border-t-4 border-authority-gold relative overflow-hidden"
                        >
                            {/* Scanning Line Effect */}
                            <motion.div
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-[2px] bg-authority-gold/20 z-0 pointer-events-none"
                            />

                            <div className="relative z-10 space-y-8">
                                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-authority-gold/10 rounded-sm">
                                            <ShieldAlert className="w-5 h-5 text-authority-gold" />
                                        </div>
                                        <div>
                                            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-white">Security Briefing</h2>
                                            <p className="text-[10px] font-mono text-authority-gold/60 uppercase">Protocol 42-ALPHA // System Documentation</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest italic">Clearance: Level 2+</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <Info className="w-4 h-4 text-emerald-icpc mt-0.5 shrink-0" />
                                            <div className="space-y-1">
                                                <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Access Monitoring</h4>
                                                <p className="text-[10px] text-white/40 leading-relaxed">
                                                    All interactions within this node are subject to real-time auditing. Unauthorized attempts to bypass encryption will trigger a lockdown.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <Lock className="w-4 h-4 text-emerald-icpc mt-0.5 shrink-0" />
                                            <div className="space-y-1">
                                                <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Information Handling</h4>
                                                <p className="text-[10px] text-white/40 leading-relaxed">
                                                    Data retrieved here is classified. Physical reproduction or digital capture of visual information is strictly prohibited.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <Globe className="w-4 h-4 text-emerald-icpc mt-0.5 shrink-0" />
                                            <div className="space-y-1">
                                                <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Inter-Agency Flow</h4>
                                                <p className="text-[10px] text-white/40 leading-relaxed">
                                                    Ensure multi-node sync is active before initiating classified documentation transfers across cross-agency channels.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <Cpu className="w-4 h-4 text-emerald-icpc mt-0.5 shrink-0" />
                                            <div className="space-y-1">
                                                <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Technical Integrity</h4>
                                                <p className="text-[10px] text-white/40 leading-relaxed">
                                                    System integrity hashes are verified at every login. Report any anomalies in the 'Night Mode' transition or gauge responses.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-sm">
                                    <p className="text-[9px] font-mono text-white/30 leading-relaxed uppercase">
                                        By clicking "Acknowledge & Proceed", you provide a digital signature confirming your understanding of the Official Secrets Act and the jurisdictional parameters of the ICPC Inter-Agency Exchange.
                                    </p>
                                </div>

                                <div className="flex items-center justify-end">
                                    <button
                                        onClick={() => setShowBriefing(false)}
                                        className="group relative flex items-center space-x-3 px-8 py-3 bg-authority-gold text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                                    >
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span>Acknowledge & Proceed</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="w-full max-w-md space-y-8 relative z-10">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-20 h-20 rounded-sm bg-emerald-icpc flex items-center justify-center mb-2 shadow-2xl shadow-emerald-icpc/20 relative group">
                        <ShieldCheck className="w-10 h-10 text-white" />
                        <div className="absolute inset-0 border border-white/20 scale-110 opacity-0 group-hover:opacity-100 transition-all"></div>
                    </div>
                    <div className="space-y-1">
                        <h1 className="text-3xl font-black tracking-tighter text-foreground uppercase italic">ICPC</h1>
                        <p className="text-[10px] font-mono text-emerald-icpc uppercase tracking-[0.4em] font-bold">Inter-Agency Exchange</p>
                    </div>
                    <p className="text-xs text-foreground/40 max-w-[280px]">
                        Authorized access only. All sessions are monitored and recorded under the Federal Anti-Corruption Act.
                    </p>
                </div>

                <div className="glass-effect p-8 rounded-sm space-y-6 border-t-2 border-emerald-icpc shadow-2xl">
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest ml-1">Agent Credentials</label>
                            <div className="relative group">
                                <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-foreground/20 group-focus-within:text-emerald-icpc transition-colors" />
                                <input
                                    required
                                    type="text"
                                    placeholder="UserID / Agency ID"
                                    className="w-full bg-foreground/[0.03] border border-border rounded-sm py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-emerald-icpc/50 transition-all placeholder:text-foreground/10"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest ml-1">Secure Pass-Key</label>
                            <div className="relative group">
                                <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-foreground/20 group-focus-within:text-emerald-icpc transition-colors" />
                                <input
                                    required
                                    type="password"
                                    placeholder="••••••••••••"
                                    className="w-full bg-foreground/[0.03] border border-border rounded-sm py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-emerald-icpc/50 transition-all placeholder:text-foreground/10"
                                />
                            </div>
                        </div>

                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full group relative flex items-center justify-center space-x-3 py-4 bg-emerald-icpc text-white text-xs font-black uppercase tracking-[0.2em] rounded-sm hover:opacity-95 transition-all disabled:opacity-50 overflow-hidden"
                        >
                            {loading ? (
                                <div className="flex items-center space-x-3">
                                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                    <span>Verifying Node...</span>
                                </div>
                            ) : (
                                <>
                                    <span>Initialize Secure Session</span>
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                            <div className="absolute inset-0 bg-white/10 -translate-x-full hover:translate-x-0 transition-transform duration-500 pointer-events-none"></div>
                        </button>
                    </form>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center space-x-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                            <Fingerprint className="w-4 h-4 text-foreground/60" />
                            <span className="text-[9px] font-bold text-foreground/40 uppercase">Biometric Login</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Globe className="w-3.5 h-3.5 text-foreground/20" />
                            <Cpu className="w-3.5 h-3.5 text-foreground/20" />
                        </div>
                    </div>
                </div>

                <div className="text-center space-y-4">
                    <div className="inline-flex items-center space-x-3 px-3 py-1.5 bg-foreground/[0.03] border border-border rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-icpc animate-pulse"></span>
                        <span className="text-[9px] font-mono text-foreground/30 uppercase tracking-widest">Global Node Connectivity: SECURED</span>
                    </div>
                    <p className="text-[10px] text-foreground/20 font-mono">
                        System Ver: 4.2.0-STABLE | © 2026 ICPC Federal Republic of Nigeria
                    </p>
                </div>
            </div>
        </div>
    );
}

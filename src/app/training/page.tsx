"use client";

import React, { useState } from 'react';
import {
    GraduationCap,
    Search,
    MapPin,
    Clock,
    ShieldCheck,
    CheckCircle2,
    ChevronRight,
    Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';

const courses = [
    { id: 1, title: 'Advanced Forensic Investigation', agency: 'ICPC Academy', location: 'Abuja (Physical)', duration: '2 Weeks', status: 'Open' },
    { id: 2, title: 'Electronic Evidence Gathering', agency: 'EFCC Training Center', location: 'Lagos (Hybrid)', duration: '10 Days', status: 'Closing Soon' },
    { id: 3, title: 'Inter-Agency Intel Sharing', agency: 'NFIU Intelligence', location: 'Virtual', duration: '3 Days', status: 'Open' },
];

export default function TrainingPortal() {
    const [step, setStep] = useState(1);

    return (
        <div className="space-y-8 max-w-7xl mx-auto transition-colors duration-300">
            <div className="flex items-center justify-between">
                <div className="flex flex-col space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center">
                        <GraduationCap className="w-6 h-6 mr-3 text-emerald-icpc" />
                        Training & Capacity Exchange
                    </h2>
                    <p className="text-sm text-foreground/50">Browse institutional training opportunities and manage inter-agency nominations.</p>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30" />
                        <input
                            type="text"
                            placeholder="Search courses..."
                            className="bg-foreground/[0.03] border border-border rounded-sm py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-emerald-icpc/50 transition-all w-64"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Course List */}
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-xs font-mono text-foreground/40 uppercase tracking-widest px-2">Available Sessions</h3>
                    <div className="space-y-4">
                        {courses.map((course) => (
                            <div key={course.id} className="glass-effect p-6 rounded-sm group hover:emerald-glow transition-all duration-300">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-mono text-emerald-icpc uppercase tracking-[0.2em]">{course.id}. {course.agency}</span>
                                        <h4 className="text-lg font-bold text-foreground group-hover:text-emerald-icpc transition-colors">{course.title}</h4>
                                        <div className="flex items-center space-x-4 text-xs text-foreground/50">
                                            <div className="flex items-center space-x-1">
                                                <MapPin className="w-3 h-3" />
                                                <span>{course.location}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Clock className="w-3 h-3" />
                                                <span>{course.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className={cn(
                                        "text-[10px] font-mono px-2 py-0.5 rounded-sm border",
                                        course.status === 'Open' ? 'border-emerald-icpc/30 text-emerald-icpc' : 'border-authority-gold/30 text-authority-gold'
                                    )}>
                                        {course.status}
                                    </span>
                                </div>
                                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-6 h-6 rounded-full bg-foreground/10 border border-background flex items-center justify-center text-[8px] font-bold">A{i}</div>
                                            ))}
                                        </div>
                                        <span className="text-[10px] text-foreground/30 font-mono">+12 Nominated</span>
                                    </div>
                                    <button className="flex items-center space-x-2 text-xs font-bold text-foreground/60 hover:text-emerald-icpc transition-colors">
                                        <span>Preview Syllabus</span>
                                        <ChevronRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Nomination Flow */}
                <div className="space-y-4">
                    <h3 className="text-xs font-mono text-foreground/40 uppercase tracking-widest px-2">Initiate Nomination</h3>
                    <div className="glass-effect p-6 rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-icpc via-authority-gold to-emerald-icpc"></div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-3 mb-8">
                                {[1, 2, 3].map((s) => (
                                    <div key={s} className="flex flex-1 items-center">
                                        <div className={cn(
                                            "w-6 h-6 rounded-sm flex items-center justify-center text-[10px] font-bold transition-all",
                                            step >= s ? "bg-emerald-icpc text-white" : "bg-foreground/5 text-foreground/30 border border-border"
                                        )}>{s}</div>
                                        {s < 3 && <div className={cn("flex-1 h-[1px] mx-2", step > s ? "bg-emerald-icpc" : "bg-border")}></div>}
                                    </div>
                                ))}
                            </div>

                            {step === 1 && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-right-2 duration-300">
                                    <div>
                                        <label className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest block mb-2">Select Staff Agent</label>
                                        <select className="w-full bg-background border border-border rounded-sm p-3 text-xs text-foreground/80 focus:outline-none focus:border-emerald-icpc">
                                            <option>Search agency database...</option>
                                            <option>Staff A - KADUNA/082</option>
                                            <option>Staff B - ABUJA/921</option>
                                        </select>
                                    </div>
                                    <button
                                        onClick={() => setStep(2)}
                                        className="w-full py-3 bg-emerald-icpc text-white text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all"
                                    >
                                        Next: Validation
                                    </button>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-right-2 duration-300">
                                    <div className="p-4 bg-foreground/[0.03] border border-border rounded-sm space-y-3">
                                        <div className="flex items-center space-x-2 text-emerald-icpc">
                                            <ShieldCheck className="w-4 h-4" />
                                            <span className="text-[10px] font-bold uppercase">Staff Clearance Verified</span>
                                        </div>
                                        <p className="text-[10px] text-foreground/50 leading-relaxed italic">The selected staff has completed prerequisites for "Advanced Forensics".</p>
                                    </div>
                                    <button
                                        onClick={() => setStep(3)}
                                        className="w-full py-3 bg-emerald-icpc text-white text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all font-black"
                                    >
                                        Authorize Nomination
                                    </button>
                                    <button
                                        onClick={() => setStep(1)}
                                        className="w-full text-center text-[10px] text-foreground/30 uppercase font-bold hover:text-foreground transition-colors"
                                    >
                                        Back to Selection
                                    </button>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="text-center py-6 space-y-4 animate-in fade-in zoom-in-95 duration-500">
                                    <div className="w-16 h-16 rounded-full bg-emerald-icpc/10 flex items-center justify-center mx-auto mb-4 border border-emerald-icpc/20">
                                        <CheckCircle2 className="w-8 h-8 text-emerald-icpc" />
                                    </div>
                                    <h4 className="text-lg font-bold text-foreground">Nomination Dispatched</h4>
                                    <p className="text-xs text-foreground/50 max-w-[200px] mx-auto">The approval workflow has been initiated. You will receive an intel alert once verified.</p>
                                    <button
                                        onClick={() => setStep(1)}
                                        className="w-full py-3 bg-foreground/5 text-foreground/60 border border-border text-xs font-bold uppercase tracking-widest hover:bg-foreground/10 transition-all rounded-sm"
                                    >
                                        Initiate Another
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="p-4 bg-authority-gold/5 border border-authority-gold/20 rounded-sm">
                        <p className="text-[10px] text-authority-gold leading-relaxed">
                            <Plus className="w-3 h-3 inline mr-1" />
                            New guidelines for international training nominees have been published in the technical manuals registry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

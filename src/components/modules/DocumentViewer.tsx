"use client";

import React, { useState } from 'react';
import {
    FileText,
    Download,
    Printer,
    Lock,
    Eye,
    EyeOff,
    ShieldAlert,
    Search,
    ChevronLeft,
    ChevronRight,
    Info
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DocumentViewer() {
    const [isClassified, setIsClassified] = useState(true);
    const [showMeta, setShowMeta] = useState(false);

    return (
        <div className="space-y-6 md:space-y-8 max-w-7xl mx-auto transition-colors duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-3">
                        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">Knowledge Repository</h2>
                        <span className="security-tag tag-restricted text-[9px]">Level 3 Clearance</span>
                    </div>
                    <p className="text-xs md:text-sm text-foreground/50">Viewing: Intelligence Report - Sector K (Secure Stream)</p>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3 w-full lg:w-auto">
                    <button className="flex-1 lg:flex-none flex items-center justify-center space-x-2 px-3 md:px-4 py-2 bg-foreground/5 hover:bg-foreground/10 text-foreground/60 hover:text-foreground rounded-sm transition-all text-[10px] md:text-xs border border-border">
                        <Search className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Deep Search</span>
                        <span className="sm:hidden">Search</span>
                    </button>
                    <button className="flex-1 lg:flex-none flex items-center justify-center space-x-2 px-3 md:px-4 py-2 bg-emerald-icpc hover:bg-emerald-icpc/90 text-white rounded-sm transition-all text-[10px] md:text-xs font-bold">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Request Access</span>
                    </button>
                    <button
                        onClick={() => setShowMeta(!showMeta)}
                        className="lg:hidden p-2 bg-foreground/5 border border-border rounded-sm text-foreground/40"
                    >
                        <Info className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 min-h-[60vh] lg:h-[70vh]">
                {/* Document Sidebar / Meta - Collapsible on mobile */}
                <div className={cn(
                    "lg:col-span-1 space-y-6 lg:block",
                    showMeta ? "block" : "hidden"
                )}>
                    <div className="glass-effect p-5 md:p-6 rounded-sm space-y-4">
                        <h3 className="text-[10px] md:text-xs font-mono text-foreground/40 uppercase tracking-widest">Document Metadata</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-[9px] text-foreground/30 uppercase font-mono">Ref. ID</p>
                                <p className="text-xs font-mono text-foreground/80">ICPC-INT-2024-0812</p>
                            </div>
                            <div>
                                <p className="text-[9px] text-foreground/30 uppercase font-mono">Classification</p>
                                <p className="text-xs font-bold text-restricted-red">TOP SECRET // NOFORN</p>
                            </div>
                            <div>
                                <p className="text-[9px] text-foreground/30 uppercase font-mono">Published</p>
                                <p className="text-xs text-foreground/80">Jan 12, 2024 - 14:02:10</p>
                            </div>
                            <div>
                                <p className="text-[9px] text-foreground/30 uppercase font-mono">Integrity Hash</p>
                                <p className="text-[9px] font-mono text-emerald-icpc break-all opacity-60">SHA256: 8f4e2c...a1b2c3</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-effect p-5 md:p-6 rounded-sm space-y-4 border-l-2 border-restricted-red">
                        <div className="flex items-center space-x-2 text-restricted-red">
                            <ShieldAlert className="w-4 h-4" />
                            <h3 className="text-[10px] font-bold uppercase tracking-widest">Capture Alert</h3>
                        </div>
                        <p className="text-[10px] text-foreground/50 leading-relaxed">
                            This viewer is protected. Screenshots and unauthorized downloads are electronically monitored. Your UserID [SULEIMAN_AHMED_01] is dynamically watermarked on the stream.
                        </p>
                    </div>
                </div>

                {/* Viewer Area */}
                <div className="lg:col-span-3 flex flex-col h-full bg-foreground/[0.05] rounded-sm border border-border relative overflow-hidden">
                    {/* Viewer Controls */}
                    <div className="h-auto min-h-12 flex flex-col md:flex-row items-center justify-between p-2 md:px-4 bg-foreground/[0.03] border-b border-border gap-2">
                        <div className="flex items-center space-x-4">
                            <button className="p-1.5 text-foreground/40 hover:text-foreground transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                            <span className="text-[10px] font-mono text-foreground/60 uppercase">Page 1 of 12</span>
                            <button className="p-1.5 text-foreground/40 hover:text-foreground transition-colors"><ChevronRight className="w-4 h-4" /></button>
                        </div>
                        <div className="flex items-center space-x-2 w-full md:w-auto justify-between md:justify-end">
                            <div className="flex items-center space-x-1">
                                <button className="p-1.5 text-foreground/40 hover:text-foreground transition-colors cursor-not-allowed" title="Download Restricted"><Download className="w-4 h-4" /></button>
                                <button className="p-1.5 text-foreground/40 hover:text-foreground transition-colors cursor-not-allowed" title="Printing Restricted"><Printer className="w-4 h-4" /></button>
                            </div>
                            <div className="hidden md:block w-[1px] h-4 bg-border mx-2"></div>
                            <button
                                onClick={() => setIsClassified(!isClassified)}
                                className="flex items-center space-x-2 px-3 py-1.5 bg-foreground/5 hover:bg-foreground/10 rounded-sm text-[10px] text-foreground/60 transition-all border border-foreground/5 md:border-none"
                            >
                                {isClassified ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                                <span>{isClassified ? 'Reveal Content' : 'Mask Content'}</span>
                            </button>
                        </div>
                    </div>

                    {/* Document Content Simulation */}
                    <div className="flex-1 overflow-auto p-4 md:p-12 flex justify-center bg-foreground/[0.08] relative">
                        {/* Watermark Overlay */}
                        <div className="absolute inset-0 pointer-events-none grid grid-cols-2 md:grid-cols-4 grid-rows-4 opacity-[0.05] select-none">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div key={i} className="flex items-center justify-center -rotate-45 text-foreground text-[8px] md:text-[10px] font-mono whitespace-nowrap">
                                    ICPC // SULEIMAN_AHMED_01 // {new Date().toLocaleDateString()}
                                </div>
                            ))}
                        </div>

                        {isClassified ? (
                            <div className="w-full max-w-2xl h-full flex flex-col items-center justify-center space-y-6 text-center py-10 md:py-0">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-restricted-red/10 flex items-center justify-center border border-restricted-red/20">
                                    <Lock className="w-8 h-8 md:w-10 md:h-10 text-restricted-red" />
                                </div>
                                <div className="space-y-2 px-4">
                                    <h4 className="text-lg md:text-xl font-bold text-foreground uppercase tracking-tight">Classified Information Masked</h4>
                                    <p className="text-xs md:text-sm text-foreground/40 max-w-xs">You must re-authenticate or verify clearance Level 4 to view the contents of this intelligence report.</p>
                                </div>
                                <button
                                    onClick={() => setIsClassified(false)}
                                    className="px-6 py-2.5 bg-restricted-red/20 hover:bg-restricted-red/30 text-restricted-red border border-restricted-red/30 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all"
                                >
                                    Verify & Reveal
                                </button>
                            </div>
                        ) : (
                            <div className="w-full max-w-2xl bg-white p-6 md:p-12 text-black shadow-2xl relative min-h-full h-fit">
                                <div className="absolute top-0 left-0 w-full h-1 bg-restricted-red"></div>
                                <div className="flex justify-between items-start mb-8 md:mb-12">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-icpc flex items-center justify-center rounded-sm shrink-0">
                                        <ShieldIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                    </div>
                                    <div className="text-right ml-4">
                                        <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-restricted-red mb-1">Top Secret</p>
                                        <p className="text-[7px] md:text-[8px] font-mono text-black/40">Copy No: 001-A</p>
                                    </div>
                                </div>

                                <h1 className="text-lg md:text-2xl font-black uppercase tracking-tighter mb-6 md:mb-8 border-b-2 md:border-b-4 border-black pb-3 md:pb-4 text-center leading-tight">Executive Intelligence Summary</h1>

                                <div className="space-y-4 md:space-y-6 text-[11px] md:text-sm leading-relaxed text-justify">
                                    <p className="font-bold underline uppercase mb-3 md:mb-4 text-center">Subject: Analysis of Asset Recovery Discrepancies (FY2024 Q1)</p>

                                    <p>1. [PURPOSE] This document outlines critical gaps identified in the inter-agency asset recovery pipeline. Preliminary findings suggest a substantial variance between reported seized assets and actual custodial holdings in Sector Zulu-9.</p>

                                    <p>2. [OBSERVATIONS] Intelligence gathered via the Nigerian Financial Intelligence Unit (NFIU) indicates a series of sophisticated shell transfers originating from the Ministry of Infrastructure. These funds, estimated at $12.4M USD, were bypassed through traditional oversight nodes.</p>

                                    <div className="p-3 md:p-4 bg-black/5 border-l-4 border-black font-mono text-[9px] md:text-[11px] my-4 md:my-6 break-words">
                                        NODE_IDENTIFIER: FED_WORKS_RECOVERY_012<br />
                                        STATUS: ANOMALOUS<br />
                                        VARIANCE: +14.2%<br />
                                        ACTION_REQUIRED: IMMEDIATE AUDIT
                                    </div>

                                    <p>3. [CONCLUSION] Immediate intervention is required at the zonal level. It is recommended that a multi-agency task force be mobilized under the direct oversight of the Principal Inter-Agency Training Exchange coordinators for forensic deployment.</p>
                                </div>

                                <div className="mt-10 md:mt-16 flex flex-col sm:flex-row justify-between items-center sm:items-end border-t border-black/10 pt-6 md:pt-8 gap-6 sm:gap-4">
                                    <div className="space-y-1 text-center sm:text-left">
                                        <p className="text-[7px] md:text-[8px] font-mono uppercase text-black/40 italic">End of Document</p>
                                        <p className="text-[9px] md:text-[10px] font-bold uppercase">Classification Remains Restricted</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="w-20 h-10 md:w-24 md:h-12 border-2 border-emerald-icpc flex items-center justify-center opacity-40 -rotate-12">
                                            <span className="text-[9px] md:text-[10px] font-black text-emerald-icpc uppercase">Verified</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ShieldIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}

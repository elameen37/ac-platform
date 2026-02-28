"use client";

import React from 'react';
import {
    FileText,
    Search,
    Filter,
    ChevronRight,
    ShieldAlert,
    Lock,
    Clock,
    ExternalLink,
    FolderOpen
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const documents = [
    { id: 'INT-2024-001', title: 'Asset Recovery Analysis - Q4', type: 'Intelligence Report', status: 'Secret', date: '2024-01-12', size: '2.4 MB' },
    { id: 'INT-2024-012', title: 'Ministry Fund Tracking - Sector K', type: 'Intelligence Report', status: 'Top Secret', date: '2024-02-05', size: '1.8 MB' },
    { id: 'AUD-2024-052', title: 'Zonal Audit Summary - North West', type: 'Audit Document', status: 'Restricted', date: '2024-02-14', size: '4.2 MB' },
    { id: 'TRA-2024-009', title: 'Curriculum: Forensic Accounting', type: 'Training Resource', status: 'Public', date: '2024-02-20', size: '0.8 MB' },
    { id: 'INT-2024-082', title: 'Inter-Agency Stream Analysis', type: 'Internal Memo', status: 'Secret', date: '2024-02-27', size: '1.2 MB' },
];

export default function DocumentExplorer() {
    return (
        <div className="space-y-8 max-w-7xl mx-auto transition-colors duration-300">
            <div className="flex items-center justify-between">
                <div className="flex flex-col space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center">
                        <FolderOpen className="w-6 h-6 mr-3 text-emerald-icpc" />
                        Classified Document Explorer
                    </h2>
                    <p className="text-sm text-foreground/50">Secure access to agency intelligence, audit reports, and formalized training materials.</p>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30" />
                        <input
                            type="text"
                            placeholder="Search document registry..."
                            className="bg-foreground/[0.03] border border-border rounded-sm py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-emerald-icpc/50 transition-all w-64"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Folders / Categories */}
                <div className="space-y-4">
                    <h3 className="text-xs font-mono text-foreground/40 uppercase tracking-widest px-2">Registries</h3>
                    <div className="space-y-1">
                        {['Intelligence Reports', 'Audit Logs', 'Technical Manuals', 'External Feeds', 'Archive'].map((category, i) => (
                            <button key={category} className={cn(
                                "w-full flex items-center justify-between p-3 rounded-sm text-xs transition-all",
                                i === 0 ? "bg-emerald-icpc/10 text-emerald-icpc border-l-2 border-emerald-icpc" : "text-foreground/40 hover:text-foreground hover:bg-foreground/5"
                            )}>
                                <span>{category}</span>
                                <span className="text-[10px] font-mono opacity-40">({Math.floor(Math.random() * 20) + 5})</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Document List */}
                <div className="md:col-span-3 space-y-4">
                    <div className="flex items-center justify-between px-2">
                        <div className="flex items-center space-x-4">
                            <button className="text-[10px] font-bold text-foreground uppercase hover:text-emerald-icpc transition-all underline decoration-emerald-icpc decoration-2 underline-offset-8">All Files</button>
                            <button className="text-[10px] font-bold text-foreground/40 uppercase hover:text-emerald-icpc transition-all">Recent</button>
                            <button className="text-[10px] font-bold text-foreground/40 uppercase hover:text-emerald-icpc transition-all">Shared with Me</button>
                        </div>
                        <button className="flex items-center space-x-2 text-[10px] text-foreground/30 hover:text-foreground transition-all">
                            <Filter className="w-3 h-3" />
                            <span>Advanced Filters</span>
                        </button>
                    </div>

                    <div className="glass-effect rounded-sm overflow-hidden border border-border">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-foreground/[0.01] border-b border-border">
                                    <th className="px-6 py-4 text-[10px] font-mono text-foreground/30 uppercase tracking-widest">Name</th>
                                    <th className="px-6 py-4 text-[10px] font-mono text-foreground/30 uppercase tracking-widest">Reference</th>
                                    <th className="px-6 py-4 text-[10px] font-mono text-foreground/30 uppercase tracking-widest">Classification</th>
                                    <th className="px-6 py-4 text-[10px] font-mono text-foreground/30 uppercase tracking-widest">Last Modified</th>
                                    <th className="px-6 py-4"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {documents.map((doc) => (
                                    <tr key={doc.id} className="hover:bg-foreground/[0.02] transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-4">
                                                <div className={cn(
                                                    "w-10 h-10 rounded-sm flex items-center justify-center border",
                                                    doc.status === 'Top Secret' ? "bg-restricted-red/5 border-restricted-red/20" : "bg-emerald-icpc/5 border-emerald-icpc/20"
                                                )}>
                                                    <FileText className={cn("w-5 h-5", doc.status === 'Top Secret' ? "text-restricted-red" : "text-emerald-icpc")} />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-foreground group-hover:text-emerald-icpc transition-all">{doc.title}</p>
                                                    <p className="text-[10px] text-foreground/30 font-mono uppercase">{doc.type} • {doc.size}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-xs font-mono text-foreground/60">{doc.id}</td>
                                        <td className="px-6 py-4">
                                            <span className={cn(
                                                "security-tag",
                                                doc.status === 'Top Secret' ? "tag-secret" :
                                                    doc.status === 'Restricted' ? "tag-restricted" :
                                                        doc.status === 'Secret' ? "tag-restricted opacity-80" : "tag-public"
                                            )}>
                                                {doc.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-2 text-[10px] text-foreground/40">
                                                <Clock className="w-3 h-3" />
                                                <span>{doc.date}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Link href="/repository" className="p-2 text-foreground/20 hover:text-foreground hover:bg-foreground/5 rounded-sm transition-all inline-block">
                                                <ExternalLink className="w-4 h-4" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

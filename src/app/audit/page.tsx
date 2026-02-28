"use client";

import React from 'react';
import {
    History,
    Search,
    Filter,
    Download,
    FileText,
    ShieldCheck,
    ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';

const auditLogs = [
    { id: 'LOG-8291', user: 'SULEIMAN_A', action: 'Document Read', resource: 'INT-2024-0812', agency: 'ICPC HQ', severity: 'Low', time: '2026-02-28 09:12:15' },
    { id: 'LOG-8292', user: 'ALABI_D', action: 'Access Grant', resource: 'Staff_A_Nomination', agency: 'ICPC HQ', severity: 'Medium', time: '2026-02-28 10:05:42' },
    { id: 'LOG-8293', user: 'SYSTEM', action: 'Auth Token Purge', resource: 'Node_KADUNA_01', agency: 'Global', severity: 'Info', time: '2026-02-28 11:30:00' },
    { id: 'LOG-8294', user: 'SARAH_J', action: 'Secure Message', resource: 'Thread_X82', agency: 'EFCC Zonal', severity: 'Low', time: '2026-02-28 12:45:10' },
    { id: 'LOG-8295', user: 'UNKNOWN_IP', action: 'Login Attempt', resource: 'Admin_Portal', agency: 'Unknown', severity: 'Critical', time: '2026-02-28 13:12:05' },
];

export default function AuditLogs() {
    return (
        <div className="space-y-8 max-w-7xl mx-auto transition-colors duration-300">
            <div className="flex items-center justify-between">
                <div className="flex flex-col space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center">
                        <History className="w-6 h-6 mr-3 text-emerald-icpc" />
                        Activity & Audit Logs
                    </h2>
                    <p className="text-sm text-foreground/50">Immutable event stream capturing every high-level action and security event within the platform.</p>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-foreground/5 hover:bg-foreground/10 text-foreground/60 rounded-sm text-xs font-bold transition-all border border-border">
                        <Download className="w-3.5 h-3.5" />
                        <span>Export Secure CSV</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-icpc text-white rounded-sm text-xs font-bold hover:opacity-90 transition-all">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Legal Report</span>
                    </button>
                </div>
            </div>

            <div className="glass-effect rounded-sm overflow-hidden flex flex-col h-[70vh]">
                {/* Filter Bar */}
                <div className="p-4 border-b border-border bg-foreground/[0.01] flex items-center justify-between gap-4">
                    <div className="flex-1 relative max-w-md">
                        <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30" />
                        <input
                            type="text"
                            placeholder="Search logs by ID, user, or resource..."
                            className="w-full bg-background border border-border rounded-sm py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-emerald-icpc/50 transition-all font-mono"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <Filter className="w-3.5 h-3.5 text-foreground/30" />
                            <select className="bg-transparent text-xs text-foreground/60 focus:outline-none cursor-pointer">
                                <option>All Agencies</option>
                                <option>ICPC HQ</option>
                                <option>EFCC Zonal</option>
                                <option>NFIU</option>
                            </select>
                        </div>
                        <div className="h-4 w-[1px] bg-border"></div>
                        <div className="flex items-center space-x-2">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-icpc" />
                            <span className="text-[10px] font-mono text-emerald-icpc uppercase font-bold">Tamper Verified</span>
                        </div>
                    </div>
                </div>

                {/* Audit Table */}
                <div className="flex-1 overflow-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="sticky top-0 bg-background z-10 shadow-sm shadow-border">
                            <tr className="border-b border-border">
                                <th className="px-6 py-4 text-[10px] font-mono text-foreground/30 uppercase tracking-widest font-bold">Log ID</th>
                                <th className="px-6 py-4 text-[10px] font-mono text-foreground/30 uppercase tracking-widest font-bold">Timestamp (UTC+1)</th>
                                <th className="px-6 py-4 text-[10px] font-mono text-foreground/30 uppercase tracking-widest font-bold">Entity / Agent</th>
                                <th className="px-6 py-4 text-[10px] font-mono text-foreground/30 uppercase tracking-widest font-bold">Action</th>
                                <th className="px-6 py-4 text-[10px] font-mono text-foreground/30 uppercase tracking-widest font-bold">Target Resource</th>
                                <th className="px-6 py-4 text-[10px] font-mono text-foreground/30 uppercase tracking-widest font-bold">Severity</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {auditLogs.map((log) => (
                                <tr key={log.id} className="hover:bg-foreground/[0.02] transition-colors group">
                                    <td className="px-6 py-4">
                                        <span className="text-[10px] font-mono text-foreground font-bold bg-foreground/5 px-2 py-0.5 rounded-sm">{log.id}</span>
                                    </td>
                                    <td className="px-6 py-4 text-xs font-mono text-foreground/60">{log.time}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-foreground/90">{log.user}</span>
                                            <span className="text-[9px] text-foreground/30 font-mono italic">{log.agency}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-xs text-foreground/80">{log.action}</td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-mono text-emerald-icpc/80 underline decoration-emerald-icpc/20 cursor-pointer hover:text-emerald-icpc">
                                            {log.resource}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "security-tag",
                                            log.severity === 'Critical' ? "tag-secret" :
                                                log.severity === 'Medium' ? "tag-restricted" : "tag-public"
                                        )}>
                                            {log.severity}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-1 transition-all text-foreground/20 hover:text-foreground opacity-0 group-hover:opacity-100">
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination / Status */}
                <div className="p-4 border-t border-border bg-foreground/[0.01] flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <span className="text-[10px] text-foreground/30 font-mono">Blockchain Integrity Hash:</span>
                        <span className="text-[9px] font-mono text-foreground/60 truncate max-w-[200px]">0x72a...8f1c (Current Head)</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-[10px] text-foreground/30 uppercase font-mono">Page 1 of 42</span>
                        <div className="flex items-center space-x-1">
                            <button className="w-8 h-8 rounded-sm bg-foreground/5 flex items-center justify-center text-foreground/20 cursor-not-allowed border border-border">{'<'}</button>
                            <button className="w-8 h-8 rounded-sm bg-foreground/5 flex items-center justify-center text-foreground/60 hover:bg-foreground/10 border border-border">{'>'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

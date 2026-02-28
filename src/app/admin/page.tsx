"use client";

import React from 'react';
import {
    ShieldCheck,
    Settings,
    Activity,
    Users,
    Lock,
    Database,
    Globe,
    Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminControl() {
    return (
        <div className="space-y-8 max-w-7xl mx-auto transition-colors duration-300">
            <div className="flex items-center justify-between">
                <div className="flex flex-col space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center">
                        <Settings className="w-6 h-6 mr-3 text-emerald-icpc" />
                        Admin Control Panel
                    </h2>
                    <p className="text-sm text-foreground/50">Global system configuration, user access governance, and inter-agency node management.</p>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-icpc text-white rounded-sm text-xs font-bold hover:opacity-90 transition-all">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create Security Node</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* System Health */}
                <div className="md:col-span-2 space-y-6">
                    <div className="glass-effect p-6 rounded-sm space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xs font-mono text-foreground/40 uppercase tracking-widest">Active Agency Nodes</h3>
                            <span className="text-[10px] font-mono text-emerald-icpc bg-emerald-icpc/5 px-2 py-0.5 rounded-sm border border-emerald-icpc/20 tracking-tighter animate-pulse">Real-time Sync Active</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: 'ICPC HQ Node', status: 'Online', load: '12%', ip: '192.168.1.1' },
                                { name: 'EFCC Zonal Node', status: 'Online', load: '45%', ip: '192.168.4.12' },
                                { name: 'NFIU Gateway', status: 'Online', load: '8%', ip: '10.0.82.1' },
                                { name: 'Interpol Link', status: 'Offline', load: '0%', ip: '8.8.4.4' },
                            ].map((node) => (
                                <div key={node.name} className="p-4 bg-foreground/[0.03] border border-border rounded-sm hover:border-emerald-icpc/30 transition-all group">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center">
                                            <Globe className={cn("w-3.5 h-3.5 mr-2", node.status === 'Online' ? 'text-emerald-icpc' : 'text-restricted-red')} />
                                            <span className="text-xs font-bold text-foreground/90">{node.name}</span>
                                        </div>
                                        <span className={cn("text-[8px] font-mono px-1.5 py-0.5 rounded-sm uppercase font-bold", node.status === 'Online' ? 'bg-emerald-icpc/10 text-emerald-icpc' : 'bg-restricted-red/10 text-restricted-red')}>
                                            {node.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-foreground/30">{node.ip}</span>
                                        <div className="flex items-center space-x-1">
                                            <span className="text-[9px] text-foreground/40 font-mono">Load:</span>
                                            <span className="text-[9px] text-foreground/80 font-mono">{node.load}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Audit Summary */}
                    <div className="glass-effect p-6 rounded-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xs font-mono text-foreground/40 uppercase tracking-widest">Global Security Log Summary</h3>
                            <button className="text-[10px] font-bold text-emerald-icpc uppercase hover:underline">Full Audit Trail</button>
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-start space-x-3 pb-3 border-b border-border last:border-0">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-authority-gold"></div>
                                    <div className="flex-1">
                                        <p className="text-xs text-foreground/80 leading-snug">System-wide password rotation policy enforced for <span className="text-foreground font-bold">Zonal Cluster B</span>.</p>
                                        <p className="text-[10px] text-foreground/30 font-mono mt-1 uppercase">24 Feb 2026 // Auth_Service_01</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Actions / Policies */}
                <div className="space-y-6">
                    <div className="glass-effect p-6 rounded-sm space-y-4">
                        <h3 className="text-xs font-mono text-foreground/40 uppercase tracking-widest">Platform Policies</h3>
                        <div className="space-y-3">
                            {[
                                { name: 'Multi-Factor Auth', status: 'Enforced', icon: ShieldCheck },
                                { name: 'Inactivity Timeout', status: '15 Mins', icon: Activity },
                                { name: 'Data Encryption', status: 'AES-256', icon: Lock },
                                { name: 'Cross-Agency Sync', status: 'Enabled', icon: Database },
                            ].map((policy) => (
                                <div key={policy.name} className="flex items-center justify-between p-3 bg-foreground/[0.03] border border-border rounded-sm">
                                    <div className="flex items-center space-x-3">
                                        <policy.icon className="w-3.5 h-3.5 text-foreground/40" />
                                        <span className="text-xs text-foreground/80">{policy.name}</span>
                                    </div>
                                    <span className="text-[9px] font-mono text-emerald-icpc font-black uppercase">{policy.status}</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full py-2 bg-foreground/5 text-foreground/60 border border-border text-[10px] font-bold uppercase hover:bg-foreground/10 transition-all rounded-sm">
                            Configure Policies
                        </button>
                    </div>

                    <div className="p-6 border border-restricted-red/10 bg-restricted-red/[0.02] rounded-sm space-y-4">
                        <div className="flex items-center space-x-2 text-restricted-red">
                            <ShieldCheck className="w-4 h-4" />
                            <h3 className="text-xs font-bold uppercase tracking-widest">Crisis Protection</h3>
                        </div>
                        <p className="text-[10px] text-foreground/50 leading-relaxed italic">
                            Initiating the platform lockdown will terminate all active sessions and isolate inter-agency nodes immediately.
                        </p>
                        <button className="w-full py-2 bg-restricted-red/10 text-restricted-red border border-restricted-red/30 text-[10px] font-black uppercase hover:bg-restricted-red hover:text-white transition-all rounded-sm">
                            Execute Platform Lockdown
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

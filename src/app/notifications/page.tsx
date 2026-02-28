"use client";

import React from 'react';
import {
    Bell,
    ShieldAlert,
    UserPlus,
    FileText,
    CheckCircle2,
    Clock,
    MoreHorizontal
} from 'lucide-react';
import { cn } from '@/lib/utils';

const notifications = [
    { id: 1, type: 'Security', title: 'Unauthorized Login Attempt Detected', desc: 'A login attempt from an unrecognized IP in Kaduna was blocked.', time: '12 mins ago', priority: 'High', read: false },
    { id: 2, type: 'Access', title: 'Document Access Request', desc: 'Agent Sarah (EFCC) requested access to INT-2024-0812.', time: '1 hour ago', priority: 'Medium', read: false },
    { id: 3, type: 'System', title: 'Global Sync Completed', desc: 'Inter-agency node synchronization was successful.', time: '3 hours ago', priority: 'Low', read: true },
    { id: 4, type: 'Workflow', title: 'Nomination Approved', desc: 'Your nomination for the Forensic Investigation course was approved.', time: 'Yesterday', priority: 'Medium', read: true },
];

export default function Notifications() {
    return (
        <div className="space-y-8 max-w-3xl mx-auto transition-colors duration-300">
            <div className="flex items-center justify-between">
                <div className="flex flex-col space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center">
                        <Bell className="w-6 h-6 mr-3 text-emerald-icpc" />
                        Notification Center
                    </h2>
                    <p className="text-sm text-foreground/50">Centralized intelligence alerts and system notifications.</p>
                </div>
                <button className="text-xs font-bold text-emerald-icpc hover:underline uppercase tracking-tight">Mark all as read</button>
            </div>

            <div className="space-y-4">
                {notifications.map((notif) => (
                    <div key={notif.id} className={cn(
                        "glass-effect p-5 rounded-sm flex items-start space-x-4 border-l-2 transition-all hover:bg-foreground/[0.04]",
                        notif.priority === 'High' ? "border-restricted-red" : notif.priority === 'Medium' ? "border-authority-gold" : "border-emerald-icpc",
                        !notif.read ? "bg-foreground/[0.02]" : "opacity-60"
                    )}>
                        <div className={cn(
                            "p-2 rounded-full mt-1",
                            notif.type === 'Security' ? "bg-restricted-red/10 text-restricted-red" :
                                notif.type === 'Access' ? "bg-authority-gold/10 text-authority-gold" : "bg-emerald-icpc/10 text-emerald-icpc"
                        )}>
                            {notif.type === 'Security' ? <ShieldAlert className="w-4 h-4" /> :
                                notif.type === 'Access' ? <UserPlus className="w-4 h-4" /> :
                                    notif.type === 'Workflow' ? <CheckCircle2 className="w-4 h-4" /> : <Bell className="w-4 h-4" />}
                        </div>

                        <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                                <h4 className={cn("text-sm font-bold", !notif.read ? "text-foreground" : "text-foreground/70")}>{notif.title}</h4>
                                <div className="flex items-center space-x-2">
                                    <Clock className="w-3 h-3 text-foreground/20" />
                                    <span className="text-[10px] font-mono text-foreground/30 uppercase">{notif.time}</span>
                                </div>
                            </div>
                            <p className="text-xs text-foreground/50 leading-relaxed">{notif.desc}</p>

                            {!notif.read && (
                                <div className="pt-3 flex items-center space-x-3">
                                    <button className="text-[10px] font-bold uppercase py-1 px-3 bg-emerald-icpc/10 text-emerald-icpc border border-emerald-icpc/20 rounded-sm hover:bg-emerald-icpc hover:text-white transition-all">Review Event</button>
                                    <button className="text-[10px] font-bold uppercase py-1 px-3 text-foreground/40 hover:text-foreground transition-all">Dismiss</button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center py-8">
                <button className="px-6 py-2 border border-border bg-foreground/[0.02] text-foreground/30 text-xs font-bold uppercase rounded-sm hover:text-foreground/60 transition-all">Load Archive</button>
            </div>
        </div>
    );
}

"use client";

import React, { useState } from 'react';
import {
    Send,
    ShieldCheck,
    Lock,
    MoreVertical,
    Search,
    CheckCheck,
    User,
    ChevronLeft,
    Menu
} from 'lucide-react';
import { cn } from '@/lib/utils';

const contacts = [
    { id: 1, name: 'Director Alabi', agency: 'ICPC HQ', online: true, lastMsg: 'The audit report is ready.' },
    { id: 2, name: 'Agent Sarah', agency: 'EFCC Zonal', online: false, lastMsg: 'Understood. Will verify.' },
    { id: 3, name: 'Director Musa', agency: 'BPP Procurement', online: true, lastMsg: 'Certificate of No Objection issued.' },
    { id: 4, name: 'Secure Gateway', agency: 'System', online: true, lastMsg: 'Node synchronization active.' },
];

export default function SecureMessaging() {
    const [showContacts, setShowContacts] = useState(true);

    return (
        <div className="h-[calc(100vh-160px)] flex glass-effect rounded-sm overflow-hidden border border-border transition-all duration-300 relative">
            {/* Contact List */}
            <div className={cn(
                "absolute inset-0 z-20 md:relative md:inset-auto md:z-auto w-full md:w-80 border-r border-border flex flex-col bg-background md:bg-foreground/[0.01] transition-transform duration-300 md:translate-x-0 outline-none",
                showContacts ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="p-4 border-b border-border space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-[10px] md:text-xs font-mono text-foreground/40 uppercase tracking-widest">Secure Contacts</h3>
                        <button
                            onClick={() => setShowContacts(false)}
                            className="md:hidden p-1 text-foreground/40"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="relative">
                        <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30" />
                        <input
                            type="text"
                            placeholder="Search agents..."
                            className="w-full bg-background md:bg-foreground/[0.03] border border-border rounded-sm py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-emerald-icpc/50 transition-all font-mono"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {contacts.map((contact) => (
                        <div
                            key={contact.id}
                            onClick={() => setShowContacts(false)}
                            className="p-4 border-b border-border/50 hover:bg-foreground/[0.02] cursor-pointer transition-all group"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-foreground/5 border border-border flex items-center justify-center">
                                        <User className="w-5 h-5 text-foreground/40" />
                                    </div>
                                    {contact.online && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-icpc border-2 border-background rounded-full"></div>}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs font-bold text-foreground/90 truncate">{contact.name}</p>
                                        <span className="text-[9px] font-mono text-foreground/30">12:10</span>
                                    </div>
                                    <p className="text-[10px] text-foreground/40 font-mono uppercase truncate">{contact.agency}</p>
                                    <p className="text-[10px] text-foreground/60 truncate mt-1">{contact.lastMsg}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col bg-background">
                {/* Chat Header */}
                <div className="p-3 md:p-4 border-b border-border flex items-center justify-between bg-foreground/[0.01]">
                    <div className="flex items-center space-x-3 md:space-x-4">
                        <button
                            onClick={() => setShowContacts(true)}
                            className="md:hidden p-2 bg-foreground/5 rounded-sm text-foreground/40"
                        >
                            <Menu className="w-4 h-4" />
                        </button>
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-icpc/10 border border-emerald-icpc/30 flex items-center justify-center shrink-0">
                            <User className="w-5 h-5 md:w-6 md:h-6 text-emerald-icpc" />
                        </div>
                        <div className="min-w-0">
                            <h4 className="text-xs md:text-sm font-bold text-foreground truncate">Director Alabi</h4>
                            <div className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-icpc shrink-0"></div>
                                <span className="text-[8px] md:text-[10px] font-mono text-emerald-icpc uppercase font-bold truncate">Encrypted E2EE Link</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1 md:space-x-3">
                        <button className="p-2 text-foreground/20 hover:text-foreground transition-all"><Lock className="w-4 h-4" /></button>
                        <button className="p-2 text-foreground/20 hover:text-foreground transition-all"><MoreVertical className="w-4 h-4" /></button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-foreground/[0.01]">
                    <div className="flex flex-col items-center">
                        <span className="text-[9px] font-mono text-foreground/30 bg-foreground/5 px-3 py-1 rounded-full uppercase tracking-tighter">Session Initialized: 2026-02-28 10:00:00</span>
                    </div>

                    <div className="flex justify-start max-w-[90%] md:max-w-[80%]">
                        <div className="bg-foreground/[0.03] border border-border p-3 md:p-4 rounded-sm space-y-2">
                            <p className="text-xs text-foreground/80 leading-relaxed">
                                The case file INT-2024-0812 has been cross-referenced with NFIU data. We found discrepancies in the Section K reporting.
                            </p>
                            <p className="text-[8px] font-mono text-foreground/30 text-right uppercase">10:05 AM</p>
                        </div>
                    </div>

                    <div className="flex justify-end ml-auto max-w-[90%] md:max-w-[80%]">
                        <div className="bg-emerald-icpc/10 border border-emerald-icpc/30 p-3 md:p-4 rounded-sm space-y-2">
                            <p className="text-xs text-foreground/90 leading-relaxed">
                                Acknowledged. My team is preparing the forensic nomination for the audit trail. Will you be available for a voice-link override?
                            </p>
                            <div className="flex items-center justify-end space-x-2">
                                <p className="text-[8px] font-mono text-emerald-icpc/60 uppercase">10:12 AM</p>
                                <CheckCheck className="w-3 h-3 text-emerald-icpc" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start max-w-[90%] md:max-w-[80%]">
                        <div className="bg-foreground/[0.03] border border-border p-3 md:p-4 rounded-sm space-y-2">
                            <div className="flex items-center space-x-2 text-restricted-red mb-1">
                                <ShieldCheck className="w-3 h-3" />
                                <span className="text-[8px] font-bold uppercase tracking-widest">Classified Attachement</span>
                            </div>
                            <div className="p-2 md:p-3 bg-black/20 rounded-sm border border-white/5 flex items-center justify-between group cursor-pointer hover:bg-black/30 transition-all gap-4">
                                <div className="flex items-center space-x-2 md:space-x-3 min-w-0">
                                    <div className="w-8 h-8 bg-restricted-red/20 flex items-center justify-center rounded-sm shrink-0">
                                        <Lock className="w-4 h-4 text-restricted-red" />
                                    </div>
                                    <span className="text-[9px] md:text-[10px] font-mono text-foreground/60 uppercase tracking-tighter truncate">SEC_K_AUDIT_DRAFT.pdf</span>
                                </div>
                                <span className="text-[9px] text-foreground/30 group-hover:text-foreground shrink-0">Decrypt</span>
                            </div>
                            <p className="text-[8px] font-mono text-foreground/30 text-right uppercase">10:15 AM</p>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-3 md:p-4 border-t border-border bg-foreground/[0.01]">
                    <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="flex-1 relative">
                            <textarea
                                rows={1}
                                placeholder="Type high-sec message..."
                                className="w-full bg-background border border-border rounded-sm py-3 pl-4 pr-12 text-xs focus:outline-none focus:border-emerald-icpc/50 transition-all resize-none"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/20 hover:text-emerald-icpc transition-all">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="hidden sm:flex items-center space-x-3 text-foreground/20">
                            <span className="text-[9px] font-mono uppercase tracking-widest whitespace-nowrap">Secure Input Mode</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

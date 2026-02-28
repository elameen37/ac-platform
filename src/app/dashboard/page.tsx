"use client";

import React from 'react';
import {
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  FileSearch,
  Users,
  Briefcase,
  ShieldCheck as ShieldIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { name: 'Active Investigations', value: '1,284', change: '+12%', type: 'increase', icon: FileSearch },
  { name: 'Completed Audits', value: '452', change: '+5.4%', type: 'increase', icon: CheckCircle2 },
  { name: 'Training Nominees', value: '89', change: '-2%', type: 'decrease', icon: Users },
  { name: 'Open Petitions', value: '312', change: '+18%', type: 'increase', icon: AlertCircle },
];

const recentActivity = [
  { id: 1, type: 'Investigation', status: 'In Progress', title: 'Agency Fund Diversion (K-24)', date: '2 hours ago', agency: 'EFCC Linkage' },
  { id: 2, type: 'Audit', status: 'Completed', title: 'Federal Ministry of Works Q3', date: '5 hours ago', agency: 'ICPC Internal' },
  { id: 3, type: 'Training', status: 'Nominated', title: 'Advanced Forensic Accounting', date: 'Yesterday', agency: 'Financial Intelligence Unit' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6 md:space-y-8 max-w-7xl mx-auto transition-colors duration-300">
      <div className="flex flex-col space-y-2">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground flex items-center">
          <TrendingUp className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-emerald-icpc shrink-0" />
          Executive Oversight Dashboard
        </h2>
        <p className="text-xs md:text-sm text-foreground/50 max-w-2xl">Intelligence overview and consolidated performance metrics for the current fiscal period.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.name} className="glass-effect p-5 md:p-6 rounded-sm relative overflow-hidden group hover:emerald-glow transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-5 h-5 text-foreground/40 group-hover:text-emerald-icpc transition-colors" />
              <div className={cn(
                "text-[10px] font-mono px-2 py-0.5 rounded-full border",
                stat.type === 'increase' ? "border-emerald-icpc/30 text-emerald-icpc bg-emerald-icpc/5" : "border-restricted-red/30 text-restricted-red bg-restricted-red/5"
              )}>
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-mono text-foreground/30 uppercase tracking-wider mb-1">{stat.name}</p>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</h3>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-icpc/5 to-transparent -mr-8 -mt-8 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Activity Feed */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-[10px] md:text-xs font-mono text-foreground/40 uppercase tracking-[0.2em]">Inter-Agency Activity Flow</h3>
            <button className="text-[9px] md:text-[10px] text-emerald-icpc hover:text-emerald-icpc/80 font-bold uppercase transition-colors">View All Streams</button>
          </div>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="glass-effect p-3 md:p-4 rounded-sm flex flex-col sm:flex-row sm:items-center sm:justify-between group hover:bg-foreground/[0.02] transition-all gap-4">
                <div className="flex items-center space-x-4">
                  <div className={cn(
                    "w-10 h-10 rounded-sm flex items-center justify-center border shrink-0",
                    activity.type === 'Investigation' ? "border-restricted-red/20 bg-restricted-red/5" : "border-emerald-icpc/20 bg-emerald-icpc/5"
                  )}>
                    <Briefcase className={cn("w-4 h-4", activity.type === 'Investigation' ? "text-restricted-red" : "text-emerald-icpc")} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-foreground/90 group-hover:text-foreground transition-colors truncate">{activity.title}</h4>
                    <div className="flex items-center space-x-3 text-[10px] text-foreground/40 mt-1">
                      <span className="uppercase font-mono truncate">{activity.agency}</span>
                      <span className="w-1 h-1 rounded-full bg-foreground/10 shrink-0"></span>
                      <span className="shrink-0">{activity.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end space-x-3">
                  <span className={cn(
                    "security-tag",
                    activity.status === 'Completed' ? "tag-public" : "tag-restricted"
                  )}>
                    {activity.status}
                  </span>
                  <button className="p-1 px-3 py-1.5 md:py-1 text-[10px] font-bold uppercase text-foreground/40 hover:text-foreground hover:bg-foreground/10 rounded-sm transition-all border border-foreground/5 sm:border-none">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status / Compliance Panel */}
        <div className="space-y-4">
          <div className="px-2">
            <h3 className="text-[10px] md:text-xs font-mono text-foreground/40 uppercase tracking-[0.2em]">System Compliance</h3>
          </div>
          <div className="glass-effect p-5 md:p-6 rounded-sm border-t-2 border-emerald-icpc">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[10px] font-mono text-foreground/40 uppercase">Global Health</p>
                <h4 className="text-xl font-bold text-emerald-icpc">98.2%</h4>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-emerald-icpc/20 border-t-emerald-icpc animate-[spin_3s_linear_infinite]"></div>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] uppercase font-mono mb-1">
                  <span className="text-foreground/60">Data Integrity</span>
                  <span className="text-emerald-icpc">Verified</span>
                </div>
                <div className="h-1 bg-foreground/5 w-full rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-icpc w-[94%]"></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] uppercase font-mono mb-1">
                  <span className="text-foreground/60">Node Connection</span>
                  <span className="text-emerald-icpc">14/14</span>
                </div>
                <div className="h-1 bg-foreground/5 w-full rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-icpc w-[100%]"></div>
                </div>
              </div>
              <div className="p-3 bg-emerald-icpc/5 border border-emerald-icpc/20 rounded-sm mt-4">
                <p className="text-[10px] text-emerald-icpc leading-relaxed">
                  <ShieldIcon className="w-3 h-3 inline mr-2 mb-0.5" />
                  All inter-agency information exchange channels are operating within secure SLA parameters. No unauthorized attempts detected in last 24h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

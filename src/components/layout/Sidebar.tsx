"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Library,
  FileText,
  GraduationCap,
  MessageSquare,
  Bell,
  ShieldCheck,
  History,
  Settings,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const navigation = [
  { name: 'Executive Dashboard', href: '/dashboard', icon: LayoutDashboard, role: 'Executive' },
  { name: 'Knowledge Repository', href: '/repository', icon: Library, role: 'User' },
  { name: 'Classified Documents', href: '/documents', icon: FileText, role: 'Specialist' },
  { name: 'Training Portal', href: '/training', icon: GraduationCap, role: 'User' },
  { name: 'Secure Messaging', href: '/messaging', icon: MessageSquare, role: 'User' },
  { name: 'Admin Control', href: '/admin', icon: ShieldCheck, role: 'Admin' },
  { name: 'Audit Logs', href: '/audit', icon: History, role: 'Admin' },
];

const secondaryNavigation = [
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Security Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-full sidebar-surface flex flex-col transition-colors duration-300">
      <div className="p-6 flex items-center space-x-3 border-b border-border">
        <div className="w-8 h-8 rounded-sm bg-emerald-icpc flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-tight text-foreground uppercase italic">ICPC</h1>
          <p className="text-[10px] text-foreground/40 uppercase font-mono">Inter-Agency Ex.</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-8">
        <div>
          <h3 className="text-[10px] font-mono text-foreground/30 uppercase tracking-[0.2em] mb-4 px-2">Operational</h3>
          <ul className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between group px-2 py-2 rounded-sm text-sm transition-all duration-200",
                      isActive
                        ? "nav-item-active"
                        : "nav-item-hover"
                    )}
                  >
                    <div className="flex items-center">
                      <item.icon className={cn("w-4 h-4 mr-3", isActive ? "text-emerald-icpc" : "text-foreground/40 group-hover:text-foreground/60")} />
                      <span>{item.name}</span>
                    </div>
                    {isActive && <ChevronRight className="w-3 h-3" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-mono text-foreground/30 uppercase tracking-[0.2em] mb-4 px-2">Account</h3>
          <ul className="space-y-1">
            {secondaryNavigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center px-2 py-2 rounded-sm text-sm text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors"
                >
                  <item.icon className="w-4 h-4 mr-3 text-foreground/40" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="p-4 mt-auto border-t border-border bg-foreground/[0.02] space-y-4">
        <ThemeToggle />

        <div className="flex items-center p-2 space-x-3">
          <div className="w-8 h-8 rounded-full bg-emerald-icpc/20 flex items-center justify-center border border-emerald-icpc/30">
            <span className="text-[10px] font-bold text-emerald-icpc">S.A</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-foreground truncate">Suleiman Ahmed</p>
            <p className="text-[10px] text-foreground/40 truncate">Director Level 2</p>
          </div>
        </div>
        <button className="w-full flex items-center justify-center space-x-2 py-2 text-xs font-medium text-foreground/40 hover:text-restricted-red transition-colors bg-foreground/5 hover:bg-restricted-red/10 rounded-sm">
          <LogOut className="w-3 h-3" />
          <span>Secure Logout</span>
        </button>
      </div>
    </aside>
  );
}

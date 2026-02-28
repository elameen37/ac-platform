"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-8 h-8 rounded-sm bg-foreground/5 animate-pulse border border-border" />
        );
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={cn(
                "flex items-center justify-center p-2 rounded-sm transition-all duration-300",
                "bg-foreground/5 border border-border hover:bg-foreground/10 group active:scale-95"
            )}
            aria-label="Toggle theme"
        >
            <div className="relative w-4 h-4 overflow-hidden">
                <Sun
                    className={cn(
                        "w-4 h-4 absolute transition-all duration-500 transform",
                        isDark ? "-translate-y-10 rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100"
                    )}
                />
                <Moon
                    className={cn(
                        "w-4 h-4 absolute transition-all duration-500 transform",
                        isDark ? "translate-y-0 rotate-0 opacity-100" : "translate-y-10 -rotate-90 opacity-0"
                    )}
                />
            </div>
            <span className="ml-3 text-[10px] font-mono font-bold uppercase tracking-widest text-foreground/40 group-hover:text-foreground transition-colors">
                {isDark ? "Night Mode" : "Day Mode"}
            </span>
        </button>
    );
}

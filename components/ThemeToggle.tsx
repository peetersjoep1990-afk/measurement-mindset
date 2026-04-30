"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "focus-ring relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 text-foreground transition-colors hover:border-primary hover:text-primary",
        className,
      )}
    >
      <Sun
        aria-hidden="true"
        className={cn("h-4 w-4 transition-all", isDark ? "scale-0 opacity-0" : "scale-100 opacity-100")}
      />
      <Moon
        aria-hidden="true"
        className={cn("absolute h-4 w-4 transition-all", isDark ? "scale-100 opacity-100" : "scale-0 opacity-0")}
      />
    </button>
  );
}

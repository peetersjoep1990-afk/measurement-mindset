"use client";

import { useRouter } from "next/navigation";
import { languageCookieName } from "@/lib/language";
import { cn } from "@/lib/utils";
import type { Language } from "@/lib/articles";

type LanguageToggleProps = {
  language: Language;
  labels: {
    label: string;
    nl: string;
    en: string;
  };
};

export function LanguageToggle({ language, labels }: LanguageToggleProps) {
  const router = useRouter();

  function setLanguage(nextLanguage: Language) {
    document.cookie = `${languageCookieName}=${nextLanguage}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  }

  return (
    <div
      aria-label={labels.label}
      className="inline-flex rounded-full border border-border p-0.5 text-[0.7rem] font-medium"
      role="group"
    >
      {(["nl", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={language === option}
          onClick={() => setLanguage(option)}
          className={cn(
            "focus-ring rounded-full px-2.5 py-1 transition-colors",
            language === option
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {labels[option]}
        </button>
      ))}
    </div>
  );
}

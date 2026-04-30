import Link from "next/link";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { Language } from "@/lib/articles";
import type { dictionary } from "@/lib/i18n";

type HeaderProps = {
  language: Language;
  copy: (typeof dictionary)[Language];
};

export function Header({ language, copy }: HeaderProps) {
  const navigation = [
    { href: "/insights", label: copy.nav.insights },
    { href: "/topics/measurement", label: copy.nav.topics },
    { href: "/about", label: copy.nav.about },
    { href: "/resources", label: copy.nav.resources },
  ];

  return (
    <header className="container py-5">
      <div className="flex flex-col gap-4 border-b border-border pb-5 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="focus-ring flex w-fit items-center gap-3 rounded-sm">
          <span className="relative h-8 w-8 rounded-full border-[6px] border-foreground/90 after:absolute after:-bottom-1.5 after:left-2 after:h-3.5 after:w-3.5 after:rounded-full after:bg-primary before:absolute before:-right-1.5 before:top-1 before:h-3.5 before:w-3.5 before:rounded-full before:bg-background" />
          <span className="text-base font-medium text-foreground">Measurement Mindset</span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
          <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted-foreground">
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="focus-ring rounded-sm transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageToggle language={language} labels={copy.language} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";

type SectionHeaderProps = {
  eyebrow: string;
  title?: string;
  href?: string;
  linkLabel?: string;
};

export function SectionHeader({ eyebrow, title, href, linkLabel }: SectionHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between gap-6 border-b border-border pb-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">{eyebrow}</p>
        {title ? <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">{title}</h2> : null}
      </div>
      {href && linkLabel ? (
        <Link
          href={href}
          className="focus-ring hidden items-center gap-1.5 rounded-sm text-sm text-muted-foreground transition-colors hover:text-primary sm:inline-flex"
        >
          {linkLabel} →
        </Link>
      ) : null}
    </div>
  );
}

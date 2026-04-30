import Link from "next/link";
import type { Language } from "@/lib/articles";
import type { dictionary } from "@/lib/i18n";

type FooterProps = {
  copy: (typeof dictionary)[Language];
};

export function Footer({ copy }: FooterProps) {
  return (
    <footer className="container mt-24 pb-10">
      <div className="border-t border-border pt-8">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl text-foreground">Joep Peeters</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
              {copy.footer.description}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">{copy.footer.explore}</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <Link className="focus-ring w-fit rounded-sm hover:text-primary" href="/insights">
                {copy.nav.insights}
              </Link>
              <Link className="focus-ring w-fit rounded-sm hover:text-primary" href="/topics/measurement">
                {copy.nav.topics}
              </Link>
              <Link className="focus-ring w-fit rounded-sm hover:text-primary" href="/about">
                {copy.nav.about}
              </Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">{copy.footer.focus}</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {copy.footer.focusText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

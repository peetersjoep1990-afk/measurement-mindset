import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import type { dictionary } from "@/lib/i18n";
import type { Language } from "@/lib/articles";

type HeroProps = {
  copy: (typeof dictionary)[Language]["hero"];
};

export function Hero({ copy }: HeroProps) {
  return (
    <section className="container grid items-center gap-8 pb-10 pt-7 md:grid-cols-[1fr_0.82fr] md:pb-16 md:pt-12 lg:grid-cols-[1.05fr_0.82fr] lg:gap-16">
      <div className="relative z-10 max-w-3xl">
        <p className="max-w-xl text-[0.68rem] font-medium uppercase leading-6 tracking-[0.24em] text-primary">
          {copy.eyebrow}
        </p>
        {/* Mobile portrait */}
        <div className="relative mx-auto mt-6 aspect-[0.92] w-full max-w-[15rem] overflow-hidden sm:max-w-[16rem] md:hidden">
          <Image
            src="/dna-dark.png"
            alt=""
            width={900}
            height={506}
            priority
            className="dna-bg pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <Image
            src="/joep-portrait.png"
            alt="Portrait of Joep Peeters"
            fill
            priority
            unoptimized
            sizes="16rem"
            className="hero-portrait-image relative z-10 object-contain object-bottom"
          />
        </div>
        <h1 className="mt-6 max-w-4xl font-serif text-[2.75rem] leading-[1.03] text-foreground sm:text-5xl md:text-6xl lg:text-[5.2rem]">
          {copy.headline1}
          <br />
          {copy.headline2}
          <br />
          <span className="text-primary">{copy.headline3}</span>
        </h1>
        <p className="mt-6 max-w-xl text-[0.98rem] leading-7 text-muted-foreground md:text-lg md:leading-9">
          {copy.subcopy1}
          <br />
          {copy.subcopy2}
          <br />
          {copy.subcopy3}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <ButtonLink href="/insights" variant="outline">{copy.primaryCta} →</ButtonLink>
        </div>
        <a className="editorial-link mt-6 block" href="#featured-insights">
          {copy.jumpLink}
          <span aria-hidden="true"> →</span>
        </a>
      </div>
      {/* Desktop portrait */}
      <div className="relative mx-auto hidden aspect-[0.94] w-full max-w-[24rem] overflow-hidden md:block lg:max-w-[31rem]">
        <Image
          src="/dna-dark.png"
          alt=""
          width={900}
          height={506}
          priority
          className="dna-bg pointer-events-none absolute -right-8 top-0 z-0 h-full w-[115%] object-cover opacity-70"
        />
        <div className="absolute inset-x-8 bottom-6 top-[24%] z-0 rounded-full bg-primary/8 blur-3xl dark:bg-primary/10" />
        <Image
          src="/joep-portrait.png"
          alt="Portrait of Joep Peeters"
          fill
          priority
          unoptimized
          sizes="(min-width: 1024px) 32vw, (min-width: 768px) 34vw, 64vw"
          className="hero-portrait-image relative z-10 object-contain object-bottom drop-shadow-[0_20px_34px_rgba(7,24,50,0.10)] dark:drop-shadow-[0_24px_44px_rgba(0,0,0,0.32)]"
        />
      </div>
    </section>
  );
}

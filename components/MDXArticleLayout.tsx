import Link from "next/link";
import { Article, formatDate, getTopic, type Language } from "@/lib/articles";
import type { dictionary } from "@/lib/i18n";

type MDXArticleLayoutProps = {
  article: Article;
  language: Language;
  copy: (typeof dictionary)[Language];
  children: React.ReactNode;
};

export function MDXArticleLayout({ article, language, copy, children }: MDXArticleLayoutProps) {
  const topic = getTopic(article.topic);

  return (
    <article className="container py-12">
      <Link
        href="/insights"
        className="focus-ring inline-flex rounded-sm text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        &lt;- {copy.articles.allInsights}
      </Link>
      <header className="mx-auto mt-12 max-w-4xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{topic?.name[language]}</p>
        <h1 className="mt-6 font-serif text-5xl leading-tight text-foreground md:text-7xl">{article.title[language]}</h1>
        <p className="mx-auto mt-7 max-w-2xl text-xl leading-9 text-muted-foreground">{article.excerpt[language]}</p>
        <div className="mt-8 flex justify-center gap-4 text-sm text-muted-foreground">
          <span>{formatDate(article.date, language)}</span>
          <span aria-hidden="true">/</span>
          <span>{article.readTime[language]}</span>
        </div>
      </header>
      <div className="relative mx-auto mt-14 max-w-3xl">
        <div className="absolute -left-24 top-4 hidden h-44 w-44 rounded-full bg-primary/10 blur-3xl md:block" />
        <div className="article-prose relative">{children}</div>
      </div>
      <nav
        aria-label="Article navigation"
        className="mx-auto mt-16 flex max-w-3xl flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <Link className="focus-ring rounded-sm text-sm text-muted-foreground hover:text-primary" href="/topics/measurement">
          {copy.articles.exploreMeasurement}
        </Link>
        <Link className="focus-ring rounded-sm text-sm text-muted-foreground hover:text-primary" href="/insights">
          {copy.articles.browseAll} -&gt;
        </Link>
      </nav>
    </article>
  );
}

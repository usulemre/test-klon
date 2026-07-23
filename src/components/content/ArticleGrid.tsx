export type Article = { title: string; excerpt: string; date: string; tag: string; readTime: string };

// Blog / analiz yazı listesi (kart grid).
export function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((a, i) => (
        <article key={i} className="group flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-shadow hover:shadow-lg">
          <div className="flex h-36 items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950">
            <span className="text-4xl text-gold-400/70">◪</span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-center gap-2 text-xs text-navy-400">
              <span className="rounded-full bg-navy-50 px-2 py-0.5 font-medium text-navy-600">{a.tag}</span>
              <span>{a.date}</span>
              <span>· {a.readTime}</span>
            </div>
            <h3 className="mt-3 flex-1 text-base font-bold leading-snug text-navy-900 group-hover:text-gold-600">{a.title}</h3>
            <p className="mt-2 text-sm text-navy-600">{a.excerpt}</p>
            <span className="mt-4 text-sm font-semibold text-navy-500 group-hover:text-gold-600">Devamını Oku →</span>
          </div>
        </article>
      ))}
    </div>
  );
}

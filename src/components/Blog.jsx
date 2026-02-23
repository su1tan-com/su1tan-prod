import { ArrowUpRight } from "lucide-react";
import { articles } from "../data/content";

export default function Blog() {
  return (
    <section id="blog" className="py-10">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[22px] font-semibold">Articles & publications</h2>
          <a href="https://www.linkedin.com/in/sultansuleimenov/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
            View all posts <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="space-y-5">
          {articles.map((a, i) => (
            <a key={i} href={a.link} target="_blank" rel="noopener noreferrer" className="group flex gap-5 rounded-xl overflow-hidden transition-all" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="w-[240px] shrink-0 overflow-hidden">
                <img src={a.image} alt={a.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="py-5 pr-5 flex flex-col justify-center">
                <p className="text-[12px] mb-2" style={{ color: "var(--text-muted)" }}>{a.source} · {a.date}</p>
                <h3 className="text-[15px] font-semibold leading-snug mb-2">{a.title}</h3>
                <p className="text-[13px] leading-relaxed mb-3 line-clamp-2" style={{ color: "var(--text-secondary)" }}>{a.excerpt}</p>
                <span className="flex items-center gap-1 text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>Read article <ArrowUpRight size={12} /></span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10" style={{ borderBottom: "1px solid var(--border)" }} />
      </div>
    </section>
  );
}

import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="work" className="py-10">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[22px] font-semibold">Projects / Contribution</h2>
          <a href="#" className="flex items-center gap-1 text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
            View all <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {projects.map((p) => (
            <Link key={p.slug} to={`/project/${p.slug}`} className="group block rounded-xl overflow-hidden transition-all" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="text-[15px] font-medium">{p.name}</h3>
                  <p className="text-[13px] mt-0.5" style={{ color: "var(--text-secondary)" }}>{p.category}</p>
                </div>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" style={{ color: "var(--text-muted)" }} />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10" style={{ borderBottom: "1px solid var(--border)" }} />
      </div>
    </section>
  );
}

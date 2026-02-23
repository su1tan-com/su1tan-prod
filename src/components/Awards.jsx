import { ArrowUpRight } from "lucide-react";
import { awards } from "../data/content";

export default function Awards() {
  return (
    <section id="awards" className="py-10">
      <div className="max-w-[720px] mx-auto px-6">
        <h2 className="text-[22px] font-semibold mb-5">Awards</h2>
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {awards.map((a, i) => (
            <div key={i} className="flex items-center justify-between py-3.5" style={{ borderBottom: "1px solid var(--border)" }}>
              <div>
                <span className="text-[14px] font-medium">{a.name}</span>
                <span className="text-[13px] ml-2" style={{ color: "var(--text-secondary)" }}>— {a.org}, {a.year}</span>
              </div>
              <a href={a.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[13px] shrink-0 transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
                Visit <ArrowUpRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight } from "lucide-react";
import { certifications } from "../data/content";

export default function Certifications() {
  return (
    <div className="py-10">
      <div className="max-w-[720px] mx-auto px-6">
        <h2 className="text-[22px] font-semibold mb-8">Certifications</h2>
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {certifications.map((c, i) => (
            <div key={i} className="flex items-center justify-between py-3.5" style={{ borderBottom: "1px solid var(--border)" }}>
              <div>
                <span className="text-[14px] font-medium">{c.name}</span>
                <span className="text-[13px] ml-2" style={{ color: "var(--text-secondary)" }}>
                  — {c.org}, {c.year}
                </span>
              </div>
              <a 
                href={c.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1 text-[13px] shrink-0 transition-colors hover:opacity-80" 
                style={{ color: "var(--text-secondary)" }}
              >
                View <ArrowUpRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
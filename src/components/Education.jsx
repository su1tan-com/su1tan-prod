import { ArrowUpRight } from "lucide-react";
import { education, certifications } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="py-10">
      <div className="max-w-[720px] mx-auto px-6">
        <h2 className="text-[22px] font-semibold mb-8">Education</h2>
        <div className="space-y-8 mb-12">
          {education.map((ed, i) => (
            <div key={i} className="pl-5" style={{ borderLeft: "2px solid var(--left-border)" }}>
              <h3 className="text-[15px] font-semibold">{ed.degree}</h3>
              <div className="flex items-center gap-2 mt-1 text-[13px]" style={{ color: "var(--text-secondary)" }}>
                <span>{ed.school}</span><span style={{ color: "var(--text-muted)" }}>|</span>
                <span>{ed.location}</span><span style={{ color: "var(--text-muted)" }}>|</span>
                <span>{ed.period}</span>
              </div>
              <p className="text-[14px] leading-relaxed mt-3" style={{ color: "var(--text-tertiary)" }}>{ed.description}</p>
            </div>
          ))}
        </div>
        <h3 className="text-[18px] font-semibold mb-5">Certifications</h3>
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {certifications.map((c, i) => (
            <div key={i} className="flex items-center justify-between py-3.5" style={{ borderBottom: "1px solid var(--border)" }}>
              <div>
                <span className="text-[14px] font-medium">{c.name}</span>
                <span className="text-[13px] ml-2" style={{ color: "var(--text-secondary)" }}>— {c.org}, {c.year}</span>
              </div>
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[13px] shrink-0 transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
                View <ArrowUpRight size={12} />
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10" style={{ borderBottom: "1px solid var(--border)" }} />
      </div>
    </section>
  );
}

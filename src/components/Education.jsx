import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="py-10">
      <div className="max-w-[720px] mx-auto px-6">
        <h2 className="text-[22px] font-semibold mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((ed, i) => (
            <div key={i} className="pl-5" style={{ borderLeft: "2px solid var(--left-border)" }}>
              <h3 className="text-[15px] font-semibold">{ed.degree}</h3>
              <div className="flex items-center gap-2 mt-1 text-[13px]" style={{ color: "var(--text-secondary)" }}>
                <span>{ed.school}</span>
                <span style={{ color: "var(--text-muted)" }}>|</span>
                <span>{ed.location}</span>
                <span style={{ color: "var(--text-muted)" }}>|</span>
                <span>{ed.period}</span>
              </div>
              <p className="text-[14px] leading-relaxed mt-3" style={{ color: "var(--text-tertiary)" }}>
                {ed.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
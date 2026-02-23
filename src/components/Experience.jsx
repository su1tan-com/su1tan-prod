import { MapPin } from "lucide-react";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <div className="max-w-[720px] mx-auto px-6">
        <h2 className="text-[22px] font-semibold mb-8">Experience</h2>
        <div className="space-y-10">
          {experience.map((job, i) => (
            <div key={i}>
              <div className="flex items-center gap-1.5 text-[12px] mb-2" style={{ color: "var(--text-muted)" }}>
                <MapPin size={11} />{job.location}
              </div>
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-[16px] font-semibold">{job.company}</h3>
                <span className="text-[13px] shrink-0 ml-4" style={{ color: "var(--text-secondary)" }}>{job.period}</span>
              </div>
              <p className="text-[14px] mb-4" style={{ color: "var(--text-secondary)" }}>{job.role}</p>
              <ul className="space-y-3">
                {job.bullets.map((b, j) => (
                  <li key={j} className="text-[14px] leading-relaxed pl-4 relative" style={{ color: "var(--text-tertiary)" }}>
                    <span className="absolute left-0 top-[9px] w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--bullet)" }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10" style={{ borderBottom: "1px solid var(--border)" }} />
      </div>
    </section>
  );
}

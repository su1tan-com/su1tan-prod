import { recommendations } from "../data/content";

export default function Recommendations() {
  return (
    <section className="py-10">
      <div className="max-w-[720px] mx-auto px-6">
        <h2 className="text-[22px] font-semibold mb-6">Recommendations</h2>
        <div className="space-y-5">
          {recommendations.map((r, i) => (
            <div key={i} className="pl-5 py-1" style={{ borderLeft: "2px solid var(--left-border)" }}>
              <div className="mb-3">
                <h3 className="text-[15px] font-semibold">{r.name}</h3>
                <p className="text-[13px] mt-0.5" style={{ color: "var(--text-secondary)" }}>{r.title} · {r.subtitle}</p>
              </div>
              <p className="text-[14px] leading-relaxed" style={{ color: "var(--text-tertiary)" }}>"{r.text}"</p>
            </div>
          ))}
        </div>
        <div className="mt-10" style={{ borderBottom: "1px solid var(--border)" }} />
      </div>
    </section>
  );
}

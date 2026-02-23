import { stack } from "../data/content";

export default function Stack() {
  return (
    <div className="py-10">
      <div className="max-w-[720px] mx-auto px-6">
        <h2 className="text-[22px] font-semibold mb-6">Stack</h2>
        <div className="grid grid-cols-2 gap-3">
          {stack.map((s, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl transition-all" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[14px] shrink-0" style={{ backgroundColor: s.color + "22", color: s.color }}>
                {s.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <h3 className="text-[14px] font-medium">{s.name}</h3>
                <p className="text-[12px] mt-0.5" style={{ color: "var(--text-secondary)" }}>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10" style={{ borderBottom: "1px solid var(--border)" }} />
      </div>
    </div>
  );
}

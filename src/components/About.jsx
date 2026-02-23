import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-10">
      <div className="max-w-[720px] mx-auto px-6">
        <h2 className="text-[22px] font-semibold mb-6">About me</h2>
        <div className="space-y-4">
          {about.map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed" style={{ color: "var(--text-tertiary)" }}>{p}</p>
          ))}
        </div>
        <div className="mt-10" style={{ borderBottom: "1px solid var(--border)" }} />
      </div>
    </section>
  );
}

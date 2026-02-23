import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "../data/content";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { theme, toggle } = useTheme();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[24px] font-semibold mb-4">Project not found</h1>
          <Link to="/" className="text-[14px] transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
            &larr; Back to home
          </Link>
        </div>
      </div>
    );
  }

  const linkLabels = {
    playStore: "Play Store",
    github: "GitHub",
    live: "Live Site",
    appStore: "App Store",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-xl shadow-2xl" style={{ backgroundColor: "var(--nav-bg)", border: "1px solid var(--border)" }}>
          <Link to="/" className="flex items-center gap-2 text-[13px] font-medium transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
            <ArrowLeft size={14} /> Back
          </Link>
          <span className="text-[13px] font-medium" style={{ color: "var(--text-primary)" }}>{project.name}</span>
          <button onClick={toggle} className="ml-1 p-1.5 rounded-full transition-colors" style={{ color: "var(--text-secondary)" }} aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </nav>

      <main className="pt-28 pb-16">
        <div className="max-w-[720px] mx-auto px-6">
          <div className="rounded-xl overflow-hidden mb-8" style={{ border: "1px solid var(--border)" }}>
            <img src={project.image} alt={project.name} className="w-full aspect-video object-cover" />
          </div>

          <div className="mb-6">
            <p className="text-[13px] mb-2" style={{ color: "var(--text-secondary)" }}>{project.category}</p>
            <h1 className="text-[32px] font-semibold mb-4">{project.name}</h1>
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-tertiary)" }}>{project.description}</p>
          </div>

          {project.stack && project.stack.length > 0 && (
            <div className="mb-8">
              <h2 className="text-[16px] font-semibold mb-3">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg text-[13px] font-medium" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.links && Object.keys(project.links).length > 0 && (
            <div className="mb-8">
              <h2 className="text-[16px] font-semibold mb-3">Links</h2>
              <div className="flex flex-wrap gap-3">
                {Object.entries(project.links).map(([key, url]) => (
                  <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium transition-colors hover:opacity-80" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-primary)" }}>
                    <ExternalLink size={13} />
                    {linkLabels[key] || key}
                  </a>
                ))}
              </div>
            </div>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <div>
              <h2 className="text-[16px] font-semibold mb-3">Screenshots</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.screenshots.map((src, i) => (
                  <img key={i} src={src} alt={`${project.name} screenshot ${i + 1}`} className="w-full rounded-xl" style={{ border: "1px solid var(--border)" }} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

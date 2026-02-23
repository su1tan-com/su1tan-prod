import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <div className="py-16">
      <div className="max-w-[720px] mx-auto px-6 text-center">
        <h2 className="text-[28px] font-semibold mb-3">Let's work together</h2>
        <p className="text-[15px] mb-8 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
          I'm currently open to new opportunities. If you'd like to collaborate or just say hello, feel free to reach out.
        </p>
        <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-medium transition-colors hover:opacity-90" style={{ backgroundColor: "var(--btn-bg)", color: "var(--btn-text)" }}>
          <Mail size={16} />Get in touch
        </a>
        <div className="flex items-center justify-center gap-6 mt-8">
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
            <Phone size={15} /> {profile.phone}
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
            <Github size={15} /> Github <ArrowUpRight size={11} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
            <Linkedin size={15} /> LinkedIn <ArrowUpRight size={11} />
          </a>
        </div>
        <p className="text-[12px] mt-16" style={{ color: "var(--text-muted)" }}>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </div>
  );
}

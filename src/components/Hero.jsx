import { MapPin, ArrowUpRight, ArrowDown, Mail, Phone, Github, Linkedin } from "lucide-react";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="intro" className="pt-32 pb-10">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-5">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-[88px] h-[88px] rounded-2xl object-cover"
              style={{ backgroundColor: "var(--surface)" }}
            />
            <div>
              <h1 className="text-[28px] font-semibold leading-tight">{profile.name}</h1>
              <p className="text-[15px] mt-0.5" style={{ color: "var(--text-secondary)" }}>{profile.title}</p>
              <div className="flex items-center gap-4 mt-2">
                <span className="flex items-center gap-1.5 text-[13px]" style={{ color: "var(--text-secondary)" }}>
                  <MapPin size={13} />{profile.location}
                </span>
                <span className="flex items-center gap-1.5 text-[13px]">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span style={{ color: "var(--text-secondary)" }}>{profile.status}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end shrink-0">
            <a href={profile.cvUrl} download className="flex items-center gap-1.5 text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
              Download CV <ArrowDown size={13} />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-5 flex-wrap pb-8" style={{ borderBottom: "1px solid var(--border)" }}>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
            <Mail size={14} />{profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
            <Phone size={14} />{profile.phone}
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
            <Github size={14} />Github
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
            <Linkedin size={14} />LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

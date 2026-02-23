import { useState, useEffect, useRef } from "react";
import { Sun, Moon } from "lucide-react";
import { navItems } from "../data/content";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [active, setActive] = useState("intro");
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const sections = navItems
      .map((item) => ({
        id: item.href.slice(1),
        el: document.querySelector(item.href),
      }))
      .filter((s) => s.el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s.el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 100);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        hidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div
        className="flex items-center gap-1 px-2 py-2 rounded-full backdrop-blur-xl shadow-2xl"
        style={{ backgroundColor: "var(--nav-bg)", border: "1px solid var(--border)" }}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 whitespace-nowrap"
            style={{
              backgroundColor: active === item.href.slice(1) ? "var(--accent-bg)" : "transparent",
              color: active === item.href.slice(1) ? "var(--text-primary)" : "var(--text-secondary)",
            }}
          >
            {item.label}
          </a>
        ))}
        <button
          onClick={toggle}
          className="ml-1 p-2 rounded-full transition-colors"
          style={{ color: "var(--text-secondary)" }}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>
    </nav>
  );
}

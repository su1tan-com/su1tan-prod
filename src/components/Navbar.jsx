import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { navItems } from "../data/content";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [active, setActive] = useState("intro");
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
      if (y !== lastY.current) setIsOpen(false);
      setHidden(y > lastY.current && y > 100);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-fit ${
        hidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div
        className="flex flex-col md:flex-row items-center gap-1 px-2 py-2 rounded-[24px] md:rounded-full backdrop-blur-xl shadow-2xl"
        style={{ backgroundColor: "var(--nav-bg)", border: "1px solid var(--border)" }}
      >
        <div className="flex items-center justify-between w-full md:w-auto px-2 md:px-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full"
            style={{ color: "var(--text-secondary)" }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <button
            onClick={toggle}
            className="p-2 rounded-full transition-colors order-last md:order-none"
            style={{ color: "var(--text-secondary)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>

        <div 
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-1 w-full mt-2 md:mt-0`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false); // Закрыть меню после клика
                document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full md:w-auto text-center px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200"
              style={{
                backgroundColor: active === item.href.slice(1) ? "var(--accent-bg)" : "transparent",
                color: active === item.href.slice(1) ? "var(--text-primary)" : "var(--text-secondary)",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
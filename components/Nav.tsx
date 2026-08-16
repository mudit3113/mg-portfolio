"use client";

import { useState, useEffect } from "react";

const links = [
  { num: "01", label: "INDEX", href: "#hero" },
  { num: "02", label: "STORY", href: "#story" },
  { num: "03", label: "WORK", href: "#work" },
  { num: "04", label: "STACK", href: "#stack" },
  { num: "05", label: "PERSONAL", href: "#personal" },
  { num: "06", label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250,247,242,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid #E8E2D9" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 no-underline">
          <span
            className="text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded"
            style={{ background: "#0A2342" }}
          >
            MG
          </span>
          <span className="font-semibold text-sm" style={{ color: "#0A2342" }}>
            Mudit Garg
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.num}
              href={l.href}
              className="text-xs font-medium tracking-widest transition-colors duration-200 no-underline"
              style={{ color: "#6B7280" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0A2342")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
            >
              <span style={{ color: "#2D5BE3" }}>{l.num} —</span> {l.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-5 h-0.5" style={{ background: "#0A2342" }} />
          <span className="block w-5 h-0.5" style={{ background: "#0A2342" }} />
          <span className="block w-3 h-0.5" style={{ background: "#0A2342" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-3"
          style={{ background: "#FAF7F2" }}
        >
          {links.map((l) => (
            <a
              key={l.num}
              href={l.href}
              className="text-xs font-medium tracking-widest no-underline"
              style={{ color: "#1A1A1A" }}
              onClick={() => setMenuOpen(false)}
            >
              <span style={{ color: "#2D5BE3" }}>{l.num} —</span> {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

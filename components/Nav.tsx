"use client";
import { useEffect, useState } from "react";

const ArrowIcon = () => (
  <svg className="arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav id="nav" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <svg width="22" height="22" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="4" y="4" width="40" height="40" rx="8" stroke="#a4bcaa" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="5" fill="#a4bcaa" />
            <line x1="4"  y1="15" x2="0"  y2="15" stroke="#a4bcaa" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="4"  y1="33" x2="0"  y2="33" stroke="#a4bcaa" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="44" y1="15" x2="48" y2="15" stroke="#a4bcaa" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="44" y1="33" x2="48" y2="33" stroke="#a4bcaa" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="15" y1="4"  x2="15" y2="0"  stroke="#a4bcaa" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
            <line x1="33" y1="4"  x2="33" y2="0"  stroke="#a4bcaa" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
            <line x1="15" y1="44" x2="15" y2="48" stroke="#a4bcaa" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
            <line x1="33" y1="44" x2="33" y2="48" stroke="#a4bcaa" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          </svg>
          InnerSCE
        </a>
        <ul className="nav-links">
          <li><a href="#problem">Diferencial</a></li>
          <li><a href="#process">Proceso</a></li>
          <li><a href="#packages">Paquetes</a></li>
          <li><a href="#retainers">Retainers</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <a href="#cta-final" className="btn-cta btn-cta-sm">
          <span>Diagnóstico gratis</span>
          <ArrowIcon />
        </a>
      </div>
    </nav>
  );
}

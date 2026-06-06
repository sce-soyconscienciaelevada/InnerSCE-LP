"use client";
import { useEffect, useRef } from "react";

const steps = [
  {
    day: "Día 1",
    title: "Briefing",
    desc: "Una conversación. Capturamos tu negocio, tu cliente y el resultado que buscás.",
    icon: (
      <svg className="proc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    day: "Días 2–8",
    title: "Build",
    desc: "Diseñamos y ejecutamos el sistema completo. Sin reuniones ni actualizaciones de por medio.",
    icon: (
      <svg className="proc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
        <line x1="6" y1="9.5" x2="3" y2="9.5" /><line x1="6" y1="14.5" x2="3" y2="14.5" />
        <line x1="18" y1="9.5" x2="21" y2="9.5" /><line x1="18" y1="14.5" x2="21" y2="14.5" />
        <line x1="9.5" y1="6" x2="9.5" y2="3" /><line x1="14.5" y1="6" x2="14.5" y2="3" />
        <line x1="9.5" y1="18" x2="9.5" y2="21" /><line x1="14.5" y1="18" x2="14.5" y2="21" />
      </svg>
    ),
  },
  {
    day: "Día 9–10",
    title: "Entrega",
    desc: "Recibís todo funcionando y listo para publicar. Revisás, ajustamos y cerramos.",
    icon: (
      <svg className="proc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    day: "Día 10+",
    title: "Operás",
    desc: "Es tuyo para siempre. Con guía de uso. Sin depender de nosotros para operar.",
    icon: (
      <svg className="proc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <polygon points="10,8.5 16,12 10,15.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const RINGS = 4, STAGGER = 130, DURATION = 720;

function fireRipple(circle: HTMLElement) {
  circle.querySelectorAll(".ripple-ring").forEach((r) => r.remove());
  circle.classList.add("is-rippling");
  for (let i = 0; i < RINGS; i++) {
    const ring = document.createElement("span");
    ring.className = "ripple-ring";
    ring.style.animationDelay = i * STAGGER + "ms";
    circle.appendChild(ring);
    setTimeout(() => ring.remove(), DURATION + i * STAGGER + 20);
  }
}
function clearRipple(circle: HTMLElement) {
  circle.classList.remove("is-rippling");
  circle.querySelectorAll(".ripple-ring").forEach((r) => r.remove());
}

export default function ProcessSection() {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stepsRef.current;
    if (!el) return;
    const circles = el.querySelectorAll<HTMLElement>(".proc-num");

    circles.forEach((c) => {
      c.addEventListener("mouseenter", () => fireRipple(c));
      c.addEventListener("mouseleave", () => clearRipple(c));
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const all = [...circles].reverse();
          all.forEach((circle, i) => setTimeout(() => fireRipple(circle), i * 260));
          io.unobserve(e.target);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <section id="process">
      <div className="wrap">
        <div className="process-header">
          <div className="sec-eyebrow rv">Cómo funciona</div>
          <h2 className="sec-title rv rv-d1">El sistema en <em>4 pasos</em></h2>
          <p className="sec-sub sec-sub-c rv rv-d2">Sin reuniones semanales. Sin bloqueos. Solo ejecución.</p>
        </div>
        <div className="pipeline-card">
          <div className="process-steps" ref={stepsRef}>
            {steps.map((step, i) => (
              <div className={`proc-step rv rv-d${i + 1}`} key={i}>
                <div className="proc-num">{step.icon}</div>
                <div className="proc-step-title">{step.title}</div>
                <div className="proc-step-desc">{step.desc}</div>
                <span className="proc-step-day">{step.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
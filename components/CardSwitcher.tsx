"use client";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    label: "Founder-Led Brand · Food & E-Commerce",
    sprint: "Ciclo #3 · Día 8 de 21 · AI Performance",
    progress: 43,
    progressLabel: "6 de 14 entregables completos",
    status: "Sprint live",
    deliverables: [
      { name: "Brand Identity Brief", tag: "Estrategia", done: true },
      { name: "Copy web — 4 páginas", tag: "SEO", done: true },
      { name: "Google Business Profile Kit", tag: "GBP", done: true },
      { name: "Auditoría SEO completa", tag: "SEO", done: true },
      { name: "Estrategia Instagram", tag: "Social", done: true },
      { name: "GEO / AI Search avanzado", tag: "AI", done: false },
    ],
    days: "13 días",
  },
  {
    label: "Performance Systems · Personal Brand",
    sprint: "Ciclo #1 · Semana 1 · Build Phase",
    progress: 17,
    progressLabel: "1 de 6 entregables completos",
    status: "Build phase",
    deliverables: [
      { name: "Brand Blueprint v2.0", tag: "Estrategia", done: true },
      { name: "Identity Audit Protocol", tag: "Producto", done: false },
      { name: "Funnel de entrada $37–$97", tag: "Funnel", done: false },
      { name: "Setup automatización", tag: "Sistema", done: false },
      { name: "7 Agentes AI configurados", tag: "Sistema", done: false },
      { name: "Estrategia de contenido", tag: "Social", done: false },
    ],
    days: "18 días",
  },
];

export default function CardSwitcher() {
  const [cur, setCur] = useState(0);
  const [entering, setEntering] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hovered = useRef(false);

  function startTimer() {
    timerRef.current = setInterval(() => {
      if (!hovered.current) go((c: number) => (c + 1) % cards.length);
    }, 10000);
  }

  function go(idxOrUpdater: number | ((c: number) => number), fromUser = false) {
    setCur((prev) => {
      const next = typeof idxOrUpdater === "function" ? idxOrUpdater(prev) : idxOrUpdater;
      if (next === prev) return prev;
      setEntering(prev);
      setTimeout(() => setEntering(null), 420);
      return next;
    });
    if (fromUser && timerRef.current) {
      clearInterval(timerRef.current);
      startTimer();
    }
  }

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <div
      className="card-switcher anim-float"
      onMouseEnter={() => { hovered.current = true; if (timerRef.current) clearInterval(timerRef.current); }}
      onMouseLeave={() => { hovered.current = false; startTimer(); }}
    >
      <div className="sw-dots">
        {cards.map((_, i) => (
          <button
            key={i}
            className={`sw-dot${cur === i ? " sw-on" : ""}`}
            onClick={() => go(i, true)}
            aria-label={`Cliente ${i + 1}`}
          />
        ))}
      </div>

      <div className="sw-track">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`dash-card sw-card${cur === i ? " sw-on" : ""}${entering === i ? " sw-enter-left" : ""}`}
          >
            <div className="dash-top">
              <span className="dash-label">InnerSCE · Cliente activo</span>
              <span className="dash-live">
                <span className="live-dot" />
                {card.status}
              </span>
            </div>
            <div className="dash-project">{card.label}</div>
            <div className="dash-sprint-info">{card.sprint}</div>
            <div className="dash-progress">
              <div
                className="dash-progress-bar"
                style={{ width: cur === i ? `${card.progress}%` : "0%" }}
              />
            </div>
            <div className="dash-progress-lbl">{card.progressLabel}</div>
            {card.deliverables.map((d, j) => (
              <div className="dash-deliverable" key={j}>
                <div className={`dash-check ${d.done ? "done" : "pending"}`}>
                  {d.done ? "✓" : "○"}
                </div>
                <div className="dash-del-name">{d.name}</div>
                <div className="dash-del-tag">{d.tag}</div>
              </div>
            ))}
            <div className="dash-footer">
              <div className="dash-footer-label">Entrega estimada</div>
              <div className="dash-footer-days">{card.days}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
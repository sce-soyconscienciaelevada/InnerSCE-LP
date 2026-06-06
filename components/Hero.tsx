import CardSwitcher from "./CardSwitcher";

const ArrowIcon = () => (
  <svg className="arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="hero-grid">
        <div>
          <div className="sec-badge rv">
            <span className="sec-badge-dot" />
            Sistema activo · AI-first
          </div>
          <h1 className="hero-h1 rv rv-d1">
            Tu negocio<br />en internet.<br /><em>Sin agencia.</em>
          </h1>
          <p className="hero-sub rv rv-d2">
            Construimos el <strong>sistema completo</strong> — copy, SEO, estrategia, email y activos digitales.
            Entregado en <strong>7–10 días hábiles</strong>. Vos lo operás.
          </p>
          <div className="hero-actions rv rv-d3">
            <a href="#packages" className="btn-cta">
              <span>Ver paquete inicial</span>
              <ArrowIcon />
            </a>
          </div>
          <div className="hero-stats rv rv-d4">
            <div>
              <span className="hero-stat-num">4+</span>
              <span className="hero-stat-lbl">Clientes activos</span>
            </div>
            <div>
              <span className="hero-stat-num">$800</span>
              <span className="hero-stat-lbl">Paquete inicial</span>
            </div>
            <div>
              <span className="hero-stat-num">7–10</span>
              <span className="hero-stat-lbl">Días de entrega</span>
            </div>
            <div>
              <span className="hero-stat-num">AI</span>
              <span className="hero-stat-lbl">First desde el día 1</span>
            </div>
          </div>
        </div>

        <CardSwitcher />
      </div>
    </section>
  );
}
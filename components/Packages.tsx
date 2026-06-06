const ArrowIcon = () => (
  <svg className="arr" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const packages = [
  {
    tier: "Tier 1",
    name: "Foundation",
    tagline: "El sistema base. Todo lo que necesitás para existir profesionalmente en internet.",
    price: "$800",
    note: "USD · pago único · LatAm / Argentina",
    cta: "Empezar",
    delivery: "⏱ Entrega: 7–10 días hábiles",
    features: [
      "Brand Identity Brief — voz, tono, diferenciador",
      "Copy web completo — 4 páginas (Home, Servicios, About, Contacto)",
      "Google Business Profile Kit",
      "Mapa de palabras clave",
      "Optimización para ChatGPT y Google AI Overview",
      "Estrategia Instagram — bio, pilares, frecuencia",
    ],
    featured: false,
    popular: null,
    delay: "rv-d1",
  },
  {
    tier: "Tier 2",
    name: "Growth",
    tagline: "Foundation + motor de tráfico orgánico y sistema de captura de leads.",
    price: "$2,500",
    note: "USD · pago único · LatAm / Argentina",
    cta: "Empezar con Growth",
    delivery: "⏱ Entrega: 10–14 días hábiles",
    features: [
      "Todo el Foundation Package",
      "Auditoría SEO completa",
      "Landing page de conversión",
      "Email sequence bienvenida (3–5 emails)",
      "Plataforma de email marketing configurada",
      "Analítica y seguimiento de visitas configurado",
      "Estrategia multi-plataforma (Instagram + 1 red)",
    ],
    featured: true,
    popular: "Más elegido",
    delay: "rv-d2",
  },
  {
    tier: "Tier 3",
    name: "AI Performance",
    tagline: "Sistema completo + optimización para buscadores de IA (ChatGPT, Google AI Overview).",
    price: "$4,500",
    note: "USD · pago único · LatAm / Argentina",
    cta: "Escalar con AI",
    delivery: "⏱ Entrega: 15–21 días hábiles",
    features: [
      "Todo el Growth Package",
      "Citado por ChatGPT y Google AI — estructuración técnica completa",
      "Brand Book completo — paleta, tipografía, guía",
      "Email sequence completo (6–10 emails segmentados)",
      "Dashboard de métricas (Notion o Data Studio)",
      "Workshop IA para marketing (2h con tu equipo)",
      "Competitor Analysis — 3 competidores",
    ],
    featured: false,
    popular: null,
    delay: "rv-d3",
  },
];

export default function Packages() {
  return (
    <section id="packages">
      <div className="wrap">
        <div className="packages-header">
          <div className="sec-eyebrow rv">Paquetes</div>
          <h2 className="sec-title rv rv-d1">Elegí el nivel que necesitás</h2>
          <p className="sec-sub sec-sub-c rv rv-d2">Precios fijos, sin sorpresas. Sin retainer obligatorio.</p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`pkg-card rv ${pkg.delay}${pkg.featured ? " featured" : ""}`}>
              {pkg.popular && <div className="pkg-popular">{pkg.popular}</div>}
              <div className="pkg-tier">{pkg.tier}</div>
              <div className="pkg-name">{pkg.name}</div>
              <div className="pkg-tagline">{pkg.tagline}</div>
              <div className="pkg-price">{pkg.price}</div>
              <div className="pkg-price-note">{pkg.note}</div>
              <a href="#cta-final" className="btn-cta pkg-cta">
                <span>{pkg.cta}</span>
                <ArrowIcon />
              </a>
              <hr className="pkg-divider" />
              <ul className="pkg-features">
                {pkg.features.map((f, i) => (
                  <li key={i} className="pkg-feature">
                    <span className="pkg-feature-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="pkg-delivery">{pkg.delivery}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const retainers = [
  {
    tag: "R1 — SEO + Contenido",
    name: "Tráfico orgánico",
    desc: "Para marcas que quieren crecer en Google y en buscadores de IA mes a mes.",
    price: "Desde $400/mes",
    note: "USD · Argentina/LatAm · Sin contrato mínimo",
    items: [
      "2 artículos de blog SEO (800–1,500 palabras)",
      "Monitoreo de keywords + reporte mensual",
      "1 ajuste de on-page por mes",
      "Reporte HTML mensual",
    ],
    featured: false,
    delay: "rv-d1",
  },
  {
    tag: "R2 — Social Media",
    name: "Contenido Instagram",
    desc: "Creamos el contenido, vos mantenés la conexión con tu comunidad. Puro contenido, cero overhead operativo.",
    price: "Desde $300/mes",
    note: "USD · Argentina/LatAm · Sin contrato mínimo",
    items: [
      "12 posts Instagram — copy + dirección visual",
      "4 direction notes de stories (una semanal)",
      "Revisión trimestral de estrategia",
      "Reporte de métricas mensual",
    ],
    featured: false,
    delay: "rv-d2",
  },
  {
    tag: "R3 — Full Digital",
    name: "Todo el marketing",
    desc: "SEO + contenido + social + comunidad + email. El marketing delegado completo.",
    price: "Desde $800/mes",
    note: "USD · Argentina/LatAm · Sin contrato mínimo",
    items: [
      "Todo R1 + todo R2",
      { text: "Gestión de comunidad incluida", badge: "R3 exclusive", featured: true },
      "1 email newsletter mensual",
      "Monitoreo de competidores",
      "Llamada estratégica mensual (45 min)",
      { text: "Reporte ejecutivo HTML + KPIs", featured: true },
    ],
    featured: true,
    delay: "rv-d3",
  },
];

type RetItem = string | { text: string; badge?: string; featured?: boolean };

export default function Retainers() {
  return (
    <section id="retainers">
      <div className="wrap">
        <div className="packages-header">
          <div className="sec-eyebrow rv">Continuidad mensual</div>
          <h2 className="sec-title rv rv-d1">El sistema construido.<br />Nosotros lo <em>operamos</em>.</h2>
          <p className="sec-sub sec-sub-c rv rv-d2">Retainers mensuales sin contrato mínimo. Cancelás cuando querés.</p>
        </div>
        <div className="retainer-grid">
          {retainers.map((r) => (
            <div key={r.name} className={`ret-card rv ${r.delay}${r.featured ? " ret-featured" : ""}`}>
              <span className="ret-tag">{r.tag}</span>
              <div className="ret-name">{r.name}</div>
              <div className="ret-desc">{r.desc}</div>
              <div className="ret-price">{r.price}</div>
              <div className="ret-price-note">{r.note}</div>
              <ul className="ret-items">
                {r.items.map((item: RetItem, i) => {
                  if (typeof item === "string") {
                    return <li key={i} className="ret-item">{item}</li>;
                  }
                  return (
                    <li key={i} className={`ret-item${item.featured ? " featured-item" : ""}`}>
                      {item.text}
                      {item.badge && <span className="ret-badge">{item.badge}</span>}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const rows = [
  { label: "Entrega",           us: "7–10 días",          them1: "4–8 semanas",    them2: "Variable",   usGreen: true },
  { label: "Precio",            us: "Fijo desde el inicio", them1: "Retainer mensual", them2: "Por hora",   usGreen: true },
  { label: "Dependencia",       us: "Cero — vos operás",  them1: "Alta — permanente", them2: "Media",     usGreen: true },
  { label: "AI-first",          us: "Siempre",            them1: null,             them2: null,         usGreen: true },
  { label: "Diagnóstico gratis",us: "Incluido",           them1: null,             them2: null,         usGreen: true },
  { label: "Sistema documentado",us: "Todo entregado",    them1: null,             them2: "Parcial",    usGreen: true },
  { label: "AEO / AI Search",   us: "Incluido en Tier 1", them1: null,             them2: null,         usGreen: true },
];

export default function Compare() {
  return (
    <section id="compare">
      <div className="wrap">
        <div className="compare-header">
          <div className="sec-eyebrow rv">Comparativa</div>
          <h2 className="sec-title rv rv-d1">InnerSCE vs el resto</h2>
        </div>

        <table className="compare-table rv rv-d1">
          <thead>
            <tr>
              <th className="td-label" style={{ width: "32%" }}></th>
              <th className="th-us">InnerSCE</th>
              <th className="th-them">Agencia tradicional</th>
              <th className="th-them">Freelancer</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <td className="td-label">{row.label}</td>
                <td className="td-us">
                  <span className="tag-yes">✓ {row.us}</span>
                </td>
                <td className="td-them">
                  {row.them1 ? (
                    <span className="tag-no">✗ {row.them1}</span>
                  ) : (
                    <span className="tag-no">✗</span>
                  )}
                </td>
                <td className="td-them">
                  {row.them2 ? (
                    row.them2 === "Variable" || row.them2 === "Por hora" || row.them2 === "Media" || row.them2 === "Parcial"
                      ? row.them2
                      : <span className="tag-no">✗ {row.them2}</span>
                  ) : (
                    <span className="tag-no">✗</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
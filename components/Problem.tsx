export default function Problem() {
  return (
    <section id="problem">
      <div className="wrap">
        <div className="problem-intro">
          <div className="sec-eyebrow rv">Por qué InnerSCE</div>
          <h2 className="sec-title rv rv-d1">
            Las agencias cobran por tiempo.
            <br />
            Nosotros por el <em>sistema</em>.
          </h2>
          <p className="sec-sub sec-sub-c rv rv-d2">
            El modelo tradicional está roto. Retainers sin claridad, semanas de
            espera, dependencia permanente. Existe otra forma.
          </p>
        </div>

        <div className="problem-grid rv rv-d1">
          <div className="prob-col prob-col-a">
            <div className="prob-col-label">
              <span>&#10005;</span> Agencia tradicional
            </div>
            <div className="prob-item">
              <span className="prob-item-icon" style={{ fontSize: 15 }}>&#x1F4B2;</span>
              Retainer mensual sin resultado concreto
            </div>
            <div className="prob-item">
              <span className="prob-item-icon" style={{ fontSize: 15 }}>&#x23F3;</span>
              4&#x2013;8 semanas para &#x201C;empezar a ver algo&#x201D;
            </div>
            <div className="prob-item">
              <span className="prob-item-icon" style={{ fontSize: 15 }}>&#x1F512;</span>
              Dependencia total &#x2014; si se van, perdiste todo
            </div>
            <div className="prob-item">
              <span className="prob-item-icon" style={{ fontSize: 15 }}>&#x1F504;</span>
              Scope creep, reuniones infinitas, revisiones sin fin
            </div>
          </div>

          <div className="prob-col prob-col-b">
            <div className="prob-col-label">
              <span>&#10003;</span> InnerSCE
            </div>
            <div className="prob-item">
              <span className="prob-item-icon" style={{ fontSize: 15 }}>&#x1F4E6;</span>
              Paquete fijo. Sab&#x00E9;s exactamente lo que recib&#x00ED;s
            </div>
            <div className="prob-item">
              <span className="prob-item-icon" style={{ fontSize: 15 }}>&#x26A1;</span>
              7&#x2013;10 d&#x00ED;as. Con fecha de entrega real y cumplida
            </div>
            <div className="prob-item">
              <span className="prob-item-icon" style={{ fontSize: 15 }}>&#x1F3AF;</span>
              El sistema es tuyo. Oper&#x00E1;s sin depender de nosotros
            </div>
            <div className="prob-item">
              <span className="prob-item-icon" style={{ fontSize: 15 }}>&#x1F4C4;</span>
              Precio visible desde el primer contacto. Sin sorpresas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

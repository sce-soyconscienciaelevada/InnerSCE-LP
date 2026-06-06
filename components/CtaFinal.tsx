import QualifyForm from "./QualifyForm";

export default function CtaFinal() {
  return (
    <section id="cta-final">
      <div className="cta-glow" aria-hidden="true" />
      <div className="cta-final-inner">
        <div className="sec-badge rv" style={{ margin: "0 auto 28px" }}>
          <span className="sec-badge-dot" />
          Diagnóstico gratuito
        </div>
        <h2 className="cta-final-title rv rv-d1">
          Contanos tu negocio.<br /><em>En 24h te respondemos.</em>
        </h2>
        <p className="cta-final-sub rv rv-d2">
          5 preguntas. Sin llamada previa. Si hay fit, te enviamos el diagnóstico gratuito y coordinamos una sesión.
        </p>
        <QualifyForm />
      </div>
    </section>
  );
}
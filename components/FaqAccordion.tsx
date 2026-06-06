"use client";
import { useState } from "react";

const faqs = [
  {
    q: "¿Qué pasa si no estoy conforme con la entrega?",
    a: "Incluimos una ronda completa de revisiones sin cargo adicional. Ajustamos hasta que el sistema refleje exactamente lo que necesitás. Si después de eso seguís inconforme, revisamos juntos qué salió mal — sin costo.",
  },
  {
    q: "¿Necesito experiencia técnica para operar el sistema?",
    a: "No. Todo el sistema se entrega documentado con una guía de uso paso a paso, pensada para que vos o alguien de tu equipo pueda operar sin conocimiento técnico previo. Si algo no queda claro, respondemos por 30 días post-entrega.",
  },
  {
    q: "¿Trabajan con cualquier tipo de negocio?",
    a: "Sí, en cualquier industria. La condición es que tengas un producto o servicio validado — algo que ya vendiste al menos una vez. No trabajamos en etapa de idea porque no hay suficiente información para construir un sistema efectivo.",
  },
  {
    q: "¿Qué diferencia el Foundation Package de contratar un freelancer de copy?",
    a: "Un freelancer de copy entrega texto. Foundation entrega un sistema: copy web SEO-optimizado, estrategia de redes, Google Business Profile completo, mapa de palabras clave y optimización para buscadores de IA (ChatGPT, Google AI Overview). Seis entregables coordinados con una sola narrativa de marca.",
  },
  {
    q: "¿Puedo contratar módulos sueltos sin tomar un paquete?",
    a: "Sí. Tenemos módulos individuales desde $80 (artículo de blog) hasta $1,200 (Brand Book completo). Escribinos contando qué necesitás y te armamos una propuesta a medida en 24 horas.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq">
      <div className="wrap">
        <div className="faq-header">
          <div className="sec-eyebrow rv">FAQ</div>
          <h2 className="sec-title rv rv-d1">Preguntas frecuentes</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div key={i} className={`faq-item rv rv-d${Math.min(i + 1, 6)}${open === i ? " open" : ""}`}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {item.q}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
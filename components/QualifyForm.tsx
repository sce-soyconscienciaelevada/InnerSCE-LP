"use client";
import { useState } from "react";

const WEBHOOK = "https://sce-sce.app.n8n.cloud/webhook/intake";

export default function QualifyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [showWaField, setShowWaField] = useState(false);

  function handleContactMethod(val: string) {
    setShowWaField(val === "wa_other");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (data.contact_method === "wa_same") data.wa_number = data.phone;
    else if (data.contact_method !== "wa_other") data.wa_number = "";

    fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: "landing-qualify", ...data }),
    }).catch(() => {});

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="qualify-success show">
        ✓ Formulario recibido. Revisamos tu caso en las próximas 24 horas y te contactamos como preferiste.
      </div>
    );
  }

  return (
    <form className="qualify-form rv rv-d3" onSubmit={handleSubmit}>
      <div className="qualify-row">
        <div className="qualify-field">
          <label className="qualify-label" htmlFor="q-industry">Industria / sector</label>
          <input className="qualify-input" id="q-industry" name="industry" type="text" placeholder="Ej: gastronomía, moda, salud…" required />
        </div>
        <div className="qualify-field">
          <label className="qualify-label" htmlFor="q-goal">Objetivo principal</label>
          <select className="qualify-select" id="q-goal" name="goal" required defaultValue="">
            <option value="" disabled>Seleccioná uno</option>
            <option>Más visibilidad online</option>
            <option>Generar leads / consultas</option>
            <option>Construir mi marca</option>
            <option>Gestión de redes sociales</option>
            <option>Todo lo anterior</option>
          </select>
        </div>
      </div>
      <div className="qualify-row">
        <div className="qualify-field">
          <label className="qualify-label" htmlFor="q-budget">Presupuesto mensual</label>
          <select className="qualify-select" id="q-budget" name="budget" required defaultValue="">
            <option value="" disabled>Rango aproximado</option>
            <option>Menos de $500 USD</option>
            <option>$500 – $2,500 USD</option>
            <option>$2,500 – $5,000 USD</option>
            <option value="Mas de $5,000 USD">+$5,000 USD</option>
            <option>Todavía no lo tengo claro</option>
          </select>
        </div>
        <div className="qualify-field">
          <label className="qualify-label" htmlFor="q-timeline">¿Cuándo querés empezar?</label>
          <select className="qualify-select" id="q-timeline" name="timeline" required defaultValue="">
            <option value="" disabled>Timeline</option>
            <option>Esta semana</option>
            <option>Este mes</option>
            <option>En los próximos 3 meses</option>
            <option>Estoy investigando opciones</option>
          </select>
        </div>
      </div>
      <div className="qualify-field">
        <label className="qualify-label" htmlFor="q-email">Email de contacto</label>
        <input className="qualify-input" id="q-email" name="email" type="email" placeholder="Ej: hola@tumarca.com" required />
      </div>
      <div className="qualify-row">
        <div className="qualify-field">
          <label className="qualify-label" htmlFor="q-phone">Teléfono de contacto</label>
          <input className="qualify-input" id="q-phone" name="phone" type="tel" placeholder="Ej: +54 9 11 1234 5678" required />
        </div>
        <div className="qualify-field">
          <label className="qualify-label" htmlFor="q-contact-method">¿Cómo preferís que te contactemos?</label>
          <select
            className="qualify-select"
            id="q-contact-method"
            name="contact_method"
            required
            defaultValue=""
            onChange={(e) => handleContactMethod(e.target.value)}
          >
            <option value="" disabled>Seleccioná</option>
            <option value="wa_same">WhatsApp (este número)</option>
            <option value="wa_other">WhatsApp (otro número)</option>
            <option value="email">Solo email</option>
          </select>
        </div>
      </div>
      {showWaField && (
        <div className="qualify-field">
          <label className="qualify-label" htmlFor="q-wa-number">Número de WhatsApp (con código de país)</label>
          <input className="qualify-input" id="q-wa-number" name="wa_number" type="tel" placeholder="Ej: +54 9 11 9999 8888" required />
        </div>
      )}
      <button type="submit" className="btn-cta qualify-submit">
        <span>Enviar y recibir diagnóstico</span>
        <svg className="arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
      <p className="qualify-disclaimer">Sin compromiso · Sin llamada previa · Revisamos en 24h</p>
    </form>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ConsentCheckbox from "@/components/forms/ConsentCheckbox";
import { localeFromPathname } from "@/lib/legal/consent-texts";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12 }
    );
    node.querySelectorAll(".reveal").forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ─── Icons ─── */

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v18" />
      <path d="M1 6l5 9h6l5-9" />
      <path d="M18 6l5 9h-6" />
      <circle cx="12" cy="3" r="1" />
    </svg>
  );
}

function CalculatorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="8" y2="10.01" />
      <line x1="12" y1="10" x2="12" y2="10.01" />
      <line x1="16" y1="10" x2="16" y2="10.01" />
      <line x1="8" y1="14" x2="8" y2="14.01" />
      <line x1="12" y1="14" x2="12" y2="14.01" />
      <line x1="16" y1="14" x2="16" y2="14.01" />
      <line x1="8" y1="18" x2="16" y2="18" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--fog)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

/* ─── Data ─── */

const sections = [
  {
    icon: <FileTextIcon />,
    title: "Fase Documental Inicial",
    points: "10 puntos",
    desc: "Certificados, últimas voluntades, testamento, identificación de herederos y documentación base.",
  },
  {
    icon: <FolderIcon />,
    title: "Inventario Patrimonial",
    points: "12 puntos",
    desc: "Inmuebles, financieros, empresa familiar, vehículos, activos digitales y cálculo del caudal relicto neto.",
  },
  {
    icon: <ScaleIcon />,
    title: "Escenario Sucesorio — CCCat",
    points: "10 puntos",
    desc: "Institución de heredero, legítima catalana (1/4), heredamientos, cuarta viudal y elemento transfronterizo.",
  },
  {
    icon: <CalculatorIcon />,
    title: "Liquidación Fiscal ISD",
    points: "10 puntos",
    desc: "Reducciones, bonificaciones catalanas, tarifa, coeficiente multiplicador y recargo por extemporaneidad.",
  },
  {
    icon: <ClipboardIcon />,
    title: "Tramitación y Cierre",
    points: "5 puntos",
    desc: "Modelos 660 y 650, presentación ante ATC, inscripción registral y archivo del expediente.",
  },
];

const audiences = [
  {
    title: "Abogados civilistas",
    desc: "Que gestionan herencias en Cataluña y necesitan un sistema de control fiable por expediente.",
  },
  {
    title: "Asesores fiscales",
    desc: "Que liquidan ISD ante la ATC y buscan trazabilidad en cada reducción y bonificación aplicada.",
  },
  {
    title: "Notarías",
    desc: "Que necesitan verificar la completitud del expediente antes de la escritura de aceptación y adjudicación.",
  },
];

const faqs = [
  {
    q: "¿Es realmente gratuita?",
    a: "Sí, sin coste ni compromiso. Es un recurso profesional que puedes descargar, imprimir y usar en tu despacho desde hoy.",
  },
  {
    q: "¿Qué normativa cubre?",
    a: "Derecho civil catalán (Codi Civil de Catalunya, Libro IV) y normativa fiscal ISD de Cataluña (Llei 19/2010 y modificaciones). Incluye referencias a artículos específicos.",
  },
  {
    q: "¿Quién está detrás de este recurso?",
    a: "Ulpiano, la plataforma de gestión sucesoria integral para abogados, asesores y notarías. Desarrollada por profesionales del derecho y la tecnología.",
  },
];

/* ─── FAQ Component ─── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--mist)", padding: "var(--space-5) 0" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "var(--space-4)",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          padding: 0,
        }}
        aria-expanded={open}
      >
        <span style={{ fontSize: 16, fontWeight: 500, color: "var(--ink)", lineHeight: 1.4 }}>
          {q}
        </span>
        <span
          style={{
            flexShrink: 0,
            transition: "transform 200ms ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            color: "var(--slate)",
          }}
        >
          <ChevronDown />
        </span>
      </button>
      <div style={{ maxHeight: open ? 200 : 0, overflow: "hidden", transition: "max-height 300ms ease" }}>
        <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.7, paddingTop: "var(--space-3)" }}>
          {a}
        </p>
      </div>
    </div>
  );
}

/* ─── Main ─── */

export function ChecklistSqueezeClient() {
  const revealRef = useReveal();
  const stagger = (i: number) => ({ transitionDelay: `${i * 100}ms` });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [consentProcessing, setConsentProcessing] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const locale = localeFromPathname(usePathname() ?? "");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consentProcessing) {
      setConsentError(true);
      return;
    }
    setSending(true);
    setError("");
    setConsentError(false);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      source: "checklist-sucesorio",
      consentProcessing,
      consentMarketing,
      locale,
      formId: "resource-download" as const,
      sourceUrl: window.location.href,
    };

    try {
      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setSubmitted(true);

      const w = window as Window & { dataLayer?: Record<string, unknown>[] };
      w.dataLayer?.push({
        event: "lead_magnet_download",
        lead_magnet_name: "checklist-sucesorio-cataluna",
        lead_source: "squeeze-page",
      });
      w.dataLayer?.push({
        event: "generate_lead",
        lead_type: "lead_magnet",
        currency: "EUR",
        value: 25,
      });
    } catch {
      setError("Ha ocurrido un error. Inténtalo de nuevo.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div ref={revealRef}>
      {/* ═══ HERO ═══ */}
      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-16))",
          paddingBottom: "var(--space-20)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -100,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(45,106,79,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container">
          <div className="squeeze-hero-grid">
            {/* Left: copy */}
            <div>
              <p
                className="eyebrow reveal"
                style={{ color: "var(--ulpiano-green)", marginBottom: "var(--space-4)" }}
              >
                RECURSO GRATUITO PARA PROFESIONALES
              </p>
              <h1
                className="h1 reveal"
                style={{ color: "var(--white)", maxWidth: 560, ...stagger(1) }}
              >
                Los 47 puntos que ningún expediente sucesorio en Cataluña debería saltarse
              </h1>
              <p
                className="body-lg reveal"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  maxWidth: 480,
                  marginTop: "var(--space-6)",
                  ...stagger(2),
                }}
              >
                La checklist que usan los despachos para no dejar cabos sueltos: desde la
                apertura hasta la presentación ante la ATC. Normativa catalana actualizada.
              </p>

              <div
                className="reveal"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-3)",
                  marginTop: "var(--space-8)",
                  ...stagger(3),
                }}
              >
                {[
                  "5 fases del proceso sucesorio cubiertas",
                  "Referencias a artículos del CCCat y Llei 19/2010",
                  "Checkboxes imprimibles para usar en cada expediente",
                  "Sección de activos digitales (criptomonedas, wallets)",
                ].map((point) => (
                  <div
                    key={point}
                    style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}
                  >
                    <CheckIcon />
                    <span style={{ fontSize: 15, color: "rgba(255,255,255,0.85)" }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form card */}
            <div className="reveal" style={stagger(2)}>
              <div
                className="card"
                style={{
                  padding: "var(--space-8)",
                  borderTop: "3px solid var(--ulpiano-green)",
                  position: "sticky",
                  top: 96,
                }}
              >
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "var(--space-6) 0" }}>
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background: "var(--green-bg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto var(--space-6)",
                      }}
                    >
                      <DownloadIcon />
                    </div>
                    <h3 style={{ color: "var(--ink)", fontSize: 22 }}>Tu checklist está lista</h3>
                    <p
                      style={{
                        color: "var(--slate)",
                        fontSize: 15,
                        lineHeight: 1.6,
                        marginTop: "var(--space-3)",
                        maxWidth: 360,
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Descarga el PDF directamente o revisa tu correo donde encontrarás una copia.
                    </p>
                    <a
                      href="/recursos/checklist-sucesorio-cataluna.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary btn-primary--large"
                      style={{ marginTop: "var(--space-6)", display: "inline-flex" }}
                    >
                      Descargar checklist (PDF)
                    </a>
                    <div style={{ marginTop: "var(--space-6)" }}>
                      <Link href="/demo" className="btn-ghost btn-ghost--dark">
                        Ver Ulpiano en acción <ArrowIcon />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <div style={{ marginBottom: "var(--space-6)" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "var(--space-3)",
                          marginBottom: "var(--space-4)",
                        }}
                      >
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 8,
                            background: "var(--green-bg)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <DownloadIcon />
                        </div>
                        <h3 style={{ color: "var(--ink)", fontSize: 20 }}>
                          Descarga gratuita
                        </h3>
                      </div>
                      <p style={{ color: "var(--slate)", fontSize: 14, lineHeight: 1.6 }}>
                        Introduce tu nombre y email profesional para recibir la checklist al instante.
                      </p>
                    </div>
                    <form
                      onSubmit={handleSubmit}
                      style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}
                    >
                      <div>
                        <label htmlFor="squeeze-name" style={labelStyle}>
                          Nombre
                        </label>
                        <input
                          type="text"
                          id="squeeze-name"
                          name="name"
                          required
                          placeholder="María García"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label htmlFor="squeeze-email" style={labelStyle}>
                          Email profesional
                        </label>
                        <input
                          type="email"
                          id="squeeze-email"
                          name="email"
                          required
                          placeholder="maria@despacho.com"
                          style={inputStyle}
                        />
                      </div>
                      <ConsentCheckbox
                        locale={locale}
                        formId="resource-download"
                        showMarketing
                        consentProcessing={consentProcessing}
                        consentMarketing={consentMarketing}
                        onProcessingChange={(v) => {
                          setConsentProcessing(v);
                          if (v) setConsentError(false);
                        }}
                        onMarketingChange={setConsentMarketing}
                        processingError={consentError}
                      />
                      {error && (
                        <p style={{ fontSize: 13, color: "var(--error)", lineHeight: 1.4 }}>
                          {error}
                        </p>
                      )}
                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={sending}
                        style={{ width: "100%", padding: "16px 32px", fontSize: 16 }}
                      >
                        {sending ? "Enviando..." : "Descargar checklist gratuita"}
                      </button>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 6,
                          fontSize: 12,
                          color: "var(--fog)",
                        }}
                      >
                        <LockIcon />
                        <span>Sin spam. Solo contenido profesional relevante.</span>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUÉ INCLUYE ═══ */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            <p className="eyebrow" style={{ color: "var(--slate)" }}>
              QUÉ INCLUYE
            </p>
            <h2 className="h2" style={{ color: "var(--ink)", marginTop: "var(--space-3)" }}>
              5 fases, 47 puntos de control
            </h2>
            <p
              className="body-lg"
              style={{
                color: "var(--slate)",
                maxWidth: 560,
                margin: "var(--space-4) auto 0",
              }}
            >
              Cada punto incluye descripción, detalle operativo y referencia normativa cuando aplica.
            </p>
          </div>

          <div className="squeeze-sections-grid">
            {sections.map((section, i) => (
              <div
                key={section.title}
                className="card reveal"
                style={{ ...stagger(i), display: "flex", flexDirection: "column", gap: "var(--space-4)" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "var(--green-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {section.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)", lineHeight: 1.3 }}>
                      {section.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        color: "var(--ulpiano-green)",
                        fontWeight: 500,
                      }}
                    >
                      {section.points}
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "var(--slate)", lineHeight: 1.6 }}>
                  {section.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PARA QUIÉN ES ═══ */}
      <section style={{ background: "var(--surface)", padding: "var(--space-16) 0" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
            <p className="eyebrow" style={{ color: "var(--slate)" }}>
              PARA QUIÉN ES
            </p>
            <h2 className="h2" style={{ color: "var(--ink)", marginTop: "var(--space-3)" }}>
              Diseñada para profesionales que gestionan herencias en Cataluña
            </h2>
          </div>

          <div className="squeeze-audience-grid">
            {audiences.map((aud, i) => (
              <div
                key={aud.title}
                className="reveal"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--space-4)",
                  ...stagger(i),
                }}
              >
                <div style={{ flexShrink: 0, marginTop: 2 }}>
                  <CheckIcon />
                </div>
                <div>
                  <p style={{ fontSize: 16, fontWeight: 600, color: "var(--ink)", lineHeight: 1.3 }}>
                    {aud.title}
                  </p>
                  <p style={{ fontSize: 14, color: "var(--slate)", lineHeight: 1.6, marginTop: 4 }}>
                    {aud.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ background: "var(--white)", padding: "var(--space-16) 0" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="reveal" style={{ marginBottom: "var(--space-8)" }}>
            <p className="eyebrow" style={{ color: "var(--slate)" }}>
              PREGUNTAS FRECUENTES
            </p>
            <h2 className="h2" style={{ color: "var(--ink)", marginTop: "var(--space-3)" }}>
              Sobre la checklist
            </h2>
          </div>
          <div className="reveal" style={stagger(1)}>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="cta-final" style={{ padding: "var(--space-24) 0" }}>
        <div className="cta-final__orb" />
        <div className="cta-final__content container">
          <h2
            className="h2 reveal"
            style={{
              color: "var(--white)",
              maxWidth: 680,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            47 puntos de control. Un PDF. Cero errores.
          </h2>
          <p
            className="reveal"
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 520,
              margin: "var(--space-4) auto 0",
              textAlign: "center",
              lineHeight: 1.6,
              ...stagger(1),
            }}
          >
            Descarga la checklist y empieza a usarla en tu próximo expediente sucesorio.
          </p>
          <div
            className="reveal"
            style={{
              display: "flex",
              gap: "var(--space-4)",
              justifyContent: "center",
              marginTop: "var(--space-8)",
              flexWrap: "wrap",
              ...stagger(2),
            }}
          >
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="btn-primary btn-primary--large">
              Descargar checklist gratuita
            </a>
          </div>
          <p
            className="reveal"
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
              marginTop: "var(--space-4)",
              textAlign: "center",
              ...stagger(3),
            }}
          >
            Recurso profesional gratuito · Por Ulpiano
          </p>
        </div>
      </section>

      <style>{`
        .squeeze-hero-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: var(--space-12);
          align-items: start;
        }
        .squeeze-sections-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        .squeeze-sections-grid > :nth-child(4),
        .squeeze-sections-grid > :nth-child(5) {
          grid-column: span 1;
        }
        .squeeze-audience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }
        @media (max-width: 1023px) {
          .squeeze-hero-grid {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }
          .squeeze-sections-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 767px) {
          .squeeze-sections-grid {
            grid-template-columns: 1fr;
          }
          .squeeze-audience-grid {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }
        }
      `}</style>
    </div>
  );
}

/* ─── Shared form styles ─── */

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 500,
  color: "var(--ink)",
  marginBottom: 6,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  fontSize: 15,
  fontFamily: "var(--font-body)",
  color: "var(--ink)",
  background: "var(--surface)",
  border: "1px solid var(--mist)",
  borderRadius: 8,
  outline: "none",
  transition: "border-color 200ms ease, box-shadow 200ms ease",
};

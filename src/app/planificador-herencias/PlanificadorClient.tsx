"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* =============================================
   SVG ICONS (inline, no raster images)
   ============================================= */

function ClipboardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

function TreeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="5" r="2" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="18" cy="17" r="2" />
      <path d="M12 7v4" />
      <path d="M8 11h8" />
      <path d="M6 15v-4h0" />
      <path d="M18 15v-4h0" />
    </svg>
  );
}

function BranchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="6" y1="3" x2="6" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
      <path d="M4 6v12a2 2 0 0 0 2 2h14V12" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

function CryptoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <circle cx="12" cy="17" r=".5" fill="currentColor" />
    </svg>
  );
}

function MinusCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ulpiano-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* =============================================
   SCROLL REVEAL HOOK
   ============================================= */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const children = node.querySelectorAll(".reveal");
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}

/* =============================================
   ANIMATED COUNTER
   ============================================= */

function AnimatedMetric({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1200;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="mono"
        style={{
          fontSize: 56,
          fontWeight: 400,
          color: "var(--green-light)",
          lineHeight: 1,
        }}
      >
        {display}
        {suffix}
      </div>
      <div
        style={{
          marginTop: "var(--space-3)",
          fontSize: 15,
          color: "rgba(255,255,255,0.7)",
          maxWidth: 240,
          margin: "var(--space-3) auto 0",
          lineHeight: 1.5,
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* =============================================
   MAIN COMPONENT
   ============================================= */

export function PlanificadorClient() {
  const [activeTab, setActiveTab] = useState(0);
  const revealRef = useReveal();

  /* Stagger reveal delays */
  const stagger = (i: number) => ({ transitionDelay: `${i * 100}ms` });

  return (
    <div ref={revealRef}>
      {/* ——————————————— NAV ——————————————— */}
      <nav className="nav" aria-label="Navegación principal">
        <div className="container nav-inner">
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-dm), 'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 22,
              color: "var(--white)",
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            ulpiano
          </Link>
          <a href="#solicita-demo" className="btn-primary" style={{ padding: "10px 24px", fontSize: 14 }}>
            Solicita demo
          </a>
        </div>
      </nav>

      {/* ——————————————— SECCIÓN 1: HERO ——————————————— */}
      <section
        style={{
          background: "var(--night)",
          paddingTop: "calc(64px + var(--space-12))",
          paddingBottom: "var(--space-20)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative orb */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(45,106,79,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-12)",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            {/* Left — Copy */}
            <div>
              <div
                className="eyebrow reveal"
                style={{ color: "rgba(255,255,255,0.5)", marginBottom: "var(--space-4)" }}
              >
                PLANIFICACI&Oacute;N SUCESORIA
              </div>
              <h1
                className="h1 reveal"
                style={{ color: "var(--white)", maxWidth: 580, ...stagger(1) }}
              >
                Todo el patrimonio del causante. Estructurado, valorado y listo para distribuir.
              </h1>
              <p
                className="body-lg reveal"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  maxWidth: 500,
                  marginTop: "var(--space-6)",
                  ...stagger(2),
                }}
              >
                Ulpiano consolida bienes, derechos y deudas en un &uacute;nico inventario.
                Calcula el caudal relicto neto, construye el &aacute;rbol familiar con grupos de
                parentesco y respeta autom&aacute;ticamente las leg&iacute;timas del Codi Civil de
                Catalunya.
              </p>
              <div
                className="reveal"
                style={{
                  display: "flex",
                  gap: "var(--space-4)",
                  marginTop: "var(--space-8)",
                  flexWrap: "wrap",
                  ...stagger(3),
                }}
              >
                <a href="#solicita-demo" className="btn-primary">
                  Solicita tu demo gratuita
                </a>
                <a href="#como-funciona" className="btn-ghost">
                  Ver c&oacute;mo funciona &rarr;
                </a>
              </div>
            </div>

            {/* Right — Mockup */}
            <div className="reveal hero-mockup-wrap" style={{ ...stagger(2) }}>
              <div className="mockup-window" style={{ marginBottom: -40 }}>
                <div className="mockup-titlebar">
                  <div className="mockup-dot" />
                  <div className="mockup-dot" />
                  <div className="mockup-dot" />
                  <span className="mockup-title">Inventario Patrimonial</span>
                </div>
                <div style={{ display: "flex", minHeight: 280 }}>
                  {/* Sidebar */}
                  <div
                    style={{
                      width: "60%",
                      borderRight: "1px solid var(--mist)",
                      padding: "var(--space-2) 0",
                    }}
                  >
                    {[
                      { name: "Inmuebles", count: 3, active: true },
                      { name: "Cuentas bancarias", count: 2, active: false },
                      { name: "Participaciones", count: 1, active: false },
                      { name: "Activos digitales", count: 2, active: false },
                      { name: "Pasivos", count: 1, active: false, warning: true },
                    ].map((item) => (
                      <div
                        key={item.name}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "10px 16px",
                          fontSize: 14,
                          color: "var(--ink)",
                          background: item.active
                            ? "rgba(45,106,79,0.06)"
                            : "transparent",
                          borderLeft: item.active
                            ? "3px solid var(--ulpiano-green)"
                            : "3px solid transparent",
                          cursor: "default",
                        }}
                      >
                        <span>{item.name}</span>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: 22,
                            height: 22,
                            borderRadius: 100,
                            fontSize: 12,
                            fontWeight: 600,
                            background: item.warning
                              ? "var(--warning-bg)"
                              : "var(--green-bg)",
                            color: item.warning
                              ? "var(--warning)"
                              : "var(--ulpiano-green)",
                          }}
                        >
                          {item.count}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Summary */}
                  <div
                    style={{
                      width: "40%",
                      padding: "var(--space-6)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "var(--space-4)",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--slate)",
                          marginBottom: 4,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Activos
                      </div>
                      <div
                        className="mono"
                        style={{ fontSize: 20, color: "var(--ink)" }}
                      >
                        &euro; 1.245.800
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--slate)",
                          marginBottom: 4,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Pasivos
                      </div>
                      <div
                        className="mono"
                        style={{ fontSize: 20, color: "var(--error)" }}
                      >
                        &minus; &euro; 185.200
                      </div>
                    </div>
                    <div
                      style={{
                        borderTop: "1px solid var(--mist)",
                        paddingTop: "var(--space-4)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--slate)",
                          marginBottom: 4,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Caudal relicto neto
                      </div>
                      <div
                        className="mono"
                        style={{
                          fontSize: 24,
                          fontWeight: 700,
                          color: "var(--ulpiano-green)",
                        }}
                      >
                        &euro; 1.060.600
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——————————————— SECCIÓN 2: EL PROBLEMA ——————————————— */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
          <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            EL PROBLEMA
          </div>
          <h2 className="h2 reveal" style={stagger(1)}>
            El inventario sucesorio no deber&iacute;a vivir en cinco hojas de c&aacute;lculo
          </h2>
          <div
            className="reveal"
            style={{
              marginTop: "var(--space-8)",
              textAlign: "left",
              ...stagger(2),
            }}
          >
            <p className="body-lg" style={{ color: "var(--slate)", lineHeight: 1.7 }}>
              Hoy, el profesional que gestiona una herencia empieza cada expediente de la misma
              forma: abre un Excel, crea pesta&ntilde;as para inmuebles, cuentas bancarias, deudas.
              Copia datos de escrituras a mano. Pide informaci&oacute;n a la familia por WhatsApp.
              Reconstruye el &aacute;rbol familiar en un Word. Y cuando llega al c&aacute;lculo de
              leg&iacute;timas, ya ha invertido horas en un trabajo que no es jur&iacute;dico — es
              administrativo.
            </p>
            <p
              className="body-lg"
              style={{ color: "var(--slate)", lineHeight: 1.7, marginTop: "var(--space-6)" }}
            >
              El resultado: datos dispersos, sin trazabilidad, sin conexi&oacute;n con el
              c&aacute;lculo fiscal, y con un riesgo latente de incoherencia entre lo que dice el
              inventario y lo que aparece en el cuaderno particional.
            </p>
          </div>
        </div>
      </section>

      {/* ——————————————— SECCIÓN 3: QUÉ PRODUCE — LOS 4 OUTPUTS ——————————————— */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
              RESULTADOS
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              Lo que obtienes con el Planificador de Herencias
            </h2>
            <p
              className="body-lg reveal"
              style={{ color: "var(--slate)", marginTop: "var(--space-4)", ...stagger(2) }}
            >
              No funcionalidades. Resultados listos para usar en el expediente.
            </p>
          </div>

          <div className="outputs-grid">
            {/* Card 1 — Inventario */}
            <div className="card reveal" style={stagger(0)}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "var(--green-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--ulpiano-green)",
                  marginBottom: "var(--space-5)",
                }}
              >
                <ClipboardIcon />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--ink)", marginBottom: "var(--space-3)" }}>
                El caudal relicto neto, calculado
              </h3>
              <p className="body-sm" style={{ color: "var(--slate)", marginBottom: "var(--space-5)" }}>
                Registra todos los activos del causante — inmuebles con cargas y coeficientes de
                participaci&oacute;n, cuentas bancarias, fondos de inversi&oacute;n, participaciones
                societarias, empresa familiar, bienes afectos a actividad econ&oacute;mica, derechos
                de cr&eacute;dito y activos digitales — junto con los pasivos deducibles. El sistema
                calcula autom&aacute;ticamente el caudal relicto neto: activos menos pasivos deducibles.
              </p>
              <div className="badge" style={{ marginBottom: "var(--space-5)" }}>
                Activos + Pasivos &rarr; Caudal neto
              </div>
              <div
                style={{
                  background: "var(--surface)",
                  borderRadius: "var(--radius-sm)",
                  padding: "var(--space-5)",
                  textAlign: "center",
                }}
              >
                <div className="mono" style={{ fontSize: 24, color: "var(--ulpiano-green)", fontWeight: 700 }}>
                  &euro; 1.060.600
                </div>
                <div style={{ fontSize: 13, color: "var(--slate)", marginTop: 4 }}>
                  caudal relicto neto
                </div>
              </div>
            </div>

            {/* Card 2 — Árbol familiar */}
            <div className="card reveal" style={stagger(1)}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "var(--green-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--ulpiano-green)",
                  marginBottom: "var(--space-5)",
                }}
              >
                <TreeIcon />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--ink)", marginBottom: "var(--space-3)" }}>
                El diagrama sucesorio, construido solo
              </h3>
              <p className="body-sm" style={{ color: "var(--slate)", marginBottom: "var(--space-5)" }}>
                Introduce los herederos, legatarios y sus relaciones con el causante. Ulpiano genera
                el &aacute;rbol familiar, asigna autom&aacute;ticamente los grupos de parentesco y
                calcula las leg&iacute;timas seg&uacute;n el Art. 451-5 del Codi Civil de Catalunya:
                1/4 del caudal computable. Si hay prelegados, aplica la regla de c&oacute;mputo a
                cuenta de leg&iacute;tima.
              </p>
              <div className="badge">CCCat integrado &middot; Leg&iacute;timas autom&aacute;ticas</div>
            </div>

            {/* Card 3 — Escenarios */}
            <div className="card reveal" style={stagger(2)}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "var(--green-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--ulpiano-green)",
                  marginBottom: "var(--space-5)",
                }}
              >
                <BranchIcon />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--ink)", marginBottom: "var(--space-3)" }}>
                Tres opciones de distribuci&oacute;n, comparadas en paralelo
              </h3>
              <p className="body-sm" style={{ color: "var(--slate)", marginBottom: "var(--space-5)" }}>
                Herencia directa, donaci&oacute;n en vida, usufructo al c&oacute;nyuge. El
                Planificador calcula el impacto fiscal y civil de cada escenario y lo presenta lado a
                lado. Tu cliente entiende qu&eacute; est&aacute; decidiendo. T&uacute; tienes los
                n&uacute;meros para fundamentar tu recomendaci&oacute;n profesional.
              </p>
              <div className="badge">Simulaci&oacute;n pre-mortem</div>
            </div>

            {/* Card 4 — Activos digitales */}
            <div className="card reveal" style={stagger(3)}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "var(--green-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--ulpiano-green)",
                  marginBottom: "var(--space-5)",
                }}
              >
                <WalletIcon />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--ink)", marginBottom: "var(--space-3)" }}>
                Criptomonedas, wallets y huella digital — inventariados como cualquier otro bien
              </h3>
              <p className="body-sm" style={{ color: "var(--slate)", marginBottom: "var(--space-5)" }}>
                Los activos digitales no son una nota al pie. En Ulpiano son una categor&iacute;a
                fiscal de primer nivel: criptomonedas con valoraci&oacute;n a fecha de devengo,
                identificaci&oacute;n de wallets y exchanges, e instrucciones de gesti&oacute;n para
                redes sociales y servicios cloud. Ninguna otra plataforma del mercado espa&ntilde;ol
                los trata con esta estructura.
              </p>
              <div className="badge badge--info">
                Categor&iacute;a fiscal estructurada &middot; &Uacute;nico en Espa&ntilde;a
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——————————————— SECCIÓN 4: CÓMO FUNCIONA ——————————————— */}
      <section
        id="como-funciona"
        style={{ background: "var(--white)", padding: "var(--space-20) 0" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
              PROCESO
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              De documentos sueltos a inventario estructurado
            </h2>
          </div>

          <div className="steps-grid">
            {[
              {
                num: "01",
                title: "Registra el patrimonio",
                desc: "Inmuebles, cuentas, inversiones, participaciones, deudas, activos digitales. Cada categoría tiene sus campos específicos: cargas, titularidades, coeficientes, valoraciones. Todo en un único panel.",
              },
              {
                num: "02",
                title: "Configura el escenario",
                desc: "Designa herederos y legatarios. Define las figuras jurídicas: heredero universal, legados específicos, usufructo vitalicio, sustituciones. El sistema identifica automáticamente los derechos de los legitimarios.",
              },
              {
                num: "03",
                title: "Compara escenarios",
                desc: "Evalúa distintas opciones de reparto y visualiza el impacto fiscal de cada una antes de decidir. La comparación es inmediata y los cálculos se ajustan en tiempo real.",
              },
              {
                num: "04",
                title: "Genera la documentación",
                desc: "El inventario, el árbol familiar y el escenario elegido alimentan directamente los módulos de cálculo fiscal y generación documental. Sin copiar datos. Sin rehacer tablas.",
              },
            ].map((step, i) => (
              <div
                key={step.num}
                className="reveal step-item"
                style={{ position: "relative", ...stagger(i) }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: -8,
                    left: 0,
                    fontFamily: "var(--font-dm), 'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 72,
                    color: "var(--mist)",
                    opacity: 0.5,
                    lineHeight: 1,
                    pointerEvents: "none",
                  }}
                >
                  {step.num}
                </div>
                <div style={{ position: "relative", paddingTop: 56 }}>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: "var(--ink)",
                      marginBottom: "var(--space-3)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="body-sm" style={{ color: "var(--slate)" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——————————————— SECCIÓN 5: PARA QUIÉN ——————————————— */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
            <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
              SEGMENTOS
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              Dise&ntilde;ado para quien gestiona herencias con volumen
            </h2>
          </div>

          {/* Tabs */}
          <div
            className="reveal"
            style={{
              display: "flex",
              gap: "var(--space-3)",
              justifyContent: "center",
              marginBottom: "var(--space-10)",
              flexWrap: "wrap",
              ...stagger(2),
            }}
          >
            {["Despachos de abogados", "Asesorías fiscales", "Notarías"].map(
              (label, i) => (
                <button
                  key={label}
                  className={`tab-btn ${activeTab === i ? "active" : ""}`}
                  onClick={() => setActiveTab(i)}
                  role="tab"
                  aria-selected={activeTab === i}
                >
                  {label}
                </button>
              )
            )}
          </div>

          {/* Tab panels */}
          <div className="reveal" style={stagger(3)}>
            {activeTab === 0 && (
              <TabPanel
                claim="El inventario patrimonial que montabas en dos días, listo en una sesión de trabajo."
                checks={[
                  "Todos los bienes del causante en un único panel con trazabilidad",
                  "Legítimas y cuotas calculadas con el derecho foral catalán integrado",
                  "El inventario conecta directamente con el módulo fiscal y el cuaderno particional",
                ]}
                mockupLabel="Vista del Inventario"
              />
            )}
            {activeTab === 1 && (
              <TabPanel
                claim="La base imponible empieza aquí. Y desde aquí llega al Modelo 650 sin errores de transcripción."
                checks={[
                  "Datos del patrimonio estructurados para alimentar el motor ISD",
                  "Valoraciones a fecha de devengo, no estimaciones manuales",
                  "Trazabilidad auditable ante la ATC desde el primer asiento",
                ]}
                mockupLabel="Vista Fiscal"
              />
            )}
            {activeTab === 2 && (
              <TabPanel
                claim="El testamento define la voluntad. El Planificador organiza el patrimonio que la sustenta."
                checks={[
                  "Visión consolidada de todo lo que el testador posee y debe",
                  "Configuración de figuras jurídicas alineada con la práctica notarial",
                  "Documentación centralizada y cifrada para cada expediente",
                ]}
                mockupLabel="Vista Notarial"
              />
            )}
          </div>
        </div>
      </section>

      {/* ——————————————— SECCIÓN 6: COMPARATIVA ——————————————— */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
              DIFERENCIADORES
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              Lo que Excel no puede hacer por ti
            </h2>
          </div>

          {/* Desktop table */}
          <div className="reveal comparison-desktop" style={stagger(2)}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Lo que haces hoy</th>
                  <th>Lo que hace Ulpiano</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.before}</td>
                    <td>{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="comparison-mobile">
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="card reveal"
                style={{ marginBottom: "var(--space-4)", ...stagger(i) }}
              >
                <div style={{ marginBottom: "var(--space-3)" }}>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "var(--slate)",
                    }}
                  >
                    Antes:
                  </span>
                  <p className="body-sm" style={{ color: "var(--slate)", marginTop: 4 }}>
                    {row.before}
                  </p>
                </div>
                <div>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "var(--ulpiano-green)",
                    }}
                  >
                    Con Ulpiano:
                  </span>
                  <p
                    className="body-sm"
                    style={{ color: "var(--ink)", fontWeight: 500, marginTop: 4 }}
                  >
                    {row.after}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——————————————— SECCIÓN 7: CATEGORÍAS PATRIMONIALES ——————————————— */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            <div className="eyebrow reveal" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
              COBERTURA
            </div>
            <h2 className="h2 reveal" style={stagger(1)}>
              Cada tipo de bien, con sus campos espec&iacute;ficos
            </h2>
          </div>

          <div className="categories-grid">
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                className="reveal"
                style={{
                  border: "1px solid var(--mist)",
                  borderRadius: "var(--radius-sm)",
                  padding: "var(--space-6)",
                  background: "var(--white)",
                  ...stagger(i),
                }}
              >
                <div
                  style={{
                    color: "var(--ulpiano-green)",
                    marginBottom: "var(--space-3)",
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "var(--ink)",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  {cat.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--slate)", lineHeight: 1.6 }}>
                  {cat.fields}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——————————————— SECCIÓN 8: MÉTRICAS ——————————————— */}
      <section style={{ background: "var(--night)", padding: "var(--space-24) 0" }}>
        <div className="container">
          <div className="metrics-grid">
            <AnimatedMetric
              value={100}
              suffix="%"
              label="Normativa catalana (CCCat + Llei 19/2010) integrada desde la base"
            />
            <AnimatedMetric
              value={35}
              suffix="%"
              label="Reducción media en tiempo de preparación del inventario"
            />
            <AnimatedMetric
              value={0}
              suffix=""
              label="Errores de transcripción entre inventario y cálculo fiscal"
            />
          </div>

        </div>
      </section>

      {/* ——————————————— SECCIÓN 9: CTA FINAL ——————————————— */}
      <section
        id="solicita-demo"
        style={{
          background: "linear-gradient(180deg, #0F1F3D 0%, #142647 100%)",
          padding: "var(--space-20) 0",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2
            className="h2 reveal"
            style={{
              color: "var(--white)",
              fontSize: 36,
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            El inventario patrimonial es donde empieza todo. Hazlo bien desde el primer dato.
          </h2>
          <p
            className="body-lg reveal"
            style={{
              color: "rgba(255,255,255,0.75)",
              maxWidth: 560,
              margin: "var(--space-6) auto 0",
              ...stagger(1),
            }}
          >
            Solicita una demo y comprueba c&oacute;mo Ulpiano estructura el patrimonio del causante,
            construye el escenario sucesorio y conecta cada dato con el c&aacute;lculo fiscal y la
            documentaci&oacute;n final.
          </p>
          <div
            className="reveal"
            style={{
              display: "flex",
              gap: "var(--space-4)",
              justifyContent: "center",
              marginTop: "var(--space-10)",
              flexWrap: "wrap",
              ...stagger(2),
            }}
          >
            <a href="#solicita-demo" className="btn-primary">
              Solicita tu demo gratuita
            </a>
            <a href="#" className="btn-ghost">
              Crea tu cuenta gratuita &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ——————————————— FOOTER ——————————————— */}
      <footer style={{ background: "var(--ink)", padding: "var(--space-12) 0" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "var(--space-4)",
            }}
          >
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-dm), 'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 20,
                color: "var(--white)",
                textDecoration: "none",
                letterSpacing: "-0.02em",
              }}
            >
              ulpiano
            </Link>
            <p style={{ fontSize: 14, color: "var(--fog)" }}>
              &copy; {new Date().getFullYear()} Ulpiano. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* ——————————————— RESPONSIVE + LAYOUT STYLES ——————————————— */}
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
          align-items: center;
        }
        .outputs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-8);
        }
        .step-item:not(:last-child)::after {
          content: '';
          position: absolute;
          top: 36px;
          right: calc(-1 * var(--space-4));
          width: calc(var(--space-8));
          border-top: 2px dashed var(--mist);
        }
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }
        .comparison-mobile {
          display: none;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: var(--space-10);
          }
          .hero-mockup-wrap {
            max-width: 540px;
            margin: 0 auto;
          }
          .outputs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-6);
          }
          .step-item::after {
            display: none !important;
          }
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .outputs-grid {
            grid-template-columns: 1fr;
          }
          .steps-grid {
            grid-template-columns: 1fr;
          }
          .categories-grid {
            grid-template-columns: 1fr;
          }
          .metrics-grid {
            grid-template-columns: 1fr;
            gap: var(--space-10);
          }
          .comparison-desktop {
            display: none;
          }
          .comparison-mobile {
            display: block;
          }
          section#solicita-demo .h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}

/* =============================================
   TAB PANEL COMPONENT
   ============================================= */

function TabPanel({
  claim,
  checks,
  mockupLabel,
}: {
  claim: string;
  checks: string[];
  mockupLabel: string;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-10)",
        alignItems: "center",
      }}
      className="tab-panel-grid"
    >
      <div>
        <p
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "var(--ink)",
            lineHeight: 1.4,
            marginBottom: "var(--space-6)",
          }}
        >
          &ldquo;{claim}&rdquo;
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {checks.map((check) => (
            <li
              key={check}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--space-3)",
                marginBottom: "var(--space-4)",
                fontSize: 15,
                color: "var(--ink)",
                lineHeight: 1.5,
              }}
            >
              <span style={{ flexShrink: 0, marginTop: 3 }}>
                <CheckIcon />
              </span>
              {check}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          background: "var(--surface)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--mist)",
          height: 260,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--fog)",
          fontSize: 15,
          fontWeight: 500,
        }}
      >
        {mockupLabel}
      </div>

      <style>{`
        .tab-panel-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-10);
          align-items: center;
        }
        @media (max-width: 768px) {
          .tab-panel-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

/* =============================================
   DATA
   ============================================= */

const comparisonRows = [
  {
    before: "Copias datos de escrituras a una hoja de cálculo",
    after: "Registras cada bien con sus campos específicos: cargas, titularidades, coeficientes",
  },
  {
    before: "Calculas el caudal relicto a mano",
    after: "El sistema lo calcula automáticamente al registrar activos y pasivos",
  },
  {
    before: "Reconstruyes el árbol familiar en Word",
    after: "El diagrama se genera con los herederos y sus relaciones",
  },
  {
    before: "Consultas la norma para aplicar legítimas",
    after: "El motor normativo aplica el Art. 451-5 CCCat sin intervención",
  },
  {
    before: "Mantienes varias versiones del inventario",
    after: "Un único inventario que alimenta todo el expediente",
  },
  {
    before: "Los activos digitales van en una nota a pie de página",
    after: "Categoría fiscal completa con valoración a fecha de devengo",
  },
];

const categories = [
  {
    icon: <BuildingIcon />,
    title: "Inmuebles",
    fields:
      "Dirección, referencia catastral, valor de referencia, cargas hipotecarias, titularidades, coeficiente de participación, uso.",
  },
  {
    icon: <BankIcon />,
    title: "Productos financieros",
    fields:
      "Cuentas bancarias, fondos de inversión, acciones cotizadas, planes de pensiones. Saldo a fecha de devengo.",
  },
  {
    icon: <BriefcaseIcon />,
    title: "Empresa familiar",
    fields:
      "Denominación social, NIF, porcentaje de participación, valor según último balance, bienes afectos. Preparado para la reducción del 95%.",
  },
  {
    icon: <KeyIcon />,
    title: "Derechos y muebles",
    fields:
      "Préstamos otorgados, vehículos, joyas, obras de arte, ajuar doméstico.",
  },
  {
    icon: <CryptoIcon />,
    title: "Activos digitales",
    fields:
      "Criptomonedas con valoración a fecha de devengo, wallets, exchanges, huella digital, instrucciones de gestión.",
  },
  {
    icon: <MinusCircleIcon />,
    title: "Pasivos deducibles",
    fields:
      "Hipotecas, préstamos, deudas fiscales, gastos de última enfermedad, gastos de sepelio. Resta automática.",
  },
];

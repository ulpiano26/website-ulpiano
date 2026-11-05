"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BookOpenCheck,
  FileSearch,
  PenLine,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/* =============================================
   MODULES — real AI capabilities only
   ============================================= */

type Module = {
  id: string;
  label: string;
  tagline: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  preview: PreviewBlock;
  bullets: string[];
};

type PreviewBlock = {
  kind: "extract" | "draft" | "consult" | "validate";
  doc: { title: string; meta: string };
  fields?: { key: string; value: string }[];
  draft?: { line: string; highlight?: boolean }[];
  question?: string;
  answer?: { text: string; citation: string };
  checks?: { label: string; status: "ok" | "warn" | "error" }[];
};

const modules: Module[] = [
  {
    id: "lectura",
    label: "Lectura de documentos",
    tagline: "PDF en datos estructurados",
    title: "De PDFs a datos en segundos",
    description:
      "Extrae datos estructurados de testamentos, certificados de defunción, últimas voluntades, escrituras y notas simples. Tú verificas, Ulpiano no inventa.",
    Icon: FileSearch,
    bullets: [
      "OCR + NLP entrenado con documentación española",
      "Datos mapeados directamente al expediente",
      "Confianza por campo y enlace al PDF original",
    ],
    preview: {
      kind: "extract",
      doc: {
        title: "Certificado de Últimas Voluntades",
        meta: "PDF · 2 páginas",
      },
      fields: [
        { key: "Causante", value: "Joan Puig Ribas" },
        { key: "DNI", value: "46 815 299-B" },
        { key: "Fecha de defunción", value: "12/02/2026" },
        { key: "Testamento", value: "Notaría Montaner · 04/11/2021" },
      ],
    },
  },
  {
    id: "redaccion",
    label: "Redacción asistida",
    tagline: "Borrador desde el expediente",
    title: "Crea el cuaderno particional sin teclear",
    description:
      "Genera el borrador del cuaderno particional, escritos y comunicaciones a herederos desde los datos ya estructurados del expediente. Sin transcribir dos veces lo mismo.",
    Icon: PenLine,
    bullets: [
      "Plantillas conectadas al caso real",
      "El abogado revisa y firma. La IA solo redacta",
      "Trazabilidad garantizada por campo",
    ],
    preview: {
      kind: "draft",
      doc: {
        title: "Cuaderno particional · Borrador",
        meta: "Expediente #2026-042",
      },
      draft: [
        { line: "COMPARECEN" },
        {
          line: "D.ª Marta Puig Serra, mayor de edad, con DNI 46 815 300-A…",
          highlight: true,
        },
        { line: "EXPOSICIONES" },
        {
          line: "Primero. — Don Joan Puig Ribas falleció el 12 de febrero de 2026…",
          highlight: true,
        },
      ],
    },
  },
  {
    id: "consulta",
    label: "Consulta normativa",
    tagline: "Respuestas con cita literal",
    title: "Consulta el derecho foral con precisión",
    description:
      "Pregunta sobre el CCCat, el ISD catalán o la Ley 29/1987. Ulpiano IA responde con cita literal del artículo y enlace a la fuente oficial. Si no tiene fuente, no responde.",
    Icon: BookOpenCheck,
    bullets: [
      "Corpus normativo estatal y autonómico",
      "Respuesta con artículo, número y texto íntegro",
      "Nunca inventa jurisprudencia: sin fuente no responde",
    ],
    preview: {
      kind: "consult",
      doc: {
        title: "Consulta · Código Civil Catalán",
        meta: "Llei 10/2008",
      },
      question:
        "¿Cuál es la cuantía de la legítima colectiva en Cataluña?",
      answer: {
        text: "La legítima en Cataluña es de la cuarta parte del valor neto de la herencia.",
        citation: "Art. 451-5 Codi Civil de Catalunya (Llibre IV)",
      },
    },
  },
  {
    id: "validacion",
    label: "Validación de coherencia",
    tagline: "Expediente revisado antes que tú",
    title: "Un segundo par de ojos para tu expediente",
    description:
      "Revisa el expediente completo y señala inconsistencias: heredero sin NIF, activo sin valoración, documento posterior al fallecimiento, legitimarios no identificados.",
    Icon: ShieldCheck,
    bullets: [
      "Reglas deterministas + razonamiento de la IA",
      "Incidencias priorizadas por impacto",
      "Revisión automática antes de firmar",
    ],
    preview: {
      kind: "validate",
      doc: {
        title: "Revisión del expediente",
        meta: "Expediente #2026-042 · 14 comprobaciones",
      },
      checks: [
        { label: "Herederos con NIF identificado", status: "ok" },
        { label: "Valoración de inmuebles completa", status: "ok" },
        { label: "Documento fechado posterior al óbito", status: "warn" },
        { label: "Legitimario sin notificación legal", status: "error" },
      ],
    },
  },
];

const iaItems = [
  "Lectura y extracción de documentos del expediente",
  "Redacción asistida del cuaderno particional y escritos",
  "Consulta normativa con cita literal de artículos",
  "Validación de coherencia del expediente",
];

const deterministicItems = [
  "Cálculo de legítimas según el CCCat",
  "Motor fiscal ISD (base, reducciones, bonificaciones)",
  "Modelos tributarios 650, 651, 652, 653, 660",
  "Escenarios sucesorios y simulaciones",
];

/* =============================================
   PREVIEW — mismo panel de datos que el hero
   ============================================= */

function PanelFrame({
  doc,
  Icon,
  children,
}: {
  doc: PreviewBlock["doc"];
  Icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(64,145,108,0.42), rgba(59,104,196,0.16) 55%, transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="relative overflow-hidden bg-white"
        style={{
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow:
            "0 40px 80px -20px rgba(0,0,0,0.55), 0 20px 45px -15px rgba(45,106,79,0.25), 0 4px 12px rgba(0,0,0,0.2)",
          color: "var(--ink)",
        }}
      >
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{ borderBottom: "1px solid var(--mist)" }}
        >
          <span
            className="grid h-7 w-7 shrink-0 place-items-center rounded-lg"
            style={{ background: "var(--green-bg)", color: "var(--ulpiano-green)" }}
          >
            <Icon size={15} strokeWidth={2} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[14px] font-semibold leading-5">{doc.title}</p>
            <p className="text-[12px] leading-4" style={{ color: "var(--slate)" }}>
              {doc.meta}
            </p>
          </div>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}

function DataRow({
  icon,
  label,
  trailing,
}: {
  icon: React.ReactNode;
  label: string;
  trailing: React.ReactNode;
}) {
  return (
    <li
      className="flex items-center gap-3 border-b border-[var(--mist)] py-3 last:border-b-0"
      style={{ minHeight: 56 }}
    >
      <span
        className="grid h-7 w-7 shrink-0 place-items-center rounded-lg"
        style={{ background: "var(--green-bg)", color: "var(--ulpiano-green)" }}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1 text-[13px] leading-5">{label}</span>
      <span className="max-w-[62%] shrink text-right leading-5">{trailing}</span>
    </li>
  );
}

function ExtractPreview({ block }: { block: PreviewBlock }) {
  return (
    <PanelFrame doc={block.doc} Icon={FileSearch}>
      <p className="mb-1 text-[12px] font-medium leading-[18px]" style={{ color: "var(--slate)" }}>
        Datos extraídos por IA
      </p>
      <ul>
        {block.fields?.map((field) => (
          <DataRow
            key={field.key}
            icon={<FileSearch size={14} strokeWidth={2} aria-hidden="true" />}
            label={field.key}
            trailing={
              <span className="font-mono text-[13px]" style={{ color: "var(--ink)" }}>
                {field.value}
              </span>
            }
          />
        ))}
      </ul>
    </PanelFrame>
  );
}

function DraftPreview({ block }: { block: PreviewBlock }) {
  return (
    <PanelFrame doc={block.doc} Icon={PenLine}>
      <div
        className="relative px-5 py-4"
        style={{
          background: "var(--surface)",
          borderRadius: 8,
          borderLeft: "3px solid var(--ulpiano-green)",
        }}
      >
        {block.draft?.map((line, index) =>
          line.highlight ? (
            <p
              key={index}
              className="text-[14px] leading-relaxed"
              style={{
                color: "var(--ink)",
                background: "var(--green-bg)",
                borderRadius: 6,
                padding: "4px 8px",
                marginTop: index === 0 ? 0 : 8,
              }}
            >
              {line.line}
            </p>
          ) : (
            <p
              key={index}
              className="text-[11px] font-semibold uppercase"
              style={{
                letterSpacing: "0.08em",
                color: "var(--ulpiano-green)",
                marginTop: index === 0 ? 0 : 16,
                marginBottom: 4,
              }}
            >
              {line.line}
            </p>
          ),
        )}
      </div>
    </PanelFrame>
  );
}

function ConsultPreview({ block }: { block: PreviewBlock }) {
  return (
    <PanelFrame doc={block.doc} Icon={BookOpenCheck}>
      <div className="flex flex-col gap-3">
        <div className="rounded-lg px-4 py-3" style={{ background: "var(--surface)" }}>
          <p
            className="mb-1 text-[11px] font-medium uppercase"
            style={{ letterSpacing: "0.06em", color: "var(--slate)" }}
          >
            Pregunta del abogado
          </p>
          <p className="text-[14px] leading-relaxed" style={{ color: "var(--ink)" }}>
            {block.question}
          </p>
        </div>
        <div
          className="rounded-lg px-4 py-3"
          style={{ background: "var(--green-bg)" }}
        >
          <p
            className="mb-1 flex items-center gap-1.5 text-[11px] font-medium uppercase"
            style={{ letterSpacing: "0.06em", color: "var(--ulpiano-green)" }}
          >
            <Sparkles size={12} strokeWidth={2} aria-hidden="true" />
            Respuesta de Ulpiano IA
          </p>
          <p className="text-[14px] leading-relaxed" style={{ color: "var(--ink)" }}>
            {block.answer?.text}
          </p>
          <p className="mt-3 font-mono text-[12px]" style={{ color: "var(--ulpiano-green)" }}>
            {block.answer?.citation}
          </p>
        </div>
      </div>
    </PanelFrame>
  );
}

const statusBadgeClass: Record<"ok" | "warn" | "error", string> = {
  ok: "badge",
  warn: "badge badge--warning",
  error: "badge",
};

const statusLabel: Record<"ok" | "warn" | "error", string> = {
  ok: "Correcto",
  warn: "Revisar",
  error: "Error",
};

function ValidatePreview({ block }: { block: PreviewBlock }) {
  return (
    <PanelFrame doc={block.doc} Icon={ShieldCheck}>
      <ul>
        {block.checks?.map((check) => (
          <DataRow
            key={check.label}
            icon={<ShieldCheck size={14} strokeWidth={2} aria-hidden="true" />}
            label={check.label}
            trailing={
              <span
                className={statusBadgeClass[check.status]}
                style={
                  check.status === "error"
                    ? { background: "var(--error-bg)", color: "var(--error)" }
                    : undefined
                }
              >
                {statusLabel[check.status]}
              </span>
            }
          />
        ))}
      </ul>
    </PanelFrame>
  );
}

function Preview({ block }: { block: PreviewBlock }) {
  if (block.kind === "extract") return <ExtractPreview block={block} />;
  if (block.kind === "draft") return <DraftPreview block={block} />;
  if (block.kind === "consult") return <ConsultPreview block={block} />;
  return <ValidatePreview block={block} />;
}

function CompareCard({
  tone,
  title,
  icon,
  items,
}: {
  tone: "ia" | "engine";
  title: string;
  icon: React.ReactNode;
  items: string[];
}) {
  const isIa = tone === "ia";
  return (
    <article className="card !p-0 flex h-full flex-col overflow-hidden">
      <div
        className="flex items-center gap-3 px-6 py-5"
        style={{ background: isIa ? "var(--green-bg)" : "var(--night)" }}
      >
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
          style={
            isIa
              ? { background: "var(--white)", color: "var(--ulpiano-green)" }
              : { background: "rgba(255,255,255,0.12)", color: "var(--white)" }
          }
        >
          {icon}
        </span>
        <h3
          className="m-0"
          style={{ color: isIa ? "var(--ulpiano-green)" : "var(--white)", fontSize: 20 }}
        >
          {title}
        </h3>
      </div>
      <ul className="flex flex-1 flex-col gap-4 px-6 py-6">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-[15px] leading-relaxed"
            style={{ color: "var(--ink)" }}
          >
            <span
              className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: isIa ? "var(--ulpiano-green)" : "var(--night)" }}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

/* =============================================
   MAIN CLIENT
   ============================================= */

export default function IaClient() {
  const [activeId, setActiveId] = useState(modules[0].id);
  const active = modules.find((module) => module.id === activeId) ?? modules[0];

  return (
    <>
      <section
        className="relative overflow-hidden text-white"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 80% 15%, rgba(56, 120, 220, 0.22) 0%, transparent 65%), linear-gradient(180deg, #0A1630 0%, #0F1F3D 55%, #132B54 100%)",
          paddingTop: "calc(64px + var(--space-16))",
          paddingBottom: "var(--space-16)",
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="hero__orb" aria-hidden="true" />
        <div className="container relative z-10">
          <div className="hero__grid">
            <div>
              <p className="eyebrow hero__eyebrow animate-fade-in-up">Ulpiano IA</p>
              <h1 className="hero__title text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-balance animate-fade-in-up leading-tight text-white">
                Inteligencia artificial donde aporta.
                <br />
                <span className="hero__title-accent">Motor determinista donde es crítico.</span>
              </h1>
              <p
                className="hero__subtitle text-base md:text-lg text-white/60 animate-fade-in-up"
                style={{ animationDelay: "100ms" }}
              >
                Ulpiano IA se aplica a lo que la inteligencia artificial hace bien: leer, redactar,
                consultar y validar. El cálculo del ISD y las legítimas se resuelven con motores
                deterministas auditables.{" "}
                <strong
                  className="font-semibold"
                  style={{
                    color: "var(--ulpiano-green)",
                    background: "var(--green-bg)",
                    borderRadius: 6,
                    padding: "1px 6px",
                  }}
                >
                  Nunca con IA.
                </strong>
              </p>

              <nav
                aria-label="Capacidades de Ulpiano IA"
                className="mt-6 flex flex-wrap gap-2 animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                {modules.map((module) => {
                  const isActive = module.id === activeId;
                  return (
                    <button
                      key={module.id}
                      type="button"
                      onClick={() => setActiveId(module.id)}
                      aria-pressed={isActive}
                      className="rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green-light)]"
                      style={
                        isActive
                          ? {
                              background: "var(--white)",
                              color: "var(--night)",
                              border: "1px solid var(--white)",
                            }
                          : {
                              background: "rgba(255,255,255,0.08)",
                              color: "rgba(255,255,255,0.92)",
                              border: "1px solid rgba(255,255,255,0.16)",
                            }
                      }
                    >
                      {module.label}
                    </button>
                  );
                })}
              </nav>

              <div
                className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                <Link
                  href="/demo"
                  className="btn-primary w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)]"
                >
                  Reserva tu demo
                </Link>
              </div>
            </div>

            <div className="hero__visual animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              <Preview key={active.id} block={active.preview} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20" id="capacidad-activa" aria-live="polite">
        <div className="container">
          <div className="max-w-[720px]">
            <p className="eyebrow" style={{ color: "var(--slate)" }}>
              {active.tagline}
            </p>
            <h2 className="mt-3" style={{ color: "var(--ink)" }}>
              {active.title}
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed" style={{ color: "var(--slate)" }}>
              {active.description}
            </p>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {active.bullets.map((bullet) => (
              <li key={bullet} className="card">
                <span className="output-card__icon" aria-hidden="true">
                  <active.Icon size={22} strokeWidth={2} />
                </span>
                <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--slate)" }}>
                  {bullet}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="mb-10 max-w-[720px]">
            <p className="eyebrow" style={{ color: "var(--slate)" }}>
              La frontera es clara
            </p>
            <h2 className="mt-3" style={{ color: "var(--ink)" }}>
              La IA nunca calcula la cuota del ISD
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed" style={{ color: "var(--slate)" }}>
              Todo lo que pueda acabar ante Hacienda, un juez o un cliente, lo resuelve un motor
              determinista con la norma citada y cada paso auditable.{" "}
              <strong className="font-semibold" style={{ color: "var(--ink)" }}>
                Ulpiano IA acompaña; no decide lo que no debe decidir.
              </strong>
            </p>
          </div>
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            <CompareCard
              tone="ia"
              title="Con Ulpiano IA"
              icon={<Sparkles size={22} strokeWidth={2} aria-hidden="true" />}
              items={iaItems}
            />
            <CompareCard
              tone="engine"
              title="Con motor determinista"
              icon={<ShieldCheck size={22} strokeWidth={2} aria-hidden="true" />}
              items={deterministicItems}
            />
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-final__orb" aria-hidden="true" />
        <div className="container">
          <div className="cta-final__content">
            <h2 className="cta-final__title">Ve Ulpiano IA sobre un expediente real</h2>
            <p className="cta-final__subtitle">
              25 minutos. Traemos un expediente sucesorio y te enseñamos dónde la IA ayuda y dónde
              el motor determinista toma el relevo. Sin compromiso.
            </p>
            <div className="cta-final__btn">
              <Link href="/demo" className="btn-primary btn-primary--large">
                Reserva tu demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import HeroCa from "./_components/HeroCa";
import IntroVideoSection from "@/features/intro-video/IntroVideoSection";
import { introVideoContentCa } from "@/features/intro-video/content";

export const metadata: Metadata = {
  title: "Plataforma Integral de Gestió Successòria",
  description:
    "D'inventari a quadern particional: Ulpiano estructura, valida i documenta el procés successori per a advocats, assessors i notaries.",
  alternates: {
    canonical: "https://ulpiano.es/ca",
    languages: {
      es: "https://ulpiano.es",
      ca: "https://ulpiano.es/ca",
      "x-default": "https://ulpiano.es",
    },
  },
  openGraph: {
    url: "https://ulpiano.es/ca",
    images: [{ url: "https://ulpiano.es/opengraph-image", width: 1200, height: 630, alt: "Ulpiano" }],
  },

};

const soluciones = [
  {
    href: "/ca/solucions/planificacio-successoria",
    title: "Planificació Successòria",
    desc: "Inventari patrimonial complet, arbre familiar, càlcul de llegítimes segons el CCCat i escenaris de distribució comparats.",
    tag: "Inventari · Distribució",
  },
  {
    href: "/ca/solucions/fiscalitat-successoria",
    title: "Fiscalitat Successòria",
    desc: "Autoliquidació automatitzada dels Models 650, 651, 652, 653 i 660 amb normativa estatal i autonòmica actualitzada.",
    tag: "ISD · ATC · Models fiscals",
  },
  {
    href: "/ca/solucions/documentacio-successoria",
    title: "Documentació Successòria",
    desc: "Generació del quadern particional, escriptura de partició i inventari formal des de les dades de l'expedient. Sense transcriure.",
    tag: "Quadern particional · Escriptures",
  },
  {
    href: "/ca/solucions/processament-documental",
    title: "Processament Documental",
    desc: "OCR i IA per digitalitzar, classificar i extreure dades de certificats de defunció, testaments i escriptures.",
    tag: "OCR · IA · Digitalització",
  },
];

const segments = [
  { href: "/ca/pensat-per/despatxos", label: "Despatxos d'advocats" },
  { href: "/ca/pensat-per/notaries", label: "Notaries" },
  { href: "/ca/pensat-per/assessories", label: "Assessories fiscals" },
  { href: "/ca/pensat-per/family-office", label: "Family Office" },
  { href: "/ca/pensat-per/funeraries", label: "Funeràries" },
  { href: "/ca/pensat-per/asseguradores", label: "Asseguradores" },
];

export default function HomeCaPage() {
  return (
    <>
      {/* Organization + WebSite schema per al català */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://ulpiano.es/ca",
            name: "Ulpiano",
            inLanguage: "ca",
          }),
        }}
      />

      {/* HERO */}
      <HeroCa />

      {/* INTRO VIDEO */}
      <IntroVideoSection content={introVideoContentCa} />

      {/* OUTPUTS / SOLUCIONS */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            SOLUCIONS
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 640 }}>
            Una plataforma per a tot el cicle successori
          </h2>
          <p className="body-lg" style={{ color: "var(--slate)", maxWidth: 640, marginTop: "var(--space-4)" }}>
            Ulpiano cobreix l&apos;inventari patrimonial, la fiscalitat, la documentació
            i la tramitació digital — tot des d&apos;un sol expedient.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "var(--space-6)",
              marginTop: "var(--space-10)",
            }}
            className="home-ca-grid"
          >
            {soluciones.map((s) => (
              <Link key={s.href} href={s.href} className="card" style={{ textDecoration: "none", display: "block" }}>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "var(--ulpiano-green)",
                    background: "var(--green-bg)",
                    padding: "3px 10px",
                    borderRadius: 4,
                    marginBottom: "var(--space-4)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {s.tag}
                </span>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--ink)", marginBottom: "var(--space-3)" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.7 }}>{s.desc}</p>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: "var(--space-5)",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--ulpiano-green)",
                  }}
                >
                  Veure solució →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PENSAT PER */}
      <section style={{ background: "var(--surface)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            PENSAT PER
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 640 }}>
            Qui gestiona herències a Catalunya ho fa amb Ulpiano
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "var(--space-4)",
              marginTop: "var(--space-8)",
            }}
            className="home-ca-segments"
          >
            {segments.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                style={{
                  display: "block",
                  padding: "var(--space-5)",
                  background: "var(--white)",
                  borderRadius: 10,
                  border: "1px solid var(--mist)",
                  textDecoration: "none",
                  color: "var(--ink)",
                  fontWeight: 600,
                  fontSize: 15,
                }}
              >
                {s.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COM FUNCIONA */}
      <section style={{ background: "var(--white)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            COM FUNCIONA
          </div>
          <h2 className="h2" style={{ color: "var(--ink)", maxWidth: 640 }}>
            De l&apos;expedient en brut al quadern particional en quatre passes
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "var(--space-6)",
              marginTop: "var(--space-10)",
            }}
            className="home-ca-steps"
          >
            {[
              {
                n: "01",
                t: "Inventari patrimonial",
                d: "Béns, drets i deutes del causant consolidats en un únic inventari amb valoracions i titularitats.",
              },
              {
                n: "02",
                t: "Escenaris successoris",
                d: "Arbre familiar, càlcul de llegítimes segons el CCCat i simulació de distribució entre hereus.",
              },
              {
                n: "03",
                t: "Càlcul fiscal automàtic",
                d: "Models 650, 660 i complementaris generats des de l&apos;expedient amb la Llei 19/2010 aplicada.",
              },
              {
                n: "04",
                t: "Documentació final",
                d: "Quadern particional i escriptura de partició a partir de les dades. Sense transcriure formularis.",
              },
            ].map((step) => (
              <div key={step.n}>
                <div
                  className="mono"
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--ulpiano-green)",
                    marginBottom: "var(--space-3)",
                  }}
                >
                  {step.n}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)", marginBottom: "var(--space-2)" }}>
                  {step.t}
                </h3>
                <p style={{ fontSize: 14, color: "var(--slate)", lineHeight: 1.6 }}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        style={{
          background: "linear-gradient(180deg, #0F1F3D 0%, #142647 100%)",
          padding: "var(--space-20) 0",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="h2" style={{ color: "var(--white)", maxWidth: 700, margin: "0 auto" }}>
            L&apos;expedient successori, estructurat de principi a fi.
          </h2>
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 560, margin: "var(--space-6) auto 0" }}>
            Sol·licita una demostració de 25 minuts sobre un expedient real.
            Sense compromís.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", marginTop: "var(--space-8)", flexWrap: "wrap" }}>
            <Link href="/ca/demo" className="btn-primary">
              Sol·licita la teva demo
            </Link>
            <Link href="/ca/contacte" className="btn-ghost">
              Contacta amb l&apos;equip →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

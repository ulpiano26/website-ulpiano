"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { CategoryHero, HeroTitleAccent } from "@/components/hero/HeroShell";
import {
  CheckCircle2,
  ArrowRight,
  Compass,
  Building2,
  PieChart,
  Target,
  Layers,
  Scale,
  Briefcase
} from "lucide-react";

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
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const children = node.querySelectorAll(".reveal");
    children.forEach((child) => {
      child.classList.add("opacity-0");
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}

/* =============================================
   DATA
   ============================================= */
const featureBlocks = [
  {
    icon: <PieChart size={28} strokeWidth={1.5} />,
    title: "Escenaris Fiscals Comparats",
    subtitle: "Analitza el cost fiscal real de cada decisió patrimonial abans de prendre-la.",
    features: [
      {
        title: "Simulació Multi-Escenari",
        desc: "Compara herència directa vs. donacions en vida. Pren decisions recolzades per càlculs fiscals precisos.",
      },
      {
        title: "Impacte Fiscal Immediat",
        desc: "Visualitza la quota de l'ISD projectada per a cada hereu segons la normativa autonòmica actual.",
      },
    ],
  },
  {
    icon: <Building2 size={28} strokeWidth={1.5} />,
    title: "Consolidació de Patrimoni Complex",
    subtitle: "Tot el patrimoni familiar, independentment de la seva complexitat, en un sol lloc.",
    features: [
      {
        title: "Inventari Integral",
        desc: "Immobles en múltiples jurisdiccions, participacions societàries, comptes i carteres d'inversió.",
      },
      {
        title: "Estructures Societàries",
        desc: "Modelatge de hòldings, estructures d'empresa familiar i participacions indirectes per a un càlcul real.",
      },
    ],
  },
  {
    icon: <Briefcase size={28} strokeWidth={1.5} />,
    title: "Successió de l'Empresa Familiar",
    subtitle: "Optimització fiscal en la transmissió de l'activitat empresarial (Art. 7).",
    features: [
      {
        title: "Càlcul d'Exempcions",
        desc: "Simulació de les bonificacions aplicables per transmissió d'empresa familiar o participacions.",
      },
      {
        title: "Planificació d'Usdefruits",
        desc: "Anàlisi de l'impacte de deixar l'usdefruit de les accions al cònjuge i la nua propietat als fills.",
      },
    ],
  },
];

const claims = [
  "Simulació fiscal pre-mortem exacta",
  "Consolidació de patrimonis complexos",
  "Optimització de l'Empresa Familiar",
  "Presa de decisions basades en dades",
];

const steps = [
  {
    title: "Inventari Patrimonial",
    desc: "Ulpiano estructura i classifica immobles, participacions societàries i actius financers.",
  },
  {
    title: "Estructura Familiar",
    desc: "Defineix l'arbre genealògic, graus de parentiu i models de successió base.",
  },
  {
    title: "Disseny d'Escenaris",
    desc: "Crea alternatives: donacions, pactes successoris o manteniment de l'empresa familiar.",
  },
  {
    title: "Anàlisi Comparativa",
    desc: "Compara el cost fiscal de cada escenari i decideix l'estratègia patrimonial òptima.",
  },
];

const testimonials = [
  {
    quote: "Poder mostrar a les famílies de forma visual l'estalvi fiscal que suposa planificar en vida enfront d'una successió no planificada ha canviat les nostres reunions.",
    author: "Ricard M., Director de Family Office",
    location: "Madrid",
  },
  {
    quote: "La consolidació de patrimonis amb estructures societàries complexes era un mal de cap. Ulpiano calcula l'impacte fiscal de tota la cadena.",
    author: "Marta G., Wealth Manager",
    location: "Barcelona",
  },
];

/* =============================================
   MAIN COMPONENT
   ============================================= */
export function FamilyOfficeClientCa() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      {/* ═══ HERO ═══ */}
      <CategoryHero
        eyebrow="Pensat per a Family Office"
        title={<>Planificació pre-mortem. Patrimoni complex, <HeroTitleAccent>consolidat</HeroTitleAccent>.</>}
        subtitle="Anticipa't a la successió. Compara escenaris fiscals en temps real, consolida actius i optimitza la transmissió de l'empresa familiar."
        primaryHref="/ca/demo"
        primaryLabel="Reserva la teva Demo"
        secondaryLabel="Descobrir avantatges"
      />

      {/* ═══ PROPUESTA DE VALOR ═══ */}
      <section id="propuesta" className="py-24 bg-white border-b border-slate-200">
        <div className="container">
          <div className="reveal text-center max-w-[700px] mx-auto mb-20">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Per a Wealth Managers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
              Decisions basades en impacte fiscal real
            </h2>
            <p className="text-[17px] text-slate-500">
              Transforma la planificació successòria d'un exercici teòric a una simulació exacta amb xifres reals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureBlocks.map((block, i) => (
              <div key={block.title} className="reveal bg-slate-50 rounded-3xl p-8 border border-slate-200 transition-all hover:shadow-md hover:bg-white" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 border border-emerald-100/50">
                  {block.icon}
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">
                  {block.title}
                </h3>
                <p className="text-[15px] font-medium text-emerald-600 mb-6">
                  {block.subtitle}
                </p>
                <div className="space-y-5">
                  {block.features.map((feat, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-[15px] text-ink mb-1">{feat.title}</div>
                        <p className="text-sm text-slate-600 leading-relaxed m-0">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLAIMS RÁPIDOS ═══ */}
      <section className="py-12 bg-slate-900 border-b border-slate-800">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            {claims.map((claim, i) => (
              <div key={i} className="reveal flex items-center gap-3 bg-slate-800/50 border border-slate-700 px-5 py-3 rounded-xl" style={{ animationDelay: `${i * 100}ms` }}>
                <CheckCircle2 size={18} className="text-emerald-400" />
                <span className="text-sm font-medium text-white/90">{claim}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CÓMO FUNCIONA ═══ */}
      <section className="py-24 bg-white border-b border-slate-200 overflow-hidden relative">
        <div className="container relative z-10">
          <div className="reveal text-center max-w-[700px] mx-auto mb-16">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Flux de Planificació
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              De l'inventari a l'estratègia òptima
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="reveal relative group" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 h-full transition-all duration-300 group-hover:bg-white group-hover:shadow-lg group-hover:-translate-y-1 group-hover:border-emerald-500/30">
                  <div className="text-[64px] font-black text-slate-100 leading-none mb-4 tracking-tighter group-hover:text-emerald-50 transition-colors">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-3">{step.title}</h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIOS ═══ */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-[1000px]">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((t, i) => (
              <div key={i} className="reveal bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm relative" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-emerald-500 mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" opacity="0.2"/>
                  </svg>
                </div>
                <p className="text-lg font-medium text-ink leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-lg">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-ink text-sm">{t.author}</div>
                    <div className="text-sm text-slate-500">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CROSS-LINKS ═══ */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-slate-400 font-bold tracking-widest text-xs uppercase block">
              Explora les nostres solucions
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: "/ca/solucions/planificacio-successoria",
                label: "Planificació Successòria",
                desc: "Eines de simulació avançada",
              },
              {
                href: "/ca/solucions/fiscalitat-successoria",
                label: "Fiscalitat Successòria",
                desc: "Motor de càlcul de l'ISD",
              },
              {
                href: "/ca/pensat-per/despatxos",
                label: "Per a Despatxos",
                desc: "Plataforma integral per a advocats",
              },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="reveal group block p-6 rounded-2xl border border-slate-200 hover:border-emerald-500/30 hover:bg-emerald-50/30 transition-all text-center" style={{ animationDelay: `${i * 100}ms` }}>
                <h3 className="text-lg font-bold text-ink mb-1 group-hover:text-emerald-700 transition-colors">{link.label}</h3>
                <p className="text-sm text-slate-500 m-0">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="bg-night py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(45,106,79,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="container relative z-10 text-center max-w-[700px]">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
            Protegeix el llegat dels teus clients
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Dissenya la millor estratègia successòria basant-te en simulacions fiscals precises i un inventari patrimonial centralitzat.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/ca/demo" className="btn-primary px-8 py-3.5 shadow-[0_0_20px_rgba(45,106,79,0.4)]">
              Sol·licita la teva demo gratis
            </Link>
            <Link href="/ca/demo" className="btn-ghost text-white/80 hover:text-white px-6 border border-white/20">
              Crear compte ara <ArrowRight size={18} className="ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

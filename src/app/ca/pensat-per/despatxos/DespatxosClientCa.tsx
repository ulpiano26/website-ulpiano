"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { CategoryHero, HeroTitleAccent } from "@/components/hero/HeroShell";
import {
  CheckCircle2,
  ArrowRight,
  ClipboardList,
  Calculator,
  FileSignature,
  Eye,
  Clock,
  ShieldCheck,
  Layers,
  Network
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
    icon: <Network size={28} strokeWidth={1.5} />,
    title: "Gestió Digital d'Expedients",
    subtitle: "L'expedient successori complet, estructurat i clar.",
    features: [
      {
        title: "Pas a Pas Digital",
        desc: "Defineix paràmetres legals (llegítimes, règim foral) i afegeix dades d'hereus i béns.",
      },
      {
        title: "Diagrames Interactius",
        desc: "Mostra l'arbre familiar i l'estructura patrimonial, facilitant l'explicació al client.",
      },
    ],
  },
  {
    icon: <Calculator size={28} strokeWidth={1.5} />,
    title: "Atribució i Control Fiscal",
    subtitle: "Distribució patrimonial i fiscalitat successòria, automatitzades.",
    features: [
      {
        title: "Reports d'Atribució",
        desc: "Presenta un desglossament detallat sobre la distribució de béns i l'obligació tributària.",
      },
      {
        title: "Simulacions d'Impostos",
        desc: "Calcula en segons quant pagarà cada hereu, considerant reduccions i bonificacions.",
      },
    ],
  },
  {
    icon: <FileSignature size={28} strokeWidth={1.5} />,
    title: "Creació de Documents i Signatura",
    subtitle: "De dades estructurades a documents definitius.",
    features: [
      {
        title: "Automatització Documental",
        desc: "Genera testaments, pactes successoris i escriptures adaptades a la normativa vigent.",
      },
      {
        title: "Models Fiscals",
        desc: "Accelera la formalització autocompletant models 650, 651 i 660 sense errors de transcripció.",
      },
    ],
  },
];

const claims = [
  "Atribucions successòries en minuts",
  "Planificació legal meditada",
  "Llegítimes calculades automàticament",
  "Documentació a punt per signar",
];

const benefits = [
  {
    icon: <Eye size={28} strokeWidth={1.5} />,
    title: "Transparència total per al client",
    desc: "Ofereix diagrames clars i simulacions en temps real, generant confiança i diferenciant-te de la competència.",
  },
  {
    icon: <Clock size={28} strokeWidth={1.5} />,
    title: "Màxima eficiència interna",
    desc: "Automatitza processos repetitius, elimina la transcripció manual de dades i allibera centenars d'hores de treball.",
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: "Reducció de riscos legals",
    desc: "Ulpiano garanteix la coherència amb la normativa successòria, càlculs fiscals exactes i actualitzacions forals.",
  },
  {
    icon: <Layers size={28} strokeWidth={1.5} />,
    title: "Un servei integral de principi a fi",
    desc: "Combina l'assessorament estratègic amb una plataforma robusta que cobreix des de l'inventari fins al pagament de l'ISD.",
  },
];

const testimonials = [
  {
    quote: "Des que fem servir Ulpiano, la preparació d'un expedient successori ens porta la meitat de temps. I el client entén per fi què està signant.",
    author: "Marta R., Advocada",
    location: "Despatx a Girona",
  },
  {
    quote: "La visualització de l'arbre familiar i les simulacions fiscals en temps real van canviar radicalment la forma en què presentem les herències a les famílies.",
    author: "Jordi P., Advocat Civilista",
    location: "Barcelona",
  },
];

/* =============================================
   MAIN COMPONENT
   ============================================= */
export function DespatxosClientCa() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      {/* ═══ HERO ═══ */}
      <CategoryHero
        eyebrow="Pensat per a Advocats"
        title={<>Optimitza la gestió d'herències i ofereix <HeroTitleAccent>claredat absoluta</HeroTitleAccent></>}
        subtitle="Agilitza l'elaboració i el seguiment d'expedients successoris, oferint al client diagrames interactius i simulacions fiscals en temps real."
        primaryHref="/ca/demo"
        primaryLabel="Reserva la teva Demo"
        secondaryLabel="Descobrir avantatges"
      />

      {/* ═══ PROPUESTA DE VALOR ═══ */}
      <section id="propuesta" className="py-24 bg-white border-b border-slate-200">
        <div className="container">
          <div className="reveal text-center max-w-[700px] mx-auto mb-20">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Pel teu despatx
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
              Per què Ulpiano per a Advocats?
            </h2>
            <p className="text-[17px] text-slate-500">
              Automatitza tasques de baix valor, visualitza la distribució de béns i escala el teu volum d'expedients amb seguretat jurídica total.
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

      {/* ═══ BENEFICIOS CLAVE ═══ */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container">
          <div className="reveal text-center max-w-[700px] mx-auto mb-16">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Beneficis
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              El que canvia al teu despatx amb Ulpiano
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="reveal bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 transition-all hover:shadow-md flex flex-col sm:flex-row gap-6 items-start" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 text-emerald-600 flex items-center justify-center shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-3">{benefit.title}</h3>
                  <p className="text-[15.5px] text-slate-600 leading-relaxed m-0">{benefit.desc}</p>
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
                desc: "Mòdul patrimonial complet",
              },
              {
                href: "/ca/solucions/fiscalitat-successoria",
                label: "Fiscalitat Successòria",
                desc: "Motor ISD automatitzat",
              },
              {
                href: "/ca/solucions/documentacio-successoria",
                label: "Documentació Successòria",
                desc: "Generació documental intel·ligent",
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
            Eleva l'estàndard del teu despatx
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Uneix-te als professionals que ja han transformat la seva pràctica successòria amb Ulpiano.
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

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
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


/* =============================================
   MAIN COMPONENT
   ============================================= */
export function DespatxosClientCa() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      {/* ═══ HERO ═══ */}
      <section className="bg-night pt-[calc(64px+4rem)] pb-24 relative overflow-hidden">
        {/* Decorative Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-emerald-500 opacity-[0.12] blur-[120px]" />
        
        <div className="container relative z-10 text-center max-w-[800px]">
          <div className="flex items-center justify-center gap-3 mb-8 reveal">
            <div className="h-[1px] w-8 bg-emerald-500/50" />
            <span className="text-emerald-400/90 text-xs font-bold tracking-[0.2em] uppercase">
              Pensat per a Advocats
            </span>
            <div className="h-[1px] w-8 bg-emerald-500/50" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-8 reveal tracking-tight text-balance" style={{ animationDelay: '100ms' }}>
            Optimitza la gestió d'herències i ofereix <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">claredat absoluta</span>
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed text-white/60 mb-12 reveal text-balance mx-auto max-w-[640px]" style={{ animationDelay: '200ms' }}>
            Agilitza l'elaboració i el seguiment d'expedients successoris, oferint al client diagrames interactius i simulacions fiscals en temps real.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 reveal" style={{ animationDelay: '300ms' }}>
            <Link href="/ca/demo" className="btn-primary shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)] px-8 py-3.5 text-base">
              Reserva la teva Demo
            </Link>
            <Link href="#propuesta" className="btn-ghost group text-white/80 hover:text-white px-6">
              Descobrir avantatges
              <ArrowRight size={18} className="transition-transform group-hover:translate-y-1 ml-2 rotate-90 group-hover:rotate-90" />
            </Link>
          </div>
        </div>
      </section>

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
      <section className="py-24 bg-white">
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
            Prova Ulpiano amb un expedient real.
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

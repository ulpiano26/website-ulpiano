"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  FileSignature,
  FolderLock,
  MessageSquare,
  Users,
  FileText,
  Lock,
  Link as LinkIcon,
  ShieldCheck,
  Building
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
    icon: <Users size={28} strokeWidth={1.5} />,
    title: "Expedient Post-Testament Actiu",
    subtitle: "La relació amb el client no s'acaba amb la signatura. L'expedient segueix viu.",
    features: [
      {
        title: "Seguiment Continu del Client",
        desc: "El testament és només l'inici. Ulpiano manté l'expedient actiu amb alertes, terminis i esdeveniments successoris posteriors.",
      },
      {
        title: "Alertes i Recordatoris Automàtics",
        desc: "Terminis fiscals, canvis normatius que afecten l'expedient i esdeveniments successoris pendents.",
      },
    ],
  },
  {
    icon: <FolderLock size={28} strokeWidth={1.5} />,
    title: "Documentació Centralitzada",
    subtitle: "Tot l'expedient en un sol lloc. Les escriptures, generades des de les dades.",
    features: [
      {
        title: "Repositori Xifrat per Expedient",
        desc: "Testament, certificat de defunció, escriptures, DNIs — tot xifrat, accessible per rol. Sense documents dispersos.",
      },
      {
        title: "Escriptures des de Dades",
        desc: "L'escriptura de partició redactada a partir de les dades estructurades de l'expedient. Sense començar des de zero.",
      },
    ],
  },
  {
    icon: <MessageSquare size={28} strokeWidth={1.5} />,
    title: "Coordinació amb el Client",
    subtitle: "Un canal únic per expedient. Sense emails, sense WhatsApp.",
    features: [
      {
        title: "Canal de Comunicació Integrat",
        desc: "Cada expedient té el seu canal. El client pregunta, tu respons. Sense fils de correu perduts.",
      },
      {
        title: "Panell d'Estat Visible",
        desc: "El client veu en quin punt està el seu expedient: què està fet, què falta, què ve després. Transparència total.",
      },
    ],
  },
];

const claims = [
  "L'escriptura de partició, generada des de l'expedient",
  "El seguiment post-testament a la plataforma",
  "La documentació xifrada i centralitzada",
  "Comunicació amb el client sense sortir d'Ulpiano",
];

const benefits = [
  {
    icon: <Users size={28} strokeWidth={1.5} />,
    title: "Fidelització a llarg termini",
    desc: "L'expedient post-testament manté la relació activa durant anys. La teva notaria, present quan la família més ho necessita.",
  },
  {
    icon: <FileSignature size={28} strokeWidth={1.5} />,
    title: "Eficiència Documental",
    desc: "Escriptures generades directament des de les dades estructurades de l'expedient. Menys redacció manual, més precisió.",
  },
  {
    icon: <Lock size={28} strokeWidth={1.5} />,
    title: "Seguretat i Control Absolut",
    desc: "Documentació xifrada accessible només per rol autoritzat. Traçabilitat total de qui accedeix a quina informació i quan.",
  },
  {
    icon: <LinkIcon size={28} strokeWidth={1.5} />,
    title: "Coordinació sense Fricció",
    desc: "Un canal únic per expedient per a comunicar-te amb els hereus i advocats. Tota interacció traçable i arxivada al seu lloc.",
  },
];


/* =============================================
   MAIN COMPONENT
   ============================================= */
export function NotariesClientCa() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      {/* ═══ HERO ═══ */}
      <section className="bg-night pt-[calc(64px+4rem)] pb-24 relative overflow-hidden">
        {/* Decorative Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-emerald-500 opacity-[0.12] blur-[120px]" />
        
        <div className="container relative z-10 text-center max-w-[850px]">
          <div className="flex items-center justify-center gap-3 mb-8 reveal">
            <div className="h-[1px] w-8 bg-emerald-500/50" />
            <span className="text-emerald-400/90 text-xs font-bold tracking-[0.2em] uppercase">
              Pensat per a Notaries
            </span>
            <div className="h-[1px] w-8 bg-emerald-500/50" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.15] mb-8 reveal tracking-tight text-balance" style={{ animationDelay: '100ms' }}>
            L'expedient post-testament, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">actiu</span>. La documentació, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">centralitzada</span>.
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed text-white/60 mb-12 reveal text-balance mx-auto max-w-[680px]" style={{ animationDelay: '200ms' }}>
            Amb Ulpiano, la relació amb el teu client no s'acaba a la signatura. L'expedient continua viu, la documentació està xifrada, i les escriptures es generen des de les dades.
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
              Per a la teva notaria
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
              Per què Ulpiano per a Notaries?
            </h2>
            <p className="text-[17px] text-slate-500">
              Modernitza el flux de treball notarial. Des de la custòdia segura de voluntats fins a la redacció automàtica de l'escriptura de partició.
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
              El que canvia a la teva notaria amb Ulpiano
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
                href: "/ca/solucions/processament-documental",
                label: "Processament amb IA",
                desc: "Extracció automàtica de dades registrals",
              },
              {
                href: "/ca/solucions/planificacio-successoria",
                label: "Planificació Successòria",
                desc: "Mòdul patrimonial complet",
              },
              {
                href: "/ca/solucions/documentacio-successoria",
                label: "Documentació Successòria",
                desc: "Generació d'escriptura de partició",
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
            Lidera la innovació en el sector notarial
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Fidelitza les famílies més enllà de la signatura i optimitza el treball intern dels teus oficials.
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

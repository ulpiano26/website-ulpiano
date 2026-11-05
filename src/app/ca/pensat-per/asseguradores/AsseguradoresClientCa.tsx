"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ShieldPlus,
  FileBarChart,
  HeartPulse,
  PackagePlus,
  Smile,
  ShieldCheck,
  Sparkles
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
    icon: <ShieldPlus size={28} strokeWidth={1.5} />,
    title: "Complement a Pòlisses de Vida i Decessos",
    subtitle: "La teva pòlissa no s'acaba en l'indemnització. La tramitació successòria, integrada.",
    features: [
      {
        title: "Servei Post-Defunció Estructurat",
        desc: "De la defunció a la distribució de l'herència — les famílies reben un camí gestionat, no només una indemnització.",
      },
      {
        title: "Proposta de Valor Diferenciada",
        desc: "Paquet integral: pòlissa + gestió successòria. Cap competidor ofereix aquesta combinació de tranquil·litat i servei.",
      },
    ],
  },
  {
    icon: <FileBarChart size={28} strokeWidth={1.5} />,
    title: "Expedient Successori i Fiscalitat",
    subtitle: "Les dades de l'assegurat vinculades a l'expedient. L'impacte fiscal, calculat.",
    features: [
      {
        title: "Dades Vinculades Automàticament",
        desc: "Les dades de l'assegurat i els beneficiaris flueixen directament a l'expedient successori. Sense re-entrada manual.",
      },
      {
        title: "Impacte Fiscal Estimat",
        desc: "Calculem la càrrega fiscal que implica el cobrament de la pòlissa per a la família. Entenen què rebran i què pagaran.",
      },
    ],
  },
  {
    icon: <HeartPulse size={28} strokeWidth={1.5} />,
    title: "Fidelització i Compliment",
    subtitle: "Transparència total per a l'assegurat i compliment normatiu actualitzat.",
    features: [
      {
        title: "Visibilitat per a la Família",
        desc: "Els passos successoris, l'estat de la pòlissa i les accions pendents en un portal transparent.",
      },
      {
        title: "Seguretat i Normativa",
        desc: "Documentació xifrada i compliment estricte de la legislació autonòmica i estatal vigent.",
      },
    ],
  },
];

const claims = [
  "Servei successori integrat en pòlissa",
  "Impacte fiscal del cobrament calculat",
  "Expedient de l'assegurat estructurat",
  "Fidelització real post-indemnització",
];

const steps = [
  {
    title: "Obertura del Sinistre",
    desc: "En activar-se la pòlissa, es crea automàticament un expedient successori digital per a la família a Ulpiano.",
  },
  {
    title: "Portal de Beneficiaris",
    desc: "Els hereus accedeixen de forma segura per a pujar certificats i consultar l'impacte fiscal de l'assegurança.",
  },
  {
    title: "Gestió Successòria",
    desc: "Ulpiano guia la família per tots els tràmits legals, impostos i repartiment, sense que l'asseguradora sumi càrrega operativa.",
  },
  {
    title: "Resolució i Fidelització",
    desc: "La família resol l'herència fàcilment, associant aquesta tranquil·litat directament a la marca de la teva asseguradora.",
  },
];


/* =============================================
   MAIN COMPONENT
   ============================================= */
export function AsseguradoresClientCa() {
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
              Pensat per a Asseguradores
            </span>
            <div className="h-[1px] w-8 bg-emerald-500/50" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.15] mb-8 reveal tracking-tight text-balance" style={{ animationDelay: '100ms' }}>
            Pòlisses de vida i decessos amb gestió successòria <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">integrada</span>.
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed text-white/60 mb-12 reveal text-balance mx-auto max-w-[680px]" style={{ animationDelay: '200ms' }}>
            Transforma la indemnització en un servei integral. Ofereix als beneficiaris expedient digital, càlcul fiscal i suport documental complet.
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
              Per a la teva companyia d'assegurances
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
              Per què Ulpiano per a asseguradores?
            </h2>
            <p className="text-[17px] text-slate-500">
              Vés més enllà de la transferència econòmica. Posiciona les teves pòlisses com la solució definitiva que aporta ordre i tranquil·litat.
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
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container relative z-10">
          <div className="reveal text-center max-w-[700px] mx-auto mb-16">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Flux de Treball Integrat
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Una extensió natural del teu servei
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
                desc: "Lectura intel·ligent de documents",
              },
              {
                href: "/ca/solucions/fiscalitat-successoria",
                label: "Fiscalitat Successòria",
                desc: "Motor de càlcul tributari",
              },
              {
                href: "/ca/solucions/documentacio-successoria",
                label: "Documentació Successòria",
                desc: "Generació d'escriptura d'herència",
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
            Diferencia la teva cartera de productes
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Fidelitza les següents generacions integrant la gestió successòria digital directament en les teves pòlisses de vida i decessos.
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

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
    title: "Gestión Digital de Expedientes",
    subtitle: "El expediente sucesorio completo, estructurado y claro.",
    features: [
      {
        title: "Paso a Paso Digital",
        desc: "Define parámetros legales (legítimas, régimen foral) y añade datos de herederos y bienes.",
      },
      {
        title: "Diagramas Interactivos",
        desc: "Muestra el árbol familiar y la estructura patrimonial, facilitando la explicación al cliente.",
      },
    ],
  },
  {
    icon: <Calculator size={28} strokeWidth={1.5} />,
    title: "Atribución y Control Fiscal",
    subtitle: "Distribución patrimonial y fiscalidad sucesoria, automatizadas.",
    features: [
      {
        title: "Reportes de Atribución",
        desc: "Presenta un desglose detallado sobre la distribución de bienes y la obligación tributaria.",
      },
      {
        title: "Simulaciones de Impuestos",
        desc: "Calcula en segundos cuánto pagará cada heredero, considerando reducciones y bonificaciones.",
      },
    ],
  },
  {
    icon: <FileSignature size={28} strokeWidth={1.5} />,
    title: "Creación de Documentos y Firma",
    subtitle: "De datos estructurados a documentos definitivos.",
    features: [
      {
        title: "Automatización Documental",
        desc: "Genera testamentos, pactos sucesorios y escrituras adaptadas a la normativa vigente.",
      },
      {
        title: "Modelos Fiscales",
        desc: "Acelera la formalización autocompletando modelos 650, 651 y 660 sin errores de transcripción.",
      },
    ],
  },
];

const claims = [
  "Atribuciones sucesorias en minutos",
  "Planificación legal meditada",
  "Legítimas calculadas automáticamente",
  "Documentación lista para firmar",
];

const benefits = [
  {
    icon: <Eye size={28} strokeWidth={1.5} />,
    title: "Transparencia total para el cliente",
    desc: "Ofrece diagramas claros y simulaciones en tiempo real, generando confianza y diferenciándote de la competencia.",
  },
  {
    icon: <Clock size={28} strokeWidth={1.5} />,
    title: "Máxima eficiencia interna",
    desc: "Automatiza procesos repetitivos, elimina la transcripción manual de datos y libera cientos de horas de trabajo.",
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: "Reducción de riesgos legales",
    desc: "Ulpiano garantiza la coherencia con la normativa sucesoria, cálculos fiscales exactos y actualizaciones forales.",
  },
  {
    icon: <Layers size={28} strokeWidth={1.5} />,
    title: "Un servicio integral de principio a fin",
    desc: "Combina el asesoramiento estratégico con una plataforma robusta que cubre desde el inventario hasta el pago del ISD.",
  },
];

const testimonials = [
  {
    quote: "Desde que usamos Ulpiano, la preparación de un expediente sucesorio nos lleva la mitad de tiempo. Y el cliente entiende por fin lo que está firmando.",
    author: "Marta R., Abogada",
    location: "Despacho en Girona",
  },
  {
    quote: "La visualización del árbol familiar y las simulaciones fiscales en tiempo real cambiaron radicalmente la forma en que presentamos las herencias a las familias.",
    author: "Jordi P., Abogado Civilista",
    location: "Barcelona",
  },
];

/* =============================================
   MAIN COMPONENT
   ============================================= */
export function DespachosClient() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      {/* ═══ HERO ═══ */}
      <CategoryHero
        eyebrow="Pensado para Abogados"
        title={<>Optimiza la gestión de herencias y ofrece <HeroTitleAccent>claridad absoluta</HeroTitleAccent></>}
        subtitle="Agiliza la elaboración y el seguimiento de expedientes sucesorios, ofreciendo al cliente diagramas interactivos y simulaciones fiscales en tiempo real."
      />

      {/* ═══ PROPUESTA DE VALOR ═══ */}
      <section id="propuesta" className="py-24 bg-white border-b border-slate-200">
        <div className="container">
          <div className="reveal text-center max-w-[700px] mx-auto mb-20">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Para tu despacho
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
              ¿Por qué Ulpiano para Abogados?
            </h2>
            <p className="text-[17px] text-slate-500">
              Automatiza tareas de bajo valor, visualiza la distribución de bienes y escala tu volumen de expedientes con seguridad jurídica total.
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
              Beneficios
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Lo que cambia en tu despacho con Ulpiano
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
              Explora nuestras soluciones
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: "/soluciones/planificacion-sucesoria",
                label: "Planificación Sucesoria",
                desc: "Módulo patrimonial completo",
              },
              {
                href: "/soluciones/fiscalidad-sucesoria",
                label: "Fiscalidad Sucesoria",
                desc: "Motor ISD automatizado",
              },
              {
                href: "/soluciones/documentacion-sucesoria",
                label: "Documentación Sucesoria",
                desc: "Generación documental inteligente",
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
            Eleva el estándar de tu despacho
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Únete a los profesionales que ya han transformado su práctica sucesoria con Ulpiano.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/demo" className="btn-primary px-8 py-3.5 shadow-[0_0_20px_rgba(45,106,79,0.4)]">
              Solicita tu demo gratis
            </Link>
            <Link href="/demo" className="btn-ghost text-white/80 hover:text-white px-6 border border-white/20">
              Crear cuenta ahora <ArrowRight size={18} className="ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

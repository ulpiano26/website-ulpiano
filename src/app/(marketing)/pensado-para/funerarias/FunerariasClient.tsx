"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { CategoryHero, HeroTitleAccent } from "@/components/hero/HeroShell";
import {
  CheckCircle2,
  ArrowRight,
  HeartHandshake,
  FileSearch,
  Monitor,
  Trophy,
  Award,
  Building,
  TrendingUp
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
    icon: <HeartHandshake size={28} strokeWidth={1.5} />,
    title: "Servicio Integral para Familias",
    subtitle: "Acompaña a tus clientes más allá del servicio funerario inicial.",
    features: [
      {
        title: "Retención de Clientes",
        desc: "Las familias ya confían en ti. Ofréceles tramitar la herencia sin tener que buscar gestorías externas.",
      },
      {
        title: "Confianza Reforzada",
        desc: "Un servicio completo y transparente que aporta tranquilidad en momentos difíciles.",
      },
    ],
  },
  {
    icon: <Monitor size={28} strokeWidth={1.5} />,
    title: "Plataforma de Marca Blanca",
    subtitle: "Toda la tecnología de Ulpiano, bajo tu propia marca corporativa.",
    features: [
      {
        title: "Portal de Familias Integrado",
        desc: "Los herederos suben la documentación y siguen el estado de la tramitación en un portal con tu logo.",
      },
      {
        title: "Comunicación Fluida",
        desc: "Un canal directo para resolver dudas sin colapsar tu centralita ni perderse en emails.",
      },
    ],
  },
  {
    icon: <TrendingUp size={28} strokeWidth={1.5} />,
    title: "Nuevas Líneas de Ingresos",
    subtitle: "Rentabilidad adicional sin sobrecargar a tu plantilla actual.",
    features: [
      {
        title: "Automatización del 80%",
        desc: "Ulpiano procesa documentos, calcula impuestos y genera borradores. Tú solo revisas y cobras por el valor final.",
      },
      {
        title: "Escalabilidad sin Contrataciones",
        desc: "Tramita cientos de herencias adicionales sin necesidad de incorporar abogados o fiscalistas en plantilla.",
      },
    ],
  },
];

const claims = [
  "Portal de familias con tu marca",
  "Procesamiento automático de documentos",
  "Cálculo de impuestos (ISD)",
  "Nuevos ingresos recurrentes",
];

const steps = [
  {
    title: "Alta de Expediente",
    desc: "Tras el servicio funerario, abres el expediente sucesorio digital con los datos básicos del causante.",
  },
  {
    title: "Recopilación Fácil",
    desc: "La familia sube los certificados y testamentos desde su casa a tu portal privado.",
  },
  {
    title: "Procesamiento IA",
    desc: "Ulpiano lee, clasifica y extrae los datos de los documentos para crear el inventario.",
  },
  {
    title: "Cierre y Liquidación",
    desc: "Generación automática del cuaderno particional y los modelos de impuestos para la firma.",
  },
];

const testimonials = [
  {
    quote: "Incorporar la gestión de herencias con Ulpiano nos ha permitido aumentar nuestra facturación por familia sin contratar personal adicional.",
    author: "Alberto T., Director Comercial",
    location: "Grupo Funerario, Sevilla",
  },
  {
    quote: "Las familias agradecen muchísimo que les resolvamos el 'papeleo' posterior al sepelio. Es un valor diferencial enorme frente a la competencia.",
    author: "Nuria F., Gerente",
    location: "Funeraria Local, Zaragoza",
  },
];

/* =============================================
   MAIN COMPONENT
   ============================================= */
export function FunerariasClient() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      {/* ═══ HERO ═══ */}
      <CategoryHero
        eyebrow="Pensado para Funerarias"
        title={<>Del servicio funerario a la tramitación sucesoria <HeroTitleAccent>completa</HeroTitleAccent>.</>}
        subtitle="Amplía tus servicios con la gestión digital de herencias. Expedientes estructurados y liquidación de impuestos, sin sobrecargar a tu equipo."
      />

      {/* ═══ PROPUESTA DE VALOR ═══ */}
      <section id="propuesta" className="py-24 bg-white border-b border-slate-200">
        <div className="container">
          <div className="reveal text-center max-w-[700px] mx-auto mb-20">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              Para tu empresa funeraria
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
              ¿Por qué Ulpiano para funerarias?
            </h2>
            <p className="text-[17px] text-slate-500">
              Transforma la gestión de herencias en una línea de negocio rentable y automatizada, ofreciendo a las familias el apoyo que necesitan tras el servicio.
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
              Flujo de Trabajo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Cómo se integra en tu día a día
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
              Explora nuestras soluciones
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: "/soluciones/procesamiento-documental",
                label: "Procesamiento con IA",
                desc: "Extracción automática de datos",
              },
              {
                href: "/soluciones/documentacion-sucesoria",
                label: "Documentación Sucesoria",
                desc: "Generación de escritura particional",
              },
              {
                href: "/pensado-para/despachos",
                label: "Para Despachos",
                desc: "Plataforma integral para abogados",
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
            Abre una nueva línea de negocio
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Fideliza a las familias y aumenta la rentabilidad de tu funeraria ofreciendo un servicio de tramitación de herencias integral y automatizado.
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

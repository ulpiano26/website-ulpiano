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
    title: "Expediente Post-Testamento Activo",
    subtitle: "La relación con el cliente no termina en la firma. El expediente sigue vivo.",
    features: [
      {
        title: "Seguimiento Continuo del Cliente",
        desc: "El testamento es el inicio. Ulpiano mantiene el expediente activo con alertas, plazos y eventos sucesorios posteriores.",
      },
      {
        title: "Alertas y Recordatorios Automáticos",
        desc: "Plazos fiscales, cambios normativos que afectan al expediente y eventos sucesorios pendientes.",
      },
    ],
  },
  {
    icon: <FolderLock size={28} strokeWidth={1.5} />,
    title: "Documentación Centralizada",
    subtitle: "Todo el expediente en un lugar. Las escrituras, generadas desde los datos.",
    features: [
      {
        title: "Repositorio Cifrado por Expediente",
        desc: "Testamento, certificado de defunción, escrituras, DNIs — todo cifrado, accesible por rol. Sin documentos dispersos.",
      },
      {
        title: "Escrituras desde Datos",
        desc: "La escritura de partición redactada a partir de los datos estructurados del expediente. Sin empezar desde cero.",
      },
    ],
  },
  {
    icon: <MessageSquare size={28} strokeWidth={1.5} />,
    title: "Coordinación con el Cliente",
    subtitle: "Un canal único por expediente. Sin email, sin WhatsApp.",
    features: [
      {
        title: "Canal de Comunicación Integrado",
        desc: "Cada expediente tiene su canal. El cliente pregunta, tú respondes. Sin hilos de email perdidos.",
      },
      {
        title: "Panel de Estado Visible",
        desc: "El cliente ve en qué punto está su expediente: qué está hecho, qué falta, qué viene después. Transparencia total.",
      },
    ],
  },
];

const claims = [
  "La escritura de partición, generada desde el expediente",
  "El seguimiento post-testamento en la plataforma",
  "La documentación cifrada y centralizada",
  "Comunicación con el cliente sin salir de Ulpiano",
];

const benefits = [
  {
    icon: <Users size={28} strokeWidth={1.5} />,
    title: "Fidelización a largo plazo",
    desc: "El expediente post-testamento mantiene la relación activa durante años. Tu notaría, presente cuando la familia más lo necesita.",
  },
  {
    icon: <FileSignature size={28} strokeWidth={1.5} />,
    title: "Eficiencia Documental",
    desc: "Escrituras generadas directamente desde los datos estructurados del expediente. Menos redacción manual, más precisión.",
  },
  {
    icon: <Lock size={28} strokeWidth={1.5} />,
    title: "Seguridad y Control Absoluto",
    desc: "Documentación cifrada accesible solo por rol autorizado. Trazabilidad total de quién accede a qué información y cuándo.",
  },
  {
    icon: <LinkIcon size={28} strokeWidth={1.5} />,
    title: "Coordinación sin Fricción",
    desc: "Un canal único por expediente para comunicarte con los herederos y abogados. Toda interacción trazable y archivada en su lugar.",
  },
];


/* =============================================
   MAIN COMPONENT
   ============================================= */
export function NotariasClient() {
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
              Pensado para Notarías
            </span>
            <div className="h-[1px] w-8 bg-emerald-500/50" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.15] mb-8 reveal tracking-tight text-balance" style={{ animationDelay: '100ms' }}>
            El expediente post-testamento, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">activo</span>. La documentación, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">centralizada</span>.
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed text-white/60 mb-12 reveal text-balance mx-auto max-w-[680px]" style={{ animationDelay: '200ms' }}>
            Con Ulpiano, la relación con tu cliente no termina en la firma. El expediente sigue vivo, la documentación está cifrada, y las escrituras se generan desde los datos.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 reveal" style={{ animationDelay: '300ms' }}>
            <Link href="/demo" className="btn-primary shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)] px-8 py-3.5 text-base">
              Reserva tu Demo
            </Link>
            <Link href="#propuesta" className="btn-ghost group text-white/80 hover:text-white px-6">
              Descubrir ventajas
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
              Para tu notaría
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
              ¿Por qué Ulpiano para Notarías?
            </h2>
            <p className="text-[17px] text-slate-500">
              Moderniza el flujo de trabajo notarial. Desde la custodia segura de voluntades hasta la redacción automática de la escritura de partición.
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
              Beneficios
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Lo que cambia en tu notaría con Ulpiano
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
              Explora nuestras soluciones
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: "/soluciones/procesamiento-documental",
                label: "Procesamiento con IA",
                desc: "Extracción automática de datos registrales",
              },
              {
                href: "/soluciones/planificacion-sucesoria",
                label: "Planificación Sucesoria",
                desc: "Módulo patrimonial completo",
              },
              {
                href: "/soluciones/documentacion-sucesoria",
                label: "Documentación Sucesoria",
                desc: "Generación de escritura de partición",
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
            Lidera la innovación en el sector notarial
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Fideliza a las familias más allá de la firma y optimiza el trabajo interno de tus oficiales.
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

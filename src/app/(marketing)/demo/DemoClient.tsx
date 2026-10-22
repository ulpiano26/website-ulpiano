"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckCircle2, Calendar, Monitor, Clock, ShieldCheck, ChevronDown, ArrowRight, Shield } from "lucide-react";
import ConsentCheckbox from "@/components/forms/ConsentCheckbox";
import { localeFromPathname } from "@/lib/legal/consent-texts";
import {
  DEMO_FIELD_MAX_LENGTH,
  DEMO_FIELD_ORDER,
  submitDemoRequest,
  validateDemoForm,
  type DemoFieldErrors,
  type DemoFieldName,
  type DemoFormValues,
} from "@/lib/demo-request";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate-fade-in-up");
        }),
      { threshold: 0.12 }
    );
    // Add opacity-0 to children initially to ensure they fade in
    node.querySelectorAll(".reveal").forEach((c) => {
      c.classList.add("opacity-0");
      observer.observe(c);
    });
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ─── Copy ─── */

const COPY = {
  es: {
    eyebrow: "Descubre Ulpiano",
    heroHighlight: "25 minutos",
    heroTitle: "El expediente que hoy te cuesta 6 horas, resuelto en",
    heroBody:
      "Reserva una sesión personalizada. Verás la plataforma funcionando con un caso real del sector sucesorio catalán: inventario, cálculo del ISD y generación del cuaderno particional.",
    reserveCta: "Reservar mi sesión",
    seeIncludes: "Ver qué incluye",
    stats: [
      { number: "25", unit: "min", label: "Sin diapositivas. Directamente sobre el producto." },
      { number: "35%", unit: "", label: "Reducción media en tiempo de gestión por expediente." },
      { number: "100%", unit: "", label: "Derecho foral catalán integrado (CCCat, Llei 19/2010)." },
    ],
    whatEyebrow: "Qué verás en la sesión",
    whatTitle: "Un caso real, de principio a fin",
    whatBody:
      "Trabajamos sobre la plataforma desde el primer minuto. Sin presentaciones comerciales aburridas, sin diapositivas.",
    topics: [
      {
        title: "Inventario patrimonial estructurado",
        desc: "Inmuebles, financieros, participaciones — en un panel con caudal relicto neto calculado automáticamente.",
      },
      {
        title: "Cálculo del ISD con norma citada",
        desc: "La cuota de cada heredero según la Llei 19/2010, con reducciones y bonificaciones aplicadas.",
      },
      {
        title: "Cuaderno particional generado",
        desc: "En Word, con los datos reales del expediente. Listo para tu revisión.",
      },
      {
        title: "Comparación de escenarios fiscales",
        desc: "Herencia directa vs. donación vs. usufructo al cónyuge — impacto fiscal en paralelo.",
      },
    ],
    howStrip: [
      "Tú eliges fecha y hora",
      "Por videoconferencia",
      "25 min, sin compromiso",
    ],
    successTitle: "Solicitud recibida",
    successBody:
      "Gracias. Nos pondremos en contacto contigo en menos de 24 horas laborables para acordar el día y la hora de tu sesión.",
    meanwhileTitle: "¿Mientras tanto?",
    meanwhileBody: "Explora en detalle todas las soluciones que verás durante la sesión.",
    seeSolutions: "Ver soluciones",
    formTitle: "Reserva tu sesión",
    formIntro: "3 campos — menos de 30 segundos.",
    name: "Nombre completo",
    namePlaceholder: "María García López",
    email: "Email profesional",
    company: "Despacho / Empresa",
    companyPlaceholder: "Nombre del despacho",
    sending: "Enviando…",
    submit: "Ver Ulpiano en acción",
    noCommitment: "Sin compromiso · No pedimos datos de pago",
    fieldErrors: {
      required: {
        fullName: "Escribe tu nombre completo.",
        email: "Escribe tu correo electrónico.",
        company: "Escribe el nombre de tu despacho o empresa.",
      },
      invalidEmail: "Introduce un correo válido, por ejemplo nombre@despacho.es.",
      tooLong: "Este campo admite un máximo de 255 caracteres.",
    },
    serverInvalid: "Algún dato no es válido. Revisa los campos e inténtalo de nuevo.",
    rateLimited: "Has hecho demasiados intentos seguidos. Espera unos minutos y vuelve a intentarlo.",
    genericError: "No hemos podido enviar tu solicitud. Inténtalo de nuevo en unos minutos.",
    retry: "Reintentar",
    quote1:
      "Desde que usamos Ulpiano, la preparación de un expediente sucesorio nos lleva la mitad de tiempo. Y el cliente entiende perfectamente lo que paga.",
    quote1Author: "— Marta R., Abogada | Despacho en Girona",
    quote2:
      "La visualización del árbol familiar y las simulaciones fiscales cambiaron la forma en que presentamos las herencias a nuestros clientes.",
    quote2Author: "— Jordi P., Abogado Civilista | Barcelona",
    howEyebrow: "Cómo funciona",
    howTitle: "De formulario a sesión en 3 pasos",
    nextSteps: [
      { step: 1, title: "Completa el formulario", desc: "Solo nombre, email y despacho. En menos de 30 segundos." },
      { step: 2, title: "Recibes el enlace de agenda", desc: "En menos de 24h, con horarios disponibles que se ajusten a ti." },
      { step: 3, title: "Sesión de 25 minutos", desc: "Directamente sobre la plataforma con un expediente real del sector." },
    ],
    wantReserve: "Quiero reservar mi sesión",
    faqEyebrow: "Preguntas Frecuentes",
    faqTitle: "Antes de reservar",
    faqs: [
      {
        q: "¿Qué necesito preparar para la sesión?",
        a: "Nada. Nosotros proporcionamos un caso real del sector sucesorio catalán para que veas la plataforma en acción con datos representativos.",
      },
      {
        q: "¿Es realmente sin compromiso?",
        a: "Sí. La sesión es puramente informativa. No cerramos con precio ni pedimos datos de pago. Si quieres probar por tu cuenta después, puedes empezar gratis.",
      },
      {
        q: "¿Puedo traer a un compañero del despacho?",
        a: "Por supuesto. De hecho, lo recomendamos. Cuantos más perfiles vean la plataforma, mejor evaluación podéis hacer.",
      },
      {
        q: "¿La demo cubre la normativa de mi comunidad?",
        a: "Actualmente la plataforma cubre el derecho foral catalán (CCCat, Llei 19/2010). La demo se centra en un expediente con domicilio en Catalunya.",
      },
      {
        q: "¿Cuánto tarda la respuesta?",
        a: "Menos de 24 horas laborables. Normalmente respondemos el mismo día.",
      },
    ],
    tryFirst: "¿Prefieres probar por tu cuenta primero?",
    startFree: "Empieza gratis sin tarjeta",
    solutionsHref: "/soluciones",
    pricesHref: "/precios",
  },
  ca: {
    eyebrow: "Descobreix Ulpiano",
    heroHighlight: "25 minuts",
    heroTitle: "L'expedient que avui et costa 6 hores, resolt en",
    heroBody:
      "Reserva una sessió personalitzada. Veuràs la plataforma funcionant amb un cas real del sector successori català: inventari, càlcul de l'ISD i generació del quadern particional.",
    reserveCta: "Reservar la meva sessió",
    seeIncludes: "Veure què inclou",
    stats: [
      { number: "25", unit: "min", label: "Sense diapositives. Directament sobre el producte." },
      { number: "35%", unit: "", label: "Reducció mitjana en temps de gestió per expedient." },
      { number: "100%", unit: "", label: "Dret foral català integrat (CCCat, Llei 19/2010)." },
    ],
    whatEyebrow: "Què veuràs a la sessió",
    whatTitle: "Un cas real, de principi a fi",
    whatBody:
      "Treballem sobre la plataforma des del primer minut. Sense presentacions comercials avorrides, sense diapositives.",
    topics: [
      {
        title: "Inventari patrimonial estructurat",
        desc: "Immobles, financers, participacions — en un panell amb el cabal relict net calculat automàticament.",
      },
      {
        title: "Càlcul de l'ISD amb norma citada",
        desc: "La quota de cada hereu segons la Llei 19/2010, amb reduccions i bonificacions aplicades.",
      },
      {
        title: "Quadern particional generat",
        desc: "En Word, amb les dades reals de l'expedient. Llest per a la teva revisió.",
      },
      {
        title: "Comparació d'escenaris fiscals",
        desc: "Herència directa vs. donació vs. usdefruit al cònjuge — impacte fiscal en paral·lel.",
      },
    ],
    howStrip: [
      "Tries tu la data i l'hora",
      "Per videoconferència",
      "25 min, sense compromís",
    ],
    successTitle: "Sol·licitud rebuda",
    successBody:
      "Gràcies. Ens posarem en contacte amb tu en menys de 24 hores laborables per acordar el dia i l'hora de la sessió.",
    meanwhileTitle: "Mentrestant?",
    meanwhileBody: "Explora en detall totes les solucions que veuràs durant la sessió.",
    seeSolutions: "Veure solucions",
    formTitle: "Reserva la teva sessió",
    formIntro: "3 camps — menys de 30 segons.",
    name: "Nom complet",
    namePlaceholder: "Maria García López",
    email: "Correu professional",
    company: "Despatx / Empresa",
    companyPlaceholder: "Nom del despatx",
    sending: "Enviant…",
    submit: "Veure Ulpiano en acció",
    noCommitment: "Sense compromís · No demanem dades de pagament",
    fieldErrors: {
      required: {
        fullName: "Escriu el teu nom complet.",
        email: "Escriu el teu correu electrònic.",
        company: "Escriu el nom del teu despatx o empresa.",
      },
      invalidEmail: "Introdueix un correu vàlid, per exemple nom@despatx.cat.",
      tooLong: "Aquest camp admet un màxim de 255 caràcters.",
    },
    serverInvalid: "Alguna dada no és vàlida. Revisa els camps i torna-ho a provar.",
    rateLimited: "Has fet massa intents seguits. Espera uns minuts i torna-ho a provar.",
    genericError: "No hem pogut enviar la teva sol·licitud. Torna-ho a provar d'aquí a uns minuts.",
    retry: "Torna-ho a provar",
    quote1:
      "Des que fem servir Ulpiano, la preparació d'un expedient successori ens porta la meitat de temps. I el client entén perfectament el que paga.",
    quote1Author: "— Marta R., Advocada | Despatx a Girona",
    quote2:
      "La visualització de l'arbre familiar i les simulacions fiscals van canviar la manera com presentem les herències als nostres clients.",
    quote2Author: "— Jordi P., Advocat civilista | Barcelona",
    howEyebrow: "Com funciona",
    howTitle: "Del formulari a la sessió en 3 passos",
    nextSteps: [
      { step: 1, title: "Omple el formulari", desc: "Només nom, correu i despatx. En menys de 30 segons." },
      { step: 2, title: "Rebs l'enllaç d'agenda", desc: "En menys de 24 h, amb horaris disponibles que s'ajustin a tu." },
      { step: 3, title: "Sessió de 25 minuts", desc: "Directament sobre la plataforma, amb un expedient real del sector." },
    ],
    wantReserve: "Vull reservar la meva sessió",
    faqEyebrow: "Preguntes freqüents",
    faqTitle: "Abans de reservar",
    faqs: [
      {
        q: "Què he de preparar per a la sessió?",
        a: "Res. Nosaltres portem un cas real del sector successori català perquè vegis la plataforma en acció amb dades representatives.",
      },
      {
        q: "És realment sense compromís?",
        a: "Sí. La sessió és purament informativa. No tanquem amb preu ni demanem dades de pagament. Si després vols provar pel teu compte, pots començar de franc.",
      },
      {
        q: "Puc portar un company del despatx?",
        a: "I tant. De fet, ho recomanem. Com més perfils vegin la plataforma, millor avaluació en podreu fer.",
      },
      {
        q: "La demo cobreix la normativa de la meva comunitat?",
        a: "Ara mateix la plataforma cobreix el dret foral català (CCCat, Llei 19/2010). La demo se centra en un expedient amb domicili a Catalunya.",
      },
      {
        q: "Quant triga la resposta?",
        a: "Menys de 24 hores laborables. Habitualment respondem el mateix dia.",
      },
    ],
    tryFirst: "Prefereixes provar pel teu compte primer?",
    startFree: "Comença de franc, sense targeta",
    solutionsHref: "/ca/solucions",
    pricesHref: "/ca/preus",
  },
} as const;

/* ─── FAQ Component ─── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-ink group-hover:text-emerald-600 transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDown size={20} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-64 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <p className="text-[15px] text-slate-600 leading-relaxed pb-2">
          {a}
        </p>
      </div>
    </div>
  );
}

type SubmitFeedback = "none" | "invalid" | "rateLimited" | "failed";

function pushDataLayerEvent(event: Record<string, unknown>) {
  (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer?.push(event);
}

const INITIAL_VALUES: DemoFormValues = { fullName: "", email: "", company: "" };

const FIELD_INPUT_ID: Record<DemoFieldName, string> = {
  fullName: "name",
  email: "email",
  company: "company",
};

const CONSENT_INPUT_ID = "consent-processing-demo";

type FormFieldConfig = {
  fieldName: DemoFieldName;
  inputId: string;
  labelKey: "name" | "email" | "company";
  type: "text" | "email";
  placeholderKey?: "namePlaceholder" | "companyPlaceholder";
  placeholder?: string;
  autoComplete: string;
};

const FORM_FIELDS: readonly FormFieldConfig[] = [
  {
    fieldName: "fullName",
    inputId: FIELD_INPUT_ID.fullName,
    labelKey: "name",
    type: "text",
    placeholderKey: "namePlaceholder",
    autoComplete: "name",
  },
  {
    fieldName: "email",
    inputId: FIELD_INPUT_ID.email,
    labelKey: "email",
    type: "email",
    placeholder: "maria@despacho.com",
    autoComplete: "email",
  },
  {
    fieldName: "company",
    inputId: FIELD_INPUT_ID.company,
    labelKey: "company",
    type: "text",
    placeholderKey: "companyPlaceholder",
    autoComplete: "organization",
  },
];

const INPUT_CLASS_NAME =
  "w-full px-4 py-3.5 bg-slate-50 border rounded-xl text-[15px] text-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all";
const INPUT_VALID_CLASS_NAME =
  "border-slate-200 focus:ring-emerald-500/20 focus:border-emerald-500";
const INPUT_INVALID_CLASS_NAME = "border-red-400 focus:ring-red-500/20 focus:border-red-500";

/* ─── Main ─── */

export function DemoClient() {
  const revealRef = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [values, setValues] = useState<DemoFormValues>(INITIAL_VALUES);
  const [fieldErrors, setFieldErrors] = useState<DemoFieldErrors>({});
  const [feedback, setFeedback] = useState<SubmitFeedback>("none");
  const [honeypotValue, setHoneypotValue] = useState("");
  const [consentProcessing, setConsentProcessing] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const formStartedRef = useRef(false);
  // A ref (not state) so that two very fast clicks cannot both pass the guard before a re-render.
  const isSubmittingRef = useRef(false);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const locale = localeFromPathname(usePathname() ?? "");
  const t = COPY[locale];

  useEffect(() => {
    if (submitted) successHeadingRef.current?.focus();
  }, [submitted]);

  function handleFormStarted() {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    pushDataLayerEvent({ event: "demo_form_started" });
  }

  function handleValueChange(fieldName: DemoFieldName, value: string) {
    setValues((previous) => ({ ...previous, [fieldName]: value }));
    if (fieldErrors[fieldName]) {
      setFieldErrors((previous) => ({ ...previous, [fieldName]: undefined }));
    }
  }

  function getFieldErrorMessage(fieldName: DemoFieldName): string | undefined {
    const errorCode = fieldErrors[fieldName];
    if (!errorCode) return undefined;
    if (errorCode === "required") return t.fieldErrors.required[fieldName];
    return t.fieldErrors[errorCode];
  }

  function focusElementById(elementId: string) {
    document.getElementById(elementId)?.focus();
  }

  function resetForm() {
    setValues(INITIAL_VALUES);
    setFieldErrors({});
    setFeedback("none");
    setHoneypotValue("");
    setConsentProcessing(false);
    setConsentError(false);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmittingRef.current) return;

    // Honeypot: real people never see this field. Pretend it worked and send nothing.
    if (honeypotValue.trim() !== "") {
      resetForm();
      setSubmitted(true);
      return;
    }

    const validationErrors = validateDemoForm(values);
    const firstInvalidField = DEMO_FIELD_ORDER.find((fieldName) => validationErrors[fieldName]);
    const isConsentMissing = !consentProcessing;

    setFieldErrors(validationErrors);
    setConsentError(isConsentMissing);
    setFeedback("none");

    if (firstInvalidField || isConsentMissing) {
      focusElementById(firstInvalidField ? FIELD_INPUT_ID[firstInvalidField] : CONSENT_INPUT_ID);
      return;
    }

    isSubmittingRef.current = true;
    setSending(true);

    try {
      const result = await submitDemoRequest(values);

      if (result.status === "success") {
        resetForm();
        setSubmitted(true);
        // No personal data (name, email, company) goes to analytics.
        pushDataLayerEvent({ event: "demo_form_submitted" });
        pushDataLayerEvent({
          event: "generate_lead",
          lead_type: "demo",
          currency: "EUR",
          value: 150,
        });
        return;
      }

      setFeedback(
        result.status === "invalid" ? "invalid" : result.status === "rateLimited" ? "rateLimited" : "failed",
      );
      pushDataLayerEvent({
        event: "form_error",
        form_name: "demo",
        error_type:
          result.status === "invalid"
            ? "server_validation"
            : result.status === "rateLimited"
              ? "rate_limited"
              : "submission",
      });
    } finally {
      isSubmittingRef.current = false;
      setSending(false);
    }
  }

  const feedbackMessage =
    feedback === "invalid"
      ? t.serverInvalid
      : feedback === "rateLimited"
        ? t.rateLimited
        : feedback === "failed"
          ? t.genericError
          : "";

  return (
    <div ref={revealRef} className="bg-white">
      {/* ═══ HERO — Dark & Spectacualr ═══ */}
      <section className="relative overflow-hidden bg-night px-6 pt-[calc(64px+4rem)] pb-24"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center top'
        }}
      >
        {/* Background glow effects */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,var(--ulpiano-green)_0%,transparent_50%)] opacity-20 blur-[100px] pointer-events-none" />
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(45,106,79,0.3)_0%,transparent_60%)] opacity-30 blur-[80px] pointer-events-none" />

        <div className="container relative z-10 text-center">
          <div className="reveal flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-emerald-500/50" />
            <span className="text-emerald-400/90 text-xs font-bold tracking-[0.2em] uppercase">
              {t.eyebrow}
            </span>
            <div className="h-[1px] w-8 bg-emerald-500/50" />
          </div>

          <h1 className="reveal text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-white leading-tight max-w-[900px] mx-auto" style={{ animationDelay: '100ms' }}>
            {t.heroTitle}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[var(--ulpiano-green)]">{t.heroHighlight}</span>
          </h1>
          
          <p className="reveal text-lg text-white/60 max-w-[660px] mx-auto mt-6 leading-relaxed" style={{ animationDelay: '200ms' }}>
            {t.heroBody}
          </p>

          <div className="reveal flex flex-wrap gap-4 justify-center mt-10" style={{ animationDelay: '300ms' }}>
            <a href="#reservar" className="btn-primary shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)] px-8 py-3.5 text-base">
              {t.reserveCta}
            </a>
            <a href="#que-veras" className="btn-ghost group text-white/80 hover:text-white px-6">
              {t.seeIncludes}{" "}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF STRIP ═══ */}
      <section className="bg-white border-b border-slate-100 py-10 relative z-20 shadow-sm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 reveal">
            {t.stats.map((s, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="font-mono text-3xl font-bold text-emerald-600 leading-none flex-shrink-0 min-w-[70px]">
                  {s.number}
                  {s.unit && <span className="text-xl ml-1">{s.unit}</span>}
                </span>
                <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FORM + CONTENT GRID ═══ */}
      <section id="que-veras" className="py-24 bg-slate-50/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 lg:gap-20 items-start">
            
            {/* Left: what you'll see */}
            <div className="reveal">
              <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
                {t.whatEyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight max-w-[480px]">
                {t.whatTitle}
              </h2>
              <p className="text-[17px] text-slate-600 mt-4 max-w-[460px] leading-relaxed">
                {t.whatBody}
              </p>

              <div className="flex flex-col gap-6 mt-10">
                {t.topics.map((topic, i) => (
                  <div key={i} className="reveal flex items-start gap-4 p-4 rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition-all shadow-sm hover:shadow-md" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="flex-shrink-0 mt-1 text-emerald-500 bg-emerald-50 p-1.5 rounded-lg">
                      <CheckCircle2 size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-base font-bold text-ink">
                        {topic.title}
                      </p>
                      <p className="text-[15px] text-slate-600 leading-relaxed mt-1">
                        {topic.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* How it works strip */}
              <div className="flex flex-wrap gap-6 mt-12 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                {[
                  { icon: <Calendar size={20} />, text: t.howStrip[0] },
                  { icon: <Monitor size={20} />, text: t.howStrip[1] },
                  { icon: <Clock size={20} />, text: t.howStrip[2] },
                ].map((step, i) => (
                  <div key={i} className="reveal flex items-center gap-3" style={{ animationDelay: `${(i+3) * 100}ms` }}>
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <span className="text-[15px] font-semibold text-ink">
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Glassmorphic Form Card */}
            <div id="reservar" className="reveal lg:sticky lg:top-32" style={{ animationDelay: "200ms" }}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--ulpiano-green)] to-emerald-400" />
                
                {submitted ? (
                  <div role="status" className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck size={32} strokeWidth={2} />
                    </div>
                    <h3 ref={successHeadingRef} tabIndex={-1} className="text-2xl font-bold text-ink mb-3 focus:outline-none">
                      {t.successTitle}
                    </h3>
                    <p className="text-[15px] text-slate-600 leading-relaxed mb-8">
                      {t.successBody}
                    </p>
                    <div className="bg-slate-50 rounded-xl p-5 text-sm text-slate-600 border border-slate-100 text-left">
                      <strong className="text-ink block mb-1">{t.meanwhileTitle}</strong>
                      {t.meanwhileBody}
                    </div>
                    <Link
                      href={t.solutionsHref}
                      className="btn-ghost w-full justify-center mt-6 border border-slate-200 hover:bg-slate-50"
                    >
                      {t.seeSolutions} <ArrowRight size={16} />
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-ink mb-2">
                        {t.formTitle}
                      </h3>
                      <p className="text-[15px] text-slate-500">
                        {t.formIntro}
                      </p>
                    </div>
                    
                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      noValidate
                      aria-busy={sending}
                      className="flex flex-col gap-5"
                    >
                      {FORM_FIELDS.map((field) => {
                        const errorMessage = getFieldErrorMessage(field.fieldName);
                        const errorId = `${field.inputId}-error`;
                        return (
                          <div key={field.fieldName}>
                            <label htmlFor={field.inputId} className="block text-[14px] font-semibold text-ink mb-2">
                              {t[field.labelKey]}
                            </label>
                            <input
                              type={field.type}
                              id={field.inputId}
                              name={field.inputId}
                              value={values[field.fieldName]}
                              onChange={(changeEvent) => handleValueChange(field.fieldName, changeEvent.target.value)}
                              onFocus={field.fieldName === "fullName" ? handleFormStarted : undefined}
                              placeholder={field.placeholderKey ? t[field.placeholderKey] : field.placeholder}
                              autoComplete={field.autoComplete}
                              maxLength={DEMO_FIELD_MAX_LENGTH}
                              required
                              aria-required="true"
                              aria-invalid={errorMessage ? "true" : "false"}
                              aria-describedby={errorMessage ? errorId : undefined}
                              className={`${INPUT_CLASS_NAME} ${errorMessage ? INPUT_INVALID_CLASS_NAME : INPUT_VALID_CLASS_NAME}`}
                            />
                            {errorMessage && (
                              <p id={errorId} className="text-[13px] text-red-600 mt-1.5 leading-snug">
                                {errorMessage}
                              </p>
                            )}
                          </div>
                        );
                      })}

                      {/* Honeypot: hidden from people and assistive technology; bots tend to fill it. */}
                      <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
                        <label htmlFor="demo-website">Website</label>
                        <input
                          type="text"
                          id="demo-website"
                          name="website"
                          value={honeypotValue}
                          onChange={(changeEvent) => setHoneypotValue(changeEvent.target.value)}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>

                      <ConsentCheckbox
                        locale={locale}
                        formId="demo"
                        consentProcessing={consentProcessing}
                        consentMarketing={false}
                        onProcessingChange={(isChecked) => {
                          setConsentProcessing(isChecked);
                          if (isChecked) setConsentError(false);
                        }}
                        onMarketingChange={() => {}}
                        processingError={consentError}
                      />

                      {feedbackMessage && (
                        <div
                          role="alert"
                          className="text-[14px] text-red-600 bg-red-50 p-3 rounded-lg border border-red-100 flex flex-col gap-2"
                        >
                          <p>{feedbackMessage}</p>
                          {feedback === "failed" && (
                            <button
                              type="button"
                              onClick={() => formRef.current?.requestSubmit()}
                              disabled={sending}
                              className="self-start font-semibold underline underline-offset-2 disabled:opacity-60"
                            >
                              {t.retry}
                            </button>
                          )}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={sending}
                        className="btn-primary w-full py-4 text-[16px] shadow-[0_8px_20px_rgba(45,106,79,0.3)] hover:shadow-[0_10px_25px_rgba(45,106,79,0.4)] hover:-translate-y-0.5 mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        {sending ? t.sending : t.submit} <ArrowRight size={18} className="ml-1" />
                      </button>

                      <div className="flex items-center justify-center gap-2 text-[13px] text-slate-400 mt-2 font-medium">
                        <Shield size={14} className="text-emerald-500" />
                        <span>{t.noCommitment}</span>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF — Testimonial ═══ */}
      <section className="bg-night py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(45,106,79,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div className="reveal">
              <blockquote className="border-l-4 border-emerald-500 pl-6 m-0">
                <p className="text-xl text-white leading-relaxed font-medium italic">
                  &ldquo;{t.quote1}&rdquo;
                </p>
                <footer className="text-[15px] text-white/50 mt-5 font-medium">
                  {t.quote1Author}
                </footer>
              </blockquote>
            </div>
            <div className="reveal" style={{ animationDelay: "150ms" }}>
              <blockquote className="border-l-4 border-emerald-500 pl-6 m-0">
                <p className="text-xl text-white leading-relaxed font-medium italic">
                  &ldquo;{t.quote2}&rdquo;
                </p>
                <footer className="text-[15px] text-white/50 mt-5 font-medium">
                  {t.quote2Author}
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUÉ PASA DESPUÉS — Reduce uncertainty ═══ */}
      <section className="bg-white py-24">
        <div className="container max-w-[720px]">
          <div className="reveal text-center mb-16">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              {t.howEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink">
              {t.howTitle}
            </h2>
          </div>
          
          <div className="flex flex-col gap-10">
            {t.nextSteps.map((s, i) => (
              <div key={s.step} className="reveal flex items-start gap-6" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="w-12 h-12 rounded-full border-2 border-emerald-500 text-emerald-600 flex items-center justify-center font-mono text-xl font-bold flex-shrink-0 bg-emerald-50 shadow-sm">
                  {s.step}
                </div>
                <div className="pt-2">
                  <p className="text-xl font-bold text-ink leading-tight">
                    {s.title}
                  </p>
                  <p className="text-[16px] text-slate-600 leading-relaxed mt-2">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="reveal text-center mt-16 pt-10 border-t border-slate-100">
            <a href="#reservar" className="btn-primary px-8 py-3.5 shadow-[0_0_20px_rgba(45,106,79,0.3)] hover:shadow-[0_0_30px_rgba(45,106,79,0.5)]">
              {t.wantReserve}
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FAQ — Objection handling ═══ */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="container max-w-[760px]">
          <div className="reveal mb-12 text-center">
            <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-3 block">
              {t.faqEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink">
              {t.faqTitle}
            </h2>
          </div>
          <div className="reveal bg-white rounded-2xl shadow-sm border border-slate-200 px-6 sm:px-8 py-2">
            {t.faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ALTERNATIVA ═══ */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="container reveal flex items-center justify-center gap-6 flex-wrap text-center">
          <p className="text-lg font-medium text-ink">
            {t.tryFirst}
          </p>
          <Link href={t.pricesHref} className="btn-ghost border border-slate-200 hover:bg-slate-50">
            {t.startFree} <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}

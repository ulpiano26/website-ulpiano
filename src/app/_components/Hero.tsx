import Link from 'next/link'
import HeroMockup from './HeroMockup'

export default function Hero() {
  const marqueeNames = [
    'Bufete Casals', 'Notaría Puig', 'Fàbrega Legal', 'Asesoría Roca', 'Despacho García & Asoc.', 'Gestoría Pla', 'Bufete Martínez', 'Notaría Soler'
  ];
  const marqueeItems = [...marqueeNames, ...marqueeNames];

  return (
    <section className="hero bg-night relative overflow-hidden shrink-0" id="hero">
      <div className="hero__orb absolute z-0" />
      <div className="container relative z-10">
        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero__title text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-balance animate-fade-in-up leading-tight text-white">
              De la planificación a la tramitación.<br />
              <span className="hero__title-accent">Sin margen de error.</span>
            </h1>
            <p className="hero__subtitle text-base md:text-lg text-white/60 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Ulpiano estructura el patrimonio que se va a heredar, calcula la fiscalidad más favorable y gestiona toda la tramitación posterior — desde el inventario hasta el cuaderno particional.
            </p>
            <div className="hero__stats hero__stats--top animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div>
                <span className="hero__stat-value">35%</span>
                <p className="hero__stat-label">Reducción en tiempo de gestión</p>
              </div>
              <div>
                <span className="hero__stat-value">6 meses</span>
                <p className="hero__stat-label">Plazo ISD controlado</p>
              </div>
              <div>
                <span className="hero__stat-value">100%</span>
                <p className="hero__stat-label">Normativa catalana integrada</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Link href="#cta-final" className="btn-primary w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)]">
                Solicita tu demo gratuita
              </Link>
              <Link href="#como-funciona" className="btn-ghost group justify-start">
                Ver cómo funciona el motor normativo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10"/><path d="M9 4l4 4-4 4"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="hero__visual animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <HeroMockup />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 py-6 md:py-8 border-t border-white/10" style={{ background: 'rgba(10, 10, 10, 0.4)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
        <p className="eyebrow text-center mb-4 md:mb-6 text-white/40 text-[10px] md:text-[11px]">
          PROFESIONALES QUE CONFÍAN EN ULPIANO
        </p>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', width: 'max-content', animation: 'scroll-left 30s linear infinite' }}>
            {marqueeItems.map((name, index) => (
              <span 
                key={`${name}-${index}`} 
                className="mx-6 md:mx-12 text-white font-medium text-[14px] md:text-[15px] tracking-[0.02em] whitespace-nowrap"
              >
                {name} &middot;
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

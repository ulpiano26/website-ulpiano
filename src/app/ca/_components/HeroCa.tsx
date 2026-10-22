import Link from 'next/link'
import HeroVideoBackground from '../../_components/HeroVideoBackground'

export default function HeroCa() {
  const marqueeNames = [
    'Bufete Casals', 'Notaría Puig', 'Fàbrega Legal', 'Asesoría Roca', 'Despacho García & Asoc.', 'Gestoría Pla', 'Bufete Martínez', 'Notaría Soler'
  ];
  const marqueeItems = [...marqueeNames, ...marqueeNames];

  return (
    <section className="hero bg-night relative overflow-hidden shrink-0" id="hero">
      <HeroVideoBackground />
      <div className="hero__orb relative z-10" />
      <div className="container relative z-10">
        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero__title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance animate-fade-in-up leading-tight text-white" style={{ animationDelay: '100ms' }}>
              La successió,<br />
              sense marge d&apos;error.
            </h1>
            <p className="hero__subtitle text-base md:text-lg text-white/60 mt-6 max-w-2xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Motor jurídic i fiscal per a despatxos professionals.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Link href="/ca/demo" className="btn-primary shadow-[0_0_20px_rgba(45,106,79,0.4)] hover:shadow-[0_0_30px_rgba(45,106,79,0.6)]">
                Sol·licita la teva demo gratuïta
              </Link>
              <Link href="/ca/solucions/fiscalitat-successoria" className="btn-ghost group">
                Veure com funciona el motor normatiu
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10"/><path d="M9 4l4 4-4 4"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 py-6 md:py-8 border-t border-white/10" style={{ background: 'rgba(8, 18, 40, 0.45)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
        <p className="eyebrow text-center mb-4 md:mb-6 text-white/40 text-[10px] md:text-[11px]">
          PROFESSIONALS QUE CONFIEN EN ULPIANO
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

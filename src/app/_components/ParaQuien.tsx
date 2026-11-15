'use client'

import { useEffect, useRef, useState } from 'react'

const CheckIcon = () => (
  <svg viewBox="0 0 16 16">
    <polyline points="3 8 7 12 13 4" />
  </svg>
)

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 6 15 12 9 18" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <path d="M2 13h20" />
  </svg>
)

const PercentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7.5" cy="7.5" r="2.5" />
    <circle cx="16.5" cy="16.5" r="2.5" />
    <line x1="5" y1="19" x2="19" y2="5" />
  </svg>
)

const SealIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M9 13.5 7 22l5-3 5 3-2-8.5" />
  </svg>
)

type Tab = {
  id: string
  label: string
  shortDesc: string
  icon: React.ReactNode
  claim: string
  bullets: string[]
  mockupLabel: string
  mockupVideo?: string
  mockupPoster?: string
}

const tabs: Tab[] = [
  {
    id: 'despachos',
    label: 'Despachos',
    shortDesc: 'Cálculo de legítima y cuaderno particional',
    icon: <BriefcaseIcon />,
    claim: 'El cálculo de la legítima no debería tardar dos horas. En Ulpiano tarda tres minutos.',
    bullets: [
      'Derecho foral catalán integrado desde la base, sin excepciones',
      'Borrador del cuaderno particional generado a partir del expediente',
      'Cada decisión del expediente queda registrada y es auditable',
    ],
    mockupLabel: 'Planificador Sucesorio',
    mockupVideo: '/videos/despachos.mp4',
    mockupPoster: '/videos/despachos-poster.jpg',
  },
  {
    id: 'asesorias',
    label: 'Asesorías',
    shortDesc: 'ISD recalculado, trazable ante la ATC',
    icon: <PercentIcon />,
    claim: 'El ISD cambia. Tus expedientes activos, no.',
    bullets: [
      'Recálculo automático ante cambios normativos',
      'Trazabilidad auditable ante la ATC',
      'Alertas de plazo antes de que el problema llegue al cliente',
    ],
    mockupLabel: 'Motor Fiscal ISD',
    mockupVideo: '/videos/asesorias.mp4',
    mockupPoster: '/videos/asesorias-poster.jpg',
  },
  {
    id: 'notarias',
    label: 'Notarías',
    shortDesc: 'Seguimiento activo tras el testamento',
    icon: <SealIcon />,
    claim: 'El testamento es el inicio de una relación de 20 años. Ulpiano te da las herramientas para mantenerla activa.',
    bullets: [
      'Panel de seguimiento del expediente post-testamento',
      'Comunicación con el cliente desde la plataforma',
      'Documentación centralizada y cifrada',
    ],
    mockupLabel: 'Panel de Expedientes',
    mockupVideo: '/videos/notarias.mp4',
    mockupPoster: '/videos/notarias-poster.jpg',
  },
]

export default function ParaQuien() {
  const [active, setActive] = useState(0)
  const [isNearViewport, setIsNearViewport] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const tab = tabs[active]

  // Only download the demo video once the section approaches the viewport.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true)
          observer.disconnect()
        }
      },
      { rootMargin: '400px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') setActive((index + 1) % tabs.length)
    if (e.key === 'ArrowLeft') setActive((index - 1 + tabs.length) % tabs.length)
  }

  return (
    <section className="para-quien" id="para-quien" ref={sectionRef}>
      <div className="container">
        <div className="para-quien__header reveal">
          <p className="eyebrow para-quien__eyebrow">Segmentos</p>
          <h2 className="para-quien__title">Hecho para quien gestiona herencias en serio</h2>
          <p className="para-quien__subtitle">Elige tu perfil y descubre qué resuelve Ulpiano en tu día a día.</p>
        </div>

        <div className="para-quien__layout reveal">
          <div className="segment-list" role="tablist" aria-label="Perfiles profesionales" aria-orientation="vertical">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={i === active}
                aria-controls="segment-stage-panel"
                tabIndex={i === active ? 0 : -1}
                className={`segment-item${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              >
                <span className="segment-item__icon">{t.icon}</span>
                <span className="segment-item__text">
                  <span className="segment-item__label">{t.label}</span>
                  <span className="segment-item__desc">{t.shortDesc}</span>
                </span>
                <span className="segment-item__arrow"><ChevronIcon /></span>
              </button>
            ))}
          </div>

          <div
            key={tab.id}
            role="tabpanel"
            id="segment-stage-panel"
            aria-labelledby={`tab-${tab.id}`}
            className="segment-stage"
          >
            <p className="segment-stage__claim">{tab.claim}</p>
            <ul className="segment-stage__bullets">
              {tab.bullets.map((bullet, i) => (
                <li key={bullet} className="segment-stage__bullet" style={{ '--i': i } as React.CSSProperties}>
                  <CheckIcon />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="segment-stage__frame">
              <div className="segment-stage__framebar">
                <span />
                <span />
                <span />
                <span className="segment-stage__framelabel">{tab.mockupLabel}</span>
              </div>
              <div className="segment-stage__frameview">
                {tab.mockupVideo && isNearViewport ? (
                  <video
                    src={tab.mockupVideo}
                    poster={tab.mockupPoster}
                    aria-label={tab.mockupLabel}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  />
                ) : (
                  <div className="segment-stage__placeholder">
                    <span className="segment-stage__placeholder-icon">{tab.icon}</span>
                    <span>{tab.mockupLabel}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

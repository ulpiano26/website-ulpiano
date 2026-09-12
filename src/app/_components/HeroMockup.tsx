'use client'

import { useEffect, useRef, useState, type ComponentType } from 'react'
import {
  Building2,
  Landmark,
  Wallet,
  Coins,
  FileCheck2,
  FileSearch,
  FileClock,
  Scale,
} from 'lucide-react'

type IconComponent = ComponentType<{ size?: number; strokeWidth?: number }>


type TabKey = 'planificacion' | 'tramitacion'

const TABS: { key: TabKey; label: string }[] = [
  { key: 'planificacion', label: 'Planificación' },
  { key: 'tramitacion', label: 'Tramitación' },
]

const BIENES: { icon: IconComponent; name: string; value: string }[] = [
  { icon: Building2, name: 'Piso en Barcelona', value: '€ 450.000' },
  { icon: Landmark, name: 'Casa en Begur', value: '€ 320.000' },
  { icon: Wallet, name: 'Cuenta corriente', value: '€ 120.000' },
  { icon: Coins, name: 'Cartera de fondos', value: '€ 95.000' },
]

const TRAMITES: {
  icon: IconComponent
  name: string
  status: 'success' | 'warning' | 'info'
  label: string
}[] = [
  { icon: FileCheck2, name: 'Inventario de bienes', status: 'success', label: 'Completado' },
  { icon: FileSearch, name: 'Cálculo de legítimas', status: 'success', label: 'Completado' },
  { icon: FileClock, name: 'Autoliquidación ISD', status: 'warning', label: 'Pendiente' },
  { icon: Scale, name: 'Cuaderno particional', status: 'info', label: 'En cálculo' },
]

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let raf = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return value
}

function formatEUR(n: number) {
  return '€ ' + n.toLocaleString('es-ES')
}

export default function HeroMockup() {
  const [tab, setTab] = useState<TabKey>('planificacion')
  const [autoplay, setAutoplay] = useState(true)
  const [visible, setVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!autoplay) return
    const id = setInterval(() => {
      setTab((prev) => (prev === 'planificacion' ? 'tramitacion' : 'planificacion'))
    }, 4500)
    return () => clearInterval(id)
  }, [autoplay])

  const handleTabClick = (key: TabKey) => {
    setTab(key)
    setAutoplay(false)
  }

  const patrimonio = useCountUp(985000, visible)
  const ahorro = useCountUp(12430, visible)
  const expedientes = useCountUp(24, visible)

  return (
    <div ref={containerRef} className="hero-mockup">
      <div className="hero-mockup__tabs" role="tablist" aria-label="Panel de Ulpiano">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={tab === t.key}
            className={`hero-mockup__tab ${tab === t.key ? 'is-active' : ''}`}
            onClick={() => handleTabClick(t.key)}
          >
            {t.label}
          </button>
        ))}
        <span className="hero-mockup__tabs-spacer" />
        <span className="hero-mockup__dot" />
        <span className="hero-mockup__dot" />
      </div>

      <div className="hero-mockup__body">
        {tab === 'planificacion' ? (
          <div className="hero-mockup__panel" role="tabpanel" aria-label="Planificación sucesoria">
            <div className="hero-mockup__stats-row">
              <div className="hero-mockup__stat">
                <span className="hero-mockup__stat-label">Patrimonio estructurado</span>
                <span className="hero-mockup__stat-value">{formatEUR(patrimonio)}</span>
              </div>
              <div className="hero-mockup__stat">
                <span className="hero-mockup__stat-label">Ahorro fiscal estimado</span>
                <span className="hero-mockup__stat-value hero-mockup__stat-value--accent">
                  {formatEUR(ahorro)}
                </span>
              </div>
            </div>

            <div className="hero-mockup__progress-block">
              <div className="hero-mockup__progress-header">
                <span>Legítimas asignadas</span>
                <span>100%</span>
              </div>
              <div className="hero-mockup__progress">
                <div
                  className="hero-mockup__progress-fill"
                  style={{ width: visible ? '100%' : '0%' }}
                />
              </div>
            </div>

            <p className="hero-mockup__list-title">Bienes inventariados</p>
            <ul className="hero-mockup__list">
              {BIENES.map((item, i) => {
                const Icon = item.icon
                return (
                  <li
                    key={item.name}
                    className={`hero-mockup__row ${visible ? 'is-visible' : ''}`}
                    style={{ transitionDelay: `${i * 90}ms` }}
                  >
                    <span className="hero-mockup__row-icon">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <span className="hero-mockup__row-name">{item.name}</span>
                    <span className="hero-mockup__row-value">{item.value}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        ) : (
          <div className="hero-mockup__panel" role="tabpanel" aria-label="Tramitación sucesoria">
            <div className="hero-mockup__stats-row">
              <div className="hero-mockup__stat">
                <span className="hero-mockup__stat-label">Expedientes activos</span>
                <span className="hero-mockup__stat-value">{expedientes}</span>
              </div>
              <div className="hero-mockup__stat">
                <span className="hero-mockup__stat-label">Próximo plazo</span>
                <span className="hero-mockup__stat-value hero-mockup__stat-value--accent">
                  4 meses
                </span>
              </div>
            </div>

            <div className="hero-mockup__progress-block">
              <div className="hero-mockup__progress-header">
                <span>Cuaderno particional</span>
                <span>80%</span>
              </div>
              <div className="hero-mockup__progress">
                <div
                  className="hero-mockup__progress-fill"
                  style={{ width: visible ? '80%' : '0%' }}
                />
              </div>
            </div>

            <p className="hero-mockup__list-title">Trámites del expediente</p>
            <ul className="hero-mockup__list">
              {TRAMITES.map((item, i) => {
                const Icon = item.icon
                return (
                  <li
                    key={item.name}
                    className={`hero-mockup__row ${visible ? 'is-visible' : ''}`}
                    style={{ transitionDelay: `${i * 90}ms` }}
                  >
                    <span className="hero-mockup__row-icon">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <span className="hero-mockup__row-name">{item.name}</span>
                    <span
                      className={`hero-mockup__row-badge hero-mockup__row-badge--${item.status}`}
                    >
                      {item.label}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

'use client'

import { useRef, type KeyboardEvent } from 'react'
import { motion, type MotionValue } from 'motion/react'
import { cn } from '@/lib/cn'
import styles from '../styles/heroMockup.module.css'
import { TAB_PILL_SPRING } from '../animation/heroMotionTokens'
import { HERO_ACT_COPY, HERO_ACT_ORDER, HERO_TABLIST_LABEL } from '../data/heroMockupContent'
import type { HeroAct } from '../types/heroMockup.types'
import { LiveStatusIndicator } from './LiveStatusIndicator'

interface HeroMockupTabsProps {
  activeAct: HeroAct
  actProgress: MotionValue<number>
  panelId: string
  getTabId: (act: HeroAct) => string
  onSelectAct: (act: HeroAct) => void
}

export function HeroMockupTabs({
  activeAct,
  actProgress,
  panelId,
  getTabId,
  onSelectAct,
}: HeroMockupTabsProps) {
  const tabElementsRef = useRef<Partial<Record<HeroAct, HTMLButtonElement | null>>>({})

  const focusAndSelectAct = (act: HeroAct) => {
    tabElementsRef.current[act]?.focus()
    onSelectAct(act)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = HERO_ACT_ORDER.indexOf(activeAct)
    const lastIndex = HERO_ACT_ORDER.length - 1
    const nextIndexByKey: Record<string, number> = {
      ArrowRight: currentIndex === lastIndex ? 0 : currentIndex + 1,
      ArrowLeft: currentIndex === 0 ? lastIndex : currentIndex - 1,
      Home: 0,
      End: lastIndex,
    }
    const nextIndex = nextIndexByKey[event.key]
    if (nextIndex === undefined) return
    event.preventDefault()
    focusAndSelectAct(HERO_ACT_ORDER[nextIndex])
  }

  return (
    <div className={styles.header}>
      <div
        className={styles.tablist}
        role="tablist"
        aria-label={HERO_TABLIST_LABEL}
        onKeyDown={handleKeyDown}
      >
        {HERO_ACT_ORDER.map((act) => {
          const isActive = act === activeAct
          return (
            <button
              key={act}
              ref={(element) => {
                tabElementsRef.current[act] = element
              }}
              id={getTabId(act)}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              className={cn(styles.tab, isActive && styles.tabActive)}
              onClick={() => onSelectAct(act)}
            >
              {isActive && (
                <motion.span
                  layoutId="hero-mockup-active-tab-pill"
                  className={styles.tabPill}
                  transition={TAB_PILL_SPRING}
                  aria-hidden="true"
                />
              )}
              <span className={styles.tabLabel}>
                <span className={styles.tabLabelIdle}>{HERO_ACT_COPY[act].tabLabel}</span>
                <span className={styles.tabLabelActive} aria-hidden="true">
                  {HERO_ACT_COPY[act].tabLabel}
                </span>
              </span>
              <span className={styles.tabProgressTrack} aria-hidden="true">
                {isActive && (
                  <motion.span className={styles.tabProgressFill} style={{ scaleX: actProgress }} />
                )}
              </span>
            </button>
          )
        })}
      </div>
      <LiveStatusIndicator />
    </div>
  )
}

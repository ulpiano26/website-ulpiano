'use client'

import { useCallback, useId, useMemo, useRef, useState, type PointerEvent } from 'react'
import { AnimatePresence, LayoutGroup, MotionConfig, motion } from 'motion/react'
import styles from '../styles/heroMockup.module.css'
import { HeroMockupMotionContext } from '../context/heroMockupMotionContext'
import { HERO_SATELLITE_COPY } from '../data/heroMockupContent'
import { useDocumentVisibility } from '../hooks/useDocumentVisibility'
import { useHeroTimeline } from '../hooks/useHeroTimeline'
import { useInViewport } from '../hooks/useInViewport'
import { useInteractionPause } from '../hooks/useInteractionPause'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { usePointerTilt } from '../hooks/usePointerTilt'
import type { HeroAct } from '../types/heroMockup.types'
import { HeroMockupKpis } from './HeroMockupKpis'
import { HeroMockupList } from './HeroMockupList'
import { HeroMockupProgress } from './HeroMockupProgress'
import { HeroMockupTabs } from './HeroMockupTabs'
import { SatelliteCard } from './SatelliteCard'

const AUTOPLAY_RESUME_DELAY_MS = 8_000
const CONTENT_FADE_SECONDS = 0.6
const REDUCED_MOTION_CROSSFADE_SECONDS = 0.45

export function HeroMockup() {
  const stageRef = useRef<HTMLDivElement>(null)
  const instanceId = useId()
  const [isPointerOverCard, setIsPointerOverCard] = useState(false)

  const isReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const hasFinePointerDesktop = useMediaQuery('(min-width: 768px) and (hover: hover) and (pointer: fine)')
  const isTiltEnabled = hasFinePointerDesktop && !isReducedMotion

  const isInViewport = useInViewport(stageRef)
  const isDocumentVisible = useDocumentVisibility()
  const { isInteractionPaused, registerInteraction } = useInteractionPause(AUTOPLAY_RESUME_DELAY_MS)

  const isAmbientRunning = isInViewport && isDocumentVisible
  const isPlaying = isAmbientRunning && !isPointerOverCard && !isInteractionPaused

  const { timelineState, loopIteration, actProgress, seekToActFinalState } = useHeroTimeline({
    isPlaying,
    isReducedMotion,
  })
  const pointerTilt = usePointerTilt(isTiltEnabled)

  const panelId = `${instanceId}-panel`
  const getTabId = useCallback((act: HeroAct) => `${instanceId}-tab-${act}`, [instanceId])
  const motionContextValue = useMemo(() => ({ isReducedMotion }), [isReducedMotion])

  const handleSelectAct = useCallback(
    (act: HeroAct) => {
      registerInteraction()
      seekToActFinalState(act)
    },
    [registerInteraction, seekToActFinalState]
  )

  const handlePointerEnter = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse') setIsPointerOverCard(true)
  }

  const handlePointerLeave = () => {
    setIsPointerOverCard(false)
    pointerTilt.handlePointerLeave()
  }

  const activeAct = timelineState.act
  const areDecorationsEnabled = !isReducedMotion
  const contentKey = isReducedMotion ? `act-${activeAct}` : `loop-${loopIteration}`

  return (
    <HeroMockupMotionContext.Provider value={motionContextValue}>
      <MotionConfig reducedMotion={isReducedMotion ? 'always' : 'never'}>
        <LayoutGroup id={instanceId}>
          <div
            ref={stageRef}
            className={styles.stage}
            data-ambient-paused={!isAmbientRunning || undefined}
            onPointerEnter={handlePointerEnter}
            onPointerMove={pointerTilt.handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            {areDecorationsEnabled && (
              <div className={styles.backdropGlow} aria-hidden="true">
                <span className={styles.backdropGlowNavy} />
                <motion.span
                  className={styles.backdropGlowGreen}
                  initial={false}
                  animate={{ opacity: activeAct === 'processing' && !timelineState.isFadingOut ? 1 : 0 }}
                  transition={{ duration: activeAct === 'processing' ? 3.2 : 1.2, ease: 'easeInOut' }}
                />
              </div>
            )}

            <motion.div
              className={styles.tiltLayer}
              style={isTiltEnabled ? { rotateX: pointerTilt.rotateX, rotateY: pointerTilt.rotateY } : undefined}
            >
              <div className={styles.card}>
                <HeroMockupTabs
                  activeAct={activeAct}
                  actProgress={actProgress}
                  panelId={panelId}
                  getTabId={getTabId}
                  onSelectAct={handleSelectAct}
                />

                <div
                  id={panelId}
                  className={styles.body}
                  role="tabpanel"
                  aria-labelledby={getTabId(activeAct)}
                >
                  <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                      key={contentKey}
                      className={styles.bodyContent}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: timelineState.isFadingOut ? 0 : 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: isReducedMotion ? REDUCED_MOTION_CROSSFADE_SECONDS : CONTENT_FADE_SECONDS,
                        ease: 'easeInOut',
                      }}
                    >
                      <HeroMockupKpis timelineState={timelineState} />
                      <HeroMockupProgress timelineState={timelineState} />
                      <HeroMockupList timelineState={timelineState} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {isTiltEnabled && (
                  <motion.span
                    className={styles.pointerHighlight}
                    style={{
                      x: pointerTilt.highlightX,
                      y: pointerTilt.highlightY,
                      opacity: pointerTilt.highlightOpacity,
                    }}
                    aria-hidden="true"
                  />
                )}
              </div>
            </motion.div>

            {areDecorationsEnabled && (
              <>
                <SatelliteCard
                  placement="topLeft"
                  iconName="users"
                  title={HERO_SATELLITE_COPY.coverage.title}
                  detail={HERO_SATELLITE_COPY.coverage.detail}
                  isVisible={activeAct === 'planning' && timelineState.isCoverageSatelliteVisible}
                  parallaxX={pointerTilt.satelliteParallaxX}
                  parallaxY={pointerTilt.satelliteParallaxY}
                />
                <SatelliteCard
                  placement="bottomRight"
                  iconName="fileText"
                  title={HERO_SATELLITE_COPY.filing.title}
                  isVisible={activeAct === 'processing' && timelineState.isFilingSatelliteVisible}
                  parallaxX={pointerTilt.satelliteParallaxX}
                  parallaxY={pointerTilt.satelliteParallaxY}
                />
              </>
            )}
          </div>
        </LayoutGroup>
      </MotionConfig>
    </HeroMockupMotionContext.Provider>
  )
}

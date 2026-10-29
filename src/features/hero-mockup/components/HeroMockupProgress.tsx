'use client'

import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/cn'
import styles from '../styles/heroMockup.module.css'
import { EASE_OUT_EXPO, POP_IN_SPRING, SEGMENT_GROW_SPRING } from '../animation/heroMotionTokens'
import { HERO_ACT_COPY, HERO_HEIRS } from '../data/heroMockupContent'
import type { HeroTimelineState } from '../types/heroMockup.types'
import { DrawableIcon } from './DrawableIcon'
import { RollingNumber } from './RollingNumber'
import { SlideText } from './SlideText'

const ALLOCATION_PERCENT_BY_HEIR_COUNT = [0, 33, 67, 100]
const PARTITION_FINAL_PERCENT = 80

interface HeroMockupProgressProps {
  timelineState: HeroTimelineState
}

export function HeroMockupProgress({ timelineState }: HeroMockupProgressProps) {
  const isPlanning = timelineState.act === 'planning'
  const displayedPercent = isPlanning
    ? ALLOCATION_PERCENT_BY_HEIR_COUNT[timelineState.allocatedHeirCount]
    : timelineState.partitionProgressPercent
  const isAllocationCheckVisible = isPlanning && timelineState.isAllocationConfirmed

  return (
    <div className={styles.progressBlock}>
      <div className={styles.progressHeader}>
        <SlideText text={HERO_ACT_COPY[timelineState.act].progressLabel} />
        <span className={styles.progressValue}>
          <AnimatePresence initial={false}>
            {isAllocationCheckVisible && (
              <motion.span
                key="allocation-check"
                className={styles.progressCheck}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.2 } }}
                transition={POP_IN_SPRING}
              >
                <DrawableIcon iconName="check" isDrawn size={10} strokeWidth={3} delaySeconds={0.08} />
              </motion.span>
            )}
          </AnimatePresence>
          <RollingNumber
            value={displayedPercent}
            suffix="%"
            accessibleText={isPlanning ? '100%' : `${PARTITION_FINAL_PERCENT}%`}
          />
        </span>
      </div>

      <div className={styles.progressBarArea}>
        <div className={styles.progressTrack}>
          {HERO_HEIRS.map((heir, heirIndex) => (
            <motion.span
              key={heir.id}
              className={cn(styles.heirSegment, styles[heir.segmentClassName])}
              style={{ left: `${(heirIndex * 100) / HERO_HEIRS.length}%` }}
              initial={false}
              animate={{ scaleX: isPlanning && timelineState.allocatedHeirCount > heirIndex ? 1 : 0 }}
              transition={SEGMENT_GROW_SPRING}
            />
          ))}
          <motion.span
            className={styles.partitionFill}
            initial={false}
            animate={{ scaleX: isPlanning ? 0 : timelineState.partitionProgressPercent / 100 }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          />
        </div>

        <AnimatePresence initial={false}>
          {isPlanning &&
            HERO_HEIRS.slice(0, timelineState.allocatedHeirCount).map((heir, heirIndex) => (
              <motion.span
                key={heir.id}
                className={cn(styles.heirAvatar, styles[heir.segmentClassName])}
                style={{ left: `${((heirIndex + 0.5) * 100) / HERO_HEIRS.length}%` }}
                initial={{ opacity: 0, scale: 0.4, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0, transition: { ...POP_IN_SPRING, delay: 0.18 } }}
                exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.2 } }}
                aria-hidden="true"
              >
                {heir.initial}
              </motion.span>
            ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

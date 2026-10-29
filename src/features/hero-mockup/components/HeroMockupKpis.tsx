'use client'

import { AnimatePresence, motion } from 'motion/react'
import styles from '../styles/heroMockup.module.css'
import { EASE_OUT_EXPO, POP_IN_SPRING } from '../animation/heroMotionTokens'
import { useHeroMockupMotion } from '../context/heroMockupMotionContext'
import {
  HERO_ACT_COPY,
  HERO_ACTIVE_CASES_COUNT,
  HERO_ASSETS,
  HERO_DEADLINE_CAPTION,
  HERO_DEADLINE_REMAINING_MONTHS,
  HERO_DEADLINE_TOTAL_MONTHS,
  HERO_RELIEF_CHIPS,
  HERO_TAX_SAVING_VALUE,
  HERO_TOTAL_ESTATE_VALUE,
} from '../data/heroMockupContent'
import type { HeroTimelineState } from '../types/heroMockup.types'
import { formatEuroAmount } from '../utils/formatGroupedInteger'
import { DeadlineRing } from './DeadlineRing'
import { RollingNumber } from './RollingNumber'
import { SlideText } from './SlideText'

const CHIP_STAGGER_SECONDS = 0.12
const EURO_PREFIX = '€ '
const MONTHS_SUFFIX = ' meses'

interface HeroMockupKpisProps {
  timelineState: HeroTimelineState
}

export function HeroMockupKpis({ timelineState }: HeroMockupKpisProps) {
  const { isReducedMotion } = useHeroMockupMotion()
  const isPlanning = timelineState.act === 'planning'
  const actCopy = HERO_ACT_COPY[timelineState.act]

  const structuredEstateValue = HERO_ASSETS.slice(0, timelineState.landedAssetCount).reduce(
    (total, asset) => total + asset.value,
    0
  )
  const deadlineConsumedMonths = HERO_DEADLINE_TOTAL_MONTHS - HERO_DEADLINE_REMAINING_MONTHS
  const isTaxSavingGlowVisible = isPlanning && timelineState.isTaxSavingRevealed && !isReducedMotion

  return (
    <div className={styles.kpiRow}>
      <div className={styles.kpi}>
        <SlideText className={styles.kpiLabel} text={actCopy.primaryKpiLabel} />
        <div className={styles.kpiValueLine}>
          <RollingNumber
            className={styles.kpiValue}
            value={isPlanning ? structuredEstateValue : HERO_ACTIVE_CASES_COUNT}
            prefix={isPlanning ? EURO_PREFIX : ''}
            accessibleText={
              isPlanning ? formatEuroAmount(HERO_TOTAL_ESTATE_VALUE) : String(HERO_ACTIVE_CASES_COUNT)
            }
          />
        </div>
      </div>

      <div className={styles.kpi}>
        <SlideText className={styles.kpiLabel} text={actCopy.secondaryKpiLabel} />
        <div className={styles.kpiValueLine}>
          <AnimatePresence>
            {isTaxSavingGlowVisible && (
              <motion.span
                key="tax-saving-glow"
                className={styles.kpiGlow}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: [0, 0.95, 0.4], scale: [0.6, 1.08, 1] }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                transition={{ duration: 1.6, ease: EASE_OUT_EXPO, times: [0, 0.35, 1] }}
                aria-hidden="true"
              />
            )}
          </AnimatePresence>
          <RollingNumber
            className={`${styles.kpiValue} ${styles.kpiValueAccent}`}
            value={
              isPlanning
                ? timelineState.isTaxSavingRevealed
                  ? HERO_TAX_SAVING_VALUE
                  : 0
                : HERO_DEADLINE_REMAINING_MONTHS
            }
            prefix={isPlanning ? EURO_PREFIX : ''}
            suffix={isPlanning ? '' : MONTHS_SUFFIX}
            accessibleText={
              isPlanning
                ? formatEuroAmount(HERO_TAX_SAVING_VALUE)
                : `${HERO_DEADLINE_REMAINING_MONTHS}${MONTHS_SUFFIX}`
            }
          />
          <AnimatePresence initial={false}>
            {!isPlanning && (
              <motion.span
                key="deadline-ring"
                className={styles.deadlineRingSlot}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7, transition: { duration: 0.2 } }}
                transition={POP_IN_SPRING}
              >
                <DeadlineRing
                  totalMonths={HERO_DEADLINE_TOTAL_MONTHS}
                  consumedMonths={deadlineConsumedMonths}
                  isDrawn={timelineState.isDeadlineRingDrawn}
                />
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className={styles.kpiMeta}>
          <AnimatePresence initial={false} mode="popLayout">
            {isPlanning &&
              timelineState.areReliefChipsVisible &&
              HERO_RELIEF_CHIPS.map((chipLabel, chipIndex) => (
                <motion.span
                  key={chipLabel}
                  className={styles.reliefChip}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: EASE_OUT_EXPO, delay: chipIndex * CHIP_STAGGER_SECONDS },
                  }}
                  exit={{ opacity: 0, x: 8, transition: { duration: 0.3, delay: chipIndex * 0.06 } }}
                >
                  {chipLabel}
                </motion.span>
              ))}
            {!isPlanning && (
              <motion.span
                key="deadline-caption"
                className={styles.kpiCaption}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT_EXPO, delay: 0.25 } }}
                exit={{ opacity: 0, y: -6, transition: { duration: 0.25 } }}
              >
                {HERO_DEADLINE_CAPTION}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

'use client'

import type { CSSProperties, ReactNode } from 'react'
import { AnimatePresence, motion, type Variants } from 'motion/react'
import { cn } from '@/lib/cn'
import styles from '../styles/heroMockup.module.css'
import { EASE_OUT_EXPO, POP_IN_SPRING, ROW_COLLAPSE_SPRING } from '../animation/heroMotionTokens'
import { useHeroMockupMotion } from '../context/heroMockupMotionContext'
import { HERO_ACT_COPY, HERO_ASSETS, HERO_PROCEDURES } from '../data/heroMockupContent'
import { ROW_ENTRANCE_DURATION_MS, ROW_STAGGER_MS } from '../timeline/heroTimeline'
import type { DrawableIconName, HeroTimelineState, ProcedureStatus } from '../types/heroMockup.types'
import { formatEuroAmount } from '../utils/formatGroupedInteger'
import { DrawableIcon } from './DrawableIcon'
import { RollingNumber } from './RollingNumber'
import { SlideText } from './SlideText'
import { StatusBadge } from './StatusBadge'

const ROW_STAGGER_SECONDS = ROW_STAGGER_MS / 1000
const PROCEDURE_ENTRANCE_BASE_DELAY_SECONDS = 0.3
const REACHED_PROCEDURE_STATUSES: ProcedureStatus[] = ['completed', 'inProgress', 'calculating']
const CONNECTOR_SEGMENT_COUNT = HERO_PROCEDURES.length - 1

const ROW_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 8, scale: 1, filter: 'blur(4px)' },
  visible: (entranceDelaySeconds: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: ROW_ENTRANCE_DURATION_MS / 1000,
      ease: EASE_OUT_EXPO,
      delay: entranceDelaySeconds,
    },
  }),
  stacked: {
    opacity: 0,
    y: 0,
    scale: 0.96,
    filter: 'blur(0px)',
    transition: {
      opacity: { duration: 0.28, delay: 0.18 },
      scale: { duration: 0.45, ease: EASE_OUT_EXPO },
    },
  },
  exit: { opacity: 0, scale: 0.98, filter: 'blur(0px)', transition: { duration: 0.25 } },
}

interface RowIconProps {
  iconName: DrawableIconName
  isDrawn: boolean
  delaySeconds?: number
}

function RowIcon({ iconName, isDrawn, delaySeconds }: RowIconProps) {
  return (
    <span className={styles.rowIcon}>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={iconName}
          className={styles.rowIconGlyph}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.2 } }}
          transition={POP_IN_SPRING}
        >
          <DrawableIcon iconName={iconName} isDrawn={isDrawn} delaySeconds={delaySeconds} />
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

interface RowTrailingSwapProps {
  swapKey: string
  children: ReactNode
}

function RowTrailingSwap({ swapKey, children }: RowTrailingSwapProps) {
  return (
    <span className={styles.rowTrailing}>
      <AnimatePresence initial={false} mode="popLayout" anchorX="right">
        <motion.span
          key={swapKey}
          className={styles.rowTrailingContent}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.42, ease: EASE_OUT_EXPO, delay: 0.12 } }}
          exit={{ opacity: 0, y: -8, transition: { duration: 0.24 } }}
        >
          {children}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

interface HeroMockupListProps {
  timelineState: HeroTimelineState
}

export function HeroMockupList({ timelineState }: HeroMockupListProps) {
  const { isReducedMotion } = useHeroMockupMotion()
  const isPlanning = timelineState.act === 'planning'
  const [firstAsset, ...remainingAssets] = HERO_ASSETS
  const [firstProcedure, ...remainingProcedures] = HERO_PROCEDURES
  const reachedProcedureCount = timelineState.procedureStatuses.filter((status) =>
    REACHED_PROCEDURE_STATUSES.includes(status)
  ).length

  return (
    <div className={styles.listSection}>
      <SlideText className={styles.listTitle} text={HERO_ACT_COPY[timelineState.act].listTitle} />

      <div className={styles.listViewport}>
      <ul className={styles.list}>
        {timelineState.areAssetsVisible && (
          <motion.li
            key="inventory-slot"
            className={cn(styles.row, styles.rowInventorySlot)}
            variants={ROW_VARIANTS}
            custom={0}
            initial={isReducedMotion ? false : 'hidden'}
            animate="visible"
          >
            <AnimatePresence>
              {!isPlanning && !isReducedMotion && (
                <motion.span
                  key="inventory-landing-flash"
                  className={styles.rowLandingFlash}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.85, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, delay: 0.28, times: [0, 0.3, 1] }}
                  aria-hidden="true"
                />
              )}
            </AnimatePresence>
            <RowIcon
              iconName={isPlanning ? firstAsset.icon : firstProcedure.icon}
              isDrawn={isPlanning ? timelineState.landedAssetCount > 0 : true}
              delaySeconds={isPlanning ? 0 : 0.22}
            />
            <SlideText
              className={styles.rowName}
              text={isPlanning ? firstAsset.name : firstProcedure.name}
            />
            <RowTrailingSwap swapKey={isPlanning ? 'asset-value' : 'procedure-status'}>
              {isPlanning ? (
                <RollingNumber
                  className={styles.rowValue}
                  value={timelineState.landedAssetCount > 0 ? firstAsset.value : 0}
                  prefix="€ "
                  accessibleText={formatEuroAmount(firstAsset.value)}
                />
              ) : (
                <StatusBadge status={timelineState.procedureStatuses[0]} />
              )}
            </RowTrailingSwap>
          </motion.li>
        )}

        {timelineState.areAssetsVisible &&
          remainingAssets.map((asset, remainingIndex) => {
            const rowIndex = remainingIndex + 1
            const isStacked = !isPlanning
            return (
              <motion.li
                key={asset.id}
                layout="position"
                className={cn(styles.row, isStacked && styles.rowStacked)}
                variants={ROW_VARIANTS}
                custom={rowIndex * ROW_STAGGER_SECONDS}
                initial={isReducedMotion ? false : 'hidden'}
                animate={isStacked ? 'stacked' : 'visible'}
                transition={{ layout: { ...ROW_COLLAPSE_SPRING, delay: (rowIndex - 1) * 0.035 } }}
                aria-hidden={isStacked || undefined}
                inert={isStacked || undefined}
              >
                <RowIcon iconName={asset.icon} isDrawn={timelineState.landedAssetCount > rowIndex} />
                <span className={styles.rowName}>{asset.name}</span>
                <span className={styles.rowTrailing}>
                  <RollingNumber
                    className={styles.rowValue}
                    value={timelineState.landedAssetCount > rowIndex ? asset.value : 0}
                    prefix="€ "
                    accessibleText={formatEuroAmount(asset.value)}
                  />
                </span>
              </motion.li>
            )
          })}

        <AnimatePresence initial={false} mode="popLayout">
          {!isPlanning &&
            timelineState.areProceduresVisible &&
            remainingProcedures.map((procedure, remainingIndex) => {
              const procedureIndex = remainingIndex + 1
              const status = timelineState.procedureStatuses[procedureIndex]
              const entranceDelaySeconds =
                PROCEDURE_ENTRANCE_BASE_DELAY_SECONDS + remainingIndex * ROW_STAGGER_SECONDS
              return (
                <motion.li
                  key={procedure.id}
                  className={cn(styles.row, status === 'inProgress' && styles.rowActive)}
                  variants={ROW_VARIANTS}
                  custom={entranceDelaySeconds}
                  initial={isReducedMotion ? false : 'hidden'}
                  animate="visible"
                  exit="exit"
                >
                  {status === 'inProgress' && !isReducedMotion && (
                    <span className={styles.rowShimmer} aria-hidden="true" />
                  )}
                  <RowIcon
                    iconName={procedure.icon}
                    isDrawn
                    delaySeconds={entranceDelaySeconds + 0.25}
                  />
                  <span className={styles.rowName}>{procedure.name}</span>
                  <span className={styles.rowTrailing}>
                    <StatusBadge status={status} />
                  </span>
                </motion.li>
              )
            })}
        </AnimatePresence>
      </ul>

      <div className={styles.connectorLayer} aria-hidden="true">
        {Array.from({ length: CONNECTOR_SEGMENT_COUNT }, (_, segmentIndex) => (
          <motion.span
            key={`connector-${segmentIndex}`}
            className={styles.connectorSegment}
            style={{ '--connector-index': segmentIndex } as CSSProperties}
            initial={false}
            animate={{ opacity: !isPlanning && timelineState.areProceduresVisible ? 1 : 0 }}
            transition={{
              duration: 0.4,
              delay: isPlanning ? 0 : PROCEDURE_ENTRANCE_BASE_DELAY_SECONDS + segmentIndex * ROW_STAGGER_SECONDS,
            }}
          >
            <motion.span
              className={styles.connectorFill}
              initial={false}
              animate={{ scaleY: !isPlanning && reachedProcedureCount > segmentIndex + 1 ? 1 : 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            />
          </motion.span>
        ))}
      </div>
      </div>
    </div>
  )
}

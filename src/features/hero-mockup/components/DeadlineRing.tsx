'use client'

import { motion } from 'motion/react'
import styles from '../styles/heroMockup.module.css'
import { STROKE_DRAW_TRANSITION } from '../animation/heroMotionTokens'
import { useHeroMockupMotion } from '../context/heroMockupMotionContext'

const RING_CENTER = 10
const RING_RADIUS = 7.5
const SEGMENT_GAP_DEGREES = 9
const SEGMENT_DRAW_STAGGER_SECONDS = 0.28

function polarToCartesian(angleDegrees: number) {
  const angleRadians = (angleDegrees * Math.PI) / 180
  const x = RING_CENTER + RING_RADIUS * Math.sin(angleRadians)
  const y = RING_CENTER - RING_RADIUS * Math.cos(angleRadians)
  return `${x.toFixed(3)} ${y.toFixed(3)}`
}

/** Clockwise arc for one month of the deadline, starting at 12 o'clock. */
function buildMonthArcPath(monthIndex: number, totalMonths: number) {
  const segmentDegrees = 360 / totalMonths
  const startAngle = monthIndex * segmentDegrees + SEGMENT_GAP_DEGREES / 2
  const endAngle = (monthIndex + 1) * segmentDegrees - SEGMENT_GAP_DEGREES / 2
  return `M ${polarToCartesian(startAngle)} A ${RING_RADIUS} ${RING_RADIUS} 0 0 1 ${polarToCartesian(endAngle)}`
}

interface DeadlineRingProps {
  totalMonths: number
  consumedMonths: number
  isDrawn: boolean
}

export function DeadlineRing({ totalMonths, consumedMonths, isDrawn }: DeadlineRingProps) {
  const { isReducedMotion } = useHeroMockupMotion()
  const monthArcPaths = Array.from({ length: totalMonths }, (_, monthIndex) =>
    buildMonthArcPath(monthIndex, totalMonths)
  )

  return (
    <svg className={styles.deadlineRing} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      {monthArcPaths.map((arcPath) => (
        <path key={`track-${arcPath}`} d={arcPath} className={styles.deadlineRingTrack} />
      ))}
      {monthArcPaths.slice(0, consumedMonths).map((arcPath, monthIndex) => (
        <motion.path
          key={`consumed-${arcPath}`}
          d={arcPath}
          className={styles.deadlineRingConsumed}
          pathLength={1}
          strokeDasharray="1 2"
          initial={isReducedMotion ? false : { strokeDashoffset: 1 }}
          animate={{ strokeDashoffset: isDrawn ? 0 : 1 }}
          transition={{
            ...STROKE_DRAW_TRANSITION,
            delay: isDrawn ? monthIndex * SEGMENT_DRAW_STAGGER_SECONDS : 0,
          }}
        />
      ))}
    </svg>
  )
}

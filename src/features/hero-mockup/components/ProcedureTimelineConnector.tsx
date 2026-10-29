'use client'

import type { CSSProperties } from 'react'
import { motion } from 'motion/react'
import styles from '../styles/heroMockup.module.css'
import { EASE_OUT_EXPO } from '../animation/heroMotionTokens'

interface ProcedureTimelineConnectorProps {
  segmentCount: number
  isVisible: boolean
  /** Number of procedures already started or completed; segment N fills once step N + 1 is reached. */
  reachedProcedureCount: number
  entranceDelaySeconds: number
  segmentStaggerSeconds: number
}

export function ProcedureTimelineConnector({
  segmentCount,
  isVisible,
  reachedProcedureCount,
  entranceDelaySeconds,
  segmentStaggerSeconds,
}: ProcedureTimelineConnectorProps) {
  return (
    <div className={styles.connectorLayer} aria-hidden="true">
      {Array.from({ length: segmentCount }, (_, segmentIndex) => (
        <motion.span
          key={segmentIndex}
          className={styles.connectorSegment}
          style={{ '--connector-index': segmentIndex } as CSSProperties}
          initial={false}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{
            duration: 0.4,
            delay: isVisible ? entranceDelaySeconds + segmentIndex * segmentStaggerSeconds : 0,
          }}
        >
          <motion.span
            className={styles.connectorFill}
            initial={false}
            animate={{ scaleY: reachedProcedureCount > segmentIndex + 1 ? 1 : 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          />
        </motion.span>
      ))}
    </div>
  )
}

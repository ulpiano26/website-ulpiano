'use client'

import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/cn'
import styles from '../styles/heroMockup.module.css'
import { EASE_OUT_EXPO } from '../animation/heroMotionTokens'
import { PROCEDURE_STATUS_LABELS } from '../data/heroMockupContent'
import type { ProcedureStatus } from '../types/heroMockup.types'
import { DrawableIcon } from './DrawableIcon'

const STATUS_CLASS_NAMES: Record<ProcedureStatus, string> = {
  waiting: styles.badgeWaiting,
  pending: styles.badgePending,
  inProgress: styles.badgeInProgress,
  calculating: styles.badgeCalculating,
  completed: styles.badgeCompleted,
}

const BADGE_MORPH_TRANSITION = { duration: 0.42, ease: EASE_OUT_EXPO }

interface StatusBadgeProps {
  status: ProcedureStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={styles.badgeSlot}>
      <AnimatePresence initial={false} mode="popLayout" anchorX="right">
        <motion.span
          key={status}
          className={cn(styles.badge, STATUS_CLASS_NAMES[status])}
          initial={{ opacity: 0, y: 6, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.94 }}
          transition={BADGE_MORPH_TRANSITION}
        >
          {status === 'completed' && (
            <DrawableIcon iconName="check" isDrawn size={11} strokeWidth={2.6} delaySeconds={0.12} />
          )}
          {status === 'inProgress' && <span className={styles.badgePulseDot} aria-hidden="true" />}
          {PROCEDURE_STATUS_LABELS[status]}
          {status === 'calculating' && (
            <span className={styles.loadingDots} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          )}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

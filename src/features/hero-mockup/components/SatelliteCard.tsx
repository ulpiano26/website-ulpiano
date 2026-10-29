'use client'

import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/cn'
import styles from '../styles/heroMockup.module.css'
import { SATELLITE_SPRING } from '../animation/heroMotionTokens'
import type { DrawableIconName } from '../types/heroMockup.types'
import { DrawableIcon } from './DrawableIcon'

interface SatelliteCardProps {
  isVisible: boolean
  placement: 'topLeft' | 'bottomRight'
  iconName: DrawableIconName
  title: string
  detail?: string
}

export function SatelliteCard({ isVisible, placement, iconName, title, detail }: SatelliteCardProps) {
  return (
    <div
      className={cn(styles.satellite, placement === 'topLeft' ? styles.satelliteTopLeft : styles.satelliteBottomRight)}
      aria-hidden="true"
    >
      <div className={cn(styles.satelliteDrift, placement === 'bottomRight' && styles.satelliteDriftDelayed)}>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className={styles.satelliteCard}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
              transition={SATELLITE_SPRING}
            >
              <span className={styles.satelliteIcon}>
                <DrawableIcon iconName={iconName} isDrawn size={14} delaySeconds={0.15} />
              </span>
              <span className={styles.satelliteText}>
                <span className={styles.satelliteTitle}>{title}</span>
                {detail && <span className={styles.satelliteDetail}>· {detail}</span>}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

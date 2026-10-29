'use client'

import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/cn'
import styles from '../styles/heroMockup.module.css'
import { TEXT_SLIDE_TRANSITION } from '../animation/heroMotionTokens'

interface SlideTextProps {
  text: string
  className?: string
}

export function SlideText({ text, className }: SlideTextProps) {
  return (
    <span className={cn(styles.slideText, className)}>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={text}
          className={styles.slideTextLine}
          initial={{ opacity: 0, y: '65%' }}
          animate={{ opacity: 1, y: '0%' }}
          exit={{ opacity: 0, y: '-65%' }}
          transition={TEXT_SLIDE_TRANSITION}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

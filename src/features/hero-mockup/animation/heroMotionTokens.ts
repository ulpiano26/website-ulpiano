import type { Transition } from 'motion/react'

export const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const TAB_PILL_SPRING: Transition = { type: 'spring', stiffness: 380, damping: 32 }

export const ROW_COLLAPSE_SPRING: Transition = { type: 'spring', stiffness: 420, damping: 38, mass: 0.9 }

export const SEGMENT_GROW_SPRING: Transition = { type: 'spring', stiffness: 220, damping: 24, mass: 0.8 }

export const POP_IN_SPRING: Transition = { type: 'spring', stiffness: 460, damping: 26 }

export const SATELLITE_SPRING: Transition = { type: 'spring', stiffness: 320, damping: 22 }

export const TEXT_SLIDE_TRANSITION: Transition = { duration: 0.38, ease: EASE_OUT_EXPO }

export const DIGIT_ROLL_TRANSITION: Transition = { duration: 0.9, ease: EASE_OUT_EXPO }

export const STROKE_DRAW_TRANSITION: Transition = { duration: 0.7, ease: [0.65, 0, 0.35, 1] }

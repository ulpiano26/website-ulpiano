'use client'

import { motion } from 'motion/react'
import { DRAWABLE_ICONS } from '../data/drawableIcons'
import { STROKE_DRAW_TRANSITION } from '../animation/heroMotionTokens'
import { useHeroMockupMotion } from '../context/heroMockupMotionContext'
import type { DrawableIconName } from '../types/heroMockup.types'

const PATH_STAGGER_SECONDS = 0.06
/** A gap twice the normalised length keeps round line caps from leaking a dot while hidden. */
const NORMALISED_DASH_PATTERN = '1 2'

interface DrawableIconProps {
  iconName: DrawableIconName
  isDrawn: boolean
  size?: number
  strokeWidth?: number
  delaySeconds?: number
  className?: string
}

export function DrawableIcon({
  iconName,
  isDrawn,
  size = 16,
  strokeWidth = 2,
  delaySeconds = 0,
  className,
}: DrawableIconProps) {
  const { isReducedMotion } = useHeroMockupMotion()
  const { paths } = DRAWABLE_ICONS[iconName]

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths.map((pathData, pathIndex) => (
        <motion.path
          key={pathData}
          d={pathData}
          pathLength={1}
          strokeDasharray={NORMALISED_DASH_PATTERN}
          initial={isReducedMotion ? false : { strokeDashoffset: 1 }}
          animate={{ strokeDashoffset: isDrawn ? 0 : 1 }}
          transition={{
            ...STROKE_DRAW_TRANSITION,
            delay: isDrawn ? delaySeconds + pathIndex * PATH_STAGGER_SECONDS : 0,
          }}
        />
      ))}
    </svg>
  )
}

import { useCallback, useEffect, type PointerEvent } from 'react'
import { useMotionValue, useSpring, useTransform } from 'motion/react'

const MAX_TILT_DEGREES = 4
const MAX_SATELLITE_PARALLAX_PX = 7
const HIGHLIGHT_RADIUS_PX = 220
const TILT_SPRING = { stiffness: 170, damping: 22, mass: 0.6 }
const HIGHLIGHT_SPRING = { stiffness: 260, damping: 30 }

/** Normalised pointer position goes from -0.5 (left/top) to 0.5 (right/bottom). */
export function usePointerTilt(isEnabled: boolean) {
  const normalizedPointerX = useMotionValue(0)
  const normalizedPointerY = useMotionValue(0)
  const smoothPointerX = useSpring(normalizedPointerX, TILT_SPRING)
  const smoothPointerY = useSpring(normalizedPointerY, TILT_SPRING)

  const rotateX = useTransform(smoothPointerY, (pointerY) => -pointerY * MAX_TILT_DEGREES * 2)
  const rotateY = useTransform(smoothPointerX, (pointerX) => pointerX * MAX_TILT_DEGREES * 2)
  const satelliteParallaxX = useTransform(
    smoothPointerX,
    (pointerX) => -pointerX * MAX_SATELLITE_PARALLAX_PX * 2
  )
  const satelliteParallaxY = useTransform(
    smoothPointerY,
    (pointerY) => -pointerY * MAX_SATELLITE_PARALLAX_PX * 2
  )

  const highlightTargetX = useMotionValue(0)
  const highlightTargetY = useMotionValue(0)
  const highlightTargetOpacity = useMotionValue(0)
  const highlightX = useSpring(highlightTargetX, HIGHLIGHT_SPRING)
  const highlightY = useSpring(highlightTargetY, HIGHLIGHT_SPRING)
  const highlightOpacity = useSpring(highlightTargetOpacity, HIGHLIGHT_SPRING)

  const resetPointer = useCallback(() => {
    normalizedPointerX.set(0)
    normalizedPointerY.set(0)
    highlightTargetOpacity.set(0)
  }, [highlightTargetOpacity, normalizedPointerX, normalizedPointerY])

  useEffect(() => {
    if (!isEnabled) resetPointer()
  }, [isEnabled, resetPointer])

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (!isEnabled || event.pointerType !== 'mouse') return
      const bounds = event.currentTarget.getBoundingClientRect()
      const localX = event.clientX - bounds.left
      const localY = event.clientY - bounds.top
      normalizedPointerX.set(Math.min(Math.max(localX / bounds.width - 0.5, -0.5), 0.5))
      normalizedPointerY.set(Math.min(Math.max(localY / bounds.height - 0.5, -0.5), 0.5))
      highlightTargetX.set(localX - HIGHLIGHT_RADIUS_PX)
      highlightTargetY.set(localY - HIGHLIGHT_RADIUS_PX)
      highlightTargetOpacity.set(1)
    },
    [
      highlightTargetOpacity,
      highlightTargetX,
      highlightTargetY,
      isEnabled,
      normalizedPointerX,
      normalizedPointerY,
    ]
  )

  return {
    rotateX,
    rotateY,
    satelliteParallaxX,
    satelliteParallaxY,
    highlightX,
    highlightY,
    highlightOpacity,
    handlePointerMove,
    handlePointerLeave: resetPointer,
  }
}

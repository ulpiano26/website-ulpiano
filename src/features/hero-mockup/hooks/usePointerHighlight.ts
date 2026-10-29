import { useCallback, useEffect, type PointerEvent } from 'react'
import { useMotionValue, useSpring } from 'motion/react'

const HIGHLIGHT_RADIUS_PX = 220
const HIGHLIGHT_SPRING = { stiffness: 260, damping: 30 }

/** Faint light that follows the cursor across the card surface; the card itself never moves. */
export function usePointerHighlight(isEnabled: boolean) {
  const highlightTargetX = useMotionValue(0)
  const highlightTargetY = useMotionValue(0)
  const highlightTargetOpacity = useMotionValue(0)
  const highlightX = useSpring(highlightTargetX, HIGHLIGHT_SPRING)
  const highlightY = useSpring(highlightTargetY, HIGHLIGHT_SPRING)
  const highlightOpacity = useSpring(highlightTargetOpacity, HIGHLIGHT_SPRING)

  const hideHighlight = useCallback(() => {
    highlightTargetOpacity.set(0)
  }, [highlightTargetOpacity])

  useEffect(() => {
    if (!isEnabled) hideHighlight()
  }, [isEnabled, hideHighlight])

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (!isEnabled || event.pointerType !== 'mouse') return
      const bounds = event.currentTarget.getBoundingClientRect()
      highlightTargetX.set(event.clientX - bounds.left - HIGHLIGHT_RADIUS_PX)
      highlightTargetY.set(event.clientY - bounds.top - HIGHLIGHT_RADIUS_PX)
      highlightTargetOpacity.set(1)
    },
    [highlightTargetOpacity, highlightTargetX, highlightTargetY, isEnabled]
  )

  return {
    highlightX,
    highlightY,
    highlightOpacity,
    handlePointerMove,
    handlePointerLeave: hideHighlight,
  }
}

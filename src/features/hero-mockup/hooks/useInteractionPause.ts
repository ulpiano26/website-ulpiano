import { useCallback, useEffect, useState } from 'react'

/** Stays paused until `resumeAfterMs` have passed without a new registered interaction. */
export function useInteractionPause(resumeAfterMs: number) {
  const [interactionCount, setInteractionCount] = useState(0)
  const [isInteractionPaused, setIsInteractionPaused] = useState(false)

  useEffect(() => {
    if (interactionCount === 0) return
    const resumeTimeoutId = window.setTimeout(() => setIsInteractionPaused(false), resumeAfterMs)
    return () => window.clearTimeout(resumeTimeoutId)
  }, [interactionCount, resumeAfterMs])

  const registerInteraction = useCallback(() => {
    setIsInteractionPaused(true)
    setInteractionCount((count) => count + 1)
  }, [])

  return { isInteractionPaused, registerInteraction }
}

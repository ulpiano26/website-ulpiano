import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useMotionValue, type MotionValue } from 'motion/react'
import {
  HERO_ACT_TIMINGS,
  HERO_LOOP_DURATION_MS,
  buildTimelineStateFromCueCount,
  countCuesReachedAt,
  getActAt,
  getActProgressAt,
} from '../timeline/heroTimeline'
import type { HeroAct, HeroTimelineState } from '../types/heroMockup.types'

/** Caps a single frame so a long stall (e.g. a throttled tab) never skips whole steps. */
const MAX_FRAME_DELTA_MS = 64

interface TimelineSnapshot {
  reachedCueCount: number
  clockAct: HeroAct
  loopIteration: number
}

interface UseHeroTimelineOptions {
  isPlaying: boolean
  isReducedMotion: boolean
}

interface UseHeroTimelineResult {
  timelineState: HeroTimelineState
  loopIteration: number
  actProgress: MotionValue<number>
  seekToActFinalState: (act: HeroAct) => void
}

export function useHeroTimeline({
  isPlaying,
  isReducedMotion,
}: UseHeroTimelineOptions): UseHeroTimelineResult {
  const elapsedMsRef = useRef(0)
  const actProgress = useMotionValue(0)
  const [snapshot, setSnapshot] = useState<TimelineSnapshot>({
    reachedCueCount: 0,
    clockAct: 'planning',
    loopIteration: 0,
  })

  const syncSnapshotWithClock = useCallback(
    (hasLooped: boolean) => {
      const elapsedMs = elapsedMsRef.current
      actProgress.set(getActProgressAt(elapsedMs))
      const reachedCueCount = countCuesReachedAt(elapsedMs)
      const clockAct = getActAt(elapsedMs)
      setSnapshot((previous) =>
        previous.reachedCueCount === reachedCueCount && previous.clockAct === clockAct && !hasLooped
          ? previous
          : {
              reachedCueCount,
              clockAct,
              loopIteration: hasLooped ? previous.loopIteration + 1 : previous.loopIteration,
            }
      )
    },
    [actProgress]
  )

  useEffect(() => {
    if (!isPlaying) return

    let animationFrameId = 0
    let previousFrameTime = performance.now()

    const advanceClock = (frameTime: number) => {
      const deltaMs = Math.min(Math.max(frameTime - previousFrameTime, 0), MAX_FRAME_DELTA_MS)
      previousFrameTime = frameTime

      let nextElapsedMs = elapsedMsRef.current + deltaMs
      const hasLooped = nextElapsedMs >= HERO_LOOP_DURATION_MS
      if (hasLooped) nextElapsedMs -= HERO_LOOP_DURATION_MS
      elapsedMsRef.current = nextElapsedMs

      syncSnapshotWithClock(hasLooped)
      animationFrameId = requestAnimationFrame(advanceClock)
    }

    animationFrameId = requestAnimationFrame(advanceClock)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isPlaying, syncSnapshotWithClock])

  const seekToActFinalState = useCallback(
    (act: HeroAct) => {
      elapsedMsRef.current = HERO_ACT_TIMINGS[act].finalStateMs
      syncSnapshotWithClock(false)
    },
    [syncSnapshotWithClock]
  )

  const displayedCueCount = isReducedMotion
    ? countCuesReachedAt(HERO_ACT_TIMINGS[snapshot.clockAct].finalStateMs)
    : snapshot.reachedCueCount

  const timelineState = useMemo(
    () => buildTimelineStateFromCueCount(displayedCueCount),
    [displayedCueCount]
  )

  return {
    timelineState,
    loopIteration: snapshot.loopIteration,
    actProgress,
    seekToActFinalState,
  }
}

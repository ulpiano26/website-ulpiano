import { HERO_ASSETS, HERO_HEIRS, HERO_PROCEDURES } from '../data/heroMockupContent'
import type {
  HeroAct,
  HeroActTiming,
  HeroTimelineCue,
  HeroTimelineEvent,
  HeroTimelineState,
} from '../types/heroMockup.types'

export const HERO_LOOP_DURATION_MS = 16_000

export const HERO_ACT_TIMINGS: Record<HeroAct, HeroActTiming> = {
  planning: { startMs: 0, endMs: 8_000, finalStateMs: 4_500 },
  processing: { startMs: 8_000, endMs: HERO_LOOP_DURATION_MS, finalStateMs: 11_600 },
}

export const ROW_STAGGER_MS = 140
export const ROW_ENTRANCE_DURATION_MS = 550
const ROW_LANDING_OFFSET_MS = 450

const ASSETS_ENTER_AT_MS = 500
const HEIR_ALLOCATION_START_MS = 2_000
const HEIR_ALLOCATION_STAGGER_MS = 350
const PROCESSING_START_MS = HERO_ACT_TIMINGS.processing.startMs

const ASSET_LANDING_CUES: HeroTimelineCue[] = HERO_ASSETS.map((_, assetIndex) => ({
  atMs: ASSETS_ENTER_AT_MS + assetIndex * ROW_STAGGER_MS + ROW_LANDING_OFFSET_MS,
  event: { type: 'assetLand', assetIndex },
}))

const HEIR_ALLOCATION_CUES: HeroTimelineCue[] = HERO_HEIRS.map((_, heirIndex) => ({
  atMs: HEIR_ALLOCATION_START_MS + heirIndex * HEIR_ALLOCATION_STAGGER_MS,
  event: { type: 'heirAllocate', heirIndex },
}))

const UNSORTED_TIMELINE_CUES: HeroTimelineCue[] = [
  // Act one: planning
  { atMs: ASSETS_ENTER_AT_MS, event: { type: 'assetsEnter' } },
  ...ASSET_LANDING_CUES,
  ...HEIR_ALLOCATION_CUES,
  { atMs: 3_150, event: { type: 'allocationConfirm' } },
  { atMs: 3_300, event: { type: 'coverageSatelliteShow' } },
  { atMs: 3_800, event: { type: 'taxSavingReveal' } },
  { atMs: 4_400, event: { type: 'reliefChipsShow' } },
  { atMs: 6_600, event: { type: 'reliefChipsHide' } },

  // Act two: processing
  { atMs: PROCESSING_START_MS, event: { type: 'processingStart' } },
  { atMs: PROCESSING_START_MS + 350, event: { type: 'deadlineRingDraw' } },
  { atMs: PROCESSING_START_MS + 700, event: { type: 'proceduresEnter' } },
  {
    atMs: PROCESSING_START_MS + 1_700,
    event: { type: 'procedureStatusChange', procedureIndex: 1, status: 'completed', partitionProgressPercent: 30 },
  },
  {
    atMs: PROCESSING_START_MS + 2_600,
    event: { type: 'procedureStatusChange', procedureIndex: 2, status: 'inProgress', partitionProgressPercent: 55 },
  },
  { atMs: PROCESSING_START_MS + 2_900, event: { type: 'filingSatelliteShow' } },
  {
    atMs: PROCESSING_START_MS + 3_500,
    event: { type: 'procedureStatusChange', procedureIndex: 3, status: 'calculating', partitionProgressPercent: 80 },
  },
  { atMs: PROCESSING_START_MS + 6_900, event: { type: 'contentFadeOut' } },
]

export const HERO_TIMELINE_CUES = [...UNSORTED_TIMELINE_CUES].sort(
  (first, second) => first.atMs - second.atMs
)

export const INITIAL_HERO_TIMELINE_STATE: HeroTimelineState = {
  act: 'planning',
  areAssetsVisible: false,
  landedAssetCount: 0,
  allocatedHeirCount: 0,
  isAllocationConfirmed: false,
  isCoverageSatelliteVisible: false,
  isTaxSavingRevealed: false,
  areReliefChipsVisible: false,
  isDeadlineRingDrawn: false,
  areProceduresVisible: false,
  procedureStatuses: HERO_PROCEDURES.map((procedure) => procedure.initialStatus),
  partitionProgressPercent: 0,
  isFilingSatelliteVisible: false,
  isFadingOut: false,
}

export function heroTimelineReducer(
  state: HeroTimelineState,
  event: HeroTimelineEvent
): HeroTimelineState {
  switch (event.type) {
    case 'assetsEnter':
      return { ...state, areAssetsVisible: true }
    case 'assetLand':
      return { ...state, landedAssetCount: Math.max(state.landedAssetCount, event.assetIndex + 1) }
    case 'heirAllocate':
      return { ...state, allocatedHeirCount: Math.max(state.allocatedHeirCount, event.heirIndex + 1) }
    case 'allocationConfirm':
      return { ...state, isAllocationConfirmed: true }
    case 'coverageSatelliteShow':
      return { ...state, isCoverageSatelliteVisible: true }
    case 'taxSavingReveal':
      return { ...state, isTaxSavingRevealed: true }
    case 'reliefChipsShow':
      return { ...state, areReliefChipsVisible: true }
    case 'reliefChipsHide':
      return { ...state, areReliefChipsVisible: false }
    case 'processingStart':
      return {
        ...state,
        act: 'processing',
        isCoverageSatelliteVisible: false,
        areReliefChipsVisible: false,
      }
    case 'deadlineRingDraw':
      return { ...state, isDeadlineRingDrawn: true }
    case 'proceduresEnter':
      return { ...state, areProceduresVisible: true }
    case 'procedureStatusChange':
      return {
        ...state,
        procedureStatuses: state.procedureStatuses.map((status, procedureIndex) =>
          procedureIndex === event.procedureIndex ? event.status : status
        ),
        partitionProgressPercent: event.partitionProgressPercent,
      }
    case 'filingSatelliteShow':
      return { ...state, isFilingSatelliteVisible: true }
    case 'contentFadeOut':
      return { ...state, isFadingOut: true, isFilingSatelliteVisible: false }
  }
}

export function countCuesReachedAt(elapsedMs: number): number {
  let reachedCueCount = 0
  while (
    reachedCueCount < HERO_TIMELINE_CUES.length &&
    HERO_TIMELINE_CUES[reachedCueCount].atMs <= elapsedMs
  ) {
    reachedCueCount += 1
  }
  return reachedCueCount
}

export function buildTimelineStateFromCueCount(reachedCueCount: number): HeroTimelineState {
  return HERO_TIMELINE_CUES.slice(0, reachedCueCount).reduce(
    (state, cue) => heroTimelineReducer(state, cue.event),
    INITIAL_HERO_TIMELINE_STATE
  )
}

export function getActAt(elapsedMs: number): HeroAct {
  return elapsedMs < HERO_ACT_TIMINGS.processing.startMs ? 'planning' : 'processing'
}

export function getActProgressAt(elapsedMs: number): number {
  const { startMs, endMs } = HERO_ACT_TIMINGS[getActAt(elapsedMs)]
  return Math.min(Math.max((elapsedMs - startMs) / (endMs - startMs), 0), 1)
}

/** With reduced motion every act is shown directly in its final state. */
export function resolveDisplayedCueCount(elapsedMs: number, isReducedMotion: boolean): number {
  if (!isReducedMotion) return countCuesReachedAt(elapsedMs)
  return countCuesReachedAt(HERO_ACT_TIMINGS[getActAt(elapsedMs)].finalStateMs)
}

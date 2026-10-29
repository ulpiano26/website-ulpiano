export type HeroAct = 'planning' | 'processing'

export type ProcedureStatus = 'waiting' | 'pending' | 'inProgress' | 'calculating' | 'completed'

export type DrawableIconName =
  | 'building'
  | 'landmark'
  | 'wallet'
  | 'coins'
  | 'fileCheck'
  | 'fileSearch'
  | 'fileClock'
  | 'scale'
  | 'check'
  | 'fileText'
  | 'users'

export interface DrawableIconDefinition {
  /** SVG path data in a 24x24 viewBox; every shape is expressed as a path so it can be stroke-drawn. */
  paths: string[]
}

export interface HeroAsset {
  id: string
  name: string
  value: number
  icon: DrawableIconName
}

export interface HeroHeir {
  id: string
  initial: string
  segmentClassName: 'heirShadeDark' | 'heirShadeMedium' | 'heirShadeLight'
}

export interface HeroProcedure {
  id: string
  name: string
  icon: DrawableIconName
  initialStatus: ProcedureStatus
}

export interface HeroActCopy {
  tabLabel: string
  primaryKpiLabel: string
  secondaryKpiLabel: string
  progressLabel: string
  listTitle: string
}

export interface HeroTimelineState {
  act: HeroAct
  areAssetsVisible: boolean
  landedAssetCount: number
  allocatedHeirCount: number
  isAllocationConfirmed: boolean
  isCoverageSatelliteVisible: boolean
  isTaxSavingRevealed: boolean
  areReliefChipsVisible: boolean
  isDeadlineRingDrawn: boolean
  areProceduresVisible: boolean
  procedureStatuses: ProcedureStatus[]
  partitionProgressPercent: number
  isFilingSatelliteVisible: boolean
  isFadingOut: boolean
}

export type HeroTimelineEvent =
  | { type: 'assetsEnter' }
  | { type: 'assetLand'; assetIndex: number }
  | { type: 'heirAllocate'; heirIndex: number }
  | { type: 'allocationConfirm' }
  | { type: 'coverageSatelliteShow' }
  | { type: 'taxSavingReveal' }
  | { type: 'reliefChipsShow' }
  | { type: 'reliefChipsHide' }
  | { type: 'processingStart' }
  | { type: 'deadlineRingDraw' }
  | { type: 'proceduresEnter' }
  | {
      type: 'procedureStatusChange'
      procedureIndex: number
      status: ProcedureStatus
      partitionProgressPercent: number
    }
  | { type: 'filingSatelliteShow' }
  | { type: 'contentFadeOut' }

export interface HeroTimelineCue {
  atMs: number
  event: HeroTimelineEvent
}

export interface HeroActTiming {
  startMs: number
  endMs: number
  /** Moment at which every animated element of the act has reached its final state. */
  finalStateMs: number
}

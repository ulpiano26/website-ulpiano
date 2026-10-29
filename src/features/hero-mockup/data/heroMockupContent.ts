import type {
  HeroAct,
  HeroActCopy,
  HeroAsset,
  HeroHeir,
  HeroProcedure,
  ProcedureStatus,
} from '../types/heroMockup.types'

export const HERO_ACT_ORDER: HeroAct[] = ['planning', 'processing']

export const HERO_ACT_COPY: Record<HeroAct, HeroActCopy> = {
  planning: {
    tabLabel: 'Planificación',
    primaryKpiLabel: 'Patrimonio estructurado',
    secondaryKpiLabel: 'Ahorro fiscal estimado',
    progressLabel: 'Legítimas asignadas',
    listTitle: 'Bienes inventariados',
  },
  processing: {
    tabLabel: 'Tramitación',
    primaryKpiLabel: 'Expedientes activos',
    secondaryKpiLabel: 'Próximo plazo',
    progressLabel: 'Cuaderno particional',
    listTitle: 'Trámites del expediente',
  },
}

export const HERO_ASSETS: HeroAsset[] = [
  { id: 'barcelona-flat', name: 'Piso en Barcelona', value: 450_000, icon: 'building' },
  { id: 'begur-house', name: 'Casa en Begur', value: 320_000, icon: 'landmark' },
  { id: 'current-account', name: 'Cuenta corriente', value: 120_000, icon: 'wallet' },
  { id: 'fund-portfolio', name: 'Cartera de fondos', value: 95_000, icon: 'coins' },
]

export const HERO_TOTAL_ESTATE_VALUE = HERO_ASSETS.reduce((total, asset) => total + asset.value, 0)

export const HERO_TAX_SAVING_VALUE = 12_430

export const HERO_ACTIVE_CASES_COUNT = 24

export const HERO_DEADLINE_REMAINING_MONTHS = 4

export const HERO_DEADLINE_TOTAL_MONTHS = 6

export const HERO_HEIRS: HeroHeir[] = [
  { id: 'heir-marta', initial: 'M', segmentClassName: 'heirShadeDark' },
  { id: 'heir-jordi', initial: 'J', segmentClassName: 'heirShadeMedium' },
  { id: 'heir-laia', initial: 'L', segmentClassName: 'heirShadeLight' },
]

export const HERO_RELIEF_CHIPS = ['Reducción vivienda habitual', 'Reducción por parentesco']

export const HERO_DEADLINE_CAPTION = 'Plazo ISD de 6 meses'

export const HERO_PROCEDURES: HeroProcedure[] = [
  { id: 'inventory', name: 'Inventario de bienes', icon: 'fileCheck', initialStatus: 'completed' },
  { id: 'forced-heirship', name: 'Cálculo de legítimas', icon: 'fileSearch', initialStatus: 'waiting' },
  { id: 'inheritance-tax', name: 'Autoliquidación ISD', icon: 'fileClock', initialStatus: 'pending' },
  { id: 'partition-deed', name: 'Cuaderno particional', icon: 'scale', initialStatus: 'waiting' },
]

export const PROCEDURE_STATUS_LABELS: Record<ProcedureStatus, string> = {
  waiting: 'En espera',
  pending: 'Pendiente',
  inProgress: 'En curso',
  calculating: 'En cálculo',
  completed: 'Completado',
}

export const HERO_SATELLITE_COPY = {
  coverage: { title: 'Legítima cubierta', detail: '3 herederos' },
  filing: { title: 'Modelo 650 generado' },
}

export const HERO_TABLIST_LABEL = 'Panel de Ulpiano'

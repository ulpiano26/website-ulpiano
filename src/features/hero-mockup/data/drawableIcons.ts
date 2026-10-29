import type { DrawableIconDefinition, DrawableIconName } from '../types/heroMockup.types'

/*
 * Geometry taken from lucide (ISC license). Circles are rewritten as two-arc paths so that
 * every shape supports the same pathLength-based stroke drawing.
 */
const DOCUMENT_OUTLINE =
  'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z'
const DOCUMENT_FOLD = 'M14 2v5a1 1 0 0 0 1 1h5'

export const DRAWABLE_ICONS: Record<DrawableIconName, DrawableIconDefinition> = {
  building: {
    paths: [
      'M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16',
      'M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2',
      'M10 8h4',
      'M10 12h4',
      'M14 21v-3a2 2 0 0 0-4 0v3',
    ],
  },
  landmark: {
    paths: [
      'M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z',
      'M6 18v-7',
      'M10 18v-7',
      'M14 18v-7',
      'M18 18v-7',
      'M3 22h18',
    ],
  },
  wallet: {
    paths: [
      'M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1',
      'M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4',
    ],
  },
  coins: {
    paths: [
      'M10 8a6 6 0 1 0 12 0a6 6 0 1 0 -12 0',
      'M13.744 17.736a6 6 0 1 1-7.48-7.48',
      'M15 6h1v4',
      'm6.134 14.768.866-.5 2 3.464',
    ],
  },
  fileCheck: { paths: [DOCUMENT_OUTLINE, DOCUMENT_FOLD, 'm9 15 2 2 4-4'] },
  fileSearch: {
    paths: [
      DOCUMENT_OUTLINE,
      DOCUMENT_FOLD,
      'M9 14.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0',
      'M13.3 16.3 15 18',
    ],
  },
  fileClock: {
    paths: [
      'M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85',
      DOCUMENT_FOLD,
      'M2 16a6 6 0 1 0 12 0a6 6 0 1 0 -12 0',
      'M8 14v2.2l1.6 1',
    ],
  },
  scale: {
    paths: [
      'M12 3v18',
      'M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1',
      'm19 8 3 8a5 5 0 0 1-6 0zV7',
      'm5 8 3 8a5 5 0 0 1-6 0zV7',
      'M7 21h10',
    ],
  },
  check: { paths: ['M20 6 9 17l-5-5'] },
  fileText: { paths: [DOCUMENT_OUTLINE, DOCUMENT_FOLD, 'M10 9H8', 'M16 13H8', 'M16 17H8'] },
  users: {
    paths: [
      'M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0',
      'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2',
      'M16 3.128a4 4 0 0 1 0 7.744',
      'M22 21v-2a4 4 0 0 0-3-3.87',
    ],
  },
}

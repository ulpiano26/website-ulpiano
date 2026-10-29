/**
 * es-ES thousands grouping with dots. Implemented manually because es-ES Intl skips grouping
 * for four-digit numbers and Node/browser ICU builds may differ, which would break hydration.
 */
export function formatGroupedInteger(value: number): string {
  return Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export function formatEuroAmount(value: number): string {
  return `€ ${formatGroupedInteger(value)}`
}

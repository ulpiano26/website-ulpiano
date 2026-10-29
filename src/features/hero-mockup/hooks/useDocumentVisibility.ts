import { useSyncExternalStore } from 'react'

function subscribeToVisibilityChange(onChange: () => void) {
  document.addEventListener('visibilitychange', onChange)
  return () => document.removeEventListener('visibilitychange', onChange)
}

export function useDocumentVisibility(): boolean {
  return useSyncExternalStore(
    subscribeToVisibilityChange,
    () => document.visibilityState === 'visible',
    () => true
  )
}

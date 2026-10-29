import { createContext, useContext } from 'react'

interface HeroMockupMotionContextValue {
  isReducedMotion: boolean
}

export const HeroMockupMotionContext = createContext<HeroMockupMotionContextValue>({
  isReducedMotion: false,
})

export function useHeroMockupMotion(): HeroMockupMotionContextValue {
  return useContext(HeroMockupMotionContext)
}

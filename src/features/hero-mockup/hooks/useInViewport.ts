import { useEffect, useState, type RefObject } from 'react'

export function useInViewport(elementRef: RefObject<Element | null>, threshold = 0.2): boolean {
  const [isInViewport, setIsInViewport] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      { threshold }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [elementRef, threshold])

  return isInViewport
}

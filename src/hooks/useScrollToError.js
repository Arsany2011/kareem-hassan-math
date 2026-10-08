import { useCallback } from 'react'

export function useScrollToError(ref) {
  return useCallback(() => {
    window.setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
  }, [ref])
}

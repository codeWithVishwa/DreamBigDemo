import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view and returns its id, so the navbar
 * can render a sliding active-tab indicator. Uses IntersectionObserver with a
 * viewport band centred on the upper third for a natural "active" feel.
 */
export function useScrollSpy(ids, { offset = '-45% 0px -50% 0px' } = {}) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return

    const visible = new Map()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio)
          else visible.delete(e.target.id)
        })
        // Pick the most-visible section currently in the active band.
        let best = null
        let bestRatio = -1
        visible.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        })
        if (best) setActive(best)
      },
      { rootMargin: offset, threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [ids, offset])

  return active
}

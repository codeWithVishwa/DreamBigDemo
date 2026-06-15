import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Batched reveal-on-scroll. Any element carrying the `.reveal` class fades and
 * rises into place as it enters the viewport. Children can opt into a stagger
 * via `data-reveal-stagger` on a parent wrapping multiple `.reveal` nodes.
 * Call once, near the root, after the DOM has mounted.
 */
export function useReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      ScrollTrigger.batch('.reveal', {
        start: 'top 85%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            stagger: 0.12,
            overwrite: true,
          }),
      })

      // Refresh once fonts/images settle.
      ScrollTrigger.refresh()
    })

    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)

    return () => {
      window.removeEventListener('load', onLoad)
      ctx.revert()
    }
  }, [])
}

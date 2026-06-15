import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IconArrow } from './Icons'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const ref = useRef(null)
  const glowRef = useRef(null)

  // Subtle parallax drift on the amber glow as the section scrolls through.
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.to(glowRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-base py-32 lg:py-44">
      {/* premium background effect */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(40%_40%_at_50%_50%,rgba(220,38,38,0.16),transparent_70%)]"
      />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.04]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <h2 className="reveal text-balance text-5xl font-semibold leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
          Your strongest self is
          <br />
          <span className="text-gradient-gold">waiting to be built.</span>
        </h2>
        <p className="reveal mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Begin with a complimentary 7-day trial and a session with one of our
          master coaches. No contracts. No pressure. Just results.
        </p>
        <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#membership"
            onClick={(e) => {
              e.preventDefault()
              const el = document.querySelector('#membership')
              if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80 })
            }}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-9 py-4 text-sm font-semibold text-black shadow-[0_12px_40px_-10px_rgba(220,38,38,0.7)] transition-all duration-300 hover:bg-accent-soft"
          >
            Claim Your Trial
            <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              const el = document.querySelector('#contact')
              if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80 })
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-9 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:border-white/30 hover:bg-white/5"
          >
            Talk to a Coach
          </a>
        </div>
      </div>
    </section>
  )
}

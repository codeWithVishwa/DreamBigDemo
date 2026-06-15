import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IconArrow, IconStar } from './Icons'

gsap.registerPlugin(ScrollTrigger)

const ease = [0.22, 1, 0.36, 1]

// Parent orchestrates a staggered cascade for the whole content column.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
}

// Per-word clip-reveal for the headline.
const wordWrap = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const word = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.9, ease } },
}

// `break: true` forces a line break after the word (full-basis spacer in flex).
const HEADLINE = [
  { text: 'BUILD', gold: false },
  { text: 'STRENGTH.', gold: false, break: true },
  { text: 'MASTER', gold: true },
  { text: 'DISCIPLINE.', gold: true },
]

const CHIPS = [
  { label: 'Active Members', value: '4,800+' },
  { label: 'Member Rating', value: '4.9', star: true },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    video.play().catch(() => {})

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.to(video, {
        yPercent: 18,
        scale: 1.12,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      gsap.to(contentRef.current, {
        yPercent: -12,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-svh w-full overflow-hidden"
    >
      {/* Video — smooth ambient loop with poster for instant paint */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-[112%] w-full object-cover object-[72%_center] sm:object-center"
        src="/hero2.mp4"
        poster="/hero-poster1.png"
        muted
        playsInline
        preload="auto"
        autoPlay
        loop
      />

      {/* Cinematic grading */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 120% at 65% 35%, rgba(0,0,0,0.05) 0%, rgba(10,10,10,0.45) 55%, rgba(10,10,10,0.9) 100%)',
        }}
      />
      {/* Left-side legibility wash so the headline sits cleanly off the focal point */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-base via-base/55 to-transparent lg:via-base/35 lg:to-transparent" />
      <div className="pointer-events-none absolute inset-0 mix-blend-soft-light bg-[radial-gradient(70%_55%_at_75%_25%,rgba(220,38,38,0.4),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-base to-transparent" />

      {/* Content — anchored to the left column */}
      <motion.div
        ref={contentRef}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-6 py-28 lg:px-10 [@media(max-height:700px)]:py-24"
      >
        <div className="max-w-2xl">
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-accent backdrop-blur-sm"
          >

          </motion.span>

          {/* Headline — per-word clip reveal (each word wraps independently) */}
          <motion.h1
            variants={wordWrap}
            className="flex flex-wrap gap-x-[0.28em] text-left text-[clamp(2.5rem,min(6vw+1.5rem,11vh),5.5rem)] font-semibold leading-[0.92] text-ink"
          >
            {HEADLINE.map((w, i) => (
              <span key={i} className="contents">
                <span className="inline-flex overflow-hidden pb-[0.1em]">
                  <motion.span
                    variants={word}
                    className={`inline-block ${w.gold ? 'text-gradient-gold' : ''}`}
                  >
                    {w.text}
                  </motion.span>
                </span>
                {w.break && <span className="basis-full" aria-hidden />}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            An invitation-only training environment engineered for those who
            refuse the ordinary. World-class coaches, intelligent programming,
            and a space built to forge your strongest self.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#membership"
              onClick={(e) => {
                e.preventDefault()
                const el = document.querySelector('#membership')
                if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80 })
              }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-black shadow-[0_12px_40px_-10px_rgba(220,38,38,0.7)] transition-all duration-300 hover:bg-accent-soft"
            >
              Begin Your Journey
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#programs"
              onClick={(e) => {
                e.preventDefault()
                const el = document.querySelector('#programs')
                if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80 })
              }}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-ink backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            >
              Explore Programs
            </a>
          </motion.div>

          {/* Floating glass stat chips */}
          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-4">
            {CHIPS.map((c, i) => (
              <motion.div
                key={c.label}
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.4,
                }}
                className="glass flex items-center gap-3 rounded-2xl px-5 py-3"
              >
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-2xl font-semibold text-ink">
                    {c.value}
                  </span>
                  {c.star && <IconStar className="h-4 w-4 text-accent" />}
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-muted">
                  {c.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 hidden"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  )
}

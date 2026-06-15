import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: 4800, suffix: '+', label: 'Active Members' },
  { value: 42, suffix: '', label: 'Master Trainers' },
  { value: 1200, suffix: '+', label: 'Success Stories' },
  { value: 17, suffix: '', label: 'Years of Experience' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    const obj = { n: 0 }
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          n: value,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => setDisplay(Math.round(obj.n)),
        }),
    })
    return () => st.kill()
  }, [value])

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-base py-24 lg:py-28">
      {/* ambient red glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[80%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(220,38,38,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="accent-divider mb-16" />
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4" data-reveal-stagger>
          {STATS.map((s) => (
            <div
              key={s.label}
              className="reveal flex flex-col items-center text-center"
            >
              <span className="font-display text-5xl font-semibold text-gradient-gold sm:text-6xl lg:text-7xl">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="mt-3 text-xs font-medium uppercase tracking-[0.22em] text-muted">
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <div className="accent-divider mt-16" />
      </div>
    </section>
  )
}

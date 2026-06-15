import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { IconQuote, IconStar, IconArrow } from './Icons'

const REVIEWS = [
  {
    name: 'Marcus Vaughn',
    role: 'Founder · Member 3 yrs',
    avatar: 'https://i.pravatar.cc/120?img=12',
    quote:
      'DreamBig rebuilt my relationship with training. The programming is meticulous and the coaching is genuinely world-class. I have never been stronger — or more disciplined.',
  },
  {
    name: 'Elena Royce',
    role: 'Marathoner · Member 2 yrs',
    avatar: 'https://i.pravatar.cc/120?img=47',
    quote:
      'Every detail is considered, from the equipment to the lighting. It feels less like a gym and more like a private performance studio built around me.',
  },
  {
    name: 'Daniel Okafor',
    role: 'Pro Athlete · Member 4 yrs',
    avatar: 'https://i.pravatar.cc/120?img=33',
    quote:
      'The athletic performance track took my game to a level I did not think was possible at 31. The coaches measure everything and miss nothing.',
  },
  {
    name: 'Sophia Lindqvist',
    role: 'Executive · Member 1 yr',
    avatar: 'https://i.pravatar.cc/120?img=20',
    quote:
      'Joining DreamBig was the best investment I have made in myself. Calm, focused, premium — exactly the environment I needed to show up consistently.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  const go = useCallback(
    (next) => {
      setDir(next > index || (index === REVIEWS.length - 1 && next === 0) ? 1 : -1)
      setIndex((next + REVIEWS.length) % REVIEWS.length)
    },
    [index],
  )

  useEffect(() => {
    const id = setInterval(() => go(index + 1), 6000)
    return () => clearInterval(id)
  }, [index, go])

  const r = REVIEWS[index]

  return (
    <section id="testimonials" className="relative overflow-hidden bg-base py-28 lg:py-36">
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-accent/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by the relentless"
          lede="A community of members who hold themselves to a higher standard — and found a home for it."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <IconQuote className="absolute right-8 top-8 h-16 w-16 text-accent/15" />

            <div className="mb-6 flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-5 w-5" />
              ))}
            </div>

            <div className="relative min-h-[180px] sm:min-h-[150px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.blockquote
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-pretty text-xl font-light leading-relaxed text-ink/90 sm:text-2xl"
                >
                  “{r.quote}”
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/30"
                />
                <div>
                  <p className="font-medium text-ink">{r.name}</p>
                  <p className="text-sm text-muted">{r.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  aria-label="Previous"
                  onClick={() => go(index - 1)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <IconArrow className="h-4 w-4 rotate-180" />
                </button>
                <button
                  aria-label="Next"
                  onClick={() => go(index + 1)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <IconArrow className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* dots */}
          <div className="mt-6 flex justify-center gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to review ${i + 1}`}
                onClick={() => go(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-accent' : 'w-2 bg-white/15 hover:bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import {
  IconDumbbell,
  IconFlame,
  IconPulse,
  IconUser,
  IconArrow,
} from './Icons'

const PROGRAMS = [
  {
    Icon: IconDumbbell,
    no: '01',
    title: 'Strength',
    tag: 'Foundational',
    meta: '4–5 sessions / week',
    body: 'Progressive overload built on the big lifts. Develop raw, transferable power with flawless technique.',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
  },
  {
    Icon: IconFlame,
    no: '02',
    title: 'Fat Loss',
    tag: 'Conditioning',
    meta: '5–6 sessions / week',
    body: 'Metabolic conditioning and nutrition coaching that strips fat while preserving hard-earned muscle.',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
  },
  {
    Icon: IconPulse,
    no: '03',
    title: 'Athletic Performance',
    tag: 'Elite',
    meta: 'Periodised blocks',
    body: 'Speed, power and resilience. Sport-specific programming for competitors who measure everything.',
    img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    Icon: IconUser,
    no: '04',
    title: 'Personal Coaching',
    tag: '1 : 1',
    meta: 'Fully bespoke',
    body: 'A dedicated coach, fully bespoke programming and weekly reviews. The most direct path to your goal.',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="relative bg-secondary py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Training Programs"
          title="Choose your discipline"
          lede="Four focused pathways, each engineered around a clear outcome. Switch freely as your goals evolve."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map(({ Icon, no, title, tag, meta, body, img }) => (
            <motion.article
              key={title}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 240, damping: 22 }}
              className="reveal group relative flex h-[30rem] flex-col justify-end overflow-hidden rounded-3xl"
            >
              {/* Image */}
              <img
                src={img}
                alt={title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grayscale-[35%] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] group-hover:grayscale-0"
              />
              {/* Gradients + grading */}
              <div className="absolute inset-0 bg-gradient-to-t from-base via-base/55 to-base/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-base/95 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -inset-px rounded-3xl ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-accent/40" />
              <div className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-accent/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top row: icon + ghost number */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-black/40 text-accent ring-1 ring-white/15 backdrop-blur-md transition-all duration-500 group-hover:bg-accent group-hover:text-black group-hover:ring-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-display text-5xl font-semibold leading-none text-white/15 transition-colors duration-500 group-hover:text-accent/40">
                  {no}
                </span>
              </div>

              {/* Bottom content */}
              <div className="relative p-6">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
                  {tag}
                </span>
                <h3 className="mt-4 font-display text-2xl text-ink">{title}</h3>

                {/* Meta + body reveal on hover */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="pt-3 text-sm leading-relaxed text-white/75">
                      {body}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs uppercase tracking-[0.16em] text-muted">
                    {meta}
                  </span>
                  <a
                    href="#membership"
                    onClick={(e) => {
                      e.preventDefault()
                      const el = document.querySelector('#membership')
                      if (window.__lenis)
                        window.__lenis.scrollTo(el, { offset: -80 })
                    }}
                    aria-label={`Learn more about ${title}`}
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-ink ring-1 ring-white/10 transition-all duration-300 group-hover:bg-accent group-hover:text-black group-hover:ring-accent"
                  >
                    <IconArrow className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

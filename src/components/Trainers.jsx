import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { IconInstagram, IconArrow } from './Icons'

const TRAINERS = [
  {
    name: 'Aria Castellano',
    role: 'Head of Strength',
    spec: 'Powerlifting',
    years: '12 yrs',
    img: '/Trainers/womentrainer.jpeg',
  },
  {
    name: 'Jonah Pierce',
    role: 'Performance Director',
    spec: 'Athletic Speed',
    years: '15 yrs',
    img: '/Trainers/menTrainer.jpeg',
  },
  {
    name: 'Naomi Adeyemi',
    role: 'Conditioning Lead',
    spec: 'Metabolic',
    years: '9 yrs',
    img: '/Trainers/womentrainer2.jpeg',
  },
  {
    name: 'Lucas Brandt',
    role: 'Mobility & Recovery',
    spec: 'Rehab Science',
    years: '11 yrs',
    img: '/Trainers/mentrainer.jpeg',
  },
]

export default function Trainers() {
  return (
    <section id="trainers" className="relative bg-base py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Coaches"
          title="Mentors who set the standard"
          lede="Decades of combined experience preparing athletes, executives and everyone serious about their potential."
        />

        <div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          data-reveal-stagger
        >
          {TRAINERS.map((t) => (
            <motion.figure
              key={t.name}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 240, damping: 22 }}
              className="reveal group relative flex h-[26rem] flex-col justify-end overflow-hidden rounded-3xl"
            >
              <img
                src={t.img}
                alt={t.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top grayscale-[30%] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-base/5" />
              <div className="pointer-events-none absolute -inset-px rounded-3xl ring-1 ring-inset ring-white/10 transition-colors duration-500 group-hover:ring-accent/40" />

              {/* top meta */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
                  {t.spec}
                </span>
                <a
                  href="#"
                  aria-label={`${t.name} on Instagram`}
                  className="grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-black/40 text-ink opacity-0 backdrop-blur-sm transition-all duration-500 hover:text-accent group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <IconInstagram className="h-4 w-4" />
                </a>
              </div>

              {/* bottom caption */}
              <figcaption className="relative p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-accent">
                  {t.role}
                </p>
                <h3 className="mt-1.5 font-display text-2xl text-ink">
                  {t.name}
                </h3>

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs uppercase tracking-[0.16em] text-muted">
                    {t.years} experience
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-ink ring-1 ring-white/10 transition-all duration-300 group-hover:bg-accent group-hover:text-black group-hover:ring-accent">
                    <IconArrow className="h-4 w-4" />
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

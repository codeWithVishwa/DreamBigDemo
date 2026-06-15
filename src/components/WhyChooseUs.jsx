import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { IconBolt, IconShield, IconCompass, IconArrow } from './Icons'

const CARDS = [
  {
    Icon: IconBolt,
    no: '01',
    title: 'Intelligent Programming',
    body: 'Data-driven training blocks periodised around your biomarkers, recovery and goals — adjusted every week, never generic.',
    tag: 'Adaptive',
  },
  {
    Icon: IconShield,
    no: '02',
    title: 'Master Coaches',
    body: 'Train under coaches who have prepared national athletes. Hands-on technique, accountability, and relentless standards.',
    tag: 'Mentored',
  },
  {
    Icon: IconCompass,
    no: '03',
    title: 'A Considered Space',
    body: 'Matte interiors, museum lighting and premium equipment. An environment engineered to remove friction and sharpen focus.',
    tag: 'Curated',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative bg-base py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why DreamBig"
          title="A different standard of training"
          lede="We obsess over the details most never notice — because that is precisely what separates good from exceptional."
        />

        <div
          className="mt-16 grid gap-6 md:grid-cols-3"
          data-reveal-stagger
        >
          {CARDS.map(({ Icon, no, title, body, tag }) => (
            <motion.article
              key={title}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 250, damping: 22 }}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
              }}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl bg-surface p-8 lg:p-10"
            >
              {/* gradient hover border */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/[0.08] transition-colors duration-500 group-hover:border-accent/30" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(135deg,rgba(220,38,38,0.12),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {/* cursor-tracking spotlight */}
              <div className="card-spotlight pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {/* hover glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-1 flex-col">
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-all duration-500 group-hover:-rotate-6 group-hover:bg-accent group-hover:text-black group-hover:ring-accent">
                    <Icon className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />
                  </span>
                  <span className="font-display text-5xl font-semibold leading-none text-white/[0.06] transition-colors duration-500 group-hover:text-accent/20">
                    {no}
                  </span>
                </div>

                <span className="mt-7 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
                  {tag}
                </span>

                <h3 className="mt-4 text-2xl text-ink">{title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                  {body}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-300 group-hover:text-accent">
                  Discover
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent/0 via-accent to-accent/0 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

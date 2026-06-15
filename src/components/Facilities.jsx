import SectionHeading from './ui/SectionHeading'
import { IconArrow } from './Icons'

const TILES = [
  {
    src: '/gymimage/strengthFloor.jpg',
    no: '01',
    title: 'The Strength Floor',
    cat: 'Training',
    desc: 'Calibrated racks, platforms and free weights under museum lighting.',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: '/gymimage/recoversuit.jpg',
    no: '02',
    title: 'Recovery Suite',
    cat: 'Restore',
    desc: 'Contrast therapy, sauna and guided recovery protocols.',
    span: '',
  },
  {
    src: '/gymimage/conditioningstudio.jpg',
    no: '03',
    title: 'Conditioning Studio',
    cat: 'Engine',
    desc: 'Metabolic conditioning in a focused, climate-tuned space.',
    span: '',
  },
  {
    src: '/gymimage/performancelab.jpg',
    no: '04',
    title: 'Performance Lab',
    cat: 'Data',
    desc: 'Force plates and biomarker testing to measure every gain.',
    span: 'sm:col-span-2',
  },
  {
    src: '/gymimage/MembersLounge.jpg',
    no: '05',
    title: "Members' Lounge",
    cat: 'Recharge',
    desc: 'A calm, considered space to reset between sessions.',
    span: '',
  },
]

export default function Facilities() {
  return (
    <section className="relative bg-secondary py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Space"
          title="Premium facilities, every detail considered"
          lede="From the strength floor to the recovery suite — built with the same intent you bring to every session."
        />

        <div
          className="mt-16 grid auto-rows-[230px] grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-5"
          data-reveal-stagger
        >
          {TILES.map((t) => (
            <figure
              key={t.title}
              className={`reveal group relative overflow-hidden rounded-3xl ${t.span}`}
            >
              <img
                src={t.src}
                alt={t.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.1]"
              />
              {/* grading */}
              <div className="absolute inset-0 bg-gradient-to-t from-base/95 via-base/25 to-transparent transition-opacity duration-500" />
              <div className="pointer-events-none absolute -inset-px rounded-3xl ring-1 ring-inset ring-white/10 transition-colors duration-500 group-hover:ring-accent/40" />

              {/* category + number */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
                  {t.cat}
                </span>
                <span className="font-display text-2xl font-semibold leading-none text-white/30">
                  {t.no}
                </span>
              </div>

              {/* caption */}
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-accent transition-all duration-500 group-hover:w-10" />
                  <h3 className="font-display text-xl text-ink lg:text-2xl">
                    {t.title}
                  </h3>
                </div>
                {/* description reveals on hover */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="max-w-sm pt-2 text-sm leading-relaxed text-white/75">
                      {t.desc}
                    </p>
                  </div>
                </div>
              </figcaption>

              {/* hover arrow */}
              <span className="absolute right-5 top-1/2 grid h-10 w-10 -translate-y-1/2 translate-x-2 place-items-center rounded-full bg-accent text-black opacity-0 shadow-lg transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                <IconArrow className="h-4 w-4" />
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

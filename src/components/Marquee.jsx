const ITEMS = [
  'Strength Conditioning',
  'Olympic Lifting',
  'Recovery Science',
  'Performance Nutrition',
  'Mobility Lab',
  'Elite Coaching',
  'Biomarker Tracking',
]

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-10 px-5">
      {ITEMS.map((t) => (
        <div key={t} className="flex items-center gap-10">
          <span className="font-display text-xl font-medium tracking-tight text-white/35 transition-colors hover:text-accent sm:text-2xl">
            {t}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
        </div>
      ))}
    </div>
  )
}

/**
 * Infinite, edge-faded marquee of disciplines — a premium marketing band that
 * separates the hero from the content sections. Pure CSS animation (cheap).
 */
export default function Marquee() {
  return (
    <section className="relative border-y border-white/[0.06] bg-secondary py-7">
      <div className="group flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex animate-[marquee_38s_linear_infinite] group-hover:[animation-play-state:paused]">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  )
}

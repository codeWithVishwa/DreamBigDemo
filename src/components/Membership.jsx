import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { IconCheck, IconArrow } from './Icons'

const PLANS = [
  {
    name: 'Essential',
    price: 2999,
    cadence: '/mo',
    blurb: 'Full access to the floor and group sessions.',
    features: [
      'Unlimited gym access',
      'Group conditioning classes',
      'Quarterly assessment',
      'Member app & tracking',
    ],
    featured: false,
  },
  {
    name: 'Performance',
    price: 6999,
    cadence: '/mo',
    blurb: 'Bespoke programming with semi-private coaching.',
    features: [
      'Everything in Essential',
      'Personalised programming',
      'Semi-private coaching (2×/wk)',
      'Recovery suite access',
      'Nutrition strategy',
    ],
    featured: true,
  },
  {
    name: 'Private',
    price: 14999,
    cadence: '/mo',
    blurb: 'A dedicated coach and a fully tailored experience.',
    features: [
      'Everything in Performance',
      'Dedicated 1:1 coach',
      'Weekly programming reviews',
      'Priority booking',
      'Biomarker monitoring',
    ],
    featured: false,
  },
]

export default function Membership() {
  return (
    <section id="membership" className="relative overflow-hidden bg-secondary py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(220,38,38,0.1),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Membership"
          title="Invest in your standard"
          lede="Transparent pricing, no contracts. Choose the level of support that matches your ambition."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3" data-reveal-stagger>
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 250, damping: 22 }}
              className={`reveal relative flex flex-col rounded-3xl border p-8 lg:p-10 ${
                plan.featured
                  ? 'border-accent/40 bg-surface shadow-[0_30px_80px_-30px_rgba(220,38,38,0.5)] lg:-my-4'
                  : 'border-white/[0.08] bg-surface/60'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-black">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-xl text-ink">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted">{plan.blurb}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-5xl font-semibold text-ink">
                  ₹{plan.price.toLocaleString('en-IN')}
                </span>
                <span className="mb-1.5 text-sm text-muted">{plan.cadence}</span>
              </div>

              <div className="my-8 h-px w-full bg-white/[0.08]" />

              <ul className="flex-1 space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        plan.featured ? 'bg-accent text-black' : 'bg-accent/10 text-accent'
                      }`}
                    >
                      <IconCheck className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`group mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  plan.featured
                    ? 'bg-accent text-black hover:bg-accent-soft shadow-[0_12px_40px_-10px_rgba(220,38,38,0.7)]'
                    : 'border border-white/15 text-ink hover:border-white/30 hover:bg-white/5'
                }`}
              >
                Join {plan.name}
                <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted">
          All memberships include a complimentary 7-day trial. Cancel anytime.
        </p>
      </div>
    </section>
  )
}

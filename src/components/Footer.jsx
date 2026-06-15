import { IconInstagram, IconX, IconYoutube, IconMail } from './Icons'

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Membership', href: '#membership' },
  { label: 'Testimonials', href: '#testimonials' },
]

const SOCIALS = [
  { Icon: IconInstagram, label: 'Instagram', href: '#' },
  { Icon: IconX, label: 'X', href: '#' },
  { Icon: IconYoutube, label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/[0.08] bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <img
                src="/icon.png"
                alt="DreamBig logo"
                className="h-8 w-8 rounded-md object-contain"
              />
              <span className="font-display text-lg font-semibold tracking-tight text-ink">
                DreamBig
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              The premium strength club. Build strength, master discipline, and
              become the strongest version of yourself.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition-all duration-300 hover:border-accent/40 hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-display text-sm font-medium uppercase tracking-[0.18em] text-ink">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-medium uppercase tracking-[0.18em] text-ink">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li className="flex items-center gap-2">
                <IconMail className="h-4 w-4 text-accent" />
                <a href="mailto:hello@dreambig.fit" className="hover:text-accent">
                  hello@dreambig.fit
                </a>
              </li>
              <li>+91 98765 43210</li>
              <li className="leading-relaxed">
                45 Avinashi Road, Peelamedu
                <br />
                Coimbatore, Tamil Nadu 641004
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} DreamBig Strength Club, Coimbatore. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted">
            <a href="#" className="hover:text-accent">Privacy</a>
            <a href="#" className="hover:text-accent">Terms</a>
            <a href="#" className="hover:text-accent">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

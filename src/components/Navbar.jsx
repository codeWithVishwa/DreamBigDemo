import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconArrow } from './Icons'
import { useScrollSpy } from '../lib/useScrollSpy'

const LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Programs', href: '#programs', id: 'programs' },
  { label: 'Trainers', href: '#trainers', id: 'trainers' },
  { label: 'Membership', href: '#membership', id: 'membership' },
  { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const IDS = LINKS.map((l) => l.id)

function scrollTo(href) {
  const el = document.querySelector(href)
  if (!el) return
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80 })
  else el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    if (open) {
      window.__lenis?.stop()
      document.body.style.overflow = 'hidden'
    } else {
      window.__lenis?.start()
      document.body.style.overflow = ''
    }
    return () => {
      window.__lenis?.start()
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    scrollTo(href)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`relative z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-white/10'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto grid h-[72px] max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-6 lg:px-10">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNav(e, '#home')}
            className="group flex items-center gap-2.5"
          >
            <img
              src="/icon.png"
              alt="DreamBig logo"
              className="h-12 w-12 rounded-2xl object-contain drop-shadow-[0_0_14px_rgba(220,38,38,0.85)] transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(220,38,38,1)]"
            />
            <span className="font-display text-lg font-semibold tracking-tight text-ink">
              DreamBig
            </span>
          </a>

          {/* Desktop links with sliding underline indicator */}
          <ul className="hidden items-center justify-center gap-1 lg:flex">
            {LINKS.map((l) => {
              const isActive = active === l.id
              return (
                <li key={l.href} className="relative">
                  <a
                    href={l.href}
                    onClick={(e) => handleNav(e, l.href)}
                    className={`relative block px-3.5 py-2 text-sm font-medium tracking-tight transition-colors duration-300 xl:px-4 ${
                      isActive ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    <span className="relative">{l.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 34,
                        }}
                        className="absolute -bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-accent shadow-[0_0_12px_1px_rgba(220,38,38,0.7)] xl:left-4 xl:right-4"
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center justify-self-end gap-3">
            <a
              href="#membership"
              onClick={(e) => handleNav(e, '#membership')}
              className="group hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black shadow-[0_8px_30px_-8px_rgba(220,38,38,0.6)] transition-all duration-300 hover:bg-accent-soft hover:shadow-[0_10px_40px_-6px_rgba(220,38,38,0.7)] sm:inline-flex"
            >
              Join Now
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            {/* Mobile toggle */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/10 lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 top-0 h-px w-5 bg-ink transition-all duration-300 ${open ? 'top-1.5 rotate-45' : ''}`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-px w-5 bg-ink transition-all duration-300 ${open ? 'opacity-0' : ''}`}
                />
                <span
                  className={`absolute left-0 top-3 h-px w-5 bg-ink transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : ''}`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-base/80 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto flex h-dvh max-w-7xl flex-col px-6 pb-10 pt-24">
              <ul className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto">
                {LINKS.map((l, i) => {
                  const isActive = active === l.id
                  return (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + i * 0.05,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="border-b border-white/10"
                    >
                      <a
                        href={l.href}
                        onClick={(e) => handleNav(e, l.href)}
                        className={`flex items-center justify-between py-4 font-display text-3xl font-semibold tracking-tight transition-colors active:text-accent ${
                          isActive ? 'text-ink' : 'text-muted'
                        }`}
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="text-xs font-medium tracking-[0.2em] text-accent/70">
                            0{i + 1}
                          </span>
                          {l.label}
                        </span>
                        <IconArrow
                          className={`h-5 w-5 transition-colors ${
                            isActive ? 'text-accent' : 'text-muted'
                          }`}
                        />
                      </a>
                    </motion.li>
                  )
                })}
              </ul>

              <motion.a
                href="#membership"
                onClick={(e) => handleNav(e, '#membership')}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-4 text-sm font-semibold text-black shadow-[0_12px_40px_-10px_rgba(220,38,38,0.7)] transition-colors active:bg-accent-soft"
              >
                Join Now <IconArrow className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

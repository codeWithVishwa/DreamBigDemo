# ATLAS — Premium Strength Club

A premium, cinematic luxury fitness website. Dark matte aesthetic, warm amber
accent lighting, high-end typography and award-quality motion design — inspired
by Apple, Tesla and Nike.

## Stack

- **React 19 + Vite** — fast, modern build
- **Tailwind CSS v4** — design tokens defined in `src/index.css` via `@theme`
- **GSAP + ScrollTrigger** — reveal-on-scroll, parallax, scrubbed hero video, animated counters
- **Lenis** — buttery inertial smooth scrolling, synced to the GSAP ticker
- **Framer Motion** — hero intro, hover micro-interactions, testimonial carousel

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in /dist
npm run preview  # preview the production build
```

## Design system

| Token            | Value                  |
| ---------------- | ---------------------- |
| Background       | `#0A0A0A` (`base`)     |
| Secondary BG     | `#111111` (`secondary`)|
| Surface          | `#181818` (`surface`)  |
| Accent gold/amber| `#D4A24C` (`accent`)   |
| Text primary     | `#FFFFFF` (`ink`)      |
| Text secondary   | `#A1A1A1` (`muted`)    |
| Border           | `rgba(255,255,255,.08)`|

- **Headings:** Clash Display / General Sans (Fontshare)
- **Body:** Inter

## Structure

```
src/
  App.jsx                 # composition + smooth scroll / reveal hooks
  lib/
    useSmoothScroll.js     # Lenis + GSAP ticker
    useReveal.js           # batched .reveal scroll animations
  components/
    Navbar.jsx             # transparent → glass on scroll
    Hero.jsx               # scroll-scrubbed cinematic video
    WhyChooseUs.jsx        # three luxury cards
    Programs.jsx           # four training pathways
    Stats.jsx              # animated counters
    Facilities.jsx         # masonry image grid, hover zoom
    Trainers.jsx           # coach grid
    Testimonials.jsx       # glassmorphism carousel
    Membership.jsx         # three pricing tiers (featured middle)
    CTA.jsx                # conversion section w/ parallax glow
    Footer.jsx             # minimal luxury footer
```

## Notes

- The hero uses `public/hero.mp4`, scrubbed to scroll position while the section
  is pinned (Apple-style). Falls back to an ambient loop when
  `prefers-reduced-motion` is set or the duration can't be read.
- All scroll motion respects `prefers-reduced-motion`.

import { useSmoothScroll } from './lib/useSmoothScroll'
import { useReveal } from './lib/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import WhyChooseUs from './components/WhyChooseUs'
import Programs from './components/Programs'
import Stats from './components/Stats'
import Facilities from './components/Facilities'
import Trainers from './components/Trainers'
import Testimonials from './components/Testimonials'
import Membership from './components/Membership'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  useSmoothScroll()
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WhyChooseUs />
        <Programs />
        <Stats />
        <Facilities />
        <Trainers />
        <Testimonials />
        <Membership />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

import Callouts from './components/Callouts/Callouts'
import ConversionPanel from './components/ConversionPanel/ConversionPanel'
import FindMe from './components/FindMe/FindMe'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Intro from './components/Intro/Intro'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Testimonials from './components/Testimonials/Testimonials'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <FindMe />
      <Intro />
      <Skills />
      <Projects />
      <Callouts />
      <Testimonials />
      <ConversionPanel />
      <Footer />
    </main>
  )
}

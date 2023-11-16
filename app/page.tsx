import FindMe from './components/FindMe/FindMe'
import Hero from './components/Hero/Hero'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'

export default function Home() {
  return (
    <main>
      <Hero />
      <FindMe />
      <Intro />
      <Skills />
    </main>
  )
}

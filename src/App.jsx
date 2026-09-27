import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Community from './components/Community.jsx'
import Contact from './components/Contact.jsx'
import { profile } from './data/resume.js'

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Community />
        <Contact />
      </main>
      <footer className="border-t border-line py-7 text-center text-[13px] text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}

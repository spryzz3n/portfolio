import { Download } from 'lucide-react'
import { profile } from '../data/resume.js'
import { Container } from './ui.jsx'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-white/90 backdrop-blur-md">
      <Container className="flex h-[68px] items-center justify-between gap-4">
        <a href="#top" className="font-bold tracking-wide text-ink">{profile.name}</a>
        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex gap-7 text-[15px]">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted transition-colors hover:text-sky-deep">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={profile.resume} download className="btn-primary">
          <Download className="size-4" aria-hidden="true" />
          Resume
        </a>
      </Container>
    </header>
  )
}

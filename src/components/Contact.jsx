import { Mail } from 'lucide-react'
import { profile, socials } from '../data/resume.js'
import Icon from './Icon.jsx'
import { Eyebrow, ExternalLink, Section } from './ui.jsx'

export default function Contact() {
  return (
    <Section id="contact" className="bg-mist">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <h2 className="mb-2.5 text-[28px] font-bold tracking-tight">Contact</h2>
          <p className="max-w-[52ch] text-muted">
            Reach out about cybersecurity, network security or cloud security work.
          </p>
          <div className="mt-[22px] flex flex-wrap gap-x-6 gap-y-3 text-[15px]">
            {socials.map((s) => (
              <ExternalLink key={s.name} href={s.href} className="inline-flex items-center gap-2">
                <Icon name={s.icon} className="size-[18px]" />
                {s.name}
              </ExternalLink>
            ))}
          </div>
        </div>
        <div>
          <Eyebrow className="mb-2 text-muted">Email</Eyebrow>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 font-mono text-[15px] break-all text-ink hover:underline"
          >
            <Mail className="size-[18px] shrink-0 text-sky-deep" aria-hidden="true" />
            {profile.email}
          </a>
        </div>
      </div>
    </Section>
  )
}

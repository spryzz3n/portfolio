import { GraduationCap } from 'lucide-react'
import { certifications, education, interests } from '../data/resume.js'
import Icon from './Icon.jsx'
import { ExternalLink, Section, SectionHead, Tags } from './ui.jsx'

export default function Education() {
  return (
    <Section id="education">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <SectionHead title="Education" />
          <div className="flex gap-4">
            <div className="grid size-11 shrink-0 place-items-center rounded-[10px] bg-haze text-sky-deep">
              <GraduationCap className="size-[22px]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="mb-1 text-[19px] leading-snug font-bold">{education.degree}</h3>
              <p className="text-muted">{education.school}</p>
              <p className="mt-2 font-mono text-[13px] text-sky-deep">{education.years}</p>
            </div>
          </div>
        </div>

        <div>
          <SectionHead title="Certifications" />
          <ul className="grid gap-4">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-center gap-3">
                <Icon name={c.icon} className="size-5" />
                <span>
                  {c.name}
                  {c.link && (
                    <>: <ExternalLink href={c.link.href}>{c.link.label}</ExternalLink></>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <Tags items={interests} className="mt-7" />
        </div>
      </div>
    </Section>
  )
}

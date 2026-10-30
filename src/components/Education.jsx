import { GraduationCap } from 'lucide-react'
import { education } from '../data/resume.js'
import { Section } from './ui.jsx'

export default function Education() {
  return (
    <Section id="education" title="Education">
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
    </Section>
  )
}

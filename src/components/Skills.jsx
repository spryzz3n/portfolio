import { skills } from '../data/resume.js'
import { Eyebrow, Section, Tags } from './ui.jsx'

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills">
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((s, i) => (
          <div
            key={s.group}
            className={
              i === 0
                ? 'rounded-xl border border-edge bg-mist p-6 sm:col-span-2'
                : 'rounded-xl border border-line p-6'
            }
          >
            <h3><Eyebrow className="mb-4 font-medium text-sky-deep">{s.group}</Eyebrow></h3>
            <Tags items={s.items} />
          </div>
        ))}
      </div>
    </Section>
  )
}

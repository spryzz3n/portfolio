import { projects } from '../data/resume.js'
import { Section, Tags } from './ui.jsx'

export default function Projects() {
  return (
    <Section id="projects" title="Projects" className="border-t-0">
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="flex flex-col gap-[22px] rounded-[14px] border border-line bg-white p-6 transition-colors hover:border-edge sm:p-8"
          >
            <div>
              <h3 className="text-[22px] font-bold">{p.name}</h3>
              <p className="mt-0.5 text-[15px] text-muted">{p.subtitle}</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {p.metrics.map((m) => (
                <div key={m.label} className="rounded-[10px] bg-mist p-3.5">
                  <b className="block text-2xl leading-tight text-sky-deep tabular-nums">{m.value}</b>
                  <span className="mt-0.5 block text-[12.5px] leading-snug text-muted">{m.label}</span>
                </div>
              ))}
            </div>

            <ul className="grid list-disc gap-3 pl-[18px] text-[15px]">
              {p.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>

            <Tags items={p.stack} className="mt-auto pt-1" />
          </article>
        ))}
      </div>
    </Section>
  )
}

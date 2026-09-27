import { Download } from 'lucide-react'
import { profile } from '../data/resume.js'
import { Container, Eyebrow, Tags } from './ui.jsx'

export default function Hero() {
  return (
    <div className="border-b border-line bg-linear-to-b from-mist to-white">
      <Container className="grid items-center gap-10 py-14 md:grid-cols-[1.4fr_1fr] md:gap-16 md:pt-24 md:pb-22">
        <div>
          <h1 className="mb-3.5 text-[clamp(36px,5.2vw,56px)] leading-[1.08] font-bold tracking-tight text-balance">
            {profile.name}
          </h1>
          <p className="mb-6 text-xl font-medium text-sky-deep">{profile.role}</p>
          <p className="mb-8 max-w-[58ch]">{profile.summary}</p>
          <div className="flex flex-wrap gap-3">
            <a href={profile.resume} download className="btn-primary">
              <Download className="size-4" aria-hidden="true" />
              Download resume (PDF)
            </a>
            <a href="#contact" className="btn-ghost">Get in touch</a>
          </div>
        </div>

        <dl
          aria-label="Quick facts"
          className="grid gap-[22px] rounded-[14px] border border-edge bg-white p-7 shadow-[0_12px_34px_-20px_rgba(12,111,174,.4)]"
        >
          {profile.facts.map((f) => (
            <div key={f.label}>
              <dt><Eyebrow className="mb-1.5 text-muted">{f.label}</Eyebrow></dt>
              <dd>
                {Array.isArray(f.value)
                  ? f.value.map((line) => <span key={line} className="block">{line}</span>)
                  : f.value}
              </dd>
            </div>
          ))}
          <div>
            <dt><Eyebrow className="mb-2 text-muted">Core stack</Eyebrow></dt>
            <dd><Tags items={profile.coreStack} /></dd>
          </div>
        </dl>
      </Container>
    </div>
  )
}

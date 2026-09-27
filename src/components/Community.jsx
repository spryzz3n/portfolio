import { community } from '../data/resume.js'
import Icon from './Icon.jsx'
import { ExternalLink, Section } from './ui.jsx'

export default function Community() {
  return (
    <Section id="community" title="CTF & community">
      <div className="grid gap-5 md:grid-cols-3">
        {community.map((c) => (
          <div key={c.name} className="flex flex-col gap-2.5 rounded-xl border border-line p-[26px]">
            <h3 className="flex items-center gap-2.5 text-[17px] font-bold">
              <Icon name={c.icon} className="size-[22px]" />
              {c.name}
            </h3>
            <p className="text-[15px] text-muted">{c.text}</p>
            <ExternalLink href={c.href} className="mt-auto pt-1.5 font-mono text-[13px] break-all">
              {c.display}
            </ExternalLink>
          </div>
        ))}
      </div>
    </Section>
  )
}

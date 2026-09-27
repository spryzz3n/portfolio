import { useEffect, useState } from 'react'
import { community } from '../data/resume.js'
import Icon from './Icon.jsx'
import { ExternalLink, Section } from './ui.jsx'

// Entries with stats get a full-width featured card; the rest sit side by side below it.
export default function Community() {
  return (
    <Section id="community" title="CTF & community">
      <div className="grid gap-5 md:grid-cols-2">
        {community.map((c) => (c.stats ? <StatCard key={c.name} {...c} /> : <Card key={c.name} {...c} />))}
      </div>
    </Section>
  )
}

function Title({ name, icon }) {
  return (
    <h3 className="flex items-center gap-2.5 text-[17px] font-bold">
      <Icon name={icon} className="size-[22px]" />
      {name}
    </h3>
  )
}

function Card({ name, icon, text, href, display }) {
  return (
    <div className="flex flex-col gap-2.5 rounded-xl border border-line p-[26px]">
      <Title name={name} icon={icon} />
      <p className="text-[15px] text-muted">{text}</p>
      <ExternalLink href={href} className="mt-auto pt-1.5 font-mono text-[13px] break-all">
        {display}
      </ExternalLink>
    </div>
  )
}

function useLiveStats({ endpoint, fallback }) {
  const [state, setState] = useState({ stats: fallback, live: false })
  useEffect(() => {
    let cancelled = false
    fetch(endpoint)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        if (!cancelled && typeof data.rank === 'number') setState({ stats: data, live: true })
      })
      .catch(() => {}) // keep the fallback numbers
    return () => { cancelled = true }
  }, [endpoint])
  return state
}

function StatCard({ name, icon, text, href, display, stats: config }) {
  const { stats, live } = useLiveStats(config)
  const items = [
    { value: `Top ${stats.topPercentage}%`, label: 'of all users' },
    { value: `#${stats.rank.toLocaleString('en-US')}`, label: 'global rank' },
    { value: stats.completedRooms, label: 'rooms completed' },
    { value: stats.badges, label: 'badges earned' },
  ]
  return (
    <div className="grid gap-6 rounded-xl border border-edge bg-mist p-[26px] md:col-span-2 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-10">
      <div className="flex flex-col gap-2.5">
        <Title name={name} icon={icon} />
        <p className="text-[15px] text-muted">{text}</p>
        <ExternalLink href={href} className="pt-1.5 font-mono text-[13px] break-all">
          {display}
        </ExternalLink>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {items.map((s) => (
            <div key={s.label} className="rounded-[10px] border border-line bg-white p-3.5">
              <b className="block text-[22px] leading-tight text-sky-deep tabular-nums">{s.value}</b>
              <span className="mt-0.5 block text-[12.5px] leading-snug text-muted">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-2.5 flex items-center justify-end gap-1.5 font-mono text-xs text-muted">
          {live && <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />}
          {live ? 'live from TryHackMe' : 'from TryHackMe'}
        </p>
      </div>
    </div>
  )
}

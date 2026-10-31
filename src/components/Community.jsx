import { useEffect, useRef, useState } from 'react'
import { Flag, Server, Star, Trophy } from 'lucide-react'
import { community, pwntilldawn, tryhackme } from '../data/resume.js'
import Icon from './Icon.jsx'
import { ExternalLink, Section } from './ui.jsx'

// The badge script writes its markup with document.write, so it runs inside its
// own srcdoc frame. The frame shares this page's origin, which lets us measure
// the badge and scale it down when the card is narrower, as on phones.
const badgeDoc = `<!doctype html><html><head><style>html,body{margin:0;background:transparent}body{width:max-content}</style></head><body><script src="${tryhackme.badge}"></script></body></html>`

function TryHackMeBadge() {
  const box = useRef(null)
  const frame = useRef(null)

  const fit = () => {
    const body = frame.current?.contentDocument?.body
    if (!body || !box.current) return
    const w = body.scrollWidth
    const h = body.scrollHeight
    if (!w || !h) return
    const scale = Math.min(1, box.current.clientWidth / w)
    Object.assign(frame.current.style, {
      width: `${w}px`,
      height: `${h}px`,
      transform: `scale(${scale})`,
    })
    box.current.style.height = `${h * scale}px`
  }

  useEffect(() => {
    // Refit when the card changes width, such as on rotating a phone.
    const ro = new ResizeObserver(fit)
    ro.observe(box.current)
    return () => ro.disconnect()
  }, [])

  const onLoad = () => {
    fit()
    // Some badges render after load, so watch for late changes in size.
    const body = frame.current?.contentDocument?.body
    if (body) new ResizeObserver(fit).observe(body)
  }

  return (
    <div ref={box} className="my-1 h-[100px] w-full overflow-hidden">
      <iframe
        ref={frame}
        title={`TryHackMe stats for ${tryhackme.username}`}
        srcDoc={badgeDoc}
        onLoad={onLoad}
        className="block h-[100px] w-full origin-top-left border-0"
      />
    </div>
  )
}

function TryHackMeCard() {
  return (
    <div className="card flex min-w-0 flex-col gap-2.5 rounded-xl border border-line p-5 sm:p-[26px]">
      <h3 className="flex items-center gap-2.5 text-[17px] font-bold">
        <Icon name="tryhackme" className="size-[22px]" />
        TryHackMe
      </h3>
      <p className="text-[15px] text-muted">{tryhackme.text}</p>
      <TryHackMeBadge />
      <ExternalLink href={tryhackme.href} className="mt-auto pt-1.5 font-mono text-[13px] break-all">
        tryhackme.com/p/{tryhackme.username}
      </ExternalLink>
    </div>
  )
}

// A dark badge in the style of the TryHackMe embed, built from live stats.
function PwnTillDawnBadge({ stats }) {
  const n = (v) => v.toLocaleString('en-US')
  const items = [
    { Icon: Server, value: stats && n(stats.machines), label: 'machines' },
    { Icon: Flag, value: stats && `#${n(stats.countryRank)}`, label: stats?.country ?? 'country' },
    { Icon: Trophy, value: stats && `#${n(stats.rank)}`, label: 'battlefield' },
    { Icon: Star, value: stats && n(stats.points), label: 'points' },
  ]

  return (
    <a
      href={pwntilldawn.href}
      target="_blank"
      rel="noopener noreferrer"
      className="@container -mt-1 mb-1 block w-[410px] max-w-full rounded-lg border border-[#2b2b2b] bg-[#141414] px-4 py-5 text-white transition-colors hover:border-[#f76d1e]"
    >
      <div className="flex items-center gap-4">
        {stats?.avatar ? (
          <img src={stats.avatar} alt="" className="size-16 shrink-0 rounded-full ring-2 ring-[#f76d1e]" />
        ) : (
          <span className="size-16 shrink-0 rounded-full bg-[#2b2b2b] ring-2 ring-[#f76d1e]" />
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-bold">
            {stats?.username ?? ' '}
            {stats && <span className="ml-1.5 font-mono text-[13px] font-normal text-[#f76d1e]">[#{n(stats.countryRank)} {stats.country}]</span>}
          </p>
          <p className="font-mono text-xs text-[#9a9a9a]">online.pwntilldawn.com</p>
        </div>
        <Icon name="pwntilldawn" className="hidden size-9 @[360px]:block" />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-x-1.5 gap-y-3 border-t border-[#2b2b2b] pt-4 @[360px]:grid-cols-4">
        {items.map(({ Icon: StatIcon, value, label }) => (
          <div key={label} className="min-w-0">
            <p className="flex items-center gap-1.5 text-[15px] font-bold tabular-nums">
              <StatIcon className="size-4 shrink-0 text-[#f76d1e]" aria-hidden="true" />
              {value ?? '–'}
            </p>
            <p className="mt-0.5 truncate text-xs text-[#9a9a9a]">{label}</p>
          </div>
        ))}
      </div>
    </a>
  )
}

function PwnTillDawnCard() {
  // undefined while loading, null if the stats could not be fetched.
  const [stats, setStats] = useState()

  useEffect(() => {
    const ctrl = new AbortController()
    fetch(pwntilldawn.api, { signal: ctrl.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then(setStats)
      .catch((err) => err.name !== 'AbortError' && setStats(null))
    return () => ctrl.abort()
  }, [])

  return (
    <div className="card flex min-w-0 flex-col gap-2.5 rounded-xl border border-line p-5 sm:p-[26px]">
      <h3 className="flex items-center gap-2.5 text-[17px] font-bold">
        <Icon name="pwntilldawn" className="size-[22px]" />
        PwnTillDawn
      </h3>
      <p className="text-[15px] text-muted">{pwntilldawn.text}</p>
      {stats !== null && <PwnTillDawnBadge stats={stats} />}
      <ExternalLink href={pwntilldawn.href} className="mt-auto pt-1.5 font-mono text-[13px] break-all">
        {pwntilldawn.display}
      </ExternalLink>
    </div>
  )
}

export default function Community() {
  return (
    <Section id="community" title="CTF & community">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <TryHackMeCard />
        <PwnTillDawnCard />
        {community.map((c) => (
          <div key={c.name} className="card flex min-w-0 flex-col gap-2.5 rounded-xl border border-line p-5 sm:p-[26px]">
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

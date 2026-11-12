import { useEffect, useRef } from 'react'
import { ChevronRight } from 'lucide-react'
import { projects } from '../data/resume.js'
import Icon from './Icon.jsx'
import { ExternalLink, LiveDot, Section, SectionHead, Tags } from './ui.jsx'

function ArrowButton({ label, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="chip grid size-10 cursor-pointer place-items-center rounded-full border border-edge bg-white text-sky-deep"
    >
      {children}
    </button>
  )
}

// The cards are rendered twice, back to back. Once the view reaches the second
// copy it is moved back by one copy's width, which looks identical, so the row
// can keep moving forward forever instead of rewinding.
const loop = [...projects, ...projects]

export default function Projects() {
  const track = useRef(null)

  // Distance from the first card to its copy.
  const copyWidth = () => {
    const el = track.current
    const copy = el?.children[projects.length]
    return copy ? copy.offsetLeft - el.children[0].offsetLeft : 0
  }

  // Jump to the matching card in the first copy, invisibly.
  const normalize = () => {
    const el = track.current
    const w = copyWidth()
    if (el && w && el.scrollLeft >= w - 2) el.scrollLeft -= w
  }

  // Move by one card, including the gap after it.
  const step = (dir) => {
    const el = track.current
    const card = el?.firstElementChild
    if (!card) return
    normalize()
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: smooth ? 'smooth' : 'auto' })
  }

  useEffect(() => {
    const el = track.current
    el?.addEventListener('scrollend', normalize)
    return () => el?.removeEventListener('scrollend', normalize)
  }, [])

  // Auto-advance one card every 10 seconds. It holds while the visitor is
  // reading (hover or keyboard focus) and for a full interval after they
  // scroll or use the arrows themselves.
  const INTERVAL = 10_000
  const holding = useRef(false)
  const lastManual = useRef(0)
  const touched = () => { lastManual.current = Date.now() }

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      if (!track.current || holding.current || document.hidden) return
      if (Date.now() - lastManual.current < INTERVAL) return
      step(1)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [])

  return (
    <Section id="projects" className="border-t-0">
      <div className="mb-9 flex items-center gap-4">
        <SectionHead title="Projects" className="flex-1" />
        <ArrowButton label="Next project" onClick={() => { touched(); step(1) }}>
          <ChevronRight className="size-5" aria-hidden="true" />
        </ArrowButton>
      </div>

      {/* Bleeds into the container padding so card shadows and hover lift aren't clipped. */}
      <div
        ref={track}
        onMouseEnter={() => { holding.current = true }}
        onMouseLeave={() => { holding.current = false; touched() }}
        onFocus={() => { holding.current = true }}
        onBlur={() => { holding.current = false; touched() }}
        onTouchStart={touched}
        onWheel={touched}
        onKeyDown={touched}
        tabIndex={0}
        aria-label="Projects, scroll sideways for more"
        className="no-scrollbar -mx-4 -my-3 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto px-4 py-3 focus-visible:outline-2 focus-visible:outline-sky sm:-mx-6 sm:scroll-px-6 sm:px-6 md:gap-8"
      >
        {loop.map((p, i) => (
          <article
            key={`${p.name}-${i}`}
            aria-hidden={i >= projects.length || undefined}
            className="card flex w-[86%] flex-none snap-start flex-col gap-[22px] rounded-[14px] border border-line bg-white p-6 sm:p-8 md:w-[calc((100%-2rem)/2)]"
          >
            <div>
              <h3 className="text-[22px] font-bold">{p.name}</h3>
              <p className="mt-0.5 text-[15px] text-muted">{p.subtitle}</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {p.metrics.map((m) => (
                <div key={m.label} className="chip rounded-[10px] border border-transparent bg-mist p-3.5">
                  <b className="block text-2xl leading-tight text-sky-deep tabular-nums">{m.value}</b>
                  <span className="mt-0.5 block text-[12.5px] leading-snug text-muted">{m.label}</span>
                </div>
              ))}
            </div>

            <ul className="grid list-disc gap-3 pl-[18px] text-[15px]">
              {p.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>

            <Tags items={p.stack} className="mt-auto pt-1" />

            {p.links && (
              <div className="flex flex-wrap gap-5 text-[15px] font-medium">
                {p.links.map((l) => (
                  <ExternalLink key={l.href} href={l.href} className="inline-flex items-center gap-2">
                    {l.icon === 'live' ? <LiveDot /> : <Icon name={l.icon} />}
                    {l.label}
                  </ExternalLink>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}

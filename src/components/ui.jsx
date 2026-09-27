import Icon from './Icon.jsx'

export function Container({ className = '', children }) {
  return <div className={`mx-auto max-w-[1080px] px-4 sm:px-6 ${className}`}>{children}</div>
}

export function Section({ id, title, className = '', children }) {
  return (
    <section id={id} className={`border-t border-line py-16 md:py-22 ${className}`}>
      <Container>
        {title && <SectionHead title={title} />}
        {children}
      </Container>
    </section>
  )
}

export function SectionHead({ title }) {
  return (
    <div className="mb-9 flex items-baseline gap-4">
      <h2 className="text-[28px] font-bold tracking-tight">{title}</h2>
      <div className="h-0.5 flex-1 bg-linear-to-r from-edge to-transparent" />
    </div>
  )
}

export function Tag({ name, icon }) {
  return (
    <span className="inline-flex items-center gap-[7px] rounded-full border border-edge bg-white px-3 py-1.5 text-[13.5px] leading-tight">
      <Icon name={icon} className="size-[15px]" />
      {name}
    </span>
  )
}

export function Tags({ items, className = '' }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((t) => <Tag key={t.name} {...t} />)}
    </div>
  )
}

export function Eyebrow({ children, className = '' }) {
  return (
    <p className={`font-mono text-xs uppercase tracking-[.07em] ${className}`}>{children}</p>
  )
}

export function ExternalLink({ href, className = '', children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`text-sky-deep hover:underline ${className}`}>
      {children}
    </a>
  )
}

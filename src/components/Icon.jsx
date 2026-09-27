import {
  siAmazonaws, siCisco, siDocker, siGit, siGithub, siGnubash, siGo, siLinkedin,
  siLinux, siMedium, siNginx, siPython, siTryhackme, siWireshark,
} from 'simple-icons'
import {
  Activity, Award, Binary, Bug, Crosshair, Disc3, Fingerprint, Globe, KeyRound,
  LockKeyhole, Network, Radar, Route, ScanSearch, ServerCog, ShieldAlert,
  ShieldCheck, Waypoints,
} from 'lucide-react'

// Brand logos. A few brand colors are adjusted so they stay visible on white.
const brands = {
  go: [siGo],
  python: [siPython],
  bash: [siGnubash],
  linux: [siLinux, '1A1A1A'],
  docker: [siDocker],
  aws: [siAmazonaws, 'FF9900'],
  nginx: [siNginx],
  wireshark: [siWireshark],
  git: [siGit],
  github: [siGithub],
  cisco: [siCisco],
  tryhackme: [siTryhackme, 'C11111'],
  medium: [siMedium],
  linkedin: [siLinkedin],
}

// Line icons for tools and concepts without an official logo.
const lines = {
  activity: Activity, award: Award, binary: Binary, bug: Bug, crosshair: Crosshair,
  disc: Disc3, fingerprint: Fingerprint, globe: Globe, key: KeyRound, lock: LockKeyhole,
  network: Network, radar: Radar, route: Route, scan: ScanSearch, serverCog: ServerCog,
  shieldAlert: ShieldAlert, shieldCheck: ShieldCheck, waypoints: Waypoints,
}

export default function Icon({ name, className = 'size-4' }) {
  if (brands[name]) {
    const [icon, color] = brands[name]
    return (
      <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} aria-hidden="true">
        <path d={icon.path} fill={`#${color ?? icon.hex}`} />
      </svg>
    )
  }
  const Line = lines[name]
  if (!Line) throw new Error(`Unknown icon: ${name}`)
  return <Line className={`shrink-0 text-sky-deep ${className}`} aria-hidden="true" />
}

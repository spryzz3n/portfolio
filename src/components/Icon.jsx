import {
  siAmazonaws, siCplusplus, siDebian, siDocker, siGit, siGithub, siGnubash, siGo, siLinkedin,
  siLinux, siMedium, siNginx, siOpenssl, siTryhackme, siWireshark,
} from 'simple-icons'
import {
  Activity, Bug, Crosshair, Fingerprint, Globe, HardDrive, KeyRound,
  Network, Radar, Route, ScanSearch, ShieldAlert, Waypoints,
} from 'lucide-react'

// Brand logos. A few brand colors are adjusted so they stay visible on white.
const brands = {
  go: [siGo],
  bash: [siGnubash],
  cpp: [siCplusplus],
  debian: [siDebian],
  openssl: [siOpenssl],
  linux: [siLinux, '1A1A1A'],
  docker: [siDocker],
  aws: [siAmazonaws, 'FF9900'],
  nginx: [siNginx],
  wireshark: [siWireshark],
  git: [siGit],
  github: [siGithub],
  tryhackme: [siTryhackme, 'C11111'],
  medium: [siMedium],
  linkedin: [siLinkedin],
}

// Line icons for tools and concepts without an official logo.
const lines = {
  activity: Activity, bug: Bug, crosshair: Crosshair,
  drive: HardDrive, fingerprint: Fingerprint, globe: Globe, key: KeyRound,
  network: Network, radar: Radar, route: Route, scan: ScanSearch,
  shieldAlert: ShieldAlert, waypoints: Waypoints,
}

// Logos with no SVG version, served from public/.
const images = {
  pwntilldawn: '/pwntilldawn.png',
}

export default function Icon({ name, className = 'size-4' }) {
  if (images[name]) {
    return <img src={images[name]} alt="" className={`shrink-0 ${className}`} aria-hidden="true" />
  }
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

// All site content lives here. Edit this file to update the portfolio.
// Icon names map to entries in src/components/Icon.jsx.

export const profile = {
  name: 'Kirthik Aditya',
  role: 'Aspiring Security Engineer',
  summary:
    'Cybersecurity student interested in penetration testing, network security and cloud security. I learn by doing: CTFs on TryHackMe and PwnTillDawn, a Proxmox homelab, and writing security tools in Go, C++ and Python. I work mostly on Linux with Docker and AWS, and I enjoy contributing to open source.',
  email: 'kirthikaditya2@gmail.com',
  resume: '/resume.pdf',
  facts: [
    { label: 'Focus', value: 'Cybersecurity, Network Security, Cloud Security, DevSecOps' },
    { label: 'Studying', value: ['B.Tech, AI & Machine Learning', 'Bannari Amman Institute of Technology'] },
  ],
  coreStack: [
    { name: 'Go', icon: 'go' },
    { name: 'C++', icon: 'cpp' },
    { name: 'Python', icon: 'python' },
    { name: 'Bash', icon: 'bash' },
    { name: 'Linux', icon: 'linux' },
    { name: 'Docker', icon: 'docker' },
    { name: 'AWS', icon: 'aws' },
  ],
}

export const projects = [
  {
    name: 'BIT CyberSpace',
    subtitle: 'College cybersecurity lab platform, team project. I handled infrastructure and deployment.',
    metrics: [
      { value: '0', label: 'inbound ports open on the server' },
      { value: '2', label: 'nginx entry points: tunnel and lab LAN' },
      { value: '1', label: 'lab container per student, each with its own LAN IP' },
    ],
    points: [
      'Ran the production server for a college platform where students study security topics and take practical assessments in lab containers. The API runs under systemd as an unprivileged service user.',
      "Published it at cyberspace.skysec.org through a Cloudflare Tunnel, since the server sits behind college NAT with no inbound ports, and gave lab PCs a direct LAN path with Let's Encrypt TLS.",
      'Configured nginx so the student assessment API answers only on the LAN listener and only from the lab subnet. It checks the listener and source address, not headers like X-Forwarded-For that a client can fake.',
      'Hosted the Docker lab runtime, where each student gets a container on a macvlan network with a fixed IP, and cleanup only touches containers the platform labeled as its own.',
    ],
    stack: [
      { name: 'Linux', icon: 'linux' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Nginx', icon: 'nginx' },
      { name: 'Cloudflare Tunnel', icon: 'cloudflare' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Go', icon: 'go' },
    ],
    links: [
      { label: 'Live site', icon: 'live', href: 'https://cyberspace.skysec.org' },
      { label: 'Source', icon: 'github', href: 'https://github.com/G6kco/CyberSpace' },
    ],
  },
  {
    name: 'PurgeMark',
    subtitle: 'NIST SP 800-88 drive sanitization, bootable Linux ISO',
    metrics: [
      { value: '~1,000', label: 'random regions read back after every erase' },
      { value: '800-88', label: 'NIST SP level shown for every erase method' },
      { value: '2', label: 'boot modes, UEFI and BIOS' },
    ],
    points: [
      "Built a bootable Debian ISO in C++ that erases drives with their own NVMe and ATA commands, sent through the kernel's NVMe admin and SG_IO interfaces, and falls back to an AES-256-CTR overwrite where it can't.",
      'Verified every erase by reading the disk back with O_DIRECT. For firmware erases it plants random canaries first, so a drive that claims success without erasing gets caught.',
      'Issued tamper-evident certificates signed with Ed25519 over RFC 8785 canonical JSON, with a command-line verifier and a browser verifier that never uploads the file.',
      'Refuses disks that are mounted, used as swap or part of LVM, RAID or LUKS, and is tested in Proxmox VMs with a destructive integration test that finds its target disks by serial number.',
    ],
    stack: [
      { name: 'C++', icon: 'cpp' },
      { name: 'Linux', icon: 'linux' },
      { name: 'NVMe', icon: 'drive' },
      { name: 'OpenSSL', icon: 'openssl' },
      { name: 'Cryptography', icon: 'key' },
      { name: 'Debian live-build', icon: 'debian' },
    ],
    links: [
      { label: 'Live site', icon: 'live', href: 'https://purgemark.skysec.org' },
      { label: 'Source', icon: 'github', href: 'https://github.com/spryzz3n/PurgeMark' },
    ],
  },
  {
    name: 'IndexCase',
    subtitle: 'Malware propagation tracer for Active Directory, in progress',
    metrics: [
      { value: '3', label: 'log sources: Security, System and Sysmon' },
      { value: '1', label: 'normalized Parquet schema for every event' },
      { value: 'DHCP', label: 'reassignment handled in IP-to-host resolution' },
    ],
    points: [
      'Building a DFIR command-line tool that reads EVTX and JSONL logs from many hosts and normalizes Security, System and Sysmon events, from logons and Kerberos to service installs and scheduled tasks, into one Parquet schema.',
      'Resolves IPs to hosts over time and prefers Sysmon network telemetry over the workstation names clients supply, which tools like Impacket can fake.',
      'Next: link each remote execution (SMB plus service install as with PsExec, WMI, scheduled tasks) to the logon that caused it, then rank the likely patient zero with every link citing its events.',
    ],
    stack: [
      { name: 'Python', icon: 'python' },
      { name: 'Polars', icon: 'polars' },
      { name: 'Parquet', icon: 'parquet' },
      { name: 'Windows Event Logs', icon: 'windows' },
      { name: 'pytest', icon: 'pytest' },
    ],
    links: [
      { label: 'Source', icon: 'github', href: 'https://github.com/spryzz3n/IndexCase' },
    ],
  },
]

// The first group is highlighted and spans two columns on wide screens.
export const skills = [
  {
    group: 'Security',
    items: [
      { name: 'Wireshark', icon: 'wireshark' },
      { name: 'Burp Suite', icon: 'bug' },
      { name: 'Nmap', icon: 'radar' },
      { name: 'Metasploit', icon: 'crosshair' },
      { name: 'Vulnerability Assessment', icon: 'scan' },
      { name: 'Penetration Testing', icon: 'shieldAlert' },
    ],
  },
  {
    group: 'Networking',
    items: [
      { name: 'TCP/IP', icon: 'network' },
      { name: 'DNS', icon: 'waypoints' },
      { name: 'HTTP', icon: 'globe' },
      { name: 'OSPF', icon: 'route' },
      { name: 'Packet Analysis', icon: 'activity' },
    ],
  },
  {
    group: 'Cloud',
    items: [
      { name: 'AWS', icon: 'aws' },
      { name: 'IAM & Access Control', icon: 'fingerprint' },
    ],
  },
  {
    group: 'Containers & DevOps',
    items: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
    ],
  },
  {
    group: 'Programming',
    items: [
      { name: 'Go', icon: 'go' },
      { name: 'C++', icon: 'cpp' },
      { name: 'Python', icon: 'python' },
      { name: 'Bash Scripting', icon: 'bash' },
    ],
  },
]

export const education = {
  degree: 'B.Tech, Artificial Intelligence & Machine Learning',
  school: 'Bannari Amman Institute of Technology',
  years: '2024 – 2028',
}

// TryHackMe blocks other sites from reading its API, so live stats come from
// its official badge embed, which loads in the visitor's browser.
export const tryhackme = {
  username: 'SPRYZZEN',
  href: 'https://tryhackme.com/p/SPRYZZEN',
  badge: 'https://tryhackme.com/badge/t/fae7ffe29aa3a1998a2a86c87dc93b53ad4ac0adf855f58639711f43b2ebc5214c1d6a0a3a3090ea95445bb3377af339?theme=dark',
  text: 'Solving rooms and CTF-style challenges across web, network and cloud security tracks.',
}

// Live stats come from /api/pwntilldawn, served by the Worker in worker/index.js.
export const pwntilldawn = {
  href: 'https://online.pwntilldawn.com/Achievements/9259',
  display: 'online.pwntilldawn.com/Achievements/9259',
  api: '/api/pwntilldawn',
  text: 'Pwning machines in the PwnTillDawn battlefield, a live penetration testing range.',
}

export const community = [
  {
    name: 'Medium',
    icon: 'medium',
    text: 'Write-ups on cybersecurity and cloud security, turning lab and project work into technical posts.',
    href: 'https://medium.com/@mkirthikaditya.al24',
    display: 'medium.com/@mkirthikaditya.al24',
  },
  {
    name: 'GitHub',
    icon: 'github',
    text: 'Security tools I build, from drive sanitization in C++ to incident-response tooling in Python. Also my first open source contribution: a merged fix to Zeek, stopping its raw input reader from looping forever on an empty record separator.',
    href: 'https://github.com/spryzz3n',
    display: 'github.com/spryzz3n',
    extra: { href: 'https://github.com/zeek/zeek/pull/6058', display: 'zeek/zeek#6058 (merged)' },
  },
]

export const socials = [
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/in/mkirthikaditya' },
  { name: 'GitHub', icon: 'github', href: 'https://github.com/spryzz3n' },
  { name: 'Medium', icon: 'medium', href: 'https://medium.com/@mkirthikaditya.al24' },
  { name: 'TryHackMe', icon: 'tryhackme', href: 'https://tryhackme.com/p/SPRYZZEN' },
]

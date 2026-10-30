// All site content lives here. Edit this file to update the portfolio.
// Icon names map to entries in src/components/Icon.jsx.

export const profile = {
  name: 'Kirthik Aditya',
  role: 'Cybersecurity & Cloud Security Engineer',
  summary:
    'Cybersecurity engineer with hands-on experience in penetration testing, network security and vulnerability assessment, backed by Linux, Docker and AWS. I built a cloud-based cybersecurity lab platform in Go, and a verifiable drive-erasure tool in C++ that sanitizes disks at the firmware level and issues signed certificates.',
  email: 'kirthikaditya2@gmail.com',
  resume: '/resume.pdf',
  facts: [
    { label: 'Focus', value: 'Cybersecurity, Network Security, Cloud Security, DevSecOps' },
    { label: 'Studying', value: ['B.Tech, AI & Machine Learning', 'Bannari Amman Institute of Technology'] },
  ],
  coreStack: [
    { name: 'Go', icon: 'go' },
    { name: 'C++', icon: 'cpp' },
    { name: 'Bash', icon: 'bash' },
    { name: 'Linux', icon: 'linux' },
    { name: 'Docker', icon: 'docker' },
    { name: 'AWS', icon: 'aws' },
  ],
}

export const projects = [
  {
    name: 'BIT CyberSpace',
    subtitle: 'Cybersecurity & Cloud PaaS Platform',
    metrics: [
      { value: '12+', label: 'containerized lab environments' },
      { value: '40%', label: 'smaller external attack surface' },
      { value: '80%', label: 'faster environment provisioning' },
    ],
    points: [
      'Built Go backend services for a cloud lab platform where students run penetration tests against containers and analyze PCAP files to capture flags.',
      'Hosted 12+ isolated, purpose-built vulnerable environments supporting 20 concurrent users.',
      'Configured Nginx for reverse proxy, TLS termination and service routing, centralizing access control to backend containers.',
      'Designed around network segmentation and least-privilege access, with Wireshark and Nmap workflows for traffic analysis and recon.',
    ],
    stack: [
      { name: 'Go', icon: 'go' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Nginx', icon: 'nginx' },
      { name: 'Wireshark', icon: 'wireshark' },
      { name: 'Nmap', icon: 'radar' },
    ],
  },
  {
    name: 'ZeroTrace',
    subtitle: 'Verifiable drive erasure, bootable Linux ISO',
    metrics: [
      { value: '9', label: 'sanitize methods detected per drive' },
      { value: '~1,000', label: 'regions read back after every erase' },
      { value: '2', label: 'boot modes, UEFI and BIOS' },
    ],
    points: [
      "Built a bootable Debian ISO in C++ that erases drives with their own NVMe and ATA sanitize commands, sending raw commands to the drive through the kernel's NVMe admin and SG_IO interfaces.",
      'Verified every erase by reading the disk back with O_DIRECT. For firmware erases it plants random canaries first, so a drive that claims success without erasing gets caught.',
      'Issued tamper-evident certificates signed with Ed25519 over RFC 8785 canonical JSON, with matching verifiers in C++ and JavaScript and a public browser verifier.',
      'Found and fixed boot, D-Bus and console-font issues by testing the ISO in Proxmox VMs, with a destructive integration test that locates its target disks by serial number.',
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
      { label: 'Live site', icon: 'live', href: 'https://zerotrace.skysec.org' },
      { label: 'Source', icon: 'github', href: 'https://github.com/spryzz3n/ZeroTrace' },
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
        { name: 'Bash Scripting', icon: 'bash' },
    ],
  },
]

export const education = {
  degree: 'B.Tech, Artificial Intelligence & Machine Learning',
  school: 'Bannari Amman Institute of Technology',
  years: '2024 – 2028',
}

export const certifications = [
  { name: 'Cisco, Introduction to Cybersecurity', icon: 'cisco' },
  { name: 'Pwn Till Dawn', icon: 'award', link: { label: 'achievements', href: 'https://online.pwntilldawn.com/Achievements/9259' } },
  { name: 'CyLab Academy', icon: 'award', link: { label: 'profile', href: 'https://learn.cylabacademy.org/users/spryzz3n' } },
]

export const interests = [
  { name: 'Cybersecurity Engineering', icon: 'shieldCheck' },
  { name: 'Network Security', icon: 'network' },
  { name: 'Cloud Security', icon: 'serverCog' },
  { name: 'DevSecOps', icon: 'binary' },
]

export const community = [
  {
    name: 'TryHackMe',
    icon: 'tryhackme',
    text: 'Solving rooms and CTF-style challenges across web, network and cloud security tracks.',
    href: 'https://tryhackme.com/p/SPRYZZEN',
    display: 'tryhackme.com/p/SPRYZZEN',
  },
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
    text: 'Homelab code and configs for Linux administration, networking and cloud environments.',
    href: 'https://github.com/spryzz3n',
    display: 'github.com/spryzz3n',
  },
]

export const socials = [
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/in/mkirthikaditya' },
  { name: 'GitHub', icon: 'github', href: 'https://github.com/spryzz3n' },
  { name: 'Medium', icon: 'medium', href: 'https://medium.com/@mkirthikaditya.al24' },
  { name: 'TryHackMe', icon: 'tryhackme', href: 'https://tryhackme.com/p/SPRYZZEN' },
]

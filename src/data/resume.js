// All site content lives here. Edit this file to update the portfolio.
// Icon names map to entries in src/components/Icon.jsx.

export const profile = {
  name: 'Kirthik Aditya',
  role: 'Cybersecurity & Cloud Security Engineer',
  summary:
    'Cybersecurity engineer with hands-on experience in penetration testing, network security and vulnerability assessment, backed by Linux, Docker and AWS. I built a cloud-based cybersecurity lab platform and a secure data-sanitization tool using cryptographic erasure and HSM-backed key management, working in Go, Python and Bash.',
  email: 'kirthikaditya2@gmail.com',
  resume: '/resume.pdf',
  facts: [
    { label: 'Focus', value: 'Cybersecurity, Network Security, Cloud Security, DevSecOps' },
    { label: 'Studying', value: ['B.Tech, AI & Machine Learning', 'Bannari Amman Institute of Technology'] },
  ],
  coreStack: [
    { name: 'Go', icon: 'go' },
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
    subtitle: 'Secure Data Erasure & Media Sanitization Tool',
    metrics: [
      { value: '100%', label: 'successful erasure rate' },
      { value: '20', label: 'test drives validated' },
      { value: '3', label: 'storage form factors' },
    ],
    points: [
      'Built a bootable ISO and companion app that securely wipes HDDs and SSDs for decommissioning on-premise and cloud storage.',
      'Used cryptographic erasure (destroying the key instead of overwriting data), cutting wipe time versus multi-pass methods like DoD 5220.22-M.',
      'Integrated a Hardware Security Module for key generation, storage and destruction, preventing key recovery after sanitization.',
      'Wrote the wiping engine and automation tooling in Python and Bash for compliance-driven asset retirement.',
    ],
    stack: [
      { name: 'Python', icon: 'python' },
      { name: 'Bash', icon: 'bash' },
      { name: 'HSM', icon: 'key' },
      { name: 'Cryptographic Erasure', icon: 'lock' },
      { name: 'Bootable ISO', icon: 'disc' },
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

// Fetches public TryHackMe stats and writes them to public/tryhackme.json,
// which the TryHackMe card loads at runtime. Runs in CI before each build.
// Never fails the build: if TryHackMe can't be reached, the card falls back
// to the numbers in src/data/resume.js.

import { writeFile } from 'node:fs/promises'

const USERNAME = 'SPRYZZEN'
const API_URL = process.env.THM_URL ?? `https://tryhackme.com/api/v2/public-profile?username=${USERNAME}`
const OUT = new URL('../public/tryhackme.json', import.meta.url)

try {
  const res = await fetch(API_URL, {
    headers: { 'User-Agent': 'me.skysec.org portfolio build', Accept: 'application/json' },
    signal: AbortSignal.timeout(15_000),
  })
  if (!res.ok) throw new Error(`TryHackMe responded ${res.status}`)
  const { data } = await res.json()
  if (!data || typeof data.rank !== 'number') throw new Error('Unexpected TryHackMe response')

  const stats = {
    rank: data.rank,
    topPercentage: data.topPercentage,
    completedRooms: data.completedRoomsNumber,
    badges: data.badgesNumber,
    updatedAt: new Date().toISOString(),
  }
  await writeFile(OUT, JSON.stringify(stats, null, 2) + '\n')
  console.log('TryHackMe stats updated:', stats)
} catch (err) {
  console.warn(`::warning::Could not fetch TryHackMe stats (${err.message}); the card will use its fallback numbers.`)
}

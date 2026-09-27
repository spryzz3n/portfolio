// Fetches public TryHackMe stats and writes them to public/tryhackme.json,
// which the TryHackMe card loads at runtime. Runs in CI before each build.
//
// TryHackMe's bot protection often rejects plain server requests, so this
// tries a normal fetch first and falls back to loading the API in headless
// Chromium (Playwright). It never fails the build: if both attempts fail,
// the card shows the fallback numbers in src/data/resume.js.

import { writeFile } from 'node:fs/promises'

const USERNAME = 'SPRYZZEN'
const API_URL = process.env.THM_URL ?? `https://tryhackme.com/api/v2/public-profile?username=${USERNAME}`
const OUT = new URL('../public/tryhackme.json', import.meta.url)
const BROWSER_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36'

async function viaFetch() {
  const res = await fetch(API_URL, {
    headers: { 'User-Agent': BROWSER_UA, Accept: 'application/json' },
    signal: AbortSignal.timeout(15_000),
  })
  if (!res.ok) throw new Error(`responded ${res.status}`)
  return res.json()
}

async function viaBrowser() {
  const { chromium } = await import('playwright')
  const browser = await chromium.launch()
  try {
    const page = await browser.newPage({ userAgent: BROWSER_UA })
    // Visit the site first so any bot check can set its cookies, then read the API.
    if (!process.env.THM_URL) await page.goto('https://tryhackme.com/', { waitUntil: 'domcontentloaded', timeout: 30_000 })
    const res = await page.goto(API_URL, { waitUntil: 'networkidle', timeout: 30_000 })
    const body = await page.evaluate(() => document.body.innerText)
    try {
      return JSON.parse(body)
    } catch {
      throw new Error(`responded ${res?.status()} with a non-JSON page`)
    }
  } finally {
    await browser.close()
  }
}

function toStats(json) {
  const data = json?.data
  if (!data || typeof data.rank !== 'number') throw new Error('unexpected response shape')
  return {
    rank: data.rank,
    topPercentage: data.topPercentage,
    completedRooms: data.completedRoomsNumber,
    badges: data.badgesNumber,
    updatedAt: new Date().toISOString(),
  }
}

for (const [name, attempt] of [['fetch', viaFetch], ['browser', viaBrowser]]) {
  try {
    const stats = toStats(await attempt())
    await writeFile(OUT, JSON.stringify(stats, null, 2) + '\n')
    console.log(`TryHackMe stats updated (via ${name}):`, stats)
    process.exit(0)
  } catch (err) {
    console.log(`TryHackMe ${name} attempt failed: ${err.message}`)
  }
}
console.log('::warning::Could not fetch TryHackMe stats; the card will use its fallback numbers.')

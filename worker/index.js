// Serves the static site, plus one live endpoint for the TryHackMe card.
// Static files in dist/ are served before this code runs; only unmatched
// paths (like /api/tryhackme) reach fetch() below.

const THM_USERNAME = 'SPRYZZEN'
const THM_URL = `https://tryhackme.com/api/v2/public-profile?username=${THM_USERNAME}`
const CACHE_SECONDS = 3600

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url)
    if (pathname === '/api/tryhackme') return tryhackme()
    return env.ASSETS.fetch(request)
  },
}

async function tryhackme() {
  try {
    // Cloudflare caches the upstream response, so TryHackMe is hit at most once an hour per edge.
    const res = await fetch(THM_URL, {
      headers: { 'User-Agent': 'me.skysec.org portfolio', Accept: 'application/json' },
      cf: { cacheTtl: CACHE_SECONDS, cacheEverything: true },
    })
    if (!res.ok) throw new Error(`TryHackMe responded ${res.status}`)
    const { data } = await res.json()
    if (!data || typeof data.rank !== 'number') throw new Error('Unexpected TryHackMe response')

    // Only pass through the numbers the card shows.
    return json(
      {
        rank: data.rank,
        topPercentage: data.topPercentage,
        completedRooms: data.completedRoomsNumber,
        badges: data.badgesNumber,
      },
      { 'Cache-Control': `public, max-age=${CACHE_SECONDS}` },
    )
  } catch (err) {
    return json({ error: err.message }, { 'Cache-Control': 'no-store' }, 502)
  }
}

function json(body, headers = {}, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers },
  })
}

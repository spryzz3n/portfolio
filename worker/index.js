// Serves the static site, plus a live endpoint for the PwnTillDawn card.

import { fetchStats } from './pwntilldawn.js'

const CACHE_SECONDS = 3600

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url)
    if (pathname === '/api/pwntilldawn') return pwntilldawn()
    return env.ASSETS.fetch(request)
  },
}

async function pwntilldawn() {
  try {
    // Cloudflare caches the upstream page, so PwnTillDawn is hit at most once an hour per edge.
    const stats = await fetchStats({ cf: { cacheTtl: CACHE_SECONDS, cacheEverything: true } })
    return json(stats, { 'Cache-Control': `public, max-age=${CACHE_SECONDS}` })
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

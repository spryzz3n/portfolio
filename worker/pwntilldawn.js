// Reads the public stats off a PwnTillDawn achievements page. PwnTillDawn has
// no API, so this parses the page HTML. Shared by the Worker and the Vite dev
// server so both serve the same /api/pwntilldawn response.

export const PTD_ORIGIN = 'https://online.pwntilldawn.com'
export const PTD_URL = `${PTD_ORIGIN}/Achievements/9259`

const num = (s) => Number(s.replace(/,/g, ''))

export function parseStats(html) {
  const machines = html.match(/>\s*(\d+)\s*<\/h5>\s*<span class="description-text">\s*PWNED MACHINES/)
  const battlefield = html.match(
    /<span[^>]*>\s*([\d,]+)\s*<\/span>\s*\/\s*([\d,]+)\s*\(<small>\s*([\d,]+)\s*points\s*<\/small>\)\s*<\/h5>\s*<span class="description-text">\s*BATTLEFIELD RANK/,
  )
  const country = html.match(
    /BATTLEFIELD RANK[\s\S]*?<span[^>]*>\s*#([\d,]+)\s*<\/span>\s*<\/h5>\s*<span class="description-text">\s*([^<]+?)\s*<\/span>/,
  )
  const username = html.match(/class="widget-user-username">\s*<strong>\s*([^<]+?)\s*<\/strong>/)
  const avatar = html.match(/class="widget-user-image"[\s\S]*?<img[^>]*src="([^"]+)"/)
  if (!machines || !battlefield || !country) return null

  return {
    username: username?.[1] ?? null,
    avatar: avatar ? new URL(avatar[1], PTD_ORIGIN).href : null,
    machines: num(machines[1]),
    rank: num(battlefield[1]),
    players: num(battlefield[2]),
    points: num(battlefield[3]),
    countryRank: num(country[1]),
    country: country[2],
  }
}

export async function fetchStats(init = {}) {
  const res = await fetch(PTD_URL, {
    ...init,
    headers: { 'User-Agent': 'me.skysec.org portfolio' },
  })
  if (!res.ok) throw new Error(`PwnTillDawn responded ${res.status}`)
  const stats = parseStats(await res.text())
  if (!stats) throw new Error('Could not read stats from the PwnTillDawn page')
  return stats
}

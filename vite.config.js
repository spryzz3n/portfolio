import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fetchStats } from './worker/pwntilldawn.js'

// Serves /api/pwntilldawn during `npm run dev`, the same as the Worker does in production.
const pwntilldawnApi = {
  name: 'pwntilldawn-api',
  configureServer(server) {
    server.middlewares.use('/api/pwntilldawn', async (_req, res) => {
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      try {
        res.end(JSON.stringify(await fetchStats()))
      } catch (err) {
        res.statusCode = 502
        res.end(JSON.stringify({ error: err.message }))
      }
    })
  },
}

export default defineConfig({
  plugins: [react(), tailwindcss(), pwntilldawnApi],
})

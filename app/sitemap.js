import { PROGRAMS } from '@/lib/programs'
import { GUIDES } from '@/lib/guides'

const BASE = 'https://anotherdegreehotter.com'

export default function sitemap() {
  const programs = PROGRAMS.map(p => ({
    url: `${BASE}/programs/${p.slug}`,
    lastModified: '2026-07-27',
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const guides = GUIDES.map(g => ({
    url: `${BASE}/guides/${g.slug}`,
    lastModified: '2026-07-27',
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const statics = [
    { url: BASE,                   priority: 1.0 },
    { url: `${BASE}/guides`,       priority: 0.6 },
    { url: `${BASE}/about`,        priority: 0.5 },
    { url: `${BASE}/privacy`,      priority: 0.3 },
    { url: `${BASE}/tos`,          priority: 0.3 },
  ].map(p => ({ ...p, lastModified: '2026-07-27', changeFrequency: 'monthly' }))

  return [...statics, ...programs, ...guides]
}

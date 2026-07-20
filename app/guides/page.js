import Link from 'next/link'
import { GUIDES } from '@/lib/guides'

export const metadata = {
  title: 'Graduate School Guides',
  description:
    'Practical guides to graduate school admissions — GPA requirements, portfolios, funding, program comparisons, and personal statement advice across every field.',
}

export default function GuidesPage() {
  return (
    <div className="guide-wrapper">
      <div className="guide-container">

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb__sep">›</span>
          <span>Guides</span>
        </nav>

        <header className="guide-header">
          <h1 className="guide-title">Graduate School Guides</h1>
          <p className="guide-index-desc">
            Practical advice on graduate admissions — from understanding GPA requirements
            to choosing between degree types, funding your degree, and writing a strong
            personal statement.
          </p>
        </header>

        <ul className="guide-list">
          {GUIDES.map(g => (
            <li key={g.slug}>
              <Link href={`/guides/${g.slug}`} className="guide-card">
                <div className="guide-card__meta">{g.readingMinutes} min read</div>
                <h2 className="guide-card__title">{g.title}</h2>
                <p className="guide-card__desc">{g.description}</p>
                <span className="guide-card__link">Read guide →</span>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

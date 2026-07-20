import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PROGRAMS, getProgramBySlug, getRelatedPrograms, gpaLabel, relatedDegreeLabel } from '@/lib/programs'

// ── Static generation ─────────────────────────────────────────────────────
// Next.js builds one static HTML file per program at build time.

export function generateStaticParams() {
  return PROGRAMS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = getProgramBySlug(slug)
  if (!p) return {}

  const degreesStr  = p.degree.join('/')
  const requirements = [
    `Recommended GPA: ${p.gpa_recommended.toFixed(1)}`,
    `Portfolio: ${p.portfolio_required === 'writing_sample' ? 'writing sample required' : p.portfolio_required ? 'required' : 'not required'}`,
    `Personal statement: ${p.essay_required ? 'required' : 'not required'}`,
  ].join('. ')

  return {
    title: `${p.program} — ${p.school}`,
    description: `${degreesStr} program at ${p.school} in ${p.location}. ${requirements}. ${p.description}`,
    openGraph: {
      title: `${p.program} at ${p.school}`,
      description: p.description,
      type: 'website',
    },
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────

function gpaClass(gpa) {
  if (gpa <= 3.0) return 'gpa-accessible'
  if (gpa <= 3.3) return 'gpa-moderate'
  return 'gpa-selective'
}

function relatedClass(val) {
  return { not_required: 'no', preferred: 'preferred', required: 'yes' }[val] ?? 'no'
}

function RequirementRow({ label, value, cls }) {
  return (
    <div className="req-row">
      <span className="req-row__label">{label}</span>
      {cls
        ? <span className={`req-badge req-badge--${cls}`}>{value}</span>
        : <span className={`req-row__value ${value.class ?? ''}`}>{value.text ?? value}</span>
      }
    </div>
  )
}

// Mini card for related programs section
function RelatedCard({ p }) {
  return (
    <Link href={`/programs/${p.slug}`} className="program-card" style={{ fontSize: '0.9em' }}>
      <div className="card-top">
        <span className="school-name">{p.school}</span>
        <div className="degree-badges">
          {p.degree.map(d => <span key={d} className="badge-degree">{d}</span>)}
        </div>
      </div>
      <h3 className="program-name" style={{ fontSize: '0.875rem' }}>{p.program}</h3>
      <div className="card-location" style={{ fontSize: '0.8rem' }}>
        📍 {p.location} <span className="country-chip">{p.country}</span>
      </div>
      <div className="req-grid" style={{ marginTop: '4px' }}>
        <div className="req-item">
          <span className="req-label">Min. GPA</span>
          <span className={`req-value ${gpaClass(p.gpa_recommended)}`}>{p.gpa_recommended.toFixed(1)}</span>
        </div>
        <div className="req-item">
          <span className="req-label">Portfolio</span>
          <span className={`req-badge req-badge--${p.portfolio_required !== false ? 'yes' : 'no'}`}>
            {p.portfolio_required === 'writing_sample' ? 'Req. (sample)' : p.portfolio_required ? 'Required' : 'Not req.'}
          </span>
        </div>
      </div>
    </Link>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────

export default async function ProgramPage({ params }) {
  const { slug } = await params
  const p = getProgramBySlug(slug)
  if (!p) notFound()

  const related = getRelatedPrograms(p)
  const gpa = gpaLabel(p.gpa_recommended)

  // Schema.org JSON-LD — helps Google show this as an educational result
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: p.program,
    description: p.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: p.school,
      address: {
        '@type': 'PostalAddress',
        addressLocality: p.location.split(',')[0].trim(),
        addressCountry: p.country,
      },
    },
    url: p.url,
    educationalCredentialAwarded: p.degree.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="program-detail">

        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb__sep">›</span>
          <Link href={`/?field=${encodeURIComponent(p.field)}`}>{p.field}</Link>
          <span className="breadcrumb__sep">›</span>
          <span>{p.school}</span>
        </nav>

        {/* Hero */}
        <div className="detail-hero">
          <div className="detail-school">
            {p.school}
            <span className="country-chip" style={{ fontWeight: 600 }}>{p.country}</span>
          </div>
          <h1 className="detail-title">{p.program}</h1>
          <div className="detail-meta">
            <div className="detail-meta__item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {p.location}
            </div>
            <div className="detail-meta__item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              {p.degree.join(' / ')}
            </div>
            <div className="detail-meta__item" style={{ color: 'var(--gray-600)' }}>
              {p.field}
            </div>
          </div>
        </div>

        {/* Body: description + requirements panel */}
        <div className="detail-body">

          <div className="detail-main">
            <p className="detail-description">{p.description}</p>

            <div className="detail-keywords">
              {p.keywords.map(k => (
                <span key={k} className="detail-keyword">{k}</span>
              ))}
            </div>

            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              Visit Official Program Website
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>

          {/* Requirements sidebar panel */}
          <div className="requirements-panel">
            <div className="req-panel-header">Admission Requirements</div>
            <div className="req-panel-body">
              <div className="req-row">
                <span className="req-row__label">Recommended GPA</span>
                <span className={`req-row__value ${gpaClass(p.gpa_recommended)}`}>
                  {p.gpa_recommended.toFixed(1)}
                </span>
              </div>
              <div className="req-row">
                <span className="req-row__label">Related Undergrad</span>
                <span className={`req-badge req-badge--${relatedClass(p.related_degree_required)}`}>
                  {relatedDegreeLabel(p.related_degree_required)}
                </span>
              </div>
              <div className="req-row">
                <span className="req-row__label">Portfolio</span>
                <span className={`req-badge req-badge--${p.portfolio_required !== false ? 'yes' : 'no'}`}>
                  {p.portfolio_required === 'writing_sample' ? 'Required (writing sample)' : p.portfolio_required ? 'Required' : 'Not required'}
                </span>
              </div>
              <div className="req-row">
                <span className="req-row__label">Personal Statement</span>
                <span className={`req-badge req-badge--${p.essay_required ? 'yes' : 'no'}`}>
                  {p.essay_required ? 'Required' : 'Not required'}
                </span>
              </div>
              <div className="req-row">
                <span className="req-row__label">Location</span>
                <span className="req-row__value" style={{ fontSize: '0.8125rem', fontWeight: 500 }}>
                  {p.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related programs */}
        {related.length > 0 && (
          <div className="related-programs">
            <h2 className="section-title">Related {p.field} Programs</h2>
            <div className="related-grid">
              {related.map(r => <RelatedCard key={r.id} p={r} />)}
            </div>
          </div>
        )}

        {/* Back link */}
        <div style={{ marginTop: '40px' }}>
          <Link href="/" className="visit-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to all programs
          </Link>
        </div>

      </div>
    </>
  )
}

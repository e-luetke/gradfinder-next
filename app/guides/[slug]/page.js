import Link from 'next/link'
import { notFound } from 'next/navigation'
import { GUIDES, getGuideBySlug } from '@/lib/guides'

export function generateStaticParams() {
  return GUIDES.map(g => ({ slug: g.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const g = getGuideBySlug(slug)
  if (!g) return {}
  return {
    title: g.title,
    description: g.description,
    openGraph: {
      title: g.title,
      description: g.description,
      type: 'article',
      publishedTime: g.publishDate,
    },
  }
}

export default async function GuidePage({ params }) {
  const { slug } = await params
  const g = getGuideBySlug(slug)
  if (!g) notFound()

  const currentIndex = GUIDES.findIndex(x => x.slug === slug)
  const prev = GUIDES[currentIndex - 1] ?? null
  const next = GUIDES[currentIndex + 1] ?? null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.title,
    description: g.description,
    datePublished: g.publishDate,
    publisher: {
      '@type': 'Organization',
      name: 'Another Degree Hotter',
      url: 'https://anotherdegreehotter.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="guide-wrapper">
        <div className="guide-container">

          {/* Breadcrumb */}
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb__sep">›</span>
            <Link href="/guides">Guides</Link>
            <span className="breadcrumb__sep">›</span>
            <span>{g.title}</span>
          </nav>

          {/* Article header */}
          <header className="guide-header">
            <h1 className="guide-title">{g.title}</h1>
            <div className="guide-meta">
              <span>{g.readingMinutes} min read</span>
              <span className="guide-meta__sep">·</span>
              <span>Graduate School Guides</span>
            </div>
          </header>

          {/* Article body */}
          <article className="guide-body">
            {g.sections.map((section, i) => (
              <section key={i} className="guide-section">
                {section.heading && (
                  <h2 className="guide-section__heading">{section.heading}</h2>
                )}
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="guide-section__para">{para}</p>
                ))}
              </section>
            ))}
          </article>

          {/* Prev / Next navigation */}
          <nav className="guide-nav" aria-label="Guide navigation">
            {prev ? (
              <Link href={`/guides/${prev.slug}`} className="guide-nav__link guide-nav__link--prev">
                <span className="guide-nav__dir">← Previous</span>
                <span className="guide-nav__label">{prev.title}</span>
              </Link>
            ) : <div />}
            {next && (
              <Link href={`/guides/${next.slug}`} className="guide-nav__link guide-nav__link--next">
                <span className="guide-nav__dir">Next →</span>
                <span className="guide-nav__label">{next.title}</span>
              </Link>
            )}
          </nav>

          {/* Back to search CTA */}
          <div className="guide-cta">
            <p>Ready to find your program?</p>
            <Link href="/" className="cta-btn">
              Browse Graduate Programs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

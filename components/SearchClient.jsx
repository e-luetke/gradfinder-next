'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

// ── Scoring ───────────────────────────────────────────────────────────────

function tokenize(str) {
  return str.toLowerCase().trim().split(/\s+/).filter(Boolean)
}

function score(program, tokens) {
  if (!tokens.length) return 1
  let s = 0
  const name   = program.program.toLowerCase()
  const school = program.school.toLowerCase()
  const field  = program.field.toLowerCase()
  const desc   = program.description.toLowerCase()
  const phrase = tokens.join(' ')

  if (name.includes(phrase))  s += 12
  if (field.includes(phrase)) s += 10
  if (program.keywords.some(k => k.toLowerCase() === phrase))        s += 10
  if (program.keywords.some(k => k.toLowerCase().includes(phrase)))  s += 7
  if (school.includes(phrase)) s += 5

  for (const t of tokens) {
    if (field.includes(t))  s += 5
    if (name.includes(t))   s += 4
    if (program.keywords.some(k => k.toLowerCase().includes(t))) s += 3
    if (school.includes(t)) s += 2
    if (desc.includes(t))   s += 1
  }
  return s
}

// ── Helpers ───────────────────────────────────────────────────────────────

function gpaClass(gpa) {
  if (gpa <= 3.0) return 'gpa-accessible'
  if (gpa <= 3.3) return 'gpa-moderate'
  return 'gpa-selective'
}

function relatedLabel(val) {
  return { not_required: 'Not required', preferred: 'Preferred', required: 'Required' }[val] ?? val
}

function relatedClass(val) {
  return { not_required: 'no', preferred: 'preferred', required: 'yes' }[val] ?? 'no'
}

const QUICK_TERMS = [
  'Engineering', 'Nursing', 'Public Health', 'Data Science',
  'Computer Science', 'Psychology', 'Architecture', 'Economics',
  'Social Work', 'Education', 'Journalism', 'Fine Arts',
  'Sociology', 'Urban Planning', 'Geography', 'Environmental Policy',
  'Business', 'GIS',
]

// ── Card ──────────────────────────────────────────────────────────────────

function ProgramCard({ program, tokens }) {
  const shown = program.keywords.slice(0, 5)
  const extra = program.keywords.length - shown.length

  return (
    <Link href={`/programs/${program.slug}`} className="program-card">
      <div className="card-top">
        <span className="school-name">{program.school}</span>
        <div className="degree-badges">
          {program.degree.map(d => (
            <span key={d} className="badge-degree">{d}</span>
          ))}
        </div>
      </div>

      <h2 className="program-name">{program.program}</h2>

      <div className="card-location">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        {program.location}&ensp;
        <span className="country-chip">{program.country}</span>
      </div>

      <div className="keyword-tags">
        {shown.map(k => {
          const matched = tokens.length && tokens.some(t => k.toLowerCase().includes(t))
          return <span key={k} className={`keyword-tag${matched ? ' matched' : ''}`}>{k}</span>
        })}
        {extra > 0 && (
          <span className="keyword-tag" style={{ color: 'var(--gray-400)' }}>+{extra} more</span>
        )}
      </div>

      <div className="req-grid">
        <div className="req-item">
          <span className="req-label">Min. GPA</span>
          <span className={`req-value ${gpaClass(program.gpa_recommended)}`}>
            {program.gpa_recommended.toFixed(1)}
          </span>
        </div>
        <div className="req-item">
          <span className="req-label">Related Degree</span>
          <span className={`req-badge req-badge--${relatedClass(program.related_degree_required)}`}>
            {relatedLabel(program.related_degree_required)}
          </span>
        </div>
        <div className="req-item">
          <span className="req-label">Portfolio</span>
          <span className={`req-badge req-badge--${program.portfolio_required !== false ? 'yes' : 'no'}`}>
            {program.portfolio_required === 'writing_sample' ? 'Required (writing sample)' : program.portfolio_required ? 'Required' : 'Not required'}
          </span>
        </div>
        <div className="req-item">
          <span className="req-label">Statement</span>
          <span className={`req-badge req-badge--${program.essay_required ? 'yes' : 'no'}`}>
            {program.essay_required ? 'Required' : 'Not required'}
          </span>
        </div>
      </div>

      <div className="card-footer">
        <span className="visit-link">
          View program details
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </span>
      </div>
    </Link>
  )
}

// ── Main component ────────────────────────────────────────────────────────

export default function SearchClient({ programs }) {
  const [query,     setQuery]     = useState('')
  const [gpa,       setGpa]       = useState(4.0)
  const [country,   setCountry]   = useState('any')
  const [degree,    setDegree]    = useState('any')
  const [portfolio, setPortfolio] = useState('any')
  const [essay,     setEssay]     = useState('any')
  const [sort,      setSort]      = useState('relevance')
  const [activeTag, setActiveTag] = useState('')

  const tokens = useMemo(() => tokenize(query), [query])

  const results = useMemo(() => {
    let list = programs.map(p => ({ program: p, s: score(p, tokens) }))
    if (tokens.length) list = list.filter(r => r.s > 0)
    if (gpa < 4.0) list = list.filter(r => r.program.gpa_recommended <= gpa)
    if (country !== 'any') list = list.filter(r => r.program.country === country)
    if (degree === 'open')     list = list.filter(r => r.program.related_degree_required === 'not_required')
    if (degree === 'flexible') list = list.filter(r => r.program.related_degree_required !== 'required')
    if (degree === 'required') list = list.filter(r => r.program.related_degree_required === 'required')
    if (portfolio === 'true')  list = list.filter(r => r.program.portfolio_required !== false)
    if (portfolio === 'false') list = list.filter(r => r.program.portfolio_required === false)
    if (essay === 'true')      list = list.filter(r => r.program.essay_required)
    if (essay === 'false')     list = list.filter(r => !r.program.essay_required)

    list.sort((a, b) => {
      if (sort === 'relevance')  return b.s - a.s
      if (sort === 'school_asc') return a.program.school.localeCompare(b.program.school)
      if (sort === 'gpa_asc')    return a.program.gpa_recommended - b.program.gpa_recommended
      if (sort === 'gpa_desc')   return b.program.gpa_recommended - a.program.gpa_recommended
      return 0
    })
    return list
  }, [programs, tokens, gpa, country, degree, portfolio, essay, sort])

  function handleTagClick(term) {
    if (activeTag === term) {
      setQuery(''); setActiveTag('')
    } else {
      setQuery(term); setActiveTag(term)
    }
  }

  function handleQueryChange(e) {
    setQuery(e.target.value)
    setActiveTag(QUICK_TERMS.find(t => t.toLowerCase() === e.target.value.toLowerCase()) ?? '')
  }

  function reset() {
    setQuery(''); setGpa(4.0); setCountry('any'); setDegree('any')
    setPortfolio('any'); setEssay('any'); setSort('relevance'); setActiveTag('')
  }

  const countText = query
    ? `${results.length} program${results.length !== 1 ? 's' : ''} matching "${query}"`
    : results.length === programs.length
      ? `All ${programs.length} programs`
      : `${results.length} of ${programs.length} programs`

  return (
    <>
      {/* Search hero */}
      <div className="search-hero">
        <div className="search-hero__inner">
          <div className="search-box">
            <svg className="search-box__icon" xmlns="http://www.w3.org/2000/svg"
              width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="search"
              className="search-box__input"
              value={query}
              onChange={handleQueryChange}
              placeholder="Search by field, program, or school"
              autoComplete="off"
              spellCheck="false"
            />
            {query && (
              <button className="search-box__clear" onClick={() => { setQuery(''); setActiveTag('') }}>
                ✕
              </button>
            )}
          </div>
          <div className="quick-tags">
            <span className="quick-tags__label">Quick search:</span>
            {QUICK_TERMS.map(term => (
              <button
                key={term}
                className={`quick-tag${activeTag === term ? ' active' : ''}`}
                onClick={() => handleTagClick(term)}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="main-layout">

        {/* Filters */}
        <aside className="filters-sidebar">
          <div className="filters-header">
            <h2 className="filters-title">Filters</h2>
            <button className="reset-btn" onClick={reset}>Reset all</button>
          </div>

          {/* GPA */}
          <div className="filter-block">
            <label className="filter-label" htmlFor="gpa-slider">
              GPA Requirement
              <span className="filter-hint">Show programs requiring at most:</span>
            </label>
            <div className="gpa-slider-row">
              <span className="gpa-bound">2.5</span>
              <input id="gpa-slider" type="range" min="2.5" max="4.0" step="0.1"
                value={gpa}
                onChange={e => setGpa(parseFloat(e.target.value))}
              />
              <span className="gpa-bound">4.0</span>
            </div>
            <div className="gpa-display">
              {gpa >= 4.0 ? 'Any GPA' : `≤ ${gpa.toFixed(1)}`}
            </div>
          </div>

          {/* Country */}
          <div className="filter-block">
            <span className="filter-label">Country</span>
            <div className="radio-group">
              {[
                { value: 'any', label: 'US & Canada' },
                { value: 'US',  label: 'United States only' },
                { value: 'CA',  label: 'Canada only' },
              ].map(opt => (
                <label key={opt.value} className="radio-label">
                  <input type="radio" name="country" value={opt.value}
                    checked={country === opt.value}
                    onChange={() => setCountry(opt.value)}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Related degree */}
          <div className="filter-block">
            <label className="filter-label" htmlFor="degree-filter">
              Undergrad Background
              <span className="filter-hint">Related degree requirement</span>
            </label>
            <select id="degree-filter" className="filter-select"
              value={degree} onChange={e => setDegree(e.target.value)}>
              <option value="any">Any</option>
              <option value="open">Not required (open to all)</option>
              <option value="flexible">Not required or preferred</option>
              <option value="required">Strictly required</option>
            </select>
          </div>

          {/* Portfolio */}
          <div className="filter-block">
            <label className="filter-label" htmlFor="portfolio-filter">Portfolio</label>
            <select id="portfolio-filter" className="filter-select"
              value={portfolio} onChange={e => setPortfolio(e.target.value)}>
              <option value="any">Any</option>
              <option value="false">Not required</option>
              <option value="true">Required</option>
            </select>
          </div>

          {/* Essay */}
          <div className="filter-block">
            <label className="filter-label" htmlFor="essay-filter">Personal Statement</label>
            <select id="essay-filter" className="filter-select"
              value={essay} onChange={e => setEssay(e.target.value)}>
              <option value="any">Any</option>
              <option value="true">Required</option>
              <option value="false">Not required</option>
            </select>
          </div>

          <div className="filter-block filter-block--stat">
            Showing <strong>{results.length}</strong> of <strong>{programs.length}</strong> programs
          </div>
        </aside>

        {/* Results */}
        <main>
          <div className="results-toolbar">
            <span className="results-count">{countText}</span>
            <div className="sort-control">
              <label htmlFor="sort-select">Sort:</label>
              <select id="sort-select" className="sort-select"
                value={sort} onChange={e => setSort(e.target.value)}>
                <option value="relevance">Best match</option>
                <option value="school_asc">School A–Z</option>
                <option value="gpa_asc">GPA req. ↑</option>
                <option value="gpa_desc">GPA req. ↓</option>
              </select>
            </div>
          </div>

          {results.length > 0 ? (
            <div className="results-grid">
              {results.map(r => (
                <ProgramCard key={r.program.id} program={r.program} tokens={tokens} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <span className="no-results__icon">🔍</span>
              <p>No programs match your search.</p>
              <p className="no-results__hint">Try broader keywords or reset your filters.</p>
              <button className="reset-btn" onClick={reset}>Reset filters</button>
            </div>
          )}
        </main>
      </div>
    </>
  )
}

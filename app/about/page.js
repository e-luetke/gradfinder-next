import Link from 'next/link'

export const metadata = {
  title: 'About',
  description: 'Another Degree Hotter is a free graduate program directory covering 333 programs across 26 fields at US and Canadian universities.',
}

export default function AboutPage() {
  return (
    <div className="guide-wrapper">
      <div className="guide-container">

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb__sep">›</span>
          <span>About</span>
        </nav>

        <header className="guide-header">
          <h1 className="guide-title">About Another Degree Hotter</h1>
        </header>

        <article className="guide-body">

          <section className="guide-section">
            <p className="guide-section__para">
              Another Degree Hotter is a free graduate program directory covering more than 330 programs
              across 26 fields at universities in the United States and Canada. It is built
              for prospective graduate students who want to quickly filter programs by
              minimum GPA, portfolio requirement, personal statement requirement, and
              degree type — without wading through dozens of individual university
              admissions pages.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Why We Built This</h2>
            <p className="guide-section__para">
              Searching for graduate programs is genuinely tedious. Requirements like GPA
              recommendations and portfolio expectations are often buried deep inside
              admissions FAQs, scattered across multiple pages, or updated mid-cycle.
              Another Degree Hotter aggregates the most commonly searched attributes into one
              searchable, filterable list.
            </p>
            <p className="guide-section__para">
              Every listing links directly to the official program admissions page at the
              university, because that is always the authoritative source. Another Degree Hotter is a
              starting point for research, not a substitute for reading the actual
              admissions requirements.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">How Program Data Is Compiled</h2>
            <p className="guide-section__para">
              Program information is collected manually from publicly available university
              admissions pages, program handbooks, and graduate school catalogs. The data
              reviewed for each entry includes the official program page, any stated GPA
              minimums or recommendations, degree names, application requirements (portfolio,
              personal statement), and country of the institution.
            </p>
            <p className="guide-section__para">
              Factual information about publicly available graduate programs — including
              degree names, institutional affiliations, and admission requirements — is not
              copyrightable under{' '}
              <em>Feist Publications, Inc. v. Rural Telephone Service Co.</em>, 499 U.S. 340
              (1991). University and program names are used for identification and indexing
              under the nominative fair use doctrine.
            </p>
            <p className="guide-section__para">
              GPA figures are often ranges or minimums stated by programs as recommendations,
              not guarantees. A listed GPA of 3.5 does not mean you will or will not be
              admitted with a 3.4 — it reflects what the program publicly describes as
              typical or recommended. Always verify current requirements directly with
              each program before applying.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Data Currency</h2>
            <p className="guide-section__para">
              Program requirements change. Deadlines change. Programs open, close, and
              restructure. The data in Another Degree Hotter is reviewed periodically, but there will
              always be a lag. The "Data reviewed 2025" note in the footer is the baseline;
              we aim to refresh the dataset annually. If you find an error or an outdated
              entry, please let us know using the contact address below.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Fields Covered</h2>
            <p className="guide-section__para">
              Another Degree Hotter currently covers the following 26 fields: Geography, Environmental
              Management, Environmental Policy, Urban Planning, Public Policy, Landscape
              Architecture, Climate Studies, Sustainability Science, Geographic Information
              Science, Conservation Biology, International Affairs, Business Administration,
              Computer Science, Data Science, Public Health, Social Work, Education,
              Engineering, Psychology, Architecture, Library &amp; Information Science,
              Economics, Communications &amp; Journalism, Nursing, Sociology, and Fine Arts.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Contact</h2>
            <p className="guide-section__para">
              For corrections, questions, or partnership inquiries, email us at{' '}
              <a href="mailto:contact@anotherdegreehotter.com">contact@anotherdegreehotter.com</a>.
            </p>
            <p className="guide-section__para">
              Response time is typically 2–5 business days. We welcome corrections to
              program data, suggestions for programs to add, and feedback on the site.
            </p>
          </section>

        </article>

        <div className="legal-footer-links">
          <Link href="/privacy">Privacy Policy</Link>
          <span>·</span>
          <Link href="/tos">Terms of Service</Link>
        </div>

      </div>
    </div>
  )
}

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
              degree type, without the hassle of looking at page, after page, after page…
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Why We Built This</h2>
            <p className="guide-section__para">
              In short, university websites are poorly designed. We want to prevent the struggle
              of getting redirected countless times on your way to figuring out if a program fits
              your academic goals. Another Degree Hotter aggregates the most commonly searched
              attributes into a single searchable and filterable list.
            </p>
            <p className="guide-section__para">
              In the end, though, you might need to take the dive into a university portal or two
              (just not a dozen). Every graduate program listed includes a link to the official
              program admissions page at the university, because that is always the authoritative
              source. If you're really keen on a program after learning about it here, we encourage
              you to check it out further on the school's own terms.
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
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Data Currency</h2>
            <p className="guide-section__para">
              Program requirements change over time! The data in Another Degree Hotter is reviewed
              periodically, but there will always be a lag between real-world changes and updates
              on the site. The "Data reviewed 2025" note in the footer is the baseline; we aim to
              refresh the dataset regularly. If you find an error or an outdated entry, please let
              us know using the contact address below.
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
              We want to hear from you! But actually, we do. For corrections to program data,
              suggestions for programs to add, site feedback, questions, or partnership inquiries,
              email us at{' '}
              <a href="mailto:contact@anotherdegreehotter.com">contact@anotherdegreehotter.com</a>.
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

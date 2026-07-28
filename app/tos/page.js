import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms governing your use of Another Degree Hotter, a graduate program directory for the US and Canada.',
}

export default function TosPage() {
  return (
    <div className="guide-wrapper">
      <div className="guide-container">

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb__sep">›</span>
          <span>Terms of Service</span>
        </nav>

        <header className="guide-header">
          <h1 className="guide-title">Terms of Service</h1>
          <div className="guide-meta">
            <span>Effective July 15, 2026</span>
          </div>
        </header>

        <article className="guide-body">

          <section className="guide-section">
            <p className="guide-section__para">
              These Terms of Service ("Terms") govern your use of the Another Degree Hotter website
              at anotherdegreehotter.com (the "Site"). By accessing or using the Site you agree to
              these Terms. If you do not agree, please do not use the Site.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">What Another Degree Hotter Is</h2>
            <p className="guide-section__para">
              Another Degree Hotter is a free, publicly accessible directory of graduate programs at
              universities in the United States and Canada. It is intended to help
              prospective students explore and compare programs. It is not affiliated with,
              endorsed by, or operated by any university or graduate program listed on
              the Site.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Accuracy of Program Information</h2>
            <p className="guide-section__para">
              The program data on this Site — including GPA recommendations, portfolio
              requirements, essay requirements, and degree names — is compiled from
              publicly available sources and is provided for informational purposes only.
              Graduate program requirements change frequently, and there may be a lag
              between changes made by a program and updates reflected on this Site.
            </p>
            <p className="guide-section__para">
              <strong>
                Always verify current requirements directly with each program before
                applying.
              </strong>{' '}
              Another Degree Hotter is not responsible for any application decisions, outcomes, or
              losses arising from reliance on information found on this Site.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Permitted Use</h2>
            <p className="guide-section__para">
              You may use the Site for personal, non-commercial research and informational
              purposes. You may not: scrape or systematically download the Site's content
              using automated tools; reproduce the Site's compiled program data for
              commercial purposes without permission; or use the Site in any way that
              violates applicable law.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Intellectual Property</h2>
            <p className="guide-section__para">
              The design, code, written content (including guide articles), and selection
              and arrangement of program information on this Site are the property of
              Another Degree Hotter and are protected by copyright. University names, program names,
              and degree titles belong to their respective institutions and are used here
              for identification and informational purposes under the nominative fair use
              doctrine established in trademark law.
            </p>
            <p className="guide-section__para">
              Factual data such as GPA thresholds and program locations are facts, not
              copyrightable expression, consistent with{' '}
              <em>Feist Publications, Inc. v. Rural Telephone Service Co.</em>, 499 U.S.
              340 (1991).
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Third-Party Links</h2>
            <p className="guide-section__para">
              The Site links to official program pages at universities and colleges.
              We do not control those sites and are not responsible for their content,
              accuracy, or availability. Linking to a program does not constitute an
              endorsement of that program.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Advertising</h2>
            <p className="guide-section__para">
              The Site may display advertisements served by Google AdSense and other
              third-party advertising networks. These advertisements are clearly
              distinguishable from Site content. Another Degree Hotter does not control the content
              of third-party advertisements.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Disclaimer of Warranties</h2>
            <p className="guide-section__para">
              THE SITE AND ITS CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE
              WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL
              COMPONENTS.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Limitation of Liability</h2>
            <p className="guide-section__para">
              TO THE FULLEST EXTENT PERMITTED BY LAW, ANOTHER DEGREE HOTTER AND ITS OPERATORS SHALL
              NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES ARISING FROM YOUR USE OF, OR INABILITY TO USE, THE SITE
              OR ITS CONTENT, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Changes to These Terms</h2>
            <p className="guide-section__para">
              We may update these Terms from time to time. We will post the revised Terms
              on this page with an updated effective date. Continued use of the Site after
              changes are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Governing Law</h2>
            <p className="guide-section__para">
              These Terms are governed by the laws of Canada and the Province of Alberta,
              without regard to conflict of law principles.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Contact</h2>
            <p className="guide-section__para">
              Questions about these Terms? Email us at{' '}
              <a href="mailto:contact@anotherdegreehotter.com">contact@anotherdegreehotter.com</a>.
            </p>
          </section>

        </article>

        <div className="legal-footer-links">
          <Link href="/privacy">Privacy Policy</Link>
          <span>·</span>
          <Link href="/about">About</Link>
        </div>

      </div>
    </div>
  )
}

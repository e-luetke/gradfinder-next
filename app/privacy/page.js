import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Another Degree Hotter handles information about visitors to this site, including advertising cookies and third-party services.',
}

export default function PrivacyPage() {
  return (
    <div className="guide-wrapper">
      <div className="guide-container">

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb__sep">›</span>
          <span>Privacy Policy</span>
        </nav>

        <header className="guide-header">
          <h1 className="guide-title">Privacy Policy</h1>
          <div className="guide-meta">
            <span>Effective July 15, 2026</span>
          </div>
        </header>

        <article className="guide-body">

          <section className="guide-section">
            <p className="guide-section__para">
              Another Degree Hotter ("we," "us," or "our") operates the website at anotherdegreehotter.com
              (the "Site"). This Privacy Policy describes what information is collected when
              you visit the Site, how it is used, and what choices you have. By using the
              Site you agree to the practices described here.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Information We Collect</h2>
            <p className="guide-section__para">
              <strong>Information you give us.</strong> The Site does not require you to
              create an account or submit any personal information. If you contact us by
              email, we receive your email address and the contents of your message.
            </p>
            <p className="guide-section__para">
              <strong>Usage data.</strong> Like most websites, our servers and third-party
              analytics services automatically collect standard log data when you visit,
              including your IP address, browser type, operating system, referring URL,
              pages viewed, and the date and time of your visit. This data is used in
              aggregate to understand how visitors use the Site and to improve it.
            </p>
            <p className="guide-section__para">
              <strong>Cookies and similar technologies.</strong> The Site uses cookies — small
              text files stored on your device — to enable advertising and analytics features
              described below. You can control cookies through your browser settings, but
              disabling them may affect Site functionality.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Google AdSense and Advertising</h2>
            <p className="guide-section__para">
              The Site uses Google AdSense to display advertisements. Google AdSense uses
              cookies, including the DoubleClick cookie, to serve ads based on your prior
              visits to this Site and other sites on the internet. These cookies allow Google
              and its partners to serve ads to you based on your visit to this Site and/or
              other sites on the Internet.
            </p>
            <p className="guide-section__para">
              You may opt out of personalized advertising by visiting{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                Google Ads Settings
              </a>{' '}
              or{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
                aboutads.info
              </a>. You can also opt out of a third-party vendor's use of cookies for
              personalized advertising by visiting{' '}
              <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer">
                networkadvertising.org
              </a>.
            </p>
            <p className="guide-section__para">
              Google's use of advertising cookies is governed by Google's own Privacy Policy,
              which you can review at{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                policies.google.com/privacy
              </a>.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Google Analytics</h2>
            <p className="guide-section__para">
              We use Google Analytics to understand how visitors interact with the Site.
              Google Analytics collects data such as pages visited, time on site, and
              general geographic location (country/region level). This data is processed
              by Google and is subject to{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google's Privacy Policy
              </a>.
              IP addresses are anonymized before storage. We do not combine analytics data
              with personally identifiable information.
            </p>
            <p className="guide-section__para">
              You can opt out of Google Analytics tracking by installing the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">How We Use Information</h2>
            <p className="guide-section__para">
              We use collected information to operate and improve the Site, to understand
              aggregate traffic patterns, to serve relevant advertising through Google
              AdSense, to respond to emails you send us, and to comply with legal
              obligations. We do not sell personal information to third parties.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Third-Party Links</h2>
            <p className="guide-section__para">
              Every program listing on the Site links to an official university or program
              admissions page. We are not responsible for the privacy practices of those
              external sites. We encourage you to review the privacy policy of any site
              you visit.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Children's Privacy</h2>
            <p className="guide-section__para">
              The Site is not directed to children under the age of 13. We do not knowingly
              collect personal information from children. If you believe a child has
              provided us with personal information, please contact us and we will delete it.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">California Residents (CCPA)</h2>
            <p className="guide-section__para">
              If you are a California resident, you have the right to know what personal
              information we collect about you, the right to request deletion of that
              information, and the right to opt out of the sale of personal information.
              We do not sell personal information. To exercise your rights, contact us at
              the address below.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">International Visitors</h2>
            <p className="guide-section__para">
              The Site is operated in the United States. If you are located in the
              European Economic Area (EEA) or elsewhere outside the US, your information
              may be transferred to and processed in the US. By using the Site you consent
              to this transfer. Where required by law we rely on legitimate interest as
              the legal basis for processing data collected through analytics and
              advertising.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Changes to This Policy</h2>
            <p className="guide-section__para">
              We may update this Privacy Policy from time to time. We will post the revised
              policy on this page with an updated effective date. Continued use of the Site
              after changes are posted constitutes acceptance of the revised policy.
            </p>
          </section>

          <section className="guide-section">
            <h2 className="guide-section__heading">Contact</h2>
            <p className="guide-section__para">
              Questions about this Privacy Policy? Email us at{' '}
              <a href="mailto:contact@anotherdegreehotter.com">contact@anotherdegreehotter.com</a>.
            </p>
          </section>

        </article>

        <div className="legal-footer-links">
          <Link href="/tos">Terms of Service</Link>
          <span>·</span>
          <Link href="/about">About</Link>
        </div>

      </div>
    </div>
  )
}

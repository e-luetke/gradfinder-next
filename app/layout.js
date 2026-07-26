import './globals.css'
import Link from 'next/link'
import { PROGRAMS } from '@/lib/programs'

export const metadata = {
  metadataBase: new URL('https://anotherdegreehotter.com'),
  title: {
    default: 'Another Degree Hotter — Graduate Program Browser for the US & Canada',
    template: '%s | Another Degree Hotter',
  },
  description:
    'Browse and filter graduate programs across the US and Canada. Search by field, filter by GPA requirement, portfolio, and personal statement requirements.',
  openGraph: {
    siteName: 'Another Degree Hotter',
    type: 'website',
  },
  verification: {
    google: 'uC9WxrPOseSxM4eIOlfxqSZBDC0jnunb6kvsa1f1Hg4',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="site-header__inner">
            <Link href="/" className="logo">
              Another Degree Hotter
            </Link>
            <p className="site-header__tagline">
              Graduate program browser — US &amp; Canada
            </p>
            <nav style={{ marginLeft: 'auto' }}>
              <Link href="/guides" className="header-nav-link">Guides</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="site-footer__inner">
            <p>
              Another Degree Hotter aggregates publicly available information from graduate program
              websites. GPA recommendations and application requirements are based on
              available program data and may change.{' '}
              <strong>Always verify requirements directly with each program before applying.</strong>
            </p>
            <p className="footer-meta">
              Listing <strong>{PROGRAMS.length}</strong> programs across the US and Canada
              &nbsp;·&nbsp; Data reviewed 2025
            </p>
            <p className="footer-legal-links">
              <Link href="/about">About</Link>
              <span className="footer-legal-sep">·</span>
              <Link href="/privacy">Privacy Policy</Link>
              <span className="footer-legal-sep">·</span>
              <Link href="/tos">Terms of Service</Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}

import { PROGRAMS } from '@/lib/programs'
import SearchClient from '@/components/SearchClient'

export const metadata = {
  title: 'Another Degree Hotter — Search Graduate Programs in the US & Canada',
  description:
    'Browse and filter graduate programs across the US and Canada by field, GPA requirement, portfolio requirement, and personal statement. Search geography, environmental policy, urban planning, GIS, public policy, and more.',
}

export default function HomePage() {
  // Programs are passed to the client component as a serialized prop.
  // Next.js pre-renders the full SearchClient HTML on the server, so
  // all 58+ programs are visible to search engine crawlers on first load.
  return <SearchClient programs={PROGRAMS} />
}

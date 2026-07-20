# GradFinder — Claude Code Context

## What this project is
A Next.js graduate school program browser for US and Canadian programs. Users search by keyword, filter by GPA, undergrad requirement, portfolio, and essay. The eventual goal is to host on Vercel with Google AdSense revenue. **The site must NOT be deployed until the user explicitly instructs it.**

## Tech stack
- Next.js (App Router, v16.2.9) + React 19
- No database — all data is in `lib/programs.js` as a plain JS array
- Static site generation: `generateStaticParams` builds one HTML file per program at `/programs/[slug]`
- `generateMetadata` + Schema.org JSON-LD on each program page for SEO
- Dev server runs on port 3457 (`npm run dev` or `./dev.sh`)

## Critical environment notes
- Node.js is installed via Homebrew at `/opt/homebrew/bin/node` — NOT on the default Bash tool PATH
- Always prefix shell commands with: `eval "$(/opt/homebrew/bin/brew shellenv)"` before running npm
- Or use the wrapper script: `./dev.sh` (handles PATH automatically)
- The `@/` import alias requires `jsconfig.json` — it exists, do not delete it

## Project structure
```
gradfinder-next/
├── app/
│   ├── layout.js          # root layout, sticky header, footer, global metadata
│   ├── page.js            # homepage — imports SearchClient
│   ├── globals.css        # all CSS, custom properties, responsive breakpoints
│   └── programs/[slug]/
│       └── page.js        # individual program page (SSG)
├── components/
│   └── SearchClient.jsx   # 'use client' — all search/filter/scoring logic
├── lib/
│   └── programs.js        # ALL program data + utility functions
├── PROGRAM_TARGETS.md     # per-program checklist (check off as entries are written)
├── dev.sh                 # wrapper script for dev server (handles Homebrew PATH)
├── jsconfig.json          # CRITICAL — defines @/ alias, do not delete
└── package.json
```

## Data layer (`lib/programs.js`)
Program schema:
```js
{
  id,           // integer, increment from last
  school,       // e.g. "University of Toronto"
  program,      // e.g. "Master of Public Health"
  degree,       // array, e.g. ["MPH"] or ["MS", "PhD"]
  field,        // must match an existing field string exactly (case-sensitive)
  keywords,     // array of strings for search scoring
  location,     // e.g. "Toronto, ON"
  country,      // "US" or "CA"
  gpa_recommended,           // float, e.g. 3.5
  related_degree_required,   // 'not_required' | 'preferred' | 'required'
  portfolio_required,        // boolean
  essay_required,            // boolean
  url,          // official program admissions page
  description,  // 1-2 sentence description for program page
}
```

Slugs are auto-computed from `school + field + degree[0]` — do not add a `slug` field manually.

Existing field strings (must use exactly):
- Geography, Environmental Management, Environmental Policy, Urban Planning, Public Policy
- Landscape Architecture, Climate Studies, Sustainability Science, Geographic Information Science
- Conservation Biology, International Affairs
- Business Administration, Computer Science
- Data Science, Public Health
- Social Work, Education
- Engineering, Psychology
- Architecture, Library & Information Science
- Economics, Communications & Journalism, Nursing, Sociology, Fine Arts
- (add new ones as new fields are written)

## Current dataset status
- **333 programs total** as of end of Day 8 — DATA ENTRY COMPLETE
- IDs 1–58: original 11 fields (Geography, Environmental, Urban, Policy, etc.)
- IDs 59–78: Business Administration (MBA) — 20 programs
- IDs 79–98: Computer Science — 20 programs
- IDs 99–117: Data Science — 19 programs
- IDs 118–135: Public Health — 18 programs
- IDs 136–153: Social Work — 18 programs
- IDs 154–171: Education — 18 programs
- IDs 172–189: Engineering — 18 programs
- IDs 190–207: Psychology — 18 programs
- IDs 208–225: Architecture — 18 programs
- IDs 226–243: Library & Information Science — 18 programs
- IDs 244–261: Economics — 18 programs
- IDs 262–279: Communications & Journalism — 18 programs
- IDs 280–297: Nursing — 18 programs
- IDs 298–315: Sociology — 18 programs
- IDs 316–333: Fine Arts (MFA) — 18 programs
- Next ID to use: **334**

## 14-day plan — current position: start of Day 10

### Days 3–8: Data entry (target ~333 programs total) ✓ COMPLETE
- [x] Day 3: MBA (20) + Computer Science (20) → IDs 59–98 ✓
- [x] Day 4: Data Science (19) + Public Health (18) → IDs 99–135 ✓
- [x] Day 5: Social Work (18) + Education (18) → IDs 136–171 ✓
- [x] Day 6: Engineering (18) + Psychology (18) → IDs 172–207 ✓
- [x] Day 7: Architecture (18) + Library & Information Science (18) → IDs 208–243 ✓
- [x] Day 8: Economics (18) + Comms & Journalism (18) + Nursing (18) + Sociology (18) + Fine Arts (18) → IDs 244–333 ✓
- [ ] Day 8 (QA): spot-check ~10% of entries against live admissions pages

See `PROGRAM_TARGETS.md` for the exact school list per field.

### Days 6–10: Content/guide pages ✓ COMPLETE
- [x] 10 guide articles at `/guides/[slug]` with SSG, metadata, JSON-LD, prev/next nav ✓
- [x] Guides index at `/guides` ✓
- [x] Build: 347 static pages total (3 base + 333 programs + 10 guides + 1 index) ✓

### Days 9–11: Infrastructure (do NOT deploy until user says so)
- Private GitHub repo → push code
- Purchase domain (user decides name; `metadataBase` in `app/layout.js` must be updated to match)
- Vercel deployment + DNS
- [x] Privacy Policy at `/privacy` ✓
- [x] Terms of Service at `/tos` ✓
- [x] About/Contact at `/about` ✓
- [x] Footer links to Privacy, ToS, About on every page ✓
- [x] Build: 350 static pages total ✓
- [ ] contact@gradfinder.app email — set up once domain is purchased (see options below)
- Google Search Console verification
- Analytics setup

### Days 11–14: AdSense
- Apply for Google AdSense
- Add `ads.txt` to project root
- Mobile/speed QA pass
- API keys and secrets must NEVER be committed to git — use Vercel environment variables

## Key facts for new sessions
- The original static prototype lives at `/Users/rossmoser/gradfinder/` (58 programs, plain HTML/JS) — kept for reference only, not the active project
- `metadataBase` in `app/layout.js` is currently set to `https://gradfinder.app` — update this once real domain is purchased
- Slug uniqueness: school + field + degree[0] is unique across all current data; verify for any school with multiple programs in same field
- `related_degree_required` values: `'not_required'`, `'preferred'`, `'required'` (strings, not booleans)
- GPA range on the filter slider: 2.5–4.0
- Legal basis for directory: Feist Publications v. Rural Telephone Service (1991) — facts not copyrightable; nominative trademark fair use covers using university names
- AdSense requires: Privacy Policy, ToS, About/Contact pages, ads.txt, sufficient original content (~333 programs + 10 guide pages meets this bar)

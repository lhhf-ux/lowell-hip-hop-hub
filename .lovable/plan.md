# Lowell Hip-Hop Festival — Static Marketing Site

A nine-page, poster-style site. No backend, no database, no logins. Every ticket, donation, and form link points somewhere external. All content lives in one editable file.

## Waiting on you

- The three logo files (horizontal wordmark, circular badge, app icon) — re-upload and I'll wire them in.
- The real festival schedule, artist list, and ticket links — paste them and I'll load them into the content file.

Until those arrive I'll build the structure with clearly marked stand-in entries (except the two named acts), and swap in the real material as soon as you send it. Donation button uses the GLCF link you gave.

## Look and feel

- Black background throughout, gold as the primary accent and default button color, red and blue as flat full-saturation section blocks, gray for dimmed states, off-white body text. Dark gray only for card surfaces. No other colors.
- Headings in DM Serif Display (mixed case, tight tracking, regular weight). Eyebrows, nav, buttons, labels in Oswald, all caps, wide spacing. Paragraphs in Inter, 16px minimum on phones.
- Bungee is loaded and registered as `display-alt` but deliberately applied to nothing.
- Square corners, heavy rules, blocky dividers, a subtle screen-print grain over dark sections. No shadows, glows, gradients, or rounding — including on the logos and the app icon.
- Built phone-first.

## Pages

- **Home** — full-bleed hero with the wordmark, Oct 10–18 2026 dates, and a Get Tickets button; highlights strip for the Kick-off Concert ("Legends & Luminaries with The Jungle Brothers and Termanology") and the Dance Jam Finale ("Breaking, Battles & Boogie"); mission blurb; next three upcoming events; sponsor row.
- **Lineup** — artist cards in two groups, Headliners and Support: name, styled placeholder block with initials, short bio.
- **Festival Schedule** — chronological festival events, Oct 10–18, with date, time, title, venue, ticket link.
- **Calendar** — static month grid, Sunday–Saturday, prev/next across 2026 and 2027, built from plain date math. Festival days marked gold, community days blue, empty days dimmed; marked days show the title and link to the matching schedule entry. On phones it collapses to a vertical agenda grouped by month.
- **Events** — year-round community events, upcoming first, with a past-events toggle.
- **Venues** — Taffeta Music Hall, Warp & Weft, The Hive, Tescobar, GEN Studio at Western Ave Studios; address plus short description.
- **Sponsors** — the five tiers (Title $10K+, Premier $5K+, Gold $2.5K, Silver $1K, Community $500), what each includes, contact button.
- **Get Involved** — Volunteer and Donate as two equal-weight sections. Volunteer covers street team and flyering, setup and breakdown, day-of support, and year-round tabling, with a button to the Google Form (new tab). Donate explains the fiscal sponsorship, links to the GLCF donation page, and notes contributions are tax-deductible through the Greater Lowell Community Foundation.
- **About** — organization story and mission.

Footer on every page, verbatim: "The Lowell Hip-Hop Festival operates under the fiscal sponsorship of the Greater Lowell Community Foundation, a 501(c)(3) public charity."

## Technical notes

- `src/content.ts` — single source of truth: one `events` array (`id`, `date`, optional `endDate`, `time`, `title`, `venue`, `description`, optional `ticketUrl`, `category` of `festival | community | internal`), plus exported `artists`, `venues`, `sponsorTiers`.
- `src/lib/events.ts` — exports `getPublicEvents()`, excluding `internal`. Every page and component reads dated data only through it; nothing public imports `events` directly. Single filtering chokepoint.
- `src/internal-content.ts` — empty `internalEvents` array, same type, commented as reserved for a future gated team portal. Not imported by any public route.
- `<EventCalendar events={...} />` — renders whatever array it receives; no knowledge of categories or of the content file. Date math is hand-rolled; no calendar or date-picker library.
- Routes are file-based under `src/routes` with shared header/nav/footer in the root layout, so new routes drop in without touching page components.
- Fonts loaded via a `<link>` in the root head; brand colors, fonts (including `display-alt`), and radius-zero registered as design tokens in `src/styles.css`.
- Favicon and apple-touch-icon use the supplied app icon as-is.
- Per-page titles, descriptions, and social tags.

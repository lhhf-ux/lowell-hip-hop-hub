# Lowell Hip-Hop Festival — Static Marketing Site

A nine-page, poster-style site. No backend, no database, no logins. Every ticket, donation, and form link points somewhere external. All content lives in one editable file.

## Waiting on you

- Ticket links for any event other than the Oct 10 kick-off (none — only Oct 10 is ticketed).

All three logos are in hand: the horizontal wordmark for the header and hero, the circular badge for section headers (never under 200px), and the gold app icon used as-is for the favicon and apple-touch-icon. You've also given me the festival schedule, the full lineup, the kick-off ticket page, and the GLCF donation link. Artists show as styled placeholder blocks with initials until you send photos.


### Festival schedule going in (category: "festival")

- Sat Oct 10, 6pm — Kick-off Concert with Jungle Brothers & Termanology, Taffeta Music Hall (tickets: taffetamusic.com)
- Tue Oct 13, 4–6pm — Learn to Dance workshop, GEN Studio (Western Ave)
- Wed Oct 14, 7pm — Hip-Hop Trivia, Warp & Weft
- Thu Oct 15, 8pm — DJ Myth, Warp & Weft
- Sat Oct 17, 12pm — Hip-Hop 101 and Graffiti Lettering Workshop, The Hive Market
- Sat Oct 17, 8pm — Fee & the Evolutionists, Warp & Weft
- Sun Oct 18, 1pm — Dance Jam Finale at Tescobar Performance Center: breaking and hip-hop dance battles, showcases, cyphers and circles

### Community events going in (category: "community")

- Sat Sep 19, 12–12:30pm — Lowell Kinetic Sculpture Race at Sampas Pavilion on Pawtucket Blvd.
- Sat Oct 3, 12–5pm — Open Streets Lowell on Merrimack St. in Downtown Lowell

Naming rules: the event is "Kick-off Concert" everywhere (never "Concert Kick-off"); the venue is "The Hive Market" everywhere (never "The Hive"); the act is "Jungle Brothers" with no article in every instance.



## Look and feel

- Black background throughout, gold as the primary accent and default button color, red and blue as flat full-saturation section blocks, gray for dimmed states, off-white body text. Dark gray only for card surfaces. No other colors.
- Headings in DM Serif Display (mixed case, tight tracking, regular weight). Eyebrows, nav, buttons, labels in Oswald, all caps, wide spacing. Paragraphs in Inter, 16px minimum on phones.
- Bungee is loaded and registered as `display-alt` but deliberately applied to nothing.
- Square corners, heavy rules, blocky dividers, a subtle screen-print grain over dark sections. No shadows, glows, gradients, or rounding — including on the logos and the app icon.
- Built phone-first.

## Pages

- **Home** — full-bleed hero with the wordmark, Oct 10–18 2026 dates, and a Get Tickets button; highlights strip for the Kick-off Concert ("Legends & Luminaries with Jungle Brothers and Termanology") and the Dance Jam Finale ("Breaking, Battles & Boogie"); mission blurb; a Beat Blue "Follow the festival" band with Instagram and Facebook handles as tappable links; an "Upcoming Events" strip; and a sponsor row.
- **Lineup** — Headliners: Jungle Brothers (90s legends) and Termanology (local 978 legend). Support: Mill City Madness (Stardust World, Rottenegg, Hazel Adeline), Poppy Pyonn, Malissa Lach, CabbHoppa1, Chi Tashi, SoloArtist, Persona the Tyrant, Ape the Grim. A third block covers the Dance Jam Finale roster — hosted by Elmstreet, breaking judges Baldi, RTA and Kellz with DJ KingX, hip-hop battle judges Keda, McKersin and DOA with DJ Trends, plus Mill Advised and more TBA. Each card: name, styled placeholder block with initials, short bio.
- **Festival Schedule** — chronological festival events, Oct 10–18, with date, time, title, venue, ticket link.
- **Calendar** — static month grid, Sunday–Saturday, prev/next across 2026 and 2027, built from plain date math. Festival days marked gold, community days blue, empty days dimmed; marked days show the title and link to the matching schedule entry. On phones it collapses to a vertical agenda grouped by month.
- **Events** — year-round community events, upcoming first, with a past-events toggle.
- **Venues** — Taffeta Music Hall, Warp & Weft, The Hive Market, Tescobar Performance Center, GEN Studio at Western Ave Studios; address plus short description.
- **Sponsors** — the five tiers (Title $10K+, Premier $5K+, Gold $2.5K, Silver $1K, Community $500), what each includes, contact button.
- **Get Involved** — Volunteer and Donate as two equal-weight sections. Volunteer covers street team and flyering, setup and breakdown, day-of support, and year-round tabling, with a button to the Google Form (new tab). Donate explains the fiscal sponsorship, links to the GLCF donation page, and notes contributions are tax-deductible through the Greater Lowell Community Foundation.
- **About** — organization story and mission.

Footer on every page, verbatim: "The Lowell Hip-Hop Festival operates under the fiscal sponsorship of the Greater Lowell Community Foundation, a 501(c)(3) public charity." Above that, Off White Instagram and Facebook icon links that turn Electric Gold on hover, opening in a new tab, with proper aria-labels.

Social. Store a `socialLinks` object in `src/content.ts`: Instagram (`https://www.instagram.com/lowellhiphopfestival/`, handle `@lowellhiphopfestival`) and Facebook (`https://www.facebook.com/LowellHipHopFestival/`, handle `@LowellHipHopFestival`). Render them in the footer as icon links and on the Home page in a Beat Blue "Follow the festival" band with tappable Oswald handle links. No social icons in header or nav.

## Technical notes

- `src/content.ts` — single source of truth: one `events` array (`id`, `date`, optional `endDate`, `time`, `title`, `venue`, `description`, optional `ticketUrl`, `category` of `festival | community | internal`), plus exported `artists`, `venues`, `sponsorTiers`.
- `src/lib/events.ts` — exports `getPublicEvents()`, excluding `internal`. Every page and component reads dated data only through it; nothing public imports `events` directly. Single filtering chokepoint.
- `src/internal-content.ts` — empty `internalEvents` array, same type, commented as reserved for a future gated team portal. Not imported by any public route.
- `<EventCalendar events={...} />` — renders whatever array it receives; no knowledge of categories or of the content file. Date math is hand-rolled; no calendar or date-picker library.
- Routes are file-based under `src/routes` with shared header/nav/footer in the root layout, so new routes drop in without touching page components.
- Fonts loaded via a `<link>` in the root head; brand colors, fonts (including `display-alt`), and radius-zero registered as design tokens in `src/styles.css`.
- Favicon and apple-touch-icon use the supplied app icon as-is.
- Per-page titles, descriptions, and social tags.
- **Static output.** The framework here is fixed (TanStack Start with TanStack Router file-based routes under `src/routes`); React Router and a bare Vite config aren't available inside Lovable. To meet the static requirement, every one of the nine pages is prerendered to plain HTML at build time: all nine paths listed in `pages` in `vite.config.ts`, `prerender: { enabled: true, autoStaticPathsDiscovery: false }`. There is no server-side logic, no data fetching, no cookies or per-visitor content, so each page is one fixed HTML file. The build writes `dist/client/` with `index.html` plus `<route>/index.html` for each page and the hashed CSS/JS/image assets — that folder is a complete static upload for Cloudflare Pages.

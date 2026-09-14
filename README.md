# Lowell Hip-Hop Hub

Build a static marketing website for the Lowell Hip-Hop Festival, a nonprofit organization in Lowell, MA. The flagship festival runs October 10 to 18, 2026, and will repeat annually. The organization also appears at community and promotional events year-round. No backend, no database, no authentication, no Supabase. All content hardcoded. All ticket, donation, and form links are external. Do not use any calendar or date-picker library.

Brand colors. Use exactly these, no substitutions or additions:

Deep Vinyl Black 

#111111

Electric Gold 

#F4B400

Graffiti Red 

#e63946

Beat Blue 

#2563EB

Concrete Gray 

#D1D5DB

Off White 

#F8F5F0

One additional dark gray, #1C1C1C, is permitted for card surfaces and elevation against the black background. No other colors.

Black is the dominant background. Gold is the primary accent and the default button color. Red and blue are section accents, used at full saturation in blocks, never blended or gradiated. Concrete Gray is for dimmed and inactive states. Off-white is body text on dark.

Logos. I've attached three files. The horizontal wordmark is the primary logo, used in the site header and nav on every page and in the hero. The circular badge is a secondary mark for section headers, never displayed smaller than 200px. Both are built for the 

#111111 background. Do not add drop shadows, glows, outlines, or any other treatment to either. The third file is the app icon, black linework on an Electric Gold square: use it as-is for the favicon and apple-touch-icon, do not recolor it, do not make its background transparent, and do not round its corners.

Typography. Headings use DM Serif Display from Google Fonts, mixed case, tight tracking, regular weight. Do not fake-bold it and do not set it in all caps. Section eyebrows, nav links, buttons, and labels use Oswald in all caps with wide letter spacing. Body copy and paragraphs use Inter at regular weight, minimum 16px on mobile. Never set paragraphs in Oswald or DM Serif Display.

Also load Bungee from Google Fonts and register it as an available font family token named display-alt. Do not apply it to any element yet. This is intentional, keep it loaded and unused.

Feel: bold, loud, high contrast, poster-like. Subtle distressed grunge texture over dark sections, in the spirit of screen-printed show flyers. Heavy rules and blocky dividers. No soft shadows, no rounded corners, no gradients, no glassmorphism, no generic SaaS look. Mobile-first, most visitors are on phones.

Data model. Put all public content in src/content.ts. Use a single events array as the one source of truth for everything dated. Each event has: id, date, endDate (optional), time, title, venue, description, ticketUrl (optional), and category, where category is one of "festival", "community", or "internal". Also export artists, venues, and sponsorTiers.

Create src/lib/events.ts exporting getPublicEvents(), which returns all events excluding category: "internal". Every public page and component must get its data through this function and never read the events array directly. This is the single filtering chokepoint.

Create an empty src/internal-content.ts exporting an empty internalEvents array typed the same way, with a comment explaining it is reserved for a future gated team portal. No public route may import it.

Component structure. Build the calendar as a reusable <EventCalendar events={...} /> component that renders whatever array it is handed and has no knowledge of categories or of the content file. Public pages pass it getPublicEvents(). Keep routing in one place so additional routes can be added without touching page components.

Pages: Home, Lineup, Festival Schedule, Calendar, Events, Venues, Sponsors, Get Involved, About.

Home: full-bleed hero with the wordmark, festival dates, and a primary "Get Tickets" button. Below it, a highlights strip for The Kick-off Concert (tagline "Legends & Luminaries with The Jungle Brothers and Termanology") and the Dance Jam Finale (tagline "Breaking, Battles & Boogie"), a short mission blurb, an "Upcoming Events" strip showing the next three from getPublicEvents(), and a sponsor logo row.

Lineup: artist cards in two groups, Headliners and support, each with name, photo placeholder, and short bio.

Festival Schedule: chronological list of category: "festival" events, Oct 10 to 18. Date, time, title, venue, ticket link.

Calendar: static month grid, Sunday through Saturday, with previous/next month navigation across 2026 and 2027. Days with events are marked, gold for festival and blue for community. Each marked day shows the event title and links to its schedule entry. Empty days dimmed gray. Build the grid from plain JavaScript date math, no library. On mobile, collapse to a vertical agenda list grouped by month.

Events: year-round list of category: "community" events, upcoming first, with a toggle for past events.

Venues: cards for Taffeta Music Hall, Warp & Weft, The Hive, Tescobar, and GEN Studio at Western Ave Studios, each with address and short description.

Sponsors: the five tiers (Title $10K+, Premier $5K+, Gold $2.5K, Silver $1K, Community $500), what each includes, and a contact button.

Get Involved: two clearly separated sections on one page, equal visual weight, neither buried. "Volunteer" explains what volunteers do (street team and flyering, event setup and breakdown, day-of support, tabling at community events year-round) and has a prominent button linking to https://forms.gle/gXccQ5yqazyJY31KA, opening in a new tab. "Donate" explains the fiscal sponsorship, has a prominent button linking to an external donation URL I will supply, and notes that contributions are tax-deductible through the Greater Lowell Community Foundation.

Footer on every page, exact wording: "The Lowell Hip-Hop Festival operates under the fiscal sponsorship of the Greater Lowell Community Foundation, a 501(c)(3) public charity."

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9b61c78a-b127-4e97-9c4e-1cd5931157f8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

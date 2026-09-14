import { createFileRoute, Link } from "@tanstack/react-router";

import flyer from "@/assets/kickoff-flyer.webp.asset.json";
import badge from "@/assets/lhhf-badge.png.asset.json";
import { ExternalButton, InternalButton } from "@/components/site/Button";
import { SiteLayout } from "@/components/site/Layout";
import {
  donateUrl,
  festivalDates,
  headliners,
  missionElements,
  missionIntro,
  missionRooted,
  socialLinks,
  ticketUrl,
} from "@/content";
import { formatShortDate, getPublicEvents, isUpcoming } from "@/lib/events";

const title = "Lowell Hip-Hop Festival — October 10–18, 2026";
const description =
  "A week of hip-hop in Lowell, MA. Jungle Brothers and Termanology headline the Kick-off Concert, plus workshops, DJ nights, trivia, and the Dance Jam Finale.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const upcoming = getPublicEvents().filter(isUpcoming).slice(0, 4);

  return (
    <SiteLayout>
      <section className="grain border-b-4 border-graffiti bg-vinyl">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-24 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow text-gold">Lowell, Massachusetts · Nonprofit</p>
            <h1 className="mt-4 text-5xl leading-[0.95] text-offwhite sm:text-7xl">
              Lowell Hip-Hop <span className="text-gold">Festival</span>
            </h1>
            <p className="label-type mt-5 inline-block bg-graffiti px-4 py-2 text-lg text-offwhite">
              {festivalDates.label}
            </p>
            <p className="mt-6 max-w-xl text-lg text-concrete">
              Nine days of shows, workshops, battles and cyphers across the Mill City. Jungle Brothers and Termanology
              headline the Kick-off Concert on October 10.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ExternalButton href={ticketUrl}>Get Tickets</ExternalButton>
              <InternalButton to="/schedule">See the Schedule</InternalButton>
            </div>
          </div>
          <div className="justify-self-center">
            <img
              src={badge.url}
              alt="Lowell Hip-Hop Festival logo"
              className="w-56 max-w-full sm:w-80"
              width={320}
              height={320}
            />
          </div>
        </div>
      </section>

      <section className="border-b-2 border-border bg-cardgray">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:py-20">
          <p className="eyebrow text-gold">Our Mission</p>
          <p className="mt-5 text-xl leading-relaxed text-offwhite sm:text-2xl">{missionIntro}</p>
          <p className="mt-6 text-lg leading-relaxed text-concrete">{missionRooted}</p>
          <ul className="mt-6 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {missionElements.map((element) => (
              <li key={element.name} className="bg-vinyl px-4 py-5">
                <p className="label-type text-lg text-gold">{element.name}</p>
                <p className="mt-1 text-sm text-concrete">({element.detail})</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-beat">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center">
          <h2 className="text-3xl text-offwhite sm:text-4xl">Follow the festival</h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
            <a
              href={socialLinks.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Lowell Hip-Hop Festival on Instagram, ${socialLinks.instagram.handle}`}
              className="label-type flex min-h-14 w-full items-center justify-center border-2 border-offwhite px-6 text-lg text-offwhite transition-colors hover:bg-gold hover:border-gold hover:text-vinyl sm:w-auto sm:text-xl"
            >
              {socialLinks.instagram.handle}
            </a>
            <a
              href={socialLinks.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Lowell Hip-Hop Festival on Facebook, ${socialLinks.facebook.handle}`}
              className="label-type flex min-h-14 w-full items-center justify-center border-2 border-offwhite px-6 text-lg text-offwhite transition-colors hover:bg-gold hover:border-gold hover:text-vinyl sm:w-auto sm:text-xl"
            >
              {socialLinks.facebook.handle}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-border bg-vinyl">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl text-offwhite sm:text-4xl">Upcoming Events</h2>
            <Link to="/events" className="label-type text-sm text-gold hover:text-offwhite">
              All events →
            </Link>
          </div>
          <ul className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {upcoming.map((event) => (
              <li key={event.id} className="bg-cardgray p-6">
                <p className={`eyebrow ${event.category === "festival" ? "text-gold" : "text-beat"}`}>
                  {formatShortDate(event.date)} · {event.time}
                </p>
                <h3 className="mt-3 text-xl text-offwhite">{event.title}</h3>
                <p className="label-type mt-2 text-xs text-concrete">{event.venue}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-vinyl">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <p className="eyebrow text-gold">Kick-off Concert · October 10</p>
          <h2 className="mt-4 text-3xl text-offwhite sm:text-5xl">Jungle Brothers · Termanology</h2>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2">
            {headliners.map((artist) => (
              <div key={artist.id} className="bg-cardgray p-6">
                <p className="eyebrow text-graffiti">{artist.role}</p>
                <h3 className="mt-2 text-2xl text-offwhite">{artist.name}</h3>
                <p className="mt-3 text-concrete">{artist.bio}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <InternalButton to="/lineup">Full Lineup</InternalButton>
            <ExternalButton href={donateUrl} variant="outline">
              Donate
            </ExternalButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

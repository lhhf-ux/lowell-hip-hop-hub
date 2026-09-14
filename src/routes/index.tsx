import { createFileRoute, Link } from "@tanstack/react-router";

import flyer from "@/assets/kickoff-flyer.webp.asset.json";
import badge from "@/assets/lhhf-logo-white-640.png.asset.json";
import bicentennialLogo from "@/assets/lowell-bicentennial-logo.png.asset.json";
import { ExternalButton, InternalButton } from "@/components/site/Button";
import { SiteLayout } from "@/components/site/Layout";
import {
  currentSponsors,
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
  const goldSponsors = currentSponsors.filter((s) => s.tier === "gold");
  const upcomingEvents = getPublicEvents()
    .filter((e) => isUpcoming(e) && e.category === "festival")
    .slice(0, 4);

  return (
    <SiteLayout>
      <section className="grain border-b-4 border-graffiti bg-vinyl">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-24 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h1 className="text-5xl leading-[0.95] text-offwhite sm:text-7xl">
              Lowell Hip-Hop Festival
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
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="flex items-center justify-center bg-offwhite p-8">
              <img
                src={bicentennialLogo.url}
                alt="Lowell Bicentennial 1826–2026"
                className="max-h-64 w-full object-contain"
              />
            </div>
            <div>
              <p className="eyebrow text-gold">Year 1</p>
              <h2 className="mt-4 text-3xl text-offwhite sm:text-5xl">Hip-hop is part of Lowell's story</h2>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-concrete">
                <p>
                  In 2026, Lowell marks 200 years of making, moving, and remaking itself. The Lowell Hip-Hop Festival
                  joins that Bicentennial celebration by putting hip-hop where it belongs: at the center of the city's
                  culture, fabric, and being.
                </p>
                <p>
                  This first year is a statement — the mills built the city, and the culture still builds community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-vinyl">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <p className="eyebrow text-gold">Kick-off Concert · October 10</p>
          <h2 className="mt-4 text-3xl text-offwhite sm:text-5xl">Jungle Brothers · Termanology</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <a href={ticketUrl} target="_blank" rel="noopener noreferrer" className="block">
              <img
                src={flyer.url}
                alt="Kick-off Concert flyer: Jungle Brothers and Termanology, Saturday October 10 at 6pm, Taffeta Music Hall, 110 Western Ave, Lowell MA"
                className="w-full border-2 border-border"
                loading="lazy"
              />
            </a>
            <div>
              <div className="grid gap-px bg-border">
                {headliners.map((artist) => (
                  <div key={artist.id} className="bg-cardgray p-6">
                    <p className="eyebrow text-graffiti">{artist.role}</p>
                    <h3 className="mt-2 text-2xl text-offwhite">{artist.name}</h3>
                    <p className="mt-3 text-concrete">{artist.bio}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <ExternalButton href={ticketUrl}>Get Tickets</ExternalButton>
                <InternalButton to="/lineup">Full Lineup</InternalButton>
                <ExternalButton href={donateUrl} variant="outline">
                  Donate
                </ExternalButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-border bg-cardgray">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl text-offwhite sm:text-4xl">Upcoming Events</h2>
            <Link to="/events" className="label-type text-sm text-gold hover:text-offwhite">
              All events →
            </Link>
          </div>
          <ul className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {upcomingEvents.map((event) => (
              <li key={event.id} className="bg-cardgray p-6">
                <p className="eyebrow text-gold">
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
          <p className="eyebrow text-gold">Sponsors</p>
          <h2 className="mt-4 text-3xl text-offwhite sm:text-5xl">Gold Sponsors</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {goldSponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-offwhite p-8 transition-opacity hover:opacity-90"
                aria-label={`${sponsor.name} (opens in new tab)`}
              >
                <img
                  src={sponsor.logoAsset.url}
                  alt={sponsor.name}
                  className="max-h-40 w-full object-contain"
                />
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <InternalButton to="/sponsors">Become a Sponsor</InternalButton>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-border bg-cardgray">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:py-20">
          <p className="eyebrow text-gold">About</p>
          <div className="mt-5 space-y-5 text-lg leading-relaxed text-concrete">
            <p>{missionIntro}</p>
            <p>{missionRooted}</p>
            <ul className="list-disc space-y-2 pl-5">
              {missionElements.map((element) => (
                <li key={element}>{element}</li>
              ))}
            </ul>
          </div>
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
              className="label-type flex min-h-14 w-full items-center justify-center border-2 border-offwhite px-6 text-lg text-offwhite transition-colors hover:border-gold hover:bg-gold hover:text-vinyl sm:w-auto sm:text-xl"
            >
              {socialLinks.instagram.handle}
            </a>
            <a
              href={socialLinks.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Lowell Hip-Hop Festival on Facebook, ${socialLinks.facebook.handle}`}
              className="label-type flex min-h-14 w-full items-center justify-center border-2 border-offwhite px-6 text-lg text-offwhite transition-colors hover:border-gold hover:bg-gold hover:text-vinyl sm:w-auto sm:text-xl"
            >
              {socialLinks.facebook.handle}
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

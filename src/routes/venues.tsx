import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { venues } from "@/content";
import { getPublicEvents } from "@/lib/events";
import { formatShortDate } from "@/lib/events";

const title = "Venues — Lowell Hip-Hop Festival";
const description =
  "Where the Lowell Hip-Hop Festival happens: Taffeta Music Hall, Warp & Weft, The Hive Market, Tescobar Performance Center, and GEN Studio on Western Ave.";

export const Route = createFileRoute("/venues")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: VenuesPage,
});

function VenuesPage() {
  const events = getPublicEvents();

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Around the Mill City"
        title="Venues"
        intro="Every festival event happens in Lowell, within a short walk or drive of downtown."
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="grid gap-px bg-border sm:grid-cols-2">
          {venues.map((venue) => {
            const here = events.filter((event) => event.venue.startsWith(venue.name.split(" at ")[0] ?? venue.name));
            return (
              <article key={venue.id} className="bg-cardgray p-6 sm:p-8">
                <h2 className="text-2xl text-offwhite sm:text-3xl">{venue.name}</h2>
                <p className="label-type mt-2 text-sm text-gold">{venue.address}</p>
                <p className="mt-4 text-concrete">{venue.description}</p>
                {here.length > 0 ? (
                  <ul className="mt-5 space-y-1">
                    {here.map((event) => (
                      <li key={event.id} className="text-sm text-concrete">
                        <span className="label-type text-offwhite">{formatShortDate(event.date)}</span> — {event.title}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </SiteLayout>
  );
}

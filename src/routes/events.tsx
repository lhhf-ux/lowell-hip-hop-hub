import { createFileRoute } from "@tanstack/react-router";

import { EventCard } from "@/components/site/EventCard";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { getCommunityEvents, getFestivalEvents, getPublicEvents } from "@/lib/events";

const title = "Events — Lowell Hip-Hop Festival";
const description =
  "Lowell Hip-Hop Festival week October 10–18, 2026, partner events including Refuge Art School's Waves of Migration mural unveiling, and year-round community appearances.";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const festival = getFestivalEvents();
  const community = getCommunityEvents();
  const partners = getPublicEvents().filter((event) => event.category === "partner");

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Festival and year-round"
        title="Events"
        intro="We run a nine-day festival every October and show up across Lowell all year long."
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:py-20">
        <h2 className="text-3xl text-offwhite sm:text-4xl">Community Events</h2>
        <p className="mt-2 text-concrete">Come find our table — music, festival info, and conversation.</p>
        <div className="mt-8 space-y-px bg-border">
          {community.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="border-t-2 border-border">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:py-20">
          <h2 className="text-3xl text-offwhite sm:text-4xl">Partner Events</h2>
          <div className="mt-8 space-y-px bg-border">
            {partners.map((event) => <EventCard key={event.id} event={event} />)}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-border">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:py-20">
          <h2 className="text-3xl text-offwhite sm:text-4xl">Festival Week</h2>
          <p className="mt-2 text-concrete">October 10–18, 2026.</p>
          <div className="mt-8 space-y-px bg-border">
            {festival.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";

import { EventCard } from "@/components/site/EventCard";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { getFestivalEvents } from "@/lib/events";

const title = "Festival Schedule — Lowell Hip-Hop Festival 2026";
const description =
  "Every festival event from October 10 to 18, 2026: the Kick-off Concert, dance workshop, hip-hop trivia, DJ Myth, Hip-Hop 101, Fee & the Evolutionists, and the Dance Jam Finale.";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  const events = getFestivalEvents();

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="October 10–18, 2026"
        title="Festival Schedule"
        intro="Nine days across five Lowell venues. Only the Kick-off Concert is ticketed — everything else is free to attend."
      />
      <div className="mx-auto max-w-4xl space-y-px bg-border px-0 py-14 sm:px-4 sm:py-20">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </SiteLayout>
  );
}

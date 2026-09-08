import { createFileRoute } from "@tanstack/react-router";

import { EventCalendar } from "@/components/site/EventCalendar";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { getPublicEvents } from "@/lib/events";

const title = "Calendar — Lowell Hip-Hop Festival";
const description =
  "Month-by-month calendar of Lowell Hip-Hop Festival events, including festival week October 10–18, 2026 and our year-round community appearances.";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CalendarPage,
});

function CalendarPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Everything, month by month"
        title="Calendar"
        intro="Festival week and our year-round community appearances in one view. Tap any event for details."
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <EventCalendar events={getPublicEvents()} />
      </div>
    </SiteLayout>
  );
}

import type { FestEvent } from "@/content";
import { formatLongDate, googleMapsUrl } from "@/lib/events";
import { ExternalButton } from "./Button";

export function EventCard({ event }: { event: FestEvent }) {
  const accent = event.category === "festival" ? "border-l-gold" : "border-l-beat";
  const tone = event.category === "festival" ? "text-gold" : "text-beat";

  return (
    <article id={event.id} className={`scroll-mt-24 border-2 border-border border-l-8 ${accent} bg-cardgray p-5 sm:p-7`}>
      <p className={`eyebrow ${tone}`}>
        {formatLongDate(event.date)} · {event.time}
      </p>
      <h3 className="mt-3 text-2xl text-offwhite sm:text-3xl">{event.title}</h3>
      <p className="label-type mt-2 text-sm text-concrete">
        <a
          href={googleMapsUrl(event.mapQuery ?? `${event.venue}, Lowell, MA`)}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-2 underline-offset-4 hover:text-gold"
        >
          {event.venue}
        </a>
      </p>
      <p className="mt-4 max-w-2xl text-concrete">{event.description}</p>
      {event.ticketUrl ? (
        <div className="mt-6">
          <ExternalButton href={event.ticketUrl}>Get Tickets</ExternalButton>
        </div>
      ) : (
        <p className="label-type mt-6 text-xs text-concrete">Free · No ticket required</p>
      )}
    </article>
  );
}

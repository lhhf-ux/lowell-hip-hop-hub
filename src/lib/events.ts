import { events, type FestEvent } from "@/content";

/**
 * The single chokepoint for dated data on the public site.
 * Never import `events` directly from a page or component.
 */
export function getPublicEvents(): FestEvent[] {
  return events
    .filter((event) => event.category !== "internal")
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getFestivalEvents(): FestEvent[] {
  return getPublicEvents().filter((event) => event.category === "festival");
}

export function getCommunityEvents(): FestEvent[] {
  return getPublicEvents().filter((event) => event.category === "community");
}

/** Reference "today" for upcoming/past splits. Fixed so prerendered HTML is stable. */
export const referenceDate = "2026-09-01";

export function isUpcoming(event: FestEvent): boolean {
  return (event.endDate ?? event.date) >= referenceDate;
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** Parse YYYY-MM-DD without timezone drift. */
export function parseISODate(iso: string): { year: number; month: number; day: number } {
  const [year, month, day] = iso.split("-").map(Number);
  return { year: year!, month: month!, day: day! };
}

export function weekdayIndex(iso: string): number {
  const { year, month, day } = parseISODate(iso);
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}

export function formatLongDate(iso: string): string {
  const { year, month, day } = parseISODate(iso);
  return `${WEEKDAYS[weekdayIndex(iso)]}, ${MONTHS[month - 1]} ${day}, ${year}`;
}

export function formatShortDate(iso: string): string {
  const { month, day } = parseISODate(iso);
  return `${MONTHS[month - 1]?.slice(0, 3)} ${day}`;
}

export function monthName(month: number): string {
  return MONTHS[month - 1] ?? "";
}

/** Google Maps search link for a venue name/address. */
export function googleMapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function initialsFor(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";

import type { FestEvent } from "@/content";
import { monthName, parseISODate } from "@/lib/events";

const DAY_HEADS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MIN = { year: 2026, month: 1 };
const MAX = { year: 2027, month: 12 };

function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

function firstWeekday(year: number, month: number): number {
  return new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
}

function iso(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

/**
 * Renders whatever event array it receives. It knows nothing about categories
 * beyond colouring, and nothing about the content file. Hand-rolled date math.
 */
export function EventCalendar({
  events,
  initialYear = 2026,
  initialMonth = 10,
}: {
  events: FestEvent[];
  initialYear?: number;
  initialMonth?: number;
}) {
  const [cursor, setCursor] = useState({ year: initialYear, month: initialMonth });

  const byDate = useMemo(() => {
    const map = new Map<string, FestEvent[]>();
    for (const event of events) {
      const list = map.get(event.date) ?? [];
      list.push(event);
      map.set(event.date, list);
    }
    return map;
  }, [events]);

  const total = daysInMonth(cursor.year, cursor.month);
  const lead = firstWeekday(cursor.year, cursor.month);
  const cells: (number | null)[] = [
    ...Array.from({ length: lead }, () => null),
    ...Array.from({ length: total }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const atMin = cursor.year === MIN.year && cursor.month === MIN.month;
  const atMax = cursor.year === MAX.year && cursor.month === MAX.month;

  function step(delta: number) {
    setCursor((prev) => {
      let month = prev.month + delta;
      let year = prev.year;
      if (month < 1) {
        month = 12;
        year -= 1;
      } else if (month > 12) {
        month = 1;
        year += 1;
      }
      if (year < MIN.year || (year === MIN.year && month < MIN.month)) return prev;
      if (year > MAX.year || (year === MAX.year && month > MAX.month)) return prev;
      return { year, month };
    });
  }

  const monthEvents = events
    .filter((event) => {
      const { year, month } = parseISODate(event.date);
      return year === cursor.year && month === cursor.month;
    })
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div>
      <div className="flex items-center justify-between border-2 border-border bg-cardgray px-3 py-3">
        <button
          type="button"
          onClick={() => step(-1)}
          disabled={atMin}
          className="label-type min-h-11 border-2 border-offwhite px-4 text-xs text-offwhite disabled:border-border disabled:text-concrete/40 hover:enabled:bg-gold hover:enabled:text-vinyl hover:enabled:border-gold"
        >
          Prev
        </button>
        <h2 className="text-2xl text-offwhite sm:text-3xl">
          {monthName(cursor.month)} {cursor.year}
        </h2>
        <button
          type="button"
          onClick={() => step(1)}
          disabled={atMax}
          className="label-type min-h-11 border-2 border-offwhite px-4 text-xs text-offwhite disabled:border-border disabled:text-concrete/40 hover:enabled:bg-gold hover:enabled:text-vinyl hover:enabled:border-gold"
        >
          Next
        </button>
      </div>

      {/* Desktop / tablet grid */}
      <div className="hidden border-x-2 border-b-2 border-border sm:block">
        <div className="grid grid-cols-7 border-b-2 border-border bg-vinyl">
          {DAY_HEADS.map((day) => (
            <div key={day} className="eyebrow px-2 py-2 text-center text-concrete">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {cells.map((day, index) => {
            if (day === null) {
              return <div key={`pad-${index}`} className="min-h-24 border-t border-r border-border bg-vinyl/60" />;
            }
            const key = iso(cursor.year, cursor.month, day);
            const dayEvents = byDate.get(key) ?? [];
            const festival = dayEvents.some((e) => e.category === "festival");
            const community = dayEvents.some((e) => e.category === "community");
            const marked = dayEvents.length > 0;
            const tone = festival ? "bg-gold text-vinyl" : community ? "bg-beat text-offwhite" : "bg-vinyl";

            return (
              <div key={key} className={`min-h-24 border-t border-r border-border p-2 ${tone}`}>
                <div className={`label-type text-xs ${marked ? "" : "text-concrete/40"}`}>{day}</div>
                <ul className="mt-1 space-y-1">
                  {dayEvents.map((event) => (
                    <li key={event.id}>
                      <Link
                        to="/schedule"
                        hash={event.id}
                        className="block text-xs leading-snug font-medium underline decoration-2 underline-offset-2"
                      >
                        {event.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Phone agenda */}
      <div className="border-x-2 border-b-2 border-border sm:hidden">
        {monthEvents.length === 0 ? (
          <p className="px-4 py-6 text-sm text-concrete">Nothing scheduled this month.</p>
        ) : (
          <ul>
            {monthEvents.map((event) => (
              <li key={event.id} className="border-b border-border last:border-b-0">
                <Link to="/schedule" hash={event.id} className="block px-4 py-4">
                  <span
                    className={`eyebrow ${event.category === "festival" ? "text-gold" : "text-beat"}`}
                  >
                    {monthName(cursor.month)} {parseISODate(event.date).day} · {event.time}
                  </span>
                  <span className="mt-1 block text-lg text-offwhite">{event.title}</span>
                  <span className="mt-1 block text-sm text-concrete">{event.venue}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-5">
        <span className="flex items-center gap-2">
          <span className="inline-block h-4 w-4 bg-gold" aria-hidden="true" />
          <span className="eyebrow text-concrete">Festival</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-4 w-4 bg-beat" aria-hidden="true" />
          <span className="eyebrow text-concrete">Community</span>
        </span>
      </div>
    </div>
  );
}

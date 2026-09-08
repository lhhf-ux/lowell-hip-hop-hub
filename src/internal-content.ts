import type { FestEvent } from "./content";

/**
 * Reserved for a future gated team portal.
 * Nothing on the public site imports this file, and `getPublicEvents()` in
 * src/lib/events.ts excludes the "internal" category regardless.
 */
export const internalEvents: FestEvent[] = [];

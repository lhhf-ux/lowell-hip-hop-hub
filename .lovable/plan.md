# Add Egypt, Elmstreet, DJ KingX & TDI Muzik to the Kick-off Concert

## Scope

Only the Lineup page and its data change. Home, Schedule, Calendar and Events copy stay exactly as they are.

## New Lineup page order

1. Spotify card — unchanged
2. Headliners — Jungle Brothers, Termanology — unchanged
3. **Featured Artists** — new section: Poppy Pyonn (moved here from Local Artists), TDI Muzik (new)
4. **Local Artists** — Egypt (new, first tile), then Mill City Madness, Malissa Lach, CabbHoppa1, Chi Tashi, SoloArtist, Persona the Tyrant, Ape the Grim
5. **DJs** — new section: Elmstreet, DJ KingX
6. Fee & The Evolutionists — Saturday, October 17 — unchanged
7. Dance Jam Finale — Sunday, October 18 — unchanged

Section order is easy to reshuffle if you'd rather the DJs sit above Local Artists.

## Names and role labels

The role label is the small gold uppercase line above each name.

| Act | Name as shown | Role label |
| --- | --- | --- |
| Egypt | Egypt | MC / Rapper |
| Poppy Pyonn | Poppy Pyonn | MC |
| TDI Muzik | TDI Muzik | Special Guest |
| Elmstreet | Elmstreet | DJ & Host |
| DJ KingX | DJ KingX | DJ & B-boy |

## Blurbs

Names only. None of the four new acts get a bio, so nothing is invented. Every bio already on the page stays untouched.

## Marketing Egypt hardest

- Egypt sits first in the Local Artists grid.
- Her tile spans the full row instead of one column, so it reads as the featured slot.
- Her tile carries two links: "Watch on YouTube" to her channel, and "Read the Lowell Sun feature" to the August 23 story. Both open in a new tab with proper labels.
- Her name is added to the Lineup page's search-result description.

Say the word and I'll drop the links, the wide tile, or both.

## Technical notes

- `src/artists.ts` — add a `featuredArtists` array (Poppy Pyonn, TDI Muzik) and a `kickoffDJs` array (Elmstreet, DJ KingX); remove Poppy Pyonn from `supportArtists`; add Egypt as the first entry of `supportArtists`. New acts get blank bios.
- `src/content.ts` — re-export the two new arrays alongside the existing ones.
- `src/routes/lineup.tsx` — two new sections built from the same tile component, plus a wider Egypt tile with the two external links.
- Both Egypt URLs get checked that they resolve before they're linked.
- Elmstreet and DJ KingX keep their existing Dance Jam entries, so they appear on two nights.

## Needs your call

- TDI Muzik spelling: "TDIMuzik" or "TDI Muzik"? And is "Special Guest" the right label?
- Should "Lawtown Assassins" appear on DJ KingX's tile?
- TDI Muzik comes from NY rather than the 978 — Featured Artists is where I've put him. Confirm, or move him to Local Artists.

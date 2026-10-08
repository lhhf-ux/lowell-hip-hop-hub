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

Researched draft bios below are for approval only. Every existing bio stays untouched, including Poppy Pyonn's when she moves sections.

### Egypt — MC / Rapper

Egypt is a Lowell rapper, also known as Egypt Raps, who has been performing in the city and beyond for about a decade. Her work extends beyond music into volunteer work and speaking at local high schools. In 2026, with support from a Mosaic Lowell grant, she published *From Nothing to Everything*, a book drawing on her own experiences to help readers rise above their circumstances. An August feature in the Lowell Sun highlighted her music, growing online audience, and work with young people.

Sources: [Lowell Sun feature](https://www.lowellsun.com/2026/08/23/rapping-out-a-lowell-beat/); [accessible syndicated article text](https://hcntimes.com/rapping-out-a-lowell-beat/). Her [YouTube channel](https://www.youtube.com/channel/UCY9SRjh0AiEOCyZrE_wq-Ag) was supplied by you.

### TDI Muzik — Special Guest

TDI Muzik comes to Lowell from New York with a direct connection to Jungle Brothers. He appears on “Make the Party Rock” from their 2026 *Concrete Jungle* EP and joined them at Bastid's BBQ at New York's Seaport this August. For the Kick-off Concert, he joins the Featured Artists bill as a Special Guest.

Sources: [EP review confirming the track credit](https://undergroundhiphopblog.com/albums/the-jungle-brothers-return-for-a-trip-through-the-concrete-jungle-ep-review/); [official event listing showing Jungle Brothers featuring TDI Muzik](https://dice.fm/event/yoek7r-bastids-bbq-new-york-26-8th-aug-the-seaport-new-york-city-tickets); [Seaport lineup spelling](https://theseaport.nyc/events/bastids-bbq/).

Name check: use **TDI Muzik**, matching public event listings. Some music credits use **TdiMuzik**. No claim about a popular solo song: the research did not establish chart success or a breakout hit.

### Elmstreet — DJ & Host

Elmstreet joins the Kick-off Concert as a DJ and host, then returns to host the Dance Jam Finale on October 18. His local appearances include an Open Streets Lowell lineup alongside Malissa Lach and CabbHoppa1, presented by the Lowell Hip-Hop Festival.

Source: [Open Streets Lowell performance listing](https://www.openstreetslowell.org/things-to-do/). Festival roles and dates are confirmed by you and the current schedule. His wider career history was not sufficiently documented to add more claims.

### DJ KingX — DJ & B-boy

DJ KingX is a DJ and b-boy representing Lawtown Assassins. His *Born 2 Get Down* mixtape brings together b-boy breaks with a boom-bap lean. He joins the Kick-off Concert behind the decks and returns as the breaking DJ for the Dance Jam Finale on October 18.

Sources: [artist's SoundCloud mixtape](https://soundcloud.com/djkingxassasins/born-2-get-down-mixtape); [mixtape coverage](https://hamza21.com/2026/06/08/mix-mondays-born-2-get-down/). Crew affiliation and festival roles are confirmed by you. No unsupported production or judging claims are included.

Source notes remain in this draft; the artist bios themselves will appear on the site. Egypt gets the longest bio and the strongest placement of the new additions.

## Marketing Egypt hardest

- Egypt sits first in the Local Artists grid.
- Her tile spans the full row instead of one column, so it reads as the featured slot.
- Her tile carries two links: "Watch on YouTube" to her channel, and "Read the Lowell Sun feature" to the August 23 story. Both open in a new tab with proper labels.
- Her name is added to the Lineup page's search-result description.

Say the word and I'll drop the links, the wide tile, or both.

## Technical notes

- `src/artists.ts` — add a `featuredArtists` array (Poppy Pyonn, TDI Muzik) and a `kickoffDJs` array (Elmstreet, DJ KingX); remove Poppy Pyonn from `supportArtists`; add Egypt as the first entry of `supportArtists`. New acts get the approved bios above.
- `src/content.ts` — re-export the two new arrays alongside the existing ones.
- `src/routes/lineup.tsx` — two new sections built from the same tile component, plus a wider Egypt tile with the two external links.
- Egypt's YouTube and Lowell Sun links use the exact URLs you supplied. The article text is available through search and syndication; direct automated requests may be blocked, so reader access may depend on the publisher.
- Elmstreet and DJ KingX keep their existing Dance Jam entries, so they appear on two nights.

## Approval

Approve or edit the four draft bios and Egypt's prominent placement before any lineup changes are applied. TDI Muzik uses the confirmed Special Guest label and sits in Featured Artists with Poppy Pyonn, as requested. Lawtown Assassins appears in DJ KingX's bio. No site content has been changed yet.

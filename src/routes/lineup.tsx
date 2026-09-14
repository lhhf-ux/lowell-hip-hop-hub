import { createFileRoute } from "@tanstack/react-router";

import { ExternalButton } from "@/components/site/Button";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import {
  danceJamArtists,
  headliners,
  oct17Artists,
  spotifyPlaylistUrl,
  supportArtists,
  ticketUrl,
} from "@/content";

const title = "Lineup — Lowell Hip-Hop Festival 2026";
const description =
  "Jungle Brothers and Termanology headline the Kick-off Concert, with Mill City Madness, Poppy Pyonn, Malissa Lach and more local 978 artists, plus Fee & The Evolutionists and the full Dance Jam Finale roster.";

export const Route = createFileRoute("/lineup")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: LineupPage,
});

function ArtistTile({ name, role, bio }: { name: string; role: string; bio: string }) {
  return (
    <article className="border-2 border-border bg-cardgray p-5 sm:p-7">
      <p className="eyebrow text-gold">{role}</p>
      <h3 className="mt-3 text-2xl text-offwhite sm:text-3xl">{name}</h3>
      {bio ? <p className="mt-3 text-base leading-relaxed text-concrete">{bio}</p> : null}
    </article>
  );
}

function LineupPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="2026 Festival"
        title="The Lineup"
        intro="Legends of the genre alongside the artists carrying Lowell and the 978 right now."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="border-2 border-gold bg-cardgray p-6 sm:p-8">
          <p className="eyebrow text-gold">Spotify Playlist</p>
          <h2 className="mt-3 text-2xl text-offwhite sm:text-3xl">Hear the artists</h2>
          <p className="mt-3 text-concrete">
            We put together a playlist with tracks from the 2026 lineup. Give it a listen before the
            festival.
          </p>
          <div className="mt-6">
            <ExternalButton href={spotifyPlaylistUrl}>Open on Spotify</ExternalButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <h2 className="text-3xl text-offwhite sm:text-4xl">Headliners</h2>
        <p className="mt-2 text-concrete">Kick-off Concert · Saturday, October 10 · Taffeta Music Hall</p>
        <div className="mt-8 grid gap-px bg-border sm:grid-cols-2">
          {headliners.map((artist) => (
            <ArtistTile key={artist.id} name={artist.name} role={artist.role} bio={artist.bio} />
          ))}
        </div>
        <div className="mt-8">
          <ExternalButton href={ticketUrl}>Get Kick-off Concert Tickets</ExternalButton>
        </div>
      </section>

      <section className="border-t-2 border-border bg-vinyl">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <h2 className="text-3xl text-offwhite sm:text-4xl">Local Artists</h2>
          <p className="mt-2 text-concrete">Kick-off Concert · Saturday, October 10 · Taffeta Music Hall</p>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {supportArtists.map((artist) => (
              <ArtistTile key={artist.id} name={artist.name} role={artist.role} bio={artist.bio} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-border bg-cardgray">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <p className="eyebrow text-gold">Saturday, October 17 · 8:00 PM · Warp & Weft</p>
          <h2 className="mt-3 text-3xl text-offwhite sm:text-4xl">Fee & The Evolutionists</h2>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {oct17Artists.map((artist) => (
              <ArtistTile key={artist.id} name={artist.name} role={artist.role} bio={artist.bio} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-border bg-vinyl">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <p className="eyebrow text-gold">Sunday, October 18 · 1:00 PM · Tescobar Performance Center</p>
          <h2 className="mt-3 text-3xl text-offwhite sm:text-4xl">Dance Jam Finale</h2>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {danceJamArtists.map((artist) => (
              <ArtistTile key={artist.id} name={artist.name} role={artist.role} bio={artist.bio} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

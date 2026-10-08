import { createFileRoute } from "@tanstack/react-router";

import { ExternalButton } from "@/components/site/Button";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import {
  danceJamArtists,
  featuredArtists,
  headliners,
  kickoffDJs,
  oct15Artists,
  oct17Artists,
  spotifyPlaylistUrl,
  supportArtists,
  ticketUrl,
} from "@/content";

const title = "Lineup — Lowell Hip-Hop Festival 2026";
const description =
  "Jungle Brothers and Termanology headline the Kick-off Concert, with Egypt, Poppy Pyonn, TDI Muzik and more artists, plus Fee & The Evolutionists and the full Mill City Get Down roster.";

export const Route = createFileRoute("/lineup")({
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
  component: LineupPage,
});

function ArtistTile({
  name,
  role,
  bio,
  links,
}: {
  name: string;
  role: string;
  bio: string;
  links?: Array<{ label: string; url: string }>;
}) {
  return (
    <article className="border-2 border-border bg-cardgray p-5 sm:p-7">
      <p className="eyebrow text-gold">{role}</p>
      <h3 className="mt-3 text-2xl text-offwhite sm:text-3xl">{name}</h3>
      {bio ? <p className="mt-3 text-base leading-relaxed text-concrete">{bio}</p> : null}
      {links?.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {links.map((link) => (
            <ExternalButton key={link.url} href={link.url} variant="outline">
              {link.label}
            </ExternalButton>
          ))}
        </div>
      ) : null}
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
            <ArtistTile key={artist.id} {...artist} />
          ))}
        </div>
        <div className="mt-8">
          <ExternalButton href={ticketUrl}>Get Kick-off Concert Tickets</ExternalButton>
        </div>
      </section>

      <section className="border-t-2 border-border bg-cardgray">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <h2 className="text-3xl text-offwhite sm:text-4xl">Featured Artists</h2>
          <p className="mt-2 text-concrete">Kick-off Concert · Saturday, October 10 · Taffeta Music Hall</p>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2">
            {featuredArtists.map((artist) => (
              <ArtistTile key={artist.id} {...artist} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-border bg-vinyl">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <h2 className="text-3xl text-offwhite sm:text-4xl">Local Artists</h2>
          <p className="mt-2 text-concrete">Kick-off Concert · Saturday, October 10 · Taffeta Music Hall</p>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {supportArtists.map((artist) => (
              <ArtistTile key={artist.id} {...artist} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-border bg-cardgray">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <h2 className="text-3xl text-offwhite sm:text-4xl">DJs</h2>
          <p className="mt-2 text-concrete">Kick-off Concert · Saturday, October 10 · Taffeta Music Hall</p>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2">
            {kickoffDJs.map((artist) => (
              <ArtistTile key={artist.id} {...artist} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-border bg-vinyl">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <p className="eyebrow text-gold">Thursday, October 15 · 8:00 PM · Warp & Weft</p>
          <h2 className="mt-3 text-3xl text-offwhite sm:text-4xl">DJ Myth</h2>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {oct15Artists.map((artist) => (
              <ArtistTile key={artist.id} {...artist} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-border bg-vinyl">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <p className="eyebrow text-gold">Saturday, October 17 · 8:00 PM · Warp & Weft</p>
          <h2 className="mt-3 text-3xl text-offwhite sm:text-4xl">Fee & The Evolutionists</h2>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {oct17Artists.map((artist) => (
              <ArtistTile key={artist.id} {...artist} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-border bg-cardgray">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <p className="eyebrow text-gold">Sunday, October 18 · 1:00 PM · Tescobar Performance Center</p>
          <h2 className="mt-3 text-3xl text-offwhite sm:text-4xl">Mill City Get Down</h2>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {danceJamArtists.map((artist) => (
              <ArtistTile key={artist.id} {...artist} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

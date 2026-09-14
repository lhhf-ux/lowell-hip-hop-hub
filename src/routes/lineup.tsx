import { createFileRoute } from "@tanstack/react-router";

import { ExternalButton } from "@/components/site/Button";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { danceJamRoster, headliners, supportArtists, ticketUrl } from "@/content";

const title = "Lineup — Lowell Hip-Hop Festival 2026";
const description =
  "Jungle Brothers and Termanology headline, with Mill City Madness, Poppy Pyonn, Malissa Lach and more local 978 artists, plus the full Dance Jam Finale roster.";

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
      <p className="mt-3 text-base leading-relaxed text-concrete">{bio}</p>
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
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {supportArtists.map((artist) => (
              <ArtistTile key={artist.id} name={artist.name} role={artist.role} bio={artist.bio} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-border bg-cardgray">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <p className="eyebrow text-gold">Sunday, October 18 · Tescobar Performance Center</p>
          <h2 className="mt-3 text-3xl text-offwhite sm:text-4xl">Dance Jam Finale</h2>
          <p className="mt-3 max-w-2xl text-concrete">
            Breaking and hip-hop dance battles, showcases, live cyphers and dance circles to close the week out.
          </p>
          <dl className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {danceJamRoster.map((group) => (
              <div key={group.role} className="bg-vinyl p-6">
                <dt className="eyebrow text-graffiti">{group.role}</dt>
                <dd className="mt-2 text-xl text-offwhite">{group.names.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </SiteLayout>
  );
}

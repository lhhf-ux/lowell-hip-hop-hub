import { createFileRoute } from "@tanstack/react-router";

import { InternalButton } from "@/components/site/Button";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { aboutStory, fiscalSponsorshipLine, mission } from "@/content";

const title = "About — Lowell Hip-Hop Festival";
const description =
  "The Lowell Hip-Hop Festival is a community-run nonprofit celebrating the four elements of hip-hop in Lowell, Massachusetts, all year long.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

const elements = [
  { name: "The DJ", detail: "Turntables, breaks, and the crate work the whole culture stands on." },
  { name: "The MC", detail: "The pen and the voice — Lowell has plenty of both." },
  { name: "The B-Boy / B-Girl", detail: "Footwork, power, and the circle that never closes." },
  { name: "The Writer", detail: "Letterforms and color, taught hands-on at our workshops." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Who we are" title="About the Festival" intro={mission} />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
        {aboutStory.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="mt-5 text-lg text-concrete first:mt-0">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="border-y-2 border-border bg-cardgray">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <h2 className="text-3xl text-offwhite sm:text-4xl">The Four Elements</h2>
          <dl className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {elements.map((element) => (
              <div key={element.name} className="bg-vinyl p-6">
                <dt className="text-2xl text-gold">{element.name}</dt>
                <dd className="mt-2 text-concrete">{element.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:py-20">
        <p className="eyebrow text-gold">Nonprofit Status</p>
        <p className="mt-4 text-lg text-offwhite">{fiscalSponsorshipLine}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <InternalButton to="/get-involved" variant="gold">
            Get Involved
          </InternalButton>
          <InternalButton to="/sponsors">Sponsor the Festival</InternalButton>
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";

import { ExternalButton, InternalButton } from "@/components/site/Button";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { aboutStory, donateUrl, fiscalSponsorshipLine, missionElements, missionIntro, missionRooted, socialLinks } from "@/content";

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

const elements = missionElements;

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Who we are" title="About the Festival" intro={missionIntro} />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
        {aboutStory.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="mt-5 text-lg text-concrete first:mt-0">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="border-y-2 border-border bg-cardgray">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
          <h2 className="text-4xl text-offwhite sm:text-5xl">The Four Elements</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-concrete">
            <p>{missionRooted}</p>
            <ul className="list-disc space-y-2 pl-5">
              {elements.map((element) => (
                <li key={element}>{element}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-border bg-vinyl">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:py-20">
          <p className="eyebrow text-gold">Contact Us</p>
          <p className="mt-4 text-lg text-offwhite">
            Questions, ideas, or want to get involved? Reach out on Instagram or email the team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ExternalButton href={socialLinks.instagram.url} variant="outline">
              Message on Instagram
            </ExternalButton>
            <a
              href="mailto:info@lowellhiphopfestival.org"
              className="label-type inline-flex min-h-11 items-center justify-center border-2 border-offwhite px-6 py-3 text-sm text-offwhite transition-colors hover:border-gold hover:bg-gold hover:text-vinyl"
            >
              Email the Team
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:py-20">
        <p className="eyebrow text-gold">Nonprofit Status</p>
        <p className="mt-4 text-lg text-offwhite">{fiscalSponsorshipLine}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ExternalButton href={donateUrl} variant="gold">
            Donate
          </ExternalButton>
          <InternalButton to="/get-involved">Get Involved</InternalButton>
          <InternalButton to="/sponsors">Sponsor the Festival</InternalButton>
        </div>
      </section>
    </SiteLayout>
  );
}

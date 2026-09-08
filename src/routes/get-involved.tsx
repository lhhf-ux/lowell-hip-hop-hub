import { createFileRoute } from "@tanstack/react-router";

import { ExternalButton } from "@/components/site/Button";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { donateUrl, socialLinks, volunteerRoles, volunteerUrl } from "@/content";

const title = "Get Involved — Lowell Hip-Hop Festival";
const description =
  "Volunteer, donate, or perform. The Lowell Hip-Hop Festival is built by the community — here is how to be part of it.";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: GetInvolvedPage,
});

function GetInvolvedPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Volunteer · Donate · Perform"
        title="Get Involved"
        intro="No committee, no gatekeeping. If you want to help, there is a job for you."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <h2 className="text-3xl text-offwhite sm:text-4xl">Volunteer</h2>
        <div className="mt-8 grid gap-px bg-border sm:grid-cols-2">
          {volunteerRoles.map((role) => (
            <article key={role.title} className="bg-cardgray p-6">
              <h3 className="text-xl text-offwhite">{role.title}</h3>
              <p className="mt-2 text-concrete">{role.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <ExternalButton href={volunteerUrl}>Volunteer Sign-up</ExternalButton>
        </div>
      </section>

      <section className="border-t-2 border-border bg-cardgray">
        <div className="mx-auto grid max-w-6xl gap-px bg-border px-0 sm:grid-cols-2">
          <div className="bg-vinyl p-8 sm:p-12">
            <h2 className="text-3xl text-offwhite">Donate</h2>
            <p className="mt-3 text-concrete">
              Every dollar goes to artist fees, venue costs, and free workshops. Donations are tax-deductible through
              our fiscal sponsor.
            </p>
            <div className="mt-6">
              <ExternalButton href={donateUrl}>Donate Now</ExternalButton>
            </div>
          </div>
          <div className="bg-vinyl p-8 sm:p-12">
            <h2 className="text-3xl text-offwhite">Perform or Teach</h2>
            <p className="mt-3 text-concrete">
              Artists, DJs, dancers, and writers: send us your work. Message us on social or email the team and tell us
              what you do.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
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
        </div>
      </section>
    </SiteLayout>
  );
}

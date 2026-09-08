import { createFileRoute } from "@tanstack/react-router";

import { ExternalButton } from "@/components/site/Button";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { donateUrl, fiscalSponsorshipLine, sponsorTiers } from "@/content";

const title = "Sponsors — Lowell Hip-Hop Festival";
const description =
  "Sponsor the Lowell Hip-Hop Festival. Tax-deductible support through the Greater Lowell Community Foundation keeps our workshops, battles, and shows free and community-run.";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: SponsorsPage,
});

function SponsorsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Partner with us"
        title="Sponsors"
        intro="Sponsorship pays the artists, rents the rooms, and keeps almost everything we do free to attend."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="grid gap-px bg-border lg:grid-cols-3">
          {sponsorTiers.map((tier) => (
            <article key={tier.id} className="bg-cardgray p-6 sm:p-8">
              <p className="eyebrow text-gold">{tier.amount}</p>
              <h2 className="mt-2 text-2xl text-offwhite sm:text-3xl">{tier.name}</h2>
              <ul className="mt-5 space-y-2">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm text-concrete">
                    <span className="mt-2 inline-block h-2 w-2 shrink-0 bg-graffiti" aria-hidden="true" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 border-4 border-gold bg-vinyl p-8 text-center">
          <h2 className="text-3xl text-offwhite sm:text-4xl">Ready to sponsor?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-concrete">
            All contributions are tax-deductible. {fiscalSponsorshipLine}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ExternalButton href={donateUrl}>Donate / Sponsor</ExternalButton>
            <a
              href="mailto:info@lowellhiphopfestival.org"
              className="label-type inline-flex min-h-11 items-center justify-center border-2 border-offwhite px-6 py-3 text-sm text-offwhite transition-colors hover:border-gold hover:bg-gold hover:text-vinyl"
            >
              Email the Team
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

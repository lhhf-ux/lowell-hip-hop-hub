import { createFileRoute } from "@tanstack/react-router";

import { ExternalButton } from "@/components/site/Button";
import { PageHeader, SiteLayout } from "@/components/site/Layout";
import { currentSponsors, donateUrl, fiscalSponsorshipLine, sponsorTiers } from "@/content";

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
  const goldSponsors = currentSponsors.filter((s) => s.tier === "gold");
  const silverSponsors = currentSponsors.filter((s) => s.tier === "silver");

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Partner with us"
        title="Sponsors"
        intro="Sponsorship pays the artists, rents the rooms, and keeps almost everything we do free to attend."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="border-2 border-gold bg-vinyl p-8 sm:p-12">
          <p className="eyebrow text-gold">Current sponsors</p>

          {goldSponsors.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl text-offwhite sm:text-3xl">Gold Sponsors</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {goldSponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-offwhite p-6 transition-opacity hover:opacity-90"
                    aria-label={`${sponsor.name} (opens in new tab)`}
                  >
                    <img
                      src={sponsor.logoAsset.url}
                      alt={sponsor.name}
                      className="max-h-32 w-full object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          {silverSponsors.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl text-offwhite sm:text-3xl">Silver Sponsors</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {silverSponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-offwhite p-6 transition-opacity hover:opacity-90"
                    aria-label={`${sponsor.name} (opens in new tab)`}
                  >
                    <img
                      src={sponsor.logoAsset.url}
                      alt={sponsor.name}
                      className="max-h-28 w-full object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-14 grid gap-px bg-border lg:grid-cols-3">
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

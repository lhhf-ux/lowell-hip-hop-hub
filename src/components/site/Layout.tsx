import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import wordmark from "@/assets/lhhf-wordmark.png.asset.json";
import { fiscalSponsorshipLine, socialLinks } from "@/content";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/lineup", label: "Lineup" },
  { to: "/schedule", label: "Schedule" },
  { to: "/calendar", label: "Calendar" },
  { to: "/events", label: "Events" },
  { to: "/venues", label: "Venues" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/about", label: "About" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b-4 border-gold bg-vinyl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="block shrink-0" onClick={() => setOpen(false)}>
          <img src={wordmark.url} alt="Lowell Hip-Hop Festival" className="h-12 w-auto sm:h-14" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="label-type text-xs text-offwhite hover:text-gold"
                  activeProps={{ className: "label-type text-xs text-gold" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="label-type flex h-11 items-center border-2 border-offwhite px-4 text-xs text-offwhite lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav aria-label="Mobile" className="border-t-2 border-border bg-cardgray lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {navItems.map((item) => (
              <li key={item.to} className="border-b border-border last:border-b-0">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="label-type block py-3 text-sm text-offwhite"
                  activeProps={{ className: "label-type block py-3 text-sm text-gold" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t-4 border-gold bg-vinyl">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center">
        <div className="flex items-center justify-center gap-6">
          <a
            href={socialLinks.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lowell Hip-Hop Festival on Instagram"
            className="text-offwhite transition-colors hover:text-gold"
          >
            <InstagramIcon className="h-8 w-8" />
          </a>
          <a
            href={socialLinks.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lowell Hip-Hop Festival on Facebook"
            className="text-offwhite transition-colors hover:text-gold"
          >
            <FacebookIcon className="h-8 w-8" />
          </a>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-sm text-concrete">{fiscalSponsorshipLine}</p>
        <p className="eyebrow mt-6 text-concrete">Lowell, Massachusetts</p>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-vinyl">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="grain border-b-2 border-border bg-vinyl">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-4 text-5xl text-offwhite sm:text-7xl">{title}</h1>
        {intro ? <p className="mt-5 max-w-2xl text-concrete">{intro}</p> : null}
      </div>
    </section>
  );
}

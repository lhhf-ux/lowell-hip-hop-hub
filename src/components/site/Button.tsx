import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

type Variant = "gold" | "outline" | "dark";

const base =
  "inline-flex items-center justify-center label-type text-sm px-6 py-3 border-2 transition-colors min-h-11";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-vinyl border-gold hover:bg-offwhite hover:border-offwhite",
  outline: "bg-transparent text-offwhite border-offwhite hover:bg-gold hover:text-vinyl hover:border-gold",
  dark: "bg-vinyl text-offwhite border-vinyl hover:bg-gold hover:text-vinyl hover:border-gold",
};

export function ExternalButton({
  href,
  children,
  variant = "gold",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export function InternalButton({
  to,
  children,
  variant = "outline",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="20" height="20" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false">
      <path d="M14.2 22v-8.2h2.8l.42-3.2H14.2V8.55c0-.93.26-1.56 1.6-1.56h1.7V4.13A22.5 22.5 0 0 0 15.02 4c-2.46 0-4.14 1.5-4.14 4.25v2.35H8v3.2h2.88V22h3.32Z" />
    </svg>
  );
}

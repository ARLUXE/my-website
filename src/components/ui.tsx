import { Link } from "react-router-dom";
import type { ReactNode } from "react";

// A reusable browser-window frame for showcasing website mockups.
export function BrowserFrame({
  url,
  children,
  className = "",
}: {
  url?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-ink-900 shadow-card overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-ink-800/60">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1">
          <div className="px-3 py-1 rounded-md bg-white/5 text-[11px] text-white/40 font-mono truncate max-w-xs">
            {url ?? "https://"}
          </div>
        </div>
      </div>
      <div className="bg-ink-950">{children}</div>
    </div>
  );
}

// A phone frame for mobile mockups.
export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[2rem] border border-white/10 bg-ink-900 p-2 shadow-card ${className}`}
    >
      <div className="rounded-[1.6rem] overflow-hidden bg-ink-950 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-ink-900 rounded-b-xl z-10" />
        {children}
      </div>
    </div>
  );
}

export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
      <span className="w-6 h-px bg-accent/60" />
      {children}
    </div>
  );
}

export function ButtonLink({
  to,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950";
  const styles = {
    primary:
      "bg-white text-ink-950 hover:bg-white/90 hover:shadow-glow hover:-translate-y-0.5",
    ghost:
      "text-white/80 hover:text-white border border-white/10 hover:border-white/30 hover:bg-white/5",
    outline:
      "accent-grad text-white hover:shadow-glow hover:-translate-y-0.5",
  } as const;

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function ExternalButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70";
  const styles = {
    primary: "bg-white text-ink-950 hover:bg-white/90 hover:shadow-glow hover:-translate-y-0.5",
    ghost: "text-white/80 hover:text-white border border-white/10 hover:border-white/30 hover:bg-white/5",
    outline: "accent-grad text-white hover:shadow-glow hover:-translate-y-0.5",
  } as const;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

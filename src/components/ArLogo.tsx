// AR STUDIO — Simple bold "AR" wordmark logo.
// Monochrome — inherits currentColor. Used in navbar, footer, and favicon.

// Bold capital "AR" text mark.
export function ArMonogram({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`font-display font-extrabold leading-none ${className}`}
      style={{ fontSize: Math.round(size * 0.5) }}
      aria-hidden="true"
    >
      AR
    </span>
  );
}

// Full lockup: monogram badge + wordmark. Used in navbar and footer.
export function ArLogo({
  size = 36,
  className = "",
  showWordmark = true,
}: {
  size?: number;
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="grid place-items-center rounded-xl shrink-0 transition-transform duration-300"
        style={{
          width: Math.round(size * 1.05),
          height: Math.round(size * 1.05),
          background: "linear-gradient(135deg, #1a1a2e 0%, #0d0d14 100%)",
          border: "1px solid rgba(139,145,255,0.25)",
          boxShadow: "0 0 20px rgba(91,108,255,0.12), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <ArMonogram size={size * 0.62} className="text-white tracking-tight" />
      </span>
      {showWordmark && (
        <span className="font-display font-bold text-lg tracking-tight leading-none">
          AR<span className="text-white/40"> Studio</span>
        </span>
      )}
    </span>
  );
}

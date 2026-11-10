export function JournalMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 280"
      className={className}
      role="img"
      aria-label="Illustrated journal composition"
    >
      <rect x="24" y="36" width="180" height="220" rx="10" fill="var(--bg-elevated)" stroke="var(--text)" strokeWidth="2.5" />
      <rect x="44" y="56" width="140" height="14" rx="4" fill="var(--accent-green)" opacity="0.85" />
      <rect x="44" y="84" width="120" height="8" rx="3" fill="var(--border)" />
      <rect x="44" y="102" width="132" height="8" rx="3" fill="var(--border)" />
      <rect x="44" y="120" width="100" height="8" rx="3" fill="var(--border)" />
      <circle cx="78" cy="176" r="28" fill="var(--accent-orange)" opacity="0.8" />
      <path d="M120 210 H188" stroke="var(--accent-blue)" strokeWidth="3" strokeLinecap="round" />
      <path d="M120 224 H170" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" />

      <g transform="translate(170 20)">
        <rect x="0" y="40" width="120" height="160" rx="8" fill="var(--accent-blue)" opacity="0.18" stroke="var(--text)" strokeWidth="2.5" />
        <rect x="18" y="62" width="84" height="110" rx="4" fill="var(--bg-elevated)" stroke="var(--text)" strokeWidth="2" />
        <path d="M34 88 H86 M34 108 H78 M34 128 H82" stroke="var(--text-muted)" strokeWidth="3" strokeLinecap="round" />
      </g>

      <path
        d="M40 250 C80 236 120 268 170 248"
        fill="none"
        stroke="var(--accent-orange)"
        strokeWidth="2"
        strokeDasharray="4 6"
      />
      <circle cx="250" cy="230" r="8" fill="var(--accent-green)" />
      <circle cx="272" cy="214" r="5" fill="var(--accent-orange)" />
    </svg>
  );
}

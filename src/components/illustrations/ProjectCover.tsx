import type { Project } from "@/types";

export function ProjectCover({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border ${className}`}
      style={{
        background: `color-mix(in srgb, ${project.accent} 16%, var(--bg-elevated))`,
      }}
      aria-hidden
    >
      <svg viewBox="0 0 400 260" className="h-full w-full">
        <rect width="400" height="260" fill="transparent" />
        {coverFor(project)}
      </svg>
    </div>
  );
}

function coverFor(project: Project) {
  switch (project.slug) {
    case "forge":
      return <ForgeCover accent={project.accent} />;
    case "snip":
      return <SnipCover accent={project.accent} />;
    case "simplestore":
      return <SimpleStoreCover accent={project.accent} />;
    case "investwise":
      return <InvestWiseCover accent={project.accent} />;
    case "fitloop":
      return <FitLoopCover accent={project.accent} />;
    case "layla":
      return <LaylaCover accent={project.accent} />;
    default:
      return <GenericCover accent={project.accent} label={project.name} />;
  }
}

function ForgeCover({ accent }: { accent: string }) {
  const nodes = [
    { x: 80, y: 70 },
    { x: 200, y: 50 },
    { x: 320, y: 80 },
    { x: 120, y: 160 },
    { x: 250, y: 150 },
    { x: 310, y: 200 },
  ];
  return (
    <g>
      <path
        d="M80 70 L200 50 L320 80 L250 150 L120 160 L80 70 M200 50 L250 150 L310 200"
        fill="none"
        stroke={accent}
        strokeWidth="2.5"
        opacity="0.85"
      />
      {nodes.map((node, index) => (
        <g key={index}>
          <circle
            cx={node.x}
            cy={node.y}
            r="16"
            fill="var(--bg-elevated)"
            stroke="var(--text)"
            strokeWidth="2"
          />
          <circle cx={node.x} cy={node.y} r="5" fill={accent} />
        </g>
      ))}
      <text
        x="28"
        y="236"
        fill="var(--text-muted)"
        fontSize="12"
        fontFamily="var(--font-mono)"
      >
        SYMBOLS · EDGES · STRUCTURE
      </text>
    </g>
  );
}

function SnipCover({ accent }: { accent: string }) {
  return (
    <g>
      <rect
        x="36"
        y="36"
        width="328"
        height="180"
        rx="14"
        fill="var(--bg-muted)"
        stroke="var(--text)"
        strokeWidth="2"
      />
      <rect x="52" y="54" width="12" height="12" rx="3" fill="#D58B57" />
      <rect x="72" y="54" width="12" height="12" rx="3" fill="#75866A" />
      <rect x="92" y="54" width="12" height="12" rx="3" fill="#8399A7" />
      {[0, 1, 2, 3, 4].map((row) => (
        <g key={row}>
          <rect
            x="56"
            y={86 + row * 22}
            width={row === 2 ? 90 : 140 + row * 12}
            height="8"
            rx="3"
            fill="var(--text)"
            opacity={row === 2 ? 0.15 : 0.28}
          />
          {row !== 2 ? (
            <path
              d={`M${210 + row * 8} ${90 + row * 22} H${340}`}
              stroke={accent}
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.55"
              strokeDasharray="4 6"
            />
          ) : (
            <text
              x="160"
              y={96 + row * 22}
              fill={accent}
              fontSize="11"
              fontFamily="var(--font-mono)"
            >
              pruned → signal kept
            </text>
          )}
        </g>
      ))}
      <text
        x="36"
        y="244"
        fill="var(--text-muted)"
        fontSize="12"
        fontFamily="var(--font-mono)"
      >
        CLI NOISE → TOKEN BUDGET
      </text>
    </g>
  );
}

function SimpleStoreCover({ accent }: { accent: string }) {
  return (
    <g>
      <path
        d="M70 110 L200 50 L330 110 V210 H70 Z"
        fill="var(--bg-elevated)"
        stroke="var(--text)"
        strokeWidth="2.5"
      />
      <path d="M70 110 H330" stroke="var(--text)" strokeWidth="2" />
      <rect x="120" y="130" width="70" height="80" rx="6" fill={accent} opacity="0.35" stroke="var(--text)" strokeWidth="2" />
      <rect x="210" y="130" width="70" height="80" rx="6" fill="var(--bg-muted)" stroke="var(--text)" strokeWidth="2" />
      <circle cx="155" cy="160" r="14" fill={accent} />
      <rect x="225" y="150" width="40" height="8" rx="2" fill="var(--text)" opacity="0.25" />
      <rect x="225" y="168" width="30" height="8" rx="2" fill="var(--text)" opacity="0.25" />
      <rect x="160" y="200" width="80" height="18" rx="6" fill={accent} />
      <text
        x="36"
        y="244"
        fill="var(--text-muted)"
        fontSize="12"
        fontFamily="var(--font-mono)"
      >
        STOREFRONT · API · POSTGRES
      </text>
    </g>
  );
}

function InvestWiseCover({ accent }: { accent: string }) {
  return (
    <g>
      <rect
        x="40"
        y="40"
        width="320"
        height="170"
        rx="14"
        fill="var(--bg-elevated)"
        stroke="var(--text)"
        strokeWidth="2"
      />
      <path
        d="M70 170 L120 140 L160 150 L210 100 L260 120 L320 70"
        fill="none"
        stroke={accent}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="320" cy="70" r="6" fill={accent} />
      <rect x="60" y="56" width="54" height="28" rx="6" fill="var(--bg-muted)" />
      <rect x="124" y="56" width="54" height="28" rx="6" fill="var(--bg-muted)" />
      <rect x="188" y="56" width="54" height="28" rx="6" fill="var(--bg-muted)" />
      <text
        x="40"
        y="244"
        fill="var(--text-muted)"
        fontSize="12"
        fontFamily="var(--font-mono)"
      >
        PORTFOLIO SIGNALS · GO SERVICES
      </text>
    </g>
  );
}

function FitLoopCover({ accent }: { accent: string }) {
  return (
    <g>
      <rect
        x="48"
        y="36"
        width="140"
        height="180"
        rx="18"
        fill="var(--bg-elevated)"
        stroke="var(--text)"
        strokeWidth="2.5"
      />
      <rect x="68" y="56" width="100" height="14" rx="4" fill={accent} opacity="0.8" />
      <rect x="68" y="88" width="100" height="48" rx="10" fill="var(--bg-muted)" />
      <path
        d="M80 120 C100 90, 130 90, 150 120"
        fill="none"
        stroke={accent}
        strokeWidth="3"
      />
      <rect x="68" y="152" width="46" height="36" rx="8" fill={accent} opacity="0.35" />
      <rect x="122" y="152" width="46" height="36" rx="8" fill="var(--bg-muted)" />
      <rect
        x="220"
        y="50"
        width="140"
        height="150"
        rx="14"
        fill="var(--bg-elevated)"
        stroke="var(--text)"
        strokeWidth="2"
      />
      <rect x="240" y="70" width="100" height="10" rx="3" fill="var(--text)" opacity="0.2" />
      <rect x="240" y="96" width="100" height="10" rx="3" fill="var(--text)" opacity="0.2" />
      <rect x="240" y="122" width="70" height="10" rx="3" fill={accent} opacity="0.7" />
      <circle cx="300" cy="170" r="22" fill={accent} opacity="0.35" stroke={accent} strokeWidth="3" />
      <text
        x="48"
        y="244"
        fill="var(--text-muted)"
        fontSize="12"
        fontFamily="var(--font-mono)"
      >
        WORKOUTS · NUTRITION · API
      </text>
    </g>
  );
}

function LaylaCover({ accent }: { accent: string }) {
  return (
    <g>
      <rect
        x="70"
        y="50"
        width="120"
        height="150"
        rx="10"
        fill="var(--bg-elevated)"
        stroke="var(--text)"
        strokeWidth="2.5"
      />
      <rect x="90" y="70" width="80" height="90" rx="8" fill={accent} opacity="0.35" />
      <ellipse cx="130" cy="130" rx="28" ry="34" fill={accent} opacity="0.7" />
      <rect x="118" y="88" width="24" height="18" rx="4" fill="var(--bg-muted)" stroke="var(--text)" strokeWidth="1.5" />
      <path
        d="M130 70 Q138 58 130 48 Q122 58 130 70"
        fill="none"
        stroke="var(--text-muted)"
        strokeWidth="2"
      />
      <rect
        x="220"
        y="70"
        width="120"
        height="110"
        rx="12"
        fill="var(--bg-elevated)"
        stroke="var(--text)"
        strokeWidth="2"
      />
      <rect x="240" y="90" width="80" height="10" rx="3" fill={accent} opacity="0.7" />
      <rect x="240" y="112" width="60" height="8" rx="3" fill="var(--text)" opacity="0.2" />
      <rect x="240" y="130" width="70" height="8" rx="3" fill="var(--text)" opacity="0.2" />
      <text
        x="70"
        y="244"
        fill="var(--text-muted)"
        fontSize="12"
        fontFamily="var(--font-mono)"
      >
        HANDCRAFTED · EDITORIAL SHOP
      </text>
    </g>
  );
}

function GenericCover({ accent, label }: { accent: string; label: string }) {
  return (
    <g>
      <rect
        x="60"
        y="50"
        width="280"
        height="150"
        rx="16"
        fill="var(--bg-elevated)"
        stroke="var(--text)"
        strokeWidth="2"
      />
      <circle cx="200" cy="125" r="36" fill={accent} opacity="0.4" />
      <text
        x="200"
        y="230"
        textAnchor="middle"
        fill="var(--text-muted)"
        fontSize="12"
        fontFamily="var(--font-mono)"
      >
        {label.toUpperCase()}
      </text>
    </g>
  );
}

export function ForgeArchitecture() {
  return (
    <svg
      viewBox="0 0 720 280"
      className="h-auto w-full"
      role="img"
      aria-label="Forge architecture overview diagram"
    >
      <rect width="720" height="280" rx="24" fill="var(--bg-muted)" />
      {[
        { x: 40, label: "Source" },
        { x: 200, label: "Analysis" },
        { x: 360, label: "Graphs" },
        { x: 520, label: "Inspection" },
      ].map((node, index) => (
        <g key={node.label}>
          <rect
            x={node.x}
            y="90"
            width="140"
            height="90"
            rx="18"
            fill="var(--bg-elevated)"
            stroke="var(--text)"
            strokeWidth="2.5"
          />
          <text
            x={node.x + 70}
            y="143"
            textAnchor="middle"
            fill="var(--text)"
            fontSize="18"
            fontFamily="var(--font-space), sans-serif"
          >
            {node.label}
          </text>
          {index < 3 ? (
            <path
              d={`M${node.x + 140} 135 H${node.x + 160}`}
              stroke="var(--accent-orange)"
              strokeWidth="3"
              markerEnd="url(#arrow)"
            />
          ) : null}
        </g>
      ))}
      <defs>
        <marker
          id="arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--accent-orange)" />
        </marker>
      </defs>
      <text
        x="40"
        y="40"
        fill="var(--text-muted)"
        fontSize="12"
        fontFamily="var(--font-ibm-plex-mono), monospace"
      >
        FORGE · HIGH-LEVEL FLOW (SIMPLIFIED)
      </text>
    </svg>
  );
}

export function SimpleStoreArchitecture() {
  return (
    <svg
      viewBox="0 0 720 280"
      className="h-auto w-full"
      role="img"
      aria-label="SimpleStore architecture overview diagram"
    >
      <rect width="720" height="280" rx="24" fill="var(--bg-muted)" />
      {[
        { x: 60, y: 70, label: "Next.js UI", color: "var(--accent-orange)" },
        { x: 280, y: 70, label: "FastAPI", color: "var(--accent-blue)" },
        { x: 500, y: 70, label: "PostgreSQL", color: "var(--accent-green)" },
      ].map((node) => (
        <g key={node.label}>
          <rect
            x={node.x}
            y={node.y}
            width="160"
            height="120"
            rx="20"
            fill="var(--bg-elevated)"
            stroke={node.color}
            strokeWidth="3"
          />
          <text
            x={node.x + 80}
            y={node.y + 68}
            textAnchor="middle"
            fill="var(--text)"
            fontSize="18"
            fontFamily="var(--font-space), sans-serif"
          >
            {node.label}
          </text>
        </g>
      ))}
      <path
        d="M220 130 H280 M440 130 H500"
        stroke="var(--text)"
        strokeWidth="3"
        opacity="0.35"
      />
      <text
        x="60"
        y="40"
        fill="var(--text-muted)"
        fontSize="12"
        fontFamily="var(--font-ibm-plex-mono), monospace"
      >
        SIMPLESTORE · PRODUCT STACK
      </text>
    </svg>
  );
}

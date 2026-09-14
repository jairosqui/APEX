const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
};

export function IconTarget({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

export function IconFlow({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M4 7h9" />
      <path d="M4 12h16" />
      <path d="M4 17h6" />
      <path d="M17 5l3 2-3 2" />
      <path d="M13 15l3 2-3 2" />
    </svg>
  );
}

export function IconGear({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M12 4v3" />
      <path d="M12 17v3" />
      <path d="M4.9 6.6l2.1 2.1" />
      <path d="M17 15.3l2.1 2.1" />
      <path d="M4 12h3" />
      <path d="M17 12h3" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function IconChart({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M5 19V11" />
      <path d="M12 19V5" />
      <path d="M19 19v-6" />
      <path d="M3 21h18" />
    </svg>
  );
}

export function IconList({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M4 6h16" />
      <path d="M4 12h10" />
      <path d="M4 18h13" />
      <path d="M18 10l2 2-2 2" />
    </svg>
  );
}

export function IconGrowth({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M4 17l5-5 3 3 7-7" />
      <path d="M15 8h4v4" />
    </svg>
  );
}

export function IconArrowRight({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M4 12h16" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

export function IconPhone({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />
    </svg>
  );
}

export function IconPin({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M12 21s7-5.2 7-10.5A7 7 0 0 0 5 10.5C5 15.8 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  );
}

export function IconClock({ className }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5l3 1.5" />
    </svg>
  );
}

export function IconGlobe({ className }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4a13 13 0 0 1 0 16 13 13 0 0 1 0-16z" />
    </svg>
  );
}

export function IconCheck({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

// Marca APEX: dos chevrones ascendentes.
export function ApexMark({ className, top = "#071B46", bottom = "#173CFF" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <polygon points="50,6 98,54 78,54 50,26 22,54 2,54" fill={top} />
      <polygon points="50,46 86,82 68,82 50,64 32,82 14,82" fill={bottom} />
    </svg>
  );
}

export const ICONS = {
  target: IconTarget,
  flow: IconFlow,
  gear: IconGear,
  chart: IconChart,
  list: IconList,
  growth: IconGrowth,
  arrow: IconArrowRight,
  phone: IconPhone,
  pin: IconPin,
  clock: IconClock,
  globe: IconGlobe,
  check: IconCheck,
};

export function Icon({ name, className }) {
  const Cmp = ICONS[name] ?? IconTarget;
  return <Cmp className={className} />;
}

"use client";

import { motion } from "framer-motion";

/**
 * Composiciones 3D abstractas hechas 100% en SVG.
 * Sin fotos de stock: el brief pide gráficos abstractos, no imágenes corporativas genéricas.
 */

export function HeroVisual({ className = "" }) {
  const bars = [
    { x: 236, h: 54, o: 0.35 },
    { x: 274, h: 92, o: 0.55 },
    { x: 312, h: 138, o: 1 },
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 420 380"
      role="img"
      aria-label="Abstract composition of layered planes and a rising chart"
    >
      <defs>
        <linearGradient id="hv-plane-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3468FF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#173CFF" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="hv-plane-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id="hv-plane-c" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9EB6FF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#173CFF" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="hv-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3468FF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#071B46" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="210" cy="190" r="170" fill="url(#hv-glow)" />

      {/* Planos isométricos apilados */}
      <motion.g
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.polygon
          points="210,300 350,232 210,164 70,232"
          fill="url(#hv-plane-c)"
          stroke="#3468FF"
          strokeOpacity="0.35"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.polygon
          points="210,244 350,176 210,108 70,176"
          fill="url(#hv-plane-b)"
          stroke="#FFFFFF"
          strokeOpacity="0.22"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
        <motion.polygon
          points="210,188 350,120 210,52 70,120"
          fill="url(#hv-plane-a)"
          stroke="#7FA0FF"
          strokeOpacity="0.5"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
      </motion.g>

      {/* Barras de crecimiento */}
      <g transform="translate(-118, 92)">
        {bars.map((b, i) => (
          <motion.rect
            key={b.x}
            x={b.x}
            y={200 - b.h}
            width="22"
            height={b.h}
            rx="5"
            fill="#FFFFFF"
            fillOpacity={b.o}
            style={{ transformOrigin: `${b.x + 11}px 200px` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.7, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
        <motion.path
          d="M247 132 L285 104 L323 58"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="120"
          initial={{ strokeDashoffset: 120 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1.1, delay: 0.9, ease: "easeOut" }}
        />
        <motion.circle
          cx="323"
          cy="58"
          r="5"
          fill="#FFFFFF"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 1.9 }}
        />
      </g>

      {/* Nodos orbitales */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "210px 190px" }}
      >
        <circle cx="210" cy="30" r="4" fill="#7FA0FF" />
        <circle cx="378" cy="230" r="3" fill="#3468FF" />
        <circle cx="52" cy="248" r="3.5" fill="#9EB6FF" />
      </motion.g>
    </svg>
  );
}

export function MethodVisual({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 360"
      role="img"
      aria-label="Abstract diagram of connected process nodes"
    >
      <defs>
        <linearGradient id="mv-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#173CFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#3468FF" stopOpacity="0.03" />
        </linearGradient>
        <linearGradient id="mv-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#173CFF" />
          <stop offset="100%" stopColor="#3468FF" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="420" height="360" rx="22" fill="url(#mv-a)" />

      {/* Retícula */}
      <g stroke="#173CFF" strokeOpacity="0.09">
        {[60, 120, 180, 240, 300].map((y) => (
          <line key={`h${y}`} x1="24" y1={y} x2="396" y2={y} />
        ))}
        {[84, 168, 252, 336].map((x) => (
          <line key={`v${x}`} x1={x} y1="30" x2={x} y2="330" />
        ))}
      </g>

      {/* Ruta del método */}
      <motion.path
        d="M64 288 C 120 288, 116 200, 168 200 S 236 122, 292 122 L 356 78"
        fill="none"
        stroke="url(#mv-b)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="420"
        initial={{ strokeDashoffset: 420 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />

      {[
        { cx: 64, cy: 288 },
        { cx: 168, cy: 200 },
        { cx: 292, cy: 122 },
        { cx: 356, cy: 78 },
      ].map((n, i) => (
        <motion.g
          key={n.cx}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.28 }}
        >
          <circle cx={n.cx} cy={n.cy} r="14" fill="#FFFFFF" stroke="#E3E8F2" />
          <circle cx={n.cx} cy={n.cy} r="5.5" fill="#173CFF" />
        </motion.g>
      ))}

      {/* Tarjeta flotante */}
      <motion.g
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <rect x="222" y="232" width="150" height="72" rx="14" fill="#071B46" />
        <rect x="240" y="256" width="16" height="28" rx="3" fill="#FFFFFF" fillOpacity="0.35" />
        <rect x="264" y="244" width="16" height="40" rx="3" fill="#FFFFFF" fillOpacity="0.6" />
        <rect x="288" y="230" width="16" height="54" rx="3" fill="#3468FF" />
        <rect x="316" y="252" width="42" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.5" />
        <rect x="316" y="266" width="28" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.28" />
      </motion.g>
    </svg>
  );
}

export function GridBackdrop({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-[0.05] ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
        backgroundSize: "88px 88px",
      }}
    />
  );
}

export function GlowOrb({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(52,104,255,0.55), rgba(7,27,70,0) 68%)",
      }}
    />
  );
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#071B46",
          deep: "#050F2B",
          soft: "#3C4A6B",
        },
        electric: "#173CFF",
        azure: "#3468FF",
        mist: "#F5F7FB",
        line: "#E3E8F2",
        slate: {
          muted: "#5A6785",
        },
        sky: {
          pale: "#B9C6E6",
          mid: "#9EB6FF",
          bright: "#7FA0FF",
        },
      },
      fontFamily: {
        sans: [
          "Archivo Variable",
          "Archivo",
          "ui-sans-serif",
          "system-ui",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        shell: "1240px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.08)" },
        },
        drawUp: {
          from: { transform: "scaleY(0)" },
          to: { transform: "scaleY(1)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        floaty: "floaty 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 9s ease-in-out infinite",
      },
      boxShadow: {
        card: "0 28px 50px -30px rgba(7, 27, 70, 0.45)",
        cardLift: "0 30px 55px -32px rgba(7, 27, 70, 0.5)",
        float: "0 40px 80px -30px rgba(0, 0, 0, 0.7)",
        chip: "0 24px 44px -22px rgba(7, 27, 70, 0.6)",
      },
    },
  },
  plugins: [],
};

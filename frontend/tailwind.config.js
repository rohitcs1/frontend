/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"SFMono-Regular"', 'monospace'],
      },
      colors: {
        panel: '#0f172a',
        panelAlt: '#111827',
        line: '#1f2a3d',
        accent: '#5eead4',
        alert: '#f97316',
        warning: '#facc15',
        danger: '#f87171',
        safe: '#34d399',
      },
      boxShadow: {
        control: '0 0 0 1px rgba(148,163,184,0.1), 0 12px 40px rgba(15, 23, 42, 0.45)',
      },
    },
  },
  plugins: [],
};

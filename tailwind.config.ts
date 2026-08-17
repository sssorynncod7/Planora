import type { Config } from 'tailwindcss';
const config: Config = { darkMode: ['class'], content: ['./src/**/*.{ts,tsx,mdx}'], theme: { extend: { colors: { border: 'hsl(var(--border))', background: 'hsl(var(--background))', foreground: 'hsl(var(--foreground))', muted: 'hsl(var(--muted))', primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' } }, boxShadow: { glow: '0 20px 70px rgba(79,70,229,.18)' } } }, plugins: [] };
export default config;

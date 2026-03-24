import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['section-container', 'max-w-7xl mx-auto px-6 py-24'],
    ['glass-card', 'backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300'],
    ['neon-border', 'border border-[#ff5f1f]/30 hover:border-[#ff5f1f]/60 shadow-[0_0_15px_rgba(255,95,31,0.1)] hover:shadow-[0_0_25px_rgba(255,95,31,0.2)] transition-all duration-300'],
    ['btn-primary', 'bg-[#ff5f1f] text-black px-8 py-3 rounded-full font-bold hover:shadow-[0_0_30px_rgba(255,95,31,0.5)] transition-all duration-300 active:scale-95 font-mono'],
    ['btn-secondary', 'border border-[#ff5f1f] text-[#ff5f1f] px-8 py-3 rounded-full font-bold hover:bg-[#ff5f1f]/10 transition-all duration-300 active:scale-95 font-mono'],
    ['text-gradient', 'bg-clip-text text-transparent bg-gradient-to-r from-[#ff5f1f] to-[#ffb347]'],
  ],
  theme: {
    colors: {
      neonOrange: '#ff5f1f',
      deepBlack: '#0a0a0a',
      softGray: '#a0a0a0',
    },
    fontFamily: {
      sans: 'var(--font-zen-dots)',
      mono: 'var(--font-geist)',
    },
  },
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})

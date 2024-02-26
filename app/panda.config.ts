import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['../panda.config'],
  include: ['./src/**/*.{ts,tsx}'],
  outdir: 'styled-system',
})

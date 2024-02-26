import { defineConfig } from '@pandacss/dev'

const dasherize = (tokenPath: string[]): string =>
  tokenPath
    .join('-')
    .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
    .toLowerCase()

export default defineConfig({
  hash: (process.env.PANDA_ENV ?? process.env.NODE_ENV) === 'production',
  clean: true,
  eject: true,
  exclude: [],
  include: ['./src/**/*.{ts,tsx}'],
  lightningcss: true,
  polyfill: true,
  shorthands: false,
  jsxFramework: 'react',
  jsxStyleProps: 'minimal',
  separator: '-',
  outdir: 'styled-system',
  outExtension: 'js',
  preflight: false,
  presets: ['@pandacss/preset-base'],
  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
    defaultTheme: '[data-theme=default] &',
  },
  theme: {
    tokens: {
      colors: {
        red: {
          100: { value: '#FF0000' },
        },
        blue: {
          100: { value: '#0000FF' },
        },
        yellow: {
          100: { value: '#FFFF00' },
        },
        green: {
          100: { value: '#00FF00' },
        },
      },
      spacing: {
        50: { value: '0.5rem' },
        100: { value: '1rem' },
        200: { value: '2rem' },
        300: { value: '3rem' },
      }
    },
    semanticTokens: {
      colors: {
        info: { value: '{colors.blue.100}' },
        error: { value: '{colors.red.100}' },
        warning: { value: '{colors.yellow.100}' },
        success: { value: '{colors.green.100}' },
      },
    },
  },
  hooks: {
    'tokens:created': ({ configure }) => {
      configure({
        formatTokenName: path => {
          const dasherized = dasherize(path)
          if (dasherized.startsWith('spacing--')) {
            return `-$spacing-${dasherized.replace('spacing--', '')}`
          }
          return `$${dasherized}`
        },
        formatCssVar: path => {
          const variable = `--${dasherize(path)}` as const
          return {
            var: variable,
            ref: `var(${variable})`,
          }
        },
      })
    },
  },
})

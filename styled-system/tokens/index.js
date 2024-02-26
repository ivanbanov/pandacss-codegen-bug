const tokens = {
  "$colors-red-100": {
    "value": "#FF0000",
    "variable": "var(--colors-red-100)"
  },
  "$colors-blue-100": {
    "value": "#0000FF",
    "variable": "var(--colors-blue-100)"
  },
  "$colors-yellow-100": {
    "value": "#FFFF00",
    "variable": "var(--colors-yellow-100)"
  },
  "$colors-green-100": {
    "value": "#00FF00",
    "variable": "var(--colors-green-100)"
  },
  "$spacing-50": {
    "value": "0.5rem",
    "variable": "var(--spacing-50)"
  },
  "$spacing-100": {
    "value": "1rem",
    "variable": "var(--spacing-100)"
  },
  "$spacing-200": {
    "value": "2rem",
    "variable": "var(--spacing-200)"
  },
  "$spacing-300": {
    "value": "3rem",
    "variable": "var(--spacing-300)"
  },
  "$colors-info": {
    "value": "var(--colors-info)",
    "variable": "var(--colors-info)"
  },
  "$colors-error": {
    "value": "var(--colors-error)",
    "variable": "var(--colors-error)"
  },
  "$colors-warning": {
    "value": "var(--colors-warning)",
    "variable": "var(--colors-warning)"
  },
  "$colors-success": {
    "value": "var(--colors-success)",
    "variable": "var(--colors-success)"
  },
  "-$spacing-50": {
    "value": "calc(var(--spacing-50) * -1)",
    "variable": "var(--spacing-50)"
  },
  "-$spacing-100": {
    "value": "calc(var(--spacing-100) * -1)",
    "variable": "var(--spacing-100)"
  },
  "-$spacing-200": {
    "value": "calc(var(--spacing-200) * -1)",
    "variable": "var(--spacing-200)"
  },
  "-$spacing-300": {
    "value": "calc(var(--spacing-300) * -1)",
    "variable": "var(--spacing-300)"
  },
  "$colors-color-palette-100": {
    "value": "var(--colors-color-palette-100)",
    "variable": "var(--colors-color-palette-100)"
  },
  "$colors-color-palette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar
/* eslint-disable */
export type Token = "colors.red.100" | "colors.blue.100" | "colors.yellow.100" | "colors.green.100" | "spacing.50" | "spacing.100" | "spacing.200" | "spacing.300" | "colors.info" | "colors.error" | "colors.warning" | "colors.success" | "spacing.-50" | "spacing.-100" | "spacing.-200" | "spacing.-300" | "colors.colorPalette.100" | "colors.colorPalette"

export type ColorPalette = "red" | "blue" | "yellow" | "green" | "info" | "error" | "warning" | "success"

export type ColorToken = "red.100" | "blue.100" | "yellow.100" | "green.100" | "info" | "error" | "warning" | "success" | "colorPalette.100" | "colorPalette"

export type SpacingToken = "50" | "100" | "200" | "300" | "-50" | "-100" | "-200" | "-300"

export type Tokens = {
		colors: ColorToken
		spacing: SpacingToken
		animationName: AnimationName
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"
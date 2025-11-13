/**
 * INVERITA Brand Colors
 * 
 * These colors are defined according to the INVERITA brand guidelines.
 * Use these constants when you need to reference colors in TypeScript/JavaScript code.
 * 
 * For CSS usage, prefer the CSS custom properties defined in styles.css:
 * - var(--inverita-blue)
 * - var(--inverita-turquoise)
 * - var(--inverita-yellow)
 * - var(--inverita-black)
 * - var(--inverita-white)
 * - var(--inverita-light-grey)
 */

export const INVERITA_COLORS = {
  // Primary Brand Colors
  blue: '#0072DA',
  turquoise: '#64CCC9',
  yellow: '#F2EDA8',
  
  // Additional Brand Colors
  black: '#231F20',
  white: '#FFFFFF',
  lightGrey: '#E6E7E8',
  
  // Color Variations
  blueHover: '#0056a8',
  blueLight: '#e6f2ff',
} as const;

/**
 * Semantic color mappings for common use cases
 */
export const COLORS = {
  primary: INVERITA_COLORS.blue,
  secondary: INVERITA_COLORS.turquoise,
  accent: INVERITA_COLORS.yellow,
  text: INVERITA_COLORS.black,
  background: INVERITA_COLORS.white,
  border: INVERITA_COLORS.lightGrey,
  primaryHover: INVERITA_COLORS.blueHover,
  primaryLight: INVERITA_COLORS.blueLight,
} as const;


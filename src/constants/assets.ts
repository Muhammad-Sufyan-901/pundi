/**
 * Centralized image assets constants
 * Import images here to use throughout the app with proper TypeScript support
 */

// App Icons
export const APP_ICONS = {
  androidBackground: require("../../assets/images/android-icon-background.png"),
  androidForeground: require("../../assets/images/android-icon-foreground.png"),
  androidMonochrome: require("../../assets/images/android-icon-monochrome.png"),
  favicon: require("../../assets/images/favicon.png"),
  icon: require("../../assets/images/icon.png"),
  splash: require("../../assets/images/splash-icon.png"),
} as const;

// Initial/Onboarding Images
export const ONBOARDING_IMAGES = {
  coin: require("../../assets/images/onboarding/coint.png"),
  donut: require("../../assets/images/onboarding/donut.png"),
  person: require("../../assets/images/onboarding/person.png"),
  onboarding: require("../../assets/images/onboarding/onboarding.png"),
} as const;

// All images combined
export const IMAGES = {
  appIcons: APP_ICONS,
  onboarding: ONBOARDING_IMAGES,
} as const;

// SVG Icons
export const SVG_ICONS = {
  google: require("../../assets/svg/icons/google-icon.svg"),
} as const;

// Type exports for TypeScript support
export type AppIconKey = keyof typeof APP_ICONS;
export type OnboardingImageKey = keyof typeof ONBOARDING_IMAGES;
export type SvgIconKey = keyof typeof SVG_ICONS;

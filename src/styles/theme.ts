/**
 * Global theme configuration for React Native StyleSheet components
 * Used by components that render outside TamaguiProvider (e.g., bootstrap components)
 */

import {
  amber,
  blue,
  Colors,
  cyan,
  emerald,
  fuchsia,
  green,
  indigo,
  lime,
  neutralColors,
  orange,
  pink,
  primaryColors,
  purple,
  red,
  rose,
  semanticColors,
  sky,
  teal,
  violet,
  yellow,
} from './colors';
import {
  BorderRadius,
  borderRadius,
  fontSizeSemantic as fontSize,
  FontSizeSemantic,
  FontWeight,
  fontWeight,
  IconSize,
  iconSize,
  LineHeight,
  lineHeight,
  Spacing,
  spacing
} from './tokens';

// Define the theme structure type
interface ThemeConfig {
  colors: Colors & {
    // Background
    background: string;
    backgroundSecondary: string;

    // Text
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
  };

  spacing: Spacing;

  borderRadius: BorderRadius;

  fontSize: FontSizeSemantic;

  fontWeight: FontWeight;

  lineHeight: LineHeight;

  iconSize: IconSize;
}

export const theme = {
  colors: {
    // Primary - from centralized palette
    primary: primaryColors.primary,
    primaryHover: primaryColors.primaryHover,
    primaryPress: primaryColors.primaryPress,
    primaryFocus: primaryColors.primaryFocus,

    // Semantic Colors - from centralized palette
    error: semanticColors.error,
    warning: semanticColors.warning,
    success: semanticColors.success,
    info: semanticColors.info,

    // Neutrals - from centralized palette
    white: neutralColors.white,
    black: neutralColors.black,
    gray50: neutralColors.gray50,
    gray100: neutralColors.gray100,
    gray200: neutralColors.gray200,
    gray300: neutralColors.gray300,
    gray400: neutralColors.gray400,
    gray500: neutralColors.gray500,
    gray600: neutralColors.gray600,
    gray700: neutralColors.gray700,
    gray800: neutralColors.gray800,
    gray900: neutralColors.gray900,
    gray950: neutralColors.gray950,

    // Background
    background: neutralColors.white,
    backgroundSecondary: neutralColors.gray50,

    // Text
    textPrimary: neutralColors.gray800,
    textSecondary: neutralColors.gray500,
    textTertiary: neutralColors.gray400,
    
    // Extended Tailwind color palette
    red,
    orange,
    amber,
    yellow,
    lime,
    green,
    emerald,
    teal,
    cyan,
    sky,
    blue,
    indigo,
    violet,
    purple,
    fuchsia,
    pink,
    rose,
  },

  // Design tokens - from centralized tokens
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
  lineHeight,
  iconSize,
} satisfies ThemeConfig;

export type Theme = typeof theme;

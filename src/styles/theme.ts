/**
 * Global theme configuration for React Native StyleSheet components
 * Used by components that render outside TamaguiProvider (e.g., bootstrap components)
 */

// Define the theme structure type
interface ThemeConfig {
  colors: {
    // Primary
    primary: string;
    primaryHover: string;
    primaryPress: string;

    // Semantic Colors
    error: string;
    warning: string;
    success: string;
    info: string;

    // Neutrals
    white: string;
    black: string;
    gray50: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;

    // Background
    background: string;
    backgroundSecondary: string;

    // Text
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
  };

  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
  };

  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: number;
  };

  fontSize: {
    xs: number;
    sm: number;
    base: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
  };

  fontWeight: {
    normal: "400";
    medium: "500";
    semibold: "600";
    bold: "700";
  };

  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
  };

  iconSize: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
}

export const theme = {
  colors: {
    // Primary
    primary: "#136daf",
    primaryHover: "#0f5a92",
    primaryPress: "#0d4d7a",

    // Semantic Colors
    error: "#ef4444",
    warning: "#f59e0b",
    success: "#22c55e",
    info: "#3b82f6",

    // Neutrals
    white: "#ffffff",
    black: "#000000",
    gray50: "#f9fafb",
    gray100: "#f3f4f6",
    gray200: "#e5e7eb",
    gray300: "#d1d5db",
    gray400: "#9ca3af",
    gray500: "#6b7280",
    gray600: "#4b5563",
    gray700: "#374151",
    gray800: "#1f2937",
    gray900: "#111827",

    // Background
    background: "#ffffff",
    backgroundSecondary: "#f9fafb",

    // Text
    textPrimary: "#1f2937",
    textSecondary: "#6b7280",
    textTertiary: "#9ca3af",
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
    xxxl: 48,
  },

  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },

  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },

  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  } as const,

  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },

  iconSize: {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
    xxl: 80,
  },
} satisfies ThemeConfig;

export type Theme = typeof theme;

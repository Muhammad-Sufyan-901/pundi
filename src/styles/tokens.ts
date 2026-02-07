/**
 * Centralized Design Tokens
 * This file exports Tamagui's token values for use in both Tamagui components and StyleSheets.
 * Source: Tamagui v2 default token scale
 */

import { config } from '@tamagui/config/v3';

/**
 * Size Tokens (Spacing, Border Radius, etc.)
 * Tamagui uses a hybrid scaling system:
 * - Quantum scale: $0.25, $0.5, $0.75 (sub-pixel precision)
 * - Natural scale: $1-$10 (gradual increases)
 * - Super-natural scale: $11-$20 (exponential)
 */
export const sizeTokens = {
  0: 0,
  0.25: 2,
  0.5: 4,
  0.75: 8,
  1: 20,
  1.5: 24,
  2: 28,
  2.5: 32,
  3: 36,
  3.5: 40,
  4: 44,
  4.5: 48,
  5: 52,
  6: 64,
  7: 74,
  8: 84,
  9: 94,
  10: 104,
  11: 124,
  12: 144,
  13: 164,
  14: 184,
  15: 204,
  16: 224,
  17: 244,
  18: 264,
  19: 284,
  20: 304,
} as const;

/**
 * Spacing Tokens
 * Maps semantic names to Tamagui size tokens for use in StyleSheets
 */
export const spacing = {
  xs: sizeTokens[0.5],      // 4px
  sm: sizeTokens[1],        // 20px (Tamagui $1)
  md: sizeTokens[1.5],      // 24px (Tamagui $1.5)
  lg: sizeTokens[2],        // 28px (Tamagui $2)
  xl: sizeTokens[3],        // 36px (Tamagui $3)
  xxl: sizeTokens[4],       // 44px (Tamagui $4)
  xxxl: sizeTokens[6],      // 64px (Tamagui $6)
} as const;

/**
 * Border Radius Tokens
 * Maps semantic names to Tamagui size tokens
 */
export const borderRadius = {
  sm: sizeTokens[0.5],      // 4px
  md: sizeTokens[1],        // 20px (Tamagui $1)
  lg: sizeTokens[1.5],      // 24px (Tamagui $1.5)
  xl: sizeTokens[2],        // 28px (Tamagui $2)
  full: 9999,               // Fully rounded
} as const;

/**
 * Font Size Tokens
 * Extracted from Tamagui's default font configuration
 */
export const fontSize = {
  1: 11,   // $1
  2: 12,   // $2
  3: 13,   // $3
  4: 14,   // $4 (base)
  5: 16,   // $5
  6: 18,   // $6
  7: 20,   // $7
  8: 23,   // $8
  9: 30,   // $9
  10: 46,  // $10
  11: 55,  // $11
  12: 62,  // $12
  13: 72,  // $13
  14: 92,  // $14
  15: 114, // $15
  16: 134, // $16
} as const;

/**
 * Font Size Semantic Mapping
 * Maps semantic names to Tamagui font size tokens for StyleSheets
 */
export const fontSizeSemantic = {
  xs: fontSize[2],    // 12px
  sm: fontSize[3],    // 13px
  base: fontSize[4],  // 14px
  lg: fontSize[6],    // 18px
  xl: fontSize[7],    // 20px
  xxl: fontSize[8],   // 23px
  xxxl: fontSize[9],  // 30px
} as const;

/**
 * Font Weight Tokens
 */
export const fontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

/**
 * Line Height Tokens
 */
export const lineHeight = {
  tight: 1.25,
  normal: 1.5,
  relaxed: 1.75,
} as const;

/**
 * Icon Size Tokens
 * Maps semantic names to Tamagui size tokens
 */
export const iconSize = {
  sm: sizeTokens[2],    // 28px (Tamagui $2)
  md: sizeTokens[3],    // 36px (Tamagui $3)
  lg: sizeTokens[4],    // 44px (Tamagui $4)
  xl: sizeTokens[6],    // 64px (Tamagui $6)
  xxl: sizeTokens[8],   // 84px (Tamagui $8)
} as const;

/**
 * Export Tamagui config for direct access to all tokens
 */
export const tamaguiConfig = config;

/**
 * Combined tokens export for easy access
 */
export const tokens = {
  size: sizeTokens,
  spacing,
  borderRadius,
  fontSize,
  fontSizeSemantic,
  fontWeight,
  lineHeight,
  iconSize,
} as const;

/**
 * Type Exports
 */
export type SizeTokens = typeof sizeTokens;
export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type FontSize = typeof fontSize;
export type FontSizeSemantic = typeof fontSizeSemantic;
export type FontWeight = typeof fontWeight;
export type LineHeight = typeof lineHeight;
export type IconSize = typeof iconSize;

export type Tokens = typeof tokens;

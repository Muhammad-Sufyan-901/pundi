import {
  amber,
  blue,
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
} from "@/src/styles/colors";
import { config } from "@tamagui/config/v3";
import { createTamagui } from "tamagui";

const colors = {
  // Primary brand colors
  primary: primaryColors.primary,
  primaryHover: primaryColors.primaryHover,
  primaryPress: primaryColors.primaryPress,
  primaryFocus: primaryColors.primaryFocus,

  // Semantic colors
  error: semanticColors.error,
  warning: semanticColors.warning,
  success: semanticColors.success,
  info: semanticColors.info,

  // Neutrals
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

  // Extended Tailwind color palette
  // Red
  red50: red[50],
  red100: red[100],
  red200: red[200],
  red300: red[300],
  red400: red[400],
  red500: red[500],
  red600: red[600],
  red700: red[700],
  red800: red[800],
  red900: red[900],
  red950: red[950],

  // Orange
  orange50: orange[50],
  orange100: orange[100],
  orange200: orange[200],
  orange300: orange[300],
  orange400: orange[400],
  orange500: orange[500],
  orange600: orange[600],
  orange700: orange[700],
  orange800: orange[800],
  orange900: orange[900],
  orange950: orange[950],

  // Amber
  amber50: amber[50],
  amber100: amber[100],
  amber200: amber[200],
  amber300: amber[300],
  amber400: amber[400],
  amber500: amber[500],
  amber600: amber[600],
  amber700: amber[700],
  amber800: amber[800],
  amber900: amber[900],
  amber950: amber[950],

  // Yellow
  yellow50: yellow[50],
  yellow100: yellow[100],
  yellow200: yellow[200],
  yellow300: yellow[300],
  yellow400: yellow[400],
  yellow500: yellow[500],
  yellow600: yellow[600],
  yellow700: yellow[700],
  yellow800: yellow[800],
  yellow900: yellow[900],
  yellow950: yellow[950],

  // Lime
  lime50: lime[50],
  lime100: lime[100],
  lime200: lime[200],
  lime300: lime[300],
  lime400: lime[400],
  lime500: lime[500],
  lime600: lime[600],
  lime700: lime[700],
  lime800: lime[800],
  lime900: lime[900],
  lime950: lime[950],

  // Green
  green50: green[50],
  green100: green[100],
  green200: green[200],
  green300: green[300],
  green400: green[400],
  green500: green[500],
  green600: green[600],
  green700: green[700],
  green800: green[800],
  green900: green[900],
  green950: green[950],

  // Emerald
  emerald50: emerald[50],
  emerald100: emerald[100],
  emerald200: emerald[200],
  emerald300: emerald[300],
  emerald400: emerald[400],
  emerald500: emerald[500],
  emerald600: emerald[600],
  emerald700: emerald[700],
  emerald800: emerald[800],
  emerald900: emerald[900],
  emerald950: emerald[950],

  // Teal
  teal50: teal[50],
  teal100: teal[100],
  teal200: teal[200],
  teal300: teal[300],
  teal400: teal[400],
  teal500: teal[500],
  teal600: teal[600],
  teal700: teal[700],
  teal800: teal[800],
  teal900: teal[900],
  teal950: teal[950],

  // Cyan
  cyan50: cyan[50],
  cyan100: cyan[100],
  cyan200: cyan[200],
  cyan300: cyan[300],
  cyan400: cyan[400],
  cyan500: cyan[500],
  cyan600: cyan[600],
  cyan700: cyan[700],
  cyan800: cyan[800],
  cyan900: cyan[900],
  cyan950: cyan[950],

  // Sky
  sky50: sky[50],
  sky100: sky[100],
  sky200: sky[200],
  sky300: sky[300],
  sky400: sky[400],
  sky500: sky[500],
  sky600: sky[600],
  sky700: sky[700],
  sky800: sky[800],
  sky900: sky[900],
  sky950: sky[950],

  // Blue
  blue50: blue[50],
  blue100: blue[100],
  blue200: blue[200],
  blue300: blue[300],
  blue400: blue[400],
  blue500: blue[500],
  blue600: blue[600],
  blue700: blue[700],
  blue800: blue[800],
  blue900: blue[900],
  blue950: blue[950],

  // Indigo
  indigo50: indigo[50],
  indigo100: indigo[100],
  indigo200: indigo[200],
  indigo300: indigo[300],
  indigo400: indigo[400],
  indigo500: indigo[500],
  indigo600: indigo[600],
  indigo700: indigo[700],
  indigo800: indigo[800],
  indigo900: indigo[900],
  indigo950: indigo[950],

  // Violet
  violet50: violet[50],
  violet100: violet[100],
  violet200: violet[200],
  violet300: violet[300],
  violet400: violet[400],
  violet500: violet[500],
  violet600: violet[600],
  violet700: violet[700],
  violet800: violet[800],
  violet900: violet[900],
  violet950: violet[950],

  // Purple
  purple50: purple[50],
  purple100: purple[100],
  purple200: purple[200],
  purple300: purple[300],
  purple400: purple[400],
  purple500: purple[500],
  purple600: purple[600],
  purple700: purple[700],
  purple800: purple[800],
  purple900: purple[900],
  purple950: purple[950],

  // Fuchsia
  fuchsia50: fuchsia[50],
  fuchsia100: fuchsia[100],
  fuchsia200: fuchsia[200],
  fuchsia300: fuchsia[300],
  fuchsia400: fuchsia[400],
  fuchsia500: fuchsia[500],
  fuchsia600: fuchsia[600],
  fuchsia700: fuchsia[700],
  fuchsia800: fuchsia[800],
  fuchsia900: fuchsia[900],
  fuchsia950: fuchsia[950],

  // Pink
  pink50: pink[50],
  pink100: pink[100],
  pink200: pink[200],
  pink300: pink[300],
  pink400: pink[400],
  pink500: pink[500],
  pink600: pink[600],
  pink700: pink[700],
  pink800: pink[800],
  pink900: pink[900],
  pink950: pink[950],

  // Rose
  rose50: rose[50],
  rose100: rose[100],
  rose200: rose[200],
  rose300: rose[300],
  rose400: rose[400],
  rose500: rose[500],
  rose600: rose[600],
  rose700: rose[700],
  rose800: rose[800],
  rose900: rose[900],
  rose950: rose[950],
};

const lightColors = {
  ...colors,

  // Background
  background: neutralColors.white,
  backgroundSecondary: neutralColors.gray50,

  // Text
  textPrimary: neutralColors.gray800,
  textSecondary: neutralColors.gray500,
  textTertiary: neutralColors.gray400,
};

const darkColors = {
  ...colors,

  // Background
  background: neutralColors.white,
  backgroundSecondary: neutralColors.gray50,

  // Text
  textPrimary: neutralColors.gray800,
  textSecondary: neutralColors.gray500,
  textTertiary: neutralColors.gray400,
};

const appConfig = createTamagui({
  ...config,
  themes: {
    ...config.themes,
    light: {
      ...config.themes.light,
      ...lightColors,
    },
    dark: {
      ...config.themes.dark,
      ...darkColors,
    },
  },
  fonts: {
    ...config.fonts,
    heading: config.fonts.heading,
    body: config.fonts.body,
  },
});

export type AppConfig = typeof appConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;

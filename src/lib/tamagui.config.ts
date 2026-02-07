import { config } from '@tamagui/config/v3'
import { createTamagui } from 'tamagui'

const appConfig = createTamagui({
  ...config,
  themes: {
    ...config.themes,
    light: {
      ...config.themes.light,
      primary: '#136daf',
      primaryHover: '#0f5a92',
      primaryPress: '#0d4d7a',
      primaryFocus: '#136daf',
    },
    dark: {
      ...config.themes.dark,
      primary: '#136daf',
      primaryHover: '#1a7ec4',
      primaryPress: '#2190d9',
      primaryFocus: '#136daf',
    },
  },
  fonts: {
    ...config.fonts,
    heading: config.fonts.body,
    body: config.fonts.body,
  },
})

export type AppConfig = typeof appConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig

import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'

const tamaguiConfig = createTamagui({
  ...defaultConfig,
  shorthands: {
    ...defaultConfig.shorthands,
    jc: 'justifyContent',  // Atalho para justifyContent
    ai: 'alignItems',      // Atalho para alignItems
    as: 'alignSelf',       // Atalho para alignSelf
  } as const, // Importante para garantir tipos literais
})

export default tamaguiConfig

// Tipos customizados
export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

// uno.config.ts
import { defineConfig, presetWind3, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons(),
  ],
})

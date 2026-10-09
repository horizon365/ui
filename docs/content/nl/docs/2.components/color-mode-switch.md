---
title: ColorModeSchakelaar
description: 'Een schakelaar om te schakelen tussen de lichte en donkere modus.'
category: color-mode
links:
  - label: Schakelaar
    to: /docs/components/switch
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeSwitch.vue
---

## Gebruik

De ColorModeSwitch-component breidt de [Switch](/docs/components/switch) -component uit, zodat u elke eigenschap zoals `color`, `size`, enz. Kunt doorgeven.

:component-code{prefix="color-mode"}

## Voorbeelden

### Met aangepaste pictogrammen

::framework-only
#nuxt
::div

Gebruik de `app.config.ts` om het pictogram met de eigenschap `ui.icons` aan te passen:

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    icons: {
      light: 'i-lucide-sun-medium',
      dark: 'i-lucide-moon-star'
    }
  }
})
```

::

#vue
::div
Gebruik de `vite.config.ts` om het pictogram met de `ui.icons` eigenschap aan te passen:

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'

export default defineConfig({
  plugins: [
    vue(),
    ui({
      ui: {
        icons: {
          light: 'i-lucide-sun-medium',
          dark: 'i-lucide-moon-star'
        }
      }
    })
  ]
})
```

::

::

## API

### Props

:component-props

## Wijzigingsgelog

:component-changelog{prefix="color-mode"}

---
title: ColorModeSelecteer
description: 'A Selecteer om te schakelen tussen systeem, donkere en lichte modus.'
category: color-mode
links:
  - label: SelectMenu
    to: /docs/components/select-menu
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeSelect.vue
---

## Gebruik

Het ColorModeSelect-onderdeel breidt het [SelectMenu](/docs/components/select-menu) -onderdeel uit, zodat u elke eigenschap zoals `color`, `variant`, `size`, enz. Kunt doorgeven.

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
      system: 'i-lucide-laptop',
      light: 'i-lucide-sun-medium',
      dark: 'i-lucide-moon-star'
    }
  }
})
```

::

#vue
::div
Gebruik de `vite.config.ts` om het pictogram met de eigenschap `ui.icons` aan te passen:

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

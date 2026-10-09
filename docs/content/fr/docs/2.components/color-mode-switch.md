---
title: Couleur ModeSwitch
description: 'Un interrupteur pour basculer entre le mode clair et sombre.'
category: color-mode
links:
  - label: switch
    to: /docs/components/switch
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeSwitch.vue
---

## Utilisation

Le composant ColorModeSwitch étend le composant [Switch](/docs/components/switch), de sorte que vous pouvez passer n'importe quelle propriété telle que `color`, `size`, etc.

:component-code{prefix="color-mode"}

## Exemples

### With custom icons

::framework-only
#nuxt
::div

Utilisez le `app.config.ts` pour personnaliser l'icône avec la propriété `ui.icons`:

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
Utilisez le `vite.config.ts` pour personnaliser l'icône avec la propriété `ui.icons`:

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

## api

### Props

:component-props

## Changelog écrit

:component-changelog{prefix="color-mode"}

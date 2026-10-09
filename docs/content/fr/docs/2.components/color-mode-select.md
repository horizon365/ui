---
title: Couleur ModeSelect
description: 'A Sélectionnez pour basculer entre le mode système, sombre et clair.'
category: color-mode
links:
  - label: SélectionneMenu
    to: /docs/components/select-menu
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeSelect.vue
---

## Utilisation

Le composant ColorModeSelect étend le composant [SelectMenu](/docs/components/select-menu), de sorte que vous pouvez passer n'importe quelle propriété telle que `color`, `variant`, `size`, etc.

:component-code{prefix="color-mode"}

## exemples

### Avec icônes personnalisées

::framework-only
#nuxt
::div

Utilisez le `app.config.ts` pour personnaliser l'icône avec la propriété `ui.icons`:

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

## Changelog

:component-changelog{prefix="color-mode"}

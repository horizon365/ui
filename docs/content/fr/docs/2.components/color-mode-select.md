---
title: Couleur ModeSelect
description: 'A Sélectionnez pour basculer entre le mode système, sombre et clair.'
category: color-mode
links:
  - label: Sélectionnez Menu
    to: /docs/components/select-menu
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeSelect.vue
---

@@ph000@@utilisation

Le composant ColorModeSelect étend le composant [SelectMenu](/docs/components/select-menu), afin que vous puissiez passer n'importe quelle propriété telle que `color`,`variant`,`size`, etc.

: composant code {prefix="color-mode"}

@@ph009@exemples

### Avec des icônes personnalisées

::framework-only
#numérique
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

## Phénix

@@ph046@@props

Composants-props

@changement@changement@changement@changement.com

: composant-changelog {prefix="color-mode"}

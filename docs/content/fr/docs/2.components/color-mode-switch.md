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

@@ph000@@utilisation

Le composant ColorModeSwitch étend le composant [Switch](/docs/components/switch), afin que vous puissiez passer n'importe quelle propriété telle que `color`,`size`, etc.

: composant code {prefix="color-mode"}

@@ph008@exemples

### Avec des icônes personnalisées

::framework-only
#numérique
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

@@ph043@@api

@@444@propriété

Composants-props

@changement@changement@changement@changement.com

: composant-changelog {prefix="color-mode"}

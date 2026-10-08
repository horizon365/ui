---
title: ColormodeAuswählen
description: 'Wählen Sie, um zwischen System-, Dunkel-und Hellmodus zu wechseln.'
category: color-mode
links:
  - label: AuswählenMenü
    to: /docs/components/select-menu
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeSelect.vue
---

@@@ph000@Verwendung

Die ColorModeSelect-Komponente erweitert die Komponente [SelectMenu](/docs/components/select-menu), so dass Sie jede Eigenschaft wie `color`,`variant`,`size` usw. übergeben können.

: component-code {prefix="color-mode"}

@@ph009@@Beispiele

@@ph010@@Mit benutzerdefinierten Icons

::framework-only
#nuxt sein
::div

Verwenden Sie `app.config.ts`, um das Symbol mit der `ui.icons`-Eigenschaft anzupassen:

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

#Ansehen
::div
Verwenden Sie `vite.config.ts`, um das Symbol mit der `ui.icons`-Eigenschaft anzupassen:

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

@@ph045@@api

@@ph046@@@props

Komponenten Props

@@ph047@@changelog @ changelog

: component-changelog {prefix="color-mode"}

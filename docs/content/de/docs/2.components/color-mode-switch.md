---
title: Colormode-Umschaltung
description: 'Ein Schalter zum Umschalten zwischen Hell-und Dunkelmodus.'
category: color-mode
links:
  - label: Switch ist
    to: /docs/components/switch
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeSwitch.vue
---

@@@ph000@@Verwendung

Die ColorModeSwitch-Komponente erweitert die Komponente [Switch](/docs/components/switch), so dass Sie jede Eigenschaft wie `color`,`size`, etc. übergeben können

: component-code {prefix="color-mode"}

@@ph008@@Beispiele

@@ph009@@Mit benutzerdefinierten Icons

::framework-only
#nuxt sein
::div

Verwenden Sie `app.config.ts`, um das Symbol mit der `ui.icons`-Eigenschaft anzupassen:

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

## api

@@ph044@@@gmail.de

Komponenten Props

@@ph045@@changelog @@@ changelog @@@ changelog @@ changelog @ changelog @ changelog

: component-changelog {prefix="color-mode"}

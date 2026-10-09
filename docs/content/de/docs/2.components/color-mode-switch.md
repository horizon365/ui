---
title: Colormode-Umschaltung
description: 'Ein Schalter zum Umschalten zwischen Hell-und Dunkelmodus.'
category: color-mode
links:
  - label: Switch
    to: /docs/components/switch
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeSwitch.vue
---

## Bearbeiten

Die ColorModeSwitch-Komponente erweitert die [Switch](/docs/components/switch)-Komponente, sodass Sie jede Eigenschaft wie `color`, `size` usw. übergeben können.

:component-code{prefix="color-mode"}

## Examples (Beispiele)

### Mit benutzerdefinierten Icons

::framework-only
#nuxt
::div

Verwenden Sie die `app.config.ts`, um das Symbol mit der Eigenschaft `ui.icons` anzupassen:

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
Verwenden Sie das `vite.config.ts`, um das Symbol mit der Eigenschaft `ui.icons` anzupassen:

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

## API (Englisch)

### Props (nicht)

:component-props

## Changelog (englisch)

:component-changelog{prefix="color-mode"}

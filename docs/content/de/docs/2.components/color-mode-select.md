---
title: Farbauswahl
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

## Bearbeiten

Die ColorModeSelect-Komponente erweitert die [SelectMenu](/docs/components/select-menu)-Komponente, sodass Sie jede Eigenschaft wie `color`, `variant`, `size` usw. übergeben können.

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
Verwenden Sie die `vite.config.ts`, um das Symbol mit der Eigenschaft `ui.icons` anzupassen:

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

## API (englisch)

### Props Bearbeiten

:component-props

## Changelog (englisch)

:component-changelog{prefix="color-mode"}

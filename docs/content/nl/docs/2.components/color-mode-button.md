---
title: KleurModeKnop
description: 'Een knop om te schakelen tussen lichte en donkere modus.'
category: color-mode
links:
  - label: Knop
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeButton.vue
---

## Gebruik

De ColorModeButton-component breidt de [Button](/docs/components/button) -component uit, zodat u elke eigenschap zoals `color`, `variant`, `size`, enz. Kunt doorgeven.

:component-code{prefix="color-mode"}

::note
De knop is standaard ingesteld op `color="neutral"` en `variant="ghost"`.
::

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

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<button>` HTML-kenmerken.
::

## Wijzigingsgelog

:component-changelog{prefix="color-mode"}

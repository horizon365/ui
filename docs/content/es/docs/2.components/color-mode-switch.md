---
title: ColorModelación
description: 'Un interruptor para alternar entre el modo claro y oscuro.'
category: color-mode
links:
  - label: El Switch
    to: /docs/components/switch
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeSwitch.vue
---

xph0000xUso

El componente ColorModeSwitch extiende el componente [Switch](/docs/components/switch), por lo que puede pasar cualquier propiedad como `color`, `size`, etc.

:component-code{prefix="color-mode"}

xph007XEjemplos

### Con iconos personalizados

::framework-only
#nuxt
::div

Utilice el icono `app.config.ts` para personalizar el icono con la propiedad `ui.icons`:

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
Utilice el `vite.config.ts` para personalizar el icono con la propiedad `ui.icons`:

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

## API (Edición española)

### Accesorios

:component-props

## Changelog (Edición española)

:component-changelog{prefix="color-mode"}

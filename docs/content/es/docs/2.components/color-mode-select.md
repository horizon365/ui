---
title: Coloreseleccion
description: 'Seleccione para cambiar entre el modo de sistema, oscuro y claro.'
category: color-mode
links:
  - label: SeleccionesMenú
    to: /docs/components/select-menu
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeSelect.vue
---

xph0000xUso

El componente ColorModeSelect extiende el componente [SelectMenu](/docs/components/select-menu), de modo que puede pasar cualquier propiedad como `color`, `variant`, `size`, etc.

:component-code{prefix="color-mode"}

xph008XEjemplos

### Con iconos personalizados

::framework-only
#nuxt
::div

Utilice el icono `app.config.ts` para personalizar el icono con la propiedad `ui.icons`:

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

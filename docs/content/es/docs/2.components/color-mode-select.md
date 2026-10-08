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

@@pH000@@Uso del producto

El componente ColorModeSelect extiende el componente [SelectMenu](/docs/components/select-menu), por lo que puede pasar cualquier propiedad, como `color`,`variant`,`size`, etc.

: código de componentes {prefix="color-mode"}

@@pH009@Ejemplos

### Con iconos personalizados

::framework-only
#nuxidad
::div

Utilice el `app.config.ts` para personalizar el icono con la propiedad `ui.icons`:

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

#vista
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

@@pH045

@@46000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

por: component-changelog {prefix="color-mode"}

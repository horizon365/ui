---
title: Coloria-ModeButton
description: 'Un botón para cambiar entre el modo claro y oscuro.'
category: color-mode
links:
  - label: botón
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeButton.vue
---

xph0000xUso

El componente ColorModeButton extiende el componente [Button](/docs/components/button), por lo que puede pasar cualquier propiedad como `color`, `variant`, `size`, etc.

:component-code{prefix="color-mode"}

::note
El botón por defecto es `color="neutral"` y `variant="ghost"`.
::

## ejemplos

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

### Props (Edición española)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML `<button>` nativos.
::

## Changelog (Edición española)

:component-changelog{prefix="color-mode"}

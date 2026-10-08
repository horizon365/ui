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

@@pH000@@Uso del producto

El componente ColorModeButton extiende el componente [Button](/docs/components/button), por lo que puede pasar cualquier propiedad, como `color`,`variant`,`size`, etc.

: código de componentes {prefix="color-mode"}

::note
El botón por defecto es `color="neutral"` y `variant="ghost"`.
::

@111@Ejemplos

### Con iconos personalizados

::framework-only
#Nuxidad
::div

Utilice el `app.config.ts` para personalizar el icono con la propiedad `ui.icons`:

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

@4666 @ Vía

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<button>`.
::

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

por: component-changelog {prefix="color-mode"}

---
description: Un componente para mostrar cualquier icono de Iconify u otro componente.
category: element
keywords:
  - svg
  - iconify
  - symbol
links:
  - label: Iconización
    to: https://iconify.design/
    target: _blank
    icon: i-simple-icons-iconify
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Icon.vue
---

xph0000xUso

Utilice el soporte `name` para mostrar un icono.

::component-code
---
props:
  name: 'i-lucide-lightbulb'
  class: 'size-5'
---
::

::note
Puede utilizar cualquier nombre de la colección <https://iconify.design>. Examínelos fácilmente en <https://icones.js.org> o busque directamente desde su asistente de IA utilizando la herramienta MCP [xph007](/docs/getting-started/ai/mcp#available-tools).
::

::framework-only
#nuxt
:::caution{to="/docs/getting-started/integrations/icons/nuxt#collections"}
Es muy recomendable instalar las colecciones de iconos que necesita, lea más sobre esto.
:::
::

## Ejemplos

### svg

También puede pasar un componente de Vue en el prop `name`:

::component-example
---
name: 'icon-svg-example'
---
::

Puede definir los componentes de su icono usted mismo, o usar [`unplugin-icons`](https://github.com/unplugin/unplugin-icons) para importarlos directamente desde archivos SVG:

```vue
<script setup lang="ts">
import IconLightbulb from '~icons/lucide/lightbulb'
</script>

<template>
  <UIcon :name="IconLightbulb" class="size-5" />
</template>
```

## API (Edición española)

### Propciones

:component-props

xph06xChangelog (Edición española)

:component-changelog

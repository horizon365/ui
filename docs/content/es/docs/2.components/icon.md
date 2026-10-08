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

@@pH000@@Uso del producto

Utilice el prop `name` para mostrar un icono.

::component-code
---
Props:
  Nombre: i-lucide-lightbulb
  Categoría:'Size-5'
---
::

::note
Puede usar cualquier nombre de la colección <https://iconify.design>. Navegar por ellos fácilmente en <https://icones.js.org> o buscar directamente desde su asistente de IA utilizando la herramienta MCP [`search-icons`](/docs/getting-started/ai/mcp#available-tools).
::

::framework-only
#nuxidad
:::caution{to="/docs/getting-started/integrations/icons/nuxt#collections"}
Se recomienda encarecidamente instalar las colecciones de iconos que necesita, lea más sobre esto.
:::
::

@@pH009@Ejemplos

@100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

También puede pasar un componente de Vue en el prop `name`:

::component-example
---
Nombre del archivo: 'icon-svg-example'
---
::

Puede definir los componentes de su icono usted mismo, o utilizar [`unplugin-icons`](https://github.com/unplugin/unplugin-icons) para importarlos directamente desde archivos SVG:

```vue
<script setup lang="ts">
import IconLightbulb from '~icons/lucide/lightbulb'
</script>

<template>
  <UIcon :name="IconLightbulb" class="size-5" />
</template>
```

@@26000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

@@27000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@28@Changelog

Categoría: component-changelog

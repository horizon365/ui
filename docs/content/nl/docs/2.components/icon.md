---
description: Een component om elk pictogram van Iconify of een ander onderdeel weer te geven.
category: element
keywords:
  - svg
  - iconify
  - symbol
links:
  - label: Iconificeren
    to: https://iconify.design/
    target: _blank
    icon: i-simple-icons-iconify
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Icon.vue
---

## Gebruik

Gebruik de `name` prop om een pictogram weer te geven.

::component-code
---
props:
  name: 'i-lucide-lightbulb'
  class: 'size-5'
---
::

::note
U kunt elke naam uit de <https://iconify.design>-collectie gebruiken. Blader ze gemakkelijk op <https://icones.js.org> of zoek rechtstreeks vanuit uw AI-assistent met behulp van de [`search-icons`](/docs/getting-started/ai/mcp#available-tools) MCP-tool.
::

::framework-only
#nuxt
:::caution{to="/docs/getting-started/integrations/icons/nuxt#collections"}
Het wordt sterk aanbevolen om de pictogrammencollecties te installeren die je nodig hebt, lees hier meer over.
:::
::

## Voorbeelden

### SVG

U kunt ook een Vue-component doorgeven aan de `name`-prop:

::component-example
---
name: 'icon-svg-example'
---
::

U kunt uw pictogramcomponenten zelf definiëren of [`unplugin-icons`](https://github.com/unplugin/unplugin-icons) gebruiken om ze rechtstreeks uit SVG-bestanden te importeren:

```vue
<script setup lang="ts">
import IconLightbulb from '~icons/lucide/lightbulb'
</script>

<template>
  <UIcon :name="IconLightbulb" class="size-5" />
</template>
```

## API

### Props

:component-props

## Wijzigingsgelog

:component-changelog

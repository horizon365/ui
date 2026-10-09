---
description: Eine Komponente, um ein beliebiges Symbol von Iconify oder einer anderen Komponente anzuzeigen.
category: element
keywords:
  - svg
  - iconify
  - symbol
links:
  - label: Ikonisch
    to: https://iconify.design/
    target: _blank
    icon: i-simple-icons-iconify
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Icon.vue
---

## Bearbeiten

Verwenden Sie die `name` prop, um ein Symbol anzuzeigen.

::component-code
---
props:
  name: 'i-lucide-lightbulb'
  class: 'size-5'
---
::

::note
Durchsuchen Sie sie einfach auf <https://icones.js.org> oder suchen Sie direkt von Ihrem KI-Assistenten mit dem [`search-icons`](/docs/getting-started/ai/mcp#available-tools) MCP-Tool.
::

::framework-only
#nuxt
:::caution{to="/docs/getting-started/integrations/icons/nuxt#collections"}
Es wird dringend empfohlen, die Icon-Sammlungen zu installieren, die Sie benötigen, lesen Sie mehr darüber.
:::
::

## Examples (Beispiele)

### SVG

Sie können auch eine Vue-Komponente in die `name`-prop übergeben:

::component-example
---
name: 'icon-svg-example'
---
::

Sie können Ihre Icon-Komponenten selbst definieren oder mit [`unplugin-icons`](https://github.com/unplugin/unplugin-icons) direkt aus SVG-Dateien importieren:

```vue
<script setup lang="ts">
import IconLightbulb from '~icons/lucide/lightbulb'
</script>

<template>
  <UIcon :name="IconLightbulb" class="size-5" />
</template>
```

## API (englisch)

### Props Bearbeiten

:component-props

## Changelog (englisch)

:component-changelog

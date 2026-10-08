---
description: Eine Komponente, um ein beliebiges Symbol von Iconify oder einer anderen Komponente anzuzeigen.
category: element
keywords:
  - svg
  - iconify
  - symbol
links:
  - label: Iconifikation
    to: https://iconify.design/
    target: _blank
    icon: i-simple-icons-iconify
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Icon.vue
---

@@@ph000@@Verwendung

Verwenden Sie das `name` prop, um ein Symbol anzuzeigen.

::component-code
---
Props:
  Bezeichnung: i-lucide-lightbulb
  Klasse: Größe-5
---
::

::note
Durchsuchen Sie sie einfach auf <https://icones.js.org> oder suchen Sie direkt von Ihrem KI-Assistenten mit dem [`search-icons`](/docs/getting-started/ai/mcp#available-tools) MCP-Tool.
::

::framework-only
#nuxt sein
:::caution{to="/docs/getting-started/integrations/icons/nuxt#collections"}
Es wird dringend empfohlen, die Icon-Sammlungen zu installieren, die Sie benötigen, lesen Sie mehr darüber.
:::
::

@@ph009@@Beispiele

@@1010@svg

Sie können auch eine Vue-Komponente in die `name` prop übergeben:

::component-example
---
Name: 'icon-svg-Beispiel'
---
::

Sie können Ihre Icon-Komponenten selbst definieren, oder verwenden Sie [`unplugin-icons`](https://github.com/unplugin/unplugin-icons) um sie direkt aus SVG-Dateien zu importieren:

```vue
<script setup lang="ts">
import IconLightbulb from '~icons/lucide/lightbulb'
</script>

<template>
  <UIcon :name="IconLightbulb" class="size-5" />
</template>
```

## api@@api@@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api26

@@@ph027@@Props

Komponenten Props

@@ph028@@changelog @ changelog

Das Component-Changelog

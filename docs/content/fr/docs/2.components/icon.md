---
description: Un composant pour afficher n'importe quelle icône d'Iconify ou d'un autre composant.
category: element
keywords:
  - svg
  - iconify
  - symbol
links:
  - label: Iconique
    to: https://iconify.design/
    target: _blank
    icon: i-simple-icons-iconify
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Icon.vue
---

@@ph000@@utilisation

Utilisez la prop `name` pour afficher une icône.

::component-code
---
Props:
  Étiquette: i-lucide-lightbulb
  Catégorie:'Size-5'
---
::

::note
Vous pouvez utiliser n'importe quel nom de la collection <https://iconify.design>. Parcourez-les facilement sur <https://icones.js.org> ou recherchez directement à partir de votre assistant AI à l'aide de l'outil MCP [`search-icons`](/docs/getting-started/ai/mcp#available-tools).
::

::framework-only
#numérique
:::caution{to="/docs/getting-started/integrations/icons/nuxt#collections"}
Il est fortement recommandé d'installer les collections d'icônes dont vous avez besoin, en savoir plus à ce sujet.
:::
::

@@ph009@exemples

@@ph010@svg

Vous pouvez également passer un composant Vue dans le prop `name`:

::component-example
---
nom: 'icon-svg-exemple'
---
::

Vous pouvez définir vos composants d'icônes vous-même, ou utiliser `unplugin-icons`](https://github.com/unplugin/unplugin-icons) pour les importer directement à partir de fichiers SVG:

```vue
<script setup lang="ts">
import IconLightbulb from '~icons/lucide/lightbulb'
</script>

<template>
  <UIcon :name="IconLightbulb" class="size-5" />
</template>
```

@@226@api

@27@@Projets

Composants-props

@28@changements

Composant-changelog

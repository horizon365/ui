---
title: PageAncher
description: 'Eine Liste der Anker, die auf der Seite angezeigt werden sollen.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAnchors.vue
---

## Bearbeiten

Verwenden Sie die PageAnchors-Komponente, um eine Liste von Links anzuzeigen.

::component-code
---
collapse: true
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageAnchor[]
props:
  links:
    - label: 'Documentation'
      icon: i-lucide-book-open
      to: /docs/getting-started
    - label: 'Components'
      icon: i-lucide-box
      to: /docs/components
    - label: 'Figma Kit'
      icon: i-simple-icons-figma
      to: https://go.nuxt.com/figma-ui
      target: _blank
    - label: 'Releases'
      icon: i-simple-icons-github
      to: https://github.com/nuxt/ui/releases
      target: _blank
---
::

x027xLinks (englisch)

Verwenden Sie die `links`-prop als Array von Objekten mit den folgenden Eigenschaften:

- `label: string`{lang="ts-type"} (nicht vorhanden)
- `icon?: string`{lang="ts-type"} (nicht vorhanden)
- `class?: any`{lang="ts-type"} (nicht vorhanden)
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeading?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"} (nicht vorhanden)

Sie können jede Eigenschaft der Komponente [Link](/docs/components/link#props) übergeben, z. B. `to`, `target` usw.

::component-code
---
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageAnchor[]
props:
  links:
    - label: 'Documentation'
      icon: i-lucide-book-open
      to: /docs/getting-started
    - label: 'Components'
      icon: i-lucide-box
      to: /docs/components
    - label: 'Figma Kit'
      icon: i-simple-icons-figma
      to: https://go.nuxt.com/figma-ui
      target: _blank
    - label: 'Releases'
      icon: i-simple-icons-github
      to: https://github.com/nuxt/ui/releases
      target: _blank
---
::

## Beispiele:

::note
Während diese Beispiele [Nuxt Content](https://content.nuxt.com) verwenden, können die Komponenten in jedes Content Management System integriert werden.
::

### In einem Layout

Verwenden Sie die PageAnchors-Komponente in der Komponente [PageAside](/docs/components/page-aside), um eine Liste von Links oberhalb der Navigation anzuzeigen.

```vue [layouts/docs.vue]{35}
<script setup lang="ts">
import type { PageAnchor } from '@nuxt/ui'
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<ContentNavigationItem[]>('navigation')

const links: PageAnchor[] = [{
  label: 'Documentation',
  icon: 'i-lucide-book-open',
  to: '/docs/getting-started'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  to: '/docs/components'
}, {
  label: 'Figma Kit',
  icon: 'i-simple-icons-figma',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UPageAnchors :links="links" />

        <USeparator type="dashed" />

        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

## API ist

### Props (englisch)

:component-props

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (deutsch)

:component-changelog

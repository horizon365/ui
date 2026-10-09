---
title: Footercolumns Bearbeiten
description: 'Eine Liste von Links als Spalten, die in Ihrer Fußzeile angezeigt werden sollen.'
category: navigation
keywords:
  - footer links
  - sitemap
  - columns
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FooterColumns.vue
---

## Bearbeiten

Die Komponente FooterColumns rendert eine Liste von Spalten, die in Ihrer Fußzeile angezeigt werden sollen.

Verwenden Sie es im `top`-Steckplatz der [Footer](/docs/components/footer)-Komponente:

```vue {3-7}
<template>
  <UFooter>
    <template #top>
      <UContainer>
        <UFooterColumns />
      </UContainer>
    </template>
  </UFooter>
</template>
```

### columns (Deutsche Ausgabe)

Verwenden Sie die `columns`-prop als Array von Objekten mit den folgenden Eigenschaften:

- `label: string`{lang="ts-type"} (nicht vorhanden)
- `children?: FooterColumnLink[]`{lang="ts-type"} (nicht)

Jede Spalte enthält ein `children`-Array mit Objekten, die die Links definieren. Jeder Link kann die folgenden Eigenschaften haben:

- `label?: string`{lang="ts-type"} (nicht)
- `icon?: string`{lang="ts-type"} (nicht vorhanden)
- `class?: any`{lang="ts-type"} (nicht vorhanden)
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"} (nicht vorhanden)

Sie können jede Eigenschaft der Komponente [Link](/docs/components/link#props) übergeben, z. B. `to`, `target` usw.

::component-example
---
prettier: true
name: 'footer-columns-example'
class: 'p-8'
props:
  class: 'w-full'
---
::

## API (englisch)

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

## Theme (englisch)

:component-theme

## Changelog (englisch)

:component-changelog

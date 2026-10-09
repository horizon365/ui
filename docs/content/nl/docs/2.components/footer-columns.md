---
title: VoetjesKolommen
description: 'Een lijst met links als kolommen die in uw voettekst moeten worden weergegeven.'
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

## Gebruik

De FooterColumns-component geeft een lijst weer met kolommen die in uw Footer moeten worden weergegeven.

Gebruik het in de `top`-sleuf van de [Footer](/docs/components/footer) :

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

### Kolommen

Gebruik de `columns` prop als een array van objecten met de volgende eigenschappen:

- `label: string`{lang="ts-type"}
- `children?: FooterColumnLink[]`{lang="ts-type"}

Elke kolom bevat een `children` array van objecten die de links definiëren. Elke link kan de volgende eigenschappen hebben:

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"}

U kunt elke eigenschap van de [Link](/docs/components/link#props) component doorgeven, zoals `to`, `target`, enz.

::component-example
---
prettier: true
name: 'footer-columns-example'
class: 'p-8'
props:
  class: 'w-full'
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog

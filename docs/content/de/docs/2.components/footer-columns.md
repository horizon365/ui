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

@@@ph000@Verwendung

Die Komponente FooterColumns rendert eine Liste von Spalten, die in Ihrer Fußzeile angezeigt werden sollen.

Verwenden Sie es im `top`-Slot der [Footer](/docs/components/footer)-Komponente:

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

@@ph017@gmail.de

Verwenden Sie `columns` prop als Array von Objekten mit den folgenden Eigenschaften:

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH02020@@@@@@@@@PH0202020@@@@@@@@@@@PH02021
`children?: FooterColumnLink[]``children?: FooterColumnLink[]`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}

Jede Spalte enthält ein `children`-Array von Objekten, die die Links definieren.

`label?: string`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}PH028027@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`icon?: string``icon?: string`PH03030{lang="ts-type"}{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@PH0333@@@@@@@@@@@@@@PH03333@@@@@@@@@@@@@@@PH0334{lang="ts-type"}{lang="ts-type"}PH03334@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }``ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }``ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"}

Sie können jede Eigenschaft von der [Link](/docs/components/link#props) Komponente wie `to`,`target`, etc. übergeben.

::component-example
---
Schöner: wahr
name: 'footer-columns-example'(footer-columns-beispiel)
Klasse: 'P-8'
Props:
  Klasse: "W-voll"
---
::

@@044@bpgbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvb

@@ph045@@gmail.de

Komponenten Props

### Slots

Die Komponenten-Slots

@@ph047@@gmail.de

Das Komponenten-Theme

@@ph048@@changelog

Das Component-Changelog

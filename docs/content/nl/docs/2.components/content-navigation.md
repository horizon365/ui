---
title: InhoudNavigatie
description: 'Een navigatiecomponent in accordeonstijl voor het organiseren van paginalinks.'
category: content
framework: nuxt
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentNavigation.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Dit onderdeel is alleen beschikbaar wanneer de `@nuxt/content` module is geïnstalleerd.
::

## Gebruik

Gebruik de `navigation` prop met de `navigation`{lang="ts-type"} waarde die je krijgt bij het ophalen van de navigatie van je app.

::component-example
---
name: 'content-navigation-example'
class: 'h-96 overflow-y-auto'
overflowHidden: true
props:
  class: 'w-full'
---
::

### Type

Stel de `type`-prop in op `single` om slechts één item tegelijk te openen. Standaard op `multiple`.

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
items:
  type:
  - 'single'
  - 'multiple'
hide:
  - class
  - navigation
props:
  class: 'w-full'
  type: 'single'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
        - title: 'Introduction'
          path: '#introduction'
          active: true
        - title: 'Installation'
          path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
        - title: 'defineShortcuts'
          path: '#defineshortcuts'
        - title: 'useModal'
          path: '#usemodal'
---
::

### Kleur

Gebruik de `color` prop om de kleur van de navigatielinks te wijzigen.

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
hide:
  - class
  - navigation
props:
  class: 'w-full'
  color: 'neutral'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
      - title: 'Introduction'
        path: '#introduction'
        active: true
      - title: 'Installation'
        path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
      - title: 'defineShortcuts'
        path: '#defineshortcuts'
      - title: 'useModal'
        path: '#usemodal'
---
::

### Variant

Gebruik de `variant` prop om de variant van de navigatielinks te wijzigen.

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
hide:
  - class
  - navigation
items:
  variant:
  - 'link'
  - 'pill'
props:
  class: 'w-full'
  variant: 'link'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
      - title: 'Introduction'
        path: '#introduction'
        active: true
      - title: 'Installation'
        path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
      - title: 'defineShortcuts'
        path: '#defineshortcuts'
      - title: 'useModal'
        path: '#usemodal'
---
::

### Hoogtepunt

Gebruik de `highlight` prop om een gemarkeerde rand voor de actieve link weer te geven.

Gebruik de `highlight-color` prop om de kleur van de rand te veranderen. Standaard is dit de `color` prop.

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
hide:
  - class
  - navigation
props:
  class: 'w-full'
  highlight: true
  highlightColor: 'primary'
  color: 'primary'
  variant: 'pill'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
      - title: 'Introduction'
        path: '#introduction'
        active: true
      - title: 'Installation'
        path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
      - title: 'defineShortcuts'
        path: '#defineshortcuts'
      - title: 'useModal'
        path: '#usemodal'
---
::

### Achterliggende pictogram

Gebruik de `trailing-icon`-prop om het [Icon](/docs/components/icon) van items met kinderen aan te passen. Standaard `i-lucide-chevron-down`.

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
hide:
  - class
  - navigation
props:
  class: 'w-full'
  trailingIcon: 'i-lucide-arrow-up'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
      - title: 'Introduction'
        path: '#introduction'
        active: true
      - title: 'Installation'
        path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
      - title: 'defineShortcuts'
        path: '#defineshortcuts'
      - title: 'useModal'
        path: '#usemodal'
---
::

::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.chevronDown`-sleutel.
::

## Voorbeelden

### Binnen een layout

Gebruik de ContentNavigation-component in een [PageAside](/docs/components/page-aside) -component binnen een lay-out om de navigatie van de pagina weer te geven:

```vue [layouts/docs.vue]{11}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" highlight />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

### Binnen een header

Gebruik de ContentNavigation-component in de `content`-sleuf van een [Header](/docs/components/header) -component om de navigatie van de pagina op mobiel weer te geven:

```vue [components/Header.vue]{9-11}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UHeader>
    <template #body>
      <UContentNavigation :navigation="navigation" highlight />
    </template>
  </UHeader>
</template>
```

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog{prefix="content"}

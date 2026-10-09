---
title: LocaleSelecteer
description: 'A Selecteer om te schakelen tussen landinstellingen.'
category: i18n
links:
  - label: SelectMenu
    to: /docs/components/select-menu
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/locale/LocaleSelect.vue
---

## Gebruik

Het onderdeel LocaleSelect breidt de [SelectMenu](/docs/components/select-menu) component uit, zodat u elke eigenschap zoals `color`, `variant`, `size`, etc. kunt doorgeven.

::framework-only
#nuxt
::note{to="/docs/getting-started/integrations/i18n/nuxt"}
Dit onderdeel is bedoeld voor gebruik met het **i18n**-systeem. Lees er meer over in de handleiding.
::

#vue
::note{to="/docs/getting-started/integrations/i18n/vue"}
Dit onderdeel is bedoeld voor gebruik met het **i18n**-systeem. Lees er meer over in de handleiding.
::

::

::warning
De vlaggen worden weergegeven met Unicode tekens. Dit kan resulteren in een andere weergave, b.v.
Microsoft Edge onder Windows geeft in plaats daarvan de ISO 3166-1 alpha-2-code weer, omdat er geen vlagpictogrammen worden geleverd met de OS-lettertypen.
::

### Lokalen

Gebruik de `locales` prop met een array van locales van `@nuxt/ui/locale`.

::component-example
---
name: 'locale-select-example'
---
::

U kunt alleen de landinstellingen doorgeven die u nodig heeft in uw aanvraag:

```vue
<script setup lang="ts">
import { en, es, fr } from '@nuxt/ui/locale'

const locale = ref('en')
</script>

<template>
  <ULocaleSelect v-model="locale" :locales="[en, es, fr]" />
</template>
```

### Dynamische landinstelling

::framework-only
#nuxt
::div
Je kunt het gebruiken met Nuxt i18n:

```vue
<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale, setLocale } = useI18n()
</script>

<template>
  <ULocaleSelect
    :model-value="locale"
    :locales="Object.values(locales)"
    @update:model-value="setLocale($event)"
  />
</template>
```

::

#vue
::div
Je kunt het gebruiken met Vue i18n:

```vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import * as locales from '@nuxt/ui/locale'

const { locale, setLocale } = useI18n()
</script>

<template>
  <ULocaleSelect
    :model-value="locale"
    :locales="Object.values(locales)"
    @update:model-value="setLocale($event)"
  />
</template>
```

::

::

## API

### Voordelen

:component-props

## Wijzigingsgelog

:component-changelog{prefix="locale"}

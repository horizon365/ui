---
title: LocaleSelect auswählen
description: 'Ein Select, um zwischen den Locales zu wechseln.'
category: i18n
links:
  - label: SelectMenu auswählen
    to: /docs/components/select-menu
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/locale/LocaleSelect.vue
---

## Bearbeiten

Die LocaleSelect-Komponente erweitert die [SelectMenu](/docs/components/select-menu)-Komponente, sodass Sie jede Eigenschaft wie `color`, `variant`, `size` usw. übergeben können.

::framework-only
#nuxt
::note{to="/docs/getting-started/integrations/i18n/nuxt"}
Diese Komponente ist für die Verwendung mit dem System **i18n** vorgesehen. Weitere Informationen finden Sie in der Anleitung.
::

#vue
::note{to="/docs/getting-started/integrations/i18n/vue"}
Diese Komponente ist für die Verwendung mit dem **i18n**-System vorgesehen. Weitere Informationen finden Sie in der Anleitung.
::

::

::warning
Dies kann zu einer anderen Anzeige führen, z. B. zeigt Microsoft Edge unter Windows stattdessen den ISO 3166 - 1 Alpha-2-Code an, da keine Flaggensymbole mit den OS-Schriftarten ausgeliefert werden.
::

### Locales Bearbeiten

Verwenden Sie die `locales`-Prop mit einem Array von Locales von `@nuxt/ui/locale`.

::component-example
---
name: 'locale-select-example'
---
::

Sie können nur die Gebietsschemas übergeben, die Sie in Ihrer Anwendung benötigen:

```vue
<script setup lang="ts">
import { en, es, fr } from '@nuxt/ui/locale'

const locale = ref('en')
</script>

<template>
  <ULocaleSelect v-model="locale" :locales="[en, es, fr]" />
</template>
```

### Dynamic locale (Deutsche Ausgabe)

::framework-only
#nuxt
::div
Sie können es mit Nuxt i18n verwenden:

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
Sie können es mit Vue i18n verwenden:

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

## API (englisch)

### Props (englisch)

:component-props

## Changelog Übersetzung

:component-changelog{prefix="locale"}

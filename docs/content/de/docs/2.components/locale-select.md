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

@@@ph000@Verwendung

Die LocaleSelect-Komponente erweitert die Komponente [SelectMenu](/docs/components/select-menu), so dass Sie jede Eigenschaft wie `color`,`variant`,`size`, etc. übergeben können

::framework-only
#nuxt sein
::note{to="/docs/getting-started/integrations/i18n/nuxt"}
Diese Komponente ist für die Verwendung mit dem **i18n** system gedacht.
::

#Ansehen
::note{to="/docs/getting-started/integrations/i18n/vue"}
Diese Komponente ist für die Verwendung mit dem System **i18n** gedacht.
::

::

::warning
Dies kann zu einer anderen Anzeige führen, z. B. zeigt Microsoft Edge unter Windows stattdessen den ISO 3166 - 1 Alpha-2-Code an, da keine Flaggensymbole mit den OS-Schriftarten ausgeliefert werden.
::

### Ortsansässige

Verwenden Sie `locales` prop mit einem Array von Gebietsschemata von `@nuxt/ui/locale`.

::component-example
---
locale-select-example (locale-select-beispiel)
---
::

Sie können nur die Locales übergeben, die Sie in Ihrer Anwendung benötigen:

```vue
<script setup lang="ts">
import { en, es, fr } from '@nuxt/ui/locale'

const locale = ref('en')
</script>

<template>
  <ULocaleSelect v-model="locale" :locales="[en, es, fr]" />
</template>
```

### Dynamisches Gebietsschema

::framework-only
#nuxt sein
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

#Ansehen
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

@@@@@@58@@bmmwh

@@ph059@@gmail.de

Komponenten Props

@@ph060@@changelog @@changelog

: component-changelog {prefix="locale"}

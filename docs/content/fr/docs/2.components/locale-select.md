---
title: Localisation sélection
description: 'Sélectionnez pour basculer entre les locaux.'
category: i18n
links:
  - label: SélectionneMenu
    to: /docs/components/select-menu
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/locale/LocaleSelect.vue
---

@@ph000@utilisation

Le composant LocaleSelect étend le composant [SelectMenu](/docs/components/select-menu), afin que vous puissiez passer n'importe quelle propriété telle que `color`,`variant`,`size`, etc.

::framework-only
#numérique
::note{to="/docs/getting-started/integrations/i18n/nuxt"}
Ce composant est destiné à être utilisé avec le système **i18n**. En savoir plus à ce sujet dans le guide.
::

#vue
::note{to="/docs/getting-started/integrations/i18n/vue"}
Ce composant est destiné à être utilisé avec le système **i18n**. En savoir plus dans le guide.
::

::

::warning
Cela peut entraîner un affichage différent, par exemple, Microsoft Edge sous Windows affiche le code ISO 3166 - 1 alpha-2 à la place, car aucune icône de drapeau n'est fournie avec les polices du système d'exploitation.
::

@@P012@@Région

Utilisez le prop `locales` avec un tableau de paramètres locaux de `@nuxt/ui/locale`.

::component-example
---
nom: 'locale-select-example'
---
::

Vous ne pouvez passer que les locales dont vous avez besoin dans votre application:

```vue
<script setup lang="ts">
import { en, es, fr } from '@nuxt/ui/locale'

const locale = ref('en')
</script>

<template>
  <ULocaleSelect v-model="locale" :locales="[en, es, fr]" />
</template>
```

### Localisation dynamique

::framework-only
#numérique
::div
Vous pouvez l'utiliser avec Nuxt i18n:

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
Vous pouvez l'utiliser avec Vue i18n:

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

@@pH058@@api

@@509@@propriété

Composants-props

@changelog @changelog

: composant-changelog {prefix="locale"}

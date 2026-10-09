---
title: Localidad Select
description: 'Seleccione para cambiar entre locales.'
category: i18n
links:
  - label: SeleccionesMenú
    to: /docs/components/select-menu
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/locale/LocaleSelect.vue
---

xph0000xUso

El componente LocaleSelect extiende el componente [SelectMenu](/docs/components/select-menu), de modo que puede pasar cualquier propiedad como `color`, `variant`, `size`, etc.

::framework-only
#nuxt
::note{to="/docs/getting-started/integrations/i18n/nuxt"}
Este componente está destinado a ser utilizado con el sistema **i18n**. Obtenga más información sobre él en la guía.
::

#vue
::note{to="/docs/getting-started/integrations/i18n/vue"}
Este componente está destinado a ser utilizado con el sistema **i18n**. Más información sobre él en la guía.
::

::

::warning
Esto puede resultar en una pantalla diferente, por ejemplo, Microsoft Edge en Windows muestra el código ISO 3166 - 1 alfa-2 en su lugar, ya que no se envían iconos de bandera con las fuentes del sistema operativo.
::

### Locales

Utilice el prop `locales` con una matriz de locales de `@nuxt/ui/locale`.

::component-example
---
name: 'locale-select-example'
---
::

Puede pasar solo las localidades que necesita en su solicitud:

```vue
<script setup lang="ts">
import { en, es, fr } from '@nuxt/ui/locale'

const locale = ref('en')
</script>

<template>
  <ULocaleSelect v-model="locale" :locales="[en, es, fr]" />
</template>
```

### Localización dinámica

::framework-only
#nuxt
::div
Puedes usarlo con Nuxt i18n:

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
Puedes usarlo con Vue i18n:

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

## API (Edición española)

### Accesorios

:component-props

## Changelog (Edición española)

:component-changelog{prefix="locale"}

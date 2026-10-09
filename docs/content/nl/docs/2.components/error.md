---
description: 'Een vooraf gebouwde foutcomponent met NuxtError-ondersteuning.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Error.vue
---

## Gebruik

De Error-component geeft een `<main>`-element weer dat samenwerkt met de [Header](/docs/components/header) -component om een lay-out op volledige hoogte te creëren die zich uitstrekt tot de beschikbare hoogte van de viewport.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Het onderdeel Fout gebruikt de `--ui-header-height` CSS-variabele om zichzelf correct onder de `Header` te positioneren.
::

### Fout

Gebruik de `error` prop om een foutmelding weer te geven.

::framework-only
#nuxt
::note{to="https://nuxt.com/docs/guide/directory-structure/error" target="_blank"}
In de meeste gevallen ontvangt u de `error` prop in uw `error.vue` bestand.
::
::

::component-code
---
hide:
  - class
prettier: true
props:
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

### Icoon: badge{label="4.8+" class="align-text-top"}

Gebruik de `icon` prop om een pictogram boven de statuscode weer te geven.

::component-code
---
hide:
  - class
prettier: true
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
props:
  icon: 'i-lucide-file-x'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

Gebruik de `#leading`-sleuf om een aangepast element weer te geven, zoals een logo.

::component-code
---
hide:
  - class
prettier: true
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
props:
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
slots:
  leading: |

    <img src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full">
---
#leading
:img{src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full"}
::

### Wissen

Gebruik de `clear` prop om de duidelijke knop aan te passen of te verbergen (met `false`-waarde).

U kunt elke eigenschap van de [Button](/docs/components/button) component doorgeven om deze aan te passen.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
  - clear.color
  - clear.size
  - clear.icon
  - clear.class
props:
  clear:
    color: neutral
    size: xl
    icon: i-lucide-arrow-left
    class: 'rounded-full'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

### Omleiden

Gebruik de `redirect`-prop om de gebruiker om te leiden naar een andere pagina wanneer op de duidelijke knop wordt geklikt. Standaard `/`.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
props:
  redirect: '/docs/getting-started'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

## Voorbeelden

### Binnen `error.vue`

Gebruik het onderdeel Fout in uw `error.vue`:

```vue [error.vue]{13}
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <UApp>
    <UHeader />

    <UError :error="error" />

    <UFooter />
  </UApp>
</template>
```

::tip
Misschien wilt u de code van uw `app.vue` in uw `error.vue`-bestand repliceren om dezelfde lay-out en functies te hebben, hier is een voorbeeld: <https://github.com/nuxt/ui/blob/v4/docs/app/error.vue>
::

::note
U kunt meer lezen over hoe om te gaan met fouten in de [Nuxt documentation](https://nuxt.com/docs/getting-started/error-handling#error-page), maar bij gebruik van `nuxt generate` is het raadzaam om `fatal: true` toe te voegen in uw `createError`-aanroep om er zeker van te zijn dat de fout
 pagina wordt weergegeven:

```vue [pages/\[...slug\\].vue]
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>
```

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

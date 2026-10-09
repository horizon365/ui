---
description: 'Eine vorgefertigte Fehlerkomponente mit NuxtError-Unterstützung.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Error.vue
---

## Bearbeiten

Die Error-Komponente rendert ein `<main>`-Element, das zusammen mit der [Header](/docs/components/header)-Komponente ein Layout in voller Höhe erstellt, das sich auf die verfügbare Höhe des Ansichtsfensters erstreckt.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Die Error-Komponente verwendet die CSS-Variable `--ui-header-height`, um sich korrekt unter dem `Header` zu positionieren.
::

### Fehler

Verwenden Sie die `error`-Prop, um eine Fehlermeldung anzuzeigen.

::framework-only
#nuxt
::note{to="https://nuxt.com/docs/guide/directory-structure/error" target="_blank"}
In den meisten Fällen erhalten Sie die `error`-Prop in Ihrer `error.vue`-Datei.
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

### Icon: badge{label="4.8+" class="align-text-top"} (englisch)

Verwenden Sie die `icon`-Prop, um ein Symbol über dem Statuscode anzuzeigen.

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

Verwenden Sie den `#leading`-Steckplatz, um ein benutzerdefiniertes Element, z. B. ein Logo, anzuzeigen.

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

### Clear ist ein

Verwenden Sie die `clear`-Prop, um die Schaltfläche zum Löschen (mit dem Wert `false`) anzupassen oder auszublenden.

Sie können jede Eigenschaft der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

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

### Weiterleitung

Verwenden Sie die `redirect`-Prop, um den Benutzer auf eine andere Seite umzuleiten, wenn auf die Schaltfläche zum Löschen geklickt wird. Standardmäßig `/`.

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

## Examples [Bearbeiten]

### Innerhalb `error.vue`

Verwenden Sie die Komponente Error in Ihrem `error.vue`:

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
Vielleicht möchten Sie den Code Ihres `app.vue` in Ihrer `error.vue`-Datei replizieren, um das gleiche Layout und die gleichen Funktionen zu haben, hier ist ein Beispiel: <https://github.com/nuxt/ui/blob/v4/docs/app/error.vue>
::

::note
Sie können mehr darüber lesen, wie Sie Fehler in der [Nuxt-Dokumentation ](https://nuxt.com/docs/getting-started/error-handling#error-page) behandeln, aber wenn Sie `nuxt generate` verwenden, wird empfohlen, `fatal: true` in Ihren `createError`-Aufruf einzufügen, um sicherzustellen, dass die Fehlerseite angezeigt wird:

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

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog

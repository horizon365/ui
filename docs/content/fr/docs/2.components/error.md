---
description: 'Un componente de error preconstruido con soporte para NuxtError.'
category: layout
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Error.vue
---

## Utilisation

Le composant Error affiche un élément `<main>` qui fonctionne avec le composant [Header](/docs/components/header) pour créer une disposition pleine hauteur qui s'étend à la hauteur disponible de la fenêtre d'affichage.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Le composant Error utilise la variable CSS `--ui-header-height` pour se positionner correctement en dessous de la variable `Header`.
::

### Erreur

Utilisez le prop `error` pour afficher un message d'erreur.

::framework-only
#nuxt
::note{to="https://nuxt.com/docs/guide/directory-structure/error" target="_blank"}
Dans la plupart des cas, vous recevrez le prop `error` dans votre fichier `error.vue`.
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

### Icône: badge{label="4.8+" class="align-text-top"}

Utilisez le prop `icon` pour afficher une icône au-dessus du code d'état.

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

Utilisez le slot `#leading` pour afficher un élément personnalisé, tel qu 'un logo.

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

### Clear

Utilisez la prop `clear` pour personnaliser ou masquer le bouton effacer (avec la valeur `false`).

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

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

### Redirect

Utilisez la prop `redirect` pour rediriger l'utilisateur vers une page différente lorsque le bouton effacer est cliqué.

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

## exemples

### Dans `error.vue`

Utilisez le composant d'erreur dans votre `error.vue`:

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
Vous voudrez peut-être répliquer le code de votre `app.vue` dans votre fichier `error.vue` pour avoir la même disposition et les mêmes fonctionnalités, voici un exemple: <https://github.com/nuxt/ui/blob/v4/docs/app/error.vue>
::

::note
Vous pouvez en savoir plus sur la façon de gérer les erreurs dans la documentation [Nuxt ](https://nuxt.com/docs/getting-started/error-handling#error-page), mais lorsque vous utilisez `nuxt generate`, il est recommandé d'ajouter `fatal: true` à l'intérieur de votre appel `createError` pour vous assurer que la page d'erreur est affichée:

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

## Thème

:component-theme

## Changelog

:component-changelog

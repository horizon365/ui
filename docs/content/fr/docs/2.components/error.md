---
description: 'Un composant d'erreur pré-construit avec support NuxtError.'
category: layout
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Error.vue
---

@@ph000@@utilisation

Le composant Error rend un élément `<main>` qui fonctionne avec le composant [Header](/docs/components/header) pour créer une disposition pleine hauteur qui s'étend à la hauteur disponible de la fenêtre d'affichage.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Le composant Error utilise la variable CSS `--ui-header-height` pour se positionner correctement sous le `Header`.
::

@@ph008@erreur

Utilisez la prop `error` pour afficher un message d'erreur.

::framework-only
#numérique
::note{to="https://nuxt.com/docs/guide/directory-structure/error" target="_blank"}
Dans la plupart des cas, vous recevrez le prop `error` dans votre fichier `error.vue`.
::
::

::component-code
---
Caché:
  @@classe 12
Étiquette: true
Props:
  erreur:
    Code d'état: 404
    statutMessage: "Page non trouvée"
    Message: "La page que vous recherchez n'existe pas".
  classe: '! min-h-96'
---
::

### Icon: badge{label="4.8+" class="align-text-top"}

Utilisez la prop `icon` pour afficher une icône au-dessus du code d'état.

::component-code
---
Caché:
  @@ph016@classe
Étiquette: true
Ignorer:
  - error.statusCode
  - error.statusMessage
  @@ph019@@error.message
Props:
  Icône: i-lucide-file-x
  erreur:
    Code d'état: 404
    statutMessage: "Page non trouvée"
    Message: "La page que vous recherchez n'existe pas".
  classe: '! min-h-96'
---
::

Utilisez l'emplacement `#leading` pour afficher un élément personnalisé, tel qu 'un logo.

::component-code
---
Caché:
  @@ph021@classe
Étiquette: true
ignorer:
  - error.statusCode
  - error.statusMessage
  @@ph024@@error.message
Props:
  Mistake:
    Code d'état: 404
    statutMessage: "Page non trouvée"
    Message: "La page que vous recherchez n'existe pas".
  classe: '! min-h-96'
Slots:
  Leader:|

    @@@ 25 @
---
#leader
par img{src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full"}
::

@27@@Clear

Utilisez la prop `clear` pour personnaliser ou masquer le bouton effacer (avec la valeur `false`).

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

::component-code
---
Étiquette: true
Caché:
  @@classe 34
Ignorer:
  - error.statusCode
  - error.statusMessage
  @@ph037@@error.message
  - clear.color
  - clear.size
  @@clear.icon
  - clear.class
Props:
  Clair:
    Couleur: Neutre
    Taille: XL
    Icône: i-lucide-arrow-left
    Catégorie:"round-full"
  Mistake:
    Code d'état: 404
    statutMessage: "Page non trouvée"
    Message: "La page que vous recherchez n'existe pas".
  classe: '! min-h-96'
---
::

@@ph042@@Redirect

Utilisez la prop `redirect` pour rediriger l'utilisateur vers une page différente lorsque le bouton effacer est cliqué. Par défaut à `/`.

::component-code
---
Étiquette: true
Caché:
  @@classe 45
ignorer:
  - error.statusCode
  - error.statusMessage
  @@ph048@@error.message
Props:
  redirect: '/docs/démarrage'
  Mistake:
    Code d'état: 404
    statutMessage: "Page non trouvée"
    Message: "La page que vous recherchez n'existe pas".
  classe: '! min-h-96'
---
::

@@ph049@exemples

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
Vous pouvez en savoir plus sur la façon de gérer les erreurs dans la documentation [Nuxt, mais lorsque vous utilisez `nuxt generate`, il est recommandé d'ajouter `fatal: true` à l'intérieur de votre appel `createError` pour vous assurer que la page d'erreur s'affiche:

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

@@ph094@@api

@@ph095@@projets

Composants-props

@@ph096@@réglages

Composants slots

@@ph097@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog

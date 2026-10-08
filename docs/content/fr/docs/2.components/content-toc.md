---
title: ContentToc
description: 'Une table des matières collante avec surbrillance automatique des liens d'ancrage actifs.'
category: content
framework: nuxt
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentToc.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Ce composant n'est disponible que lorsque le module `@nuxt/content` est installé.
::

@@ph001@@utilisation

Utilisez le `links` prop avec le `page?.body?.toc?.links`{lang="ts-type"} que vous obtenez lors de la récupération d'une page.

::component-example
---
nom: 'content-toc-exemple'
Props:
  Catégorie: w-full
---
::

@@ph005@titre

Utilisez la prop `title` pour modifier le titre de la table des matières.

::component-code{prefix="content"}
---
Étiquette: true
Collapse: vrai
Caché:
  @@ph007@classe
Ignorer:
  @@ph008@liens
Extérieur:
  @@ph009@liens
Extérieurs:
  - ContentTocLink []
Props:
  Titre: Sur cette page
  Catégorie: w-full
  à gauche:
  - id: utilisation
    Profondeur: 2
    Étiquette: usage
    Enfants:
    - id: titre
      Profondeur: 3
      Texte: Titre
    - id: couleur
      Profondeur: 3
      Texte: couleur
    - id: highlight
      Profondeur: 3
      Étiquette: highlight
    - id:'highlight-couleur'
      Profondeur: 3
      Étiquette: Highlight Color
    - id:'highlight-variant'
      Profondeur: 3
      Étiquette: highlight variant
---
::

### couleur

Utilisez la prop `color` pour changer la couleur des liens.

::component-code{prefix="content"}
---
Étiquette: true
Collapse: vrai
Caché:
  @@classe 19
ignorer:
  @@20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Extérieur:
  @@ph021@@liens
Extérieurs:
  @@222@@ContentTéléchargement []
Props:
  Couleur: "Neutre"
  Catégorie: w-full
  à gauche:
    - id: utilisation
      Profondeur: 2
      Étiquette: usage
      Enfants:
        - id: titre
          Profondeur: 3
          Texte: titre
        - id: couleur
          Profondeur: 3
          Texte: Couleur
        - id: highlight
          Profondeur: 3
          Étiquette: highlight
        - id:'highlight-couleur'
          Profondeur: 3
          Étiquette: Highlight Color
        - id:'highlight-variant'
          Profondeur: 3
          Étiquette: highlight variant
---
::

@@29@highlight

Utilisez la prop `highlight` pour afficher une bordure surlignée pour l'élément actif.

::component-code{prefix="content"}
---
Étiquette: true
Collapse: vrai
Caché:
  @@ph031@classe
Ignorer:
  @@ph032@liens
Extérieur:
  @@ph033@liens
Extérieurs:
  - ContentTocLink []
Props:
  Highlights: vrai
  Catégorie: w-full
  à gauche:
    - id: utilisation
      Profondeur: 2
      Étiquette: usage
      Enfants:
        - id: titre
          Profondeur: 3
          Texte: Titre
        - id: couleur
          Profondeur: 3
          Texte: Couleur
        - id: highlight
          Profondeur: 3
          Étiquette: highlight
        - id:'hauteur de couleur'
          Profondeur: 3
          Étiquette: Highlight Color
        - id:'highlight-variant'
          Profondeur: 3
          Étiquette: highlight variant
---
::

### Highlight Couleur

Utilisez la prop `highlight-color` pour changer la couleur du surbrillant. Il est par défaut la prop `color`.

::component-code{prefix="content"}
---
Étiquette: true
Collapse: vrai
Caché:
  @@ph044@classe
Ignorer:
  @@ph045@liens
  @@ph046@highlight
Extérieur:
  @@ph047@liens
Extérieurs:
  - ContentTocLink []
Props:
  Highlights: vrai
  highlightColor: neutre
  Catégorie: w-full
  à gauche:
    - id: utilisation
      Profondeur: 2
      Étiquette: usage
      Enfants:
        - id: titre
          Profondeur: 3
          Texte: titre
        - id: couleur
          Profondeur: 3
          Texte: Couleur
        - id: highlight
          Profondeur: 3
          Étiquette: highlight
        - id:'highlight-couleur'
          Profondeur: 3
          Étiquette: Highlight Color
        - id:'highlight-variant'
          Profondeur: 3
          Étiquette: highlight variant
---
::

### Highlight Variant: badge{label="4.6+" class="align-text-top"}

Utilisez la prop `highlight-variant` pour modifier le style du surbrillant. Par défaut à `straight`.

::component-code{prefix="content"}
---
Étiquette: true
Collapse: vrai
Caché:
  @@ph059@classe
Ignorer:
  @@ph060@liens
  @@ph061@highlight
Extérieur:
  @@ph062@liens
Extérieurs:
  - ContentTocLink []
Props:
  Highlights: vrai
  highlightColor: 'primaire'
  highlightVariant: 'circuit'
  Catégorie: w-full
  à gauche:
    - id: utilisation
      Profondeur: 2
      Étiquette: usage
      Enfants:
        - id: titre
          Profondeur: 3
          Texte: Titre
        - id: couleur
          Profondeur: 3
          Texte: couleur
        - id: highlight
          Profondeur: 3
          Étiquette: highlight
        - id:'hauteur de couleur'
          Profondeur: 3
          Étiquette: Highlight Color
        - id:'highlight-variant'
          Profondeur: 3
          Étiquette: highlight variant
    - id: exemples
      Profondeur: 2
      Étiquette: exemples
      Enfants:
        - id: dans une page
          Profondeur: 3
          Texte: Dans une page
    - id: api
      Profondeur: 2
      Étiquette: API
      Enfants:
        @@ph073@@id: props
          Profondeur: 3
          Étiquette: props
        - id: réglages
          Profondeur: 3
          Étiquette: slots
        - id: émet
          Profondeur: 3
          Étiquette: Emits
    - id: thème
      Profondeur: 2
      Étiquette: theme
---
::

@@ph077@exemples

### Dans une page

Utilisez le composant ContentToc dans une page pour afficher la table des matières:

```vue [pages/\[...slug\\].vue]{22-24}
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryCollection('docs').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <UPage v-if="page">
    <UPageHeader :title="page.title" />

    <UPageBody>
      <ContentRenderer v-if="page.body" :value="page" />

      <USeparator v-if="surround?.filter(Boolean).length" />

      <UContentSurround :surround="(surround as any)" />
    </UPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>
```

@@ph107@api

@@ph108@props

Composants-props

@@ph109@@Slots

Composants slots

@110@110@110

Composants émetteurs

@@ph111@thème

Composant-thème

@changement@changement@changement@changement.com

: composant-changelog {prefix="content"}

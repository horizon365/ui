---
title: Changées versions
description: 'Afficher une liste des versions du changelog dans une timeline.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersions.vue
---

@@ph000@utilisation

Le composant ChangelogVersions fournit une disposition flexible pour afficher une liste de composants[ChangelogVersion](/docs/components/changelog-version)en utilisant soit l'emplacement par défaut , soit la prop`versions`.

```vue {2,8}
<template>
  <UChangelogVersions>
    <UChangelogVersion
      v-for="(version, index) in versions"
      :key="index"
      v-bind="version"
    />
  </UChangelogVersions>
</template>
```

@@ph017@@Versions

Utilisez le prop`versions`comme un tableau d'objets avec les propriétés du composant[ChangelogVersion](/docs/components/changelog-version#props).

::component-code
---
Collapse : vrai
ignorer :
  @@ph023@versions
Extérieure :
  @@ph024@versions
Extérieurs :
  - ChangelogVersionProps [ modifier le code ]
Caché :
  @@ph026@classe
Props :
  Versions :
    - titre : Nuxt 3.17
      Description : Nuxt 3.17 est sorti - apportant une refonte majeure de la couche de données asynchrone , un nouveau composant intégré , de meilleurs avertissements et des améliorations de performances !
      image :https://nuxt.com/assets/blog/v3.17.png
      Date : 2025 - 04 - 27
      à : https://nuxt.com/blog/v3-17
      cible : _ blanc
      Conteneur : ' max-w - lg '
    - titre : Nuxt 3.16
      Nuxt 3.16 est sorti avec des fonctionnalités et des améliorations de performances !
      image :https://nuxt.com/assets/blog/v3.16.png
      Date du 2025 - 03 - 07
      à : https://nuxt.com/blog/v3-16
      cible : _ blanc
      Conteneur : ' max-w - lg '
    - titre : Nuxt 3.15
      Nuxt 3.15 est sorti - avec Vite 6 , un meilleur HMR et des performances plus rapides !
      image :https://nuxt.com/assets/blog/v3.15.png
      Date : 2024 - 12 - 24
      à : https://nuxt.com/blog/v3-15
      cible : _ blanc
      Conteneur : ' max-w - lg '
  Catégorie : w-full
---
::

### indicateur

Utilisez la prop`indicator`pour masquer la barre d'indicateur sur la gauche . Par défaut à`true`.

::component-code
---
Collapse : vrai
Ignorer :
  @@ph033@versions
Extérieur :
  @@ph034@versions
Extérieurs :
  - ChangelogVersionProps [ modifier le code ]
Caché :
  @@ph036@classe
Props :
  Indicateur : Faux
  Versions :
    - titre : Nuxt 3.17
      Description : Nuxt 3.17 est sorti - apportant une refonte majeure de la couche de données asynchrone , un nouveau composant intégré , de meilleurs avertissements et des améliorations de performances !
      image :https://nuxt.com/assets/blog/v3.17.png
      Date : 2025 - 04 - 27
      à : https://nuxt.com/blog/v3-17
      cible : _ blanc
      Conteneur : ' max-w - lg '
    - titre : Nuxt 3.16
      Nuxt 3.16 est sorti avec des fonctionnalités et des améliorations de performances !
      image :https://nuxt.com/assets/blog/v3.16.png
      Date : 2025 - 03 - 07
      à : https://nuxt.com/blog/v3-16
      cible : _ blanc
      Conteneur : ' max-w - lg '
    - titre : Nuxt 3.15
      Nuxt 3.15 est sorti - avec Vite 6 , un meilleur HMR et des performances plus rapides !
      image :https://nuxt.com/assets/blog/v3.15.png
      Date : 2024 - 12 - 24
      à : https://nuxt.com/blog/v3-15
      cible : _ blanc
      Conteneur : ' max-w - lg '
  Catégorie : w-full
---
::

### Indicateur de mouvement

Utilisez le prop`indicator-motion`pour personnaliser ou masquer l'effet de mouvement sur la barre d'indicateur . Par défaut à`true`avec`{ damping: 30, restDelta: 0.001 }`[options de transition de ressort](https://motion.dev/docs/vue-transitions#spring).

::component-code
---
Collapse : vrai
Ignorer :
  - versions
Extérieure :
  - versions
Extérieurs :
  - ChangelogVersionProps [ modifier le code ]
Caché :
  @@ph051@classe
items :
  Indicateur :
    @@ph052@vrai
    @@F053@faux
Props :
  indicateur : true
  Versions :
    - titre : Nuxt 3.17
      Description : Nuxt 3.17 est sorti - apportant une refonte majeure de la couche de données asynchrone , un nouveau composant intégré , de meilleurs avertissements et des améliorations de performances !
      image :https://nuxt.com/assets/blog/v3.17.png
      Date : 2025 - 04 - 27
      à : https://nuxt.com/blog/v3-17
      cible : _ blanc
      Conteneur : ' max-w - lg '
    - titre : Nuxt 3.16
      Nuxt 3.16 est sorti avec des fonctionnalités et des améliorations de performances !
      image :https://nuxt.com/assets/blog/v3.16.png
      Date : 2025 - 03 - 07
      à : https://nuxt.com/blog/v3-16
      cible : _ blanc
      Conteneur : ' max-w - lg '
    - titre : Nuxt 3.15
      Nuxt 3.15 est sorti - avec Vite 6 , un meilleur HMR et des performances plus rapides !
      image :https://nuxt.com/assets/blog/v3.15.png
      Date : 2024 - 12 - 24
      à : https://nuxt.com/blog/v3-15
      cible : _ blanc
      Conteneur : ' max-w - lg '
  Catégorie : w-full
---
::

@@ph057@exemples

::note
Bien que ces exemples utilisent[Nuxt Content](https://content.nuxt.com), les composants peuvent être intégrés à n'importe quel système de gestion de contenu .
::

### Au sein d'une page

Utilisez le composant ChangelogVersions dans une page pour créer une page de journal des changements :

```vue [pages/changelog.vue]{10-17}
<script setup lang="ts">
const { data: versions } = await useAsyncData('versions', () => queryCollection('versions').all())
</script>

<template>
  <UPage>
    <UPageHero title="Changelog" />

    <UPageBody>
      <UChangelogVersions>
        <UChangelogVersion
          v-for="(version, index) in versions"
          :key="index"
          v-bind="version"
          :to="version.path"
        />
      </UChangelogVersions>
    </UPageBody>
  </UPage>
</template>
```

::note
Dans cet exemple , les`versions`sont récupérés en utilisant`queryCollection`du module`@nuxt/content`.
::

::tip
La prop`to`est remplacée ici puisque`@nuxt/content`utilise la propriété`path`.
::

### Avec indicateur collant

Vous pouvez utiliser le prop`ui`et les différents emplacements pour rendre les indicateurs collants :

::component-example
---
Étiquette : true
Collapse : vrai
nom : ' changelog-versions - sticky-example '
Catégorie : P - 8
Props:
  Catégorie: w-full
---
::

### Avec conteneur de défilement: badge{label="4.4+" class="align-text-top"}

Passez un objet à la prop `indicator` pour configurer le conteneur de défilement. Par défaut, l'indicateur suit le défilement de la fenêtre/page (https://motion.dev/docs/vue-use-scroll#page-scroll).

```vue
<script setup lang="ts">
const scrollContainer = ref<HTMLElement>()
</script>

<template>
  <div ref="scrollContainer" class="max-h-96 overflow-y-auto">
    <UChangelogVersions v-if="scrollContainer" :indicator="{ container: scrollContainer }" />
  </div>
</template>
```

::warning
Lorsque vous utilisez un `container` personnalisé, assurez-vous que l'élément conteneur est monté avant le `UChangelogVersions`.
::

@@ph109@@api

@@ph110@@props

Composants-props

@@111@111@1111

Composants slots

::tip
Vous pouvez utiliser tous les slots du composant [`ChangelogVersion`](/docs/components/changelog-version#slots) dans ChangelogVersions, ils sont automatiquement transférés afin que vous puissiez personnaliser les versions individuelles lors de l'utilisation du prop `versions`.

```vue{3-5}
<template>
  <UChangelogVersions :versions="versions">
    <template #body="{ version }">
      <Markdown :value="version.content" />
    </template>
  </UChangelogVersions>
</template>
```
::

@@ph127@thème

Composant-thème

@change128 @ changement

Composant-changelog

---
title: Changées versions
description: 'Afficher une liste des versions du changelog dans une timeline.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersions.vue
---

## Utilisation

Le composant ChangelogVersions fournit une disposition flexible pour afficher une liste de composants [ChangelogVersion](/docs/components/changelog-version) en utilisant soit l'emplacement par défaut, soit la prop `versions`.

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

### Versions

Utilisez la prop `versions` comme un tableau d'objets avec les propriétés du composant [ChangelogVersion](/docs/components/changelog-version#props).

::component-code
---
collapse: true
ignore:
  - versions
external:
  - versions
externalTypes:
  - ChangelogVersionProps[]
hide:
  - class
props:
  versions:
    - title: Nuxt 3.17
      description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.17.png
      date: 2025-04-27
      to: 'https://nuxt.com/blog/v3-17'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.16
      description: 'Nuxt 3.16 is out - packed with features and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.16.png
      date: 2025-03-07
      to: 'https://nuxt.com/blog/v3-16'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.15
      description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!'
      image: https://nuxt.com/assets/blog/v3.15.png
      date: 2024-12-24
      to: 'https://nuxt.com/blog/v3-15'
      target: '_blank'
      ui.container: 'max-w-lg'
  class: 'w-full'
---
::

### indicateur

Utilisez la prop `indicator` pour masquer la barre d'indicateur sur la gauche. Par défaut, `true`.

::component-code
---
collapse: true
ignore:
  - versions
external:
  - versions
externalTypes:
  - ChangelogVersionProps[]
hide:
  - class
props:
  indicator: false
  versions:
    - title: Nuxt 3.17
      description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.17.png
      date: 2025-04-27
      to: 'https://nuxt.com/blog/v3-17'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.16
      description: 'Nuxt 3.16 is out - packed with features and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.16.png
      date: 2025-03-07
      to: 'https://nuxt.com/blog/v3-16'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.15
      description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!'
      image: https://nuxt.com/assets/blog/v3.15.png
      date: 2024-12-24
      to: 'https://nuxt.com/blog/v3-15'
      target: '_blank'
      ui.container: 'max-w-lg'
  class: 'w-full'
---
::

### Indicateur de mouvement

Utilisez la prop `indicator-motion` pour personnaliser ou masquer l'effet de mouvement sur la barre d'indicateur. Par défaut, `true` avec options de transition `{ damping: 30, restDelta: 0.001 }` [spring ](https://motion.dev/docs/vue-transitions#spring).

::component-code
---
collapse: true
ignore:
  - versions
external:
  - versions
externalTypes:
  - ChangelogVersionProps[]
hide:
  - class
items:
  indicatorMotion:
    - true
    - false
props:
  indicatorMotion: true
  versions:
    - title: Nuxt 3.17
      description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.17.png
      date: 2025-04-27
      to: 'https://nuxt.com/blog/v3-17'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.16
      description: 'Nuxt 3.16 is out - packed with features and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.16.png
      date: 2025-03-07
      to: 'https://nuxt.com/blog/v3-16'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.15
      description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!'
      image: https://nuxt.com/assets/blog/v3.15.png
      date: 2024-12-24
      to: 'https://nuxt.com/blog/v3-15'
      target: '_blank'
      ui.container: 'max-w-lg'
  class: 'w-full'
---
::

## Exemples

::note
Bien que ces exemples utilisent [Nuxt Content](https://content.nuxt.com), les composants peuvent être intégrés à n'importe quel système de gestion de contenu.
::

### Dans une page

Utilisez le composant ChangelogVersions dans une page pour créer une page de journal des changements:

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
Dans cet exemple, les `versions` sont récupérés à l'aide de `queryCollection` à partir du module `@nuxt/content`.
::

::tip
La prop `to` est remplacée ici puisque `@nuxt/content` utilise la propriété `path`.
::

### Avec indicateur collant

Vous pouvez utiliser le prop `ui` et les différentes fentes pour rendre les indicateurs collants:

::component-example
---
prettier: true
collapse: true
name: 'changelog-versions-sticky-example'
class: 'p-8'
props:
  class: 'w-full'
---
::

### With conteneur de défilement: badge{label="4.4+" class="align-text-top"}

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

## API

### Props

:component-props

### Slots

:component-slots

::tip
Vous pouvez utiliser tous les emplacements du composant [`ChangelogVersion`](/docs/components/changelog-version#slots) dans ChangelogVersions, ils sont automatiquement transférés afin que vous puissiez personnaliser les versions individuelles lors de l'utilisation du prop `versions`.

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

## Thème

:component-theme

## Changelog écrit

:component-changelog

---
description: Un ensemble de panneaux redimensionnables séparés par des poignées glissables.
category: layout
links:
  - label: Splitteur
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/splitter
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Splitter.vue
navigation.badge: New
---

## Utilisation

Utilisez le composant Splitter pour afficher une liste de panneaux redimensionnables séparés par des poignées glissables.

::component-example
---
collapse: true
name: 'splitter-example'
---
::

::note
Le Splitter remplit la hauteur de son conteneur, alors assurez-vous qu 'un élément parent en définit un.
::

### Éléments

Utilisez le prop `items` comme un tableau d'objets avec les propriétés suivantes:

Xph007xxx`defaultSize?: number`xxxxph000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
- x`minSize?: number`x{lang="ts-type"}
- x`maxSize?: number`xx{lang="ts-type"}
- x`collapsible?: boolean`xx{lang="ts-type"}
- x`collapsedSize?: number`xx{lang="ts-type"}
- x`sizeUnit?: '%' | 'px'`xx{lang="ts-type"}
- x`order?: number`x{lang="ts-type"}
- x`id?: string`x{lang="ts-type"}
- x`slot?: string`xx{lang="ts-type"}
- x`class?: any`x{lang="ts-type"}
- x`ui?: { panel?: ClassNameValue }`xx{lang="ts-type"}

Utilisez la touche `slot` pour remplir le contenu d'un panneau et la touche `class` pour le styliser. Les éléments sans touche `slot` retombent dans un emplacement `panel-{index}`. Les tailles sont des pourcentages par défaut, définissez `sizeUnit: 'px'` sur un élément pour les valeurs de pixels.

::caution
Lors du rendu sur le serveur, définissez le prop `id` et donnez `defaultSize` à tous les éléments ou à aucun. Les identifiants sont générés automatiquement sinon et le serveur et le client peuvent être en désaccord, ce qui rompt la disposition sur l'hydratation. Un élément sans `defaultSize` retombe à une part égale sur le serveur, donc mélanger les deux fait sauter les panneaux une fois hydratés. Les tailles de pixels sont mesurées sur le client et changent toujours un peu.
::

::component-code
---
collapse: true
class: 'h-96'
prettier: true
ignore:
  - items
  - id
external:
  - items
externalTypes:
  - SplitterItem[]
props:
  id: 'splitter-items'
  items:
    - slot: 'sidebar'
      minSize: 15
      maxSize: 40
      defaultSize: 25
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
    - slot: 'main'
      defaultSize: 75
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
slots:
  sidebar: Sidebar
  main: Main
---

#sidebar
sidebar

#main
principaux
::

### Définition

Utilisez la prop `orientation` pour changer la direction du séparateur. Par défaut, `horizontal`.

::component-code
---
collapse: true
class: 'h-96'
prettier: true
ignore:
  - items
  - id
external:
  - items
externalTypes:
  - SplitterItem[]
props:
  id: 'splitter-orientation'
  orientation: 'vertical'
  items:
    - slot: 'first'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
    - slot: 'second'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
slots:
  first: First
  second: Second
---

#first
First one

#second
Deuxième
::

## Exemples

### Avec panneau pliable

Définissez `collapsible: true` sur un élément pour le laisser s'effondrer au-delà de son `minSize`, et utilisez `collapsedSize` pour garder une partie du panneau visible lorsqu 'il est effondré. L'emplacement du panneau expose `collapsed`, `collapse` et `expand` afin que vous puissiez le contrôler par programmation, et les événements `collapse`, `expand` et `resize` se déclenchent avec l'index du panneau.

::component-example
---
collapse: true
name: 'splitter-collapsible-example'
---
::

### Avec splitters imbriqués

Installer un `Splitter` à l'intérieur d'un panneau pour créer des mises en page bidimensionnelles de style IDE.

::component-example
---
collapse: true
name: 'splitter-nested-example'
---
::

### Avec poignée personnalisée

Utilisez le prop `ui` pour le restyler, par exemple en tant que diviseur visible pour les mises en page affleurantes, et le slot `resize-handle` pour rendre le contenu à l'intérieur comme une poignée.

::component-example
---
collapse: true
name: 'splitter-custom-handle-example'
---
::

### avec persistance

Fournissez un `auto-save-id` pour conserver la disposition sur `localStorage` et la restaurer lors du rechargement.

```vue
<template>
  <USplitter id="my-layout" auto-save-id="my-layout" :items="items">
    <!-- ... -->
  </USplitter>
</template>
```

## API

### Props équipements

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Thème

:component-theme

## Changelog

:component-changelog

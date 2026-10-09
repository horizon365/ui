---
title: Progresseur
description: Une barre de progression divisée en plusieurs segments qui s'additionnent pour un total.
category: element
navigation.badge: New
keywords:
  - meter
  - meter group
  - segmented progress
  - stacked bar
  - breakdown
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ProgressGroup.vue
---

## Utilisation

Utilisez le composant ProgressGroup pour afficher plusieurs valeurs sous forme de segments d'une seule barre de progression.

::component-code
---
collapse: true
ignore:
  - items
  - max
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  max: 128
  items:
    - label: 'System'
      value: 24
      color: 'neutral'
      icon: 'i-lucide-cog'
    - label: 'Apps'
      value: 8
      color: 'error'
      icon: 'i-lucide-app-window'
    - label: 'Documents'
      value: 12
      color: 'warning'
      icon: 'i-lucide-file'
    - label: 'Multimedia'
      value: 42
      color: 'success'
      icon: 'i-lucide-film'
  class: 'w-96'
---
::

### éléments

Utilisez le prop `items` comme un tableau d'objets avec les propriétés suivantes:

- x`label?: string`x{lang="ts-type"}
- x`icon?: string`xx{lang="ts-type"}
- x`value?: number`x{lang="ts-type"}
Xph043xx[x`color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | (string & {})`{lang="ts-type"}x](#with-custom-colorsx)
- x`slot?: string`x{lang="ts-type"}
- x`class?: any`xx{lang="ts-type"}
- xx`ui?: { segment?: ClassNameValue, indicator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingDot?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue }`xx{lang="ts-type"}

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  items:
    - label: 'Compute'
      value: 42
      color: 'primary'
    - label: 'Storage'
      value: 18
      color: 'info'
    - label: 'Bandwidth'
      value: 9
      color: 'warning'
  class: 'w-96'
---
::

::note
Les éléments sans `icon` obtiennent un point coloré dans la liste à la place.
::

### max

Utilisez la prop `max` pour définir la valeur à laquelle tous les éléments s'ajoutent. Defaults à `100`.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  max: 512
  items:
    - label: 'Used'
      value: 128
      color: 'primary'
    - label: 'Reserved'
      value: 64
      color: 'neutral'
  class: 'w-96'
---
::

::note
Les valeurs sont fixées entre `0` et `max`, et les segments qui s'additionnent à plus de `max` partagent la piste proportionnellement.
::

### statut

Utilisez le prop `status` pour afficher la valeur additionnée au-dessus de la barre.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  status: true
  max: 128
  items:
    - label: 'System'
      value: 24
      color: 'neutral'
    - label: 'Apps'
      value: 8
      color: 'error'
    - label: 'Multimedia'
      value: 42
      color: 'success'
  class: 'w-96'
---
::

::tip
Le statut suit la fin de la barre, utilisez `:ui="{ status: 'w-full' }"` pour le faire couvrir toute la largeur à la place.
::

### Couleur

Utilisez le prop `color` pour changer la couleur de chaque segment qui ne se définit pas.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  color: neutral
  items:
    - label: 'Read'
      value: 42
    - label: 'Write'
      value: 18
  class: 'w-96'
---
::

::tip
Cet accessoire et le `color` de chaque élément acceptent toutes les valeurs de couleur CSS, ce qui est pratique pour les palettes en dehors du thème.
::

### Size électrique

Utilisez la prop `size` pour modifier la taille du ProgressGroup.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  size: xl
  items:
    - label: 'Read'
      value: 42
      color: 'primary'
    - label: 'Write'
      value: 18
      color: 'info'
  class: 'w-96'
---
::

### Orientation

Utilisez la prop `orientation` pour modifier l'orientation du groupe ProgressGroup. Defaults à `horizontal`.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  orientation: vertical
  items:
    - label: 'Read'
      value: 42
      color: 'primary'
    - label: 'Write'
      value: 18
      color: 'info'
  class: 'h-48'
---
::

## exemples

### With slot d'état

Utilisez l'emplacement `#status` pour remplacer le pourcentage additionné par votre propre contenu.

::component-example
---
collapse: true
name: progress-group-status-example
---
::

### Avec slots d'éléments

Utilisez les emplacements `#item-label` et `#item-trailing` pour modifier ce que chaque entrée affiche. Les deux reçoivent le `item`, son `index` et son `percent`.

::component-example
---
collapse: true
name: progress-group-item-example
---
::

### With couleurs personnalisées

Donnez à chaque élément une couleur CSS pour créer une ventilation en dehors de la palette de thèmes.

::component-example
---
collapse: true
name: progress-group-custom-color-example
---
::

## API

### Props équipements

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog

---
description: Sépare le contenu horizontalement ou verticalement.
category: element
keywords:
  - divider
  - hr
  - horizontal rule
links:
  - label: séparateur
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/separator
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Separator.vue
---

## Utilisation

Utilisez le composant Séparateur tel quel pour séparer le contenu.

::component-code
---
class: 'p-8'
---
::

### Définition

Utilisez la prop `orientation` pour changer l'orientation du Séparateur. Defaults à `horizontal`.

::component-code
---
ignore:
  - class
class: 'p-8'
props:
  orientation: vertical
  class: 'h-48'
---
::

### étiquettes

Utilisez le prop `label` pour afficher une étiquette au milieu du Séparateur.

::component-code
---
class: 'p-8'
props:
  label: 'Hello World'
---
::

### Position: badge{label="4.8+" class="align-text-top"}

Utilisez la prop `position` pour changer la position du contenu du séparateur. Defaults à `center`.

::component-code
---
ignore:
  - class
class: 'p-8'
props:
  position: start
  label: 'Hello World'
---
::

### Icône

Utilisez le prop `icon` pour afficher une icône au milieu du séparateur.

::component-code
---
class: 'p-8'
props:
  icon: 'i-simple-icons-nuxtdotjs'
---
::

### Avatars

Utilisez le prop `avatar` pour afficher un avatar au milieu du Séparateur.

::component-code
---
prettier: true
class: 'p-8'
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
---
::

### Couleur

Utilisez la prop `color` pour changer la couleur du Séparateur. Defaults à `neutral`.

::component-code
---
class: 'p-8'
props:
  color: primary
  type: solid
---
::

### type

Utilisez la prop `type` pour changer le type du Separator. Defaults à `solid`.

::component-code
---
class: 'p-8'
props:
  type: dashed
---
::

### Size

Utilisez la prop `size` pour changer la taille du Separator. Defaults à `xs`.

::component-code
---
class: 'p-8'
props:
  size: lg
---
::

## API

### Projets

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog

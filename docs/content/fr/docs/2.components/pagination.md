---
description: Une liste de boutons ou de liens pour naviguer dans les pages.
category: navigation
keywords:
  - pager
  - page navigation
links:
  - label: pagination
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pagination
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Pagination.vue
---

## Utilisation

Utilisez la prop `default-page` ou la directive `v-model:page` pour contrôler la page en cours.

::component-code
---
external:
  - page
model:
  - page
ignore:
  - page
  - total
props:
  page: 5
  total: 100
---
::

::note
Le composant Pagination utilise des accessoires [`Button`](/docs/components/button) pour afficher les pages, utilisez les accessoires [`color`](#color), [`variant`xph028#variant) et [`size`](xph0333xph0x pour les styliser.
::

### totale

Utilisez la prop `total` pour définir le nombre total d'éléments dans la liste.

::component-code
---
external:
  - page
model:
  - page
props:
  page: 5
  total: 100
---
::

### Items par page

Utilisez la prop `items-per-page` pour définir le nombre d'éléments par page. Par défaut, `10`.

::component-code
---
ignore:
  - page
external:
  - page
model:
  - page
props:
  page: 5
  itemsPerPage: 20
  total: 100
---
::

### Sibling Compteur

Utilisez la prop `sibling-count` pour définir le nombre de frères et sœurs à afficher. Defaults à `2`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  siblingCount: 1
  total: 100
---
::

### Afficher les bords

Utilisez la prop `show-edges` pour toujours afficher les points de suspension, la première et la dernière pages.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  showEdges: true
  siblingCount: 1
  total: 100
---
::

### Show Contrôles

Utilisez la prop `show-controls` pour afficher les boutons premier, précédent, suivant et dernier. Par défaut `true`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  showControls: false
  showEdges: true
  total: 100
---
::

### couleur

Utilisez la prop `color` pour définir la couleur des contrôles inactifs. Par défaut `neutral`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  page: 5
  color: primary
  total: 100
---
::

### Variant

Utilisez la prop `variant` pour définir la variante des contrôles inactifs. Defaults sur `outline`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  variant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  page: 5
  color: neutral
  variant: subtle
  total: 100
---
::

XPH169xCouleur active

Utilisez la prop `active-color` pour définir la couleur du contrôle actif. Par défaut, `primary`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  page: 5
  activeColor: neutral
  total: 100
---
::

### Active Variante d'équipement

Utilisez la prop `active-variant` pour définir la variante du contrôle actif. Par défaut sur `solid`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  activeVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  page: 5
  activeColor: primary
  activeVariant: subtle
  total: 100
---
::

### Size

Utilisez la prop `size` pour définir la taille des contrôles. Par défaut, `md`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  size:
    - xs
    - sm
    - md
    - lg
    - xl
props:
  page: 5
  size: xl
  total: 100
---
::

### Désactivé

Utilisez le prop `disabled` pour désactiver les contrôles de pagination.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  total: 100
  disabled: true
---
::

## Exemples

### Avec gauche

Utilisez la prop `to` pour transformer les boutons en liens. Passez une fonction qui reçoit le numéro de page et renvoie une destination de route.

::component-example
---
name: 'pagination-links-example'
---
::

::note
Dans cet exemple, nous ajoutons le hachage `#with-links` pour éviter d'aller en haut de la page.
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Thème

:component-theme

## Changelog

:component-changelog

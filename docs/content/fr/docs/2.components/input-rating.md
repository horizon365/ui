---
title: Inputrating
description: Un composant pour afficher et collecter les évaluations des utilisateurs.
category: form
keywords:
  - star rating
  - stars
links:
  - label: Rating
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/rating
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputRating.vue
---

## Utilisation

Utilisez la directive `v-model` pour contrôler la valeur d'évaluation du composant InputRating.

::component-code
---
external:
  - modelValue
props:
  modelValue: 3
---
::

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 3
---
::

### Step étape

Utilisez la prop `step` pour contrôler la granularité de chaque étoile. Réglez-la sur `0.5` pour permettre des évaluations d'une demi-étoile.

::component-code
---
ignore:
  - defaultValue
props:
  step: 0.5
  defaultValue: 3.5
---
::

### longueur

Utilisez la prop `length` pour définir le nombre d'étoiles. Par défaut, `5`.

::component-code
---
ignore:
  - defaultValue
props:
  length: 10
  step: 0.5
  defaultValue: 7.5
---
::

### Clearable

Utilisez la prop `clearable` pour permettre aux utilisateurs d'effacer la note en cliquant sur la valeur actuellement sélectionnée.

::component-code
---
ignore:
  - defaultValue
props:
  clearable: true
  defaultValue: 3
---
::

### Hoverable

Utilisez la prop `hoverable` pour contrôler si l'évaluation affiche un aperçu de la valeur lorsque vous survolez les étoiles.

::component-code
---
ignore:
  - defaultValue
props:
  hoverable: true
  defaultValue: 3
---
::

### Icône

Utilisez la prop `icon` pour personnaliser l'icône utilisée pour les étoiles. Par défaut, `i-lucide-star`.

::component-code
---
ignore:
  - defaultValue
props:
  icon: 'i-lucide-heart'
  defaultValue: 4
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser l'icône étoile par défaut globalement dans votre `app.config.ts` sous la touche `ui.icons.star`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser l'icône étoile par défaut globalement dans votre `vite.config.ts` sous la touche `ui.icons.star`.
:::
::

### Empty Icône

Utilisez la prop `empty-icon` pour personnaliser l'icône utilisée pour les étoiles vides. Si elle n'est pas fournie, utilise la même icône que `icon`.

::component-code
---
ignore:
  - defaultValue
props:
  emptyIcon: 'i-lucide-circle'
  icon: 'i-lucide-circle-check'
  defaultValue: 3
---
::

### couleur

Utilisez le prop `color` pour changer la couleur des étoiles remplies.

::component-code
---
ignore:
  - defaultValue
props:
  color: neutral
  defaultValue: 4
---
::

### taille

Utilisez le prop `size` pour modifier la taille des étoiles.

::component-code
---
ignore:
  - defaultValue
items:
  size:
    - xs
    - sm
    - md
    - lg
    - xl
props:
  size: xl
  defaultValue: 4
---
::

### Orientation

Utilisez la prop `orientation` pour modifier l'orientation de l'évaluation. Par défaut à `horizontal`.

::component-code
---
ignore:
  - defaultValue
props:
  orientation: vertical
  defaultValue: 4
---
::

### Désactivé

Utilisez la prop `disabled` pour désactiver le composant InputRating. Lorsqu 'il est désactivé, le composant a une opacité réduite (75%) et montre un curseur `not-allowed` pour indiquer qu' il n'est pas interactif.

::component-code
---
ignore:
  - defaultValue
props:
  disabled: true
  defaultValue: 3
---
::

### Readonly

Utilisez la prop `readonly` pour afficher une note sans permettre l'interaction de l'utilisateur. Contrairement à `disabled`, il conserve l'apparence normale (opacité totale, curseur par défaut). Utilisez lorsque vous voulez afficher une note qui ne peut pas être modifiée mais qui doit avoir l'air normal.

::component-code
---
ignore:
  - defaultValue
props:
  readonly: true
  defaultValue: 4.5
---
::

## API

### Props équipements

:component-props

### Slots

:component-slots

### Emis

:component-emits

## Thème

:component-theme

## Changelog écrit

:component-changelog

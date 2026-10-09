---
title: Inputées
description: 'Un composant d'entrée pour la sélection de la date.'
category: form
keywords:
  - date picker
  - datepicker
  - calendar input
links:
  - label: DataField
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/date-field
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputDate.vue
---

## Utilisation

Utilisez la directive `v-model` pour contrôler la date choisie.

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [2022, 2, 3]
---
::

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
cast:
  defaultValue: DateValue
ignore:
  - defaultValue
external:
  - defaultValue
props:
  defaultValue: [2022, 2, 6]
---
::

::framework-only
#nuxt
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
Ce composant utilise le package `@internationalized/date` pour le formatage local. Le format de date est déterminé par la prop `locale` du composant App.
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
Ce composant utilise le package `@internationalized/date` pour le formatage local. Le format de date est déterminé par la prop `locale` du composant App.
:::
::

### Rangée

Utilisez la prop `range` pour sélectionner une plage de dates.

::component-code
---
prettier: true
cast:
  modelValue: DateRange
ignore:
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  range: true
  modelValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Couleur

Utilisez le prop `color` pour changer la couleur de la date d'entrée.

::component-code
---
props:
  color: neutral
  highlight: true
---
::

### Variant

Utilisez la prop `variant` pour changer la variante de la date d'entrée.

::component-code
---
props:
  variant: subtle
---
::

### Size

Utilisez la prop `size` pour modifier la taille de la date d'entrée.

::component-code
---
props:
  size: xl
---
::

### Icône

Utilisez la prop `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur de la date d'entrée.

::component-code
---
props:
  icon: 'i-lucide-calendar'
---
::

::note
Utilisez les accessoires `leading` et `trailing` pour définir la position de l'icône ou les accessoires `leading-icon` et `trailing-icon` pour définir une icône différente pour chaque position.
::

### Separateur Icône

Utilisez la prop `separator-icon` pour modifier le [Icon](/docs/components/icon) du séparateur de plage.

::component-code
---
ignore:
  - range
props:
  range: true
  separatorIcon: 'i-lucide-arrow-right'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.minus`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.minus`.
:::
::

### Avatars

Utilisez la prop `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur de la date d'entrée.

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/vuejs.png'
    loading: lazy
  size: md
  variant: outline
---
::

### Désactivé

Utilisez la prop `disabled` pour désactiver la date d'entrée.

::component-code
---
props:
  disabled: true
---
::

## Exemples

### Avec dates non disponibles

Utilisez le prop `is-date-unavailable` avec une fonction pour marquer des dates spécifiques comme indisponibles.

::component-example
---
name: 'input-date-unavailable-dates-example'
---
::

### Avec les dates min/max

Utilisez les props `min-value` et `max-value` pour limiter les dates.

::component-example
---
name: 'input-date-min-max-dates-example'
---
::

### Comme sélecteur de date

Utilisez un composant [Calendar](/docs/components/calendar) et un composant [Popover](/docs/components/popover) pour créer un sélecteur de date.

::component-example
---
name: 'input-date-date-picker-example'
---
::

### As un sélecteur de plage de dates

Utilisez un composant [Calendar](/docs/components/calendar) et un composant [Popover](/docs/components/popover) pour créer un sélecteur de plage de dates.

::component-example
---
name: 'input-date-date-range-picker-example'
---
::

## API équipement

### Props

:component-props

### Slots

:component-slots

### Emis

:component-emits

## Thème

:component-theme

## Changelog écrit

:component-changelog

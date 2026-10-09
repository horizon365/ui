---
title: Inputtemps
description: 'Une entrée pour sélectionner un temps.'
category: form
keywords:
  - time picker
  - clock
  - hour
links:
  - label: Timefield est
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-field
  - label: TimeField était
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-range-field
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputTime.vue
---

## Utilisation

Utilisez la directive `v-model` pour contrôler l'heure sélectionnée.

::component-code
---
cast:
  modelValue: TimeValue
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [12, 30, 0]
---
::

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
cast:
  defaultValue: TimeValue
ignore:
  - defaultValue
external:
  - defaultValue
props:
  defaultValue: [9, 45, 0]
---
::

::framework-only
#nuxt
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
Ce composant utilise le package `@internationalized/date` pour le formatage local. Le format de l'heure est déterminé par la prop `locale` du composant App.
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
Ce composant utilise le package `@internationalized/date` pour le formatage local. Le format de l'heure est déterminé par la prop `locale` du composant App.
:::
::

### Rangée

Utilisez le prop `range` pour activer la sélection de plage de temps avec les heures de début et de fin.

::component-code
---
prettier: true
cast:
  modelValue: TimeRangeValue
ignore:
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  range: true
  modelValue:
    start: [9, 0, 0]
    end: [17, 30, 0]
---
::

### Heure Cycle

Utilisez la prop `hour-cycle` pour changer le cycle d'heure de l'InputTime. Defaults à `12`.

::component-code
---
cast:
  defaultValue: TimeValue
ignore:
  - hourCycle
  - defaultValue
external:
  - defaultValue
props:
  hourCycle: 24
  defaultValue: [16, 30, 0]
---
::

### couleur

Utilisez le prop `color` pour changer la couleur de l'InputTime.

::component-code
---
props:
  color: neutral
  highlight: true
---
::

::note
La prop `highlight` est utilisée ici pour afficher l'état de mise au point. Il est utilisé en interne lorsqu 'une erreur de validation se produit.
::

### Variant

Utilisez le prop `variant` pour changer la variante de l'InputTime.

::component-code
---
props:
  variant: subtle
---
::

### Size

Utilisez le prop `size` pour modifier la taille de l'InputTime.

::component-code
---
props:
  size: xl
---
::

### icône

Utilisez la prop `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur de l'InputTime.

::component-code
---
props:
  icon: 'i-lucide-clock'
---
::

::note
Utilisez les accessoires `leading` et `trailing` pour définir la position de l'icône ou les accessoires `leading-icon` et `trailing-icon` pour définir une icône différente pour chaque position.
::

### Séparateur icône

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

Utilisez la prop `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur de l'InputTime.

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

Utilisez le prop `disabled` pour désactiver InputTime.

::component-code
---
props:
  disabled: true
---
::

## Exemples

### Dans un FormField

Vous pouvez utiliser l'InputTime dans un composant [FormField](/docs/components/form-field) pour afficher une étiquette, un texte d'aide, un indicateur requis, etc.

::component-example
---
name: 'input-time-form-field-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emis

:component-emits

## Thème

:component-theme

## Changelog

:component-changelog

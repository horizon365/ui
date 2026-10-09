---
description: Un composant de calendrier pour sélectionner des dates uniques, plusieurs dates ou des plages de dates.
category: element
keywords:
  - date picker
  - datepicker
  - schedule
links:
  - label: Calendrier
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/calendar
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Calendar.vue
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

### Type: badge{label="4.9+" class="align-text-top"}

Utilisez la prop `type` pour modifier ce que le calendrier sélectionne. Par défaut à `date`.

Lorsque vous utilisez `date`, cliquez sur l'en-tête pour passer de la vue jour à une vue mois puis année pour une navigation rapide, puis redescendez pour choisir une date.

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - type
  - modelValue
external:
  - modelValue
props:
  type: month
  modelValue: [2022, 2, 1]
---
::

Utilisez `type="year"` pour afficher un sélecteur d'année autonome.

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - type
  - modelValue
external:
  - modelValue
props:
  type: year
  modelValue: [2022, 1, 1]
---
::

### multiple

Utilisez le prop `multiple` pour permettre plusieurs sélections.

::component-code
---
prettier: true
cast:
  modelValue: DateValue[]
ignore:
  - multiple
  - modelValue
external:
  - modelValue
props:
  multiple: true
  modelValue: [[2022, 2, 4], [2022, 2, 6], [2022, 2, 8]]
---
::

### Rangée

Utilisez le prop `range` pour sélectionner une plage de dates.

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

Le prop `range` fonctionne également avec `type="month"` et `type="year"`, vous permettant de sélectionner une plage de mois ou d'années.

::component-code
---
prettier: true
cast:
  modelValue: DateRange
ignore:
  - type
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  type: month
  range: true
  modelValue:
    start: [2022, 2, 1]
    end: [2022, 6, 1]
---
::

### Nombre de mois

Utilisez le prop `numberOfMonths` pour modifier le nombre de mois dans le calendrier.

::component-code
---
props:
  numberOfMonths: 3
---
::

Contrôles XPH117XMonth

Utilisez la prop `month-controls` pour afficher les contrôles de mois. Par défaut, `true`.

::component-code
---
props:
  monthControls: false
---
::

Utilisez les accessoires `prev-month` et `next-month` pour remplacer les boutons de mois.

::component-code
---
prettier: true
ignore:
  - prevMonth.color
  - prevMonth.variant
  - nextMonth.color
  - nextMonth.variant
props:
  prevMonth:
    color: primary
    variant: soft
  nextMonth:
    color: primary
    variant: soft
---
::

Contrôles XPH141XYear

Utilisez la prop `year-controls` pour afficher les contrôles année. Par défaut `true`.

::component-code
---
props:
  yearControls: false
---
::

Utilisez les accessoires `prev-year` et `next-year` pour remplacer les boutons année.

::component-code
---
prettier: true
ignore:
  - prevYear.color
  - prevYear.variant
  - nextYear.color
  - nextYear.variant
props:
  prevYear:
    color: primary
    variant: soft
  nextYear:
    color: primary
    variant: soft
---
::

Contrôle de vue ### View: badge{label="4.9+" class="align-text-top"}

Utilisez la prop `view-control` pour faire de l'en-tête un bouton qui bascule entre les vues jour, mois et année.

::component-code
---
items:
  viewControl:
    - true
    - false
props:
  viewControl: false
---
::

Réglez le prop `view-control` sur un objet pour remplacer le bouton de titre.

::component-code
---
prettier: true
ignore:
  - viewControl.color
  - viewControl.variant
props:
  viewControl:
    color: primary
    variant: soft
---
::

### Semaines fixes

Utilisez le prop `fixed-weeks` pour afficher le calendrier avec des semaines fixes.

::component-code
---
props:
  fixedWeeks: false
---
::

Numéros de la semaine ### : badge{label="4.4+" class="align-text-top"}

Utilisez le prop `week-numbers` pour afficher les numéros de semaine dans le calendrier.

::component-code
---
props:
  weekNumbers: true
  fixedWeeks: true
---
::

### Couleur

Utilisez le prop `color` pour changer la couleur du calendrier.

::component-code
---
cast:
  defaultValue: DateRange
hide:
  - range
  - defaultValue
  - defaultValue.start
  - defaultValue.end
props:
  color: neutral
  range: true
  defaultValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Variant équivalent

Utilisez le prop `variant` pour changer la variante du calendrier.

::component-code
---
cast:
  defaultValue: DateRange
hide:
  - range
  - defaultValue
  - defaultValue.start
  - defaultValue.end
props:
  variant: subtle
  range: true
  defaultValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Size

Utilisez le prop `size` pour modifier la taille du calendrier.

::component-code
---
props:
  size: xl
---
::

### Désactivé

Utilisez la prop `disabled` pour désactiver le calendrier.

::component-code
---
props:
  disabled: true
---
::

## exemples

### With Événements de puce

Utilisez le composant [Chip](/docs/components/chip) pour ajouter des événements à des jours spécifiques.

::component-example
---
name: 'calendar-events-example'
---
::

### With dates désactivées

Utilisez la prop `is-date-disabled` avec une fonction pour marquer des dates spécifiques comme désactivées. Lorsque vous utilisez `type="month"` ou `type="year"`, utilisez la prop `is-month-disabled` ou `is-year-disabled` à la place.

::component-example
---
name: 'calendar-disabled-dates-example'
---
::

### Avec des dates non disponibles

Utilisez la prop `is-date-unavailable` avec une fonction pour marquer des dates spécifiques comme indisponibles. Lorsque vous utilisez `type="month"` ou `type="year"`, utilisez la prop `is-month-unavailable` ou `is-year-unavailable` à la place.

::component-example
---
name: 'calendar-unavailable-dates-example'
---
::

### Avec les dates min/max

Utilisez les props `min-value` et `max-value` pour limiter les dates.

::component-example
---
name: 'calendar-min-max-dates-example'
---
::

### Avec d'autres systèmes de calendrier

Vous pouvez utiliser d'autres calendriers de `@internationalized/date` pour implémenter un système de calendrier différent.

::component-example
---
name: 'calendar-other-system-example'
---
::

::note{to="https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations"}
Vous pouvez consulter tous les calendriers disponibles sur `@internationalized/date` docs.
::

### Avec contrôles externes

Vous pouvez contrôler le calendrier avec des commandes externes en manipulant la date passée dans le `v-model`.

::component-example
---
name: 'calendar-external-controls-example'
---
::

### Avec la date du jour

Utilisez la fonction `today` de `@internationalized/date` avec `getLocalTimeZone` pour définir la valeur à la date actuelle.

::component-example
---
name: 'calendar-today-example'
---
::

### As sélecteur de date

Utilisez un composant [Button](/docs/components/button) et un composant [Popover](/docs/components/popover) pour créer un sélecteur de date.

::component-example
---
name: 'calendar-date-picker-example'
---
::

### As un sélecteur de plage de dates

Utilisez un composant [Button](/docs/components/button) et un composant [Popover](/docs/components/popover) pour créer un sélecteur de plage de dates avec des plages prédéfinies.

::component-example
---
name: 'calendar-date-range-picker-example'
---
::

## API

### Props équipements

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Thème

:component-theme

## Changelog écrit

:component-changelog

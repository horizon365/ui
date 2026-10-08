---
title: inputé
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

@@ph000@utilisation

Utilisez la directive `v-model` pour contrôler la date sélectionnée.

::component-code
---
Cast:
  Étiquette: DateValue
ignorer:
  - modèleValeur
Extérieur:
  - modèleValeur
Props:
  Modèle:[2022, 2, 3]
---
::

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
Cast:
  valeur: DateValue
ignorer:
  @@@ph005@@defaultValue
Extérieure:
  @@ph006@@valeur défaillante
Props:
  valeur par défaut:[2022, 2, 6]
---
::

::framework-only
#numérique
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
Ce composant utilise le paquet `@internationalized/date` pour la mise en forme locale. Le format de date est déterminé par la prop `locale` du composant App.
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
Ce composant utilise le paquet `@internationalized/date` pour la mise en forme locale. Le format de date est déterminé par la prop `locale` du composant App.
:::
::

@@111@Rangée

Utilisez la prop `range` pour sélectionner une plage de dates.

::component-code
---
Étiquette: true
Cast:
  Étiquette: DateRange
Ignorer:
  @@ph013@rangée
  - modelValue.start
  - modelValue.end
Extérieur:
  - modelValeur
Props:
  Rang: vrai
  Modèle:
    début:[2022, 2, 3]
    fin: [2022, 2, 20]
---
::

### couleur

Utilisez la prop `color` pour changer la couleur de la date d'entrée.

::component-code
---
Props:
  Couleur: Neutre
  Highlights: vrai
---
::

@@@P019@@Variant

Utilisez la prop `variant` pour modifier la variante de la date d'entrée.

::component-code
---
Props:
  Variante: subtile
---
::

@@ph021@@Size

Utilisez la prop `size` pour modifier la taille de la date d'entrée.

::component-code
---
Props:
  Taille: XL
---
::

@@23@Icon

Utilisez le prop `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur de la Date d'entrée.

::component-code
---
Props:
  icon: 'i-lucide-calendrier'
---
::

::note
Utilisez les accessoires `leading` et `trailing` pour définir la position de l'icône ou les accessoires `leading-icon` et `trailing-icon` pour définir une icône différente pour chaque position.
::

### Séparateur Icône

Utilisez la prop `separator-icon` pour changer le [Icon](/docs/components/icon) du séparateur de plage.

::component-code
---
ignorer:
  @@ph040@rangée
Props:
  Rang: vrai
  séparateurIcône:'i-lucide-arrow-right'
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.minus`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.minus`.
:::
::

### Avatar

Utilisez le prop `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur de la date d'entrée.

::component-code
---
Étiquette: true
Ignorer:
  - avatar.chargement
Props:
  Avatar:
    src: 'https://github.com/vuejs.png'
    Étiquette: Lazy
  Étiquette: MD
  Étiquette: Outline
---
::

### désactivé

Utilisez la prop `disabled` pour désactiver la date d'entrée.

::component-code
---
Props:
  handicapés: vrai
---
::

@@ph054@exemples

### Avec des dates non disponibles

Utilisez la prop `is-date-unavailable` avec une fonction pour marquer des dates spécifiques comme indisponibles.

::component-example
---
name: 'input-date-unavailable-dates-exemple'
---
::

### Avec les dates min/max

Utilisez les accessoires `min-value` et `max-value` pour limiter les dates.

::component-example
---
nom: 'input-date-min-max-dates-exemple'
---
::

### Comme sélecteur de date

Utilisez un composant [Calendrier ](/docs/components/calendar) et un composant [Popover](/docs/components/popover) pour créer un sélecteur de date.

::component-example
---
nom: 'input-date-date-picker-exemple'
---
::

### En tant que sélecteur de plage de dates

Utilisez un composant [Calendrier ](/docs/components/calendar) et un composant [Popover](/docs/components/popover) pour créer un sélecteur de plage de dates.

::component-example
---
nom: 'input-date-date-range-picker-example'
---
::

@@ph078@api

@@779@@référencement

Composants-props

@@ph080@@réseaux sociaux

Composants slots

@081@081@081

Composants émetteurs

@@ph082@thème

Composant-thème

@changelog @changelog

Composant-changelog

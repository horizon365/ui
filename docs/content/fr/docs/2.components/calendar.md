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

@@ph000@@utilisation

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

### Type: badge{label="4.9+" class="align-text-top"}

Utilisez la prop `type` pour modifier ce que le calendrier sélectionne. Par défaut à `date`.

Lorsque vous utilisez `date`, cliquez sur l'en-tête pour passer de la vue du jour à une vue du mois puis de l'année pour une navigation rapide, puis redescendez pour choisir une date.

::component-code
---
Cast:
  Étiquette: DateValue
Ignorer:
  @@ph016@type
  - modèleValeur
Extérieure:
  - modelValeur
Props:
  Type: Mois
  Modèle:[2022, 2, 1]
---
::

Utilisez `type="year"` pour rendre un sélecteur d'année autonome.

::component-code
---
Cast:
  Étiquette: DateValue
Ignorer:
  @@ph020@type
  - modèleValeur
Extérieur:
  - modèleValeur
Props:
  Type: Année
  Modèle:[2022, 1, 1]
---
::

@@223@multiple

Utilisez la prop `multiple` pour permettre plusieurs sélections.

::component-code
---
Étiquette: true
Cast:
  valeur: DateValue []
ignorer:
  @@25@multiple
  - modelValeur
Extérieur:
  - modelValeur
Props:
  Multiple: vrai
  Modèle:[[2022, 2, 4],[2022, 2, 6],[2022, 2, 8]]
---
::

@@28@@Rangement

Utilisez la prop `range` pour sélectionner une plage de dates.

::component-code
---
Étiquette: true
Cast:
  Étiquette: DateRange
Ignorer:
  @@ph030@rangée
  - modelValue.start
  - modelValue.end
Extérieure:
  - modelValeur
Props:
  Rang: vrai
  Modèle:
    début:[2022, 2, 3]
    fin: [2022, 2, 19]
---
::

Le prop `range` fonctionne également avec `type="month"` et `type="year"`, vous permettant de sélectionner une plage de mois ou d'années.

::component-code
---
Étiquette: true
Cast:
  Étiquette: DateRange
Ignorer:
  @@ph037@type
  @@ph038@rangée
  - modelValue.start
  - modelValue.end
Extérieure:
  - modèleValeur
Props:
  Type: Mois
  Rang: vrai
  Modélisation:
    début:[2022, 2, 1]
    fin: [2022, 6, 1]
---
::

### Nombre de mois

Utilisez la prop `numberOfMonths` pour modifier le nombre de mois dans le calendrier.

::component-code
---
Props:
  Numéro: 3
---
::

### Mois Contrôles

Utilisez la prop `month-controls` pour afficher les contrôles de mois. Par défaut à `true`.

::component-code
---
Props:
  Contrôles: False
---
::

Utilisez les accessoires `prev-month` et `next-month` pour remplacer les boutons du mois.

::component-code
---
Étiquette: true
ignorer:
  - prevMonth.color
  - prevMonth.variant
  - nextMonth.color
  - nextMonth.variant
Props:
  prévaut:
    Couleur: Primaire
    Variété: Soft
  NextMois:
    Couleur: Primaire
    Variété: Soft
---
::

### Année Contrôles

Utilisez la prop `year-controls` pour afficher les contrôles année. Par défaut à `true`.

::component-code
---
Props:
  annéesContrôles: faux
---
::

Utilisez les accessoires `prev-year` et `next-year` pour remplacer les boutons année.

::component-code
---
Étiquette: true
ignorer:
  - prévYear.color
  - prevYear.variant
  - nextYear.color
  - nextYear.variant
Props:
  prévaut:
    Couleur: Primaire
    Variété: Soft
  NextAnnée:
    Couleur: Primaire
    Variété: Soft
---
::

### View Control: badge{label="4.9+" class="align-text-top"}

Utilisez la prop `view-control` pour faire de l'en-tête un bouton qui bascule entre les vues de jour, mois et année. Par défaut à `true`.

::component-code
---
items:
  ViewControl:
    @@ph066@vrai
    @@@faux67
Props:
  ViewControl: faux
---
::

Définissez la prop `view-control` sur un objet pour remplacer le bouton de titre.

::component-code
---
Étiquette: true
ignorer:
  - viewControl.color
  - viewControl.variant
Props:
  ViewControl:
    Couleur: Primaire
    Variété: Soft
---
::

### Semaines fixes

Utilisez la prop `fixed-weeks` pour afficher le calendrier avec des semaines fixes.

::component-code
---
Props:
  Définition: False
---
::

### Numéros de la semaine: badge{label="4.4+" class="align-text-top"}

Utilisez la prop `week-numbers` pour afficher les numéros de semaine dans le calendrier.

::component-code
---
Props:
  Semaine: vrai
  FixedWeeks: vrai
---
::

@@76@couleur

Utilisez la prop `color` pour changer la couleur du calendrier.

::component-code
---
Cast:
  valeur: DateRange
Caché:
  @@ph078@rangée
  - defaultValue
  - defaultValue.start
  - defaultValue.end
Props:
  Couleur: Neutre
  Rang: vrai
  Valeur défaillante:
    début:[2022, 2, 3]
    fin: [2022, 2, 20]
---
::

@@ph082@@Variant

Utilisez la prop `variant` pour modifier la variante du calendrier.

::component-code
---
Cast:
  valeur: DateRange
Caché:
  @@ph084@rangée
  - valeur défaillante
  - defaultValue.start
  - defaultValue.end
Props:
  Variante: subtile
  Rang: vrai
  Valeur défaillante:
    début:[2022, 2, 3]
    fin: [2022, 2, 19]
---
::

@@888@série

Utilisez la prop `size` pour modifier la taille du calendrier.

::component-code
---
Props:
  Taille: XL
---
::

### désactivé

Utilisez la prop `disabled` pour désactiver le calendrier.

::component-code
---
Props:
  handicapés: vrai
---
::

@@ph092@exemples

### Avec les événements de puce

Utilisez le composant [Chip](/docs/components/chip) pour ajouter des événements à des jours spécifiques.

::component-example
---
nom: 'calendrier-événements-exemple'
---
::

### Avec date désactivée

Utilisez la prop `is-date-disabled` avec une fonction pour marquer des dates spécifiques comme désactivées. Lorsque vous utilisez `type="month"` ou `type="year"`, utilisez plutôt la prop `is-month-disabled` ou `is-year-disabled`.

::component-example
---
nom: 'calendrier-disabled-date-exemple'
---
::

### Avec des dates non disponibles

Utilisez le `is-date-unavailable` prop avec une fonction pour marquer des dates spécifiques comme indisponibles. Lorsque vous utilisez `type="month"` ou `type="year"`, utilisez le `is-month-unavailable` ou `is-year-unavailable` prop à la place.

::component-example
---
nom: 'calendrier-indisponible-date-exemple'
---
::

### Avec les dates min/max

Utilisez les accessoires `min-value` et `max-value` pour limiter les dates.

::component-example
---
nom: 'calendrier-min-max-dates-exemple'
---
::

### Avec d'autres systèmes de calendrier

Vous pouvez utiliser d'autres calendriers de `@internationalized/date` pour implémenter un système de calendrier différent.

::component-example
---
nom: 'calendrier-autre-système-exemple'
---
::

::note{to="https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations"}
Vous pouvez consulter tous les calendriers disponibles sur `@internationalized/date` docs.
::

### Avec contrôles externes

Vous pouvez contrôler le calendrier avec des contrôles externes en manipulant la date passée dans le `v-model`.

::component-example
---
nom: 'exemple de contrôle-exemple'
---
::

### Avec la date d'aujourd 'hui

Utilisez la fonction `today` de `@internationalized/date` avec `getLocalTimeZone` pour définir la valeur à la date actuelle.

::component-example
---
nom: 'calendrier-aujourd' hui-exemple '
---
::

### Comme sélecteur de date

Utilisez un composant [Button](/docs/components/button) et un composant [Popover](/docs/components/popover) pour créer un sélecteur de date.

::component-example
---
nommé:'calendar-date-picker-exemple'
---
::

### En tant que sélecteur de plage de dates

Utilisez un composant [Button](/docs/components/button) et un composant [Popover](/docs/components/popover) pour créer un sélecteur de plage de dates avec des plages prédéfinies.

::component-example
---
name: 'calendar-date-range-picker-example'
---
::

@@ph140@api

@141@141@141

Composants-props

@@ph142@@réglages

Composants slots

### émissions

Composants émetteurs

@@ph144@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog

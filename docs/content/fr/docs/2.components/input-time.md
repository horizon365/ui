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

@@ph000@utilisation

Utilisez la directive `v-model` pour contrôler l'heure sélectionnée.

::component-code
---
Cast:
  Étiquette: TimeValue
Ignorer:
  - modèleValeur
Extérieur:
  - modèleValeur
Props:
  Modèle:[12, 30, 0]
---
::

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
Cast:
  valeur: TimeValue
ignorer:
  @@@ph005@@defaultValue
Extérieur:
  @@ph006@@valeur défaillante
Props:
  valeur par défaut:[9, 45, 0]
---
::

::framework-only
#numérique
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
Ce composant utilise le paquet `@internationalized/date` pour la mise en forme locale. Le format de temps est déterminé par la prop `locale` du composant App.
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
Ce composant utilise le paquet `@internationalized/date` pour la mise en forme locale. Le format de temps est déterminé par la prop `locale` du composant App.
:::
::

@@111@Rangée

Utilisez la prop `range` pour activer la sélection de plage de temps avec les heures de début et de fin.

::component-code
---
Étiquette: true
Cast:
  Modèle: TimeRangeValue
Ignorer:
  @@ph013@rangée
  - modelValue.start
  - modelValue.end
Extérieure:
  - modelValeur
Props:
  Rang: vrai
  Modèle:
    Début:[9, 0, 0]
    Résultat:[17, 30, 0]
---
::

### Cycle de l'heure

Utilisez la prop `hour-cycle` pour changer le cycle d'heure de l'InputTime. Defaults à `12`.

::component-code
---
Cast:
  valeur: TimeValue
ignorer:
  - hourCycle
  - defaultValue
Extérieur:
  - defaultValue
Props:
  cycle: 24
  valeur par défaut:[16, 30, 0]
---
::

@@23@couleur

Utilisez la prop `color` pour changer la couleur de l'InputTime.

::component-code
---
Props:
  Couleur: Neutre
  Highlights: vrai
---
::

::note
Le `highlight` prop est utilisé ici pour afficher l'état de mise au point. Il est utilisé en interne lorsqu 'une erreur de validation se produit.
::

@@26@Variant

Utilisez la prop `variant` pour modifier la variante de l'InputTime.

::component-code
---
Props:
  Variante: subtile
---
::

@@28@Size

Utilisez la prop `size` pour modifier la taille de l'InputTime.

::component-code
---
Props:
  Taille: XL
---
::

### Icon

Utilisez le prop `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur de l'InputTime.

::component-code
---
Props:
  Icône: i-lucide-clock
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
  @@ph047@rangé
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

@@ph052@avatar

Utilisez la prop `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur de l'InputTime.

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

Utilisez la prop `disabled` pour désactiver l'InputTime.

::component-code
---
Props:
  handicapés: vrai
---
::

@@ph061@@Exemples

### Dans un champ de format

Vous pouvez utiliser le composant InputTime dans un [FormField](/docs/components/form-field) pour afficher une étiquette, un texte d'aide, un indicateur requis, etc.

::component-example
---
nom: 'input-time-form-field-example'
---
::

@@ph067@@api

@@ph068@@props

Composants-props

@@ph069@@réseaux sociaux

Composants slots

@@70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Composants émetteurs

@@ph071@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog

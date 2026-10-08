---
description: Un élément d'entrée pour basculer entre les états vérifiés et non vérifiés.
category: form
keywords:
  - tickbox
  - check
  - boolean
links:
  - label: Checkbox à
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Checkbox.vue
---

@@ph000@@utilisation

Utilisez la directive `v-model` pour contrôler l'état coché de la case à cocher.

::component-code
---
Ignorer:
  - modèleValeur
Extérieure:
  - modèleValeur
Props:
  Modèle: true
---
::

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
ignorer:
  @@@ph005@@defaultValue
Props:
  valeur: true
---
::

### Indéterminé

Utilisez la valeur `indeterminate` dans la directive `v-model` ou `default-value` prop pour définir la case à cocher à un état indéterminé ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes).

::component-code
---
ignorer:
  @@ph014@@defaultValue
Props:
  defaultValue: 'indéterminé'
---
::

### Icône indéterminée

Utilisez la prop `indeterminate-icon` pour personnaliser l'icône indéterminée. Par défaut à `i-lucide-minus`.

::component-code
---
ignorer:
  - defaultValue
Props:
  defaultValue: 'indéterminé'
  indéterminéIcône:'i-lucide-plus'
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

@@ph023@étiquette

Utilisez la prop `label` pour définir l'étiquette de la case à cocher.

::component-code
---
Props:
  Étiquette: check me
---
::

Lorsque vous utilisez le prop `required`, un astérisque est ajouté à côté de l'étiquette.

::component-code
---
Ignorer:
  @@ph026@label
Props:
  Requis: Vrai
  Étiquette: check me
---
::

@@27@description

Utilisez la prop `description` pour définir la description de la case à cocher.

::component-code
---
ignorer:
  @29@label
Props:
  Étiquette: check me
  Description: "Ceci est une case à cocher."
---
::

### Icon

Utilisez la prop `icon` pour définir l'icône de la case à cocher lorsqu 'elle est cochée. Par défaut à `i-lucide-check`.

::component-code
---
Ignorer:
  @@pH033@@label
  - valeur défaillante
Props:
  Icône: i-lucide-heart
  valeur: true
  Étiquette: check me
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.check`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.check`.
:::
::

@@pH039@@couleur

Utilisez la prop `color` pour changer la couleur de la case à cocher.

::component-code
---
ignorer:
  @@ph041@@label
  - defaultValue
Props:
  Couleur: Neutre
  valeur: true
  Étiquette: check me
---
::

### Variant

Utilisez la prop `variant` pour modifier la variante de la case à cocher.

::component-code
---
ignorer:
  @@ph045@label
  - valeur défaillante
Props:
  Couleur: Primaire
  Variante: carte
  valeur: true
  Étiquette: check me
---
::

@@ph047@@Size

Utilisez la prop `size` pour modifier la taille de la case à cocher.

::component-code
---
ignorer:
  @@ph049@label
  - valeur défaillante
Props:
  Taille: XL
  Variante: liste
  valeur: true
  Étiquette: check me
---
::

### indicateur

Utilisez la prop `indicator` pour modifier la position ou masquer l'indicateur. Par défaut à `start`.

::note
Lorsque `indicator` est `hidden`, l'icône est affichée au-dessus de l'étiquette.
::

::component-code
---
Étiquette: true
Ignorer:
  @@ph056@label
  @@57@icon
  - defaultValue
Props:
  Référence:"Hidden"
  Variante: carte
  Icône: i-lucide-heart
  valeur: true
  Étiquette: check me
---
::

### désactivé

Utilisez la prop `disabled` pour désactiver la case à cocher.

::component-code
---
ignorer:
  @@ph061@label
Props:
  handicapés: vrai
  Étiquette: check me
---
::

@@ph062 @ réponse

@@ph063@@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

### série

Composants slots

@@666@émissions

Composants émetteurs

@@ph067@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog

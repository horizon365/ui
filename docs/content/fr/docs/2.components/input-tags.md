---
title: Les inputtags
description: Un élément d'entrée qui affiche des balises interactives.
category: form
keywords:
  - chips input
  - multi value
links:
  - label: Les inputtags
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tags-input
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputTags.vue
---

@@ph000@utilisation

Utilisez la directive `v-model` pour contrôler la valeur des InputTags.

::component-code
---
Étiquette: true
Ignorer:
  - modèleValeur
Extérieur:
  - modèleValeur
Props:
  valeur: ['Vue ']
---
::

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
Étiquette: true
Ignorer:
  @@@ph005@@defaultValue
Props:
  defaultValue: ['Vue ']
---
::

### Placeholder

Utilisez la prop `placeholder` pour définir un texte d'espace réservé.

::component-code
---
Props:
  placeholder: 'Entrez les tags...'
---
::

### Max Longueur

Utilisez la prop `max-length` pour définir le nombre maximum de caractères autorisés dans une balise.

::component-code
---
Props:
  Maxime: 4
---
::

### couleur

Utilisez la prop `color` pour changer la couleur de l'anneau lorsque les InputTags sont focalisés.

::component-code
---
Étiquette: true
ignorer:
  - modèleValeur
Extérieure:
  - modèleValeur
Props:
  valeur: ['Vue ']
  Couleur: Neutre
  Highlights: vrai
---
::

::note
Le `highlight` prop est utilisé ici pour afficher l'état de mise au point. Il est utilisé en interne lorsqu 'une erreur de validation se produit.
::

@@P015@@Variétés

Utilisez la prop `variant` pour modifier l'apparence des InputTags.

::component-code
---
Étiquette: true
ignorer:
  - modèleValeur
Extérieure:
  - modelValeur
Props:
  valeur: ['Vue ']
  Variante: subtile
  Couleur: Neutre
  Étiquette: false
---
::

@@ph019@@série

Utilisez la prop `size` pour ajuster la taille des InputTags.

::component-code
---
Étiquette: true
ignorer:
  - modèleValeur
Extérieur:
  - modèleValeur
Props:
  valeur: ['Vue ']
  Taille: XL
---
::

@@23@Icon

Utilisez le prop `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur des InputTags.

::component-code
---
Étiquette: true
Ignorer:
  - modèleValeur
Extérieure:
  - modèleValeur
Props:
  valeur: ['Vue ']
  icon: 'i-lucide-search'
  Étiquette: MD
  Étiquette: Outline
---
::

::note
Utilisez les accessoires `leading` et `trailing` pour définir la position de l'icône ou les accessoires `leading-icon` et `trailing-icon` pour définir une icône différente pour chaque position.
::

### Avatar

Utilisez le prop `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur des InputTags.

::component-code
---
Étiquette: true
ignorer:
  - modèleValeur
  - avatar.loading
Extérieure:
  by - modelValue
Props:
  valeur: ['Vue ']
  Avatar:
    src: 'https://github.com/vuejs.png'
    Étiquette: Lazy
  Étiquette: MD
  Étiquette: Outline
---
::

### Delete Icône

Utilisez le prop `delete-icon` pour personnaliser la suppression [Icon](/docs/components/icon) dans les balises.

::component-code
---
Étiquette: true
Ignorer:
  - modèleValeur
Extérieure:
  - modèleValeur
Props:
  valeur: ['Vue ']
  Icône:'i-lucide-trash'
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.close`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.close`.
:::
::

@@57@chargement

Utilisez la prop `loading` pour afficher une icône de chargement sur les InputTags.

::component-code
---
Étiquette: true
ignorer:
  - modèleValeur
Extérieur:
  - modèleValeur
Props:
  valeur: ['Vue ']
  Chargement: vrai
  Traînée: Faux
---
::

### Icône de chargement

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut,`i-lucide-loader-circle`.

::component-code
---
Étiquette: true
ignorer:
  - modèleValeur
Extérieur:
  - modèleValeur
Props:
  valeur: ['Vue ']
  Chargement: vrai
  loadingIcon: 'i-lucide-loader'
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.loading`.
:::
::

### désactivé

Utilisez la prop `disabled` pour désactiver les InputTags.

::component-code
---
Étiquette: true
ignorer:
  - modèleValeur
Extérieur:
  - modèleValeur
Props:
  valeur: ['Vue ']
  handicapés: vrai
---
::

@@ph074@exemples

### Dans un champ de format

Vous pouvez utiliser les InputTags dans un composant [FormField](/docs/components/form-field) pour afficher une étiquette, un texte d'aide, un indicateur requis, etc.

::component-example
---
nom: 'input-tags-form-field-example'
---
::

@@ph080@api

@@ph081@@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<input>`.
::

@@ph083@@réseaux sociaux

Composants slots

@084@émissions

Composants émetteurs

@085@08500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| @@|@@|

@@ph090@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog

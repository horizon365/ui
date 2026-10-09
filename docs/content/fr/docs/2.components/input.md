---
description: Un élément d'entrée pour entrer du texte.
category: form
keywords:
  - text field
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Input.vue
---

## Utilisation

Utilisez la directive `v-model` pour contrôler la valeur de l'entrée.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ''
---
::

### Type

Utilisez la prop `type` pour changer le type d'entrée. Defaults à `text`.

Certains types ont été implémentés dans leurs propres composants tels que [Checkbox](/docs/components/checkbox), [Radio](/docs/components/radio-group), [InputNumberxph023/docs/components/input-number) etc. et d'autres ont été stylisés comme `file` par exemple.

::component-code
---
items:
  type:
    - text
    - number
    - password
    - search
    - file
props:
  type: 'file'
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types" target="_blank"}
Vous pouvez vérifier tous les types disponibles sur les documents Web MDN.
::

### Placeholder électronique

Utilisez la prop `placeholder` pour définir un texte d'espace réservé.

::component-code
---
props:
  placeholder: 'Search...'
---
::

### couleur

Utilisez le prop `color` pour changer la couleur de la bague lorsque l'entrée est focalisée.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: 'Search...'
---
::

::note
Le prop `highlight` est utilisé ici pour afficher l'état de mise au point. Il est utilisé en interne lorsqu 'une erreur de validation se produit.
::

### Variant

Utilisez le prop `variant` pour changer la variante de l'entrée.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: 'Search...'
---
::

### taille

Utilisez le prop `size` pour modifier la taille de l'entrée.

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: 'Search...'
---
::

### Icône

Utilisez la prop `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur de l'entrée.

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  icon: 'i-lucide-search'
  size: md
  variant: outline
  placeholder: 'Search...'
---
::

Utilisez les accessoires `leading` et `trailing` pour définir la position de l'icône ou les accessoires `leading-icon` et `trailing-icon` pour définir une icône différente pour chaque position.

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  trailingIcon: i-lucide-at-sign
  placeholder: 'Enter your email'
  size: md
---
::

### Avatars

Utilisez la prop `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur de l'entrée.

::component-code
---
prettier: true
ignore:
  - placeholder
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  variant: outline
  placeholder: 'Search...'
---
::

### Chargement

Utilisez le prop `loading` pour afficher une icône de chargement sur l'entrée.

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  trailing: false
  placeholder: 'Search...'
---
::

### Loading Icône

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut, `i-lucide-loader-circle`.

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  placeholder: 'Search...'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.loading`.
:::
::

### Désactivé

Utilisez le prop `disabled` pour désactiver l'entrée.

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: 'Search...'
---
::

## Exemples

### Avec bouton clair

Vous pouvez mettre un [Button](/docs/components/button) à l'intérieur de la fente `#trailing` pour effacer l'entrée.

::component-example
---
name: 'input-clear-button-example'
---
::

### Avec bouton copier

Vous pouvez mettre un [Button](/docs/components/button) à l'intérieur de l'emplacement `#trailing` pour copier la valeur dans le presse-papiers.

::component-example
---
name: 'input-copy-button-example'
---
::

### With mot de passe toggle

Vous pouvez mettre un [Button](/docs/components/button) à l'intérieur de l'emplacement `#trailing` pour basculer la visibilité du mot de passe.

::component-example
---
name: 'input-password-toggle-example'
---
::

### With indicateur de force de mot de passe

Vous pouvez utiliser le composant [Progress](/docs/components/progress) pour afficher l'indicateur de force du mot de passe.

::component-example
---
collapse: true
name: 'input-password-strength-indicator-example'
---
::

### Avec limite de caractère

Vous pouvez utiliser l'emplacement `#trailing` pour ajouter une limite de caractères à l'entrée.

::component-example
---
name: 'input-character-limit-example'
---
::

### With raccourci clavier

Vous pouvez utiliser le composant [Kbd](/docs/components/kbd) à l'intérieur de l'emplacement `#trailing` pour ajouter un raccourci clavier à l'entrée.

::component-example
---
name: 'input-kbd-example'
---
::

::note{to="/docs/composables/define-shortcuts"}
Cet exemple utilise le composable `defineShortcuts` pour focaliser l'entrée lorsque la touche: kbd{value="/"} est enfoncée.
::

### Avec masque

Il n'y a pas de prise en charge intégrée des masques, mais vous pouvez utiliser des bibliothèques comme [maska](https://github.com/beholdr/maska) pour masquer l'entrée.

::component-example
---
name: 'input-mask-example'
---
::

### Avec étiquette flottante

Vous pouvez utiliser l'emplacement `#default` pour ajouter une étiquette flottante à l'entrée.

::component-example
---
name: 'input-floating-label-example'
---
::

### Dans un FormField

Vous pouvez utiliser l'Entrée dans un composant [FormField](/docs/components/form-field) pour afficher une étiquette, un texte d'aide, un indicateur requis, etc.

::component-example
---
name: 'input-form-field-example'
---
::

::tip{to="/docs/components/form"}
Il fournit également la validation et la gestion des erreurs lorsqu 'il est utilisé dans un composant **Form**.
::

### Au sein d'un groupe de champs

Vous pouvez utiliser l'entrée dans un composant [FieldGroup](/docs/components/field-group) pour regrouper plusieurs éléments ensemble.

::component-example
---
name: 'input-field-group-example'
---
::

### As numéro de téléphone entrée

Vous pouvez utiliser l'entrée dans un composant [FieldGroup](/docs/components/field-group) à côté d'un [SelectMenu](/docs/components/select-menu) pour créer une entrée de numéro de téléphone avec sélection de code de pays.

::component-example
---
collapse: true
name: 'input-phone-number-example'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<input>`.
::

### Slots

:component-slots

### Emits

:component-emits

### Exposer

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| `inputRef`x{lang="ts-type"}| `Ref<HTMLInputElement \| null>`x{lang="ts-type"}|

## Thème

:component-theme

## Changelog écrit

:component-changelog

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

## Utilisation

Utilisez la directive `v-model` pour contrôler la valeur des InputTags.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
---
::

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
prettier: true
ignore:
  - defaultValue
props:
  defaultValue: ['Vue']
---
::

### Référencement

Utilisez la prop `placeholder` pour définir un texte d'espace réservé.

::component-code
---
props:
  placeholder: 'Enter tags...'
---
::

### max longueur

Utilisez la prop `max-length` pour définir le nombre maximum de caractères autorisés dans une balise.

::component-code
---
props:
  maxLength: 4
---
::

### Couleur

Utilisez le prop `color` pour changer la couleur de l'anneau lorsque les InputTags sont focalisés.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  color: neutral
  highlight: true
---
::

::note
La prop `highlight` est utilisée ici pour afficher l'état de mise au point. Il est utilisé en interne lorsqu 'une erreur de validation se produit.
::

### Variants

Utilisez le prop `variant` pour changer l'apparence des InputTags.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  variant: subtle
  color: neutral
  highlight: false
---
::

### tailles

Utilisez le prop `size` pour ajuster la taille des InputTags.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  size: xl
---
::

### icône

Utilisez la prop `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur des InputTags.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  icon: 'i-lucide-search'
  size: md
  variant: outline
---
::

::note
Utilisez les accessoires `leading` et `trailing` pour définir la position de l'icône ou les accessoires `leading-icon` et `trailing-icon` pour définir une icône différente pour chaque position.
::

### Avatars

Utilisez la prop `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur des InputTags.

::component-code
---
prettier: true
ignore:
  - modelValue
  - avatar.loading
external:
  - modelValue
props:
  modelValue: ['Vue']
  avatar:
    src: 'https://github.com/vuejs.png'
    loading: lazy
  size: md
  variant: outline
---
::

### Delete icône

Utilisez la prop `delete-icon` pour personnaliser la suppression [Icon](/docs/components/icon) dans les balises.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  deleteIcon: 'i-lucide-trash'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.close`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.close`.
:::
::

### Chargement

Utilisez le prop `loading` pour afficher une icône de chargement sur les InputTags.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  loading: true
  trailing: false
---
::

### Loading Icône

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut, `i-lucide-loader-circle`.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  loading: true
  loadingIcon: 'i-lucide-loader'
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

### Disabled

Utilisez le prop `disabled` pour désactiver les InputTags.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  disabled: true
---
::

## Exemples

### Dans un champ FormField

Vous pouvez utiliser les InputTags dans un composant [FormField](/docs/components/form-field) pour afficher une étiquette, un texte d'aide, un indicateur requis, etc.

::component-example
---
name: 'input-tags-form-field-example'
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

### Emis

:component-emits

### Expose à

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| `inputRef`x{lang="ts-type"}| `Ref<HTMLInputElement \| null>`x{lang="ts-type"}|

## Thème

:component-theme

## Changelog

:component-changelog

---
description: Un élément textarea pour entrer du texte multiligne.
category: form
keywords:
  - multiline
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Textarea.vue
---

## Utilisation

Utilisez la directive `v-model` pour contrôler la valeur de la Textarea.

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

### Rows

Utilisez la prop `rows` pour définir le nombre de lignes. Defaults sur `3`.

::component-code
---
props:
  rows: 12
---
::

### Placeholder

Utilisez la prop `placeholder` pour définir un texte d'espace réservé.

::component-code
---
props:
  placeholder: 'Type something...'
---
::

### Redimensionner automatiquement

Utilisez le prop `autoresize` pour activer le redimensionnement automatique de la hauteur de la Textarea.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 'This is a long text that will autoresize the height of the Textarea.'
  autoresize: true
---
::

Utilisez la prop `maxrows` pour définir le nombre maximum de lignes lors du redimensionnement automatique. Si défini sur `0`, la Textarea grandira indéfiniment.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 'This is a long text that will autoresize the height of the Textarea with a maximum of 4 rows.'
  maxrows: 4
  autoresize: true
---
::

### Couleur

Utilisez le prop `color` pour changer la couleur de l'anneau lorsque le Textarea est mis au point.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: 'Type something...'
---
::

::note
Le prop `highlight` est utilisé ici pour afficher l'état de mise au point. Il est utilisé en interne lorsqu 'une erreur de validation se produit.
::

### Variant

Utilisez le prop `variant` pour changer la variante de la Textarea.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: 'Type something...'
---
::

### Size

Utilisez le prop `size` pour modifier la taille de la Textarea.

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: 'Type something...'
---
::

### Icône

Utilisez la prop `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur de Textarea.

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
  rows: 1
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
  rows: 1
---
::

### Avatar réalisé

Utilisez la prop `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur de Textarea.

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
  rows: 1
---
::

### Chargement

Utilisez le prop `loading` pour afficher une icône de chargement sur le Textarea.

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  trailing: false
  placeholder: 'Search...'
  rows: 1
---
::

### Chargement Icône

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut, `i-lucide-loader-circle`.

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  placeholder: 'Search...'
  rows: 1
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

Utilisez le prop `disabled` pour désactiver la Textarea.

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: 'Type something...'
---
::

## API écrit

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<textarea>`.
::

### Slots électroniques

:component-slots

### Emits

:component-emits

### Expose à

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| `textareaRef`x{lang="ts-type"}| `Ref<HTMLTextAreaElement \| null>`{lang="ts-type"}|
| `autoResize`x{lang="ts-type"}| `() => void`x{lang="ts-type"}|

## Thème

:component-theme

## Changelog

:component-changelog

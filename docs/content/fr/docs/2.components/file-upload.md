---
title: Fileupload
description: 'Un élément d'entrée pour uploader des fichiers.'
category: form
keywords:
  - dropzone
  - drag and drop
  - file input
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FileUpload.vue
---

## Utilisation

Utilisez la directive `v-model` pour contrôler la valeur du fichier FileUpload.

::component-code
---
ignore:
  - modelValue
  - class
external:
  - modelValue
props:
  modelValue: null
  class: 'w-96 min-h-48'
---
::

### multiple

Utilisez le prop `multiple` pour permettre la sélection de plusieurs fichiers.

::component-code
---
ignore:
  - class
props:
  multiple: true
  class: 'w-96 min-h-48'
---
::

### Dropzone

Utilisez la prop `dropzone` pour activer/désactiver la zone déposable. Par défaut `true`.

::component-code
---
ignore:
  - class
props:
  dropzone: false
  class: 'w-96 min-h-48'
---
::

### Interactif

Utilisez la prop `interactive` pour activer/désactiver la zone cliquable. Par défaut `true`.

::tip{to="#with-files-bottom-slot"}
Cela peut être utile lors de l'ajout d'un composant `Button` dans le slot `#actions`.
::

::component-code
---
ignore:
  - class
props:
  interactive: false
  class: 'w-96 min-h-48'
---
::

### Accepté

Utilisez la prop `accept` pour spécifier les types de fichiers autorisés pour l'entrée. Fournir une liste séparée par des virgules de [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types) ou d'extensions de fichiers (par exemple `image/png,application/pdf,.jpg`). Par défaut, `*` (tous les types de fichiers).

::component-code
---
ignore:
  - accept
  - class
props:
  accept: 'image/*'
  class: 'w-96 min-h-48'
---
::

### étiquette

Utilisez le prop `label` pour définir l'étiquette du fichier.

::component-code
---
prettier: true
ignore:
  - class
props:
  label: 'Drop your image here'
  class: 'w-96 min-h-48'
---
::

### Description

Utilisez la prop `description` pour définir la description du fichier.

::component-code
---
prettier: true
ignore:
  - label
  - class
props:
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

### icône

Utilisez la prop `icon` pour définir l'icône du fichier FileUpload. Defaults sur `i-lucide-upload`.

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  icon: 'i-lucide-image'
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.upload`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.upload`.
:::
::

### couleur

Utilisez le prop `color` pour changer la couleur du fichier.

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  color: neutral
  highlight: true
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

::note
Le prop `highlight` est utilisé ici pour afficher l'état de mise au point. Il est utilisé en interne lorsqu 'une erreur de validation se produit.
::

### Variant

Utilisez la prop `variant` pour changer la variante du FileUpload.

::component-code
---
ignore:
  - class
props:
  variant: button
---
::

### Size

Utilisez le prop `size` pour modifier la taille du fichier.

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  size: xl
  variant: area
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
---
::

### layout

Utilisez la prop `layout` pour modifier la façon dont les fichiers sont affichés dans le FileUpload. Defaults à `grid`.

::warning
Cette prop ne fonctionne que lorsque `variant` est `area`.
::

::component-code
---
prettier: true
ignore:
  - label
  - description
  - multiple
  - class
  - ui.base
props:
  layout: list
  multiple: true
  label: 'Drop your images here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96'
  ui:
    base: 'min-h-48'
---
::

### Position

Utilisez la prop `position` pour changer la position des fichiers dans le fichier FileUpload. Defaults à `outside`.

::warning
This prop only works when `variant` is `area` and when `layout` is `list`.
::

::component-code
---
prettier: true
ignore:
  - label
  - description
  - multiple
  - layout
  - class
  - ui.base
props:
  position: inside
  layout: list
  multiple: true
  label: 'Drop your images here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96'
  ui:
    base: 'min-h-48'
---
::

## Exemples

### Avec validation du formulaire

Vous pouvez utiliser le FileUpload dans un composant [Form](/docs/components/form) et [FormField](/docs/components/form-field) pour gérer la validation et la gestion des erreurs.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-form-validation-example'
---
::

### With slot par défaut

Vous pouvez utiliser l'emplacement par défaut pour créer votre propre composant FileUpload.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-default-slot-example'
---
::

### With files-bottom slot

Vous pouvez utiliser le slot `files-bottom` pour ajouter un [Button](/docs/components/button) sous la liste des fichiers pour supprimer tous les fichiers par exemple.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-files-bottom-slot-example'
---
::

::note{to="#interactive"}
La prop `interactive` est définie sur `false` dans cet exemple pour empêcher la zone cliquable par défaut.
::

### With files-top slot

Vous pouvez utiliser l'emplacement `files-top` pour ajouter un [Button](/docs/components/button) au-dessus de la liste des fichiers pour ajouter de nouveaux fichiers par exemple.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-files-top-slot-example'
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

### Expose à

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| `inputRef`x{lang="ts-type"}| `Ref<HTMLInputElement \| null>`x{lang="ts-type"}|
| `dropzoneRef`{lang="ts-type"}| `Ref<HTMLDivElement \| null>`x{lang="ts-type"}|

## Thème

:component-theme

## Changelog écrit

:component-changelog

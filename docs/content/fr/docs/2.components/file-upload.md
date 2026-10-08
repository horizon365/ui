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

@@ph000@utilisation

Utilisez la directive `v-model` pour contrôler la valeur du fichier.

::component-code
---
ignorer:
  - modèleValeur
  @@ph003@classe
Extérieur:
  - modèleValeur
Props:
  Modèle: NULL
  Classe: 'w-96 min-h-48'
---
::

@@005@multiple

Utilisez la prop `multiple` pour permettre la sélection de plusieurs fichiers.

::component-code
---
ignorer:
  @@ph007@classe
Props:
  Multiple: Vrai
  Classe: 'w-96 min-h-48'
---
::

@@ph008@dropzone

Utilisez la prop `dropzone` pour activer/désactiver la zone déposable. Par défaut à `true`.

::component-code
---
Ignorer:
  @@classe 11
Props:
  Dropzone: faux
  Classe: 'w-96 min-h-48'
---
::

### Interactif

Utilisez la prop `interactive` pour activer/désactiver la zone cliquable. Par défaut à `true`.

::tip{to="#with-files-bottom-slot"}
Cela peut être utile lors de l'ajout d'un composant `Button` dans le slot `#actions`.
::

::component-code
---
Ignorer:
  @@classe 17
Props:
  Interactif: Faux
  Classe: 'w-96 min-h-48'
---
::

@@ph018@accepté

Utilisez la prop `accept` pour spécifier les types de fichiers autorisés pour l'entrée. Fournir une liste séparée par des virgules de [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types) ou des extensions de fichiers (par exemple `image/png,application/pdf,.jpg`). Par défaut à `*`(tous les types de fichiers).

::component-code
---
ignorer:
  @@ph026@accepté
  @@ph027@classe
Props:
  accepter: 'image/*'
  Classe: 'w-96 min-h-48'
---
::

@@ph028@étiquette

Utilisez la prop `label` pour définir l'étiquette du fichier Upload.

::component-code
---
Étiquette: true
ignorer:
  @@classe 30
Props:
  Étiquette:'Drop your image here'
  Classe: 'w-96 min-h-48'
---
::

### Description

Utilisez la prop `description` pour définir la description du fichier Upload.

::component-code
---
Étiquette: true
ignorer:
  @@pH033@@label
  @@classe 34
Props:
  Étiquette:'Drop your image here'
  Description: 'SVG, PNG, JPG ou GIF (max.
  Classe: 'w-96 min-h-48'
---
::

### Icon

Utilisez la prop `icon` pour définir l'icône du fichier FileUpload. Defaults sur `i-lucide-upload`.

::component-code
---
Étiquette: true
Ignorer:
  @@ph038@label
  @@ph039@description
  @@classe 400
Props:
  icon: 'i-lucide-image'
  Étiquette:'Drop your image here'
  Description: 'SVG, PNG, JPG ou GIF (max.
  Classe: 'w-96 min-h-48'
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.upload`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.upload`.
:::
::

### couleur

Utilisez la prop `color` pour changer la couleur du fichier.

::component-code
---
Étiquette: true
ignorer:
  @@ph047@label
  @@ph048@description
  @@ph049@classe
Props:
  Couleur: Neutre
  Highlight: vrai
  Étiquette:'Drop your image here'
  Description: 'SVG, PNG, JPG ou GIF (max.
  Classe: 'w-96 min-h-48'
---
::

::note
Le `highlight` prop est utilisé ici pour afficher l'état de mise au point. Il est utilisé en interne lorsqu 'une erreur de validation se produit.
::

@@501@@Variant

Utilisez la prop `variant` pour modifier la variante du FileUpload.

::component-code
---
Ignorer:
  @@classe 500
Props:
  Variante: Bouton
---
::

@@500@Size

Utilisez la prop `size` pour modifier la taille du fichier.

::component-code
---
Étiquette: true
Ignorer:
  @@ph056@label
  @@ph057@description
  @@ph058@classe
Props:
  Taille: XL
  Variante: région
  Étiquette:'Drop your image here'
  Description: 'SVG, PNG, JPG ou GIF (max.
---
::

@@ph059@@layout

Utilisez la prop `layout` pour modifier l'affichage des fichiers dans le fichier FileUpload. Defaults à `grid`.

::warning
Ce prop ne fonctionne que lorsque `variant` est `area`.
::

::component-code
---
Étiquette: true
ignorer:
  @@ph064@label
  @@ph065@description
  @@ph066@multiple
  @@ph067@classe
  - ui.base
Props:
  layout: liste
  Multiple: Vrai
  Étiquette:'Déposez vos images ici'
  Description: 'SVG, PNG, JPG ou GIF (max.
  Catégorie: W-96
  UI:
    Base: 'min-h-48'
---
::

@@P069@@Positionnement

Utilisez la prop `position` pour changer la position des fichiers dans le fichier FileUpload. Defaults à `outside`.

::warning
Cette prop ne fonctionne que lorsque `variant` est `area` et lorsque `layout` est `list`.
::

::component-code
---
Étiquette: true
ignorer:
  @@ph076@étiquette
  @@ph077@description
  @@78@multiple
  @@ph079@layout
  @@ph080@classe
  - ui.base
Props:
  Position: intérieur
  layout: liste
  Multiple: vrai
  Étiquette:'Déposez vos images ici'
  Description: 'SVG, PNG, JPG ou GIF (max.
  Catégorie: W-96
  UI:
    Base: 'min-h-48'
---
::

@@ph082@Exemples

### Avec validation du formulaire

Vous pouvez utiliser le FileUpload dans un [Form](/docs/components/form) et [FormField](/docs/components/form-field) pour gérer la validation et la gestion des erreurs.

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'file-upload-form-validation-exemple'
---
::

### Avec slot par défaut

Vous pouvez utiliser l'emplacement par défaut pour créer votre propre composant FileUpload.

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'file-upload-default-slot-example'
---
::

### Avec emplacement files-bottom

Vous pouvez utiliser l'emplacement `files-bottom` pour ajouter un bouton [](/docs/components/button) sous la liste des fichiers pour supprimer tous les fichiers par exemple.

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'file-upload-files-bottom-slot-example'
---
::

::note{to="#interactive"}
La prop `interactive` est définie sur `false` dans cet exemple pour empêcher la zone cliquable par défaut.
::

### Avec emplacement files-top

Vous pouvez utiliser l'emplacement `files-top` pour ajouter un bouton [](/docs/components/button) au-dessus de la liste des fichiers pour ajouter de nouveaux fichiers par exemple.

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'file-upload-files-top-slot-example'
---
::

@@ph107@api

@@ph108@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<input>`.
::

@@ph110@@Slots

Composants slots

@111@1111@1111

Composants émetteurs

@@ph112@@exposé

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| @@|@@|
| @@|@@|

@@ph121@thème

Composant-thème

@@changement2@changement2012

Composant-changelog

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

@@ph000@@utilisation

Utilisez la directive `v-model` pour contrôler la valeur de l'entrée.

::component-code
---
ignorer:
  - modèleValeur
Extérieur:
  - modèleValeur
Props:
  Modèle:''
---
::

@@ph004@type

Utilisez la prop `type` pour changer le type d'entrée. Defaults à `text`.

Certains types ont été mis en œuvre dans leurs propres composants tels que [Checkbox](),[Radio](/docs/components/radio-group),[InputNumber](/docs/components/input-number) etc. et d'autres ont été stylisés comme `file` par exemple.

::component-code
---
items:
  Type:
    @@ph020@texte
    @@ph021@numéro
    @@ph022@password
    @@23@recherche
    @@ph024@fichier
Props:
  Type: "fichier"
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types" target="_blank"}
Vous pouvez vérifier tous les types disponibles sur les documents Web MDN.
::

### Placeholder

Utilisez la prop `placeholder` pour définir un texte d'espace réservé.

::component-code
---
Props:
  placeholder: "Recherche..."
---
::

@@27@couleur

Utilisez la prop `color` pour changer la couleur de l'anneau lorsque l'entrée est focalisée.

::component-code
---
Ignorer:
  @@29@réservé
Props:
  Couleur: Neutre
  Highlights: vrai
  placeholder: "Recherche..."
---
::

::note
Le `highlight` prop est utilisé ici pour afficher l'état de mise au point. Il est utilisé en interne lorsqu 'une erreur de validation se produit.
::

### Variant

Utilisez la prop `variant` pour modifier la variante de l'entrée.

::component-code
---
ignorer:
  @@ph033@placeholder
Props:
  Couleur: Neutre
  Variante: subtile
  Étiquette: false
  placeholder: "Recherche..."
---
::

@@ph034@@Size

Utilisez la prop `size` pour modifier la taille de l'entrée.

::component-code
---
Ignorer:
  @@ph036@@placeholder
Props:
  Taille: XL
  placeholder: "Recherche..."
---
::

@@ph037@@Icon

Utilisez le prop `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur de l'entrée.

::component-code
---
Étiquette: true
Ignorer:
  @@ph043@@placeholder
Props:
  icon: 'i-lucide-search'
  Étiquette: MD
  Étiquette: Outline
  placeholder: "Recherche..."
---
::

Utilisez les accessoires `leading` et `trailing` pour définir la position de l'icône ou les accessoires `leading-icon` et `trailing-icon` pour définir une icône différente pour chaque position.

::component-code
---
Étiquette: true
ignorer:
  @@ph048@@placeholder
Props:
  Icône: i-lucide-at-sign
  placeholder: "Entrez votre email"
  Étiquette: MD
---
::

@@ph049@avatar

Utilisez le prop `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur de l'entrée.

::component-code
---
Étiquette: true
ignorer:
  @@ph055@@placeholder
  - avatar.chargement
Props:
  Avatar:
    src: 'https://github.com/nuxt.png'
    Étiquette: Lazy
  Étiquette: MD
  Étiquette: Outline
  placeholder: "Recherche..."
---
::

@@57@chargement

Utilisez la prop `loading` pour afficher une icône de chargement sur l'entrée.

::component-code
---
ignorer:
  @@ph059@réservoir
Props:
  Chargement: vrai
  Traînée: Faux
  placeholder: "Recherche..."
---
::

### Icône de chargement

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut,`i-lucide-loader-circle`.

::component-code
---
Ignorer:
  @@ph063@@placeholder
Props:
  Chargement: vrai
  loadingIcon: 'i-lucide-loader'
  placeholder: "Recherche..."
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

Utilisez la prop `disabled` pour désactiver l'entrée.

::component-code
---
ignorer:
  @@ph070@réservoir
Props:
  handicapés: vrai
  placeholder: "Recherche..."
---
::

@@ph071@@Exemples

### Avec bouton clair

Vous pouvez mettre un [Button](/docs/components/button) à l'intérieur de la fente `#trailing` pour effacer l'entrée.

::component-example
---
nom: 'input-clear-button-example'
---
::

### Avec bouton de copie

Vous pouvez mettre un [Button](/docs/components/button) à l'intérieur de l'emplacement `#trailing` pour copier la valeur dans le presse-papiers.

::component-example
---
nom: 'input-copy-button-exemple'
---
::

### Avec mot de passe toggle

Vous pouvez mettre un [Button](/docs/components/button) à l'intérieur de l'emplacement `#trailing` pour basculer la visibilité du mot de passe.

::component-example
---
nom: 'input-password-toggle-example'
---
::

### Avec indicateur de force de mot de passe

Vous pouvez utiliser le composant [Progress](/docs/components/progress) pour afficher l'indicateur de force du mot de passe.

::component-example
---
Collapse: vrai
name: 'input-password-indicateur-exemple'
---
::

### Avec limite de caractères

Vous pouvez utiliser l'emplacement `#trailing` pour ajouter une limite de caractères à l'entrée.

::component-example
---
nom: 'input-character-limit-exemple'
---
::

### Avec raccourci clavier

Vous pouvez utiliser le composant [Kbd](/docs/components/kbd) à l'intérieur de l'emplacement `#trailing` pour ajouter un raccourci clavier à l'entrée.

::component-example
---
nom: 'input-kbd-exemple'
---
::

::note{to="/docs/composables/define-shortcuts"}
Cet exemple utilise le composable `defineShortcuts` pour focaliser l'entrée lorsque la touche: kbd{value="/"} est appuyée.
::

### Avec masque

Il n'y a pas de prise en charge intégrée des masques, mais vous pouvez utiliser des bibliothèques comme [maska](https://github.com/beholdr/maska) pour masquer l'entrée.

::component-example
---
nom: 'input-mask-exemple'
---
::

### Avec étiquette flottante

Vous pouvez utiliser l'emplacement `#default` pour ajouter une étiquette flottante à l'entrée.

::component-example
---
nom: 'input-floating-label-exemple'
---
::

### Dans un champ de format

Vous pouvez utiliser l'entrée dans un [FormField](/docs/components/form-field) pour afficher une étiquette, un texte d'aide, un indicateur requis, etc.

::component-example
---
nom: 'input-form-field-exemple'
---
::

::tip{to="/docs/components/form"}
Il fournit également la validation et la gestion des erreurs lorsqu 'il est utilisé dans un composant **Form**.
::

### Dans un groupe de terrain

Vous pouvez utiliser l'entrée dans un composant [FieldGroup](/docs/components/field-group) pour regrouper plusieurs éléments.

::component-example
---
nom: 'input-field-group-exemple'
---
::

### En tant que numéro de téléphone entrée

Vous pouvez utiliser l'entrée dans un [FieldGroup](/docs/components/field-group) à côté d'un [SelectMenu](/docs/components/select-menu) pour créer une entrée de numéro de téléphone avec sélection de code de pays.

::component-example
---
Collapse: vrai
nom: 'input-phone-numéro-exemple'
---
::

@@ph133@api

@@ph134@@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<input>`.
::

@@ph136@@réseaux sociaux

Composants slots

@@ph137@@émis

Composants émetteurs

### Exposé

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| @@|@@|

@@ph143@thème

Composant-thème

@@changelog 144

Composant-changelog

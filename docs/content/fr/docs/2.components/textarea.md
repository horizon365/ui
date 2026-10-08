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

@@ph000@utilisation

Utilisez la directive `v-model` pour contrôler la valeur de la Textarea.

::component-code
---
Ignorer:
  - modèleValeur
Extérieure:
  - modèleValeur
Props:
  Modèle:''
---
::

@@ph004@@rencontres

Utilisez la prop `rows` pour définir le nombre de lignes. Defaults sur `3`.

::component-code
---
Props:
  Roues: 12
---
::

### Placeholder

Utilisez la prop `placeholder` pour définir un texte d'espace réservé.

::component-code
---
Props:
  placeholder: 'Type quelque chose...'
---
::

### redimensionnement automatique

Utilisez la prop `autoresize` pour activer le redimensionnement automatique de la hauteur de la Textarea.

::component-code
---
ignorer:
  - modèleValeur
Extérieur:
  - modèleValeur
Props:
  modelValue: 'Ceci est un texte long qui redimensionnera automatiquement la hauteur de la Textarea.'
  Référence: true
---
::

Utilisez la prop `maxrows` pour définir le nombre maximum de lignes lors du redimensionnement automatique. Si elle est définie sur `0`, la zone de texte augmentera indéfiniment.

::component-code
---
Ignorer:
  - modèleValeur
Extérieur:
  - modelValeur
Props:
  modelValue: 'Ceci est un texte long qui redimensionnera automatiquement la hauteur de la Textarea avec un maximum de 4 lignes.'
  Maximes: 4
  Référence: true
---
::

### couleur

Utilisez la prop `color` pour changer la couleur de l'anneau lorsque le Textarea est mis au point.

::component-code
---
Ignorer:
  @@ph019@réservoir
Props:
  Couleur: Neutre
  Highlights: vrai
  placeholder: 'Type quelque chose...'
---
::

::note
Le `highlight` prop est utilisé ici pour afficher l'état de mise au point. Il est utilisé en interne lorsqu 'une erreur de validation se produit.
::

@@21@@Variant

Utilisez la prop `variant` pour changer la variante de la Textarea.

::component-code
---
Ignorer:
  @@ph023@@placeholder
Props:
  Couleur: Neutre
  Variante: subtile
  Étiquette: false
  placeholder: 'Type quelque chose...'
---
::

@@24@@Size

Utilisez la prop `size` pour modifier la taille de la Textarea.

::component-code
---
Ignorer:
  @@ph026@réservoir
Props:
  Taille: XL
  placeholder: 'Type quelque chose...'
---
::

@@27@Icon

Utilisez le prop `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur de la Textarea.

::component-code
---
Étiquette: true
Ignorer:
  @@ph033@placeholder
Props:
  icon: 'i-lucide-search'
  Étiquette: MD
  Étiquette: Outline
  placeholder: "Recherche..."
  Roues: 1
---
::

Utilisez les accessoires `leading` et `trailing` pour définir la position de l'icône ou les accessoires `leading-icon` et `trailing-icon` pour définir une icône différente pour chaque position.

::component-code
---
Étiquette: true
Ignorer:
  @@ph038@@placeholder
Props:
  Icône: i-lucide-at-sign
  placeholder: "Entrez votre email"
  Étiquette: MD
  Roues: 1
---
::

### Avatar

Utilisez la prop `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur de la Textarea.

::component-code
---
Étiquette: true
ignorer:
  @@ph045@@placeholder
  - avatar.chargement
Props:
  Avatar:
    src: 'https://github.com/nuxt.png'
    Étiquette: Lazy
  Étiquette: MD
  Étiquette: Outline
  placeholder: "Recherche..."
  Roues: 1
---
::

@@74@chargement

Utilisez la prop `loading` pour afficher une icône de chargement sur la Textarea.

::component-code
---
Ignorer:
  @@ph049@@placeholder
Props:
  Chargement: vrai
  Traînée: Faux
  placeholder: "Recherche..."
  Roues: 1
---
::

### Icône de chargement

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut,`i-lucide-loader-circle`.

::component-code
---
ignorer:
  @@ph053@@placeholder
Props:
  Chargement: vrai
  loadingIcon: 'i-lucide-loader'
  placeholder: "Recherche..."
  Roues: 1
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

Utilisez la prop `disabled` pour désactiver la Textarea.

::component-code
---
Ignorer:
  @@ph060@réservoir
Props:
  handicapés: vrai
  placeholder: 'Type quelque chose...'
---
::

@@ph061@@api

@@ph062@@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<textarea>`.
::

@@ph064@@réseaux sociaux

Composants slots

### émissions

Composants émetteurs

@@ph066@@exposé

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| @@|@@|
| @@|@@|

@@75@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog

---
description: Un ensemble de panneaux d'onglets qui sont affichés un à la fois.
category: navigation
keywords:
  - tabbed
  - panels
  - sections
links:
  - label: Les tabs
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tabs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tabs.vue
---

@@ph000@@utilisation

Utilisez le composant onglets pour afficher une liste d'éléments dans des onglets.

::component-example
---
Collapse: vrai
Étiquette: true
nom: 'tableau exemple'
Props:
  Catégorie: w-full
---
::

@@ph001@@éléments

Utilisez le prop `items` comme un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@
@@
@@
@@
@@
@@
@@

::component-code
---
ignorer:
  @@ph037@articles
  @@ph038@classe
Extérieure:
  @@ph039@articles
Extérieurs:
  @@P0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  items:
    - label: Compte
      icon: 'i-lucide-user'
      content: "Ceci est le contenu du compte."
    - label: mot de passe
      Icône: i-lucide-lock
      content: 'Ceci est le contenu du mot de passe.'
  Catégorie: w-full
---
::

@@ph043@contenu

Définissez la prop `content` à `false` pour rendre les déclencheurs sans panneaux. Par défaut à `true`.

::component-code
---
Ignorer:
  @@ph047@contenu
  @@ph048@articles
  @@ph049@classe
Extérieure:
  @@ph050@articles
Extérieurs:
  @@501@Téléchargement []
Props:
  Contenu: faux
  items:
    - label: Compte
      icon: 'i-lucide-user'
      content: "Ceci est le contenu du compte."
    - label: mot de passe
      Icône: i-lucide-lock
      content: 'Ceci est le contenu du mot de passe.'
  Catégorie: w-full
---
::

@@500@@unmount

Utilisez la prop `unmount-on-hide` pour empêcher le contenu d'être démonté lorsque les onglets sont réduits. Par défaut à `true`.

::component-code
---
ignorer:
  @@57@contenu
  @@508@articles
  @@ph059@classe
Extérieure:
  @@ph060@articles
Extérieurs:
  - Télécharger []
Props:
  Défaut: False
  items:
    - label: Compte
      icon: 'i-lucide-user'
      content: "Ceci est le contenu du compte."
    - label: mot de passe
      Icône: i-lucide-lock
      content: 'Ceci est le contenu du mot de passe.'
  Catégorie: w-full
---
::

::note
Vous pouvez inspecter le DOM pour voir le contenu de chaque élément rendu.
::

@@pH064@couleur

Utilisez la prop `color` pour changer la couleur des onglets.

::component-code
---
Ignorer:
  @@ph066@contenu
  @@ph067@articles
  @@ph068@classe
Extérieure:
  @@ph069@articles
Extérieurs:
  @@70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Couleur: Neutre
  Contenu: faux
  items:
    - label: Compte
    - label: mot de passe
  Catégorie: w-full
---
::

@@73@@Variant

Utilisez la prop `variant` pour changer la variante des onglets.

::component-code
---
ignorer:
  @@75@contenu
  @@ph076@articles
  @@ph077@classe
Extérieure:
  @@ph078@articles
Extérieurs:
  @@779@téléchargement []
Props:
  Couleur: Neutre
  Variante: lien
  Contenu: faux
  items:
    - label: Compte
    - label: mot de passe
  Catégorie: w-full
---
::

@@ph082@série

Utilisez la prop `size` pour modifier la taille des onglets.

::component-code
---
ignorer:
  @@ph084@contenu
  @@ph085@articles
  @@ph086@classe
Extérieur:
  @@ph087@articles
Extérieurs:
  @@888@888@888 [réf. nécessaire]
Props:
  Étiquette: MD
  Variante: pilule
  Contenu: faux
  items:
    - label: Compte
    - label: mot de passe
  Catégorie: w-full
---
::

### Référencement

Utilisez la prop `orientation` pour modifier l'orientation des onglets. Defaults à `horizontal`.

::component-code
---
Ignorer:
  @@ph094@contenu
  @@@ph095@articles
  @@ph096@classe
Extérieur:
  @@ph097@articles
Extérieurs:
  @@P098@@Télécharger []
Props:
  Orientation: verticale
  Variante: pilule
  Contenu: faux
  items:
    - label: Compte
    - label: mot de passe
  Catégorie: w-full
---
::

@@ph101@exemples

### Contrôle élément actif

Vous pouvez contrôler l'élément actif en utilisant la prop `default-value` ou la directive `v-model` avec le `value` de l'élément. Si aucun `value` n'est fourni, l'index par défaut est **en tant que chaîne **.

: composant {name="tabs-model-value-example"}

::tip
Utilisez la prop `value-key` pour modifier la clé utilisée pour faire correspondre les éléments lorsqu 'un `v-model` ou `default-value` est fourni.
::

### Avec la requête de route

Vous pouvez contrôler l'élément actif par un paramètre de requête URL, en utilisant `route.query.tab` comme `value` de l'élément.

: composant {name="tabs-route-query-example"}

### Avec emplacement de contenu

Utilisez l'emplacement `#content` pour personnaliser le contenu de chaque élément.

: composant {name="tabs-content-slot-example"}

### Avec tabulation inférieure

Utilisez le prop `ui` pour transformer les onglets en une barre d'onglets inférieure de style mobile avec des icônes et de petites étiquettes, similaire à YouTube ou Instagram.

::component-example
---
Collapse: vrai
nom: 'tabs-bottom-tab-bar-exemple'
---
::

### Avec slot custom

Utilisez la propriété `slot` pour personnaliser un élément spécifique.

Vous aurez accès aux slots suivants:

@@

::component-example
---
Collapse: vrai
nom: 'tabs-custom-slot-example'
---
::

by ## API

### Props

Composants-props

@@ph129@@réseaux sociaux

Composants slots

### Emits

Composants émetteurs

@@ph131@@exposé

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| @@|@@|

@@ph136@thème

Composant-thème

@changement@changement137

Composant-changelog

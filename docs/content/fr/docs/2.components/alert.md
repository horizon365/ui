---
description: Un appel pour attirer l'attention de l'utilisateur.
category: element
keywords:
  - notice
  - inline notification
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Alert.vue
---

@@ph000@utilisation

@@ph001@titre

Utilisez la prop `title` pour définir le titre de l'alerte.

::component-code
---
Props:
  Titre: "Heads Up!"
---
::

@@ph003@Description

Utilisez la prop `description` pour définir la description de l'alerte.

::component-code
---
Étiquette: true
Props:
  Titre: "Heads Up!"
  Description: "Vous pouvez modifier la couleur principale dans la configuration de votre application."
---
::

@@ph005@icône

Utilisez la prop `icon` pour afficher une [Icon](/docs/components/icon).

::component-code
---
Étiquette: true
ignorer:
  @@11@titre
  @@ph012@description
Props:
  Titre: "Heads Up!"
  Description: "Vous pouvez modifier la couleur principale dans la configuration de votre application."
  Icône: i-lucide-terminal
---
::

@@13@avatar

Utilisez le prop `avatar` pour afficher un [Avatar](/docs/components/avatar).

::component-code
---
Étiquette: true
Ignorer:
  @@ph019@titre
  @@ph020@description
Props:
  Titre: "Heads Up!"
  Description: "Vous pouvez modifier la couleur principale dans la configuration de votre application."
  avatar. src: 'https://github.com/nuxt.png'
---
::

@@21@couleur

Utilisez la prop `color` pour changer la couleur de l'alerte.

::component-code
---
Étiquette: true
Ignorer:
  @@ph023@titre
  @@ph024@description
  @@25@icon
Props:
  Couleur: Neutre
  Titre: "Heads Up!"
  Description: "Vous pouvez modifier la couleur principale dans la configuration de votre application."
  icon: i-lucide-terminal
---
::

@@26@Variant

Utilisez la prop `variant` pour modifier la variante de l'alerte.

::component-code
---
Étiquette: true
Ignorer:
  @@28@titre
  @@ph029@description
  @@ph030@icon
Props:
  Couleur: Neutre
  Variante: subtile
  Titre: "Heads Up!"
  Description: "Vous pouvez modifier la couleur principale dans la configuration de votre application."
  icon: i-lucide-terminal
---
::

@@ph031@@Fermer

Utilisez le prop `close` pour afficher un bouton [](/docs/components/button) pour rejeter l'alerte.

::tip
Un événement `update:open` sera émis lorsque le bouton de fermeture est cliqué.
::

::component-code
---
Étiquette: true
ignorer:
  @@ph038@titre
  @@ph039@description
  @@F040@fermer
  @@pH041@@couleur
  - variant
Props:
  Titre: "Heads Up!"
  Description: "Vous pouvez modifier la couleur principale dans la configuration de votre application."
  Couleur: Neutre
  Étiquette: Outline
  Clôture: vrai
---
::

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

::component-code
---
Étiquette: true
Ignorer:
  @@ph047@titre
  @@ph048@description
  - close.color
  - close.variant
  @@pH051@@couleur
  - variant
Props:
  Titre: "Heads Up!"
  Description: "Vous pouvez modifier la couleur principale dans la configuration de votre application."
  Couleur: Neutre
  Étiquette: Outline
  proche:
    Couleur: primaire
    Étiquette: Outline
    Catégorie:"round-full"
---
::

### Fermer l'icône

Utilisez le prop `close-icon` pour personnaliser le bouton de fermeture [Icon](/docs/components/icon).

::component-code
---
Étiquette: true
ignorer:
  @@ph060@titre
  @@ph061@description
  @@ph062@fermer
  @@pH063@couleur
  - variant
Props:
  Titre: "Heads Up!"
  Description: "Vous pouvez modifier la couleur principale dans la configuration de votre application."
  Couleur: Neutre
  Étiquette: Outline
  Clôture: vrai
  closeIcône:'i-lucide-arrow-right'
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

### Actions

Utilisez le prop `actions` pour ajouter des actions [Button](/docs/components/button) à l'alerte.

::component-code
---
Étiquette: true
Ignorer:
  @@75@titre
  @@76@actions
  @777@couleur
  - variant
Props:
  Titre: "Heads Up!"
  Description: "Vous pouvez modifier la couleur principale dans la configuration de votre application."
  Couleur: Neutre
  Étiquette: Outline
  actions:
    - label: Action 1
    - label: action 2
      Couleur: Neutre
      Variante: subtile
---
::

### Référencement

Utilisez la prop `orientation` pour modifier l'orientation de l'alerte.

::component-code
---
Étiquette: true
ignorer:
  @@ph083@titre
  @@84@actions
  @@pH085@couleur
  - variant
Props:
  Titre: "Heads Up!"
  Description: "Vous pouvez modifier la couleur principale dans la configuration de votre application."
  Couleur: Neutre
  Étiquette: Outline
  Orientation: horizontale
  actions:
    - label: Action 1
    - label: action 2
      Couleur: Neutre
      Variante: subtile
---
::

@@ph089@exemple

@@

Utilisez la prop `class` pour remplacer les styles de base de l'alerte.

::component-code
---
Étiquette: true
ignorer:
  @@ph093@titre
  @@ph094@description
Props:
  Titre: "Heads Up!"
  Description: "Vous pouvez modifier la couleur principale dans la configuration de votre application."
  Catégorie:'rounded-none'
---
::

@@

Utilisez la prop `ui` pour remplacer les styles de slots de l'alerte.

::component-code
---
Étiquette: true
Ignorer:
  @@ph098@@ui
  @@ph099@titre
  @@ph100@description
  @@ph101@icon
Props:
  Titre: "Heads Up!"
  Description: "Vous pouvez modifier la couleur principale dans la configuration de votre application."
  Étiquette: i-lucide-rocket
  Ui:
    Icône:'taille-11'
---
::

@@ph102@api

@@ph103@@props

Composants-props

@@ph104@@Slots

Composants slots

@@P105@@émissions

Composants émetteurs

@@ph106@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog

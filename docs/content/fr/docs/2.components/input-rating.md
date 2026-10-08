---
title: Inputées
description: Un composant pour afficher et collecter les évaluations des utilisateurs.
category: form
keywords:
  - star rating
  - stars
links:
  - label: Rating
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/rating
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputRating.vue
---

@@ph000@utilisation

Utilisez la directive `v-model` pour contrôler la valeur de classement du composant InputRating.

::component-code
---
Extérieure:
  - modèleValeur
Props:
  Modèle: 3
---
::

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
ignorer:
  @@ph004@@valeur défaillante
Props:
  Défaut: 3
---
::

@@P005@étape

Utilisez la prop `step` pour contrôler la granularité de chaque étoile. Réglez-la sur `0.5` pour permettre des cotes d'une demi-étoile.

::component-code
---
ignorer:
  @@ph008@@defaultValue
Props:
  Étape: 0,5
  Défaut: 3.5
---
::

@@pH009@@longueur

Utilisez la prop `length` pour définir le nombre d'étoiles. Par défaut, la valeur est `5`.

::component-code
---
ignorer:
  - defaultValue
Props:
  Longueur: 10
  Étape: 0,5
  Défaut: 7.5
---
::

@@ph013@clearable

Utilisez la prop `clearable` pour permettre aux utilisateurs d'effacer la cote en cliquant sur la valeur actuellement sélectionnée.

::component-code
---
Ignorer:
  - defaultValue
Props:
  Étiquette: true
  Défaut: 3
---
::

### Hoverable

Utilisez la prop `hoverable` pour contrôler si l'évaluation prévisualise la valeur lorsque vous survolez les étoiles. Par défaut à `false`.

::component-code
---
Ignorer:
  @@ph020@@valeur défaillante
Props:
  Hovable: vrai
  Défaut: 3
---
::

@@21@Icon

Utilisez la prop `icon` pour personnaliser l'icône utilisée pour les étoiles. Par défaut,`i-lucide-star`.

::component-code
---
Ignorer:
  - valeur défaillante
Props:
  Icône: i-lucide-heart
  Défaut: 4
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser globalement l'icône étoile par défaut dans votre `app.config.ts` sous la touche `ui.icons.star`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser l'icône étoile par défaut globalement dans votre `vite.config.ts` sous la touche `ui.icons.star`.
:::
::

### Empty Icône

Utilisez la prop `empty-icon` pour personnaliser l'icône utilisée pour les étoiles vides. Si elle n'est pas fournie, utilisez la même icône que `icon`.

::component-code
---
ignorer:
  - defaultValue
Props:
  emptyIcon: 'i-lucide-cercle'
  Icône: i-lucide-circle-check
  Défaut: 3
---
::

@@pH033@couleur

Utilisez la prop `color` pour changer la couleur des étoiles remplies.

::component-code
---
ignorer:
  - valeur défaillante
Props:
  Couleur: Neutre
  Défaut: 4
---
::

@@pH036@@Size

Utilisez le prop `size` pour modifier la taille des étoiles.

::component-code
---
Ignorer:
  - defaultValue
items:
  Size:
    @@pH039@@x
    @@ph040
    @@ph041@md
    @@ph042@lg
    @@ph043@xl
Props:
  Taille: XL
  Défaut: 4
---
::

### Référencement

Utilisez la prop `orientation` pour changer l'orientation de la cote. Par défaut à `horizontal`.

::component-code
---
Ignorer:
  - defaultValue
Props:
  Orientation: verticale
  Défaut: 4
---
::

### désactivé

Utilisez la prop `disabled` pour désactiver le composant InputRating. Lorsqu 'il est désactivé, l'opacité du composant est réduite (75%) et affiche un curseur `not-allowed` pour indiquer qu' il n'est pas interactif.

::component-code
---
Ignorer:
  - defaultValue
Props:
  handicapés: vrai
  Défaut: 3
---
::

### Readonly

Utilisez la prop `readonly` pour afficher une note sans permettre l'interaction de l'utilisateur. Contrairement à `disabled`, elle conserve une apparence normale (opacité totale, curseur par défaut). Utilisez lorsque vous souhaitez afficher une note qui ne peut pas être modifiée mais qui doit avoir un aspect normal.

::component-code
---
ignorer:
  - valeur défaillante
Props:
  Étiquette: true
  Défaut: 4.5
---
::

@@ph056@@api

@@507@propriétaires

Composants-props

@@508@@série

Composants slots

@@59@@émissaire

Composants émetteurs

@@ph060@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog

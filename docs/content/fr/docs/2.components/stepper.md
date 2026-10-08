---
description: Un ensemble d'étapes qui sont utilisées pour indiquer les progrès à travers un processus en plusieurs étapes.
category: navigation
keywords:
  - wizard
links:
  - label: étape
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/stepper
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Stepper.vue
---

@@ph000@utilisation

Utilisez le composant Stepper pour afficher une liste d'éléments dans un stepper.

::component-code
---
Collapse: vrai
Caché:
  @@ph001@classe
Ignorer:
  @@ph002@articles
  @@ph003@classe
Extérieure:
  @@ph004@articles
Extérieurs:
  @@@@@@@@@@@@@@@@@@@@@@@@
Props:
  items:
    - title:« Adresse »
      Description: "Ajoutez votre adresse ici"
      Icône:'i-lucide-house'
    - title:"Découverte"
      Description: 'Définissez votre méthode d'expédition préférée'
      Icône: i-lucide-truck
    - title:"Dépannage"
      Description: "Confirmer votre commande"
  Catégorie: w-full
---
::

@0009@@écrivains

Utilisez le `items` prop comme un tableau d'objets avec les propriétés suivantes:

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
Ignorer:
  @@ph042@articles
  @@classe 43
Extérieur:
  @@ph044@articles
Extérieurs:
  @@@P045@@Papier [résolu]
Props:
  items:
    - title:"Référence"
      Description: "Ajoutez votre adresse ici"
      Icône:'i-lucide-house'
    - title:"Déménagement"
      Description: 'Définissez votre méthode d'expédition préférée'
      Icône: i-lucide-truck
    - title:"Dépannage"
      Description: "Confirmer votre commande"
  Catégorie: w-full
---
::

::note
Cliquez sur les éléments pour naviguer à travers les étapes.
::

@@pH049@couleur

Utilisez le prop `color` pour changer la couleur du Stepper.

::component-code
---
Ignorer:
  @@ph051@contenu
  @@502@articles
  @@classe 500
Extérieure:
  @@500@articles
Extérieurs:
  @@555@555@555 [réf. nécessaire]
Props:
  Couleur: Neutre
  items:
    - title:"Référence"
      Description: "Ajoutez votre adresse ici"
      Icône:'i-lucide-house'
    - title:"Découverte"
      Description: 'Définissez votre méthode d'expédition préférée'
      Icône: i-lucide-truck
    - title:"Dépannage"
      Description: "Confirmer votre commande"
  Catégorie: w-full
---
::

@@pH059@@Size

Utilice el prop `size` para cambiar el tamaño del Stepper.

::component-code
---
Ignorer:
  @@pH061@contenido
  @@ph062@articles
  @@ph063@classe
Extérieure:
  @@ph064@articles
Extérieurs:
  @@@P065@@Papier [résolu]
Props:
  Taille: XL
  items:
    - title:"Référence"
      Description: "Ajoutez votre adresse ici"
      Icône:'i-lucide-house'
    - title:"Déménagement"
      Description: 'Définissez votre méthode d'expédition préférée'
      Icône: i-lucide-truck
    - title:"Dépannage"
      Description: "Confirmer votre commande"
  Catégorie: w-full
---
::

### Référencement

Utilisez la prop `orientation` pour modifier l'orientation du Stepper. Defaults à `horizontal`.

::component-code
---
ignorer:
  @@ph072@contenu
  @@ph073@articles
  @@ph074@classe
Extérieur:
  @@75@éléments
Extérieurs:
  @@776@@étape []
Props:
  Orientation: verticale
  items:
    - title:"Référence"
      Description: "Ajoutez votre adresse ici"
      Icône:'i-lucide-house'
    - title:"Déménagement"
      Description: 'Définissez votre méthode d'expédition préférée'
      Icône: i-lucide-truck
    - title:"Dépannage"
      Description: "Confirmer votre commande"
  Catégorie: w-full
---
::

### désactivé

Utilisez la prop `disabled` pour désactiver la navigation à travers les étapes.

::component-code
---
Ignorer:
  @@ph082@contenu
  @@ph083@articles
  @@ph084@classe
Extérieur:
  @@ph085@articles
Extérieurs:
  @@886@@étape []
Props:
  handicapés: vrai
  items:
    - title:"Référence"
      Description: "Ajoutez votre adresse ici"
      Icône:'i-lucide-house'
    - title:"Déménagement"
      Description: 'Définissez votre méthode d'expédition préférée'
      Icône: i-lucide-truck
    - title:"Dépannage"
      Description: "Confirmer votre commande"
---
::

::note{to="#with-controls"}
Cela peut être utile lorsque vous souhaitez forcer la navigation avec des contrôles.
::

@@ph090@exemples

### Avec contrôles

Vous pouvez ajouter des contrôles supplémentaires pour le stepper à l'aide de boutons.

: exemple de composant {name="stepper-with-controls-example"}

### Contrôle élément actif

Vous pouvez contrôler l'élément actif à l'aide de la prop `default-value` ou de la directive `v-model` avec le `value` de l'élément.

: exemple de composant {name="stepper-model-value-example"}

::tip
Utilisez la prop `value-key` pour modifier la clé utilisée pour faire correspondre les éléments lorsqu 'un `v-model` ou `default-value` est fourni.
::

### Avec emplacement de contenu

Utilisez l'emplacement `#content` pour personnaliser le contenu de chaque élément.

: composant-exemple {name="stepper-content-slot-example"}

### Avec slot custom

Utilisez la propriété `slot` pour personnaliser un élément spécifique.

Vous aurez accès aux slots suivants:

@@

: composant-exemple {name="stepper-custom-slot-example"}

@@ph111@api

@112@propriétés

Composants-props

@@ph113@@Slots

Composants slots

@114@114@114

Composants émetteurs

@@ph115@@exposé

Vous pouvez accéder à l'instance du composant typé en utilisant [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const stepper = useTemplateRef('stepper')
</script>

<template>
  <UStepper ref="stepper" />
</template>
```

Cela vous donnera accès à ce qui suit:

| nom| type|
| ---- | ---- |
| @@|@@|
| @@|@@|
| @@|@@|
| @@|@@|

@@ph146@thème

Composant-thème

@changement@changement147

Composant-changelog

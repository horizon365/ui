---
title: ContentNavigation
description: 'Un composant de navigation de style accordéon pour organiser les liens de pages.'
category: content
framework: nuxt
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentNavigation.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Ce composant est uniquement disponible lorsque le module `@nuxt/content` est installé.
::

@@ph001@utilisation

Utilisez la prop `navigation` avec la valeur `navigation`{lang="ts-type"} que vous obtenez lors de la récupération de la navigation de votre application.

::component-example
---
nom: 'content-navigation-exemple'
Classe: h-96 overflow-y-auto
dépassement: true
Props:
  Catégorie: w-full
---
::

### Télécharger

Définissez le `type` prop à `single` pour permettre qu 'un seul élément soit ouvert à la fois.

::component-code{prefix="content"}
---
Étiquette: true
Collapse: vrai
Extérieure:
  - navigation
Extérieurs:
  - ContentNavigationLink []
items:
  Type:
  @@ph011 @@'unique '
  - 'multiple '
Caché:
  @@classe
  - navigation
Props:
  Catégorie: w-full
  Catégorie:"Single"
  Navigation:
    - title:« Guide »
      icon: 'i-lucide-book-open'
      chemin: '#démarrage'
      Enfants:
        - title:'Introduction'
          chemin: '#Introduction'
          Actif: vrai
        - title:"Réalisation"
          chemin: #installation
    - title:« Composables »
      icon: 'i-lucide-base de données'
      chemin: '#composables'
      Enfants:
        - title:'Définition des raccourcis'
          Voir aussi: #defineshortcuts
        - title:'utilisation de l'appareil'
          Voir aussi: #usemodal
---
::

@@21@couleur

Utilisez la prop `color` pour changer la couleur des liens de navigation.

::component-code{prefix="content"}
---
Étiquette: true
Collapse: vrai
Extérieure:
  - navigation
Extérieurs:
  - ContentNavigationLink []
Caché:
  @@classe 25
  - navigation
Props:
  Catégorie: w-full
  Couleur: "Neutre"
  Navigation:
    - title:"Référence"
      icon: 'i-lucide-book-open'
      chemin: '#démarrage'
      Enfants:
      - title:'Introduction'
        chemin: '#Introduction'
        Actif: vrai
      - title:"Réalisation"
        chemin: #installation
    - title:« Composables »
      icon: 'i-lucide-base de données'
      chemin: '#composables'
      Enfants:
      - title:'Définition des raccourcis'
        Voir aussi: #defineshortcuts
      - title:'utilisation de l'appareil'
        Voir aussi: #usemodal
---
::

### Variant

Utilisez la prop `variant` pour modifier la variante des liens de navigation.

::component-code{prefix="content"}
---
Étiquette: true
Collapse: vrai
Extérieur:
  - navigation
Extérieurs:
  - ContentNavigationLink []
Caché:
  @@ph037@classe
  - navigation
items:
  Variante:
  @@ph039 @@'lien '
  @@pH040 @@'pilule '
Props:
  Catégorie: w-full
  Variante: « lien »
  Navigation:
    - title:"Référence"
      icon: 'i-lucide-book-open'
      chemin: '#démarrage'
      Enfants:
      - title:'Présentation'
        chemin: '#Introduction'
        Actif: vrai
      - title:"Réalisation"
        chemin: #installation
    - title:"Composables"
      icon: 'i-lucide-base de données'
      chemin: '#composables'
      Enfants:
      - title:'Définition des raccourcis'
        Voir aussi: #defineshortcuts
      - title:'utilisation de l'appareil'
        Référence:#usemodal
---
::

@@ph047@highlight

Utilisez la prop `highlight` pour afficher une bordure surlignée pour le lien actif.

Utilisez la prop `highlight-color` pour changer la couleur de la bordure. Elle est par défaut la prop `color`.

::component-code{prefix="content"}
---
Étiquette: true
Collapse: vrai
Extérieur:
  - navigation
Extérieurs:
  - ContentNavigationLink []
Caché:
  @@classe 500
  - navigation
Props:
  Catégorie: w-full
  Highlights: vrai
  highlightColor: 'primaire'
  Couleur: Primaire
  Étiquette: pilule
  Navigation:
    - title:"Référence"
      icon: 'i-lucide-book-open'
      chemin: '#démarrage'
      Enfants:
      - title:'Présentation'
        chemin: '#Introduction'
        Actif: vrai
      - title:"Réalisation"
        chemin: #installation
    - title:"Composables"
      icon: 'i-lucide-base de données'
      chemin: '#composables'
      Enfants:
      - title:'Définition des raccourcis'
        Voir aussi: #defineshortcuts
      - title:'utilisation du système'
        Voir aussi: #usemodal
---
::

### Trailing Icône

Utilisez le prop `trailing-icon` pour personnaliser le [Icon](/docs/components/icon) des éléments qui ont des enfants.

::component-code{prefix="content"}
---
Étiquette: true
Collapse: vrai
Extérieur:
  - navigation
Extérieurs:
  - ContentNavigationLink []
Caché:
  @@ph070@classe
  - navigation
Props:
  Catégorie: w-full
  trailingIcône:'i-lucide-arrow-up'
  Navigation:
    - title:"Référence"
      icon: 'i-lucide-book-open'
      chemin: '#démarrage'
      Enfants:
      - title:'Présentation'
        chemin: '#Introduction'
        Actif: vrai
      - title:"Réalisation"
        chemin: #installation
    - title:"Composables"
      icon: 'i-lucide-base de données'
      chemin: '#composables'
      Enfants:
      - title:'Définition des raccourcis'
        Voir aussi: #defineshortcuts
      - title:'utilisation de l'appareil'
        Voir aussi: #usemodal
---
::

::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.chevronDown`.
::

@@ph080@exemples

### Dans une mise en page

Utilisez le composant ContentNavigation à l'intérieur d'un composant [PageAside](/docs/components/page-aside) dans une mise en page pour afficher la navigation de la page:

```vue [layouts/docs.vue]{11}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" highlight />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

### Dans un header.

Utilisez le composant ContentNavigation à l'intérieur de l'emplacement `content` d'un composant [Header](/docs/components/header) pour afficher la navigation de la page sur mobile:

```vue [components/Header.vue]{9-11}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UHeader>
    <template #body>
      <UContentNavigation :navigation="navigation" highlight />
    </template>
  </UHeader>
</template>
```

@@ph126@api

@@ph127@@props

Composants-props

@@ph128@@réseaux sociaux

Composants slots

@@ph129@@émissions

Composants émetteurs

@@ph130@thème

Composant-thème

@change131 @ changement

: composant-changelog {prefix="content"}

---
title: Pagesection
description: 'Une section responsive pour vos pages.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageSection.vue
---

@@ph000@utilisation

Le composant PageSection enveloppe votre contenu dans un [Container](/docs/components/container) tout en conservant une flexibilité sur toute la largeur, ce qui facilite l'ajout de couleurs d'arrière-plan, d'images ou de motifs. Il offre un moyen flexible d'afficher du contenu avec une illustration dans l'emplacement par défaut.

::code-preview

::u-page-section
---
Titre: Beautiful Vue UI components
Description: Nuxt UI fournit une suite complète de composants et d'utilitaires pour vous aider à créer des applications Web belles et accessibles avec Vue et Nuxt.
Titre: "Caractéristiques"
Caractéristiques:
  - title: Icônes
    Nuxt UI s'intègre à Nuxt Icon pour accéder à plus de 200 000 icônes d'Iconify.
    Icône: i-lucide-smile
    a: '/docs/getting-started/integrations/icons'
  - title:« Fonts »
    Nuxt UI s'intègre à Nuxt Fonts pour fournir une optimisation de police plug-and-play.
    icon: 'i-lucide-a-large-petit'
    à:/docs/getting-started/integrations/fonts
  - title:'Mode couleur'
    Nuxt UI s'intègre au mode couleur Nuxt pour basculer entre clair et sombre.
    Icône: i-lucide-sun-moon
    dans/docs/getting-started/integrations/color-mode
---
::

::

Utilisez-le après un composant [PageHero](/docs/components/page-hero):

```vue {4}
<template>
  <UPageHero />

  <UPageSection />
</template>
```

@@ph019@titre

Utilisez la prop `title` pour définir le titre de la section.

::component-code
---
Props:
  Titre: Beautiful Vue UI components
---
::

@@ph021@description

Utilisez la prop `description` pour définir la description de la section.

::component-code
---
Étiquette: true
ignorer:
  @@ph023@titre
Props:
  Titre: Beautiful Vue UI components
  Description: Nuxt UI fournit une suite complète de composants et d'utilitaires pour vous aider à créer des applications Web belles et accessibles avec Vue et Nuxt.
---
::

@@224@@titre

Utilisez la prop `headline` pour définir le titre de la section.

::component-code
---
Étiquette: true
Ignorer:
  @@26@titre
  @@ph027@description
Props:
  Titre: Beautiful Vue UI components
  Description: Nuxt UI fournit une suite complète de composants et d'utilitaires pour vous aider à créer des applications Web belles et accessibles avec Vue et Nuxt.
  Catégorie:"Features"
---
::

@@28@Icon

Utilisez la prop `icon` pour définir l'icône de la section.

::component-code
---
Étiquette: true
ignorer:
  @@ph030@titre
  @@ph031@description
Props:
  Titre: Beautiful Vue UI components
  Description: Nuxt UI fournit une suite complète de composants et d'utilitaires pour vous aider à créer des applications Web belles et accessibles avec Vue et Nuxt.
  Étiquette: i-lucide-rocket
---
::

### Caractéristiques de

Utilisez la prop `features` pour afficher une liste de [PageFeature](/docs/components/page-feature) sous la description sous la forme d'un tableau d'objets ayant les propriétés suivantes:

@@
@@
@@
@@

Vous pouvez passer n'importe quelle propriété du composant [Link](/docs/components/link#props) comme `to`,`target`, etc.

::component-code
---
Étiquette: true
Extérieur:
  - caractéristiques
Extérieurs:
  - PageFeatureProps [réf. nécessaire]
Ignorer:
  @@ph058@titre
  @@ph059@description
  - caractéristiques
Props:
  Titre: Beautiful Vue UI components
  Description: Nuxt UI fournit une suite complète de composants et d'utilitaires pour vous aider à créer des applications Web belles et accessibles avec Vue et Nuxt.
  Caractéristiques:
    - title:"Icônes"
      Nuxt UI s'intègre à Nuxt Icon pour accéder à plus de 200 000 icônes d'Iconify.
      Icône: i-lucide-smile
      dans/docs/getting-started/integrations/icons
    - title:« Fonts »
      Nuxt UI s'intègre à Nuxt Fonts pour fournir une optimisation de police plug-and-play.
      icon: 'i-lucide-a-large-petit'
      à:/docs/getting-started/integrations/fonts
    - title:"Mode couleur"
      Nuxt UI s'intègre au mode couleur Nuxt pour basculer entre clair et sombre.
      Icône: i-lucide-sun-moon
      dans/docs/getting-started/integrations/color-mode
---
::

@@ph064@lien

Utilisez la prop `links` pour afficher une liste de [Button](/docs/components/button) sous la description.

::component-code
---
Étiquette: true
Extérieur:
  @@ph070@liens
Extérieurs:
  - ButtonProps []
Ignorer:
  @@ph072@titre
  @@ph073@description
  @@ph074@liens
Props:
  Titre: Beautiful Vue UI components
  Description: Nuxt UI fournit une suite complète de composants et d'utilitaires pour vous aider à créer des applications Web belles et accessibles avec Vue et Nuxt.
  à gauche:
    - label:« Démarrer »
      à:'/docs/getting-started'
      Icône: i-lucide-square-play
      Couleur: "Neutre"
    - label:'Explorer les composants'
      à:'/docs/components/app'
      Couleur: "Neutre"
      Étiquette:"subtil"
      trailingIcône:'i-lucide-arrow-right'
---
::

@@777@Référencement

Utilisez la prop `orientation` pour changer l'orientation avec l'emplacement par défaut.

::component-code
---
Étiquette: true
Extérieure:
  - caractéristiques
  @@ph081@liens
Extérieurs:
  - PageFeatureProps [réf. nécessaire]
  - ButtonProps [réf. nécessaire]
ignorer:
  @@ph084@titre
  @@ph085@description
  @@pH086@icon
  - caractéristiques
  @@888@liens
Props:
  Titre: Beautiful Vue UI components
  Description: Nuxt UI fournit une suite complète de composants et d'utilitaires pour vous aider à créer des applications Web belles et accessibles avec Vue et Nuxt.
  Étiquette: i-lucide-rocket
  Orientation: horizontale
  Caractéristiques:
    - title:'Icônes'
      Nuxt UI s'intègre à Nuxt Icon pour accéder à plus de 200 000 icônes d'Iconify.
      Icône: i-lucide-smile
      dans/docs/getting-started/integrations/icons
    - title:« Fonts »
      Nuxt UI s'intègre à Nuxt Fonts pour fournir une optimisation de police plug-and-play.
      icon: 'i-lucide-a-large-petit'
      à:/docs/getting-started/integrations/fonts
    - title:'Mode couleur'
      Nuxt UI s'intègre au mode couleur Nuxt pour basculer entre clair et sombre.
      Icône: i-lucide-sun-moon
      dans/docs/getting-started/integrations/color-mode
  à gauche:
    - label:'Explorer les composants'
      à:'/docs/components/app'
      Couleur: "Neutre"
      Étiquette:"subtil"
      trailingIcône:'i-lucide-arrow-right'
Slots:
  Défaut:|

    @@@ 093 @
---

par: img{src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

### Reverse

Utilisez la prop `reverse` pour inverser l'orientation de l'emplacement par défaut.

::component-code
---
Étiquette: true
Extérieur:
  - caractéristiques
  @@ph098@liens
Extérieurs:
  @@@P099@@P099@@P0999@@P0999@P0999@P0999)
  @@ph100@@buttonprops [réf. nécessaire]
Ignorer:
  @@ph101@titre
  @@ph102@description
  @@pha103 @@ icon
  - caractéristiques
  @@505@links
Props:
  Titre: Beautiful Vue UI components
  Description: Nuxt UI fournit une suite complète de composants et d'utilitaires pour vous aider à créer des applications Web belles et accessibles avec Vue et Nuxt.
  Étiquette: i-lucide-rocket
  Orientation: horizontale
  Revers: vrai
  caractéristiques:
    - title:'Icônes'
      Nuxt UI s'intègre à Nuxt Icon pour accéder à plus de 200 000 icônes d'Iconify.
      Icône: i-lucide-smile
      dans/docs/getting-started/integrations/icons
    - title:« Fonts »
      Nuxt UI s'intègre à Nuxt Fonts pour fournir une optimisation de police plug-and-play.
      icon: 'i-lucide-a-large-petit'
      à:/docs/getting-started/integrations/fonts
    - title:'Mode couleur'
      Nuxt UI s'intègre au mode couleur Nuxt pour basculer entre clair et sombre.
      Icône: i-lucide-sun-moon
      dans/docs/getting-started/integrations/color-mode
  à gauche:
    - label:'Explorez les composants'
      à:'/docs/components/app'
      Couleur: "Neutre"
      Étiquette:"subtil"
      trailingIcône:'i-lucide-arrow-right'
Slots:
  Défaut:|

    @@@ 110 @
---

par: img{src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

@@ph112@api

@113@113@113

Composants-props

@@ph114@@Slots

Composants slots

@@ph115@thème

Composant-thème

@116@changements

Composant-changelog

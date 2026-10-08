---
title: Pagefeature
description: 'Un composant pour présenter les caractéristiques clés de votre application.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageFeature.vue
---

@@ph000@@utilisation

Le composant PageFeature est utilisé par le composant [PageSection](/docs/components/page-section) pour afficher [](/docs/components/page-section#features).

@@ph009@titre

Utilisez la prop `title` pour définir le titre de la fonctionnalité.

::component-code
---
Caché:
  @@classe 11
Props:
  Titre: "Thème"
  Catégorie: W-96
---
::

@@ph012@Description

Utilisez la prop `description` pour définir la description de la fonctionnalité.

::component-code
---
Étiquette: true
Caché:
  @@classe
Ignorer:
  @@ph015@titre
Props:
  Titre: "Thème"
  Description: Personnalisez l'interface utilisateur Nuxt avec vos propres couleurs, polices et plus encore.
  Catégorie: W-96
---
::

@@P016@Icon

Utilisez la prop `icon` pour définir l'icône de la fonctionnalité.

::component-code
---
Étiquette: true
Caché:
  @@ph018@classe
Ignorer:
  @@ph019@titre
  @@ph020@description
Props:
  Titre: "Thème"
  Description: Personnalisez l'interface utilisateur Nuxt avec vos propres couleurs, polices et plus encore.
  icon: 'i-lucide-swatch-book'
  Catégorie: W-96
---
::

@@ph021@lien

Vous pouvez passer n'importe quelle propriété du composant [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) comme `to`,`target`,`rel`, etc.

::component-code
---
Étiquette: true
Caché:
  @@classe 30
ignorer:
  @@ph031@titre
  @@ph032@description
  @@ph033@icon
  @@ph034@cible
Props:
  Titre: "Thème"
  Description: Personnalisez l'interface utilisateur Nuxt avec vos propres couleurs, polices et plus encore.
  icon: 'i-lucide-swatch-book'
  à:'/docs/getting-started/theme/design-system'
  Référence:_blank
  Catégorie: W-96
---
::

### Référencement

Utilisez la prop `orientation` pour changer l'orientation de la fonctionnalité. Par défaut à `horizontal`.

::component-code
---
Étiquette: true
Caché:
  @@ph038@classe
ignorer:
  @@ph039@titre
  @@ph040@description
  @@ph041@icon
Props:
  Orientation: "Vertical"
  Titre: "Thème"
  Description: Personnalisez l'interface utilisateur Nuxt avec vos propres couleurs, polices et plus encore.
  icon: 'i-lucide-swatch-book'
  Catégorie: W-96
---
::

@@ph042 @ référencement

@@ph043@@props

Composants-props

@@ph044@@réglages

Composants slots

@@ph045@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog

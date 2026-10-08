---
title: Pagehéros
description: 'Un héros réactif pour vos pages.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHero.vue
---

@@ph000@@utilisation

Le composant PageHero enveloppe votre contenu dans un [Container](/docs/components/container) tout en conservant une flexibilité sur toute la largeur, ce qui facilite l'ajout de couleurs, d'images ou de motifs d'arrière-plan. Il offre un moyen flexible d'afficher du contenu avec une illustration dans l'emplacement par défaut.

::code-preview

:::u-page-hero
---
Étiquette: Ultimate Vue UI Library
Description: Une bibliothèque d'interface utilisateur intégrée à Nuxt/Vue fournissant un riche ensemble de composants entièrement stylisés, accessibles et hautement personnalisables pour la création d'applications Web modernes.
---

::::u-page-card{variant="subtle" class="rounded-lg"}

![App capture d'écran ](/blocks/image4.png){width="960" height="540" class="rounded-sm shadow-2xl ring ring-default"}

::::

:::

::

@@ph010@titre

Utilisez la prop `title` pour définir le titre du héros.

::component-code
---
Props:
  Étiquette: Ultimate Vue UI Library
---
::

@@ph012@Description

Utilisez la prop `description` pour définir la description du héros.

::component-code
---
Étiquette: true
Ignorer:
  @@ph014@titre
Props:
  Étiquette: Ultimate Vue UI Library
  Description: Une bibliothèque d'interface utilisateur intégrée à Nuxt/Vue fournissant un riche ensemble de composants entièrement stylisés, accessibles et hautement personnalisables pour la création d'applications Web modernes.
---
::

@@ph015@@titre

Utilisez la prop `headline` pour définir le titre du héros.

::component-code
---
Étiquette: true
ignorer:
  @@ph017@titre
  @@ph018@description
Props:
  Étiquette: Ultimate Vue UI Library
  Description: Une bibliothèque d'interface utilisateur intégrée à Nuxt/Vue fournissant un riche ensemble de composants entièrement stylisés, accessibles et hautement personnalisables pour la création d'applications Web modernes.
  Titre: Nouvelle libération
---
::

@@ph019@liens

Utilisez le prop `links` pour afficher une liste de [Button](/docs/components/button) sous la description.

::component-code
---
Étiquette: true
Extérieur:
  @@25@liens
Extérieurs:
  @@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26)
Ignorer:
  @@27@titre
  @@ph028@description
  @@229@liens
Props:
  Étiquette: Ultimate Vue UI Library
  Description: Une bibliothèque d'interface utilisateur intégrée à Nuxt/Vue fournissant un riche ensemble de composants entièrement stylisés, accessibles et hautement personnalisables pour la création d'applications Web modernes.
  à gauche:
    - label:« Démarrer »
      à:'/docs/getting-started'
      Icône: i-lucide-square-play
    - label:"En savoir plus"
      à:'/docs/getting-started/theme/design-system'
      Couleur: "Neutre"
      Étiquette:"subtil"
      trailingIcône:'i-lucide-arrow-right'
---
::

### Référencement

Utilisez la prop `orientation` pour changer l'orientation avec l'emplacement par défaut.

::component-code
---
Étiquette: true
Extérieure:
  @@ph035@liens
Extérieurs:
  - ButtonProps [réf. nécessaire]
ignorer:
  @@ph037@titre
  @@ph038@description
  @@ph039@headline
  @@ph040@liens
Props:
  Étiquette: Ultimate Vue UI Library
  Description: Une bibliothèque d'interface utilisateur intégrée à Nuxt/Vue fournissant un riche ensemble de composants entièrement stylisés, accessibles et hautement personnalisables pour la création d'applications Web modernes.
  Titre: Nouvelle libération
  Orientation: horizontale
  à gauche:
    - label:« Démarrer »
      à:'/docs/getting-started'
      Icône: i-lucide-square-play
    - label:"En savoir plus"
      à:'/docs/getting-started/theme/design-system'
      Couleur: "Neutre"
      Étiquette:"subtil"
      trailingIcône:'i-lucide-arrow-right'
Slots:
  Default:|

    @@@ 043 @
---

![App capture d'écran ](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-default"}
::

### Reverse

Utilisez la prop `reverse` pour inverser l'orientation de l'emplacement par défaut.

::component-code
---
Étiquette: true
Extérieur:
  @@ph051@liens
Extérieurs:
  - ButtonProps [réf. nécessaire]
Ignorer:
  @@P053@titre
  @@ph054@description
  @@555@headline
  @@ph056@liens
Props:
  Étiquette: Ultimate Vue UI Library
  Description: Une bibliothèque d'interface utilisateur intégrée à Nuxt/Vue fournissant un riche ensemble de composants entièrement stylisés, accessibles et hautement personnalisables pour la création d'applications Web modernes.
  Titre: Nouvelle libération
  Orientation: horizontale
  Revers: vrai
  à gauche:
    - label:« Démarrer »
      à:'/docs/getting-started'
      Icône: i-lucide-square-play
    - label:"En savoir plus"
      à:'/docs/getting-started/theme/design-system'
      Couleur: "Neutre"
      Étiquette:"subtil"
      trailingIcône:'i-lucide-arrow-right'
Slots:
  Défaut:|

    @@@ 59 @
---

![App capture d'écran ](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-default"}
::

@@ph065

@@ph066@@props

Composants-props

@@ph067@@réseaux sociaux

Composants slots

@@ph068@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog

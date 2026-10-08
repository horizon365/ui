---
title: ChangelogVersion
description: 'Un article personnalisable à afficher dans un changelog.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersion.vue
---

@@ph000@@utilisation

Le composant ChangelogVersion fournit un moyen flexible d'afficher un élément`<article>`avec un contenu personnalisable , y compris le titre , la description , l'image , etc.

::code-preview

::u-changelog-version
---
Titre : Introduction à Nuxt UI v3
Description : Nuxt UI v3 est sorti ! Après plus de 1500 commits , cette refonte majeure apporte une accessibilité améliorée , un support CSS Tailwind et une compatibilité complète avec Vue .
image : ' https://nuxt.com/assets/blog/nuxt-ui-v3.png '
Date du 2025 - 03 - 12
Auteurs :
  - prénom : Benjamin Canac
    Étiquette :@benjamincanac
    Avatar :
      src :https://github.com/benjamincanac.png
      Étiquette : Lazy
    Deux :https://x.com/benjamincanac
    Référence : _ blank
  - nom : Sébastien Chopin
    Description :@atinux
    Avatar :
      src :https://github.com/atinux.png
      Étiquette : Lazy
    Deux :https://x.com/atinux
    Référence : _ blank
  - prénom : Hugo Richard
    Description : '@hugorcd '
    Avatar :
      src :https://github.com/hugorcd.png
      Étiquette : Lazy
    Deux :https://x.com/hugorcd
    Référence : _ blank
à : https://nuxt.com/blog/nuxt-ui-v3
cible : _ blanc
Catégorie : w-full
Conteneur : ' max-w - lg '
---
::

::

::tip{to="/docs/components/changelog-versions"}
Utilisez le composant`ChangelogVersions`pour afficher plusieurs versions du journal des modifications dans une chronologie avec une barre d'indicateur à gauche .
::

@@ph006@titre

Utilisez la prop`title`pour afficher le titre de la version de changement .

::component-code
---
Caché :
  @@ph008@classe
  @@ph009@@ui
  - ui.container
Props :
  Titre : Introduction à Nuxt UI v3
  Catégorie : w-full
  Conteneur : ' max-w - lg '
---
::

@@ph011@Description

Utilisez la prop`description`pour afficher la description du ChangelogVersion .

::component-code
---
Étiquette : true
Caché :
  @@classe
  @@ph014@ui
  - ui.container
ignorer:
  @@ph016@titre
Props:
  Titre: Introduction à Nuxt UI v3
  Description: Nuxt UI v3 est sorti! Après plus de 1500 commits, cette refonte majeure apporte une accessibilité améliorée, un support CSS Tailwind et une compatibilité complète avec Vue.
  Catégorie: w-full
  Conteneur: 'max-w-lg'
---
::

@@ph017@date

Utilisez la prop `date` pour afficher la date de la version du changement.

::tip
La date est automatiquement formatée à la [current locale](/docs/getting-started/integrations/i18n/nuxt#locale). Vous pouvez soit passer un objet `Date` ou une chaîne.
::

::component-code
---
Étiquette: true
Caché:
  @@ph024@classe
  @@25 @
  - ui.container
ignorer:
  @@27@titre
  @@ph028@description
Props:
  Titre: Introduction à Nuxt UI v3
  Description: Nuxt UI v3 est sorti! Après plus de 1500 commits, cette refonte majeure apporte une accessibilité améliorée, un support CSS Tailwind et une compatibilité complète avec Vue.
  Date: 2025 - 03 - 12
  Catégorie: w-full
  Conteneur: 'max-w-lg'
---
::

@29@badge

Utilisez la prop `badge` pour afficher un [Badge](/docs/components/badge) sur le ChangelogVersion.

::component-code
---
Étiquette: true
Caché:
  @@classe 35
  @@pH036@@ui
  - ui.container
ignorer:
  @@ph038@titre
  @@ph039@description
  @@ph040@date
Props:
  Titre: Introduction à Nuxt UI v3
  Description: Nuxt UI v3 est sorti! Après plus de 1500 commits, cette refonte majeure apporte une accessibilité améliorée, un support CSS Tailwind et une compatibilité complète avec Vue.
  Date du 2025 - 03 - 12
  badge: "Libération"
  Catégorie: w-full
  Conteneur: 'max-w-lg'
---
::

Vous pouvez passer n'importe quelle propriété du composant [Badge](/docs/components/badge#props) pour la personnaliser.

::component-code
---
Étiquette: true
Caché:
  @@classe 45
  @@ph046 @
  - ui.container
ignorer:
  @@ph048@titre
  @@ph049@description
  @@ph050@date
  - badge.label
  - badge.couleur
  - badge.variant
Props:
  Titre: Introduction à Nuxt UI v3
  Description: Nuxt UI v3 est sorti! Après plus de 1500 commits, cette refonte majeure apporte une accessibilité améliorée, un support CSS Tailwind et une compatibilité complète avec Vue.
  Date du 2025 - 03 - 12
  badge:
    Étiquette:"Libération"
    Couleur: Primaire
    Étiquette: Outline
  Catégorie: w-full
  Conteneur: 'max-w-lg'
---
::

@@photographie54@image

Utilisez le prop `image` pour afficher une image dans le BlogPost.

::note
Si [`@nuxt/image`](https://image.nuxt.com/get-started/installation) est installé, le composant `<NuxtImg>` sera utilisé à la place du tag natif `img`.
::

::component-code
---
Étiquette: true
Caché:
  @@ph063@classe
  @@pH064@@ui
  - ui.container
ignorer:
  @@ph066@titre
  @@ph067@description
  @@ph068@date
Props:
  Titre: Introduction à Nuxt UI v3
  Description: Nuxt UI v3 est sorti! Après plus de 1500 commits, cette refonte majeure apporte une accessibilité améliorée, un support CSS Tailwind et une compatibilité complète avec Vue.
  Date: 2025 - 03 - 12
  image: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
  Catégorie: w-full
  Conteneur: 'max-w-lg'
---
::

@@P069@Auteurs

Utilisez la prop `authors` pour afficher une liste de [User](/docs/components/user) dans le ChangelogVersion sous forme d'un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@
@@
@@

Vous pouvez transmettre n'importe quelle propriété du composant [Link](/docs/components/link#props) comme `to`,`target`, etc.

::component-code
---
Étiquette: true
Caché:
  @@ph099@classe
  @@ph100 @
  - ui.container
Extérieur:
  @@P102@auteurs
Extérieurs :
  - UserProps [ réf . nécessaire ]
ignorer :
  @@ph104@titre
  @@ph105@description
  @@ph106@date
  @photographie107@image
  @@ph108@auteurs
Props :
  Titre : Introduction à Nuxt UI v3
  Description : Nuxt UI v3 est sorti ! Après plus de 1500 commits , cette refonte majeure apporte une accessibilité améliorée , un support CSS Tailwind et une compatibilité complète avec Vue .
  Date du 2025 - 03 - 12
  image : ' https://nuxt.com/assets/blog/nuxt-ui-v3.png '
  Auteurs :
    - nom : Benjamin Canac
      Étiquette :@benjamincanac
      Avatar :
        src :https://github.com/benjamincanac.png
        Étiquette : Lazy
      Deux :https://x.com/benjamincanac
      Référence : _ blank
    - nom : Sébastien Chopin
      Description :@atinux
      Avatar :
        src :https://github.com/atinux.png
        Étiquette : Lazy
      Deux :https://x.com/atinux
      Référence : _ blank
    - prénom : Hugo Richard
      Description : '@hugorcd '
      Avatar :
        src :https://github.com/hugorcd.png
        Étiquette : Lazy
      Deux :https://x.com/hugorcd
      Référence : _ blank
  Catégorie : w-full
  Conteneur : ' max-w - lg '
---
::

@@ph112@liaison

Vous pouvez transmettre n'importe quelle propriété du composant[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)comme`to`,`target`,`rel`, etc.

::component-code
---
Étiquette : true
Caché :
  @@ph121@classe
  @@ph122@ui
  - ui.container
ignorer :
  @@ph124@titre
  @@ph125@description
  @@ph126@date
  @photographie127@image
  @@ph128@cible
Props:
  Titre: Introduction à Nuxt UI v3
  Description: Nuxt UI v3 est sorti! Après plus de 1500 commits, cette refonte majeure apporte une accessibilité améliorée, un support CSS Tailwind et une compatibilité complète avec Vue.
  Date: 2025 - 03 - 12
  image: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
  à: https://nuxt.com/blog/nuxt-ui-v3
  Référence:_blank
  Catégorie: w-full
  Conteneur: 'max-w-lg'
---
::

### indicateur

Utilisez la prop `indicator` pour masquer le point indicateur sur la gauche. Par défaut à `true`.

::component-code
---
Étiquette: true
Caché:
  @@ph132@classe
  @@ph133@ui
  - ui.container
ignorer:
  @@ph135@titre
  @@ph136@description
  @@ph137@date
  @@ph138@image
Props:
  Titre: Introduction à Nuxt UI v3
  Description: Nuxt UI v3 est sorti! Après plus de 1500 commits, cette refonte majeure apporte une accessibilité améliorée, un support CSS Tailwind et une compatibilité complète avec Vue.
  Date du 2025 - 03 - 12
  image: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
  Indicateur: Faux
  Catégorie: w-full
  Conteneur: 'max-w-lg'
---
::

::note
Lorsque le `indicator` prop est `false`, la date sera affichée au-dessus du titre.
::

@@ph141@@Exemples

### Avec fente pour le corps

Vous pouvez utiliser l'emplacement `body` pour afficher du contenu personnalisé entre l'image et les auteurs avec:

- le composant [Markdown](https://comark.dev/rendering/vue) de `@comark/vue` pour afficher une certaine réduction.
- le composant [ContentRenderer](https://content.nuxt.com/docs/components/content-renderer) de `@nuxt/content` pour rendre le contenu de la page ou de la liste.
- ou utilisez le composant `:u-changelog-version` directement dans votre contenu avec une réduction à l'intérieur de l'emplacement `body`, car l'interface utilisateur Nuxt fournit des composants de prose pré-stylisés.

::component-example
---
Étiquette: true
nom: 'changelog-version-markdown-exemple'
Collapse: vrai
---
::

@@ph159@@api

@@ph160@props

Composants-props

@@ph161@@réseaux sociaux

Composants slots

@@ph162@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog

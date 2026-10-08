---
title: Le blogpost
description: 'Un article personnalisable à afficher dans une page de blog.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPost.vue
---

@@ph000@@utilisation

Le composant BlogPost fournit un moyen flexible d'afficher un élément`<article>`avec un contenu personnalisable , y compris le titre , la description , l'image , etc.

::code-preview

::u-blog-post
---
Présentation de Nuxt Icon v1
Découvrez Nuxt Icon v1 - une solution d'icônes moderne , polyvalente et personnalisable pour vos projets Nuxt .
image : ' https://nuxt.com/assets/blog/nuxt-icon/cover.png '
Date : 2024 - 11 - 25
Auteurs :
  - prénom : Anthony Fu
    Étiquette : antfu7
    Avatar :
      src :https://github.com/antfu.png
      Étiquette : Lazy
    Deux :https://github.com/antfu
    Référence : _ blank
à l'adresse : ' https://nuxt.com/blog/nuxt-icon-v1-0 '
cible : _ blanc
Catégorie : W - 96
---
::

::

::tip{to="/docs/components/blog-posts"}
Utilisez le composant`BlogPosts`pour afficher plusieurs articles de blog dans une mise en page de grille réactive .
::

@@ph004@titre

Utilisez la prop`title`pour afficher le titre du BlogPost .

::component-code
---
Étiquette : true
Caché :
  @@ph006@classe
Props :
  Présentation de Nuxt Icon v1
  Catégorie: W-96
---
::

@@ph007@Description

Utilisez la prop `description` pour afficher la description du BlogPost.

::component-code
---
Étiquette: true
Caché:
  @@ph009@classe
Ignorer:
  @@ph010@titre
Props:
  Présentation de Nuxt Icon v1
  Découvrez Nuxt Icon v1-une solution moderne, polyvalente et personnalisable pour vos projets Nuxt.
  Catégorie: W-96
---
::

@@ph011@date

Utilisez le `date` prop pour afficher la date du BlogPost.

::tip
La date est automatiquement formatée à la [current locale](/docs/getting-started/integrations/i18n/nuxt#locale). Vous pouvez soit passer un objet `Date` ou une chaîne.
::

::component-code
---
Étiquette: true
Caché:
  @@ph018@classe
ignorer:
  @@ph019@titre
  @@ph020@description
Props:
  Présentation de Nuxt Icon v1
  Découvrez Nuxt Icon v1-une solution moderne, polyvalente et personnalisable pour vos projets Nuxt.
  Date: 2024 - 11 - 25
  Catégorie: W-96
---
::

@@21@badge

Utilisez le prop `badge` pour afficher un [Badge](/docs/components/badge) dans le BlogPost.

::component-code
---
Étiquette: true
Caché:
  @@ph027@classe
Ignorer:
  @@28@titre
  @@ph029@description
Props:
  Présentation de Nuxt Icon v1
  Découvrez Nuxt Icon v1-une solution moderne, polyvalente et personnalisable pour vos projets Nuxt.
  badge: "Libération"
  Catégorie: W-96
---
::

Vous pouvez passer n'importe quelle propriété du composant [Badge](/docs/components/badge#props) pour la personnaliser.

::component-code
---
Étiquette: true
Caché:
  @@classe 34
ignorer:
  - titre
  @@ph036@description
  - badge.label
  - badge.couleur
  - badge.variant
Props:
  Présentation de Nuxt Icon v1
  Découvrez Nuxt Icon v1-une solution moderne, polyvalente et personnalisable pour vos projets Nuxt.
  badge:
    Étiquette:"Libération"
    Couleur: Primaire
    Variante: solide
  Catégorie: W-96
---
::

@@photographie040@image

Utilisez la prop `image` pour afficher une image dans le BlogPost.

::note
Si [`@nuxt/image`](https://image.nuxt.com/get-started/installation) est installé, le composant `<NuxtImg>` sera utilisé à la place de la balise native `img`.
::

::component-code
---
Étiquette: true
Caché:
  @@ph049@classe
ignorer:
  @@ph050@titre
  @@ph051@@description
  @@ph052@date
Props:
  Présentation de Nuxt Icon v1
  Découvrez Nuxt Icon v1-une solution d'icônes moderne, polyvalente et personnalisable pour vos projets Nuxt.
  image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  Date: 2024 - 11 - 25
  Catégorie: W-96
---
::

### Auteurs

Utilisez la prop `authors` pour afficher une liste de [User](/docs/components/user) dans le BlogPost sous forme d'un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@
@@
@@

Vous pouvez passer n'importe quelle propriété du composant [Link](/docs/components/link#props) comme `to`,`target`, etc.

::component-code
---
Étiquette: true
Caché:
  @@ph083@classe
Extérieur:
  @@ph084@auteurs
Extérieurs:
  - UserProps [réf. nécessaire]
Ignorer:
  @@ph086@titre
  @@ph087@description
  @@ph088@date
  @photographie89@image
  - auteurs
Props:
  Présentation de Nuxt Icon v1
  Découvrez Nuxt Icon v1-une solution d'icônes moderne, polyvalente et personnalisable pour vos projets Nuxt.
  image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  Date: 2024 - 11 - 25
  Auteurs :
    - prénom : Anthony Fu
      Étiquette : antfu7
      Avatar :
        src :https://github.com/antfu.png
        Étiquette : Lazy
      Deux :https://github.com/antfu
      Référence : _ blank
  Catégorie : W - 96
---
::

Lorsque le prop`authors`a plus d'un élément , le composant[AvatarGroup](/docs/components/avatar-group)est utilisé .

::component-code
---
Étiquette : true
Caché :
  @@ph097@classe
Extérieur :
  @@ph098@auteurs
Extérieurs :
  - UserProps [ réf . nécessaire ]
ignorer :
  @@ph100@titre
  @@ph101@description
  @@ph102@date
  @@photographie103@image
  - auteurs
Props :
  Présentation de Nuxt Icon v1
  Découvrez Nuxt Icon v1 - une solution moderne , polyvalente et personnalisable pour vos projets Nuxt .
  image : ' https://nuxt.com/assets/blog/nuxt-icon/cover.png '
  Date : 2024 - 11 - 25
  Auteurs :
    - nom : Anthony Fu
      Étiquette : antfu7
      Avatar :
        src :https://github.com/antfu.png
        Étiquette : Lazy
      Deux :https://github.com/antfu
      Référence : _ blank
    - nom : Benjamin Canac
      Étiquette : benjamincanac
      Avatar :
        src :https://github.com/benjamincanac.png
        Étiquette : Lazy
      Deux :https://github.com/benjamincanac
      Référence : _ blank
  Catégorie : W - 96
---
::

@@ph107@lien

Vous pouvez passer n'importe quelle propriété du composant[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)comme`to`,`target`,`rel`, etc.

::component-code
---
Étiquette : true
Caché :
  @@classe 116
Ignorer :
  @@ph117@titre
  @@ph118@description
  @@ph119@date
  @@ph120@image
  @@ph121@cible
Props:
  Présentation de Nuxt Icon v1
  Découvrez Nuxt Icon v1-une solution moderne, polyvalente et personnalisable pour vos projets Nuxt.
  image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  Date: 2024 - 11 - 25
  à l'adresse:'https://nuxt.com/blog/nuxt-icon-v1-0'
  Référence:_blank
  Catégorie: W-96
---
::

@@2012@Variant

Utilisez la prop `variant` pour modifier le style du BlogPost.

::component-code
---
Étiquette: true
Caché:
  @@ph124@classe
Ignorer:
  @@ph125@titre
  @@ph126@description
  @@ph127@date
  @@ph128@image
  @@ph129@à
  @@ph130@cible
Props:
  Présentation de Nuxt Icon v1
  Découvrez Nuxt Icon v1-une solution d'icônes moderne, polyvalente et personnalisable pour vos projets Nuxt.
  image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  Date: 2024 - 11 - 25
  à l'adresse:'https://nuxt.com/blog/nuxt-icon-v1-0'
  Référence:_blank
  Variante: nue
  Catégorie: W-96
---
::

::note
Le style sera différent si vous fournissez un `to` prop ou un `image`.
::

### Référencement

Utilisez la prop `orientation` pour modifier l'orientation de BlogPost. Par défaut à `vertical`.

::component-code
---
Étiquette: true
Caché:
  @@ph136@classe
ignorer:
  @@ph137@titre
  - description
  @@ph139@date
  @@ph140@image
  @@ph141@à
  @@ph142@cible
Props:
  Présentation de Nuxt Icon v1
  Découvrez Nuxt Icon v1-une solution moderne, polyvalente et personnalisable pour vos projets Nuxt.
  image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  Date: 2024 - 11 - 25
  à l'adresse:'https://nuxt.com/blog/nuxt-icon-v1-0'
  Référence:_blank
  Orientation: horizontale
  Étiquette: Outline
---
::

@@ph143@api

@@ph144@@props

Composants-props

@@ph145@@Slots

Composants slots

@@ph146@thème

Composant-thème

@changement@changement147

Composant-changelog

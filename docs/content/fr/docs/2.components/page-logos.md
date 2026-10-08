---
title: PageLogos
description: 'Une liste de logos ou d'images à afficher sur vos pages.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLogos.vue
---

@@ph000@utilisation

Le composant PageLogos fournit un moyen flexible d'afficher une liste de logos ou d'images dans vos pages.

::component-code
---
Collapse: vrai
Étiquette: true
Caché:
  @@ph001@classe
ignorer:
  @@ph002@articles
Props:
  items:
    -  i-simple-icons-github
    -  i-simple-icons-discord
    -  i-simple-icônes-x
    -  i-simple-icônes-instagram
    -  i-simple-icons-linkedin
    -  i-simple-icons-facebook
  Catégorie: MB-10
---
::

@@ph009@titre

Utilisez le `title` prop pour placer le titre au-dessus des logos.

::component-code
---
Étiquette: true
ignorer:
  @@ph011@articles
Caché:
  @@classe 12
Props:
  Titre: "Les meilleures équipes de front-end"
  items:
    -  i-simple-icônes-github
    -  i-simple-icons-discord
    -  i-simple-icons-x
    -  i-simple-icons-instagram
    -  i-simple-icons-linkedin
    -  i-simple-icones-facebook
  Catégorie: My-10
---
::

@@ph019@@éléments

Vous pouvez afficher les logos de deux manières:

1. Utiliser le `items` prop pour fournir une liste de logos. Chaque élément peut être:
  - Un nom d'icône (par exemple,`i-simple-icons-github`)
  - Un objet contenant les propriétés `src` et `alt` pour les images, qui seront utilisées dans un composant `UAvatar`
2. Utilisation de l'emplacement par défaut pour avoir un contrôle total sur le contenu

::tabs{class="gap-0"}

::component-example{label="Avec items"}
---
nom: 'page-logos-with-items'
class: '[&> div]: mon-10'
---
::

::component-example{label="Avec slot"}
---
nom: 'page-logos-with-slot'
class: '[&> div]: mon-10'
---
::

::

@@ph031@@marqueur

Utilisez le prop `marquee` pour activer un effet de marquise pour les logos.

::component-code
---
Étiquette: true
Ignorer:
  @@ph033@articles
  @@ph034@marqueur
Caché:
  @@classe 35
Props:
  Titre: "Les meilleures équipes de front-end"
  marqueur: true
  items:
    -  i-simple-icons-github
    -  i-simple-icônes-discord
    -  i-simple-icônes-x
    -  i-simple-icons-instagram
    -  i-simple-icons-linkedin
    -  i-simple-icons-facebook
  Catégorie: My-10
---
::

::note{to="/docs/components/marquee"}
Lorsque vous utilisez le mode `marquee`, vous pouvez personnaliser son comportement en passant des props. Pour plus d'informations, consultez le composant `Marquee`.
::

@@ph044@@api

@@@ph045@@props

Composants-props

@@ph046@@réglages

Composants slots

@@ph047@thème

Composant-thème

@changelog 48

Composant-changelog

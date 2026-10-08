---
title: Page-carte
description: 'Un composant de carte pré-stylé qui affiche un titre, une description et un lien facultatif.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCard.vue
---

@@ph000@@utilisation

Le composant PageCard offre un moyen flexible d'afficher le contenu d'une carte avec une illustration dans l'emplacement par défaut.

::code-preview

::u-page-card
---
Titre: Tailwind CSS
Nuxt UI s'intègre avec le dernier CSS Tailwind, apportant des améliorations significatives.
icon: 'i-simple-icons-tailwindcss'
Catégorie: W-96
---

par: img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::

::tip
Utilisez les composants [PageGrid](/docs/components/page-grid),[PageColumns](/docs/components/page-columns) ou [](/docs/components/page-list) pour afficher plusieurs PageCard.
::

@@ph014@titre

Utilisez la prop `title` pour définir le titre de la carte.

::component-code
---
Caché:
  @@ph016@classe
Props:
  Titre: Tailwind CSS
  Catégorie: W-96
---
::

@@ph017@@Description

Utilisez la prop `description` pour définir la description de la carte.

::component-code
---
Étiquette: true
Caché:
  @@classe 19
Ignorer:
  @@20@titre
Props:
  Titre: Tailwind CSS
  Nuxt UI s'intègre avec le dernier CSS Tailwind, apportant des améliorations significatives.
  Catégorie: W-96
---
::

@@21@Icon

Utilisez le prop `icon` pour définir l'icône de la carte.

::component-code
---
Étiquette: true
Caché:
  @@classe 23
ignorer:
  @@24@titre
  @@ph025@description
Props:
  Titre: Tailwind CSS
  Nuxt UI s'intègre avec le dernier CSS Tailwind, apportant des améliorations significatives.
  icon: 'i-simple-icons-tailwindcss'
  Catégorie: W-96
---
::

@26@lien

Vous pouvez passer n'importe quelle propriété du composant [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) comme `to`,`target`,`rel`, etc.

::component-code
---
Étiquette: true
Caché:
  @@classe 35
Ignorer:
  @@ph036@titre
  @@ph037@description
  @@pH038@icon
  @@ph039@cible
Props:
  Titre: Tailwind CSS
  Nuxt UI s'intègre avec le dernier CSS Tailwind, apportant des améliorations significatives.
  icon: 'i-simple-icons-tailwindcss'
  à:'https://tailwindcss.com/blog/tailwindcss-v4'
  Référence:_blank
  Catégorie: W-96
---
::

### Variant

Utilisez le prop `variant` pour changer le style de la carte.

::component-code
---
Étiquette: true
Caché:
  @@classe 42
Ignorer:
  @@ph043@titre
  @@ph044@description
  @@ph045@icon
  @@ph046@à
  @@ph047@cible
Props:
  Titre: Tailwind CSS
  Nuxt UI s'intègre avec le dernier CSS Tailwind, apportant des améliorations significatives.
  icon: 'i-simple-icons-tailwindcss'
  à:'https://tailwindcss.com/blog/tailwindcss-v4'
  Référence:_blank
  Variété: Soft
  Catégorie: W-96
---
::

::tip
Vous pouvez appliquer la classe `light` ou `dark` à l'emplacement `links` lorsque vous utilisez la variante `solid` pour inverser les couleurs.
::

### Référencement

Utilisez la prop `orientation` pour changer l'orientation avec l'emplacement par défaut.

::component-code
---
Étiquette: true
Ignorer:
  @@505@titre
  @@ph056@description
  @@57@icon
Props:
  Titre: Tailwind CSS
  Nuxt UI s'intègre avec le dernier CSS Tailwind, apportant des améliorations significatives.
  icon: 'i-simple-icons-tailwindcss'
  Orientation: horizontale
Slots:
  Défaut:|

    @@@ 58 @
---

par: img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

### Reverse

Utilisez la prop `reverse` pour inverser l'orientation de l'emplacement par défaut.

::component-code
---
Étiquette: true
Ignorer:
  @@ph062@titre
  @@ph063@description
  @@ph064@icon
Props:
  Titre: Tailwind CSS
  Nuxt UI s'intègre avec le dernier CSS Tailwind, apportant des améliorations significatives.
  icon: 'i-simple-icons-tailwindcss'
  Orientation: horizontale
  Revers: vrai
Slots:
  Défaut:|

    @@
---

par: img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

@@ph067@highlight

Utilisez les accessoires `highlight` et `highlight-color` pour afficher une bordure surlignée autour de la carte.

::component-code
---
Étiquette: true
Caché:
  @@ph070@classe
Ignorer:
  @@ph071@titre
  @@ph072@description
  @@ph073@icon
  - référence
Props:
  Titre: Tailwind CSS
  Nuxt UI s'intègre avec le dernier CSS Tailwind, apportant des améliorations significatives.
  icon: 'i-simple-icons-tailwindcss'
  Orientation: horizontale
  Highlights: vrai
  highlightColor: 'primaire'
Slots:
  Défaut:|

    @@@ 75 @
---

par: img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

@777@éclairage

Utilisez les accessoires `spotlight` et `spotlight-color` pour afficher un effet de projecteur qui suit le curseur de votre souris et met en évidence les bordures en survol.

::note
L'effet de projecteur prendra le dessus sur les effets de survol lors de l'utilisation d'un `to` prop. Il est préférable de l'utiliser avec la variante `outline`.
::

::component-code
---
Étiquette: true
Caché:
  @@ph082@classe
ignorer:
  @@ph083@titre
  @@ph084@description
  @@pH085@icon
  - référencement
Props:
  Titre: Tailwind CSS
  Nuxt UI s'intègre avec le dernier CSS Tailwind, apportant des améliorations significatives.
  icon: 'i-simple-icons-tailwindcss'
  Orientation: horizontale
  Critique: True
  spotlightColor: 'primaire'
Slots:
  Default:|

    @@@ 087 @
---

par: img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::tip
Vous pouvez également personnaliser la couleur et la taille en utilisant les variables CSS `--spotlight-color` et `--spotlight-size`:

```vue
<template>
  <UPageCard spotlight class="[--spotlight-color:var(--ui-error)] [--spotlight-size:200px]" />
</template>
```
::

@@ph096@exemples

### Comme témoignage

Utilisez le composant [User](/docs/components/user) dans l'emplacement `header` ou `footer` pour que la carte ressemble à un témoignage.

::component-example
---
name: 'témoignage-exemple'
---
::

::tip{to="/docs/components/page-columns"}
Vous pouvez utiliser le composant `PageColumns` pour afficher plusieurs PageCard dans une disposition à plusieurs colonnes.
::

@@P105 @@ référencement

@106@propriété

Composants-props

@@ph107@@Slots

Composants slots

@@ph108@thème

Composant-thème

@change109 @ changement

Composant-changelog

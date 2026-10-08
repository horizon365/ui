---
description: Un carrousel avec mouvement et balayage construit avec Embla.
category: data
keywords:
  - swiper
  - gallery
  - image slider
  - slideshow
links:
  - label: Emblème
    to: https://www.embla-carousel.com/docs/v8/api
    icon: i-custom-embla-carousel
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Carousel.vue
---

@@ph000@@utilisation

Utilisez le composant Carrousel pour afficher une liste d'éléments dans un carrousel.

::component-example
---
Collapse: vrai
dépassement: true
nom: 'carousel-exemple'
classe: '! p-0'
---
::

::note
Utilisez votre souris pour faire glisser le carrousel horizontalement sur le bureau.
::

@@ph001@@éléments

Utilisez le `items` prop comme un tableau et rendre chaque élément en utilisant l'emplacement par défaut:

::component-example
---
nom: 'carousel-items-exemple'
Catégorie: P-8
---
::

Vous pouvez également passer un tableau d'objets avec les propriétés suivantes:

@@
@@

Vous pouvez contrôler le nombre d'éléments visibles en utilisant les classes d'utilitaires [`basis`](https://tailwindcss.com/docs/flex-basis)/[](https://tailwindcss.com/docs/width) sur les classes d'utilitaires `item`:

::component-example
---
name: 'carousel-items-multiple-exemple'
classe: 'p-8 px-16'
---
::

### Référencement

Utilisez la prop `orientation` pour modifier l'orientation de la Progress. Defaults à `horizontal`.

::note
Utilisez votre souris pour faire glisser le carrousel verticalement sur le bureau.
::

::component-example
---
name: 'carousel-orientation-exemple'
Catégorie: P-8
---
::

::caution
Vous devez spécifier un `height` sur le conteneur en orientation verticale.
::

@@24@@Fouilles

Utilisez le prop `arrows` pour afficher les boutons précédent et suivant.

::component-example
---
nom: 'carousel-flèches-exemple'
Catégorie: P-8
---
::

### Prev/Suivant

Utilisez les accessoires `prev` et `next` pour personnaliser les boutons précédent et suivant avec n'importe quel accessoire [Button](/docs/components/button).

::component-example
---
nom: 'carousel-prev-next-exemple'
Catégorie: P-8
---
::

### Prev/Icônes suivantes

Utilisez les props `prev-icon` et `next-icon` pour personnaliser les boutons [Icon](/docs/components/icon).

::component-example
---
nom: 'carousel-prev-next-icon-example'
Catégorie: P-8
options:
  - name:'prévIcon'
    Étiquette:'previcon'
    par défaut:'i-lucide-chevron-left'
  - nom:'nextIcon'
    Étiquette: nextIcon
    valeur par défaut:'i-lucide-chevron-right'
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser ces icônes globalement dans votre `app.config.ts` sous la touche `ui.icons.arrowLeft`/`ui.icons.arrowRight`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser ces icônes globalement dans votre `vite.config.ts` sous la touche `ui.icons.arrowLeft`/`ui.icons.arrowRight`.
:::
::

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilisez la prop `dots` pour afficher une liste de points à faire défiler vers une diapositive spécifique.

::component-example
---
nom: 'carousel-dots-exemple'
classe: 'p-8 pb-12'
---
::

Le nombre de points est basé sur le nombre de diapositives affichées dans la vue:

::component-example
---
name: 'carousel-dots-multiple-exemple'
classe: 'p-8 px-16 pb-12'
---
::

@@ph052@@Plugins

Le composant Carousel implémente le plugin officiel [Embla Carousel ](https://www.embla-carousel.com/docs/v8/plugins).

### Autoplay

Ce plugin est utilisé pour étendre Embla Carousel avec la fonctionnalité **autoplay**.

Utilisez la prop `autoplay` comme un booléen ou un objet pour configurer le plugin [Autoplay ](https://www.embla-carousel.com/docs/v8/plugins/autoplay).

::component-example
---
nom: 'carousel-autoplay-exemple'
classe: 'p-8 px-16 pb-12'
---
::

::note
Dans cet exemple, nous utilisons la prop `loop` pour un carrousel infini.
::

### Auto Scroll électronique

Ce plugin est utilisé pour étendre Embla Carousel avec la fonctionnalité **auto scroll**.

Utilisez la prop `auto-scroll` comme un booléen ou un objet pour configurer le plug-in [Auto Scroll ](https://www.embla-carousel.com/docs/v8/plugins/auto-scroll).

::component-example
---
nom: 'carousel-auto-scroll-exemple'
classe: 'p-8 px-16 pb-12'
---
::

::note
Dans cet exemple, nous utilisons la prop `loop` pour un carrousel infini.
::

### Auto Hauteur

Ce plugin est utilisé pour étendre Embla Carousel avec la fonctionnalité **auto height**. Il modifie la hauteur du conteneur du carrousel pour s'adapter à la hauteur de la diapositive la plus haute en vue.

Utilisez la prop `auto-height` comme un booléen ou un objet pour configurer le plugin [Auto Height ](https://www.embla-carousel.com/docs/v8/plugins/auto-height).

::component-example
---
nom: 'carousel-auto-height-example'
Classe: 'p-8 pt-16'
---
::

::note
Dans cet exemple, nous ajoutons la classe `transition-[height]` sur le conteneur pour animer le changement de hauteur.
::

### Noms des classes

Class Names est un plugin utilitaire **class name toggle** pour Embla Carousel qui vous permet d'automatiser la bascule des noms de classe sur votre carrousel.

Utilisez la prop `class-names` comme un booléen ou un objet pour configurer le plugin [Noms de classe ](https://www.embla-carousel.com/docs/v8/plugins/class-names).

::component-example
---
name: 'carousel-class-noms-exemple'
Catégorie: P-8
---
::

::note
Dans cet exemple, nous ajoutons les classes `transition-opacity [&:not(.is-snapped)]:opacity-10` sur le `item` pour animer le changement d'opacité.
::

@@F094@fait

Ce plugin est utilisé pour remplacer la fonctionnalité de défilement Embla Carousel par **fade transitions**.

Utilisez la prop `fade` comme un booléen ou un objet pour configurer le plugin [Fade ](https://www.embla-carousel.com/docs/v8/plugins/fade).

::component-example
---
nom: 'carousel-fade-exemple'
classe: 'p-8 pb-12'
---
::

### Gestes de roue

Ce plugin est utilisé pour étendre Embla Carousel avec la possibilité de **utiliser la souris/trackpad wheel** pour naviguer dans le carrousel.

Utilisez la prop `wheel-gestures` comme un booléen ou un objet pour configurer le plugin [Wheel Gestures ](https://www.embla-carousel.com/docs/v8/plugins/wheel-gestures).

::note
Utilisez la molette de votre souris pour faire défiler le carrousel.
::

::component-example
---
nom: 'carousel-roue-gestures-exemple'
classe: 'p-8 px-16'
---
::

@@ph110@exemples

### Avec miniatures

Vous pouvez utiliser la méthode [`scrollTo`](https://www.embla-carousel.com/docs/v8/api/methods#scrollto) sur [`emblaApi`](#expose) pour afficher les vignettes sous le carrousel qui mènent à une diapositive spécifique.

::component-example
---
nom: 'carousel-miniatures-exemple'
classe: 'p-8 px-16'
---
::

@@ph122@api

@@ph123@@props

Composants-props

@@ph124@@réseaux sociaux

Composants slots

@@P125@@émissions

Composants émetteurs

@@ph126@@exposé

Vous pouvez accéder à l'instance du composant typé en utilisant [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const carousel = useTemplateRef('carousel')
</script>

<template>
  <UCarousel ref="carousel" />
</template>
```

Cela vous donnera accès à ce qui suit:

| nom| type|
| ---- | ---- |
| @@|@@|
| @@|`Ref<EmblaCarouselType \| null>`{lang="ts-type"}](https://www.embla-carousel.com/docs/v8/api/methods#typescript)|

@@ph153@thème

Composant-thème

@changement@changement154

Composant-changelog

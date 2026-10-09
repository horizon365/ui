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

## Utilisation

Utilisez le composant Carrousel pour afficher une liste d'éléments dans un carrousel.

::component-example
---
collapse: true
overflowHidden: true
name: 'carousel-example'
class: '!p-0'
---
::

::note
Utilisez votre souris pour faire glisser le carrousel horizontalement sur le bureau.
::

### Éléments

Utilisez le prop `items` comme un tableau et rendre chaque élément en utilisant l'emplacement par défaut:

::component-example
---
name: 'carousel-items-example'
class: 'p-8'
---
::

Vous pouvez également passer un tableau d'objets avec les propriétés suivantes:

- x`class?: any`xx{lang="ts-type"}
- x`ui?: { item?: ClassNameValue }`xx{lang="ts-type"}

Vous pouvez contrôler le nombre d'éléments visibles en utilisant les classes d'utilitaires [`basis`](https://tailwindcss.com/docs/flex-basis)/[`width`](https://tailwindcss.com/docs/width) sur le `item`:

::component-example
---
name: 'carousel-items-multiple-example'
class: 'p-8 px-16'
---
::

### Définition

Utilisez la prop `orientation` pour modifier l'orientation de Progress. Defaults à `horizontal`.

::note
Utilisez votre souris pour faire glisser le carrousel verticalement sur le bureau.
::

::component-example
---
name: 'carousel-orientation-example'
class: 'p-8'
---
::

::caution
Vous devez spécifier un `height` sur le conteneur en orientation verticale.
::

### flèches

Utilisez le prop `arrows` pour afficher les boutons précédent et suivant.

::component-example
---
name: 'carousel-arrows-example'
class: 'p-8'
---
::

### Prev/Suivant

Utilisez les accessoires `prev` et `next` pour personnaliser les boutons précédent et suivant avec n'importe quel accessoire [Button](xph053).

::component-example
---
name: 'carousel-prev-next-example'
class: 'p-8'
---
::

### Prev/Icônes suivantes

Utilisez les accessoires `prev-icon` et `next-icon` pour personnaliser les boutons [Icon](xph0666).

::component-example
---
name: 'carousel-prev-next-icon-example'
class: 'p-8'
options:
  - name: 'prevIcon'
    label: 'prevIcon'
    default: 'i-lucide-chevron-left'
  - name: 'nextIcon'
    label: 'nextIcon'
    default: 'i-lucide-chevron-right'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser ces icônes globalement dans votre `app.config.ts` sous la touche `ui.icons.arrowLeft`/`ui.icons.arrowRight`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser ces icônes globalement dans votre `vite.config.ts` sous la touche `ui.icons.arrowLeft`/`ui.icons.arrowRight`.
:::
::

### Dots

Utilisez le prop `dots` pour afficher une liste de points à faire défiler vers une diapositive spécifique.

::component-example
---
name: 'carousel-dots-example'
class: 'p-8 pb-12'
---
::

Le nombre de points est basé sur le nombre de diapositives affichées dans la vue:

::component-example
---
name: 'carousel-dots-multiple-example'
class: 'p-8 px-16 pb-12'
---
::

## Plugins

Le composant Carousel implémente le plugin officiel [Embla Carousel ](https://www.embla-carousel.com/docs/v8/plugins).

### Autoplay électronique

Ce plugin est utilisé pour étendre Embla Carousel avec la fonctionnalité **autoplay**.

Utilisez la prop `autoplay` en tant que booléen ou objet pour configurer le plugin [Autoplay ](https://www.embla-carousel.com/docs/v8/plugins/autoplay).

::component-example
---
name: 'carousel-autoplay-example'
class: 'p-8 px-16 pb-12'
---
::

::note
Dans cet exemple, nous utilisons la prop `loop` pour un carrousel infini.
::

### Auto Scroll électronique

Ce plugin est utilisé pour étendre Embla Carousel avec la fonctionnalité **auto scroll**.

Utilisez la prop `auto-scroll` en tant que booléen ou objet pour configurer le plugin [Auto Scroll ](https://www.embla-carousel.com/docs/v8/plugins/auto-scroll).

::component-example
---
name: 'carousel-auto-scroll-example'
class: 'p-8 px-16 pb-12'
---
::

::note
Dans cet exemple, nous utilisons la prop `loop` pour un carrousel infini.
::

### Auto Hauteur

Ce plugin est utilisé pour étendre Embla Carousel avec la fonctionnalité **auto height**. Il modifie la hauteur du conteneur de carrousel pour s'adapter à la hauteur de la diapositive la plus haute en vue.

Utilisez la prop `auto-height` en tant que booléen ou objet pour configurer le plugin [Auto Height ](https://www.embla-carousel.com/docs/v8/plugins/auto-height).

::component-example
---
name: 'carousel-auto-height-example'
class: 'p-8 pt-16'
---
::

::note
En este ejemplo, agregamos la clase `transition-[height]` en el contenedor para animar el cambio de altura.
::

### Clase

Class Names est un plugin utilitaire **class name toggle** pour Embla Carousel qui vous permet d'automatiser la bascule des noms de classe sur votre carrousel.

Utilisez la prop `class-names` en tant que booléen ou objet pour configurer le plugin noms de classe ](https://www.embla-carousel.com/docs/v8/plugins/class-names).

::component-example
---
name: 'carousel-class-names-example'
class: 'p-8'
---
::

::note
Dans cet exemple, nous ajoutons les classes `transition-opacity [&:not(.is-snapped)]:opacity-10` sur le `item` pour animer le changement d'opacité.
::

### Fade

Ce plugin est utilisé pour remplacer la fonctionnalité de défilement Embla Carousel par **fade transitions**.

Utilisez la prop `fade` en tant que booléen ou objet pour configurer le plugin [Fade ](xph159).

::component-example
---
name: 'carousel-fade-example'
class: 'p-8 pb-12'
---
::

### Wheel Gestes

Ce plugin est utilisé pour étendre Embla Carousel avec la possibilité d'utiliser la souris/trackpad wheel** pour naviguer dans le carrousel.

Utilisez la prop `wheel-gestures` en tant que booléen ou objet pour configurer le plugin [Wheel Gestures ](https://www.embla-carousel.com/docs/v8/plugins/wheel-gestures).

::note
Utilisez la molette de votre souris pour faire défiler le carrousel.
::

::component-example
---
name: 'carousel-wheel-gestures-example'
class: 'p-8 px-16'
---
::

## Exemples

### Avec vignettes

Vous pouvez utiliser la méthode [`scrollTo`](https://www.embla-carousel.com/docs/v8/api/methods#scrollto) sur [`emblaApi`xph186#expose) pour afficher les vignettes sous le carrousel qui naviguent vers une diapositive spécifique.

::component-example
---
name: 'carousel-thumbnails-example'
class: 'p-8 px-16'
---
::

## API

### Props équipements

:component-props

### Slots

:component-slots

### Emis

:component-emits

### Expose à

Vous pouvez accéder à l'instance du composant typé à l'aide de [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

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
| `emblaRef`x{lang="ts-type"}| `Ref<HTMLElement \| null>`{lang="ts-type"}|
| `emblaApi`{lang="ts-type"}| [x`Ref<EmblaCarouselType \| null>`x{lang="ts-type"}x](xhttps://www.embla-carousel.com/docs/v8/api/methods#typescriptx)|

## Thème

:component-theme

## Changelog

:component-changelog

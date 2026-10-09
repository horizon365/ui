---
description: Un carrusel con movimiento y deslizamiento construido con Embla.
category: data
keywords:
  - swiper
  - gallery
  - image slider
  - slideshow
links:
  - label: El Embla
    to: https://www.embla-carousel.com/docs/v8/api
    icon: i-custom-embla-carousel
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Carousel.vue
---

xph0000xUso

Utilice el componente Carrusel para mostrar una lista de elementos en un carrusel.

::component-example
---
collapse: true
overflowHidden: true
name: 'carousel-example'
class: '!p-0'
---
::

::note
Utilice el ratón para arrastrar el carrusel horizontalmente en el escritorio.
::

### Artículos

Utilice el prop `items` como una matriz y renderice cada elemento utilizando la ranura predeterminada:

::component-example
---
name: 'carousel-items-example'
class: 'p-8'
---
::

También puede pasar una matriz de objetos con las siguientes propiedades:

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Puede controlar cuántos elementos son visibles mediante el uso de las clases de utilidad [`basis`](https://tailwindcss.com/docs/flex-basis)/[`width`](https://tailwindcss.com/docs/width) en el `item`:

::component-example
---
name: 'carousel-items-multiple-example'
class: 'p-8 px-16'
---
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación de los valores predeterminados de Progress a `horizontal`.

::note
Utilice el ratón para arrastrar el carrusel verticalmente en el escritorio.
::

::component-example
---
name: 'carousel-orientation-example'
class: 'p-8'
---
::

::caution
Es necesario especificar un `height` en el contenedor en orientación vertical.
::

### Flechas

Utilice el accesorio `arrows` para mostrar los botones anterior y siguiente.

::component-example
---
name: 'carousel-arrows-example'
class: 'p-8'
---
::

### Prev/Siguiente

Utilice los accesorios `prev` y `next` para personalizar los botones anterior y siguiente con cualquier accesorio [Button](/docs/components/button).

::component-example
---
name: 'carousel-prev-next-example'
class: 'p-8'
---
::

### Prev/Siguiente Iconos

Utilice los accesorios `prev-icon` y `next-icon` para personalizar los botones [Icon](xph066).

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
Puede personalizar estos iconos globalmente en su `app.config.ts` bajo la tecla `ui.icons.arrowLeft`/`ui.icons.arrowRight`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar estos iconos globalmente en su `vite.config.ts` bajo la tecla `ui.icons.arrowLeft`/`ui.icons.arrowRight`.
:::
::

### Puntos

Utilice el prop `dots` para mostrar una lista de puntos para desplazarse a una diapositiva específica.

::component-example
---
name: 'carousel-dots-example'
class: 'p-8 pb-12'
---
::

El número de puntos se basa en el número de diapositivas que se muestran en la vista:

::component-example
---
name: 'carousel-dots-multiple-example'
class: 'p-8 px-16 pb-12'
---
::

## Plugins

El componente Carousel implementa el plugin oficial [Embla Carousel ](https://www.embla-carousel.com/docs/v8/plugins).

### Autoplay (Edición española)

Este plugin se utiliza para extender Embla Carousel con la funcionalidad **autoplay**.

Utilice la prop `autoplay` como un booleano o un objeto para configurar el plugin [Autoplay ](https://www.embla-carousel.com/docs/v8/plugins/autoplay).

::component-example
---
name: 'carousel-autoplay-example'
class: 'p-8 px-16 pb-12'
---
::

::note
En este ejemplo, estamos usando el prop `loop` para un carrusel infinito.
::

### Auto Scroll (Edición española)

Este plugin se utiliza para ampliar Embla Carousel con la funcionalidad **auto scroll**.

Utilice la prop `auto-scroll` como un booleano o un objeto para configurar el plugin [Auto Scroll ](https://www.embla-carousel.com/docs/v8/plugins/auto-scroll).

::component-example
---
name: 'carousel-auto-scroll-example'
class: 'p-8 px-16 pb-12'
---
::

::note
En este ejemplo, estamos usando el prop `loop` para un carrusel infinito.
::

### Auto Altura

Este plugin se utiliza para extender Embla Carousel con la funcionalidad **auto height**. Cambia la altura del contenedor del carrusel para que se ajuste a la altura de la diapositiva más alta a la vista.

Utilice el prop `auto-height` como un booleano o un objeto para configurar el plugin [Auto Height ](https://www.embla-carousel.com/docs/v8/plugins/auto-height).

::component-example
---
name: 'carousel-auto-height-example'
class: 'p-8 pt-16'
---
::

::note
En este ejemplo, añadimos la clase `transition-[height]` en el contenedor para animar el cambio de altura.
::

### Class Nombres

Class Names es un plugin de utilidad **class name toggle** para Embla Carousel que le permite automatizar la alternancia de nombres de clases en su carrusel.

Utilice la prop `class-names` como un booleano o un objeto para configurar el plugin [Class Names ](https://www.embla-carousel.com/docs/v8/plugins/class-names)

::component-example
---
name: 'carousel-class-names-example'
class: 'p-8'
---
::

::note
En este ejemplo, añadimos las clases `transition-opacity [&:not(.is-snapped)]:opacity-10` en el `item` para animar el cambio de opacidad.
::

### Fade (en inglés)

Este plugin se utiliza para reemplazar la funcionalidad de desplazamiento Embla Carousel con **fade transitions**.

Utilice la prop `fade` como un booleano o un objeto para configurar el plugin [Fade ](https://www.embla-carousel.com/docs/v8/plugins/fade).

::component-example
---
name: 'carousel-fade-example'
class: 'p-8 pb-12'
---
::

### Wheel Gestos

Este plugin se utiliza para ampliar Embla Carousel con la capacidad de usar el mouse/trackpad wheel** para navegar por el carrusel.

Utilice el prop `wheel-gestures` como un booleano o un objeto para configurar el plugin [Wheel Gestures ](https://www.embla-carousel.com/docs/v8/plugins/wheel-gestures).

::note
Utilice la rueda del ratón para desplazarse por el carrusel.
::

::component-example
---
name: 'carousel-wheel-gestures-example'
class: 'p-8 px-16'
---
::

## Ejemplos

### Con miniaturas

Puede usar el método [x`scrollTo`](https://www.embla-carousel.com/docs/v8/api/methods#scrollto) en [`emblaApi`](#expose) para mostrar miniaturas debajo del carrusel que navegan a una diapositiva específica.

::component-example
---
name: 'carousel-thumbnails-example'
class: 'p-8 px-16'
---
::

## API

### Props (accesorios)

:component-props

### Slots

:component-slots

### Emisiones

:component-emits

### Exposición

Puede acceder a la instancia de componente escrito utilizando [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const carousel = useTemplateRef('carousel')
</script>

<template>
  <UCarousel ref="carousel" />
</template>
```

Esto le dará acceso a lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| `emblaRef`x{lang="ts-type"} (Edición española)| `Ref<HTMLElement \| null>`x{lang="ts-type"}|
| `emblaApi`x{lang="ts-type"} (Edición española)| [x`Ref<EmblaCarouselType \| null>`x{lang="ts-type"}x](xhttps://www.embla-carousel.com/docs/v8/api/methods#typescriptx)|

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog

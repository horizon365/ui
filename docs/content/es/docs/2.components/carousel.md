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

@@pH000@@Uso del producto

Utilice el componente Carrusel para mostrar una lista de elementos en un carrusel.

::component-example
---
Colapso: Verdad
Desconocido: true
nombre: 'carousel-ejemplo'
Categoría:! p-0
---
::

::note
Utilice el ratón para arrastrar el carrusel horizontalmente en el escritorio.
::

@0001@Artículos

Utilice el prop `items` como una matriz y renderice cada elemento utilizando la ranura predeterminada:

::component-example
---
Nombre: 'carousel-items-example'
Categoría: P-8
---
::

También puede pasar una matriz de objetos con las siguientes propiedades:

@@
@@

Puede controlar cuántos elementos son visibles utilizando las clases de utilidad [`basis`](https://tailwindcss.com/docs/flex-basis)/[`width`]() en las clases de utilidad de la `item`:

::component-example
---
Nombre: 'carousel-items-multiple-example'
Categoría:'p-8 px-16'
---
::

@@20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `orientation` para cambiar la orientación del Progress. Defaults a `horizontal`.

::note
Utilice el ratón para arrastrar el carrusel verticalmente en el escritorio.
::

::component-example
---
nombre: 'carrusel-orientation-example'
Categoría: P-8
---
::

::caution
Es necesario especificar un `height` en el contenedor en orientación vertical.
::

@@24@24000 puntos

Utilice el prop `arrows` para mostrar los botones anterior y siguiente.

::component-example
---
Nombre: 'carrusel-flechas-ejemplo'
Categoría: P-8
---
::

@@P26@@Prev/Siguiente

Utilice los accesorios `prev` y `next` para personalizar los botones anterior y siguiente con cualquier accesorio [Button](/docs/components/button).

::component-example
---
Nombre: 'carousel-prev-next-exemple'
Categoría: P-8
---
::

### Prev/Siguiente Iconos

Utilice los accesorios `prev-icon` y `next-icon` para personalizar los botones [Icon](/docs/components/icon).

::component-example
---
Nombre del archivo: 'carousel-prev-next-icon-example'
Categoría: P-8
Opciones:
  - name:'previcon'(en inglés)
    Categoría:"Preview"
    por defecto: i-lucide-chevron-left
  @@nextIcon:'nextIcon'
    Categoría: NextIcon
    por defecto: i-lucide-chevron-right
---
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar estos iconos de forma global en su `app.config.ts` bajo `ui.icons.arrowLeft`/`ui.icons.arrowRight`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar estos iconos globalmente en su `vite.config.ts` bajo la tecla `ui.icons.arrowLeft`/`ui.icons.arrowRight`.
:::
::

@500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `dots` para mostrar una lista de puntos para desplazarse a una diapositiva específica.

::component-example
---
Nombre: 'carousel-dots-ejemplo'
Categoría: P-8 PB-12
---
::

El número de puntos se basa en el número de diapositivas que se muestran en la vista:

::component-example
---
Nombre: 'carousel-dots-multiple-example'
clase: 'p-8 px-16 pb-12'
---
::

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

El componente Carousel implementa el plugin oficial [Embla Carousel ](https://www.embla-carousel.com/docs/v8/plugins).

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Este plugin se utiliza para extender Embla Carousel con **autoplay** funcionalidad.

Utilice el prop `autoplay` como un booleano o un objeto para configurar el plugin [Autoplay ](https://www.embla-carousel.com/docs/v8/plugins/autoplay).

::component-example
---
Nombre: 'carrusel-autoplay-ejemplo'
clase: 'p-8 px-16 pb-12'
---
::

::note
En este ejemplo, estamos usando la prop `loop` para un carrusel infinito.
::

### Auto Scroll (Edición española)

Este plugin se utiliza para ampliar Embla Carousel con **auto scroll** funcionalidad.

Utilice el prop `auto-scroll` como un booleano o un objeto para configurar el plugin [Auto Scroll ](https://www.embla-carousel.com/docs/v8/plugins/auto-scroll).

::component-example
---
Nombre: 'carrusel-auto-scroll-example'
clase: 'p-8 px-16 pb-12'
---
::

::note
En este ejemplo, estamos usando la prop `loop` para un carrusel infinito.
::

### Auto Altura

Este plugin se utiliza para ampliar Embla Carousel con **auto height** funcionalidad. Cambia la altura del contenedor del carrusel para adaptarse a la altura de la diapositiva más alta a la vista.

Utilice el prop `auto-height` como un booleano o un objeto para configurar el plugin [Auto Height ](https://www.embla-carousel.com/docs/v8/plugins/auto-height).

::component-example
---
Nombre: 'carousel-auto-altura-ejemplo'
Categoría:'p-8 pt-16'
---
::

::note
En este ejemplo, agregamos la clase `transition-[height]` en el contenedor para animar el cambio de altura.
::

### Nombre de la clase

Class Names es un plugin de utilidad **class name toggle** para Embla Carousel que le permite automatizar la alternancia de nombres de clases en su carrusel.

Utilice el prop `class-names` como un booleano o un objeto para configurar el plugin [Nombres de clase ](https://www.embla-carousel.com/docs/v8/plugins/class-names).

::component-example
---
Nombre: 'carousel-class-names-example'
Categoría: P-8
---
::

::note
En este ejemplo, añadimos las clases `transition-opacity [&:not(.is-snapped)]:opacity-10` en el `item` para animar el cambio de opacidad.
::

@@F094@F094@F094

Este plugin se utiliza para reemplazar la funcionalidad de desplazamiento de Embla Carousel con **fade transitions**.

Utilice el prop `fade` como un booleano o un objeto para configurar el plugin [Fade ](https://www.embla-carousel.com/docs/v8/plugins/fade).

::component-example
---
Nombre: 'carousel-fade-example'
Categoría: P-8 PB-12
---
::

### Gestos de rueda

Este plugin se utiliza para ampliar Embla Carousel con la capacidad de **usar el mouse/trackpad wheel** para navegar por el carrusel.

Utilice el prop `wheel-gestures` como un booleano o un objeto para configurar el plugin [Wheel Gestures ](https://www.embla-carousel.com/docs/v8/plugins/wheel-gestures).

::note
Utilice la rueda del ratón para desplazarse por el carrusel.
::

::component-example
---
nombre: 'carrusel-rueda-gestures-ejemplo'
Categoría:'p-8 px-16'
---
::

@110@ejemplos

### Con miniaturas

Puede usar el método [`scrollTo`](https://www.embla-carousel.com/docs/v8/api/methods#scrollto) en [`emblaApi`](#expose) para mostrar miniaturas debajo del carrusel que navegue hasta una diapositiva específica.

::component-example
---
Nombre: 'carousel-miniaturas-ejemplo'
Categoría:'p-8 px-16'
---
::

@20122@Apid

@123@123@123@123

Componentes Props

@124@124@124

Componentes de slots

@125 @@ Emisiones

Componentes Emisiones

@126@126@126

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
| @141 @@@ 143 @|@142 @@@ 144 @|
| @145 @@@ 151 @|[`Ref<EmblaCarouselType \| null>`{lang="ts-type"}](https://www.embla-carousel.com/docs/v8/api/methods#typescript)|

@@153@153@153

Componente Tema

@1500@Changelog

Categoría: component-changelog

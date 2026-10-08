---
title: Páginas
description: 'Una sección de llamada a la acción para mostrar en tus páginas.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCTA.vue
---

@@pH000@@Uso del producto

El componente PageCTA proporciona una forma flexible de mostrar una llamada a la acción en sus páginas con una ilustración en la ranura predeterminada.

::code-preview

::u-page-c-t-a
---
Título:"Confiable y apoyado por nuestra increíble comunidad"
Vista previa de la última Tailwind CSS y empezar con Nuxt UI.
Orientación: Horizontal
izquierda:
  - label:"Inicio"
    Categoría:"Neutral"
  - label:'Más información'
    Categoría:"Neutral"
    Variación:"Sutil"
    Icono: 'i-lucide-arrow-right'
---

Vía: img{src="https://picsum.photos/640/616" width="320" height="308" alt="Illustration" class="w-full rounded-lg"}
::

::

Úselo dentro de un [PageSection](/docs/components/page-section) componente o directamente en su página:

```vue {4,8-10}
<template>
  <UPageHero />

  <UPageCTA class="rounded-none" />

  <UPageSection />

  <UPageSection :ui="{ container: 'px-0' }">
    <UPageCTA class="rounded-none sm:rounded-xl" />
  </UPageSection>

  <UPageSection />
</template>
```

::tip
Utilice `px-0` y `rounded-none` clases para hacer que el CTA llene el borde de la página en el móvil.
::

@@25@Título

Utilice el prop `title` para establecer el título de la CTA.

::component-code{slug="page-CTA"}
---
Props:
  Título:"Confiable y apoyado por nuestra increíble comunidad"
---
::

@27@Descripción

Utilice el prop `description` para establecer la descripción de la CTA.

::component-code{slug="page-CTA"}
---
Categoría: true
Ignora:
  @29@title
Props:
  Título:"Confiable y apoyado por nuestra increíble comunidad"
  "Hemos construido una asociación fuerte y duradera, su confianza es nuestra fuerza motriz, que nos impulsa hacia el éxito compartido".
---
::

@@pH030@enlaces

Utilice el prop `links` para mostrar una lista de [Button](/docs/components/button) bajo la descripción.

::component-code{slug="page-CTA"}
---
Categoría: true
Externo:
  @36@enlaces
Externalidades:
  @@@P37@@P37@@P37@@P37@@@P37@@P37@@P37@@P37@P37@@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37)
Ignora:
  @38@title
  @@ph039@descripción
  @400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Título:"Confiable y apoyado por nuestra increíble comunidad"
  "Hemos construido una asociación fuerte y duradera, su confianza es nuestra fuerza motriz, que nos impulsa hacia el éxito compartido".
  izquierda:
    - label:'Empezando'
      Categoría:"Neutral"
    - label:'Más información'
      Categoría:"Neutral"
      Variación:"Sutil"
      Icono: 'i-lucide-arrow-right'
---
::

@@43@Variante

Utilice el prop `variant` para cambiar el estilo de la CTA.

::component-code{slug="page-CTA"}
---
Categoría: true
Externo:
  @@45000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@@P046@@BotónProps []
Ignora:
  @@47@title
  @@ph048@descripción
  @494@enlaces
Props:
  Título:"Confiable y apoyado por nuestra increíble comunidad"
  "Hemos construido una asociación fuerte y duradera, su confianza es nuestra fuerza motriz, que nos impulsa hacia el éxito compartido".
  Categoría: Soft
  izquierda:
    - label:"Empezando"
      Categoría:"Neutral"
    - label:'Más información'
      Categoría:"Neutral"
      Variación:"Sutil"
      Icono: 'i-lucide-arrow-right'
---
::

::tip
Puede aplicar la clase `light` o `dark` a la ranura `links` cuando se utiliza la variante `solid` para invertir los colores.
::

@@P056@Orientación

Utilice el prop `orientation` para cambiar la orientación con la ranura predeterminada.

::component-code{slug="page-CTA"}
---
Categoría: true
Externo:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@@P060@@BotónProps []
Ignora:
  @@pH061@title (en inglés)
  @@ph062@descripción
  @@pH063@enlaces
Props:
  Título:"Confiable y apoyado por nuestra increíble comunidad"
  "Hemos construido una asociación fuerte y duradera, su confianza es nuestra fuerza motriz, que nos impulsa hacia el éxito compartido".
  Orientación: Horizontal
  izquierda:
    - label:"Empezando"
      Categoría:"Neutral"
    - label:'Más información'
      Categoría:"Neutral"
      Variación:"Sutil"
      Icono: 'i-lucide-arrow-right'
Los slots:
  Default:|

    @@@ 66 @
---

Vía: img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

### Reverse (Edición española)

Utilice el prop `reverse` para invertir la orientación de la ranura predeterminada.

::component-code{slug="page-CTA"}
---
Categoría: true
Externo:
  @700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@701@@buttonprops (en inglés)
Ignora:
  @@2007@título
  @@pH073@descripción
  @@74@enlaces
Props:
  Título:"Confiable y apoyado por nuestra increíble comunidad"
  "Hemos construido una asociación fuerte y duradera, su confianza es nuestra fuerza motriz, que nos impulsa hacia el éxito compartido".
  Orientación: Horizontal
  Reverso: Verdad
  izquierda:
    - label:"Empezando"
      Categoría:"Neutral"
    - label:'Más información'
      Categoría:"Neutral"
      Variación:"Sutil"
      Icono: 'i-lucide-arrow-right'
Los slots:
  Default:|

    @@777 @
---

Vía: img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

@799@@pccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc

@080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Artículo siguienteCOMPONENTES {slug="page-CTA"}

@@82000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes: {slug="page-CTA"}

@084@@Proyecto

Artículo siguiente{slug="page-CTA"}

@86@@Changelog

Categoría: component-changelog

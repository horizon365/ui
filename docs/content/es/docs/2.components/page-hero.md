---
title: Pagañón
description: 'Un héroe responsive para sus páginas.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHero.vue
---

@@pH000@@Uso del producto

El componente PageHero envuelve su contenido en un [Container](/docs/components/container) manteniendo la flexibilidad de ancho completo, lo que facilita la adición de colores de fondo, imágenes o patrones.

::code-preview

:::u-page-hero
---
Archivo de la etiqueta: Ultimate Vue UI Library
Descripción: A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.
---

::::u-page-card{variant="subtle" class="rounded-lg"}

![](/blocks/image4.png){width="960" height="540" class="rounded-sm shadow-2xl ring ring-default"}

::::

:::

::

@@pH000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `title` para establecer el título del héroe.

::component-code
---
Props:
  Archivo de la etiqueta: Ultimate Vue UI Library
---
::

@@pH012@Descripción

Utilice el prop `description` para establecer la descripción del héroe.

::component-code
---
Categoría: true
Ignora:
  @@14@título
Props:
  Archivo de la etiqueta: Ultimate Vue UI Library
  Descripción: A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.
---
::

@@15@@Encabezado

Utilice el prop `headline` para establecer el titular del héroe.

::component-code
---
Categoría: true
Ignora:
  @17@title (Edición española)
  @@pH018@descripción
Props:
  Archivo de la etiqueta: Ultimate Vue UI Library
  Descripción: A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.
  Título:"Nueva liberación"
---
::

@1919@@izquierda.

Utilice el prop `links` para mostrar una lista de [Button](/docs/components/button) bajo la descripción.

::component-code
---
Categoría: true
Externo:
  @@25@enlaces
Externalidades:
  @@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@26@266@26@266@26)
Ignora:
  @27@title
  @@ph028@descripción
  @@29@enlaces
Props:
  Archivo de la etiqueta: Ultimate Vue UI Library
  Descripción: Una biblioteca de interfaz de usuario integrada con Nuxt/Vue que proporciona un rico conjunto de componentes completamente diseñados, accesibles y altamente personalizables para crear aplicaciones web modernas.
  izquierda:
    - label:"Empezando"
      Inicio/docs/Getting-started
      Icono: 'i-lucide-square-play'
    - label:'Más información'
      en: '/docs/getting-started/theme/design-system'
      Categoría:"Neutral"
      Variación:"Sutil"
      Icono: 'i-lucide-arrow-right'
---
::

@@P032@@Orientación

Utilice el prop `orientation` para cambiar la orientación con la ranura por defecto.

::component-code
---
Categoría: true
Externo:
  @@35@enlaces
Externalidades:
  @@@P36@@@P360 [en línea]
Ignora:
  @@37@título
  @@ph038@descripción
  @@pH039@@titular
  @400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Archivo de la etiqueta: Ultimate Vue UI Library
  Descripción: A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.
  Título:"Nueva liberación"
  Orientación: Horizontal
  izquierda:
    - label:'Empezando'
      Inicio/docs/Getting-started
      Icono: 'i-lucide-square-play'
    - label:'Más información'
      en: '/docs/getting-started/theme/design-system'
      Categoría:"Neutral"
      Variación:"Sutil"
      Icono: 'i-lucide-arrow-right'
Los slots:
  Default:|

    @@@ 43 @
---

![App captura de pantalla ](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-default"}
::

@49@reversa

Utilice el prop `reverse` para invertir la orientación de la ranura predeterminada.

::component-code
---
Categoría: true
Externo:
  @@501@enlaces
Externalidades:
  @@52@552@552@552@552@552@552@552@552@552@552@552@552@552@552@552@552@552@552@552@552@552@55555)
Ignora:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@pH054@descripción
  @@500@@titular
  @@56@enlaces
Props:
  Archivo de la etiqueta: Ultimate Vue UI Library
  Descripción: A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.
  Título:"Nueva liberación"
  Orientación: Horizontal
  Reverso: Verdad
  izquierda:
    - label:"Empezando"
      Inicio/docs/Getting-started
      Icono: 'i-lucide-square-play'
    - label:'Más información'
      en: '/docs/getting-started/theme/design-system'
      Categoría:"Neutral"
      Variación:"Sutil"
      Icono: 'i-lucide-arrow-right'
Los slots:
  Default:|

    @@@ 59 @
---

![App captura de pantalla ](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-default"}
::

@@pH065

@666@6666

Componentes Props

@@P067@@Esfuerzos

Componentes de slots

@068 @@ Proyecto

Componente Tema

@@changelog

Categoría: component-changelog

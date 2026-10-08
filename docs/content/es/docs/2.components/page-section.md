---
title: PageSección
description: 'Una sección responsive para tus páginas.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageSection.vue
---

@@pH000@@Uso del producto

El componente PageSection envuelve el contenido en un [Contenedor ](/docs/components/container) manteniendo la flexibilidad de ancho completo, lo que facilita la adición de colores de fondo, imágenes o patrones.

::code-preview

::u-page-section
---
Título: Componentes de Beautiful Vue UI
Descripción: Nuxt UI proporciona un conjunto completo de componentes y utilidades para ayudarlo a crear aplicaciones web hermosas y accesibles con Vue y Nuxt.
Título:"Características"
Features:
  - title:'Iconos'(Edición española)
    Nuxt UI se integra con Nuxt Icon para acceder a más de 200.000 iconos de Iconify.
    icono: 'i-lucide-smile'
    a: '/docs/getting-started/integrations/icons'
  - title:'Fuentes'(en inglés)
    Nuxt UI se integra con Nuxt Fonts para proporcionar una optimización de fuentes plug-and-play.
    icono: 'i-lucide-a-grande-pequeño'
    en: '/docs/getting-started/integrations/fonts'
  - title:'Modo de color'
    La interfaz de usuario de Nuxt se integra con el modo de color de Nuxt para cambiar entre claro y oscuro.
    Icono: 'i-lucide-sun-moon'
    a: '/docs/getting-started/integrations/color-mode'
---
::

::

Úselo después de un [PageHero](/docs/components/page-hero) componente:

```vue {4}
<template>
  <UPageHero />

  <UPageSection />
</template>
```

@1919@Título

Utilice el prop `title` para establecer el título de la sección.

::component-code
---
Props:
  Título: Componentes de Beautiful Vue UI
---
::

@@21@Descripción

Utilice el prop `description` para establecer la descripción de la sección.

::component-code
---
Categoría: true
Ignora:
  @@23@título
Props:
  Título: Componentes de Beautiful Vue UI
  Descripción: Nuxt UI proporciona un conjunto completo de componentes y utilidades para ayudarlo a crear aplicaciones web hermosas y accesibles con Vue y Nuxt.
---
::

@@24@@Encabezamiento

Utilice el prop `headline` para establecer el título de la sección.

::component-code
---
Categoría: true
Ignora:
  @@26@título
  @@27@Descripción
Props:
  Título: Componentes de Beautiful Vue UI
  Descripción: Nuxt UI proporciona un conjunto completo de componentes y utilidades para ayudarlo a crear aplicaciones web hermosas y accesibles con Vue y Nuxt.
  Título:"Características"
---
::

@28@Icon

Utilice el prop `icon` para establecer el icono de la sección.

::component-code
---
Categoría: true
Ignora:
  @@pH030@título
  @@ph031@descripción
Props:
  Título: Componentes de Beautiful Vue UI
  Descripción: Nuxt UI proporciona un conjunto completo de componentes y utilidades para ayudarlo a crear aplicaciones web hermosas y accesibles con Vue y Nuxt.
  Archivo de la etiqueta: i-lucide-rocket
---
::

@@pH032@@Características

Utilice el prop `features` para mostrar una lista de [PageFeature](/docs/components/page-feature) bajo la descripción como una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@

Puede pasar cualquier propiedad del componente [Link](/docs/components/link#props) como `to`,`target`, etc.

::component-code
---
Categoría: true
Externo:
  @@pH056@@características
Externalidades:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Ignora:
  @@508@título
  @@pH059@descripción
  @@pH060@características
Props:
  Título: Componentes de Beautiful Vue UI
  Descripción: Nuxt UI proporciona un conjunto completo de componentes y utilidades para ayudarlo a crear aplicaciones web hermosas y accesibles con Vue y Nuxt.
  Características:
    - title:'Iconos'(Edición española)
      Nuxt UI se integra con Nuxt Icon para acceder a más de 200.000 iconos de Iconify.
      icono: 'i-lucide-smile'
      a: '/docs/getting-started/integrations/icons'
    - title:'Fuentes'(en inglés)
      Nuxt UI se integra con Nuxt Fonts para proporcionar una optimización de fuentes plug-and-play.
      icono: 'i-lucide-a-grande-pequeño'
      en: '/docs/getting-started/integrations/fonts'
    - title:'Modo de color'
      La interfaz de usuario de Nuxt se integra con el modo de color de Nuxt para cambiar entre claro y oscuro.
      Icono: 'i-lucide-sun-moon'
      a: '/docs/getting-started/integrations/color-mode'
---
::

@@pH064@enlaces

Utilice el prop `links` para mostrar una lista de [Button](/docs/components/button) bajo la descripción.

::component-code
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
  Título: Componentes de Beautiful Vue UI
  Descripción: Nuxt UI proporciona un conjunto completo de componentes y utilidades para ayudarlo a crear aplicaciones web hermosas y accesibles con Vue y Nuxt.
  izquierda:
    - label:"Empezando"
      Inicio/docs/Getting-started
      Icono: 'i-lucide-square-play'
      Categoría:"Neutral"
    - label:'Explorar componentes'
      en el archivo/docs/components/app
      Categoría:"Neutral"
      Variación:"Sutil"
      Icono: 'i-lucide-arrow-right'
---
::

@@777@Dirección

Utilice el prop `orientation` para cambiar la orientación con la ranura predeterminada.

::component-code
---
Categoría: true
Externo:
  - características
  @81@enlaces
Externalidades:
  @@P2008 @P2008 [en línea]
  @@@P083@@BotónProps []
Ignora:
  @084@título
  @@pH085@descripción
  @86@icon
  @@ph087@características
  @@888@enlaces
Props:
  Título: Componentes de Beautiful Vue UI
  Descripción: Nuxt UI proporciona un conjunto completo de componentes y utilidades para ayudarlo a crear aplicaciones web hermosas y accesibles con Vue y Nuxt.
  Archivo de la etiqueta: i-lucide-rocket
  Orientación: Horizontal
  Features:
    - title:'Iconos'(en inglés)
      Nuxt UI se integra con Nuxt Icon para acceder a más de 200.000 iconos de Iconify.
      icono: 'i-lucide-smile'
      a: '/docs/getting-started/integrations/icons'
    - title:'Fuentes'(en inglés)
      Nuxt UI se integra con Nuxt Fonts para proporcionar una optimización de fuentes plug-and-play.
      icono: 'i-lucide-a-grande-pequeño'
      en: '/docs/getting-started/integrations/fonts'
    - title:'Modo de color'
      La interfaz de usuario de Nuxt se integra con el modo de color de Nuxt para cambiar entre claro y oscuro.
      Icono: 'i-lucide-sun-moon'
      a: '/docs/getting-started/integrations/color-mode'
  izquierda:
    - label:'Explorar componentes'
      en el archivo/docs/components/app
      Categoría:"Neutral"
      Variación:"Sutil"
      Icono: 'i-lucide-arrow-right'
Los slots:
  Default:|

    @@pf093 @
---

Vía: img{src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

@@P095@Reverse (Edición española)

Utilice el prop `reverse` para invertir la orientación de la ranura predeterminada.

::component-code
---
Categoría: true
Externo:
  @@pH097@características
  @@pH098@enlaces
Externalidades:
  @@@P299@@P299 [en línea]
  @@P100@@Botón […]
Ignora:
  @101@title
  @@ph102@descripción
  @@pH103@icon
  @@F104@características
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Título: Componentes de Beautiful Vue UI
  Descripción: Nuxt UI proporciona un conjunto completo de componentes y utilidades para ayudarlo a crear aplicaciones web hermosas y accesibles con Vue y Nuxt.
  Archivo de la etiqueta: i-lucide-rocket
  Orientación: Horizontal
  Reverso: Verdad
  Características:
    - title:'Iconos'(Edición española)
      Nuxt UI se integra con Nuxt Icon para acceder a más de 200.000 iconos de Iconify.
      icono: 'i-lucide-smile'
      a: '/docs/getting-started/integrations/icons'
    - title:'Fuentes'(en inglés)
      Nuxt UI se integra con Nuxt Fonts para proporcionar una optimización de fuentes plug-and-play.
      icono: 'i-lucide-a-grande-pequeño'
      en: '/docs/getting-started/integrations/fonts'
    - title:'Modo de color'
      La interfaz de usuario de Nuxt se integra con el modo de color de Nuxt para cambiar entre claro y oscuro.
      Icono: 'i-lucide-sun-moon'
      a: '/docs/getting-started/integrations/color-mode'
  izquierda:
    - label:'Explorar componentes'
      En el archivo/docs/components/app
      Categoría:"Neutral"
      Variación:"Sutil"
      Icono: 'i-lucide-arrow-right'
Los slots:
  Default:|

    @@ 110 @
---

Vía: img{src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

@112

@@113@113@113

Componentes Props

@@114@114@114

Componentes de slots

@115 @@ Temas

Componente Tema

@116@Changelog

Categoría: component-changelog

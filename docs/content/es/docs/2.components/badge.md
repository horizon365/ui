---
description: Un texto corto para representar un estado o una categoría.
category: element
keywords:
  - tag
  - pill
  - label
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Badge.vue
---

@@pH000@@Uso del producto

Utilice la ranura predeterminada para establecer la etiqueta de la insignia.

::component-code
---
Los slots:
  Categoría: Badge
---
::

@0001@etiqueta

Utilice el prop `label` para establecer la etiqueta de la insignia.

::component-code
---
Props:
  Categoría: Badge
---
::

@000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `color` para cambiar el color de la insignia.

::component-code
---
Props:
  Color: Neutral
Los slots:
  Categoría: Badge
---
::

@@500@Variante

Utilice los props `variant` para cambiar la variante de la insignia.

::component-code
---
Props:
  Color: Neutro
  Categoría: Outline
Los slots:
  Categoría: Badge
---
::

@0007@Nombre

Utilice el prop `size` para cambiar el tamaño de la insignia.

::component-code
---
Props:
  Tamaño: XL
Los slots:
  Categoría: Badge
---
::

@009@Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro de la insignia.

::component-code
---
Props:
  Archivo de la etiqueta: i-lucide-rocket
  Tamaño: MD
  Color: Primario
  Variante: Sólido
Los slots:
  Categoría: Badge
---
::

Utilice los accesorios `leading` y `trailing` para establecer la posición del icono o los accesorios `leading-icon` y `trailing-icon` para establecer un icono diferente para cada posición.

::component-code
---
Props:
  Icono: i-lucide-arrow-right
  Tamaño: MD
Los slots:
  Categoría: Badge
---
::

@19@avatar

Utilice el prop `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro de la insignia.

::component-code
---
Categoría: true
Ignora:
  - avatar.carga
Props:
  El avatar:
    src: 'https://github.com/nuxt.png'
    Categoría: Lazy
  Tamaño: MD
  Color: Neutro
  Categoría: Outline
Los slots:
  Default:|

    El Badge
---
::

@26@Ejemplos

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Utilice el prop `class` para anular los estilos de base de la insignia.

::component-code
---
Props:
  Archivo de la etiqueta: font-bold round-full
Los slots:
  Categoría: Badge
---
::

@@pH030@@pH0300

@@301@Propuestas

Componentes Props

@@322@322@322@332@322@322@332@332@332@332@332@332@332@33222@3322222222333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333

Componentes de slots

@@333@@Proyecto

Componente Tema

@changelog @changelog

Categoría: component-changelog

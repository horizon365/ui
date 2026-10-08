---
description: Mostrar el contenido en una tarjeta con un encabezado, cuerpo y pie de página.
category: element
keywords:
  - panel
  - box
  - container
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Card.vue
---

@@pH000@@Uso del producto

Utilice las ranuras `header`,`default` y `footer` para añadir contenido a la tarjeta.

::component-code
---
Categoría: true
Escondido:
  @@clase004
Props:
  Categoría: w-full
Los slots:
  El header:|

    @@@ 005 @

  Default:|

    @@ 006 @

  footer:|

    @@@ 007 @
---

#header
por: placeholder{class="h-8"}

#por defecto
por: placeholder{class="h-32"}

#footer
por placeholder{class="h-8"}
::

### Título: badge{label="4.7+" class="align-text-top"}

Use the `title` prop to set the title of the Card's header.

::component-code
---
Categoría: true
Ignora:
  @@clase014
Props:
  Título:"Tarjeta con título"
  Categoría: w-full
Los slots:
  Default:|

    @@@ 15 @
---

#por defecto
por: placeholder{class="h-32"}
::

### Descripción: badge{label="4.7+" class="align-text-top"}

Utilice la `description` prop para establecer la descripción de la cabecera de la tarjeta.

::component-code
---
Categoría: true
Ignora:
  @200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@21@clase
Props:
  Título:"Tarjeta con descripción"
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit".
  Categoría: w-full
Los slots:
  Default:|

    @22
---

#por defecto
por placeholder{class="h-32"}
::

@@24@Variación

Utilice el prop `variant` para cambiar la variante de la tarjeta.

::component-code
---
Categoría: true
Escondido:
  @@26@clase
Props:
  Variación: Sutil
  Categoría: w-full
Los slots:
  El header:|

    @@ 27

  Default:|

    @@ 28

  footer:|

    @@ 29
---

#header
por placeholder{class="h-8"}

#por defecto
por placeholder{class="h-32"}

#footer
por placeholder{class="h-8"}
::

@3333@3333

@@30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@35000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@366@366

Componente Tema

@@changelog

Categoría: component-changelog

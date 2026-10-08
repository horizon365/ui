---
description: Separa el contenido horizontal o verticalmente.
category: element
keywords:
  - divider
  - hr
  - horizontal rule
links:
  - label: Separador
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/separator
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Separator.vue
---

@@pH000@@Uso del producto

Utilice el componente Separador para separar el contenido.

::component-code
---
Categoría: P-8
---
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación del Separator. Defaults a `horizontal`.

::component-code
---
Ignora:
  @@clase004
Categoría: P-8
Props:
  Orientación: Vertical
  Categoría: H-48
---
::

@@pH005@etiqueta

Utilice el prop `label` para mostrar una etiqueta en el centro del separador.

::component-code
---
Categoría: P-8
Props:
  Archivo de la etiqueta: "Hello World"
---
::

### Posición: badge{label="4.8+" class="align-text-top"}

Utilice el prop `position` para cambiar la posición del contenido del Separator. Defaults a `center`.

::component-code
---
Ignora:
  @@11@clase
Categoría: P-8
Props:
  Ubicación: Start
  Archivo de la etiqueta: "Hello World"
---
::

@@pH012@Icon

Utilice el prop `icon` para mostrar un icono en el centro del separador.

::component-code
---
Categoría: P-8
Props:
  icono: 'i-simple-icons-nuxtdotjs'
---
::

@14@avatar

Utilice el prop `avatar` para mostrar un avatar en el medio del Separador.

::component-code
---
Categoría: true
Categoría: P-8
Ignora:
  - avatar.carga
Props:
  El avatar:
    src: 'https://github.com/nuxt.png'
    Categoría: Lazy
---
::

@17@color

Utilice el prop `color` para cambiar el color del Separador. Predeterminados a `neutral`.

::component-code
---
Categoría: P-8
Props:
  Color: Primario
  Tipo: Sólido
---
::

@200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `type` para cambiar el tipo de Separator. Defaults a `solid`.

::component-code
---
Categoría: P-8
Props:
  Categoría: Fretted
---
::

@@23000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `size` para cambiar el tamaño del Separator. Defaults a `xs`.

::component-code
---
Categoría: P-8
Props:
  Tamaño: LG
---
::

@@26000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

@@27000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@28000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@@29@29000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@@changelog

Categoría: component-changelog

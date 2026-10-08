---
title: Pagelógos
description: 'Una lista de logotipos o imágenes para mostrar en sus páginas.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLogos.vue
---

@@pH000@@Uso del producto

El componente PageLogos proporciona una forma flexible de mostrar una lista de logotipos o imágenes en sus páginas.

::component-code
---
Colapso: Verdad
Categoría: true
Escondido:
  @001@clase
Ignora:
  @@2002@artículos
Props:
  Items:
    -  i-simple-iconos-github
    -  i-simple-iconos-discordia
    -  i-simple-iconos-x
    -  i-simple-iconos-instagram
    -  i-simple-iconos-linkedin
    -  i-simple-iconos-facebook
  Categoría: MB-10
---
::

@@pH009@@título

Utilice el prop `title` para establecer el título por encima de los logotipos.

::component-code
---
Categoría: true
Ignora:
  @@111111110
Escondido:
  @12000@clase
Props:
  Título:'Confiado por los mejores equipos de front-end'
  items:
    -  i-simple-iconos-github
    -  i-simple-iconos-discordia
    -  i-simple-iconos-x
    -  i-simple-iconos-instagram
    -  i-simple-iconos-linkedin
    -  i-simple-iconos-facebook
  Categoría: Mi-10
---
::

@1919@@Artículos

Puede mostrar los logotipos de dos maneras:

1. Usando el prop `items` para proporcionar una lista de logotipos. Cada elemento puede ser:
  - Un nombre de icono (por ejemplo,`i-simple-icons-github`)
  - Un objeto que contiene `src` y `alt` propiedades para imágenes, que se utilizarán en un componente `UAvatar`
2. Usando la ranura predeterminada para tener un control completo sobre el contenido

::tabs{class="gap-0"}

::component-example{label="con items"}
---
Nombre: 'page-logos-with-items'
clase: '[&> div]: mi-10'
---
::

::component-example{label="con ranura"}
---
Nombre: 'page-logos-with-slot'
clase: '[&> div]: mi-10'
---
::

::

@@301@marquee

Utilice el prop `marquee` para habilitar un efecto de marquesina para los logotipos.

::component-code
---
Categoría: true
Ignora:
  @@3333@artículos
  @@34@marquee
Escondido:
  @35@clase
Props:
  Título:'Confiado por los mejores equipos de front-end'
  Marcela: Verdad
  items:
    -  i-simple-iconos-github
    -  i-simple-iconos-discordia
    -  i-simple-iconos-x
    -  i-simple-iconos-instagram
    -  i-simple-iconos-linkedin
    -  i-simple-iconos-facebook
  Categoría: Mi-10
---
::

::note{to="/docs/components/marquee"}
Cuando utiliza el modo `marquee`, puede personalizar su comportamiento pasando props. Para obtener más información, consulte el componente `Marquee`.
::

@@444@4444 años

@@45000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@46000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@477@themes

Componente Tema

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Categoría: component-changelog

---
description: 'Un componente para crear contenido de desplazamiento infinito.'
category: data
keywords:
  - ticker
  - scroller
  - carousel
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Marquee.vue
---

@@pH000@@Uso del producto

Utilice la ranura predeterminada con su contenido para crear una animación de desplazamiento infinito.

::component-code
---
Categoría: true
Los slots:
  Default:|

    @@ 001 @
    @@ 002 @
    @@@ 003
    @@ 004 @
    @@@ 005 @
    @@ 006 @
---
por: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

::tip
La animación se deshabilita automáticamente cuando el usuario prefiere el movimiento reducido, el contenido se muestra de forma estática en su lugar.
::

### Pausa en el Hover

Utilice el prop `pause-on-hover` para pausar la animación cuando el usuario pasa el cursor sobre el contenido.

::component-code
---
Categoría: true
Props:
  PauseOnHover: Verdad
Los slots:
  Default:|

    @@@ 15 @
    @@@ 16 @
    @@@ 17 @
    @@@ 18 @
    @@@ 19 @
    @@ 20
---
por: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

@27@reversa

Utilice el prop `reverse` para invertir la dirección de la animación.

::component-code
---
Categoría: true
Props:
  Reverso: Verdad
Los slots:
  Default:|

    @@ 29
    @@@ 30 @
    @@@ 31 @
    @@@ 32 @
    @@@ 33 @
    @@@ 34 @
---
por: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### Orientación

Utilice el prop `orientation` para cambiar la dirección de desplazamiento.

::component-code
---
Categoría: true
Categoría: H-96
Props:
  Categoría:"Vertical"
Los slots:
  Default:|

    @@@ 43 @
    @@ 44 @
    @@@ 45 @
    @@@ 46 @
    @@pf047 @
    @@@ 48 @
---
por: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

@@505 @ Repetir

Utilice el prop `repeat` para especificar cuántas veces se debe repetir el contenido en la animación.

::component-code
---
Categoría: true
Props:
  Repetición: 6
Los slots:
  Default:|

    @@@ 57 @
    @@@ 58 @
    @@@ 59 @
    @@@ 060 @
    @@@ 061
    @@@ 062 @
---
por: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

@069@@espanol

Utilice el prop `overlay` para eliminar las superposiciones de gradiente en los bordes de la marquesina.

::component-code
---
Categoría: true
Props:
  Reseña: False
Los slots:
  Default:|

    @@pf071 @
    @2007
    @@pf073 @
    @@pf074 @
    @@@ 75 @
    @@pf076 @
---
por: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
por: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

@083 Ejemplos

@084 Comentarios

Utilice el componente `Marquee` para crear una animación de desplazamiento infinito para sus testimonios.

::component-example{label="con items"}
---
Categoría: true
Nombre: 'Testimonios'
Colapso: Verdad
Desconocido: true
Categoría: PX-0
---
::

@@ph087@screenshots

Utilice el componente `Marquee` para crear una animación de desplazamiento infinito para sus capturas de pantalla.

::component-example{label="con screenshots"}
---
Categoría: true
Nombre: 'marquee-screenshots'
Colapso: Verdad
Desconocido: true
Categoría:! p-0
---
::

@@pH090@@pH0000

@091@091@0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@P2000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@093@@Proyecto

Componente Tema

@@changelog

Categoría: component-changelog

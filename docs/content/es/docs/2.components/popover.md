---
description: Un diálogo no modal que flota alrededor de un elemento trigger.
category: overlay
keywords:
  - hover card
  - flyout
links:
  - label: La HoverCard
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/hover-card
  - label: popover
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/popover
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Popover.vue
---

@@pH000@@Uso del producto

Utilice un [Button](/docs/components/button) o cualquier otro componente en la ranura predeterminada del Popover.

A continuación, utilice la ranura `#content` para añadir el contenido que se muestra cuando el Popover está abierto.

::component-code
---
Categoría: true
Los slots:
  Default:|

    @@ 006 @

  Contenido:|

    @@@ 007 @
---

El botón {label="Open" color="neutral" variant="subtle"}

#Contenido
por: placeholder{class="size-48 m-4 inline-flex"}
::

@100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el `mode` prop para cambiar el modo de la Popover. Defaults a `click`.

::tip
En el modo `hover`, configure el accesorio `enable-touch` para que los usuarios alternen el Popover tocando el disparador en dispositivos táctiles, o use el modo `click` para los disparadores destinados a ser tocados.
::

::component-code
---
Categoría: true
items:
  Moda:
    @16@click16
    @170@hover (en inglés)
Props:
  Categoría:"Hover"
  EnableTouch: Verdad
Los slots:
  Default:|

    @@@ 18 @

  Contenido:|

    @@@ 19 @
---

Botón {label="Open" color="neutral" variant="subtle"}

#Contenido
por placeholder{class="size-48 m-4 inline-flex"}
::

::note
Cuando se utiliza el modo `hover`, se utiliza el componente Reka UI [`HoverCard`](https://reka-ui.com/docs/components/hover-card) en lugar del componente [`Popover`](https://reka-ui.com/docs/components/popover).
::

@@333@3333@3333@3333

Cuando se utiliza el modo `hover`, puede utilizar los accesorios `open-delay` y `close-delay` para controlar el retardo antes de que se abra o cierre el Popover.

::component-code
---
Categoría: true
Ignora:
  @37@@mode
Props:
  Categoría:"Hover"
  Desplazamiento: 500
  Desplazamiento: 300
Los slots:
  Default:|

    @@@ 38 @

  Contenido:|

    @@@ 39 @
---

Botón {label="Open" color="neutral" variant="subtle"}

#of content
por: placeholder{class="size-48 m-4 inline-flex"}
::

@@42@Contenido

Utilice el prop `content` para controlar cómo se representa el contenido de Popover, como su `align` o `side` por ejemplo.

::component-code
---
Categoría: true
items:
  content.align:
    @46@Inicio
    @474@Centro de Información
    @48@@final
  content.side:
    @49@@derecha
    @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @51@Top
    @525@abajo
Props:
  Contenido:
    Alineación: Centro
    Categoría: Bottom
    Desplazamiento: 8
Los slots:
  Default:|

    @@@ 53 @

  Contenido:|

    @@ 54 @
---

by: u-button {label="Open" color="neutral" variant="subtle"}

#of content
por {class="size-48 m-4 inline-flex"}
::

@@F057@Flecha

Utilice el prop `arrow` para mostrar una flecha en el Popover.

::component-code
---
Categoría: true
Ignora:
  @@509@Arreaza
Props:
  Arrow: Verdad
Los slots:
  Default:|

    @@@ 060 @

  Contenido:|

    @@@ 061
---

El botón {label="Open" color="neutral" variant="subtle"}

#Contenido
por: placeholder{class="size-48 m-4 inline-flex"}
::

### Modal

Utilice el prop `modal` para controlar si el Popover bloquea la interacción con el contenido externo.

::component-code
---
Categoría: true
Ignora:
  @@767@título
Props:
  Modalidad: True
Los slots:
  Default:|

    @@@ 068

  Contenido:|

    @@pf069 @
---

Botón {label="Open" color="neutral" variant="subtle"}

#Contenido
por @ph071
::

@@72@@descalificación

Utilice el prop `dismissible` para controlar si el Popover es descartable al hacer clic fuera de él o al presionar escape.

::note
Se emitirá un evento `close:prevent` cuando el usuario intente cerrarlo.
::

::component-example
---
nombre: 'popover-dismissible-example'
---
::

@@pH076@Ejemplos

### Control estado abierto

Puede controlar el estado abierto utilizando la directiva `default-open` o la directiva `v-model:open`.

::component-example
---
Nombre: 'popover-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el Popover presionando: kbd{value="O"}.
::

### Con paleta de comandos

Puede usar un componente [CommandPalette](/docs/components/command-palette) dentro del contenido del Popover.

::component-example
---
Colapso: Verdad
Nombre: 'popover-command-palette-example'
---
::

### Con el siguiente cursor

Puede hacer que el Popover siga el cursor al pasar el cursor sobre un elemento usando el prop [`reference`](https://reka-ui.com/docs/components/tooltip#trigger):

::component-example
---
Nombre: 'popover-cursor-ejemplo'
---
::

### Con ranura de anclaje

Puede utilizar la ranura `#anchor` para posicionar el Popover contra un elemento personalizado.

::warning
Esta ranura sólo funciona cuando `mode` es `click`.
::

::component-example
---
Colapso: Verdad
Nombre: 'popover-anchor-slot-example'
---
::

@101

@200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@103@103@103

Componentes de slots

::note
La función `close` solo está disponible cuando `mode` está configurada en `click` porque Reka UI expone esto para [`Popover`](PH1112 @ pero no para [`HoverCard`](https://reka-ui.com/docs/components/hover-card).
::

@117@117@117

Componentes Emisiones

@118

Componente Tema

@@111@Changelog en Español

Categoría: component-changelog

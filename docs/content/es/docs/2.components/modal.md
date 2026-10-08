---
description: Una ventana de diálogo que se puede utilizar para mostrar un mensaje o solicitar la entrada del usuario.
category: overlay
keywords:
  - dialog
  - popup
  - confirm
  - alert dialog
links:
  - label: El diálogo
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Modal.vue
---

@@pH000@@Uso del producto

Utilice un [Button](/docs/components/button) o cualquier otro componente en la ranura predeterminada del Modal.

A continuación, utilice la ranura `#content` para añadir el contenido que se muestra cuando el Modal está abierto.

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
por: placeholder{class="h-48 m-4"}
::

También puede utilizar las ranuras `#header`{lang="ts-type"},`#body`{lang="ts-type"} y `#footer`{lang="ts-type"} para personalizar el contenido del Modal.

@16@Título

Utilice el prop `title` para establecer el título de la cabecera del Modal.

::component-code
---
Categoría: true
Props:
  Título:"Modal con título"
Los slots:
  Default:|

    @@@ 18 @

  cuerpo:|

    @@@ 19 @
---

Botón {label="Open" color="neutral" variant="subtle"}

#cuerpo
por placeholder{class="h-48"}
::

@@222@Descripción

Utilice el prop `description` para establecer la descripción de la cabecera del Modal.

::component-code
---
Categoría: true
Ignora:
  @24@title
Props:
  Título:"Modal con descripción"
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit".
Los slots:
  Default:|

    @@ 25

  cuerpo:|

    @@ 26 @
---

por: u-button {label="Open" color="neutral" variant="subtle"}

#cuerpo
por placeholder{class="h-48"}
::

@@29@Cerrar

Utilice el prop `close` para personalizar u ocultar el botón de cierre (con el valor `false`) que se muestra en el encabezado del Modal.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
Categoría: true
Ignora:
  @36@title
  - close.color (en inglés)
  - close.variante
Props:
  Título:'Modal con botón de cierre'
  Cerrado:
    Color: Primario
    Categoría: Outline
    Categoría:"Round-full"
Los slots:
  Default:|

    @@@ 39 @

  cuerpo:|

    @@ 40 @
---

Botón {label="Open" color="neutral" variant="subtle"}

#cuerpo
por @ph042
::

::tip
El botón de cierre no se muestra si se utiliza la ranura `#content`, ya que es parte del encabezado.
::

### Cerrar Icono

Utilice el prop `close-icon` para personalizar el botón de cierre [Icon](/docs/components/icon).

::component-code
---
Categoría: true
Ignora:
  @@501@title
Props:
  Título:'Modal con botón de cierre'
  Icono: 'i-lucide-arrow-right'
Los slots:
  Default:|

    @@ 52 @

  cuerpo:|

    @@@ 53 @
---

Botón {label="Open" color="neutral" variant="subtle"}

#cuerpo
por: placeholder{class="h-48"}
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.close`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.close`.
:::
::

### transición

Utilice el prop `transition` para controlar si el Modal está animado o no. Por defecto a `true`.

::component-code
---
Categoría: true
Ignora:
  @@pH063@título
Props:
  Transición: Falso
  Título:"Modal sin transición"
Los slots:
  Default:|

    @@@ 064 @

  cuerpo:|

    @@@ 065 @
---

El botón {label="Open" color="neutral" variant="subtle"}

#cuerpo
por @ph067
::

@068@@espanol

Utilice el prop `overlay` para controlar si el Modal tiene una superposición o no. Por defecto a `true`.

::component-code
---
Categoría: true
Ignora:
  @@701@title
Props:
  Reseña: False
  Título:"Sin la sombra"
Los slots:
  Default:|

    @2007

  cuerpo:|

    @@pf073 @
---

por: u-button {label="Open" color="neutral" variant="subtle"}

#cuerpo
por @ph075
::

@766@@Models

Utilice el prop `modal` para controlar si el Modal bloquea la interacción con el contenido externo.

::note
Cuando `modal` se establece en `false`, la superposición se deshabilita automáticamente y el contenido externo se vuelve interactivo.
::

::component-code
---
Categoría: true
Ignora:
  @081@title (Edición española)
Props:
  Modalidad: Falso
  Categoría: Modal Interactive
Los slots:
  Default:|

    @@2008 @

  cuerpo:|

    @@pf083 @
---

El botón {label="Open" color="neutral" variant="subtle"}

#cuerpo
por @ph085
::

@086@@descalificación

Utilice el prop `dismissible` para controlar si el Modal es descartable al hacer clic fuera de él o al presionar escape.

::note
Se emitirá un evento `close:prevent` cuando el usuario intente cerrarlo.
::

::tip
Puede combinar `modal: false` con `dismissible: false` para hacer que el fondo del Modal sea interactivo sin cerrarlo.
::

::component-code
---
Categoría: true
Ignora:
  @@2009@título
Props:
  Desaparición: Falso
  Modalidad: True
  Título:"Indestructible"
Los slots:
  Default:|

    @@pf093 @

  cuerpo:|

    @@pf094 @
---

Botón {label="Open" color="neutral" variant="subtle"}

#cuerpo
por @ph096
::

### Scrollable: badge{label="4.2+" class="align-text-top"}

Utilice el prop `scrollable` para hacer que el contenido del Modal se pueda desplazar dentro de la superposición.

::warning
Como la superposición es necesaria para el desplazamiento,`modal: false` no es compatible y `overlay: false` solo elimina el fondo.
::

::component-code
---
Categoría: true
Ignora:
  @2010@título
Props:
  Descripcion: true
  Reseña: True
  Categoría: Modal Scrollable
Los slots:
  Default:|

    @@pH103 @

  cuerpo:|

    @@@ 104 @
---

Botón {label="Open" color="neutral" variant="subtle"}

#cuerpo
por: placeholder{class="h-screen"}
::

::caution
Hay un [known issue](https://reka-ui.com/docs/components/dialog#scrollable-overlay) donde hacer clic en la barra de desplazamiento puede cerrar involuntariamente el diálogo en algunos sistemas operativos.
::

@@111@Fullscreen (Edición española)

Utilice el `fullscreen` prop para hacer que la pantalla completa Modal.

::component-code
---
Categoría: true
Ignora:
  @113@title
  @@F114@@fullscreen (Edición española)
Props:
  Archivo de la etiqueta: True
  Categoría: Modal Fullscreen
Los slots:
  Default:|

    @@@ 115 @

  cuerpo:|

    @116 @
---

Botón {label="Open" color="neutral" variant="subtle"}

#cuerpo
por @ph118 @
::

### Unmount: badge{label="4.10+" class="align-text-top"}

Utilice el prop `unmount-on-hide` para evitar que el contenido de la Modal se desmonte cuando se cierra.

::component-code
---
Categoría: true
Ignora:
  @123@title
Props:
  Desconocido: Falso
  Título: Modal
Los slots:
  Default:|

    @@ 124 @

  cuerpo:|

    @@@ 125 @
---

Botón {label="Open" color="neutral" variant="subtle"}

#cuerpo
por @ph127 @
::

::note
Puede inspeccionar el DOM para ver el contenido del Modal que se está renderizando incluso mientras está cerrado.
::

::tip
Cuando el `portal` prop se establece en `false`, el contenido también se representa en el servidor. Esto es útil para representar un modal abierto durante SSR sin un flash en la carga de la página, o para exponer su contenido para SEO.
::

@@pH130@Ejemplos

### Control estado abierto

Puede controlar el estado abierto mediante la directiva `default-open` o la directiva `v-model:open`.

::component-example
---
Nombre: 'modal-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el Modal presionando: kbd{value="O"}.
::

::tip
Esto le permite mover el disparador fuera del modal o eliminarlo por completo.
::

### Uso de programación

Puede utilizar el [`useOverlay`](/docs/composables/use-overlay) composable para abrir un Modal programáticamente.

::warning
Asegúrese de envolver su aplicación con el componente [`App`](/docs/components/app) que utiliza el componente [`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue).
::

En primer lugar, crear un componente modal que se abrirá por programación:

::component-example
---
Categoría: true
Nombre: 'Modelo'
Reseña: Falso
---
::

::note
Estamos emitiendo un evento `close` cuando el modal está cerrado o despedido aquí. Puede emitir cualquier dato a través del evento `close`, y esos datos se convierten en el valor resuelto de `open()`. El evento debe emitirse para que la promesa se resuelva.
::

A continuación, utilízalo en tu app:

::component-example
---
Nombre: 'modal-programático-ejemplo'
---
::

::tip
Puede cerrar el modal dentro del componente modal emitiendo `emit('close')`.
::

### Anidados modales

Puedes anidar modales entre sí.

::component-example
---
Nombre: 'modal-nided-example'
---
::

### Con ranura de pie de página

Utilice la ranura `#footer` para añadir contenido después del cuerpo del Modal.

::component-example
---
Nombre: 'modal-footer-slot-example'
---
::

### Con la paleta de comandos

Puede utilizar un componente [CommandPalette](/docs/components/command-palette) dentro del contenido del Modal.

::component-example
---
Colapso: Verdad
Nombre: 'modal-command-palette-example'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false` para obtener datos solo cuando se abre el Modal.
::

@@pH170@@pH170

@171@171@171

Componentes Props

@2017@espanol

Componentes de slots

@@173@173@173

Componentes Emisiones

@174 @@ Proyecto

Componente Tema

@175@Changelog en Español

Categoría: component-changelog

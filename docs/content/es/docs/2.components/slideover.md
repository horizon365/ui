---
description: Un diálogo que se desliza desde cualquier lado de la pantalla.
category: overlay
keywords:
  - sheet
  - side panel
  - off-canvas
links:
  - label: El diálogo
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slideover.vue
---

@@pH000@@Uso del producto

Utilice un [Button](/docs/components/button) o cualquier otro componente en la ranura predeterminada de la Slideover.

A continuación, utilice la ranura `#content` para añadir el contenido que se muestra cuando la diapositiva está abierta.

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
por: placeholder{class="h-full m-4"}
::

También puede usar las ranuras `#header`{lang="ts-type"},`#body`{lang="ts-type"} y `#footer`{lang="ts-type"} para personalizar el contenido de la diapositiva.

@16@Título

Utilice el `title` prop para establecer el título del encabezado de la diapositiva.

::component-code
---
Categoría: true
Props:
  Título: Slideover con título
Los slots:
  Default:|

    @@@ 18 @

  cuerpo:|

    @@@ 19 @
---

Botón {label="Open" color="neutral" variant="subtle"}

#cuerpo
por placeholder{class="h-full"}
::

@@222@Descripción

Utilice el prop `description` para establecer la descripción del encabezado de la diapositiva.

::component-code
---
Categoría: true
Ignora:
  @24@title
Props:
  Título: Slideover con Descripción
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit".
Los slots:
  Default:|

    @@ 25

  cuerpo:|

    @@ 26 @
---

por: u-button {label="Open" color="neutral" variant="subtle"}

#cuerpo
por placeholder{class="h-full"}
::

@@29@Cerrar

Utilice el prop `close` para personalizar u ocultar el botón de cierre (con el valor `false`) que se muestra en el encabezado de la diapositiva.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
Categoría: true
Ignora:
  @36@title
  - close.color (en inglés)
  - close.variante
Props:
  Título: Slideover con botón de cierre
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

::note
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
  Título: Slideover con botón de cierre
  Icono: 'i-lucide-arrow-right'
Los slots:
  Default:|

    @@ 52 @

  cuerpo:|

    @@@ 53 @
---

Botón {label="Open" color="neutral" variant="subtle"}

#cuerpo
por: placeholder{class="h-full"}
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

@@pH060

Utilice el prop `side` para establecer el lado de la pantalla donde se deslizará la diapositiva de. Defaults a `right`.

::component-code
---
Categoría: true
Ignora:
  @@pH063@título
Props:
  Categoría:"Left"
  Título: Slideover con un lado
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

### Inset: badge{label="4.3+" class="align-text-top"}

Utilice el prop `inset` para insertar el Slideover desde los bordes.

::component-code
---
Categoría: true
Ignora:
  @@701@title
Props:
  Categoría:"Right"
  Inserción: True
  Título: Slideover con inserción
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

@@776@transición

Utilice el prop `transition` para controlar si el Slideover está animado o no. Por defecto a `true`.

::component-code
---
Categoría: true
Ignora:
  @79@title
Props:
  Transición: Falso
  Título: Slideover sin transición
Los slots:
  Default:|

    @@ 080 @

  cuerpo:|

    @@@ 081 @
---

El botón {label="Open" color="neutral" variant="subtle"}

#cuerpo
por @ph083
::

@@80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `overlay` para controlar si el Slideover tiene una superposición o no. Por defecto a `true`.

::component-code
---
Categoría: true
Ignora:
  @087 @ Título
Props:
  Reseña: False
  Título: Slideover sin superposición
Los slots:
  Default:|

    @@@ 088 @

  cuerpo:|

    @@pf089 @
---

Botón {label="Open" color="neutral" variant="subtle"}

#cuerpo
por @ph091
::

@2009@@Models

Utilice el prop `modal` para controlar si el Slideover bloquea la interacción con el contenido externo.

::note
Cuando `modal` se establece en `false`, la superposición se deshabilita automáticamente y el contenido externo se vuelve interactivo.
::

::component-code
---
Categoría: true
Ignora:
  @@pH097@título
Props:
  Modalidad: Falso
  Presentación de Slideover Interactive
Los slots:
  Default:|

    by @ph098

  cuerpo:|

    @@pH099 @
---

Botón {label="Open" color="neutral" variant="subtle"}

#cuerpo
por: placeholder{class="h-full"}
::

@@102@@desmentidos

Utilice el prop `dismissible` para controlar si el Slideover es descartable al hacer clic fuera de él o al presionar escape.

::note
Se emitirá un evento `close:prevent` cuando el usuario intente cerrarlo.
::

::tip
Puede combinar `modal: false` con `dismissible: false` para hacer que el fondo de la diapositiva sea interactivo sin cerrarlo.
::

::component-code
---
Categoría: true
Ignora:
  @@808@título
Props:
  Desaparición: Falso
  Modalidad: True
  Título en V. O: Slideover Nondismissible
Los slots:
  Default:|

    @@pH109 @

  cuerpo:|

    @@ 110 @
---

Botón {label="Open" color="neutral" variant="subtle"}

#cuerpo
por @ph112 @
::

### Unmount: badge{label="4.10+" class="align-text-top"}

Utilice el prop `unmount-on-hide` para evitar que el contenido del Slideover se desmonte cuando se cierra.

::component-code
---
Categoría: true
Ignora:
  @117@título
Props:
  Desconocido: Falso
  Categoría: Slideover
Los slots:
  Default:|

    @118 @

  cuerpo:|

    @@119 @
---

Botón {label="Open" color="neutral" variant="subtle"}

#cuerpo
por @ph121 @
::

::note
Puede inspeccionar el DOM para ver el contenido del Slideover que se está renderizando incluso mientras está cerrado.
::

::tip
Cuando el `portal` prop se establece en `false`, el contenido también se representa en el servidor. Esto es útil para representar una presentación de diapositivas abierta durante SSR sin un flash en la carga de la página, o para exponer su contenido para SEO.
::

@@ph124@Ejemplos

### Estado abierto de Control

Puede controlar el estado abierto utilizando la directiva `default-open` o la directiva `v-model:open`.

::component-example
---
Nombre: 'slideover-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar la diapositiva presionando: kbd{value="O"}.
::

::tip
Esto le permite mover el disparador fuera del Slideover o eliminarlo por completo.
::

### Uso de programación

Puede usar el [`useOverlay`](/docs/composables/use-overlay) composable para abrir una presentación de diapositivas de forma programática.

::warning
Asegúrese de envolver su aplicación con el componente [`App`](/docs/components/app) que utiliza el componente [`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue).
::

En primer lugar, cree un componente de diapositiva que se abrirá mediante programación:

::component-example
---
Categoría: true
Nombre: 'slide'
Reseña: Falso
---
::

::note
Estamos emitiendo un evento `close` cuando la diapositiva se cierra o se descarta aquí. Puede emitir cualquier dato a través del evento `close`, y esos datos se convierten en el valor resuelto de `open()`. El evento debe emitirse para que la promesa se resuelva.
::

A continuación, utilízalo en tu app:

::component-example
---
Nombre: 'slideover-programmatic-example'
---
::

::tip
Puede cerrar la diapositiva dentro del componente de diapositiva emitiendo `emit('close')`.
::

### Anidados deslizamientos

Pueden anidar deslizamientos entre sí.

::component-example
---
Nombre: 'slideover-nided-example'
---
::

### Con ranura de pie de página

Utilice la ranura `#footer` para agregar contenido después del cuerpo de la diapositiva.

::component-example
---
Nombre: 'slideover-footer-slot-example'
---
::

@@pH157 @@ Español

@158@158@158

Componentes Props

@159@@espanol

Componentes de slots

@160@160@160

Componentes Emisiones

@161 @@ Proyecto

Componente Tema

@2016@Changelog

Categoría: component-changelog

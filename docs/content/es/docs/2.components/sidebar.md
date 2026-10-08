---
description: 'Una barra lateral plegable con múltiples variantes visuales.'
category: layout
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Sidebar.vue
---

@@pH000@@Uso del producto

El componente Sidebar es una barra lateral independiente y fija que empuja el contenido de la página. En el escritorio, se representa en línea y se puede contraer; en el móvil, abre un [Modal](/docs/components/modal),[Slideover](/docs/components/slideover) o [Drawer](/docs/components/drawer).

::tip{to="/docs/components/dashboard-sidebar"}
**Sidebar vs DashboardSidebar**Este componente es una barra lateral simple e independiente que puede colocar en cualquier lugar (panel de chat, configuración, navegación). Si necesita arrastrar para cambiar el tamaño, persistencia de estado e integración con [DashboardGroup](/docs/components/dashboard-group), En su lugar, utilice [DashboardSidebar](/docs/components/dashboard-sidebar).
::

Utilice las ranuras `header`,`default` y `footer` para personalizar el contenido de la barra lateral. La directiva `v-model:open` es consciente de la vista del puerto: en el escritorio controla el estado expandido/colapsado, en el móvil controla el menú.

::component-example
---
Colapso: Verdad
Categoría: true
Nombre: 'sidebar-ejemplo'
Desconocido: true
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

@@27@Variación

Utilice el prop `variant` para cambiar el estilo visual de la barra lateral. Predeterminados a `sidebar`.

::component-example
---
Colapso: Verdad
Categoría: true
Nombre: 'sidebar-props-example'
Desconocido: true
Opciones:
  - name:'variante'
    Categoría:"Variante"
    items:
      @311@@Slater
      - flotación
      @@3333@Inciso
    por defecto: 'inset'
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

@@pH034@@Insumible

Utilice el prop `collapsible` para cambiar el comportamiento de colapso de la barra lateral. Predeterminados a `offcanvas`.

- `offcanvas`: La barra lateral se desliza fuera de la vista por completo.
- `icon`: La barra lateral se reduce al ancho de solo icono.
- `none`: La barra lateral no es plegable.

::component-example
---
Colapso: Verdad
Categoría: true
Nombre: 'sidebar-props-example'
Desconocido: true
Opciones:
  - name:'plegable'(en español)
    Archivo de la etiqueta: 'pliable'
    Items:
      @@44@@offcanvas
      @@icon 45
      @46@ninguno
    por defecto: "Icon"
  - name:'variación'
    Categoría:"Variante"
    Items:
      @@48000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      @@pH049@flotación
      @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    por defecto: "sidebar"
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::tip{to="#slots"}
Puede acceder al `state` en los accesorios de la ranura para personalizar el contenido de la barra lateral cuando se colapsa.
::

@@52000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `side` para cambiar el lado de la barra lateral. Predeterminados a `left`.

::component-example
---
Colapso: Verdad
Categoría: true
Nombre: 'sidebar-props-example'
Desconocido: true
Opciones:
  - name:'lado'
    Categoría:"Side"
    Items:
      @@56@izquierda
      @57@@derecha
    por defecto: "correcto"
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

@@508@Título

Utilice el prop `title` para establecer el título de la cabecera de la barra lateral.

::component-code
---
Categoría: true
Escondido:
  @060@clase
  @@pH061
Ignora:
  - ui.container (en inglés)
Props:
  Título: Navegación
  UU.:
    Contenido: H-full
Los slots:
  Default:|

    @@@ 063
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---

por @ph064
::

@@pH065@Descripción

Utilice el prop `description` para establecer la descripción del encabezado de la barra lateral.

::component-code
---
Categoría: true
Escondido:
  @067 @ clase
  @068
Ignora:
  @@pH069@título
  - ui.container (en inglés)
Props:
  Título: Navegación
  Descripción: Browse your workspace
  UU.:
    Contenido: H-full
Los slots:
  Default:|

    @@pf071 @
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---

por @ph072
::

@@70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `rail` para mostrar un borde interactivo delgado en la barra lateral que alterna el estado colapsado al hacer clic. El riel solo se representa cuando `collapsible` no es `none`.

::component-code
---
Categoría: true
Ignora:
  @777@title
  - ui.container (en inglés)
Escondido:
  @079
  @080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Vía: True
  Archivo: Icon
  Título: Navegación
  Contenedor: H-full
Los slots:
  Default:|

    @@@ 081 @
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---

por: @ph082 @
::

@083 @ Cerrar

Utilice el prop `close` para mostrar un botón de cierre en el encabezado de la barra lateral. El botón de cierre solo se representa cuando `collapsible` no es `none`.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
Categoría: true
Ignora:
  @091@title (Edición española)
  @@R2009@R2009
  - ui.container (en inglés)
Escondido:
  @@pH094
  @095@clase
Props:
  Siguiente: True
  Vía: True
  Archivo: Icon
  Título: Navegación
  UU.:
    Contenido: H-full
Items:
  Cerrado:
    @@ph096@true
    @@@@false@false
Los slots:
  Default:|

    @@ 098 @
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---

por @ph099
::

### Cerrar Icono

Utilice el prop `close-icon` para personalizar el botón de cierre [Icon](/docs/components/icon).

::component-code
---
Categoría: true
Ignora:
  @@707@título
  @800@RAIL
  @pH109 @
  @100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  - ui.container (en inglés)
Escondido:
  @112
  @113@clase
Props:
  Siguiente: True
  Icono: i-lucide-panel-right-close
  Vía: True
  Archivo: Icon
  Vía: Right
  Título: Navegación
  UU.:
    Contenido: H-full
items:
  Cerrado:
    @114@@verdad
    @115 @ Falso
Los slots:
  Default:|

    @116 @
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---

por @ph117 @
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.close`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.close`.
:::
::

@212@@Modos

Utilice el prop `mode` para cambiar el modo del menú de la barra lateral en el móvil.

::component-example
---
Colapso: Verdad
iframe:
  Tamaño: 500px
iframeMobile: Verdad
Desconocido: true
Nombre: 'sidebar-mode-example'
Opciones:
  - name:'Diseño'
    Categoría:'Moda'
    por defecto: "slidover"
    items:
      @126 @ Modalidad
      @277@espanol
      @128@@dealer
Props:
  Categoría: w-full
---
::

::tip{to="#props"}
Puedes usar el prop `menu` para personalizar el menú de la barra lateral, se adaptará dependiendo del modo que elijas.
::

@@pH130@Ejemplos

### Control estado abierto

Puede controlar el estado abierto usando la directiva `open` o la directiva `v-model:open`. En el escritorio controla el estado expandido/colapsado, en el móvil abre/cierra el menú de la hoja.

::component-example
---
Colapso: Verdad
Categoría: true
Nombre: 'sidebar-open-example'
Desconocido: true
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el estado abierto de la barra lateral presionando: kbd{value="O"}.
::

### Persiste estado abierto

Use [`useLocalStorage`](https://vueuse.org/core/useLocalStorage/) de VueUse o [`useCookie`](https://nuxt.com/docs/4.x/api/composables/use-cookie) en lugar de `ref` para persistir el estado de la barra lateral a través de las recargas de página.

::component-example
---
Colapso: Verdad
Categoría: true
Nombre: 'sidebar-persistent-example'
Desconocido: true
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
La única diferencia con el ejemplo anterior es la sustitución de `ref(true)` con `useLocalStorage('sidebar-open', true)`.
::

### Con ancho personalizado

El ancho de la barra lateral está controlado por la variable CSS `--sidebar-width`(por defecto a `16rem`). El ancho del icono colapsado está controlado por `--sidebar-width-icon`(por defecto a `4rem`).

Anularlos globalmente en su CSS o por instancia con el atributo `style`.

::component-example
---
Colapso: Verdad
Categoría: true
Nombre del archivo: 'sidebar-width-example'
Desconocido: true
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Con el encabezado

Para colocar la barra lateral debajo de un [Header](/docs/components/header), personalice el `gap` y `container` utilizando el `ui` prop.

::component-example
---
Colapso: Verdad
Categoría: true
Nombre: 'sidebar-header-example'
Desconocido: true
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
La variable `--ui-header-height` por defecto es `4rem` y es utilizada por la cabecera. Ajustarla si su barra de navegación utiliza una altura diferente.
::

### Con el chat de AI

Utilice la barra lateral en el lado derecho con [ChatMessages](/docs/components/chat-messages) y [ChatPrompt](/docs/components/chat-prompt) para crear un panel de chat de IA.

::component-example
---
Colapso: Verdad
Categoría: true
Nombre: 'sidebar-chat-ejemplo'
Desconocido: true
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

@@pH179

@180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@181@181@181

Componentes de slots

@182@@Proyecto

Componente Tema

@@183@Changelog (Edición española)

Categoría: component-changelog

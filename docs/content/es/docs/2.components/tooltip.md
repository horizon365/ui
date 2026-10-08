---
description: Una ventana emergente que revela información al pasar el cursor sobre un elemento.
category: overlay
keywords:
  - hint
links:
  - label: Tooltip
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tooltip
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tooltip.vue
---

@@pH000@@Uso del producto

Utilice un [Button](/docs/components/button) o cualquier otro componente en la ranura predeterminada de la información sobre herramientas.

::component-code
---
Categoría: true
Ignora:
  @005@texto
Props:
  texto: 'Abierto en GitHub'
Los slots:
  Default:|

    @@ 006 @
---

El botón {label="Open" color="neutral" variant="subtle"}
::

::warning
Asegúrese de envolver su aplicación con el componente [`App`](/docs/components/app) que utiliza el componente [`TooltipProvider`](https://reka-ui.com/docs/components/tooltip#provider) de Reka UI.
::

::tip{to="/docs/components/app#props"}
Puede consultar el componente `App``tooltip` prop para ver cómo configurar la información sobre herramientas de forma global.
::

@200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `text` para establecer el contenido de la información sobre herramientas.

::component-code
---
Categoría: true
Props:
  texto: 'Abierto en GitHub'
Los slots:
  Default:|

    @22
---

por: u-button {label="Open" color="neutral" variant="subtle"}
::

@24@240000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `kbds` para representar los componentes [Kbd](/docs/components/kbd) en la información sobre herramientas.

::component-code
---
Categoría: true
Ignora:
  @000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @31@300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  texto: 'Abierto en GitHub'
  kbd:
    @32@meta
    @@333@@G
Los slots:
  Default:|

    @@@ 34 @
---

Botón {label="Open" color="neutral" variant="subtle"}
::

::tip
Puede usar claves especiales como `meta` que se muestra como `⌘` en macOS y `Ctrl` en otras plataformas.
::

@39@@delay

Utilice el prop `delay-duration` para cambiar el retardo antes de que aparezca la información sobre herramientas. Por ejemplo, puede hacer que aparezca instantáneamente configurándolo en `0`.

::component-code
---
Categoría: true
Ignora:
  @@242@texto
Props:
  Retraso: 0
  texto: 'Abierto en GitHub'
Los slots:
  Default:|

    @@@ 43 @
---

Botón {label="Open" color="neutral" variant="subtle"}
::

::tip
Esto se puede configurar globalmente a través de la opción `tooltip.delayDuration` en el componente [`App`](/docs/components/app).
::

@@501@Contenido

Utilice el prop `content` para controlar cómo se representa el contenido de la información de herramientas, como su `align` o `side`, por ejemplo.

::tip
Esto se puede configurar globalmente a través de la opción `tooltip.content` en el componente [`App`](/docs/components/app).
::

::component-code
---
Categoría: true
Ignora:
  @061 @ texto
Items:
  content.align:
    @2006@Inicio
    @@P063@Centro de Información
    @@F064
  content.side:
    @@pH065@@derecha
    @66@izquierda
    @@pH067@top
    @68@abajo
Props:
  Contenido:
    Alineación: Centro
    Categoría: Bottom
    Desplazamiento: 8
  texto: 'Abierto en GitHub'
Los slots:
  Default:|

    @@pf069 @
---

Botón {label="Open" color="neutral" variant="subtle"}
::

@@F071@Flecha

Utilice el prop `arrow` para mostrar una flecha en la información sobre herramientas.

::component-code
---
Categoría: true
Ignora:
  @073 @ texto
  @@744@Arreaza
Props:
  Arrow: Verdad
  texto: 'Abierto en GitHub'
Los slots:
  Default:|

    @@@ 75 @
---

El botón {label="Open" color="neutral" variant="subtle"}
::

@777@@desactivado

Utilice el prop `disabled` para desactivar la información sobre herramientas.

::component-code
---
Categoría: true
Ignora:
  @079 @ texto
Props:
  Discapacitados: Verdadero
  texto: 'Abierto en GitHub'
Los slots:
  Default:|

    @@ 080 @
---

Botón {label="Open" color="neutral" variant="subtle"}
::

@@ph082@Ejemplos

### Estado abierto de control

Puede controlar el estado abierto utilizando la prop `default-open` o la directiva `v-model:open`.

::component-example
---
Nombre: 'tooltip-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar la información de herramientas presionando: kbd{value="O"}.
::

### Con el siguiente cursor

Puede hacer que la información sobre herramientas siga el cursor al pasar el cursor sobre un elemento usando el prop [`reference`](https://reka-ui.com/docs/components/tooltip#trigger):

::component-example
---
Nombre: 'tooltip-cursor-ejemplo'
---
::

@@pH098

@099@099@099@099

Componentes Props

@100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@101@101@101@101

Componentes Emisiones

@2010@tema

Componente Tema

@100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Categoría: component-changelog

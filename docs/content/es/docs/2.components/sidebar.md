---
description: 'Una barra lateral plegable con múltiples variantes visuales.'
category: layout
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Sidebar.vue
---

xph0000xUso

En el escritorio, se representa en línea y se puede contraer; en el móvil, se abre un componente [Modal](/docs/components/modal), [Slideover](/docs/components/slideover) o [Drawer](/docs/components/drawer).

::tip{to="/docs/components/dashboard-sidebar"}
**Sidebar vs DashboardSidebar**: Este componente es una barra lateral simple e independiente que puede colocar en cualquier lugar (panel de chat, configuración, navegación). Si necesita arrastrar para cambiar el tamaño, persistencia de estado e integración con [DashboardGroup](/docs/components/dashboard-group), use [DashboardSidebar](ph019) en su lugar.
::

Utilice las ranuras `header`, `default` y `footer` para personalizar el contenido de la barra lateral. La directiva `v-model:open` es consciente de la vista: en el escritorio controla el estado expandido/colapsado, en el móvil controla el menú.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Variante

Utilice el prop `variant` para cambiar el estilo visual de la barra lateral.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'variant'
    label: 'variant'
    items:
      - sidebar
      - floating
      - inset
    default: 'inset'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Collapsible (en inglés)

Utilice el prop `collapsible` para cambiar el comportamiento de colapso de la barra lateral.

- `offcanvas`: La barra lateral se desliza fuera de la vista por completo.
- `icon`: La barra lateral se reduce a un ancho de solo icono.
- `none`: La barra lateral no es plegable.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'collapsible'
    label: 'collapsible'
    items:
      - offcanvas
      - icon
      - none
    default: 'icon'
  - name: 'variant'
    label: 'variant'
    items:
      - sidebar
      - floating
      - inset
    default: 'sidebar'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::tip{to="#slots"}
Puede acceder al `state` en los accesorios de la ranura para personalizar el contenido de la barra lateral cuando se contrae.
::

### lado

Utilice el prop `side` para cambiar el lado de la barra lateral. Predeterminados a `left`.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'side'
    label: 'side'
    items:
      - left
      - right
    default: 'right'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Nombre

Utilice el prop `title` para establecer el título de la cabecera de la barra lateral.

::component-code
---
prettier: true
hide:
  - class
  - ui
ignore:
  - ui.container
props:
  title: Navigation
  ui:
    container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

Xph120xDescripción

Utilice el prop `description` para establecer la descripción del encabezado de la barra lateral.

::component-code
---
prettier: true
hide:
  - class
  - ui
ignore:
  - title
  - ui.container
props:
  title: Navigation
  description: Browse your workspace
  ui:
    container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### RAIL (Edición española)

Utilice el soporte `rail` para mostrar un borde interactivo delgado en la barra lateral que alterna el estado colapsado al hacer clic. El riel solo se representa cuando `collapsible` no es `none`.

::component-code
---
prettier: true
ignore:
  - title
  - ui.container
hide:
  - ui
  - class
props:
  rail: true
  collapsible: icon
  title: Navigation
  ui.container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### Cerrar

Utilice el prop `close` para mostrar un botón de cierre en el encabezado de la barra lateral. El botón de cierre solo se representa cuando `collapsible` no es `none`.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
prettier: true
ignore:
  - title
  - rail
  - ui.container
hide:
  - ui
  - class
props:
  close: true
  rail: true
  collapsible: icon
  title: Navigation
  ui:
    container: h-full
items:
  close:
    - true
    - false
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### Cerrar icono

Utilice el prop `close-icon` para personalizar el botón de cierre [Icon](/docs/components/icon).

::component-code
---
prettier: true
ignore:
  - title
  - rail
  - side
  - close
  - ui.container
hide:
  - ui
  - class
props:
  close: true
  closeIcon: i-lucide-panel-right-close
  rail: true
  collapsible: icon
  side: right
  title: Navigation
  ui:
    container: h-full
items:
  close:
    - true
    - false
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su XPH235X bajo la tecla XPH236X.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` bajo la tecla `ui.icons.close`.
:::
::

### Modos

Utilice el prop `mode` para cambiar el modo del menú de la barra lateral en el móvil.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'sidebar-mode-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'slideover'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

::tip{to="#props"}
Puedes usar el prop `menu` para personalizar el menú de la barra lateral, se adaptará dependiendo del modo que elijas.
::

## Ejemplos

### Control en estado abierto

Puede controlar el estado abierto utilizando la prop `open` o la directiva `v-model:open`.En el escritorio controla el estado expandido/colapsado, en el móvil abre/cierra el menú de la hoja.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-open-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el estado abierto de la barra lateral presionando: kbd{value="O"}.
::

### Persistent estado abierto

Utilice [`useLocalStorage`](https://vueuse.org/core/useLocalStorage/) de VueUse o [`useCookie`](xph288) en lugar de `ref` para persistir el estado de la barra lateral a través de las recargas de página.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-persist-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
La única diferencia con el ejemplo anterior es la sustitución de `ref(true)` con `useLocalStorage('sidebar-open', true)`.
::

### Con ancho personalizado

El ancho de la barra lateral está controlado por la variable CSS `--sidebar-width` (por defecto `16rem`). El ancho del icono colapsado está controlado por `--sidebar-width-icon` (por defecto `4rem`).

Anularlos de forma global en su CSS o por instancia con el atributo `style`.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-width-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Con cabecera

Para colocar la barra lateral debajo de un [Header](/docs/components/header), personalice el `gap` y el `container` con el accesorio `ui`.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-header-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
La variable `--ui-header-height` por defecto es `4rem` y es utilizada por la cabecera. Ajustarla si su barra de navegación utiliza una altura diferente.
::

### Con chat de IA

Utilice la barra lateral en el lado derecho con [ChatMessages](/docs/components/chat-messages) y [ChatPrompt](/docs/components/chat-prompt) para crear un panel de chat AI.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-chat-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

## API (Edición española)

### Props en línea

:component-props

### Slots en línea

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog

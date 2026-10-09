---
title: Dashboardsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsports.
description: 'Una barra lateral redimensionable y plegable para mostrar en un tablero.'
category: dashboard
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebar.vue
---

xph0000xUso

El componente DashboardSidebar se utiliza para mostrar una barra lateral en un diseño de panel. Soporta arrastrar para cambiar el tamaño, persistencia de estado y se integra con [DashboardGroup](/docs/components/dashboard-group), [DashboardPanel](xph007) y [DashboardNavbar](xph0111).

::tip{to="/docs/components/sidebar"}
**DashboardSidebar vs Sidebar**: Este componente está diseñado para diseños de tablero con arrastrar para cambiar el tamaño, persistencia de estado e integración `DashboardGroup`.Para una barra lateral simple e independiente (panel de chat, configuración, navegación), use [Sidebar](xph016) en su lugar.
::

Su estado (tamaño, colapsado, etc.) se guardará en función de los accesorios `storage` y `storage-key` que proporcione al componente [DashboardGroup](/docs/components/dashboard-group#props).

Úselo dentro de la ranura predeterminada del componente [DashboardGroup](/docs/components/dashboard-group):

```vue [layouts/dashboard.vue]{3}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

::warning
Este componente no tiene un solo elemento raíz cuando se usa el prop `resizable`, así que envuélvelo en un contenedor (por ejemplo, `<div class="flex flex-1">`) si usa transiciones de página o requiere una sola raíz para el diseño.
::

Utilice las ranuras `header`, `default` y `footer` para personalizar la barra lateral y las ranuras `body` o `content` para personalizar el menú de la barra lateral.

::component-example
---
collapse: true
name: 'dashboard-sidebar-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
Arrastre la barra lateral cerca del borde izquierdo de la pantalla para contraerla.
::

### redimensionable

Utilice el prop `resizable` para hacer que la barra lateral sea redimensionable.

::component-code
---
prettier: true
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

### Collapsible (en inglés)

Utilice el soporte `collapsible` para hacer que la barra lateral se pliegue al arrastrar cerca del borde de la pantalla.

::warning
El componente [`DashboardSidebarCollapse`](/docs/components/dashboard-sidebar-collapse) no tendrá ningún efecto si la barra lateral no es **collapsible**.
::

::component-code
---
prettier: true
ignore:
  - resizable
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

::tip{to="#slots"}
Puede acceder al estado de `collapsed` en los accesorios de la ranura para personalizar el contenido de la barra lateral cuando se colapsa.
::

### Tamaño.

Utilice los accesorios `min-size`, `max-size`, `default-size` y `collapsed-size` para personalizar el tamaño de la barra lateral.

::component-code
---
prettier: true
ignore:
  - resizable
  - collapsible
hide:
  - class
props:
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  collapsedSize: 0
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
Los tamaños se calculan como porcentajes de forma predeterminada. Puede cambiar esto usando el prop `unit` en el componente `DashboardGroup`.
::

::note
El prop `collapsed-size` está configurado en `0` de forma predeterminada, pero la barra lateral tiene un `min-w-16` para asegurarse de que sea visible.
::

### lado

Utilice el prop `side` para cambiar el lado de la barra lateral. Predeterminados a `left`.

::component-code
---
prettier: true
ignore:
  - resizable
  - collapsible
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  side: 'right'
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-end'
---

:placeholder{class="h-96"}
::

### Modo (Edición española)

Utilice el prop `mode` para cambiar el modo del menú de la barra lateral.

Utilice la ranura `body` para rellenar el cuerpo del menú (debajo del encabezado) o la ranura `content` para rellenar todo el menú.

::tip{to="#props"}
Puedes usar el prop `menu` para personalizar el menú de la barra lateral, se adaptará dependiendo del modo que elijas.
::

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-mode-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'drawer'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

::note
Estos ejemplos contienen los componentes [x`DashboardGroup`](/docs/components/dashboard-group), [`DashboardPanel`](/docs/components/dashboard-panel) y [`DashboardNavbar`](/docs/components/dashboard-navbar), ya que se requieren para demostrar la barra lateral en el móvil.
::

### Toggle (Edición española)

Utilice el prop `toggle` para personalizar el componente [DashboardSidebarToggle](/docs/components/dashboard-sidebar-toggle) que se muestra en el móvil.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-toggle-example'
props:
  class: 'w-full'
---
::

### Toggle lado

Utilice el prop `toggle-side` para cambiar el lado del botón de alternancia.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-toggle-side-example'
props:
  class: 'w-full'
---
::

## Ejemplos

### Control en estado abierto

Puede controlar el estado abierto usando la prop `open` o la directiva `v-model:open`.

::component-example
---
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-open-example'
class: '!p-0 !justify-start'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el estado abierto de la barra lateral del tablero pulsando: kbd{value="O"}.
::

### Control Estado colapsado

Puede controlar el estado colapsado utilizando la prop `collapsed` o la directiva `v-model:collapsed`.

::component-example
---
name: 'dashboard-sidebar-collapsed-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el estado colapsado de la barra lateral del tablero pulsando: kbd{value="C"}.
::

## API (Versión)

### Props (accesorios)

:component-props

### Slots en línea

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog

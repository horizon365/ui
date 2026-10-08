---
title: Dashboardsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsportsports.
description: 'Una barra lateral redimensionable y plegable para mostrar en un tablero.'
category: dashboard
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebar.vue
---

@@pH000@@Uso del producto

El componente DashboardSidebar se utiliza para mostrar una barra lateral en un diseño de tablero de instrumentos. Soporta arrastrar para cambiar el tamaño, persistencia de estado y se integra con [DashboardGroup](/docs/components/dashboard-group),[DashboardPanel](/docs/components/dashboard-panel) y [DashboardNavbar](/docs/components/dashboard-navbar).

::tip{to="/docs/components/sidebar"}
**DashboardSidebar vs Sidebar **: Este componente está diseñado para diseños de tablero con arrastrar para cambiar el tamaño, persistencia de estado e integración `DashboardGroup`. Para una barra lateral simple e independiente (panel de chat, configuración, navegación), use [](/docs/components/sidebar) en su lugar.
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
Este componente no tiene un solo elemento raíz cuando se utiliza el prop `resizable`, así que envuélvalo en un contenedor (por ejemplo,`<div class="flex flex-1">`) si utiliza transiciones de página o requiere una sola raíz para el diseño.
::

Utilice las ranuras `header`,`default` y `footer` para personalizar la barra lateral y las ranuras `body` o `content` para personalizar el menú de la barra lateral.

::component-example
---
Colapso: Verdad
Nombre: 'dashboard-sidebar-example'
clase: '! p-0! justify-start'
Props:
  Tamaño: 22
  Deficiencias: 35
  Tamaño: 40
  clase: '! min-h-96 h-136'
---
::

::note
Arrastre la barra lateral cerca del borde izquierdo de la pantalla para contraerla.
::

### redimensionable

Utilice el prop `resizable` para hacer que la barra lateral sea redimensionable.

::component-code
---
Categoría: true
Escondido:
  @480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@pH049@@defaltSize
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@501@clase
Props:
  Tamaño: true
  Tamaño: 22
  Deficiencias: 35
  Tamaño: 40
  Categoría:! min-h-96
Los slots:
  Default:|

    @@ 52 @
clase: '! p-0! justify-start'
---

por: placeholder{class="h-96"}
::

@@P054@@P0540

Utilice el prop `collapsible` para hacer que la barra lateral se pliegue al arrastrar cerca del borde de la pantalla.

::warning
El componente [`DashboardSidebarCollapse`](/docs/components/dashboard-sidebar-collapse) no tendrá efecto si la barra lateral no es **collapsible**.
::

::component-code
---
Categoría: true
Ignora:
  @@pH063@redimensionable
Escondido:
  @@pH064@minSize
  @@pH065@@defaltSize (en inglés)
  @666@@666@666
  @067 @ clase
Props:
  Tamaño: true
  Pliable: Verdad
  Tamaño: 22
  Deficiencias: 35
  Tamaño: 40
  Categoría:! min-h-96
Los slots:
  Default:|

    @@@ 068
clase: '! p-0! justify-start'
---

por @ph069
::

::tip{to="#slots"}
Puede acceder al estado `collapsed` en los accesorios de la ranura para personalizar el contenido de la barra lateral cuando se colapsa.
::

@710@@Tamaño

Utilice los accesorios `min-size`,`max-size`,`default-size` y `collapsed-size` para personalizar el tamaño de la barra lateral.

::component-code
---
Categoría: true
Ignora:
  @@776@redimensionable
  @777@@flip-flow
Escondido:
  @788@clase
Props:
  Tamaño: true
  Pliable: Verdad
  Tamaño: 22
  Deficiencias: 35
  Tamaño: 40
  Colapsado: 0
  Categoría:! min-h-96
Los slots:
  Default:|

    @@pf079 @
clase: '! p-0! justify-start'
---

por: @ph080 @
::

::tip{to="/docs/components/dashboard-group#props"}
Los tamaños se calculan como porcentajes por defecto. Puede cambiar esto usando el prop `unit` en el componente `DashboardGroup`.
::

::note
El prop `collapsed-size` está configurado en `0` por defecto, pero la barra lateral tiene un `min-w-16` para asegurarse de que sea visible.
::

@@866@espanol

Utilice el prop `side` para cambiar el lado de la barra lateral. Predeterminados a `left`.

::component-code
---
Categoría: true
Ignora:
  @@89@redimensionable
  @@pH090@foldable (en inglés)
Escondido:
  @091@@minSize
  @@pH092@@defaltSize
  @@pH093@maxSize
  @094@clase
Props:
  Étiquette:"Right"
  Tamaño: true
  Pliable: Verdad
  Tamaño: 22
  Deficiencias: 35
  Tamaño: 40
  Categoría:! min-h-96
Los slots:
  Default:|

    @@@ 095
clase: '! p-0! justify-end'
---

por @ph096
::

@@pH097@mode

Utilice el prop `mode` para cambiar el modo del menú de la barra lateral. Predeterminados a `slideover`.

Utilice la ranura `body` para rellenar el cuerpo del menú (debajo del encabezado) o la ranura `content` para rellenar todo el menú.

::tip{to="#props"}
Puedes usar el prop `menu` para personalizar el menú de la barra lateral, se adaptará dependiendo del modo que elijas.
::

::component-example
---
Colapso: Verdad
iframe:
  Tamaño: 500px
iframeMobile: Verdad
Desconocido: true
Nombre: 'dashboard-sidebar-mode-example'
Opciones:
  - name:'modo'(en inglés)
    Categoría:"Moda"
    por defecto: "Drawer"
    items:
      @@F104@Modal
      @500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      @106@@clean106
Props:
  Categoría: w-full
---
::

::note
Estos ejemplos contienen los componentes [`DashboardGroup`](/docs/components/dashboard-group),[`DashboardPanel`](/docs/components/dashboard-panel) y [](/docs/components/dashboard-navbar), ya que son necesarios para demostrar la barra lateral en el móvil.
::

@@222@toggle

Utilice el prop `toggle` para personalizar el componente [DashboardSidebarToggle](/docs/components/dashboard-sidebar-toggle) que se muestra en el móvil.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-example
---
Colapso: Verdad
iframe:
  Tamaño: 500px
iframeMobile: Verdad
Desconocido: true
Nombre: 'dashboard-sidebar-toggle-example'
Props:
  Categoría: w-full
---
::

### Toggle Lado de la imagen

Utilice el prop `toggle-side` para cambiar el lado del botón de alternancia. Predeterminados a `left`.

::component-example
---
Colapso: Verdad
iframe:
  Tamaño: 500px
iframeMobile: Verdad
Desconocido: true
Nombre: 'dashboard-sidebar-toggle-side-example'
Props:
  Categoría: w-full
---
::

## Ejemplos

### Estado abierto de control

Puede controlar el estado abierto utilizando la directiva `open` o la directiva `v-model:open`.

::component-example
---
iframe:
  Tamaño: 500px
iframeMobile: Verdad
Desconocido: true
Nombre: 'dashboard-sidebar-open-example'
clase: '! p-0! justify-start'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el estado abierto de la Barra lateral del tablero pulsando: kbd{value="O"}.
::

### Control estado colapsado

Puede controlar el estado colapsado utilizando la prop `collapsed` o la directiva `v-model:collapsed`.

::component-example
---
Nombre: 'dashboard-sidebar-collapsed-example'
clase: '! p-0! justify-start'
Props:
  Tamaño: 22
  Deficiencias: 35
  Tamaño: 40
  clase: '! min-h-96 h-136'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el estado colapsado de la barra lateral del tablero pulsando: kbd{value="C"}.
::

@@pH154

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@156@156@156

Componentes de slots

@157 @@ Proyecto

Componente Tema

@158@Changelog en Español

Categoría: component-changelog

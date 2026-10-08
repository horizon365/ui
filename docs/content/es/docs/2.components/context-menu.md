---
title: Contexto Menú
description: Un menú para mostrar acciones al hacer clic derecho sobre un elemento.
category: overlay
keywords:
  - right click menu
links:
  - label: Contexto Menú
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/context-menu
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ContextMenu.vue
---

@@pH000@@Uso del producto

Utilice cualquier cosa que desee en la ranura predeterminada del menú contextual, y haga clic derecho en él para mostrar el menú.

::component-code
---
Categoría: true
Colapso: Verdad
Ignora:
  @0001@artículos
  @@pH002@ui.contenido
Externo:
  @@pH000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@@P2004@@ContextMenuItem [][]
Props:
  Items:
    - -etiqueta: Apariencia
        niños:
          - label: Proyecto
            Icono: i-lucide-monitor
          - label: Diseño
            i-lucide-sun
          - label: Oscuridad
            i-lucide-moon
    - -etiqueta: Mostrar barra lateral
        kbd:
          @1000@meta
          @111@s
      - label: Mostrar barra de herramientas
        kbd:
          @13@shift (Edición española)
          @14@meta
          @@pH015
      - label: Colapso Pinned Tabs (en inglés)
        Discapacitados: Verdadero
    - -label: Actualizar la página
      - label: borrar cookies y actualizar
      - label: borrar caché y actualizar
      - type: separador
      - label: Desarrollador
        niños:
          - -label: Ver fuente
              kbd:
                @23@meta
                @@24@shift (Edición española)
                @250@@U
            - label: Herramientas para desarrolladores
              kbd:
                @@27@opción
                @28@meta
                @29@@29 años
            - label: Inspeccionar los elementos
              kbd:
                @@301@opción
                @32@meta
                @@333@@c
          - -etiqueta: Consola de JavaScript
              kbd:
                @@35@opción
                @36@meta
                @@jjjjjjjjjjjjjjjjjjjjjjjjajajajajajajajajajajajajajajajaja
Los slots:
  Default:|

    @@@ 38 @
      clic derecho aquí
    @@@ 39 @
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[clic derecho aquí]
::

@@401@Artículos

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
[`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}](PH0667
[`checked?: boolean`{lang="ts-type"}](#with-checkbox-items)
@@ph076 @@@@ph077
[`slot?: string`{lang="ts-type"}](#with-custom-slot)
@@ph086@@@ph087@@@ph088 @
[`onUpdateChecked?: (checked: boolean) => void`{lang="ts-type"}](#with-checkbox-items)
@@
@@@@ph100@@@ph101
@@@ph102@@@ph103

Puede pasar cualquier propiedad del componente [Link](/docs/components/link#props) como `to`,`target`, etc.

::component-code
---
Categoría: true
Colapso: Verdad
Ignora:
  @@111@artículos
  - ui.contenido
Externo:
  @@113@artículos
Externalidades:
  @@114@@ContextMenuItem [][]
Props:
  Items:
    - -etiqueta: Apariencia
        niños:
          - label: El sistema
            Icono: i-lucide-monitor
          - label: Luz
            i-lucide-sun
          - label: Oscuridad
            i-lucide-moon
    - -label: Mostrar barra lateral
        kbd:
          @120 @ meta
          @121
      - label: Mostrar barra de herramientas
        kbd:
          @123 @@ cambio
          @124 @ meta
          @125
      - label: Colapso Pinned Tabs (en inglés)
        Discapacitados: Verdadero
    - -label: Actualizar la página
      - label: borrar cookies y actualizar
      - label: borrar caché y actualizar
      - type: separador
      - label: Desarrollador
        niños:
          - -label: Voir la source
              kbd:
                @333@meta
                @134 @@ cambio
                @@pH135 @
            - label: Herramientas para desarrolladores
              kbd:
                @137 @ opción
                @138 @ meta
                @139 @
            - label: Inspeccionar los elementos
              kbd:
                @@141@opción
                @242 @ meta
                @@143@cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
          - -etiqueta: Consola de JavaScript
              kbd:
                @@5000@opción
                @146 @ meta
                @147
  UU.:
    Contenido: 'W-48'
Los slots:
  Default:|

    @@pH148 @
      clic derecho aquí
    @@pH149 @
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Haga clic derecho aquí]
::

::note
También puede pasar un array de arrays al prop `items` para crear grupos separados de elementos.
::

::tip
Cada elemento puede tomar un array `children` de objetos con las mismas propiedades que el prop `items` para crear un menú anidado que se puede controlar utilizando las propiedades `open`,`defaultOpen` y `content`.
::

@157 @@ Tamaño

Utilice la prop `size` para cambiar el tamaño del menú contextual.

::component-code
---
Categoría: true
Colapso: Verdad
Ignora:
  @159 @ artículos
  - ui.contenido
Externo:
  @161@artículos
Externalidades:
  @@P162@@ContextMenuItem (en inglés)
Props:
  Tamaño: xl
  Items:
    - label: Proyecto
      Icono: i-lucide-monitor
    - label: Diseño
      i-lucide-sun
    - label: Oscuridad
      i-lucide-moon
  UU.:
    Contenido: 'W-48'
Los slots:
  Default:|

    @@166 @
      Clic derecho aquí
    @167 @
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[clic derecho aquí]
::

@169@1699

Utilice el prop `modal` para controlar si el ContextMenu bloquea la interacción con contenido externo.

::component-code
---
Categoría: true
Colapso: Verdad
Ignora:
  @@2017@artículos
  - ui.contenido
Externo:
  @@174@artículos
Externalidades:
  @@@P175@@ContextMenuItem (en inglés)
Props:
  Modalidad: Falso
  items:
    - label: Proyecto
      Icono: i-lucide-monitor
    - label: Luz
      i-lucide-sun
    - label: Oscuridad
      i-lucide-moon
  UU.:
    Contenido: 'W-48'
Los slots:
  Default:|

    @179 @
      clic derecho aquí
    @180 @
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[clic derecho aquí]
::


### Desactivado

Utilice la prop `disabled` para desactivar el menú contextual.

::component-code
---
Categoría: true
Colapso: Verdad
Ignora:
  @184@artículos
  - ui.contenido
Externo:
  @186@artículos
Externalidades:
  - ContextMenuItem (en inglés)
Props:
  Discapacidad: Verdadero
  items:
    - label: Proyecto
      Icono: i-lucide-monitor
    - label: Luz
      i-lucide-sun
    - label: Oscuridad
      i-lucide-moon
  UU.:
    Contenido: 'W-48'
Los slots:
  Default:|

    @@@ 191 @
      clic derecho aquí
    @@2019
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[clic derecho aquí]
::

@@ph194@Ejemplos

### Con elementos de casilla

Puede utilizar la propiedad `type` con `checkbox` y utilizar las propiedades `checked`/`onUpdateChecked` para controlar el estado comprobado del elemento.

::component-example
---
Colapso: Verdad
Nombre: 'context-menu-checkbox-items-example'
---
::

::note
Para garantizar la reactividad para el estado de los elementos `checked`, se recomienda envolver su array `items` dentro de un `computed`.
::

### Con elementos de color

Puede utilizar la propiedad `color` para resaltar ciertos elementos con un color.

::component-example
---
Colapso: Verdad
Nombre: 'context-menu-color-items-example'
---
::

### Con slot personalizado

Utilice la propiedad `slot` para personalizar un elemento específico.

Tendrás acceso a las siguientes slots:

@2007@@2008@2009
@@210@@@211@@212 @
@@213@@@214@@215 @
@@216@@@217@@218 @

::component-example
---
Colapso: Verdad
Nombre: 'context-menu-custom-slot-example'
---
::

::tip{to="#slots"}
También puede utilizar las ranuras `#item`,`#item-leading`,`#item-label` y `#item-trailing` para personalizar todos los artículos.
::

### Extracto de accesos directos

Utilice la utilidad [extractShortcuts](/docs/composables/extract-shortcuts) para definir automáticamente accesos directos desde elementos de menú con una propiedad `kbds`. Extrae recursivamente accesos directos y devuelve un objeto compatible con [defineShortcuts](/docs/composables/define-shortcuts).

```vue
<script setup lang="ts">
const items = [
  [{
    label: 'Show Sidebar',
    kbds: ['meta', 'S'],
    onSelect() {
      console.log('Show Sidebar clicked')
    }
  }, {
    label: 'Show Toolbar',
    kbds: ['shift', 'meta', 'D'],
    onSelect() {
      console.log('Show Toolbar clicked')
    }
  }, {
    label: 'Collapse Pinned Tabs',
    disabled: true
  }], [{
    label: 'Refresh the Page'
  }, {
    label: 'Clear Cookies and Refresh'
  }, {
    label: 'Clear Cache and Refresh'
  }, {
    type: 'separator' as const
  }, {
    label: 'Developer',
    children: [[{
      label: 'View Source',
      kbds: ['option', 'meta', 'U'],
      onSelect() {
        console.log('View Source clicked')
      }
    }, {
      label: 'Developer Tools',
      kbds: ['option', 'meta', 'I'],
      onSelect() {
        console.log('Developer Tools clicked')
      }
    }], [{
      label: 'Inspect Elements',
      kbds: ['option', 'meta', 'C'],
      onSelect() {
        console.log('Inspect Elements clicked')
      }
    }], [{
      label: 'JavaScript Console',
      kbds: ['option', 'meta', 'J'],
      onSelect() {
        console.log('JavaScript Console clicked')
      }
    }]]
  }]
]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
En este ejemplo,: kbd{value="meta"}: kbd{value="S" class="ms-px"},: kbd{value="shift"}: kbd{value="meta" class="ms-px"}: kbd{value="D" class="ms-px"},:[email protected]:[email protected]:[email protected] kbd{value="I" class="ms-px"},: kbd{value="option"}: kbd{value="meta" class="ms-px"}: kbd{value="C" class="ms-px"} y: kbd{value="option"}: kbd{value="meta" class="ms-px"}: kbd{value="J" class="ms-px"} activaría la función `select` del elemento correspondiente.
::

@pH310

@311@311@311

Componentes Props

@312@312@312

Componentes de slots

@313@@Emisiones

Componentes Emisiones

@314

Componente Tema

@@15000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Categoría: component-changelog

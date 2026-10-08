---
description: Un conjunto de paneles redimensionables separados por asas arrastrables.
category: layout
links:
  - label: El Splitter
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/splitter
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Splitter.vue
navigation.badge: New
---

@@pH000@@Uso del producto

Utilice el componente Splitter para mostrar una lista de paneles redimensionables separados por manijas arrastrables.

::component-example
---
Colapso: Verdad
Nombre: 'splitter-example'
---
::

::note
El Splitter llena la altura de su contenedor, así que asegúrese de que un elemento padre defina uno.
::

@0001@Artículos

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@
@@
@@
@@
@@
@@
@@
@@

Utilice la tecla `slot` para rellenar el contenido de un panel y la tecla `class` para darle estilo. Los elementos sin una tecla `slot` vuelven a una ranura `panel-{index}`. Los tamaños son porcentajes por defecto, establezca `sizeUnit: 'px'` en un elemento para los valores de píxeles.

::caution
Al renderizar en el servidor, configure el `id` prop y dé `defaultSize` a todos los elementos o a ninguno. Los ID se generan automáticamente de lo contrario y el servidor y el cliente pueden estar en desacuerdo, lo que rompe el diseño en la hidratación. por lo que mezclar los dos hace que los paneles salten una vez hidratados. Los tamaños de píxeles se miden en el cliente y siempre cambian un poco.
::

::component-code
---
Colapso: Verdad
Categoría: H-96
Categoría: true
Ignora:
  @@444@puntos
  @@pH045
Externo:
  @@46000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@47@@47@47@47@47@47@47@47@47@47@47@47@47@47@47@47@47@47@47@47@47@47@47@47@47@47@47)
Props:
  id: 'separadores'
  Items:
    - slot:'la barra lateral'
      Tamaño: 15
      Tamaño: 40
      Deficiencias: 25
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
    - slot:'principal'(en inglés)
      Deficiencias: 75
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
Los slots:
  Categoría: Sidebar
  Categoría: Main
---

#sidebar
El sidebar

#principales
El Main
::

@@P050@Orientación

Utilice el prop `orientation` para cambiar la dirección del divisor. Predeterminados a `horizontal`.

::component-code
---
Colapso: Verdad
Categoría: H-96
Categoría: true
Ignora:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@pH054
Externo:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  id: 'separación-orientación'
  Categoría:"Vertical"
  items:
    - slot:'primero'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
    - slot:'segundo'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
Los slots:
  Siguiente: First
  Siguiente: Second
---

#Primero
Primero

#segundo
El segundo
::

@@pH059@@Ejemplos

### Con el panel plegable

Establezca `collapsible: true` en un elemento para que se colapse más allá de su `minSize`, y utilice `collapsedSize` para mantener parte del panel visible cuando se colapse. La ranura del panel expone `collapsed`,`collapse` y `expand` para que pueda controlarlo programáticamente, y el `collapse`, Los eventos `expand` y `resize` se disparan con el índice del panel.

::component-example
---
Colapso: Verdad
Nombre: 'splitter-foldable-example'
---
::

### Con divisores anidados

Anida un `Splitter` dentro de un panel para construir diseños bidimensionales de estilo IDE.

::component-example
---
Colapso: Verdad
Nombre: 'splitter-nided-example'
---
::

### Con el manejo personalizado

Utilice el `ui` prop para darle un nuevo estilo, por ejemplo, como un divisor visible para diseños de color, y la ranura `resize-handle` para representar el contenido dentro de él como un agarre.

::component-example
---
Colapso: Verdad
Nombre: 'splitter-custom-handle-example'
---
::

### Con persistencia

Proporcione un `auto-save-id` para persistir el diseño a `localStorage` y restaurarlo en la recarga.

```vue
<template>
  <USplitter id="my-layout" auto-save-id="my-layout" :items="items">
    <!-- ... -->
  </USplitter>
</template>
```

@085

@866@8666

Componentes Props

@877@espanol

Componentes de slots

@@888@088@088@088

Componentes Emisiones

@089@@Proyecto

Componente Tema

@000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Categoría: component-changelog

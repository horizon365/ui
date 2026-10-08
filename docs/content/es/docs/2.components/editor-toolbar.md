---
title: EditorialToolbar
description: Una barra de herramientas personalizable para las acciones del editor que se pueden mostrar como menú fijo, de burbujas o flotante.
category: editor
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorToolbar.vue
---

@@pH000@@Uso del producto

El componente EditorToolbar muestra una barra de herramientas de botones de formato que sincronizan automáticamente su estado activo con el contenido del editor.Admite tres modos de diseño utilizando el paquete `@tiptap/vue-3/menus`:
- `fixed`{lang="ts-type"}(siempre visible)
- `bubble`{lang="ts-type"}(aparece en la selección de texto)
- `floating`{lang="ts-type"}(aparece en las líneas vacías)

::caution
Debe usarse dentro de la ranura predeterminada de un componente [Editor](/docs/components/editor) para tener acceso a la instancia del editor.
::

::component-example
---
Elevado: Verdadero
Colapso: Verdad
Nombre: 'editor-toolbar-ejemplo'
Categoría: P-8
---
::

::callout{icon="i-custom-tiptap"}
La burbuja y los diseños flotantes utilizan las extensiones [BubbleMenu](https://tiptap.dev/docs/editor/extensions/functionality/bubble-menu) y [FloatingMenu](https://tiptap.dev/docs/editor/extensions/functionality/floatingmenu) de TipTap.
::

@@23@23@Artículos

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@
@@
@@
@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@
@@
@@
@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@
@@
@@ph078@@@ph079@@@ph080

Puede pasar cualquier propiedad del componente [Button](/docs/components/button#props) como `color`,`variant`,`size`, etc.

::component-example
---
Elevado: Verdadero
Colapso: Verdad
Nombre: 'editor-toolbar-items-example'
Categoría: P-8
---
::

::note
También puede pasar un array de arrays al prop `items` para crear grupos separados de elementos.
::

::tip
Cada elemento puede tomar una matriz `items` de objetos con las mismas propiedades que el prop `items` para crear un [DropdownMenu](/docs/components/dropdown-menu).
::

@095@@Lait

Utilice el prop `layout` para cambiar la forma en que se muestra la barra de herramientas. Por defecto a `fixed`{lang="ts-type"}.

::component-example
---
Elevado: Verdadero
Colapso: Verdad
Nombre: 'editor-toolbar-layout-example'
Categoría: P-8
Opciones:
  - name: diseño
    Categoría: Layout
    por defecto: bubble
    Items:
      @@pH100@@Fixed (Edición española)
      @101 @ burbuja
      @@F102@F102
---
::

@@303@Opciones

Al utilizar `bubble`{lang="ts-type"} o `floating`{lang="ts-type"} diseños, utilice el prop `options` para personalizar el comportamiento de posicionamiento utilizando [Floating UI options](https://floating-ui.com/docs/computeposition#options).

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorToolbar
      :editor="editor"
      :items="items"
      layout="bubble"
      :options="{
        placement: 'top',
        offset: 8,
        flip: { padding: 8 },
        shift: { padding: 8 }
      }"
    />
  </UEditor>
</template>
```

@@P130@@debería mostrar

Al utilizar `bubble`{lang="ts-type"} o `floating`{lang="ts-type"}, utilice la prop `should-show` para controlar cuándo aparece la barra de herramientas.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorToolbar
      :editor="editor"
      :items="items"
      layout="bubble"
      :should-show="({ view, state }) => {
        const { selection } = state
        const { from, to } = selection
        const text = state.doc.textBetween(from, to)
        return view.hasFocus() && !selection.empty && text.length > 10
      }"
    />
  </UEditor>
</template>
```

@@pH153@Ejemplos

### Con barra de herramientas de imagen

Utilice la prop `should-show` para crear barras de herramientas específicas del contexto que aparecen sólo para ciertos tipos de nodos. Este ejemplo muestra una barra de herramientas `bubble` con acciones de descarga y eliminación que sólo aparece cuando se selecciona una imagen.

::component-example
---
Elevado: verdadero
Colapso: Verdad
Nombre: 'editor-toolbar-image-example'
Categoría: P-8
---
::

### Con enlace popover

En este ejemplo se muestra cómo crear un popover de enlace personalizado utilizando la propiedad `slot` en los elementos de la barra de herramientas y el componente [Popover](/docs/components/popover).

1. Crear un componente de Vue que envuelve un [Popover](/docs/components/popover) con funcionalidad de edición de enlaces:

::component-example
---
Reseña: FALSE
Colapso: Verdad
Nombre del archivo: 'editor-link-popover'
---
::

2. Use el componente personalizado en la barra de herramientas con una ranura con nombre:

::component-example
---
Elevado: verdadero
Colapso: Verdad
Nombre del archivo: 'editor-toolbar-custom-slot-example'
Categoría: P-8
---
::

@@pH169

@170000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@171@171@171

Componentes de slots

@@2017@Proyecto

Componente Tema

@173@Changelog (Edición española)

Categoría: component-changelog

---
title: EditoresDespacho
description: Una manija arrastrable para reordenar y seleccionar bloques en el editor.
category: editor
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorDragHandle.vue
---

@@pH000@@Uso del producto

El componente EditorDragHandle proporciona la funcionalidad de arrastrar y soltar para reordenar los bloques del editor utilizando el paquete `@tiptap/extension-drag-handle-vue-3`.

::caution
Debe usarse dentro de la ranura predeterminada de un componente [Editor](/docs/components/editor) para tener acceso a la instancia del editor.
::

Se extiende el [Button](/docs/components/button) componente, por lo que puede pasar cualquier propiedad, como `color`,`variant`,`size`, etc

::component-example
---
Colapso: Verdad
Elevado: verdadero
Nombre: 'editor-drag-handle-example'
Categoría: P-8
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/drag-handle-vue" target="_blank"}
Obtenga más información sobre la extensión Drag Handle en la documentación de TipTap.
::

@@pH013@Icon

Utilice el prop `icon` para personalizar el icono de la manija de arrastre.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorDragHandle :editor="editor" icon="i-lucide-move" />
  </UEditor>
</template>
```

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.drag`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.drag`.
:::
::

@@26@Opciones

Utilice el prop `options` para personalizar el comportamiento de posicionamiento utilizando [Floating UI options](https://floating-ui.com/docs/computeposition#options).

::note
El desplazamiento se calcula automáticamente para centrar la manija para bloques pequeños y alinearla con la parte superior para bloques más altos.
::

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorDragHandle
      :editor="editor"
      :options="{
        placement: 'left'
      }"
    />
  </UEditor>
</template>
```

@@44@Ejemplos

### Con menú desplegable

Utilice la ranura predeterminada para agregar un [DropdownMenu](/docs/components/dropdown-menu) con acciones a nivel de bloque como duplicar, eliminar, mover hacia arriba/hacia abajo o transformar bloques en diferentes tipos.

Escuche el evento `@node-change` para rastrear el nodo actualmente suspendido y su posición, luego use `editor.chain().setMeta('lockDragHandle', open).run()`{lang="ts-type"} para bloquear la posición del controlador mientras el menú está abierto.

::component-example
---
Elevado: verdadero
Colapso: Verdad
Nombre: 'editor-drag-handle-drop-menu-example'
Categoría: P-8
---
::

::note
Este ejemplo utiliza la utilidad `mapEditorItems` de `@nuxt/ui/utils/editor` para asignar automáticamente los tipos de manejadores (como `duplicate`,`delete`,`moveUp`, etc.) a sus comandos de editor correspondientes con una administración de estado adecuada.
::

### Con menú de sugerencias

Utilice la ranura predeterminada para agregar un [Button](/docs/components/button) junto al controlador de arrastre para abrir el [EditorSuggestionMenu](/docs/components/editor-suggestion-menu).

Llame a la función de ranura `onClick` para obtener la posición actual del nodo, luego use `handlers.suggestion?.execute(editor, { pos: node?.pos }).run()`{lang="ts-type"} para insertar nuevos bloques en esa posición.

::component-example
---
Elevado: verdadero
Colapso: Verdad
Nombre: 'editor-drag-handle-suggestion-menu-example'
Categoría:! p-0
---
::

@@pH070@@pH070

@@701@@Propuestas

Componentes Props

@@722@espanol

Componentes de slots

@@733@@Emisiones

Componentes Emisiones

@@74000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@@750@Changelog

Categoría: component-changelog

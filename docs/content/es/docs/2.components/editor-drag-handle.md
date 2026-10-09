---
title: EditoresDespacho
description: Una manija arrastrable para reordenar y seleccionar bloques en el editor.
category: editor
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorDragHandle.vue
---

xph0000xUso

El componente EditorDragHandle proporciona la funcionalidad de arrastrar y soltar para reordenar los bloques del editor utilizando el paquete `@tiptap/extension-drag-handle-vue-3`.

::caution
Debe utilizarse dentro de la ranura predeterminada de un componente [Editor](/docs/components/editor) para tener acceso a la instancia del editor.
::

Extiende el componente [Button](/docs/components/button), por lo que puede pasar cualquier propiedad como `color`, `variant`, `size`, etc.

::component-example
---
collapse: true
elevated: true
name: 'editor-drag-handle-example'
class: 'p-8'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/drag-handle-vue" target="_blank"}
Obtenga más información sobre la extensión Drag Handle en la documentación de TipTap.
::

### Icon

Utilice el prop `icon` para personalizar el icono de la manija de arrastre.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorDragHandle :editor="editor" icon="i-lucide-move" />
  </UEditor>
</template>
```

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.drag`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` bajo la tecla `ui.icons.drag`.
:::
::

### opciones

Utilice el prop `options` para personalizar el comportamiento de posicionamiento utilizando las opciones de interfaz de usuario flotante ](https://floating-ui.com/docs/computeposition#options).

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

## ejemplos

### Con menú desplegable

Utilice la ranura predeterminada para agregar un [DropdownMenu](/docs/components/dropdown-menu) con acciones a nivel de bloque como duplicar, eliminar, mover hacia arriba/hacia abajo o transformar bloques en diferentes tipos.

Escuche el evento `@node-change` para rastrear el nodo actualmente suspendido y su posición, luego use `editor.chain().setMeta('lockDragHandle', open).run()`{lang="ts-type"} para bloquear la posición del controlador mientras el menú está abierto.

::component-example
---
elevated: true
collapse: true
name: 'editor-drag-handle-dropdown-menu-example'
class: 'p-8'
---
::

::note
Este ejemplo utiliza la utilidad `mapEditorItems` de `@nuxt/ui/utils/editor` para asignar automáticamente los tipos de manejadores (como `duplicate`, `delete`, `moveUp`, etc.) a sus comandos de editor correspondientes con la administración de estado adecuada.
::

### Con menú de sugerencias

Utilice la ranura predeterminada para agregar un [Button](/docs/components/button) junto a la manija de arrastre para abrir el [EditorSuggestionMenu](xph077).

Llamar a la función de ranura `onClick` para obtener la posición actual del nodo, a continuación, utilizar `handlers.suggestion?.execute(editor, { pos: node?.pos }).run()`{lang="ts-type"} para insertar nuevos bloques en esa posición.

::component-example
---
elevated: true
collapse: true
name: 'editor-drag-handle-suggestion-menu-example'
class: '!p-0'
---
::

## API

### Accesorios

:component-props

### Slots

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog

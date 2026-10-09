---
title: EditorialidadEmocionesMenú
description: "Un menú de selección de emojis que muestra sugerencias de emojis al escribir el carácter: en el editor."
category: editor
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorEmojiMenu.vue
---

xph0000xUso

El componente EditorEmojiMenu muestra un menú de sugerencias de emoji al escribir el carácter `:` en el editor e inserta el emoji seleccionado.

::note
Utiliza el composable `useEditorMenu` construido sobre la utilidad [Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion) de TipTap para filtrar elementos a medida que escribe y admite la navegación con el teclado (teclas de flecha, ingresar para seleccionar, escapar para cerrar).
::

::caution
Debe utilizarse dentro de la ranura predeterminada de un componente [Editor](/docs/components/editor) para tener acceso a la instancia del editor.
::

::component-example
---
elevated: true
collapse: true
name: 'editor-emoji-menu-example'
class: 'p-8'
---
::

::warning
El paquete `@tiptap/extension-emoji` no está instalado de forma predeterminada, debe instalarlo por separado.
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/emoji" target="_blank"}
Más información sobre la extensión Emoji en la documentación de TipTap.
::

### Artículos

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

- x`name: string`xx{lang="ts-type"}
- xx`emoji: string`xx{lang="ts-type"}
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`tags?: string[]`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xxx`group?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

::component-example
---
elevated: true
collapse: true
name: 'editor-emoji-menu-items-example'
class: 'p-8'
---
::

::note
You can also pass an array of arrays to the `items` prop to create separate groups of items.
::

### xChar (Edición española)

Utilice el prop `char` para cambiar el carácter de activación. Predeterminados a `:`{lang="ts-type"}.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu :editor="editor" :items="items" char=";" />
  </UEditor>
</template>
```

### Sugerencia: badge{label="4.7+" class="align-text-top"}

Utilice el prop `suggestion` para personalizar el comportamiento de coincidencia [Sugerencia de TipTap ](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings).

Esto es útil cuando el carácter desencadenante debe abrirse directamente después de otros caracteres en lugar de requerir el prefijo de espacio en blanco predeterminado.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu
      :editor="editor"
      :items="items"
      :suggestion="{
        allowedPrefixes: null
      }"
    />
  </UEditor>
</template>
```

### Opciones

Utilice el prop `options` para personalizar el comportamiento de posicionamiento utilizando las opciones de interfaz de usuario flotante ](https://floating-ui.com/docs/computeposition#options).

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu
      :editor="editor"
      :items="items"
      :options="{
        placement: 'bottom-start',
        offset: 4
      }"
    />
  </UEditor>
</template>
```

## API (Edición española)

### Accesorios

:component-props

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog

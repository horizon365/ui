---
title: EditormentoMenú
description: Menú de mención que muestra sugerencias de usuario al escribir un carácter de activación en el editor.
category: editor
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorMentionMenu.vue
---

xph0000xUso

The EditorMentionMenu component displays a menu of user suggestions when typing a trigger character (defaults to `@`) in the editor and inserts the selected mention using the `@tiptap/extension-mention` package.

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
name: 'editor-mention-menu-example'
class: 'p-8'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/mention" target="_blank"}
Obtenga más información sobre la extensión Mention en la documentación de TipTap.
::

xph018XArtículos

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

- x`label: string`xx{lang="ts-type"}
- x`avatar?: AvatarProps`xx{lang="ts-type"}
- xx`icon?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`description?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xxx`disabled?: boolean`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

::component-example
---
elevated: true
collapse: true
name: 'editor-mention-menu-items-example'
class: 'p-8'
---
::

::note
También puede pasar una matriz de matrices al soporte `items` para crear grupos separados de elementos.
::

### Char (Edición española)

Utilice el prop `char` para cambiar el carácter de activación. Por defecto es `@`{lang="ts-type"}. El carácter de activación también se utiliza como prefijo al representar la mención insertada (por ejemplo, `#channel` en lugar de `@channel`).

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="channels" char="#" />
  </UEditor>
</template>
```

::note
Puede utilizar varios componentes `EditorMentionMenu` en el mismo editor con diferentes accesorios `char` y `plugin-key` para admitir diferentes tipos de mención.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="users" plugin-key="mentionMenu" />
    <UEditorMentionMenu :editor="editor" :items="tags" char="#" plugin-key="tagMenu" />
  </UEditor>
</template>
```
::

### Sugerencia: badge{label="4.7+" class="align-text-top"}

Utilice el prop `suggestion` para personalizar el comportamiento de coincidencia de sugerencias [x](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings) de TipTap.

Esto es útil cuando el carácter desencadenante debe abrirse directamente después de otros caracteres en lugar de requerir el prefijo de espacio en blanco predeterminado.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu
      :editor="editor"
      :items="items"
      char="#"
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
    <UEditorMentionMenu
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

## Ejemplos

### Con ignorar filtro: badge{label="4.4+" class="align-text-top"}

Puede configurar la prop `ignore-filter` en `true` para desactivar la búsqueda interna y usar su propia lógica de búsqueda. Use `v-model:search-term` para acceder al término de búsqueda actual y obtener elementos de una API.

::component-example
---
elevated: true
collapse: true
name: 'editor-mention-menu-ignore-filter-example'
class: 'p-8'
---
::

::note
Este ejemplo utiliza [`refDebounced`](https://vueuse.org/shared/refDebounced/) para desacreditar las llamadas a la API.
::

## API (Edición española)

### Props (accesorios)

:component-props

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog

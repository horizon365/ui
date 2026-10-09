---
title: EditorialSugerenciaMenú
description: Un menú de comandos que muestra sugerencias de formato y acción al escribir el carácter/en el editor.
category: editor
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorSuggestionMenu.vue
---

xph0000xUso

El componente EditorSuggestionMenu muestra un menú de sugerencias de formato y acción cuando se escribe un carácter de activación en el editor y ejecuta el correspondiente [handler](/docs/components/editor#handlers) cuando se selecciona un elemento.

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
name: 'editor-suggestion-menu-example'
class: 'p-8'
---
::

### Artículos

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`label?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xxx`description?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`icon?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`disabled?: boolean`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

::component-example
---
elevated: true
collapse: true
name: 'editor-suggestion-menu-items-example'
class: 'p-8'
---
::

::note
También puede pasar una matriz de matrices al soporte `items` para crear grupos separados de elementos.
::

::tip
Use `type: 'label'` para encabezados de sección y `type: 'separator'` para divisores visuales para organizar comandos en grupos lógicos para una mejor visibilidad.
::

### Char (Edición española)

Utilice el prop `char` para cambiar el carácter de activación. Predeterminados a `/`{lang="ts-type"}.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu :editor="editor" :items="items" char=">" />
  </UEditor>
</template>
```

### Sugerencia: badge{label="4.7+" class="align-text-top"}

Utilice el prop `suggestion` para personalizar el comportamiento de coincidencia de sugerencias [x](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings).

Esto es útil cuando el carácter desencadenante debe abrirse directamente después de otros caracteres en lugar de requerir el prefijo de espacio en blanco predeterminado.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu
      :editor="editor"
      :items="items"
      char=":"
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
    <UEditorSuggestionMenu
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

### Props (Edición española)

:component-props

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog

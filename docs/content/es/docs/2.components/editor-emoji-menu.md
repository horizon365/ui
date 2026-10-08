---
title: EditorialidadEmocionesMenú
description: "Un menú de selección de emojis que muestra sugerencias de emojis al escribir el carácter: en el editor."
category: editor
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorEmojiMenu.vue
---

@@pH000@@Uso del producto

El componente EditorEmojiMenu muestra un menú de sugerencias de emojis al escribir el carácter `:` en el editor e inserta el emoji seleccionado.

::note
Utiliza el `useEditorMenu` composable construido en la parte superior de TipTap's [Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion) utilidad para filtrar elementos a medida que escribe y soporta la navegación del teclado (teclas de flecha, entrar para seleccionar, escapar para cerrar).
::

::caution
Debe usarse dentro de la ranura predeterminada de un componente [Editor](/docs/components/editor) para tener acceso a la instancia del editor.
::

::component-example
---
Elevado: Verdadero
Colapso: Verdad
Nombre: 'emotico-emoji-menu-ejemplo'
Categoría: P-8
---
::

::warning
El paquete `@tiptap/extension-emoji` no está instalado de forma predeterminada, debe instalarlo por separado.
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/emoji" target="_blank"}
Más información sobre la extensión Emoji en la documentación de TipTap.
::

@13@130 puntos

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@
@@
@@

::component-example
---
Elevado: verdadero
Colapso: Verdad
Nombre: 'emoji-emoji-menu-items-example'
Categoría: P-8
---
::

::note
También puede pasar un array de arrays al prop `items` para crear grupos separados de elementos.
::

@344@34@34

Utilice el prop `char` para cambiar el carácter de activación. Predeterminados a `:`{lang="ts-type"}.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu :editor="editor" :items="items" char=";" />
  </UEditor>
</template>
```

### Sugerencia: badge{label="4.7+" class="align-text-top"}

Utilice el prop `suggestion` para personalizar el comportamiento de coincidencia de sugerencias de TipTap [](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings).

Esto es útil cuando el carácter de activación debe abrirse directamente después de otros caracteres en lugar de requerir el prefijo de espacio en blanco predeterminado.

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

Utilice el prop `options` para personalizar el comportamiento de posicionamiento utilizando [opciones de interfaz de usuario flotante ](https://floating-ui.com/docs/computeposition#options).

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

@085

@866@8666

Componentes Props

@087@@Proyecto

Componente Tema

@888@@Changelog (en inglés)

Categoría: component-changelog

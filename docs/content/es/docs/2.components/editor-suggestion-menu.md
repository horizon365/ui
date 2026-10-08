---
title: EditorialSugerenciaMenú
description: Un menú de comandos que muestra sugerencias de formato y acción al escribir el carácter/en el editor.
category: editor
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorSuggestionMenu.vue
---

@@pH000@@Uso del producto

The EditorSuggestionMenu component displays a menu of formatting and action suggestions when typing a trigger character in the editor and executes the corresponding [handler](/docs/components/editor#handlers) when an item is selected.

::note
Utiliza el `useEditorMenu` composable construido sobre [Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion) de TipTap para filtrar elementos a medida que escribe y admite la navegación del teclado (teclas de flecha, ingresar para seleccionar, escapar para cerrar).
::

::caution
Debe usarse dentro de la ranura predeterminada de un componente [Editor](/docs/components/editor) para tener acceso a la instancia del editor.
::

::component-example
---
Elevado: verdadero
Colapso: Verdad
nombre: 'sugestión-menu-ejemplo'
Categoría: P-8
---
::

@140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@
@@
@@

::component-example
---
Elevado: Verdadero
Colapso: Verdad
Nombre: 'editor-sugerencia-menu-items-example'
Categoría: P-8
---
::

::note
También puede pasar un array de arrays al prop `items` para crear grupos separados de elementos.
::

::tip
Utilice `type: 'label'` para encabezados de sección y `type: 'separator'` para divisores visuales para organizar comandos en grupos lógicos para una mejor visibilidad.
::

@41@441

Utilice el prop `char` para cambiar el carácter de activación. Predeterminados a `/`{lang="ts-type"}.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu :editor="editor" :items="items" char=">" />
  </UEditor>
</template>
```

### Sugerencia: badge{label="4.7+" class="align-text-top"}

Utilice el prop `suggestion` para personalizar el comportamiento de coincidencia de sugerencias de TipTap [https://tiptap.dev/docs/editor/api/utilities/suggestion#settings).

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

@@73@opciones

Utilice el prop `options` para personalizar el comportamiento de posicionamiento utilizando [opciones de interfaz de usuario flotante ](https://floating-ui.com/docs/computeposition#options).

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

@@pH093 @@ de nuevo

@@pH094@@Propuestas

Componentes Props

@095 @@ Temas

Componente Tema

@096@Changelog

Categoría: component-changelog

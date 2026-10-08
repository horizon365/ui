---
title: EditormentoMenú
description: Menú de mención que muestra sugerencias de usuario al escribir un carácter de activación en el editor.
category: editor
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorMentionMenu.vue
---

@@pH000@@Uso del producto

El componente EditorMentionMenu muestra un menú de sugerencias de usuario al escribir un carácter de activación (por defecto `@`) en el editor e inserta la mención seleccionada utilizando el paquete `@tiptap/extension-mention`.

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
Nombre: 'editor-menu-ejemplo'
Categoría: P-8
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/mention" target="_blank"}
Obtenga más información sobre la extensión Mention en la documentación de TipTap.
::

@@12000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@
@@

::component-example
---
Elevado: verdadero
Colapso: Verdad
Nombre: 'editor-menu-menu-items-example'
Categoría: P-8
---
::

::note
También puede pasar un array de arrays al prop `items` para crear grupos separados de elementos.
::

@300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `char` para cambiar el carácter de activación. Por defecto a `@`{lang="ts-type"}. El carácter de activación también se utiliza como prefijo al representar la mención insertada (por ejemplo,`#channel` en lugar de `@channel`).

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

Utilice el prop `suggestion` para personalizar el comportamiento de coincidencia de sugerencias de TipTap [](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings).

Esto es útil cuando el carácter de activación debe abrirse directamente después de otros caracteres en lugar de requerir el prefijo de espacio en blanco predeterminado.

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

@@75@opciones

Utilice el prop `options` para personalizar el comportamiento de posicionamiento utilizando [Floating UI options](https://floating-ui.com/docs/computeposition#options).

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

@@P095@Ejemplos

### Con ignorar el filtro: badge{label="4.4+" class="align-text-top"}

Puede configurar la prop `ignore-filter` a `true` para desactivar la búsqueda interna y utilizar su propia lógica de búsqueda. Use `v-model:search-term` para acceder al término de búsqueda actual y buscar elementos desde una API.

::component-example
---
Elevado: Verdadero
Colapso: Verdad
Nombre: 'editor-mención-menu-ignorar-filter-ejemplo'
Categoría: P-8
---
::

::note
Este ejemplo utiliza [`refDebounced`](https://vueuse.org/shared/refDebounced/) para desacreditar las llamadas a la API.
::

@@pH106 @@ Español

@107@107@107

Componentes Props

@108 @@ Proyecto

Componente Tema

@109@Changelog

Categoría: component-changelog

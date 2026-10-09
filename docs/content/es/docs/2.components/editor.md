---
description: Un editor de texto enriquecido basado en TipTap con soporte para tipos de contenido Markdown, HTML y JSON.
category: editor
links:
  - label: Tiptac
    icon: i-custom-tiptap
    to: https://tiptap.dev/
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Editor.vue
---

xph0000xUso

El componente Editor proporciona una poderosa experiencia de edición de texto enriquecido basada en [TipTap](https://tiptap.dev/). Admite múltiples formatos de contenido (JSON, HTML, Markdown), barras de herramientas personalizables, reordenamiento de bloques de arrastrar y soltar, comandos de barra, menciones, selector de emoji y arquitectura extensible para agregar funcionalidad personalizada.

::component-example
---
source: false
elevated: true
name: 'editor-example'
class: 'relative h-176 overflow-y-auto !p-0 rounded-b-md'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/docs/app/components/content/examples/editor/EditorExample.vue" aria-label="Ver código fuente"}
Este ejemplo muestra un componente Editor listo para producción. Echa un vistazo al código fuente en GitHub.
::

::warning
Si encuentra errores relacionados con prosemiror, como `Adding different instances of a keyed plugin`, al usar el componente Editor o sus extensiones, es posible que deba agregar paquetes prosemirror a la lista `vite.optimizeDeps.include` en su archivo `nuxt.config.ts`.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: [
        '@nuxt/ui > prosemirror-state',
        '@nuxt/ui > prosemirror-transform',
        '@nuxt/ui > prosemirror-model',
        '@nuxt/ui > prosemirror-view',
        '@nuxt/ui > prosemirror-gapcursor'
      ]
    }
  }
})
```
::

### Contenido

Utilice la directiva `v-model` para controlar el valor del Editor.

::component-code
---
elevated: true
prettier: true
collapse: true
ignore:
  - modelValue.type
  - modelValue.content
  - class
external:
  - modelValue
class: 'p-8'
props:
  modelValue:
    type: 'doc'
    content:
      - type: 'heading'
        attrs:
          level: 1
        content:
          - type: 'text'
            text: 'Hello World'
      - type: 'paragraph'
        content:
          - type: 'text'
            text: 'This is a '
          - type: 'text'
            marks:
              - type: 'bold'
            text: 'rich text'
          - type: 'text'
            text: ' editor.'
  class: 'w-full min-h-21'
---
::

### Contenido

El editor detecta automáticamente el formato de contenido basado en el tipo `v-model`: las cadenas se tratan como `html`{lang="ts-type"} y los objetos como `json`{lang="ts-type"}.

Puede establecer explícitamente el formato utilizando la prop `content-type`: `json`{lang="ts-type"}, `html`{lang="ts-type"} o `markdown`{lang="ts-type"}.

::component-code
---
elevated: true
prettier: true
ignore:
  - modelValue
  - contentType
  - class
external:
  - modelValue
class: 'p-8'
props:
  modelValue: |
    <h1>Hello World</h1>
    <p>This is a <strong>rich text</strong> editor.</p>
  contentType: 'html'
  class: 'w-full min-h-21'
---
::

### Extensiones

El editor incluye las siguientes extensiones por defecto:

- x[**StarterKit**](#starter-kit)-Funciones básicas de edición (negrita, cursiva, encabezados, listas, etc.)
- [**Placeholder**](#placeholder)-Mostrar el texto del marcador de posición (cuando se proporciona el marcador de posición)
- **Image** Insertar y mostrar imágenes.
- **Mention**-Add @ menciona soporte
- **Markdown**-Analice y serialice la reducción de valor (cuando el tipo de contenido es la reducción)

::note
Cada extensión incorporada se puede configurar utilizando su correspondiente prop (`starter-kit`, `placeholder`, `image`, `mention`, `markdown`) para personalizar su comportamiento con las opciones de TipTap.
::

Puede utilizar el soporte `extensions` para agregar extensiones TipTap adicionales para mejorar las capacidades del Editor:

```vue
<script setup lang="ts">
import { Emoji } from '@tiptap/extension-emoji'
import { TextAlign } from '@tiptap/extension-text-align'

const value = ref('<h1>Hello World</h1>\n')
</script>

<template>
  <UEditor
    v-model="value"
    :extensions="[
      Emoji,
      TextAlign.configure({
        types: ['heading', 'paragraph']
      })
    ]"
  />
</template>
```

::tip{to="#with-image-upload"}
Echa un vistazo al ejemplo de carga de imágenes para crear extensiones de TipTap personalizadas.
::

### Placeholder (Edición española)

Utilice el prop `placeholder` para establecer un texto de marcador de posición que se muestra en párrafos vacíos.

::component-code
---
elevated: true
prettier: true
ignore:
  - modelValue
  - contentType
  - placeholder
  - class
external:
  - modelValue
class: 'p-8'
props:
  modelValue: ''
  placeholder: 'Start writing...'
  class: 'w-full min-h-7'
---
::

::note
La prop `placeholder` acepta una cadena o un objeto con [PlaceholderOptions](https://tiptap.dev/docs/editor/extensions/functionality/placeholder) y una propiedad adicional `mode`:
- `everyLine`: Mostrar marcador de posición en cada línea vacía cuando se enfoca (predeterminado).
- `firstLine`: Muestra el marcador de posición sólo en la primera línea cuando el editor está vacío.

```vue
<template>
  <UEditor :placeholder="{ placeholder: 'Start writing...', mode: 'firstLine' }" />
</template>
```
::

::tip
De forma predeterminada, los marcadores de posición solo aparecen en los nodos vacíos de nivel superior. Para mostrar marcadores de posición en elementos anidados, como elementos de lista, establezca `includeChildren` en `true`:

```vue
<template>
  <UEditor :placeholder="{ placeholder: 'Start writing...', includeChildren: true }" />
</template>
```
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/placeholder" target="_blank"}
Obtenga más información sobre la extensión Placeholder en la documentación de TipTap .
::

### Kit de inicio

Utilice el accesorio `starter-kit` para configurar la extensión TipTap StarterKit incorporada que incluye funciones de editor comunes como negrita , cursiva , encabezados , listas , comillas de bloque , bloques de código y más .

```vue
<script setup lang="ts">
const value = ref('<h1>Hello World</h1>\n')
</script>

<template>
  <UEditor
    v-model="value"
    :starter-kit="{
      blockquote: false,
      headings: {
        levels: [1, 2, 3, 4]
      },
      dropcursor: {
        color: 'var(--ui-primary)',
        width: 2
      },
      link: {
        openOnClick: false
      }
    }"
  />
</template>
```

::tip
Configure `starter-kit` a `false` para un editor de texto plano . Mantiene los nodos esenciales (párrafo , texto , historial) y deshabilita todas las funciones de formato como negrita , cursiva , encabezados , listas , código , blockquote , enlaces y reglas horizontales .
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/starterkit" target="_blank"}
Obtenga más información sobre la extensión StarterKit en la documentación de TipTap .
::

### Controladores

Cuando se agrega una propiedad `kind` a un elemento [EditorToolbar](/docs/components/editor-toolbar) o [EditorSuggestionMenuxph220/docs/components/editor-suggestion-menu) , el controlador correspondiente ejecuta el comando TipTap y administra su estado (activo , deshabilitado , etc.) .

#### Controladores por defecto

El componente Editor proporciona estos manejadores predeterminados , a los que puede hacer referencia en la barra de herramientas o en los elementos del menú de sugerencias utilizando la propiedad `kind` :

| El Handler| Descripción| El uso|
|---------|-------------|-------|
| `mark`x{lang="ts-type"}| Alterna las marcas de texto (negrita , itálica , huelga , código , subrayado)| Requiere la propiedad `mark` en item|
| `textAlign`x{lang="ts-type"} (Edición española)| Alineación del texto (izquierda , centro , derecha , justificar)| Requiere la propiedad `align` en item|
| `heading`{lang="ts-type"} (Edición española)| Toggle niveles de encabezado (1 - 6)| Requiere la propiedad `level` en item|
| `link`x{lang="ts-type"} (Edición española)| Añadir , editar o eliminar enlaces| Indique la URL si no se proporciona|
| `image`x{lang="ts-type"} (Edición española)| Insertar imágenes| Indique la URL si no se proporciona|
| `blockquote`x{lang="ts-type"}| Tagged blockquotes||
| `bulletList`x{lang="ts-type"}| Lista de Bullets Toggle| Maneja conversiones de lista|
| `orderedList`x{lang="ts-type"} (Edición española)| Toggle listas ordenadas| Maneja conversiones de lista|
| `taskList`x{lang="ts-type"} (Edición española)| Toggle listas de tareas| Maneja conversiones de lista|
| `codeBlock`x{lang="ts-type"} (Edición española)| Toggle Bloques de código||
| `horizontalRule`x{lang="ts-type"}| Introducir reglas horizontales||
| `paragraph`x{lang="ts-type"}| Formato de párrafo||
| `undo`x{lang="ts-type"} (Edición española)| Undo el último cambio||
| `redo`x{lang="ts-type"} (Edición española)| Redo último cambio sin hacer||
| `clearFormatting`x{lang="ts-type"} (Edición española)| Eliminar todo el formato| Trabaja con selección o posición|
| `duplicate`x{lang="ts-type"} (Edición española)| Duplicar el nodo| Requiere la propiedad `pos` en item|
| `delete`{lang="ts-type"} (Edición española)| Borrar el nodo| Requiere la propiedad `pos` en item|
| `moveUp`x{lang="ts-type"}| Mover un nodo hacia arriba| Requiere la propiedad `pos` en item|
| `moveDown`x{lang="ts-type"}| Mover un nodo hacia abajo| Requiere la propiedad `pos` en item|
| `suggestion`x{lang="ts-type"}| Menú de sugerencias Trigger| Insertar el carácter `/`|
| `mention`x{lang="ts-type"}| Trigger Menú| Inserción de caracteres `@`|
| `emoji`x{lang="ts-type"}| Inicio Emoji Picker| Inserción de caracteres `:`|

::warning
Los controladores `taskList` y `textAlign` solo funcionan cuando se instalan sus respectivas extensiones, ya que no están incluidos en el Editor de forma predeterminada.
::

A continuación se explica cómo utilizar los controladores predeterminados en la barra de herramientas o elementos del menú de sugerencias:

```vue
<script setup lang="ts">
import type { EditorToolbarItem } from '@nuxt/ui'

const value = ref('<h1>Hello World</h1>\n')

const items: EditorToolbarItem[] = [
  { kind: 'mark', mark: 'bold', icon: 'i-lucide-bold' },
  { kind: 'mark', mark: 'italic', icon: 'i-lucide-italic' },
  { kind: 'heading', level: 1, icon: 'i-lucide-heading-1' },
  { kind: 'heading', level: 2, icon: 'i-lucide-heading-2' },
  { kind: 'textAlign', align: 'left', icon: 'i-lucide-align-left' },
  { kind: 'textAlign', align: 'center', icon: 'i-lucide-align-center' },
  { kind: 'bulletList', icon: 'i-lucide-list' },
  { kind: 'orderedList', icon: 'i-lucide-list-ordered' },
  { kind: 'blockquote', icon: 'i-lucide-quote' },
  { kind: 'link', icon: 'i-lucide-link' }
]
</script>

<template>
  <UEditor v-slot="{ editor }" v-model="value">
    <UEditorToolbar :editor="editor" :items="items" />
  </UEditor>
</template>
```

#### Custom manejadores

Utilice el prop `handlers` para extender o anular los controladores predeterminados. Los controladores personalizados se fusionan con los controladores predeterminados, de modo que puede agregar nuevas acciones o modificar el comportamiento existente.

Cada manejador implementa la interfaz `EditorHandler`{lang="ts-type"}:

```ts
interface EditorHandler {
  /* Checks if the command can be executed in the current editor state */
  canExecute: (editor: Editor, item?: any) => boolean
  /* Executes the command and returns a Tiptap chain */
  execute: (editor: Editor, item?: any) => any
  /* Determines if the item should appear active (used for toggle states) */
  isActive: (editor: Editor, item?: any) => boolean
  /* Optional additional check to disable the item (combined with `canExecute`) */
  isDisabled?: (editor: Editor, item?: any) => boolean
}
```

Aquí hay un ejemplo de creación de controladores personalizados:

```vue
<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import type { EditorCustomHandlers, EditorToolbarItem } from '@nuxt/ui'

const value = ref('<h1>Hello World</h1>\n')

const customHandlers = {
  highlight: {
    canExecute: (editor: Editor) => editor.can().toggleHighlight(),
    execute: (editor: Editor) => editor.chain().focus().toggleHighlight(),
    isActive: (editor: Editor) => editor.isActive('highlight'),
    isDisabled: (editor: Editor) => !editor.isEditable
  }
} satisfies EditorCustomHandlers

const items = [
  // Built-in handler
  { kind: 'mark', mark: 'bold', icon: 'i-lucide-bold' },
  // Custom handler
  { kind: 'highlight', icon: 'i-lucide-highlighter' }
] satisfies EditorToolbarItem<typeof customHandlers>[]
</script>

<template>
  <UEditor v-slot="{ editor }" v-model="value" :handlers="customHandlers">
    <UEditorToolbar :editor="editor" :items="items" />
  </UEditor>
</template>
```

::tip{to="#with-image-upload"}
Consulte el ejemplo de carga de imágenes para una implementación completa con controladores personalizados.
::

## Ejemplos

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt-ui-templates/editor" target="_blank"}
Echa un vistazo al código fuente de nuestro **Editor template** en GitHub para un ejemplo de la vida real.
::

### Con barra de herramientas

Puede usar el componente [EditorToolbar](/docs/components/editor-toolbar) para agregar una barra de herramientas `fixed`, `bubble` o `floating` al Editor con acciones de formato comunes.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-toolbar-example'
class: 'p-8'
---
::

### Con control de arrastre

Puede usar el componente [EditorDragHandle](/docs/components/editor-drag-handle) para agregar un controlador arrastrable para reordenar bloques.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-drag-handle-example'
class: 'p-8'
---
::

### Con menú de sugerencias

Puede utilizar el componente [EditorSuggestionMenu](/docs/components/editor-suggestion-menu) para agregar comandos de barra para formatear e insertar rápidamente.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-suggestion-menu-example'
class: 'p-8'
---
::

### Menú de menciones

Puede usar el componente [EditorMentionMenu](/docs/components/editor-mention-menu) para agregar menciones @ para etiquetar usuarios o entidades.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-mention-menu-example'
class: 'p-8'
---
::

### Con menú de emoji

Puede usar el componente [EditorEmojiMenu](/docs/components/editor-emoji-menu) para agregar soporte para el selector de emojis.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-emoji-menu-example'
class: 'p-8'
---
::

### With image upload

En este ejemplo se muestra cómo crear una función de carga de imágenes utilizando el prop `extensions` para registrar un nodo TipTap personalizado y el prop `handlers` para definir cómo el botón de la barra de herramientas activa el flujo de carga.

1. Crear un componente de Vue que utilice el componente [FileUpload](/docs/components/file-upload):

::component-example
---
preview: false
collapse: true
name: 'editor-image-upload-node'
---
::

2. Crear una extensión TipTap personalizada para registrar el nodo:

::component-example
---
preview: false
collapse: true
lang: 'ts'
name: 'editor-image-upload-extension'
---
::

3. Use la extensión personalizada en el Editor:

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-image-upload-example'
class: '!p-0'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/custom-extensions" target="_blank"}
Obtenga más información sobre la creación de extensiones personalizadas en la documentación de TipTap.
::

### Con finalización de IA

Este ejemplo muestra cómo agregar funciones impulsadas por IA al Editor utilizando el SDK](https://ai-sdk.dev/) [Vercel AI, específicamente el composable [`useCompletion`xph45xxph45x) para completar el texto en streaming, Combinado con el gateway](https://vercel.com/ai-gateway) de Vercel AI para acceder a los modelos de IA a través de un punto final centralizado. acciones (corregir gramática, extender, reducir, simplificar, traducir, etc.).

::note
Primero debe instalar estas dependencias para usar este ejemplo:

::code-group{sync="pm"}

```bash [pnpm]
pnpm add ai @ai-sdk/gateway @ai-sdk/vue
```

```bash [yarn]
yarn add ai @ai-sdk/gateway @ai-sdk/vue
```

```bash [npm]
npm install ai @ai-sdk/gateway @ai-sdk/vue
```

```bash [bun]
bun add ai @ai-sdk/gateway @ai-sdk/vue
```

::

::

1. Crear una extensión TipTap personalizada que maneje sugerencias de texto fantasma en línea:

::component-example
---
preview: false
collapse: true
name: 'editor-completion-extension'
lang: 'ts'
---
::

2. Crear un composable que gestione el estado de finalización de la IA y los manejadores:

::component-example
---
preview: false
collapse: true
name: 'editor-use-completion'
filename: 'useEditorCompletion'
lang: 'ts'
---
::

3. Crear un punto final de la API del servidor para manejar solicitudes de finalización utilizando [`streamText`](https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text#streamtext):

::code-collapse

```ts [server/api/completion.post.ts]
import { streamText, createTextStreamResponse } from 'ai'
import { gateway } from '@ai-sdk/gateway'

export default defineEventHandler(async (event) => {
  const { prompt, mode, language } = await readBody(event)
  if (!prompt) {
    throw createError({ statusCode: 400, message: 'Prompt is required' })
  }

  let instructions: string
  let maxOutputTokens: number

  const preserveMarkdown = 'IMPORTANT: Preserve all markdown formatting (bold, italic, links, etc.) exactly as in the original.'

  switch (mode) {
    case 'fix':
      instructions = `You are a writing assistant. Fix all spelling and grammar errors in the given text. ${preserveMarkdown} Only output the corrected text, nothing else.`
      maxOutputTokens = 500
      break
    case 'extend':
      instructions = `You are a writing assistant. Extend the given text with more details, examples, and explanations while maintaining the same style. ${preserveMarkdown} Only output the extended text, nothing else.`
      maxOutputTokens = 500
      break
    case 'reduce':
      instructions = `You are a writing assistant. Make the given text more concise by removing unnecessary words while keeping the meaning. ${preserveMarkdown} Only output the reduced text, nothing else.`
      maxOutputTokens = 300
      break
    case 'simplify':
      instructions = `You are a writing assistant. Simplify the given text to make it easier to understand, using simpler words and shorter sentences. ${preserveMarkdown} Only output the simplified text, nothing else.`
      maxOutputTokens = 400
      break
    case 'summarize':
      instructions = 'You are a writing assistant. Summarize the given text concisely while keeping the key points. Only output the summary, nothing else.'
      maxOutputTokens = 200
      break
    case 'translate':
      instructions = `You are a writing assistant. Translate the given text to ${language || 'English'}. ${preserveMarkdown} Only output the translated text, nothing else.`
      maxOutputTokens = 500
      break
    case 'continue':
    default:
      instructions = `You are a writing assistant providing inline autocompletions.
CRITICAL RULES:
- Output ONLY the NEW text that comes AFTER the user's input
- NEVER repeat any words from the end of the user's text
- Keep completions short (1 sentence max)
- Match the tone and style of the existing text
- ${preserveMarkdown}`
      maxOutputTokens = 25
      break
  }

  const result = streamText({
    model: gateway('anthropic/claude-haiku-4.5'),
    instructions,
    prompt,
    maxOutputTokens
  })

  return createTextStreamResponse({ stream: result.textStream })
})
```

::

4. Use el composable en el Editor:

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-completion-example'
class: '!p-0'
---
::

::note
La extensión de finalización se puede configurar con `autoTrigger: true` para sugerir automáticamente terminaciones mientras se escribe (deshabilitada de forma predeterminada). También puede activarla manualmente con: kbd{value="meta"}: kbd{value="j" class="ms-px"}.
::

::callout{icon="i-simple-icons-vercel" to="https://ai-sdk.dev/" target="_blank"}
Obtenga más información sobre Vercel AI SDK y los proveedores disponibles.
::

## API

### Accesorios

:component-props

### Slots

:component-slots

### Emisiones

:component-emits

### Exposición

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| `editor`x{lang="ts-type"} (Edición española)| `Ref<Editor \| undefined>`x{lang="ts-type"} (Edición española)|

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/api/editor" target="_blank"}
La instancia del editor expuesta es la API del editor de TipTap. Compruebe la documentación de TipTap para ver todos los métodos y propiedades disponibles.
::

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog

---
description: Un editor de texto enriquecido basado en TipTap con soporte para tipos de contenido Markdown, HTML y JSON.
category: editor
links:
  - label: Tiptap
    icon: i-custom-tiptap
    to: https://tiptap.dev/
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Editor.vue
---

@@pH000@@Uso del producto

El componente Editor proporciona una poderosa experiencia de edición de texto enriquecido basada en [TipTap](https://tiptap.dev/). Soporta múltiples formatos de contenido (JSON, HTML, Markdown), barras de herramientas personalizables, reordenamiento de bloques de arrastrar y soltar, comandos de barra, menciones, selector de emojis y arquitectura extensible para agregar funcionalidad personalizada.

::component-example
---
fuente: FALSO
Elevado: Verdadero
Nombre: 'Editor-Ejemplo'
clase: 'relativo h-176 overflow-y-auto! p-0 rounded-b-md'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/docs/app/components/content/examples/editor/EditorExample.vue" aria-label="Ver código fuente"}
Este ejemplo muestra un componente Editor listo para producción. Echa un vistazo al código fuente en GitHub.
::

::warning
Si encuentra errores relacionados con prosemiror, como `Adding different instances of a keyed plugin` al usar el componente Editor o sus extensiones, es posible que deba agregar paquetes prosemirror a la lista `vite.optimizeDeps.include` en su archivo `nuxt.config.ts`.

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

@@24@Contenido

Utilice la directiva `v-model` para controlar el valor del Editor.

::component-code
---
Elevado: Verdadero
Categoría: true
Colapso: Verdad
Ignora:
  - modelValue.tipo
  - modelValue.contenido
  @@28@clase
Externo:
  @@20029@modelValoración
Categoría: P-8
Props:
  Modelación:
    Nombre: "Doc"
    Contenido:
      - type:'dirección'
        Atracciones:
          Nivel: 1
        Contenido:
          - tipo:'texto'
            Canción:"Hello World"
      - type:'artículo'
        Contenido:
          - tipo:'texto'
            Texto: "Esto es una"
          - tipo:'texto'
            Marcos:
              - type:'negrita'(en inglés)
            Categoría: Rich Text
          - tipo:'texto'
            Nombre: "Editor".
  Clase: 'w-full min-h-21'
---
::

### Tipo de contenido

El editor detecta automáticamente el formato de contenido basado en el tipo `v-model`: las cadenas se tratan como `html`{lang="ts-type"} y los objetos como `json`{lang="ts-type"}.

Puede establecer explícitamente el formato utilizando el prop `content-type`:`json`{lang="ts-type"},`html`{lang="ts-type"}, o `markdown`{lang="ts-type"}.

::component-code
---
Elevado: Verdadero
Categoría: true
Ignora:
  @@P5000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@501@contentType
  @@5000@clase
Externo:
  - modelValue (Edición española)
Categoría: P-8
Props:
  Modelación:|
    <h1>Hola Mundo
    <p>Este es un <strong>texto</strong> editor.</p>
  Contenido: "html"
  Clase: 'w-full min-h-21'
---
::

@@pH060@@extensiones

El editor incluye las siguientes extensiones por defecto:

- [**StarterKit**](#starter-kit)-Funciones básicas de edición (negrita, cursiva, encabezados, listas, etc.)
- [**Placeholder**](#placeholder)-Mostrar el texto de marcador de posición (cuando se proporciona el marcador de posición))
- **Image**-Insertar y mostrar imágenes
- **Mention**-Añadir @ menciones de apoyo
- **Markdown**-Analice y serialice la reducción (cuando el tipo de contenido es la reducción)

::note
Cada extensión incorporada se puede configurar utilizando su correspondiente prop (`starter-kit`,`placeholder`,`image`,`mention`,`markdown`) para personalizar su comportamiento con las opciones de TipTap.
::

Puede utilizar el prop `extensions` para añadir extensiones TipTap adicionales para mejorar las capacidades del Editor:

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

@100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `placeholder` para establecer un texto de marcador de posición que se muestre en párrafos vacíos.

::component-code
---
Elevado: Verdadero
Categoría: true
Ignora:
  - modelValue (Edición española)
  @113 @ Contenido
  @@ph114@marcador de posición
  @115 @ clase
Externo:
  @116@116@116
Categoría: P-8
Props:
  Modelos: ''
  Inicio » Escribir » Escribir »
  Clase: 'w-full min-h-7'
---
::

::note
El `placeholder` prop acepta una cadena o un objeto con [PlaceholderOptions](https://tiptap.dev/docs/editor/extensions/functionality/placeholder) y una propiedad adicional de `mode`:
- `everyLine`: Mostrar marcador de posición en cada línea vacía cuando se enfoca (predeterminado).
- `firstLine`: Muestra el marcador de posición solo en la primera línea cuando el editor está vacío.

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
Obtenga más información sobre la extensión Placeholder en la documentación de TipTap.
::

### Kit de inicio

Utilice el prop `starter-kit` para configurar la extensión TipTap StarterKit incorporada que incluye funciones de editor comunes como negrita, cursiva, encabezados, listas, comillas de bloque, bloques de código y más.

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
Configure `starter-kit` a `false` para un editor de texto plano. Mantiene los nodos esenciales (párrafo, texto, historia) y deshabilita todas las funciones de formato como negrita, cursiva, encabezados, listas, código, blockquote, enlaces y reglas horizontales.
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/starterkit" target="_blank"}
Obtenga más información sobre la extensión StarterKit en la documentación de TipTap.
::

@167@167@167@167

Los controladores envuelven los comandos integrados de TipTap para proporcionar una interfaz unificada para las acciones del editor. Cuando agrega una propiedad `kind` a un elemento [EditorToolbar](/docs/components/editor-toolbar) o [EditorSuggestionMenu](/docs/components/editor-suggestion-menu), el controlador correspondiente ejecuta el comando TipTap y administra su estado.(personas con discapacidad, etc.).

#### Gestores por defecto

El componente Editor proporciona estos manejadores predeterminados, a los que puede hacer referencia en la barra de herramientas o en los elementos del menú de sugerencias utilizando la propiedad `kind`:

| El Handler| Descripción| El uso|
|---------|-------------|-------|
| @179 @@@ 181 @| Alterna las marcas de texto (negrita, itálica, huelga, código, subrayado)| Requiere la propiedad `mark` en el artículo|
| @ph182@| Alineación del texto (izquierda , centro , derecha , justificar)| Requiere la propiedad`align`en el artículo|
| @185@@187@| Toggle niveles de encabezado (1 - 6)| Requiere la propiedad`level`en el artículo|
| @ph189@@| Añadir , editar o eliminar enlaces| Indique la URL si no se proporciona|
| @190@191| Insertar imágenes| Indique la URL si no se proporciona|
| @@pH192@| Tagged con blockquotes||
| @@pH194@| Lista de Bullets Toggle| Maneja conversiones de lista|
| @196@197| Toggle listas ordenadas| Maneja conversiones de lista|
| @@| Toggle listas de tareas| Maneja conversiones de lista|
| @200@2001| Toggle Bloques de código||
| @202@@20203| Introducir reglas horizontales||
| @@204@@205| Formato de párrafo||
| @206@207| Undo el último cambio||
| @2008@2009@| Redo último cambio sin hacer||
| @210@211@| Eliminar todo el formato| Trabaja con selección o posición|
| @212@@@214| Duplicar el nodo| Requiere la propiedad`pos`en el artículo|
| @@215@@217| Borrar el nodo| Requiere la propiedad`pos`en el artículo|
| @@218@@220| Mover un nodo hacia arriba| Requiere la propiedad`pos`en el artículo|
| @221@@@223| Mover un nodo hacia abajo| Requiere la propiedad`pos`en el artículo|
| @@224@@226| Menú de sugerencias Trigger| Insertar el carácter`/`|
| @@227@@229| Trigger Menú| Insertar el carácter`@`|
| @230@@@232@| Inicio Emoji Picker| Insertar el carácter`:`|

::warning
Los controladores`taskList`y`textAlign`solo funcionan cuando se instalan sus respectivas extensiones , ya que no están incluidos en el Editor de forma predeterminada .
::

A continuación se explica cómo utilizar los controladores predeterminados en la barra de herramientas o elementos del menú de sugerencias :

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

#### Controladores personalizados

Utilice la prop`handlers`para extender o anular los controladores predeterminados . Los controladores personalizados se combinan con los controladores predeterminados , de modo que puede agregar nuevas acciones o modificar el comportamiento existente .

Cada controlador implementa la interfaz `EditorHandler`{lang="ts-type"}:

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

@307 Ejemplos

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt-ui-templates/editor" target="_blank"}
Echa un vistazo al código fuente de nuestro **Editor template** en GitHub para ver un ejemplo de la vida real.
::

### Con barra de herramientas

Puede utilizar el componente [EditorToolbar](/docs/components/editor-toolbar) para agregar una barra de herramientas `fixed`,`bubble` o `floating` al Editor con acciones de formato comunes.

::component-example
---
Elevado: Verdadero
Colapso: Verdad
Categoría: true
Nombre: 'editor-toolbar-ejemplo'
Categoría: P-8
---
::

### Con el controlador de arrastre

Puede utilizar el componente [EditorDragHandle](/docs/components/editor-drag-handle) para agregar un mango arrastrable para reordenar bloques.

::component-example
---
Elevado: verdadero
Colapso: Verdad
Categoría: true
Nombre: 'editor-drag-handle-example'
Categoría: P-8
---
::

### Con menú de sugerencias

Puede utilizar el componente [EditorSuggestionMenu](/docs/components/editor-suggestion-menu) para agregar comandos de barra para formatear e insertar rápidamente.

::component-example
---
Elevado: verdadero
Colapso: Verdad
Categoría: true
nombre: 'sugestión-menu-ejemplo'
Categoría: P-8
---
::

### Menú de menciones

Puede utilizar el componente [EditorMentionMenu](/docs/components/editor-mention-menu) para agregar menciones @ para etiquetar usuarios o entidades.

::component-example
---
Elevado: verdadero
Colapso: Verdad
Categoría: true
Nombre: 'editor-menu-ejemplo'
Categoría: P-8
---
::

### Con menú de emojis

Puede usar el componente [EditorEmojiMenu](/docs/components/editor-emoji-menu) para agregar soporte para el selector de emojis.

::component-example
---
Elevado: verdadero
Colapso: Verdad
Categoría: true
Nombre: 'emotico-emoji-menu-ejemplo'
Categoría: P-8
---
::

### Con subida de imágenes

En este ejemplo se muestra cómo crear una función de carga de imágenes utilizando la prop `extensions` para registrar un nodo TipTap personalizado y la prop `handlers` para definir cómo el botón de la barra de herramientas activa el flujo de carga.

1. Crear un componente de Vue que utilice el componente [FileUpload](/docs/components/file-upload):

::component-example
---
Reseña: Falso
Colapso: Verdad
Nombre del archivo: 'editor-image-upload-node'
---
::

2. Crear una extensión TipTap personalizada para registrar el nodo:

::component-example
---
Reseña: FALSE
Colapso: Verdad
Nombre: 'ts'
Nombre del archivo: 'editor-image-upload-extension'
---
::

3. Use la extensión personalizada en el Editor:

::component-example
---
Elevado: Verdadero
Colapso: Verdad
Categoría: true
Nombre: 'editor-image-upload-example'
Categoría:! p-0
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/custom-extensions" target="_blank"}
Obtenga más información sobre la creación de extensiones personalizadas en la documentación de TipTap.
::

### Con la finalización de AI

Este ejemplo demuestra cómo agregar funciones impulsadas por IA al Editor utilizando el [Vercel AI SDK](https://ai-sdk.dev/), específicamente el [`useCompletion`](https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-completion) componible para completar el texto en streaming, Combinado con el [Vercel AI Gateway](https://vercel.com/ai-gateway) para acceder a modelos de IA a través de un punto final centralizado. Incluye autocompletado de texto fantasma y acciones de transformación de texto (corregir gramática, extender, reducir, simplificar, traducir, etc.).

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
Reseña: Falso
Colapso: Verdad
nombre: 'editor-completación-extensión'
Nombre: 'ts'
---
::

2. Crear un componente que gestione el estado de finalización de la IA y los controladores:

::component-example
---
Reseña: Falso
Colapso: Verdad
Nombre: 'editor-uso-terminación'
Nombre del archivo: 'useEditorCompletion'
Nombre: 'ts'
---
::

3. Crear un punto final de API de servidor para manejar solicitudes de finalización utilizando [`streamText`](https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text#streamtext):

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
Elevado: verdadero
Colapso: Verdad
Categoría: true
Nombre: 'editor-ejemplo'
Categoría:! p-0
---
::

::note
La extensión de finalización se puede configurar con `autoTrigger: true` para sugerir automáticamente terminaciones mientras se escribe (deshabilitada por defecto). También puede activarla manualmente con: kbd{value="meta"}: kbd{value="j" class="ms-px"}.
::

::callout{icon="i-simple-icons-vercel" to="https://ai-sdk.dev/" target="_blank"}
Obtenga más información sobre Vercel AI SDK y los proveedores disponibles.
::

@449

@450@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@451@500 puntos

Componentes de slots

@452@@Emisiones

Componentes Emisiones

@453@@Exposicion

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| @454 @@@ 456 @|@@pH455 @@@ pH457 @|

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/api/editor" target="_blank"}
La instancia del editor expuesta es la API del editor de TipTap. Compruebe la documentación de TipTap para ver todos los métodos y propiedades disponibles.
::

@458 @@ Proyecto

Componente Tema

@459@Changelog (Edición española)

Categoría: component-changelog

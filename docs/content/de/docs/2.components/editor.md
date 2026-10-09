---
description: Eine Rich-Text-Editor-Komponente, die auf TipTap basiert und Markdown-, HTML-und JSON-Inhaltstypen unterstützt.
category: editor
links:
  - label: tipptap
    icon: i-custom-tiptap
    to: https://tiptap.dev/
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Editor.vue
---

## Bearbeiten

Die Editor-Komponente bietet eine leistungsstarke Rich-Text-Bearbeitungserfahrung, die auf [TipTap](https://tiptap.dev/) basiert. Es unterstützt mehrere Inhaltsformate (JSON, HTML, Markdown), anpassbare Symbolleisten, Drag-and-Drop-Blockneuordnung, Schrägstrichbefehle, Erwähnungen, Emoji-Picker und erweiterbare Architektur zum Hinzufügen benutzerdefinierter Funktionen.

::component-example
---
source: false
elevated: true
name: 'editor-example'
class: 'relative h-176 overflow-y-auto !p-0 rounded-b-md'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/docs/app/components/content/examples/editor/EditorExample.vue" aria-label="siehe Source Code"}
Dieses Beispiel zeigt eine produktionsreife Editor-Komponente. Schauen Sie sich den Quellcode auf GitHub an.
::

::warning
Wenn Sie bei der Verwendung der Editor-Komponente oder ihrer Erweiterungen auf Prosemirror-bezogene Fehler wie `Adding different instances of a keyed plugin` stoßen, müssen Sie möglicherweise Prosemirror-Pakete zur `vite.optimizeDeps.include`-Liste in Ihrer `nuxt.config.ts`-Datei hinzufügen.

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

### Inhalt

Verwenden Sie die `v-model`-Direktive, um den Wert des Editors zu steuern.

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

### Inhalt Typ

Der Editor erkennt automatisch das Inhaltsformat basierend auf dem `v-model`-Typ: Zeichenketten werden als `html`{lang="ts-type"} und Objekte als `json`{lang="ts-type"} behandelt.

Sie können das Format explizit mit der `content-type`-Prop festlegen: `json`{lang="ts-type"}, `html`{lang="ts-type"} oder `markdown`{lang="ts-type"}.

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

### Extensions-Erweiterung

Der Editor enthält standardmäßig die folgenden Erweiterungen:

- [**StarterKit**](#starter-kit)-Kernbearbeitungsfunktionen (fett, kursiv, Überschriften, Listen usw.)
- [**Placeholder**](#placeholder)-Platzhaltertext anzeigen (wenn Platzhalterstütze bereitgestellt wird)
- **Image**-Bilder einfügen und anzeigen
- **Mention**-Unterstützung für @ mentions hinzufügen
- **Markdown**-Markdown analysieren und serialisieren (wenn der Inhaltstyp Markdown ist)

::note
Jede eingebaute Erweiterung kann mit der entsprechenden Prop (`starter-kit`, `placeholder`, `image`, `mention`, `markdown`) konfiguriert werden, um ihr Verhalten mit TipTap-Optionen anzupassen.
::

Sie können die `extensions` prop verwenden, um zusätzliche TipTap-Erweiterungen hinzuzufügen, um die Funktionen des Editors zu verbessern:

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
Schauen Sie sich das Beispiel für den Image-Upload zum Erstellen benutzerdefinierter TipTap-Erweiterungen an.
::

### Platzhalter

Verwenden Sie die `placeholder`-Prop, um einen Platzhaltertext festzulegen, der in leeren Absätzen angezeigt wird.

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
Die `placeholder`-Prop akzeptiert eine Zeichenfolge oder ein Objekt mit [PlaceholderOptions](https://tiptap.dev/docs/editor/extensions/functionality/placeholder) und einer zusätzlichen `mode`-Eigenschaft:
- `everyLine`: Platzhalter auf jeder leeren Zeile anzeigen, wenn sie fokussiert ist (Standard)
- `firstLine`: Platzhalter nur in der ersten Zeile anzeigen, wenn der Editor leer ist.

```vue
<template>
  <UEditor :placeholder="{ placeholder: 'Start writing...', mode: 'firstLine' }" />
</template>
```
::

::tip
Um Platzhalter in verschachtelten Elementen wie Listenelementen anzuzeigen, setzen Sie `includeChildren` auf `true`:

```vue
<template>
  <UEditor :placeholder="{ placeholder: 'Start writing...', includeChildren: true }" />
</template>
```
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/placeholder" target="_blank"}
Erfahren Sie mehr über die Platzhalter-Erweiterung in der TipTap-Dokumentation .
::

XPH185xStarter Kit (englisch)

Verwenden Sie die `starter-kit`-Prop , um die integrierte TipTap StarterKit-Erweiterung zu konfigurieren , die gängige Editor-Funktionen wie Fett , Kursiv , Überschriften , Listen , Blockzitate , Codeblöcke und mehr enthält .

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
Setzen Sie `starter-kit` auf `false` für einen einfachen Texteditor . Es behält die wesentlichen Knoten (Absatz , Text , Verlauf) und deaktiviert alle Formatierungsfunktionen wie Fett , Kursiv , Überschriften , Listen , Code , Blockquote , Links und horizontale Regeln .
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/starterkit" target="_blank"}
Erfahren Sie mehr über die StarterKit-Erweiterung in der TipTap-Dokumentation .
::

### Handlers (englisch)

Wenn Sie eine `kind`-Eigenschaft zu einem [EditorToolbar](/docs/components/editor-toolbar) oder [EditorSuggestionMenu](/docs/components/editor-suggestion-menuxph22x Element hinzufügen , führt der entsprechende Handler den TipTap-Befehl aus und verwaltet seinen Status (aktiv , deaktiviert usw .) .

#### Default-Handler

Die Editor-Komponente stellt diese Standardhandler bereit , auf die Sie in der Symbolleiste oder im Vorschlagsmenü mit der `kind`-Eigenschaft verweisen können :

| Handler| Description| Benutzung|
|---------|-------------|-------|
| `mark`{lang="ts-type"} nicht| Toggle Textmarken (fett , kursiv , Streik , Code , Unterstreichung)| Erfordert die `mark`-Eigenschaft im Element|
| `textAlign`{lang="ts-type"} nicht| Textausrichtung (left , center , right , justify)| Erfordert die `align`-Eigenschaft im Element|
| `heading`{lang="ts-type"} (englisch)| Toggle heading levels (1 - 6) Bearbeiten| Erfordert die `level`-Eigenschaft im Element|
| `link`{lang="ts-type"} nicht| Hinzufügen , Bearbeiten oder Entfernen von Links| Aufforderung zur URL , falls nicht angegeben|
| `image`{lang="ts-type"} Übersetzung| Einfügen von Bildern| Aufforderung zur URL , falls nicht angegeben|
| `blockquote`{lang="ts-type"} Übersetzung| Toggle Blockquotes hinzufügen||
| `bulletList`{lang="ts-type"} (englisch)| Toggle Bullet Listen Bearbeiten| Listen Konvertierungen bearbeiten|
| `orderedList`{lang="ts-type"} (englisch)| Toggle Ordnete Listen| Listen Konvertierungen bearbeiten|
| `taskList`{lang="ts-type"} (nicht)| Toggle Aufgabenliste| Listen Konvertierungen bearbeiten|
| `codeBlock`{lang="ts-type"} Übersetzung| Toggle Code Blockierung||
| `horizontalRule`{lang="ts-type"} Übersetzung| Einfügen horizontaler Regeln||
| `paragraph`{lang="ts-type"} (nicht)| Formularformat festlegen||
| `undo`{lang="ts-type"} nicht| Undo letzte Änderung||
| `redo`{lang="ts-type"} Übersetzung| Letzte unerledigte Änderung||
| `clearFormatting`{lang="ts-type"} (englisch)| Alle Formatierungen entfernen| Arbeiten mit Auswahl oder Position|
| `duplicate`{lang="ts-type"} nicht| Duplizieren Sie Node| Erfordert die `pos`-Eigenschaft im Element|
| `delete`{lang="ts-type"} Übersetzung| Löschen Sie eine Node| Erfordert die `pos`-Eigenschaft im Element|
| `moveUp`{lang="ts-type"} Übersetzung| Bewegen Sie eine Node nach oben| Erfordert die `pos`-Eigenschaft im Element|
| `moveDown`{lang="ts-type"} Übersetzung| Bewegen Sie eine Node nach unten| Erfordert die `pos`-Eigenschaft im Element|
| `suggestion`{lang="ts-type"} nicht| Trigger-Menüvorschlag| Einfügen von `/` Zeichen|
| `mention`{lang="ts-type"} Übersetzung| Trigger Menu hinzufügen| Fügt `@` Zeichen ein|
| `emoji`{lang="ts-type"} (englisch)| Der Emoji Picker| Einfügen von `:` Zeichen|

::warning
Die Handler `taskList` und `textAlign` funktionieren nur, wenn die jeweiligen Erweiterungen installiert sind, da sie standardmäßig nicht im Editor enthalten sind.
::

So verwenden Sie Standardhandler in Symbolleiste-oder Vorschlagsmenüelementen:

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

#### Benutzerdefinierte Handler

Verwenden Sie die `handlers`-Prop, um die Standardhandler zu erweitern oder zu überschreiben. Benutzerdefinierte Handler werden mit den Standardhandlern zusammengeführt, sodass Sie neue Aktionen hinzufügen oder vorhandenes Verhalten ändern können.

Jeder Handler implementiert die Schnittstelle `EditorHandler`{lang="ts-type"}:

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

Hier ist ein Beispiel für die Erstellung von Custom Handlern:

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
Sehen Sie sich das Beispiel für den Image-Upload für eine vollständige Implementierung mit benutzerdefinierten Handlern an.
::

## Beispiele

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt-ui-templates/editor" target="_blank"}
Schauen Sie sich den Quellcode unseres **Editors template** auf GitHub an, um ein Beispiel aus der Praxis zu erhalten.
::

### With Toolbar Übersetzung

Sie können die [EditorToolbar](/docs/components/editor-toolbar)-Komponente verwenden, um dem Editor eine `fixed`-, `bubble`-oder `floating`-Symbolleiste mit allgemeinen Formatierungsaktionen hinzuzufügen.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-toolbar-example'
class: 'p-8'
---
::

### Mit Drag Handle

Sie können die Komponente [EditorDragHandle](/docs/components/editor-drag-handle) verwenden, um einen ziehbaren Handle zum Umordnen von Blöcken hinzuzufügen.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-drag-handle-example'
class: 'p-8'
---
::

### Mit Vorschlagsmenu

Sie können die [EditorSuggestionMenu](/docs/components/editor-suggestion-menu)-Komponente verwenden, um Schrägstrichbefehle für schnelle Formatierungen und Einfügungen hinzuzufügen.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-suggestion-menu-example'
class: 'p-8'
---
::

### With menu Erwähnung

Sie können die Komponente [EditorMenu](/docs/components/editor-mention-menu) verwenden, um @-Erwähnungen für das Taggen von Benutzern oder Entitäten hinzuzufügen.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-mention-menu-example'
class: 'p-8'
---
::

### Mit Emoji-Menü

Sie können die Komponente [EditorEmojiMenu](/docs/components/editor-emoji-menu) verwenden, um die Unterstützung für Emoji-Picker hinzuzufügen.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-emoji-menu-example'
class: 'p-8'
---
::

### Mit Bild-Upload

Dieses Beispiel zeigt, wie Sie eine Bild-Upload-Funktion erstellen, indem Sie die `extensions`-Prop verwenden, um einen benutzerdefinierten TipTap-Knoten zu registrieren, und die `handlers`-Prop, um zu definieren, wie die Symbolleistenschaltfläche den Upload-Fluss auslöst.

1. Erstellen Sie eine Vue-Komponente, die die [FileUpload](/docs/components/file-upload)-Komponente verwendet:

::component-example
---
preview: false
collapse: true
name: 'editor-image-upload-node'
---
::

2. Erstellen Sie eine benutzerdefinierte TipTap-Erweiterung, um den Knoten zu registrieren:

::component-example
---
preview: false
collapse: true
lang: 'ts'
name: 'editor-image-upload-extension'
---
::

3. Verwenden Sie im Editor die benutzerdefinierte Erweiterung:

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
Erfahren Sie mehr über das Erstellen benutzerdefinierter Erweiterungen in der TipTap-Dokumentation.
::

### Mit AI Abschluss

Dieses Beispiel zeigt, wie Sie dem Editor KI-gestützte Funktionen mit dem [Vercel AI SDK](https://ai-sdk.dev/) hinzufügen, insbesondere dem [`useCompletion`](https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-completionxph455) Composable für das Streaming von Textvervollständigungen, kombiniert mit dem [Vercel AI Gateway](https://vercel.com/ai-gateway), um über einen zentralen Endpunkt auf KI-Modelle zuzugreifen. Aktionen (Grammatik korrigieren, erweitern, reduzieren, vereinfachen, übersetzen, etc.)

::note
Sie müssen zuerst diese Abhängigkeiten installieren, um dieses Beispiel zu verwenden:

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

1. Erstellen Sie eine benutzerdefinierte TipTap-Erweiterung, die Inline-Ghost-Textvorschläge verarbeitet:

::component-example
---
preview: false
collapse: true
name: 'editor-completion-extension'
lang: 'ts'
---
::

2. Erstellen Sie ein Composable, das den KI-Abschlusszustand und die Handler verwaltet:

::component-example
---
preview: false
collapse: true
name: 'editor-use-completion'
filename: 'useEditorCompletion'
lang: 'ts'
---
::

3. Erstellen Sie einen Server-API-Endpunkt, um Completion-Requests mit [`streamText`](https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text#streamtext) zu bearbeiten:

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

4. Verwenden Sie das composable im Editor:

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
Die Vervollständigungserweiterung kann mit `autoTrigger: true` konfiguriert werden, um automatisch Vervollständigungen während der Eingabe vorzuschlagen (standardmäßig deaktiviert). Sie können sie auch manuell mit kbd{value="meta"}: kbd{value="j" class="ms-px"} auslösen.
::

::callout{icon="i-simple-icons-vercel" to="https://ai-sdk.dev/" target="_blank"}
Erfahren Sie mehr über das Vercel AI SDK und verfügbare Anbieter.
::

## API Bearbeiten

### Props (englisch)

:component-props

### Slots Bearbeiten

:component-slots

### Emits (nicht)

:component-emits

### Expose (englisch)

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typ|
| ---- | ---- |
| `editor`{lang="ts-type"} nicht| `Ref<Editor \| undefined>`{lang="ts-type"} nicht|

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/api/editor" target="_blank"}
Die exponierte Editorinstanz ist die TipTap Editor API. Überprüfen Sie die TipTap Dokumentation auf alle verfügbaren Methoden und Eigenschaften.
::

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog

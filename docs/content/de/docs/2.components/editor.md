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

@@@ph000@@Verwendung

Die Editor-Komponente bietet eine leistungsstarke Rich-Text-Bearbeitungserfahrung, die auf [TipTap](https://tiptap.dev/) aufbaut. Es unterstützt mehrere Inhaltsformate (JSON, HTML, Markdown), anpassbare Symbolleisten, Drag-and-Drop-Block-Neuordnung, Schrägstrichbefehle, Erwähnungen, Emoji-Auswahl und erweiterbare Architektur zum Hinzufügen benutzerdefinierter Funktionen.

::component-example
---
Quelle: Falscher
Höhe: wahr
Name: "Beispiel-Editor"
Klasse: 'relative h-176 overflow-y-auto! p-0 rounded-b-md'(relative h-176-Überlauf-y-auto! p-0 gerundet-b-md)'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/docs/app/components/content/examples/editor/EditorExample.vue" aria-label="siehe Source Code"}
Dieses Beispiel zeigt eine produktionsfertige Editor-Komponente. Schauen Sie sich den Quellcode auf GitHub an.
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

@@ph024@@Inhalt

Verwenden Sie die `v-model`-Direktive, um den Wert des Editors zu steuern.

::component-code
---
Höhe: true
Schöner: wahr
Einsturz: wahr
Ignoriert:
  - modellValue.type
  - modelValue.content (auf Englisch)
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@class@class@classclass@class@classclass@classclassclassclass@classclassclassclass@class@class@class@class@class@class@class@class@class@class@class
Außen:
  - modellWert
Klasse: 'P-8'
Props:
  Modellwert:
    Typ: „ Arzt "
    Inhalte:
      - type: Überschrift
        Attrs:
          Ebene: 1
        Inhalte:
          - type:'text'(Text) ist ein
            Text: „ Hallo Welt "
      - type:'Absatz'
        Inhalte:
          - type:'text'(Text) ist ein
            Text: "Dies ist ein"
          - type:'text'(Text), oder 'text'(Text)
            Markiert:
              - type:'fett'
            Text: „ Rich Text "
          - type:'text'(Text) ist ein
            Text: „ Herausgeber ".
  Klasse: 'w-full min-h-21'(w-volle min-h-21)
---
::

### Inhaltstypen

Der Editor erkennt automatisch das Inhaltsformat basierend auf `v-model` type: Strings werden als `html`{lang="ts-type"} behandelt und Objekte als `json`{lang="ts-type"}.

Sie können das Format explizit mit dem `content-type` prop: `json`{lang="ts-type"},`html`{lang="ts-type"} oder `markdown`{lang="ts-type"} einstellen.

::component-code
---
Höhe: wahr
Schöner: wahr
Ignoriert:
  - modellWert
  - contentType
  @@@@@@@@@@@class
Außen:
  - modellWert
Klasse: 'P-8'
Props:
  Modellwert:|
    @@ph054@@helloworld@ph055
    <p><strong>richtext</strong> editor.</p>
  Inhalt: "HTML"
  Klasse: 'w-full min-h-21'(w-volle min-h-21)
---
::

### Erweiterungen

Der Editor enthält standardmäßig die folgenden Erweiterungen:

- [**](#starter-kit)-Kernbearbeitungsfunktionen (fett, kursiv, Überschriften, Listen usw.)
- [****](#placeholder)-Platzhalter-Text anzeigen (wenn Platzhalter-Prop bereitgestellt wird)
- **Image**-Einfügen und Anzeigen von Bildern
- **Mention**-Add @ mentions Unterstützung
- **Markdown**-Parsen und Serialisieren von Markdown (wenn Inhaltstyp Markdown ist)

::note
Jede eingebaute Erweiterung kann mit der entsprechenden Prop (`starter-kit`,`placeholder`,`image`,`mention`,`markdown`) konfiguriert werden, um ihr Verhalten mit TipTap-Optionen anzupassen.
::

Sie können `extensions` prop verwenden, um zusätzliche TipTap-Erweiterungen hinzuzufügen, um die Fähigkeiten des Editors zu verbessern:

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

Verwenden Sie `placeholder` prop, um einen Platzhaltertext zu setzen, der in leeren Absätzen angezeigt wird.

::component-code
---
Höhe: wahr
Schöner: wahr
Ignoriert:
  - modellWert
  - contentType
  @@ph114@gmail.de
  @@115@Klasse
Außen:
  - modellWert
Klasse: 'P-8'
Props:
  Modellwert: ''
  Platzhalter: "Schreiben beginnen..."
  Klasse: 'w-voll min-h-7'
---
::

::note
Die `placeholder` prop akzeptiert einen String oder ein Objekt mit [PlaceholderOptions](https://tiptap.dev/docs/editor/extensions/functionality/placeholder) und einer zusätzlichen `mode` Eigenschaft:
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
Erfahren Sie mehr über die Platzhalter-Erweiterung in der TipTap-Dokumentation.
::

### Starterkit

Verwenden Sie `starter-kit` prop, um die integrierte TipTap StarterKit-Erweiterung zu konfigurieren, die gängige Editorfunktionen wie Fett, Kursiv, Überschriften, Listen, Blockzitate, Codeblöcke und mehr enthält.

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
Setzen Sie `starter-kit` auf `false` für einen einfachen Texteditor. Es behält die wesentlichen Knoten (Absatz, Text, Verlauf) und deaktiviert alle Formatierungsfunktionen wie Fett, Kursiv, Überschriften, Listen, Code, Blockquote, Links und horizontale Regeln.
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/starterkit" target="_blank"}
Erfahren Sie mehr über die StarterKit-Erweiterung in der TipTap-Dokumentation.
::

@@@@@@@167@@Handlers

Wenn Sie eine `kind` Eigenschaft zu einem [EditorToolbar](/docs/components/editor-toolbar) oder [EditorSuggestionMenu](/docs/components/editor-suggestion-menu) hinzufügen, führt der entsprechende Befehls-Handler den TipTap aus und verwaltet seinen Status:(Aktiv, Behindert usw.).

#### Default-Handler

Die Editor-Komponente stellt diese Standardhandler bereit, auf die Sie in der Symbolleiste oder im Vorschlagsmenü mit der @@@@-Eigenschaft verweisen können:

| Handler| Description| Benutzung|
|---------|-------------|-------|
| {lang="ts-type"}| Toggle Textmarken (fett, kursiv, Streik, Code, Unterstreichung)| Erfordert `mark` Eigenschaft im Artikel|
| {lang="ts-type"}| Textausrichtung einstellen (left , center , right , justify)| Erfordert`align`property im Element|
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@| Toggle heading levels (1 - 6) Bearbeiten| Erfordert`level`Eigenschaft im Artikel|
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@| Hinzufügen , Bearbeiten oder Entfernen von Links| Aufforderung zur URL , falls nicht angegeben|
| {lang="ts-type"}| Einfügen von Bildern| Aufforderung zur URL , falls nicht angegeben|
| {lang="ts-type"}| Toggle Blockquotes hinzufügen||
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@| Toggle Bullet Lists Bearbeiten| Listen Konvertierungen|
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@| Toggle geordnete Listen| Listen Konvertierungen|
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@| Toggle Aufgabenliste| Listen Konvertierungen|
| {lang="ts-type"}| Toggle Code Blockierung||
| {lang="ts-type"}| Horizontale Regeln einfügen||
| {lang="ts-type"}| Formularformat festlegen||
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###################################################################################################################|Undo Letzte Änderung||
| {lang="ts-type"}| Letzte unerledigte Änderung||
| {lang="ts-type"}| Entfernen Sie alle Formatierungen| Arbeitet mit Auswahl oder Position|
| {lang="ts-type"}| Duplizieren einer Node| Erfordert`pos`property im Element|
| {lang="ts-type"}| Löschen Sie Node| Erfordert`pos`property im Element|
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH2220| Bewegen Sie einen Knoten nach oben| Erfordert`pos`Eigenschaft im Artikel|
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH2223@| Bewegen Sie einen Knoten nach unten| Erfordert`pos`Eigenschaft im Artikel|
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH2226@| Trigger-Menüvorschläge| Einfügen`/`character|
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH2229| Trigger Menu hinzufügen| Einfügen`@`character|
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@################################################################################################################################|Emoji Picker auswählen| Einfügen`:`character|

::warning
Die Handler`taskList`und`textAlign`funktionieren nur , wenn die jeweiligen Erweiterungen installiert sind , da sie standardmäßig nicht im Editor enthalten sind .
::

So verwenden Sie Standardhandler in Symbolleiste - oder Vorschlagsmenüelementen :

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

Verwenden Sie`handlers`prop , um die Standard-Handler zu erweitern oder zu überschreiben . Benutzerdefinierte Handler werden mit den Standard-Handlern zusammengeführt , sodass Sie neue Aktionen hinzufügen oder vorhandenes Verhalten ändern können .

Jeder Handler implementiert die `EditorHandler`{lang="ts-type"}-Schnittstelle:

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

@@307@@Beispiele

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt-ui-templates/editor" target="_blank"}
Schauen Sie sich den Quellcode unseres **Editor template** auf GitHub an, um ein Beispiel aus der Praxis zu erhalten.
::

@@ph310@@Mit der Toolbar

Sie können die Komponente [EditorToolbar](/docs/components/editor-toolbar) verwenden, um dem Editor eine Symbolleiste mit gängigen Formatierungsaktionen hinzuzufügen.

::component-example
---
Höhe: wahr
Einsturz: wahr
Schöner: wahr
Name: 'Editor-Toolbar-Beispiel'
Klasse: 'P-8'
---
::

### Mit Drag Handle

Sie können die Komponente [EditorDragHandle](/docs/components/editor-drag-handle) verwenden, um einen ziehbaren Griff für die Neuordnung von Blöcken hinzuzufügen.

::component-example
---
Höhe: wahr
Einsturz: wahr
Schöner: wahr
Name: 'Editor-Drag-Handle-Beispiel'
Klasse: 'P-8'
---
::

### Mit Vorschlagsmenü

Sie können die Komponente [EditorSuggestionMenu](/docs/components/editor-suggestion-menu) verwenden, um Schrägstrichbefehle für die schnelle Formatierung und Einfügung hinzuzufügen.

::component-example
---
Höhe: true
Einsturz: wahr
Schöner: wahr
Name: 'Vorschlag-Menü-Beispiel'
Klasse: 'P-8'
---
::

### Mit Mention Menü

Sie können die Komponente [EditorMentionMenu](/docs/components/editor-mention-menu) verwenden, um @ Erwähnungen für das Tagging von Benutzern oder Entitäten hinzuzufügen.

::component-example
---
Höhe: true
Einsturz: wahr
Schöner: wahr
Name: 'editor-mention-menu-example'(Bearbeiten)
Klasse: 'P-8'
---
::

### Mit Emoji-Menü

Sie können die Komponente [EditorEmojiMenu](/docs/components/editor-emoji-menu) verwenden, um die Unterstützung für Emoji-Picker hinzuzufügen.

::component-example
---
Höhe: true
Einsturz: wahr
Schöner: wahr
Name: 'Editor-Emoji-Menu-Beispiel'
Klasse: 'P-8'
---
::

### Mit Bild-upload

Dieses Beispiel zeigt, wie Sie eine Bild-Upload-Funktion erstellen, indem Sie `extensions` prop verwenden, um einen benutzerdefinierten TipTap-Knoten zu registrieren, und `handlers` prop, um zu definieren, wie die Symbolleisten-Schaltfläche den Upload-Fluss auslöst.

1. Erstellen Sie eine Vue-Komponente, die die Komponente [FileUpload](/docs/components/file-upload) verwendet:

::component-example
---
Vorschau: FALSE
Einsturz: wahr
Name: 'Editor-Image-Upload-Knoten'
---
::

2. Erstellen Sie eine benutzerdefinierte TipTap-Erweiterung, um den Knoten zu registrieren:

::component-example
---
Vorschau: FALSE
Einsturz: wahr
lang: 'ts' sein
Name: 'Bild-Upload-Erweiterung'
---
::

3. Verwenden Sie die benutzerdefinierte Erweiterung im Editor:

::component-example
---
Höhe: wahr
Einsturz: wahr
Schöner: wahr
Name: 'Editor-Image-Upload-Beispiel'
Klasse: '! p-0'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/custom-extensions" target="_blank"}
Weitere Informationen zum Erstellen benutzerdefinierter Erweiterungen finden Sie in der TipTap-Dokumentation.
::

@@348@@Mit AI Fertigstellung

Dieses Beispiel zeigt, wie man KI-gestützte Funktionen zum Editor hinzufügt, indem man die [Vercel AI SDK](https://ai-sdk.dev/), speziell die [`useCompletion`](https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-completion) composable für das Streaming von Textvervollständigungen verwendet, kombiniert mit dem [Vercel AI Gateway ](https://vercel.com/ai-gateway), um über einen zentralen Endpunkt auf KI-Modelle zuzugreifen. Es umfasst die automatische Vervollständigung von Ghost-Text und Texttransformationsaktionen (Grammatik korrigieren, erweitern, reduzieren, vereinfachen, übersetzen usw.).

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
Vorschau: FALSE
Einsturz: wahr
Name: 'Editor-Completion-Extension'(Erweiterung)
lang: 'ts' sein
---
::

2. Erstellen Sie ein Composable, das den KI-Abschlussstatus und die Handler verwaltet:

::component-example
---
Vorschau: FALSE
Einsturz: wahr
Name: 'Editor-Use-Completion'(Bearbeiten)
filename: 'useEditorCompletion'(Benutzungsverzeichnis)
lang: 'ts' sein
---
::

3. Erstellen Sie einen Server-API-Endpunkt, um Abschlussanforderungen mit [`streamText`](https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text#streamtext):

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

4. Verwenden Sie das Composable im Editor:

::component-example
---
Höhe: true
Einsturz: wahr
Schöner: wahr
Name: 'Redaktionen-Komplettierungsbeispiel'
Klasse: '! p-0'
---
::

::note
Die Vervollständigungserweiterung kann mit `autoTrigger: true` konfiguriert werden, um automatisch Vervollständigungen während der Eingabe vorzuschlagen (standardmäßig deaktiviert). Sie können sie auch manuell mit kbd{value="meta"}: kbd{value="j" class="ms-px"} auslösen.
::

::callout{icon="i-simple-icons-vercel" to="https://ai-sdk.dev/" target="_blank"}
Erfahren Sie mehr über das Vercel AI SDK und verfügbare Anbieter.
::

@@449@gmail.de

@@ph450@@gmail.de

Komponenten Props

@@ph451@gmail.de

Die Komponenten-Slots

@@@ph452@@emits

Komponenten emittieren

### Aufdecken

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typen|
| ---- | ---- |
| {lang="ts-type"}| {lang="ts-type"}|

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/api/editor" target="_blank"}
Die exponierte Editorinstanz ist die TipTap Editor API. Überprüfen Sie die TipTap Dokumentation auf alle verfügbaren Methoden und Eigenschaften.
::

## Thema

Das Komponenten-Theme

@@ph459@@changelog @@@changelog

Das Component-Changelog

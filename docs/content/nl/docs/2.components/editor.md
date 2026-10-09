---
description: Een rich text editor-component op basis van TipTap met ondersteuning voor markdown, HTML en JSON-inhoudstypen.
category: editor
links:
  - label: TipTap maken
    icon: i-custom-tiptap
    to: https://tiptap.dev/
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Editor.vue
---

## Gebruik

De Editor-component biedt een krachtige rich text-bewerkingservaring die is gebouwd op [TipTap](https://tiptap.dev/).
Het ondersteunt meerdere inhoudsindelingen (JSON, HTML, Markdown), aanpasbare werkbalken, opnieuw slepen en neerzetten van blokken, slash-opdrachten, vermeldingen, emoji-kiezer en uitbreidbare architectuur voor het toevoegen van aangepaste functionaliteit.

::component-example
---
source: false
elevated: true
name: 'editor-example'
class: 'relative h-176 overflow-y-auto !p-0 rounded-b-md'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/docs/app/components/content/examples/editor/EditorExample.vue" aria-label="Bekijk broncode"}
Dit voorbeeld demonstreert een productieklare Editor-component. Bekijk de broncode op GitHub.
::

::warning
Als u prosemirror-gerelateerde fouten zoals `Adding different instances of a keyed plugin` tegenkomt bij het gebruik van de Editor-component of de extensies ervan, moet u mogelijk prosemirror-pakketten toevoegen aan de `vite.optimizeDeps.include`-lijst in uw `nuxt.config.ts`-bestand
. Dit zorgt ervoor dat Vite deze afhankelijkheden vooraf bundelt om te voorkomen dat meerdere instanties worden geladen.

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

### Inhoud

Gebruik de `v-model`-richtlijn om de waarde van de Editor te bepalen.

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

### Type inhoud

De Editor detecteert automatisch het inhoudsformaat op basis van `v-model` type: strings worden behandeld als `html`{lang="ts-type"} en objecten als `json`{lang="ts-type"}.

U kunt het formaat expliciet instellen met de `content-type` prop: `json`{lang="ts-type"}, `html`{lang="ts-type"} of `markdown`{lang="ts-type"}.

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

### Extensies

De Editor bevat standaard de volgende extensies:

- [**StarterKit**](#starter-kit) - Kernbewerkingsfuncties (vet, cursief, koppen, lijsten, enz.)
- [**Placeholder**](#placeholder) - Geef tijdelijke aanduidingstekst weer (wanneer tijdelijke aanduiding wordt verstrekt)
- **Image** - Afbeeldingen invoegen en weergeven
- **Mention** - Add @ vermeldt ondersteuning
- **Markdown** - Ontleden en serialiseren van markdown (wanneer inhoudstype markdown is)

::note
Elke ingebouwde extensie kan worden geconfigureerd met behulp van de bijbehorende prop (`starter-kit`, `placeholder`, `image`, `mention`, `markdown`) om het gedrag aan te passen met TipTap-opties.
::

U kunt de `extensions`-prop gebruiken om extra TipTap-extensies toe te voegen om de mogelijkheden van de Editor te verbeteren:

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
Bekijk het voorbeeld voor het uploaden van afbeeldingen voor het maken van aangepaste TipTap-extensies.
::

### Plaatshouder

Gebruik de `placeholder`-prop om een tijdelijke aanduidingstekst in te stellen die in lege alinea 's wordt weergegeven.

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
De `placeholder` prop accepteert een string of een object met [PlaceholderOptions](https://tiptap.dev/docs/editor/extensions/functionality/placeholder) en een extra `mode` eigenschap:
- `everyLine`: Geef tijdelijke aanduiding weer op elke lege regel wanneer gericht (standaard).
- `firstLine`: Geef de tijdelijke aanduiding alleen weer op de eerste regel wanneer de editor leeg is.

```vue
<template>
  <UEditor :placeholder="{ placeholder: 'Start writing...', mode: 'firstLine' }" />
</template>
```
::

::tip
Standaard worden tijdelijke aanduidingen alleen weergegeven op lege knooppunten op het hoogste niveau. Stel `includeChildren` in op `true` om tijdelijke aanduidingen weer te geven in geneste elementen zoals lijstitems:

```vue
<template>
  <UEditor :placeholder="{ placeholder: 'Start writing...', includeChildren: true }" />
</template>
```
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/placeholder" target="_blank"}
Lees meer over de Placeholder-extensie in de TipTap-documentatie.
::

### Starter Uitrusting

Gebruik de `starter-kit`-prop om de ingebouwde TipTap StarterKit-extensie te configureren, die algemene editorfuncties bevat, zoals vet, cursief, koppen, lijsten, blockquotes, codeblokken en meer.

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
Stel `starter-kit` in op `false` voor een editor voor platte tekst.
Het behoudt de essentiële knooppunten (alinea, tekst, geschiedenis) en schakelt elke opmaakfunctie uit, zoals vet, cursief, koppen, lijsten, code, blockquote, links en horizontale regels.
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/starterkit" target="_blank"}
Lees meer over de StarterKit-extensie in de TipTap-documentatie.
::

### Handlers

Handlers verpakken de ingebouwde opdrachten van TipTap om een uniforme interface te bieden voor editoracties.
Wanneer u een `kind`-eigenschap toevoegt aan een [EditorToolbar](/docs/components/editor-toolbar) of [EditorSuggestionMenu](/docs/components/editor-suggestion-menu) item, voert de bijbehorende handler de opdracht TipTap uit en beheert de status ervan (actief, uitgeschakeld, enz.).

#### Standaard handlers

De Editor-component biedt deze standaardhandlers, waarnaar u kunt verwijzen in werkbalk- of suggestiemenu-items met de eigenschap `kind`:

| Handler | Omschrijving | Gebruik |
|---------|-------------|-------|
| `mark`{lang="ts-type"} | Tekstmarkeringen (vet, cursief, doorhalen, code, onderstrepen) aan / uitzetten | Vereist `mark` eigenschap in item |
| `textAlign`{lang="ts-type"} | Tekstuitlijning instellen (links, midden, rechts, rechtvaardigen) | Vereist `align` eigenschap in item |
| `heading`{lang="ts-type"} | Kopniveaus (1-6) aan / uit | Vereist `level` eigenschap in item |
| `link`{lang="ts-type"} | Links toevoegen, bewerken of verwijderen | Vragen voor URL indien niet verstrekt |
| `image`{lang="ts-type"} | Afbeeldingen invoegen | Vragen voor URL indien niet verstrekt |
| `blockquote`{lang="ts-type"} | Schakel blokaanhalingstekens in | |
| `bulletList`{lang="ts-type"} | Kogellijsten inschakelen | Behandelt lijstconversies |
| `orderedList`{lang="ts-type"} | Bestelde lijsten omschakelen | Behandelt lijstconversies |
| `taskList`{lang="ts-type"} | Taaklijsten omschakelen | Behandelt lijstconversies |
| `codeBlock`{lang="ts-type"} | Codeblokken omschakelen | |
| `horizontalRule`{lang="ts-type"} | Horizontale regels invoegen | |
| `paragraph`{lang="ts-type"} | Alineaformaat instellen | |
| `undo`{lang="ts-type"} | Laatste wijziging ongedaan maken | |
| `redo`{lang="ts-type"} | Laatste ongedaan gemaakte wijziging opnieuw uitvoeren | |
| `clearFormatting`{lang="ts-type"} | Alle opmaak verwijderen | Werkt met selectie of positie |
| `duplicate`{lang="ts-type"} | Een knooppunt dupliceren | Vereist `pos` eigenschap in item |
| `delete`{lang="ts-type"} | Een knooppunt verwijderen | Vereist `pos`-eigenschap in item |
| `moveUp`{lang="ts-type"} | Een knooppunt naar boven verplaatsen | Vereist `pos` eigenschap in item |
| `moveDown`{lang="ts-type"} | Een knooppunt naar beneden verplaatsen | Vereist `pos` eigenschap in item |
| `suggestion`{lang="ts-type"} | Activeer suggestiemenu | Voegt `/`-teken in |
| `mention`{lang="ts-type"} | Triggervermeldingsmenu | Voegt `@`-teken in |
| `emoji`{lang="ts-type"} | Activeer emoji-kiezer | Voegt `:`-teken in |

::warning
De `taskList`- en `textAlign`-handlers werken alleen wanneer hun respectievelijke extensies zijn geïnstalleerd, omdat ze standaard niet in de Editor zijn opgenomen.
::

Hier leest u hoe u standaardhandlers gebruikt in werkbalk- of suggestiemenu-items:

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

#### Aangepaste handlers

Gebruik de `handlers`-prop om de standaardhandlers uit te breiden of te overschrijven. Aangepaste handlers worden samengevoegd met de standaardhandlers, zodat u nieuwe acties kunt toevoegen of bestaand gedrag kunt wijzigen.

Elke handler implementeert de `EditorHandler`{lang="ts-type"} interface:

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

Hier is een voorbeeld van het maken van aangepaste handlers:

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
Bekijk het voorbeeld voor het uploaden van afbeeldingen voor een volledige implementatie met aangepaste handlers.
::

## Voorbeelden

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt-ui-templates/editor" target="_blank"}
Bekijk de broncode van onze **Editor template** op GitHub voor een realistisch voorbeeld.
::

### Met werkbalk

U kunt de [EditorToolbar](/docs/components/editor-toolbar) component gebruiken om een `fixed`, `bubble` of `floating` werkbalk aan de Editor toe te voegen met algemene opmaakacties.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-toolbar-example'
class: 'p-8'
---
::

### Met sleepgreep

U kunt de [EditorDragHandle](/docs/components/editor-drag-handle) gebruiken om een versleepbare handgreep toe te voegen voor het opnieuw ordenen van blokken.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-drag-handle-example'
class: 'p-8'
---
::

### Met suggestie menu

U kunt de [EditorSuggestionMenu](/docs/components/editor-suggestion-menu) gebruiken om slash-opdrachten toe te voegen voor snelle opmaak en invoegingen.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-suggestion-menu-example'
class: 'p-8'
---
::

### Met vermelding menu

U kunt de [EditorMentionMenu](/docs/components/editor-mention-menu) gebruiken om @ vermeldingen toe te voegen voor het taggen van gebruikers of entiteiten.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-mention-menu-example'
class: 'p-8'
---
::

### Met emoji-menu

U kunt de [EditorEmojiMenu](/docs/components/editor-emoji-menu) gebruiken om ondersteuning voor emoji-kiezer toe te voegen.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-emoji-menu-example'
class: 'p-8'
---
::

### Met afbeelding uploaden

Dit voorbeeld laat zien hoe u een functie voor het uploaden van afbeeldingen kunt maken met de `extensions`-prop om een aangepast TipTap-knooppunt te registreren en de `handlers`-prop om te definiëren hoe de werkbalkknop de 
stroom uploaden.

1. Maak een Vue-component die de [FileUpload](/docs/components/file-upload) -component gebruikt:

::component-example
---
preview: false
collapse: true
name: 'editor-image-upload-node'
---
::

2. Maak een aangepaste TipTap-extensie om het knooppunt te registreren:

::component-example
---
preview: false
collapse: true
lang: 'ts'
name: 'editor-image-upload-extension'
---
::

3. Gebruik de aangepaste extensie in de Editor:

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
Lees meer over het maken van aangepaste extensies in de TipTap-documentatie.
::

### Met AI voltooiing

Dit voorbeeld laat zien hoe u door AI aangedreven functies aan de Editor kunt toevoegen met behulp van de [Vercel AI SDK](https://ai-sdk.dev/), met name de [`useCompletion`](https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-completion) die kan worden samengesteld voor het streamen van tekstaanvullingen, gecombineerd met de [Vercel AI Gateway](https://vercel.com/ai-gateway) 
om toegang te krijgen tot AI-modellen via een gecentraliseerd eindpunt. Het omvat automatische aanvulling van spooktekst en acties voor teksttransformatie (grammatica repareren, uitbreiden, verminderen, vereenvoudigen, vertalen, enz.).

::note
U moet eerst deze afhankelijkheden installeren om dit voorbeeld te gebruiken:

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

1. Maak een aangepaste TipTap-extensie die inline spooktekstsuggesties verwerkt:

::component-example
---
preview: false
collapse: true
name: 'editor-completion-extension'
lang: 'ts'
---
::

2. Maak een composable die AI-voltooiingsstatus en handlers beheert:

::component-example
---
preview: false
collapse: true
name: 'editor-use-completion'
filename: 'useEditorCompletion'
lang: 'ts'
---
::

3. Maak een server-API-eindpunt om voltooiingsverzoeken af te handelen met [`streamText`](https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text#streamtext):

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

4. Gebruik de composable in de Editor:

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
De voltooiingsextensie kan worden geconfigureerd met `autoTrigger: true` om automatisch voltooiingen te suggereren tijdens het typen (standaard uitgeschakeld). U kunt het ook handmatig activeren met: kbd{value="meta"}: kbd{value="j" class="ms-px"}.
::

::callout{icon="i-simple-icons-vercel" to="https://ai-sdk.dev/" target="_blank"}
Lees meer over de Vercel AI SDK en beschikbare providers.
::

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

### Expose

Wanneer u de component opent via een sjabloonref, kunt u het volgende gebruiken:

| Naam | Type |
| ---- | ---- |
| `editor`{lang="ts-type"} | `Ref<Editor \| undefined>`{lang="ts-type"} |

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/api/editor" target="_blank"}
De blootgestelde editor-instantie is de TipTap Editor API. Controleer de TipTap-documentatie voor alle beschikbare methoden en eigenschappen.
::

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog

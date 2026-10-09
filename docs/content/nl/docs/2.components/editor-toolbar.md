---
title: EditorToolbar
description: Een aanpasbare werkbalk voor editoracties die kunnen worden weergegeven als vast, bubbel- of zwevend menu.
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorToolbar.vue
---

## Gebruik

Het onderdeel EditorToolbar toont een werkbalk met opmaakknoppen die automatisch hun actieve status synchroniseren met de inhoud van de editor. Het ondersteunt drie lay-outmodi met behulp van het `@tiptap/vue-3/menus`-pakket:
- `fixed`{lang="ts-type"} (altijd zichtbaar)
- `bubble`{lang="ts-type"} (verschijnt op tekstselectie)
- `floating`{lang="ts-type"} (verschijnt op lege regels)

::caution
Het moet worden gebruikt in de standaardsleuf van een [Editor](/docs/components/editor) component om toegang te krijgen tot de editorinstantie.
::

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-example'
class: 'p-8'
---
::

::callout{icon="i-custom-tiptap"}
De bubbel- en zwevende lay-outs gebruiken de [BubbleMenu](https://tiptap.dev/docs/editor/extensions/functionality/bubble-menu) en [FloatingMenu](https://tiptap.dev/docs/editor/extensions/functionality/floatingmenu) extensies van TipTap.
::

### Items

Gebruik de `items` prop als een array van objecten met de volgende eigenschappen:

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}
- `activeColor?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}
- `variant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"`{lang="ts-type"}
- `activeVariant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"`{lang="ts-type"}
- `size?: "xs" | "sm" | "md" | "lg" | "xl"`{lang="ts-type"}
- [`kind?: "mark" | "textAlign" | "heading" | "link" | "image" | "blockquote" | "bulletList" | "orderedList" | "taskList" | "codeBlock" | "horizontalRule" | "paragraph" | "undo" | "redo" | "clearFormatting" | "duplicate" | "delete" | "moveUp" | "moveDown" | "suggestion" | "mention" | "emoji"`{lang="ts-type"}](/docs/components/editor#handlers)
- `disabled?: boolean`{lang="ts-type"}
- `loading?: boolean`{lang="ts-type"}
- `active?: boolean`{lang="ts-type"}
- `tooltip?: TooltipProps`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-link-popover)
- `onClick?: (e: MouseEvent) => void`{lang="ts-type"}
- `items?: EditorToolbarItem[] | EditorToolbarItem[][]`{lang="ts-type"}
- `class?: any`{lang="ts-type"}

U kunt elke eigenschap van de [Button](/docs/components/button#props) component doorgeven, zoals `color`, `variant`, `size`, enz.

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-items-example'
class: 'p-8'
---
::

::note
U kunt ook een reeks arrays doorgeven aan de `items`-prop om afzonderlijke groepen items te maken.
::

::tip
Elk item kan een `items`-array van objecten met dezelfde eigenschappen als de `items`-prop gebruiken om een [DropdownMenu](/docs/components/dropdown-menu) te maken.
::

### Opmaak

Gebruik de `layout` prop om te wijzigen hoe de werkbalk wordt weergegeven. Standaard `fixed`{lang="ts-type"}.

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-layout-example'
class: 'p-8'
options:
  - name: layout
    label: Layout
    default: bubble
    items:
      - fixed
      - bubble
      - floating
---
::

### Opties

Wanneer u lay-outs van `bubble`{lang="ts-type"} of `floating`{lang="ts-type"} gebruikt, gebruikt u de `options` prop om het positioneringsgedrag aan te passen met behulp van [Floating UI options](https://floating-ui.com/docs/computeposition#options).

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorToolbar
      :editor="editor"
      :items="items"
      layout="bubble"
      :options="{
        placement: 'top',
        offset: 8,
        flip: { padding: 8 },
        shift: { padding: 8 }
      }"
    />
  </UEditor>
</template>
```

### Moet tonen

Gebruik bij gebruik van `bubble`{lang="ts-type"} of `floating`{lang="ts-type"} lay-outs de `should-show` prop om te bepalen wanneer de werkbalk verschijnt. Deze functie ontvangt context over de editorstatus en retourneert een boolean.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorToolbar
      :editor="editor"
      :items="items"
      layout="bubble"
      :should-show="({ view, state }) => {
        const { selection } = state
        const { from, to } = selection
        const text = state.doc.textBetween(from, to)
        return view.hasFocus() && !selection.empty && text.length > 10
      }"
    />
  </UEditor>
</template>
```

## Voorbeelden

### Met afbeelding werkbalk

Gebruik de `should-show`-prop om contextspecifieke werkbalken te maken die alleen voor bepaalde knooppunttypen verschijnen.
Dit voorbeeld toont een `bubble`-werkbalk met download- en verwijderacties die alleen wordt weergegeven wanneer een afbeelding is geselecteerd.

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-image-example'
class: 'p-8'
---
::

### Met link popover

Dit voorbeeld laat zien hoe u een aangepaste link-popover maakt met de eigenschap `slot` op werkbalkitems en de [Popover](/docs/components/popover) .

1. Maak een Vue-component die een [Popover](/docs/components/popover) met linkbewerkingsfunctionaliteit omhult:

::component-example
---
preview: false
collapse: true
name: 'editor-link-popover'
---
::

2. Gebruik de aangepaste component in de werkbalk met een benoemde sleuf:

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-custom-slot-example'
class: 'p-8'
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog

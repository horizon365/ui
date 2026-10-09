---
title: Editor-Toolbar Bearbeiten
description: Eine anpassbare Symbolleiste für Editor-Aktionen, die als festes, Bubble-oder Floating-Menü angezeigt werden können.
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorToolbar.vue
---

## Bearbeiten

Die EditorToolbar-Komponente zeigt eine Symbolleiste mit Formatierungsschaltflächen an, die ihren aktiven Status automatisch mit dem Editor-Inhalt synchronisieren. Es unterstützt drei Layoutmodi mit dem Paket `@tiptap/vue-3/menus`:
- `fixed`{lang="ts-type"} (immer sichtbar)
- `bubble`{lang="ts-type"} (wird bei der Textauswahl angezeigt)
- `floating`{lang="ts-type"} (erscheint auf leeren Zeilen)

::caution
Es muss innerhalb eines [Editor](/docs/components/editor)-Komponentensteckplatzes verwendet werden, um Zugriff auf die Editorinstanz zu haben.
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
Die Bubble-und Floating-Layouts verwenden TipTaps Erweiterungen [BubbleMenu](https://tiptap.dev/docs/editor/extensions/functionality/bubble-menu) und [FloatingMenu](https://tiptap.dev/docs/editor/extensions/functionality/floatingmenu).
::

### Items Bearbeiten

Verwenden Sie die `items`-prop als Array von Objekten mit den folgenden Eigenschaften:

- `label?: string`xph0333x (englisch)
- `icon?: string`{lang="ts-type"} (englisch)
- `color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"} (nicht vorhanden)
- `activeColor?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"} (englisch)
- `variant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"`{lang="ts-type"} (englisch)
- `activeVariant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"`{lang="ts-type"} (nicht)
- `size?: "xs" | "sm" | "md" | "lg" | "xl"`{lang="ts-type"} (englisch)
- [`kind?: "mark" | "textAlign" | "heading" | "link" | "image" | "blockquote" | "bulletList" | "orderedList" | "taskList" | "codeBlock" | "horizontalRule" | "paragraph" | "undo" | "redo" | "clearFormatting" | "duplicate" | "delete" | "moveUp" | "moveDown" | "suggestion" | "mention" | "emoji"`{lang="ts-type"}xph0555xxph0555x/docs/components/editor#handlers) ) xph05555555555555555555555555555555555555555555555557x
- `disabled?: boolean`{lang="ts-type"} (nicht vorhanden)
- `loading?: boolean`{lang="ts-type"} (nicht vorhanden)
- `active?: boolean`{lang="ts-type"} (nicht vorhanden)
- `tooltip?: TooltipProps`{lang="ts-type"} (nicht vorhanden)
0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
- `onClick?: (e: MouseEvent) => void`{lang="ts-type"} (nicht vorhanden)
- `items?: EditorToolbarItem[] | EditorToolbarItem[][]`{lang="ts-type"} (englisch)
- `class?: any`{lang="ts-type"} (englisch)

Sie können jede Eigenschaft aus der Komponente [Button](/docs/components/button#props) übergeben, z. B. `color`, `variant`, `size` usw.

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-items-example'
class: 'p-8'
---
::

::note
Sie können auch ein Array von Arrays an die `items`-prop übergeben, um getrennte Gruppen von Elementen zu erstellen.
::

::tip
Jedes Element kann ein `items`-Array von Objekten mit den gleichen Eigenschaften wie die `items`-Prop verwenden, um eine [DropdownMenu](/docs/components/dropdown-menu) zu erstellen.
::

### Layout (englisch)

Verwenden Sie die `layout`-prop, um zu ändern, wie die Symbolleiste angezeigt wird. Standardmäßig auf `fixed`{lang="ts-type"}.

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

### Options Bearbeiten

Wenn Sie `bubble`{lang="ts-type"}-oder `floating`{lang="ts-type"}-Layouts verwenden, verwenden Sie die `options`-Prop, um das Positionierungsverhalten mit [Floating UI options](https://floating-ui.com/docs/computeposition#options) anzupassen.

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

### Should anzeigen

Wenn Sie `bubble`{lang="ts-type"}-oder `floating`{lang="ts-type"}-Layouts verwenden, verwenden Sie die `should-show`-prop, um zu steuern, wann die Symbolleiste angezeigt wird.

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

## Beispiele:

### Mit der Bild-Toolbar

Verwenden Sie die `should-show`-Prop, um kontextspezifische Symbolleisten zu erstellen, die nur für bestimmte Knotentypen angezeigt werden. Dieses Beispiel zeigt eine `bubble`-Symbolleiste mit Download-und Löschaktionen, die nur angezeigt wird, wenn ein Bild ausgewählt ist.

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-image-example'
class: 'p-8'
---
::

### With Link Popover (englisch)

Dieses Beispiel zeigt, wie Sie ein benutzerdefiniertes Link-Popover mit der `slot`-Eigenschaft für Symbolleistenelemente und der Komponente [Popover](/docs/components/popover) erstellen.

1. Erstellen Sie eine Vue-Komponente, die eine [Popover](/docs/components/popover) mit Linkbearbeitungsfunktionen umhüllt:

::component-example
---
preview: false
collapse: true
name: 'editor-link-popover'
---
::

2. Verwenden Sie die benutzerdefinierte Komponente in der Symbolleiste mit einem benannten Slot:

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-custom-slot-example'
class: 'p-8'
---
::

## API Bearbeiten

### Props (nicht)

:component-props

### Slots (englisch)

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog

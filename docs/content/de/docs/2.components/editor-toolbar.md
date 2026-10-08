---
title: Editor-Toolbar Bearbeiten
description: Eine anpassbare Symbolleiste für Editor-Aktionen, die als fixes, bubble oder floating Menü angezeigt werden kann.
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorToolbar.vue
---

@@@ph000@@Verwendung

Die EditorToolbar-Komponente zeigt eine Symbolleiste mit Formatierungsschaltflächen an, die ihren aktiven Status automatisch mit dem Editor-Inhalt synchronisieren. Es unterstützt drei Layoutmodi mit dem @@@-Paket:
- `fixed`{lang="ts-type"}(immer sichtbar)
- `bubble`{lang="ts-type"}(erscheint bei der Textauswahl)
- `floating`{lang="ts-type"}(erscheint in leeren Zeilen)

::caution
Es muss innerhalb eines [Editor](/docs/components/editor) Komponenten-Standardsteckplatz verwendet werden, um Zugriff auf die Editorinstanz zu haben.
::

::component-example
---
Höhe: wahr
Einsturz: wahr
Name: 'Editor-Toolbar-Beispiel'
Klasse: 'P-8'
---
::

::callout{icon="i-custom-tiptap"}
Die Bubble-und Floating-Layouts verwenden TipTap's [BubbleMenu](https://tiptap.dev/docs/editor/extensions/functionality/bubble-menu) und [FloatingMenu](https://tiptap.dev/docs/editor/extensions/functionality/floatingmenuhttps://tiptap.dev/docs/editor/extensions/functionality/floatingmenu) Erweiterungen.
::

@@ph023@gmail.de Bearbeiten

Verwenden Sie `items` prop als Array von Objekten mit den folgenden Eigenschaften:

`label?: string``label?: string``label?: string``label?: string`{lang="ts-type"}
`icon?: string`PH03030
`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`PH03333 @
`activeColor?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"``activeColor?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"``activeColor?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}
`variant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"``variant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"``variant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"`{lang="ts-type"}
`activeVariant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"``activeVariant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"``activeVariant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH0444@@@@@@@@@PH04444@@@@@@@@@@@@PH04444@@@@@@@@@PH0445@@@@@@@PH0445@@@@@@@@@@@@@PH04444444@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
- [`kind?: "mark" | "textAlign" | "heading" | "link" | "image" | "blockquote" | "bulletList" | "orderedList" | "taskList" | "codeBlock" | "horizontalRule" | "paragraph" | "undo" | "redo" | "clearFormatting" | "duplicate" | "delete" | "moveUp" | "moveDown" | "suggestion" | "mention" | "emoji"`{lang="ts-type"}]()
`disabled?: boolean``disabled?: boolean`PH0554@@@@@@@@@@@PH0555 @@
`loading?: boolean``loading?: boolean`{lang="ts-type"}PH0558@@@@@@@@PH0558@@@@@@@@@@@@PH05558@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`active?: boolean``active?: boolean``active?: boolean`{lang="ts-type"}PH06061 @
`tooltip?: TooltipProps``tooltip?: TooltipProps``tooltip?: TooltipProps`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#################################################################
`onClick?: (e: MouseEvent) => void``onClick?: (e: MouseEvent) => void``onClick?: (e: MouseEvent) => void`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Sie können jede Eigenschaft von der [Button](/docs/components/button#props) Komponente wie `color`,`variant`,`size`, etc. übergeben.

::component-example
---
Höhe: wahr
Einsturz: wahr
Name: 'Editor-Toolbar-Items-Beispiel'
Klasse: 'P-8'
---
::

::note
Sie können auch ein Array von Arrays an `items` prop übergeben, um separate Gruppen von Elementen zu erstellen.
::

::tip
Jedes Element kann ein `items` Array von Objekten mit den gleichen Eigenschaften wie die `items` prop nehmen, um ein [DropdownMenu](/docs/components/dropdown-menu) zu erstellen.
::

@@@@@@@@@ph095@@@Layout

Verwenden Sie `layout` prop, um die Anzeige der Symbolleiste zu ändern. Standardmäßig ist `fixed`{lang="ts-type"}.

::component-example
---
Höhe: wahr
Einsturz: wahr
Name: 'Editor-Toolbar-Layout-Beispiel'
Klasse: 'P-8'
optionen:
  @@ph099@@name: layout
    Bezeichnung: Layout
    Markiert: Bubble
    Items:
      @@@ph100@fixen
      @@101@bumble
      @@ph102@floating@@floating
---
::

@@ph103@@Optionen

Wenn Sie `bubble`{lang="ts-type"} oder `floating`{lang="ts-type"} Layouts verwenden, verwenden Sie die `options` prop, um das Positionierungsverhalten mit [Floating-UI-Optionen](https://floating-ui.com/docs/computeposition#options) anzupassen.

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

### should show (sollte erscheinen)

Bei Verwendung von `bubble`{lang="ts-type"} oder `floating`{lang="ts-type"} prop, um zu steuern, wann die Symbolleiste angezeigt wird.

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

## Beispiele

### Mit Bild-Symbolleiste

Verwenden Sie `should-show` prop, um kontextspezifische Symbolleisten zu erstellen, die nur für bestimmte Knotentypen angezeigt werden. Dieses Beispiel zeigt eine `bubble`-Symbolleiste mit Download-und Löschaktionen, die nur angezeigt wird, wenn ein Bild ausgewählt ist.

::component-example
---
Höhe: true
Einsturz: wahr
Name: 'Editor-Toolbar-Image-Beispiel'
Klasse: 'P-8'
---
::

### Mit Link Popover

Dieses Beispiel zeigt, wie Sie ein benutzerdefiniertes Link-Popover mit der `slot`-Eigenschaft für Symbolleistenelemente und der Komponente [Popover](/docs/components/popover) erstellen.

1. Erstellen Sie eine Vue-Komponente, die eine [Popover](/docs/components/popover) mit Link-Bearbeitungsfunktion umhüllt:

::component-example
---
Vorschau: FALSE
Einsturz: wahr
Name: 'Editor-Link-Popover'(englisch)
---
::

2. Verwenden Sie die benutzerdefinierte Komponente in der Symbolleiste mit einem benannten Slot:

::component-example
---
Höhe: true
Einsturz: wahr
Name: 'Editor-Toolbar-Custom-Slot-Beispiel'
Klasse: 'P-8'
---
::

@@@@@@169@@bmwbb

@@@@@@@@170@@props

Komponenten Props

### Slots

Die Komponenten-Slots

## theme

Das Komponenten-Theme

@@ph173@@changelog @ changelog

Das Component-Changelog

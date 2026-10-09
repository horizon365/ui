---
title: Redaktion Menu
description: Ein Befehlsmenü, das Formatierungs-und Handlungsvorschläge anzeigt, wenn Sie das Zeichen/im Editor eingeben.
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorSuggestionMenu.vue
---

## Bearbeiten

Die EditorSuggestionMenu-Komponente zeigt ein Menü mit Formatierungs-und Aktionsvorschlägen an, wenn Sie ein Triggerzeichen im Editor eingeben, und führt das entsprechende [handler](/docs/components/editor#handlers) aus, wenn ein Element ausgewählt ist.

::note
Es verwendet das `useEditorMenu` composable, das auf dem [Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion)-Dienstprogramm von TipTap aufbaut, um Elemente während der Eingabe zu filtern und die Tastaturnavigation zu unterstützen (Pfeiltasten, zum Auswählen eingeben, zum Schließen entkommen).
::

::caution
Es muss innerhalb eines [Editor](/docs/components/editor)-Komponentensteckplatzes verwendet werden, um Zugriff auf die Editorinstanz zu haben.
::

::component-example
---
elevated: true
collapse: true
name: 'editor-suggestion-menu-example'
class: 'p-8'
---
::

### Bearbeiten

Verwenden Sie die `items`-prop als Array von Objekten mit den folgenden Eigenschaften:

xph0222x[`kind?: "textAlign" | "heading" | "link" | "image" | "blockquote" | "bulletList" | "orderedList" | "taskList" | "codeBlock" | "horizontalRule" | "paragraph" | "clearFormatting" | "duplicate" | "delete" | "moveUp" | "moveDown" | "suggestion" | "mention" | "emoji"`{lang="ts-type"}](/docs/components/editor#handlers) x27x x27x028x028x028x028x028x028x028x028x028x028x028x26x27x
- `label?: string`{lang="ts-type"} (nicht vorhanden)
- `description?: string`{lang="ts-type"} (nicht vorhanden)
- `icon?: string`{lang="ts-type"} (nicht vorhanden)
- `type?: "label" | "separator"`{lang="ts-type"} (nicht vorhanden)
- `disabled?: boolean`{lang="ts-type"} (englisch)

::component-example
---
elevated: true
collapse: true
name: 'editor-suggestion-menu-items-example'
class: 'p-8'
---
::

::note
Sie können auch ein Array von Arrays an die `items`-prop übergeben, um getrennte Gruppen von Elementen zu erstellen.
::

::tip
Verwenden Sie `type: 'label'` für Abschnittsüberschriften und `type: 'separator'` für visuelle Teiler, um Befehle in logischen Gruppen zu organisieren, um die Auffindbarkeit zu verbessern.
::

### Char (englisch)

Verwenden Sie die `char`-prop, um das Triggerzeichen zu ändern. Standardmäßig ist `/`{lang="ts-type"}.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu :editor="editor" :items="items" char=">" />
  </UEditor>
</template>
```

### Suggestion: badge{label="4.7+" class="align-text-top"}

Verwenden Sie die `suggestion`-Prop, um TipTaps [Suggestion-Übereinstimmungsverhalten ](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings) anzupassen.

Dies ist nützlich, wenn das Triggerzeichen direkt nach anderen Zeichen geöffnet werden soll, anstatt das Standard-Whitespace-Präfix zu erfordern.

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

### Options (englisch)

Verwenden Sie die `options`-Prop, um das Positionierungsverhalten mithilfe von [Floating UI-Optionen ](https://floating-ui.com/docs/computeposition#options) anzupassen.

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

## API Bearbeiten

### Props Bearbeiten

:component-props

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog

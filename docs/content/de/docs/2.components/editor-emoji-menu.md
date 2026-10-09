---
title: Herausgeber: EmojiMenu
description: "Ein Emoji-Auswahlmenü, das Emoji-Vorschläge anzeigt, wenn Sie das Zeichen: im Editor eingeben."
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorEmojiMenu.vue
---

## Bearbeiten

Die EditorEmojiMenu-Komponente zeigt ein Menü mit Emoji-Vorschlägen an, wenn Sie das `:`-Zeichen in den Editor eingeben, und fügt das ausgewählte Emoji ein.

::note
Es verwendet das `useEditorMenu` composable, das auf dem Dienstprogramm [Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion) von TipTap aufbaut, um Elemente während der Eingabe zu filtern und die Tastaturnavigation zu unterstützen (Pfeiltasten, zum Auswählen eingeben, zum Schließen entkommen).
::

::caution
Es muss innerhalb eines [Editor](/docs/components/editor)-Komponentensteckplatzes verwendet werden, um Zugriff auf die Editorinstanz zu haben.
::

::component-example
---
elevated: true
collapse: true
name: 'editor-emoji-menu-example'
class: 'p-8'
---
::

::warning
Das Paket `@tiptap/extension-emoji` ist standardmäßig nicht installiert, Sie müssen es separat installieren.
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/emoji" target="_blank"}
Erfahren Sie mehr über die Emoji-Erweiterung in der TipTap-Dokumentation.
::

### Einträge

Verwenden Sie die `items`-prop als Array von Objekten mit den folgenden Eigenschaften:

- `name: string`{lang="ts-type"} (nicht vorhanden)
- `emoji: string`{lang="ts-type"} (nicht vorhanden)
- `shortcodes?: string[]`{lang="ts-type"} (nicht vorhanden)
- `tags?: string[]`{lang="ts-type"} (englisch)
xph0333x`group?: string`{lang="ts-type"} (englisch)
- `fallbackImage?: string`{lang="ts-type"} (nicht vorhanden)

::component-example
---
elevated: true
collapse: true
name: 'editor-emoji-menu-items-example'
class: 'p-8'
---
::

::note
Sie können auch ein Array von Arrays an die `items`-prop übergeben, um getrennte Gruppen von Elementen zu erstellen.
::

### Char (englisch)

Verwenden Sie die `char`-prop, um das Triggerzeichen zu ändern. Standardmäßig ist `:`{lang="ts-type"}.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu :editor="editor" :items="items" char=";" />
  </UEditor>
</template>
```

### Suggestion: badge{label="4.7+" class="align-text-top"}

Verwenden Sie die `suggestion`-Prop, um TipTaps [Suggestion-Übereinstimmungsverhalten ](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings) anzupassen.

Dies ist nützlich, wenn das Triggerzeichen direkt nach anderen Zeichen geöffnet werden soll, anstatt das Standard-Whitespace-Präfix zu benötigen.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu
      :editor="editor"
      :items="items"
      :suggestion="{
        allowedPrefixes: null
      }"
    />
  </UEditor>
</template>
```

### Options (Deutsche Ausgabe)

Verwenden Sie die `options`-Prop, um das Positionierungsverhalten mit [Floating UI-Optionen ](https://floating-ui.com/docs/computeposition#options) anzupassen.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu
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

## API (Englisch)

### Props (nicht)

:component-props

## Theme (englisch)

:component-theme

## Changelog (deutsch)

:component-changelog

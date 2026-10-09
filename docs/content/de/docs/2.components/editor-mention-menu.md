---
title: Redaktion Menu
description: Ein Mention-Menü, das Benutzervorschläge anzeigt, wenn ein Triggerzeichen im Editor eingegeben wird.
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorMentionMenu.vue
---

## Bearbeiten

Die EditorMentionMenu-Komponente zeigt ein Menü mit Benutzervorschlägen an, wenn Sie ein Triggerzeichen (standardmäßig `@`) im Editor eingeben, und fügt die ausgewählte Erwähnung mit dem Paket `@tiptap/extension-mention` ein.

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
name: 'editor-mention-menu-example'
class: 'p-8'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/mention" target="_blank"}
Erfahren Sie mehr über die Mention-Erweiterung in der TipTap-Dokumentation.
::

### Items Bearbeiten

Verwenden Sie die `items`-prop als Array von Objekten mit den folgenden Eigenschaften:

- `label: string`xph0222x (nicht vorhanden)
- `avatar?: AvatarProps`{lang="ts-type"} (englisch)
- `icon?: string`{lang="ts-type"} (nicht)
- `description?: string`{lang="ts-type"} (nicht vorhanden)
- `disabled?: boolean`{lang="ts-type"} (nicht vorhanden)

::component-example
---
elevated: true
collapse: true
name: 'editor-mention-menu-items-example'
class: 'p-8'
---
::

::note
Sie können auch ein Array von Arrays an die `items`-prop übergeben, um getrennte Gruppen von Elementen zu erstellen.
::

### Char (nicht)

Verwenden Sie die prop `char`, um das Triggerzeichen zu ändern. Standardmäßig ist es `@`{lang="ts-type"}. Das Triggerzeichen wird auch als Präfix verwendet, wenn die eingefügte Erwähnung wiedergegeben wird (z. B. `#channel` anstelle von `@channel`).

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="channels" char="#" />
  </UEditor>
</template>
```

::note
Sie können mehrere `EditorMentionMenu`-Komponenten im selben Editor mit verschiedenen `char`-und `plugin-key`-Requisiten verwenden, um verschiedene Erwähnungstypen zu unterstützen.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="users" plugin-key="mentionMenu" />
    <UEditorMentionMenu :editor="editor" :items="tags" char="#" plugin-key="tagMenu" />
  </UEditor>
</template>
```
::

### Vorschlag: badge{label="4.7+" class="align-text-top"}

Verwenden Sie die `suggestion`-Prop, um TipTaps [Suggestion-Übereinstimmungsverhalten ](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings) anzupassen.

Dies ist nützlich, wenn das Triggerzeichen direkt nach anderen Zeichen geöffnet werden soll, anstatt das Standard-Whitespace-Präfix zu erfordern.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu
      :editor="editor"
      :items="items"
      char="#"
      :suggestion="{
        allowedPrefixes: null
      }"
    />
  </UEditor>
</template>
```

### Options (Deutsche Übersetzung)

Verwenden Sie die `options`-Prop, um das Positionierungsverhalten mit [Floating UI-Optionen ](https://floating-ui.com/docs/computeposition#options) anzupassen.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu
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

## Examples (Beispiele)

### With ignore filter: badge{label="4.4+" class="align-text-top"} (mit Ignorierfilter)

Sie können die `ignore-filter`-prop auf `true` setzen, um die interne Suche zu deaktivieren und Ihre eigene Suchlogik zu verwenden. Verwenden Sie `v-model:search-term`, um auf den aktuellen Suchbegriff zuzugreifen und Elemente aus einer API zu holen.

::component-example
---
elevated: true
collapse: true
name: 'editor-mention-menu-ignore-filter-example'
class: 'p-8'
---
::

::note
In diesem Beispiel wird [`refDebounced`](https://vueuse.org/shared/refDebounced/) verwendet, um die API-Aufrufe zu entkräften.
::

## API (englisch)

### Props (nicht)

:component-props

## Theme Bearbeiten

:component-theme

## Changelog (deutsch)

:component-changelog

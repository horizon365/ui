---
title: Herausgeber: EmojiMenu
description: "Ein Emoji-Auswahlmenü, das Emoji-Vorschläge anzeigt, wenn Sie das Zeichen: im Editor eingeben."
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorEmojiMenu.vue
---

@@@ph000@Verwendung

Die Komponente EditorEmojiMenu zeigt ein Menü mit Emoji-Vorschlägen an, wenn Sie das @@@-Zeichen in den Editor eingeben, und fügt das ausgewählte Emoji ein.

::note
Es verwendet das `useEditorMenu` composable, das auf TipTaps [Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion) Utility aufbaut, um Elemente während der Eingabe zu filtern und die Tastaturnavigation zu unterstützen (Pfeiltasten, eingeben, um auszuwählen, entkommen, um zu schließen).
::

::caution
Es muss innerhalb eines [Editor](/docs/components/editor) Komponente verwendet werden, um Zugriff auf die Editor-Instanz zu haben.
::

::component-example
---
Höhe: wahr
Einsturz: wahr
Name: 'Editor-Emoji-Menu-Beispiel'
Klasse: 'P-8'
---
::

::warning
Das Paket `@tiptap/extension-emoji` wird standardmäßig nicht installiert, Sie müssen es separat installieren.
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/emoji" target="_blank"}
Erfahren Sie mehr über die Emoji-Erweiterung in der TipTap-Dokumentation.
::

@@ph013@gmail.de

Verwenden Sie `items` prop als Array von Objekten mit den folgenden Eigenschaften:

`name: string``name: string``name: string`{lang="ts-type"}{lang="ts-type"}`name: string``name: string``name: string`
`emoji: string``emoji: string`PH02020
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`tags?: string[]``tags?: string[]`{lang="ts-type"}
`group?: string``group?: string``group?: string`{lang="ts-type"}
`fallbackImage?: string``fallbackImage?: string``fallbackImage?: string`{lang="ts-type"}

::component-example
---
Höhe: wahr
Einsturz: wahr
Name: 'editor-emoji-menu-items-example'(Editor-Emoji-Menü-Elemente-Beispiel)
Klasse: 'P-8'
---
::

::note
Sie können auch ein Array von Arrays an `items` prop übergeben, um getrennte Gruppen von Elementen zu erstellen.
::

@@ph034@char

Verwenden Sie `char` prop, um das Triggerzeichen zu ändern. Defaults auf `:`{lang="ts-type"}.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu :editor="editor" :items="items" char=";" />
  </UEditor>
</template>
```

### Vorschlag: badge{label="4.7+" class="align-text-top"}

Verwenden Sie die `suggestion` prop, um TipTap's [Suggestion matching behavior](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings) anzupassen.

Dies ist nützlich, wenn das Triggerzeichen direkt nach anderen Zeichen geöffnet werden soll, anstatt das Standard-Whitespace-Präfix zu erfordern.

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

@@ph065@Optionen

Verwenden Sie `options` prop, um das Positionierungsverhalten mit [Floating-UI-Optionen ](https://floating-ui.com/docs/computeposition#options) anzupassen.

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

@@@@@@85@@bpb

@@@@@@@@@@@@ph086@@props

Komponenten-Props

@@@@@@@@@@@@ph087@@theme

Das Komponenten-Theme

@@ph088@@changelog @@changelog

Das Component-Changelog

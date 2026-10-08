---
title: Redaktion Menu
description: Ein Mention-Menü, das Benutzervorschläge anzeigt, wenn ein Triggerzeichen im Editor eingegeben wird.
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorMentionMenu.vue
---

@@@ph000@@Verwendung

Die EditorMentionMenu-Komponente zeigt ein Menü mit Benutzervorschlägen an, wenn Sie ein Triggerzeichen (standardmäßig `@`) im Editor eingeben, und fügt die ausgewählte Erwähnung mit dem @@@@-Paket ein.

::note
Es verwendet das `useEditorMenu` composable, das auf TipTaps [Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion) Utility aufbaut, um Elemente während der Eingabe zu filtern und die Tastaturnavigation zu unterstützen (Pfeiltasten, eingeben, um auszuwählen, entkommen, um zu schließen).
::

::caution
Es muss innerhalb eines [Editor](/docs/components/editor) Komponente verwendet werden, um Zugriff auf die Editor-Instanz zu haben.
::

::component-example
---
Höhe: true
Einsturz: wahr
Name: 'editor-mention-menu-example'(Bearbeiten)
Klasse: 'P-8'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/mention" target="_blank"}
Erfahren Sie mehr über die Mention-Erweiterung in der TipTap-Dokumentation.
::

@@ph012@gmail.de

Verwenden Sie `items` prop als Array von Objekten mit den folgenden Eigenschaften:

`label: string`{lang="ts-type"}`label: string`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}
`avatar?: AvatarProps``avatar?: AvatarProps``avatar?: AvatarProps`{lang="ts-type"}
`icon?: string`PH0221{lang="ts-type"}
`description?: string``description?: string``description?: string`{lang="ts-type"}
`disabled?: boolean`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}PH028027@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

::component-example
---
Höhe: true
Einsturz: wahr
name: 'editor-mention-menu-items-example'(Editor-Erwähnung-Menu-Elemente-Beispiel)
Klasse: 'P-8'
---
::

::note
Sie können auch ein Array von Arrays an `items` prop übergeben, um getrennte Gruppen von Elementen zu erstellen.
::

@@ph030@@char

Verwenden Sie `char` prop, um das Triggerzeichen zu ändern. Standardmäßig ist `@`{lang="ts-type"}. Das Triggerzeichen wird auch als Präfix verwendet, wenn die eingefügte Erwähnung wiedergegeben wird (z. B.`#channel` anstelle von `@channel`).

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="channels" char="#" />
  </UEditor>
</template>
```

::note
Sie können mehrere `EditorMentionMenu`-Komponenten im selben Editor mit verschiedenen `char` und `plugin-key`-Props verwenden, um verschiedene Erwähnungstypen zu unterstützen.

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

Verwenden Sie die `suggestion` prop, um TipTap's [Suggestion matching behavior](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings) anzupassen.

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

@@ph075@Optionen

Verwenden Sie `options` prop, um das Positionierungsverhalten mit [Floating UI options](https://floating-ui.com/docs/computeposition#options) anzupassen.

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

@@ph095@@Beispiele

### Mit Ignorierfilter: badge{label="4.4+" class="align-text-top"}

Sie können `ignore-filter` prop auf `true` setzen, um die interne Suche zu deaktivieren und Ihre eigene Suchlogik zu verwenden. Verwenden Sie `v-model:search-term`, um auf den aktuellen Suchbegriff zuzugreifen und Elemente aus einer API zu holen.

::component-example
---
Höhe: wahr
Einsturz: wahr
name: 'editor-mention-menu-ignore-filter-example'(editor-erwähnung-menu-ignorieren-filter-beispiel)
Klasse: 'P-8'
---
::

::note
Dieses Beispiel verwendet [`refDebounced`](https://vueuse.org/shared/refDebounced/), um die API-Aufrufe zu entkräften.
::

@@106@btw

@@@@@@@@@@@@@@ph107@@props

Komponenten Props

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@################################################################################################################################################################################################

Das Komponenten-Theme

@@ph109@@changelog (auf Englisch)

Das Component-Changelog

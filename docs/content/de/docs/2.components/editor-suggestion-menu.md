---
title: Redaktion Menu
description: Ein Befehlsmenü, das Formatierungs-und Handlungsvorschläge anzeigt, wenn Sie das Zeichen/im Editor eingeben.
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorSuggestionMenu.vue
---

@@@ph000@@Verwendung

Die EditorSuggestionMenu-Komponente zeigt ein Menü mit Formatierungs-und Aktionsvorschlägen an, wenn ein Triggerzeichen in den Editor eingegeben wird, und führt das entsprechende [handler](/docs/components/editor#handlers) aus, wenn ein Element ausgewählt wird.

::note
Es verwendet das `useEditorMenu` composable, das auf TipTaps [Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion) Utility aufbaut, um Elemente während der Eingabe zu filtern und die Tastaturnavigation zu unterstützen (Pfeiltasten, eingeben, um auszuwählen, entkommen, um zu schließen).
::

::caution
Es muss innerhalb eines [Editor](/docs/components/editor) Components verwendet werden, um Zugriff auf die Editor-Instanz zu haben.
::

::component-example
---
Höhe: wahr
Einsturz: wahr
Name: 'Vorschlag-Menü-Beispiel'
Klasse: 'P-8'
---
::

@@ph014@gmail.de

Verwenden Sie `items` prop als Array von Objekten mit folgenden Eigenschaften:

[`kind?: "textAlign" | "heading" | "link" | "image" | "blockquote" | "bulletList" | "orderedList" | "taskList" | "codeBlock" | "horizontalRule" | "paragraph" | "clearFormatting" | "duplicate" | "delete" | "moveUp" | "moveDown" | "suggestion" | "mention" | "emoji"`PH0222)
`label?: string``label?: string``label?: string`{lang="ts-type"}
`description?: string`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}PH028027@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`icon?: string``icon?: string`PH03030{lang="ts-type"}{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@PH0333@@@@@@@@@@@@@@PH03333@@@@@@@@@@@@@@@PH0334{lang="ts-type"}{lang="ts-type"}PH03334@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`disabled?: boolean``disabled?: boolean``disabled?: boolean`{lang="ts-type"}

::component-example
---
Höhe: wahr
Einsturz: wahr
name: 'editor-suggestion-menu-items-example'(Editor-Vorschlag-Menu-Elemente-Beispiel)
Klasse: 'P-8'
---
::

::note
Sie können auch ein Array von Arrays an `items` prop übergeben, um getrennte Gruppen von Elementen zu erstellen.
::

::tip
Verwenden Sie `type: 'label'` für Abschnittsüberschriften und `type: 'separator'` für visuelle Trennzeichen, um Befehle in logischen Gruppen zu organisieren, um die Auffindbarkeit zu verbessern.
::

@@ph041@@@char

Verwenden Sie `char` prop, um das Triggerzeichen zu ändern. Defaults auf `/`{lang="ts-type"}.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu :editor="editor" :items="items" char=">" />
  </UEditor>
</template>
```

### Vorschlag: badge{label="4.7+" class="align-text-top"}

Verwenden Sie die `suggestion` prop, um TipTap's [Suggestion matching behavior](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings) anzupassen.

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

@@ph073@@Optionen

Verwenden Sie `options` prop, um das Positionierungsverhalten mit [Floating-UI-Optionen ](https://floating-ui.com/docs/computeposition#options) anzupassen.

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

@@@@@@@@@@@@@@@@@@@@@@@@@api

@@@@@@@ph094@@@Props

Komponenten Props

@@@@@ph095@@theme@theme@@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@@theme@theme@theme@@theme@theme@@@theme@theme@@@theme@theme@@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@

Das Komponenten-Theme

@@ph096@@changelog @@changelog

Das Component-Changelog

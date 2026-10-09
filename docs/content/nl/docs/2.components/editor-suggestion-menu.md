---
title: EditorSuggestionMenu
description: Een opdrachtmenu dat opmaak- en actiesuggesties weergeeft bij het typen van het / -teken in de editor.
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorSuggestionMenu.vue
---

## Gebruik

De EditorSuggestionMenu component geeft een menu weer met opmaak- en actiesuggesties bij het typen van een triggerteken in de editor en voert de overeenkomstige [handler](/docs/components/editor#handlers) uit wanneer een item wordt geselecteerd.

::note
Het maakt gebruik van de `useEditorMenu`-composable die bovenop TipTap 's [Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion) is gebouwd om items te filteren terwijl u typt en toetsenbordnavigatie ondersteunt (pijltjestoetsen, enter om te selecteren, escape om te sluiten).
::

::caution
Het moet worden gebruikt in de standaardsleuf van een [Editor](/docs/components/editor) component om toegang te krijgen tot de editorinstantie.
::

::component-example
---
elevated: true
collapse: true
name: 'editor-suggestion-menu-example'
class: 'p-8'
---
::

### Items

Gebruik de `items` prop als een array van objecten met de volgende eigenschappen:

- [`kind?: "textAlign" | "heading" | "link" | "image" | "blockquote" | "bulletList" | "orderedList" | "taskList" | "codeBlock" | "horizontalRule" | "paragraph" | "clearFormatting" | "duplicate" | "delete" | "moveUp" | "moveDown" | "suggestion" | "mention" | "emoji"`{lang="ts-type"}](/docs/components/editor#handlers)
- `label?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `type?: "label" | "separator"`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}

::component-example
---
elevated: true
collapse: true
name: 'editor-suggestion-menu-items-example'
class: 'p-8'
---
::

::note
U kunt ook een reeks arrays doorgeven aan de `items` prop om afzonderlijke groepen items te maken.
::

::tip
Gebruik `type: 'label'` voor sectiekoppen en `type: 'separator'` voor visuele verdelers om opdrachten in logische groepen te ordenen voor een betere vindbaarheid.
::

### Char

Gebruik de `char`-prop om het triggerkarakter te wijzigen. Standaard is `/`{lang="ts-type"}.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu :editor="editor" :items="items" char=">" />
  </UEditor>
</template>
```

### Suggestie: badge{label="4.7+" class="align-text-top"}

Gebruik de `suggestion`-prop om TipTap 's [Suggestion-overeenkomst behavior](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings) aan te passen.

Dit is handig wanneer het triggerteken direct na andere tekens moet worden geopend in plaats van het standaard witruimtevoorvoegsel te vereisen.

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

### Opties

Gebruik de `options` prop om het positioneringsgedrag aan te passen met [Floating UI options](https://floating-ui.com/docs/computeposition#options).

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

## API

### Props

:component-props

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog

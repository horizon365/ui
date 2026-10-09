---
title: EditorEmojiMenu
description: "Een emoji-kiezersmenu dat emoji-suggesties weergeeft bij het typen van het :-teken in de editor."
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorEmojiMenu.vue
---

## Gebruik

De EditorEmojiMenu-component geeft een menu met emoji-suggesties weer bij het typen van het `:`-teken in de editor en voegt de geselecteerde emoji in.
Het werkt naast het `@tiptap/extension-emoji`-pakket om emoji-ondersteuning te bieden.

::note
Het maakt gebruik van de `useEditorMenu` composable die bovenop TipTap 's [Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion) is gebouwd om items te filteren terwijl u typt en toetsenbordnavigatie ondersteunt (pijltjestoetsen, enter om te selecteren, escape om te sluiten).
::

::caution
Het moet worden gebruikt in de standaardsleuf van een [Editor](/docs/components/editor) component om toegang te krijgen tot de editorinstantie.
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
Het `@tiptap/extension-emoji` pakket is niet standaard geïnstalleerd, u moet het apart installeren.
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/emoji" target="_blank"}
Lees meer over de Emoji-extensie in de TipTap-documentatie.
::

### Items

Gebruik de `items` prop als een array van objecten met de volgende eigenschappen:

- `name: string`{lang="ts-type"}
- `emoji: string`{lang="ts-type"}
- `shortcodes?: string[]`{lang="ts-type"}
- `tags?: string[]`{lang="ts-type"}
- `group?: string`{lang="ts-type"}
- `fallbackImage?: string`{lang="ts-type"}

::component-example
---
elevated: true
collapse: true
name: 'editor-emoji-menu-items-example'
class: 'p-8'
---
::

::note
U kunt ook een reeks arrays doorgeven aan de `items`-prop om afzonderlijke groepen items te maken.
::

### Char

Gebruik de `char` prop om het triggerkarakter te wijzigen. Standaard `:`{lang="ts-type"}.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu :editor="editor" :items="items" char=";" />
  </UEditor>
</template>
```

### Suggestie: badge{label="4.7+" class="align-text-top"}

Gebruik de `suggestion`-prop om TipTap 's [Suggestion-overeenkomst behavior](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings) aan te passen.

Dit is handig wanneer het triggerteken direct na andere tekens moet worden geopend in plaats van het standaard witruimtevoorvoegsel te vereisen.

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

### Opties

Gebruik de `options`-prop om het positioneringsgedrag aan te passen met [Floating UI options](https://floating-ui.com/docs/computeposition#options).

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

## API

### Props

:component-props

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog

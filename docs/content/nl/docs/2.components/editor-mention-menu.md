---
title: EditorMentionMenu
description: Een vermeldingsmenu dat gebruikerssuggesties weergeeft bij het typen van een triggerteken in de editor.
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorMentionMenu.vue
---

## Gebruik

Het onderdeel EditorMentionMenu geeft een menu met gebruikerssuggesties weer bij het typen van een triggerteken (standaard `@`) in de editor en voegt de geselecteerde vermelding in met het `@tiptap/extension-mention`-pakket.
Het triggerteken wordt ook gebruikt als voorvoegsel bij het renderen van de ingevoegde vermelding.

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
name: 'editor-mention-menu-example'
class: 'p-8'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/mention" target="_blank"}
Lees meer over de Mention-extensie in de TipTap-documentatie.
::

### Items

Gebruik de `items` prop als een array van objecten met de volgende eigenschappen:

- `label: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}

::component-example
---
elevated: true
collapse: true
name: 'editor-mention-menu-items-example'
class: 'p-8'
---
::

::note
U kunt ook een reeks arrays doorgeven aan de `items` prop om afzonderlijke groepen items te maken.
::

### Char

Gebruik de `char` prop om het triggerkarakter te wijzigen. Standaard `@`{lang="ts-type"}.
Het triggerteken wordt ook gebruikt als voorvoegsel bij het renderen van de ingevoegde vermelding (bijv. `#channel` in plaats van `@channel`).

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="channels" char="#" />
  </UEditor>
</template>
```

::note
U kunt meerdere `EditorMentionMenu`-componenten op dezelfde editor gebruiken met verschillende `char`- en `plugin-key`-rekwisieten om verschillende vermeldingstypen te ondersteunen.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="users" plugin-key="mentionMenu" />
    <UEditorMentionMenu :editor="editor" :items="tags" char="#" plugin-key="tagMenu" />
  </UEditor>
</template>
```
::

### Suggestie: badge{label="4.7+" class="align-text-top"}

Gebruik de `suggestion`-prop om TipTap 's [Suggestion-overeenkomst behavior](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings) aan te passen.

Dit is handig wanneer het triggerteken direct na andere tekens moet worden geopend in plaats van het standaard witruimtevoorvoegsel te vereisen.

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

### Opties

Gebruik de `options`-prop om het positioneringsgedrag aan te passen met [Floating UI options](https://floating-ui.com/docs/computeposition#options).

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

## Voorbeelden

### Met filter negeren: badge{label="4.4+" class="align-text-top"}

U kunt de `ignore-filter` prop instellen op `true` om de interne zoekopdracht uit te schakelen en uw eigen zoeklogica te gebruiken.
Gebruik `v-model:search-term` om toegang te krijgen tot de huidige zoekterm en items op te halen uit een API.

::component-example
---
elevated: true
collapse: true
name: 'editor-mention-menu-ignore-filter-example'
class: 'p-8'
---
::

::note
Dit voorbeeld gebruikt [`refDebounced`](https://vueuse.org/shared/refDebounced/) om de API-aanroepen te debounteren.
::

## API

### Props

:component-props

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog

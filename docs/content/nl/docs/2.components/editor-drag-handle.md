---
title: EditorDragHandle
description: Een versleepbare handgreep voor het opnieuw ordenen en selecteren van blokken in de editor.
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorDragHandle.vue
---

## Gebruik

De EditorDragHandle-component biedt slepen-en-neerzetten-functionaliteit voor het opnieuw ordenen van editorblokken met behulp van het `@tiptap/extension-drag-handle-vue-3`-pakket.

::caution
Het moet worden gebruikt in de standaardsleuf van een [Editor](/docs/components/editor) component om toegang te krijgen tot de editorinstantie.
::

Het breidt de [Button](/docs/components/button) component uit, zodat u elke eigenschap zoals `color`, `variant`, `size`, enz. Kunt doorgeven.

::component-example
---
collapse: true
elevated: true
name: 'editor-drag-handle-example'
class: 'p-8'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/drag-handle-vue" target="_blank"}
Lees meer over de Drag Handle-extensie in de TipTap-documentatie.
::

### Icoon

Gebruik de `icon` prop om het pictogram van de sleepgreep aan te passen.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorDragHandle :editor="editor" icon="i-lucide-move" />
  </UEditor>
</template>
```

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.drag`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.drag`-toets.
:::
::

### Opties

Gebruik de `options` prop om het positioneringsgedrag aan te passen met [Floating UI options](https://floating-ui.com/docs/computeposition#options).

::note
De offset wordt automatisch berekend om het handvat voor kleine blokken te centreren en uit te lijnen naar de bovenkant voor hogere blokken.
::

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorDragHandle
      :editor="editor"
      :options="{
        placement: 'left'
      }"
    />
  </UEditor>
</template>
```

## Voorbeelden

### Met dropdown menu

Gebruik de standaardsleuf om een [DropdownMenu](/docs/components/dropdown-menu) toe te voegen met acties op blokniveau zoals dupliceren, verwijderen, omhoog / omlaag verplaatsen of blokken omzetten in verschillende typen.

Luister naar de `@node-change`-gebeurtenis om het momenteel zwevende knooppunt en zijn positie te volgen en gebruik vervolgens `editor.chain().setMeta('lockDragHandle', open).run()`{lang="ts-type"} om de handgreeppositie te vergrendelen terwijl het menu open is.

::component-example
---
elevated: true
collapse: true
name: 'editor-drag-handle-dropdown-menu-example'
class: 'p-8'
---
::

::note
In dit voorbeeld wordt het `mapEditorItems` hulpprogramma van `@nuxt/ui/utils/editor` gebruikt om handlersoorten (zoals `duplicate`, `delete`, `moveUp`, enz.) Automatisch toe te wijzen aan de bijbehorende editoropdrachten met het juiste statusbeheer.
::

### Met suggestie menu

Gebruik de standaardsleuf om een [Button](/docs/components/button) naast de sleephendel toe te voegen om de [EditorSuggestionMenu](/docs/components/editor-suggestion-menu) te openen.

Roep de `onClick`-slotfunctie aan om de huidige knooppuntpositie te krijgen en gebruik vervolgens `handlers.suggestion?.execute(editor, { pos: node?.pos }).run()`{lang="ts-type"} om nieuwe blokken op die positie in te voegen.

::component-example
---
elevated: true
collapse: true
name: 'editor-drag-handle-suggestion-menu-example'
class: '!p-0'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

## Thema

:component-theme

## Changelog

:component-changelog

---
title: Herausgeber: DragHandle
description: Ein ziehbares Handle zum Neuordnen und Auswählen von Blöcken im Editor.
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorDragHandle.vue
---

## Bearbeiten

Die EditorDragHandle-Komponente bietet Drag-and-Drop-Funktionen zum Umordnen von Editorblöcken mit dem Paket `@tiptap/extension-drag-handle-vue-3`.

::caution
Es muss innerhalb eines [Editor](/docs/components/editor)-Komponentensteckplatzes verwendet werden, um Zugriff auf die Editorinstanz zu haben.
::

Es erweitert die Komponente [Button](/docs/components/button), so dass Sie jede Eigenschaft wie `color`, `variant`, `size` usw. übergeben können.

::component-example
---
collapse: true
elevated: true
name: 'editor-drag-handle-example'
class: 'p-8'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/drag-handle-vue" target="_blank"}
Erfahren Sie mehr über die Drag Handle-Erweiterung in der TipTap-Dokumentation.
::

### Icon (englisch)

Verwenden Sie die `icon`-Prop, um das Drag Handle-Symbol anzupassen.

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
Sie können dieses Symbol global in Ihrem `app.config.ts` unter der `ui.icons.drag`-Taste anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.drag` Schlüssel anpassen.
:::
::

### Options (englisch)

Verwenden Sie die `options`-Prop, um das Positionierungsverhalten mit [Floating UI-Optionen ](https://floating-ui.com/docs/computeposition#options) anzupassen.

::note
Der Versatz wird automatisch berechnet, um den Griff für kleine Blöcke zu zentrieren und für größere Blöcke nach oben auszurichten.
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

## Examples (Beispiele)

### Mit dem Dropdown-Menü

Verwenden Sie den Standardsteckplatz, um ein [DropdownMenu](/docs/components/dropdown-menu) mit Aktionen auf Blockebene wie Duplizieren, Löschen, Aufwärts-/Abwärtsbewegen oder Transformieren von Blöcken in verschiedene Typen hinzuzufügen.

Hören Sie sich das `@node-change`-Ereignis an, um den derzeit schwebenden Knoten und seine Position zu verfolgen, und verwenden Sie dann `editor.chain().setMeta('lockDragHandle', open).run()`{lang="ts-type"}, um die Handle-Position zu sperren, während das Menü geöffnet ist.

::component-example
---
elevated: true
collapse: true
name: 'editor-drag-handle-dropdown-menu-example'
class: 'p-8'
---
::

::note
In diesem Beispiel wird das Dienstprogramm `mapEditorItems` von `@nuxt/ui/utils/editor` verwendet, um Handlertypen (wie `duplicate`, `delete`, `moveUp` usw.) automatisch den entsprechenden Editorbefehlen mit korrekter Zustandsverwaltung zuzuordnen.
::

### Mit Vorschlagsmenu

Verwenden Sie den Standardsteckplatz, um einen [Button](/docs/components/button) neben dem Ziehpunkt hinzuzufügen, um den [EditorSuggestionMenu](/docs/components/editor-suggestion-menu) zu öffnen.

Rufen Sie die Slot-Funktion `onClick` auf, um die aktuelle Knotenposition zu ermitteln, und verwenden Sie dann `handlers.suggestion?.execute(editor, { pos: node?.pos }).run()`{lang="ts-type"}, um neue Blöcke an dieser Position einzufügen.

::component-example
---
elevated: true
collapse: true
name: 'editor-drag-handle-suggestion-menu-example'
class: '!p-0'
---
::

## API (Englisch)

### Props (englisch)

:component-props

### Slots Bearbeiten

:component-slots

### Emits (nicht)

:component-emits

## Theme (englisch)

:component-theme

## Changelog (englisch)

:component-changelog

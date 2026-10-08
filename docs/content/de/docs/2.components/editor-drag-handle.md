---
title: Herausgeber DragHandle
description: Ein ziehbares Handle zum Neuordnen und Auswählen von Blöcken im Editor.
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorDragHandle.vue
---

@@@ph000@Verwendung

Die EditorDragHandle-Komponente bietet eine Drag-and-Drop-Funktion zum Neuordnen von Editorblöcken mit dem @@@-Paket.

::caution
Es muss innerhalb eines [Editor](/docs/components/editor) Komponenten-Standardsteckplatz verwendet werden, um Zugriff auf die Editorinstanz zu haben.
::

Es erweitert die Komponente [Button](/docs/components/button), so dass Sie jede Eigenschaft wie `color`,`variant`,`size` usw. übergeben können.

::component-example
---
Einsturz: wahr
Höhe: wahr
Name: 'Editor-Drag-Handle-Beispiel'
Klasse: 'P-8'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/drag-handle-vue" target="_blank"}
Erfahren Sie mehr über die Drag Handle-Erweiterung in der TipTap-Dokumentation.
::

@@ph013@@Icon-Seite

Verwenden Sie das `icon` prop, um das Drag Handle-Symbol anzupassen.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorDragHandle :editor="editor" icon="i-lucide-move" />
  </UEditor>
</template>
```

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.drag` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.drag` key anpassen.
:::
::

@@ph026@Optionen

Verwenden Sie `options` prop, um das Positionierungsverhalten mit [Floating-UI-Optionen ](https://floating-ui.com/docs/computeposition#options) anzupassen.

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

@@ph044@@Beispiele

### Mit Dropdown-Menü

Verwenden Sie den Standard-Slot, um ein [DropdownMenu](/docs/components/dropdown-menu) mit Aktionen auf Blockebene wie Duplizieren, Löschen, Aufwärts-/Abwärtsbewegen oder Transformieren von Blöcken in verschiedene Typen hinzuzufügen.

Hören Sie sich das `@node-change`-Ereignis an, um den aktuell schwebenden Knoten und seine Position zu verfolgen, und verwenden Sie dann `editor.chain().setMeta('lockDragHandle', open).run()`{lang="ts-type"}, um die Handle-Position zu sperren, während das Menü geöffnet ist.

::component-example
---
Höhe: wahr
Einsturz: wahr
Name: 'Editor-Drag-Handle-Dropdown-Menu-Beispiel'
Klasse: 'P-8'
---
::

::note
In diesem Beispiel wird das Dienstprogramm `mapEditorItems` von `@nuxt/ui/utils/editor` verwendet, um Handlertypen (wie `duplicate`,`delete`,`moveUp`, etc.) automatisch den entsprechenden Editorbefehlen mit korrekter Zustandsverwaltung zuzuordnen.
::

### Mit Vorschlagsmenü

Verwenden Sie den Standard-Steckplatz, um ein [Button](/docs/components/button) neben dem Drag Handle hinzuzufügen, um das [EditorSuggestionMenu](/docs/components/editor-suggestion-menu) zu öffnen.

Rufen Sie die Funktion `onClick` slot auf, um die aktuelle Knotenposition zu erhalten, und verwenden Sie dann `handlers.suggestion?.execute(editor, { pos: node?.pos }).run()`{lang="ts-type"}, um neue Blöcke an dieser Position einzufügen.

::component-example
---
Höhe: wahr
Einsturz: wahr
Name: 'Editor-Drag-Handle-Vorschlag-Menü-Beispiel'
Klasse: '! p-0'
---
::

## api

@@@@@@@@@@@ph071@@props

Komponenten-Props

### Slots

Die Komponenten-Slots

@@@ph073@@@emits

Komponenten emittieren

@@@@@@@@@ph074@theme

Das Komponenten-Theme

@@ph075@@changelog @ changelog

Das Component-Changelog

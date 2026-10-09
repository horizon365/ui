---
description: Eine Reihe von größenveränderbaren Panels, die durch ziehbare Griffe getrennt sind.
category: layout
links:
  - label: Splitter
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/splitter
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Splitter.vue
navigation.badge: New
---

## Bearbeiten

Verwenden Sie die Splitter-Komponente, um eine Liste von Panels anzuzeigen, die durch ziehbare Griffe getrennt sind.

::component-example
---
collapse: true
name: 'splitter-example'
---
::

::note
Der Splitter füllt die Höhe seines Containers aus, also stellen Sie sicher, dass ein Elternelement einen definiert.
::

### Items Bearbeiten

Verwenden Sie die `items`-prop als Array von Objekten mit den folgenden Eigenschaften:

- `defaultSize?: number`{lang="ts-type"} (nicht vorhanden)
- `minSize?: number`{lang="ts-type"} (englisch)
- `maxSize?: number`{lang="ts-type"} (englisch)
- `collapsible?: boolean`{lang="ts-type"} (nicht vorhanden)
- `collapsedSize?: number`{lang="ts-type"} (nicht vorhanden)
- `sizeUnit?: '%' | 'px'`{lang="ts-type"} (nicht)
- `order?: number`{lang="ts-type"} (Deutsche Ausgabe)
- `id?: string`{lang="ts-type"} (nicht)
- `slot?: string`xph0333x (englisch)
- `class?: any`{lang="ts-type"} (englisch)
- `ui?: { panel?: ClassNameValue }`{lang="ts-type"} (nicht vorhanden)

Verwenden Sie die `slot`-Taste, um den Inhalt eines Panels zu füllen und die `class`-Taste, um es zu stylen. Elemente ohne `slot`-Taste fallen auf einen `panel-{index}`-Steckplatz zurück. Größen sind standardmäßig Prozentwerte, setzen Sie `sizeUnit: 'px'` für ein Element für Pixelwerte.

::caution
Beim Rendern auf dem Server, setzen Sie die `id` prop und geben Sie `defaultSize` für alle Elemente oder zu none. IDs werden automatisch generiert, sonst und der Server und der Client können nicht zustimmen, die das Layout auf Hydratation bricht. Ein Element ohne eine `defaultSize` fällt zurück zu einem gleichen Anteil auf dem Server, so dass das Mischen der beiden macht Panels springen einmal hydratisiert. Pixelgrößen werden auf dem Client gemessen und immer ein wenig verschieben.
::

::component-code
---
collapse: true
class: 'h-96'
prettier: true
ignore:
  - items
  - id
external:
  - items
externalTypes:
  - SplitterItem[]
props:
  id: 'splitter-items'
  items:
    - slot: 'sidebar'
      minSize: 15
      maxSize: 40
      defaultSize: 25
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
    - slot: 'main'
      defaultSize: 75
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
slots:
  sidebar: Sidebar
  main: Main
---

#sidebar
Sidebar

#main
Main ist
::

### Orientierung

Verwenden Sie die `orientation`-Stütze, um die Richtung des Splitters zu ändern. Standardmäßig ist `horizontal`.

::component-code
---
collapse: true
class: 'h-96'
prettier: true
ignore:
  - items
  - id
external:
  - items
externalTypes:
  - SplitterItem[]
props:
  id: 'splitter-orientation'
  orientation: 'vertical'
  items:
    - slot: 'first'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
    - slot: 'second'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
slots:
  first: First
  second: Second
---

#first
zuerst

#second
Zweite
::

## Beispiele

### Mit zusammenklappbaren Panel

Setzen Sie `collapsible: true` auf ein Element, damit es an seinem `minSize` vorbeibricht, und verwenden Sie `collapsedSize`, um einen Teil des Panels sichtbar zu halten, wenn es zusammengeklappt wird. Der Panel-Slot macht `collapsed`, `collapse` und `expand` sichtbar, damit Sie es programmgesteuert steuern können, und die Ereignisse `collapse`, `expand` und `resize` werden mit dem Panel-Index ausgelöst.

::component-example
---
collapse: true
name: 'splitter-collapsible-example'
---
::

### Mit verschachtelten Splittern

Verschachteln Sie einen `Splitter` in einem Panel, um zweidimensionale Layouts im IDE-Stil zu erstellen.

::component-example
---
collapse: true
name: 'splitter-nested-example'
---
::

### Mit benutzerdefiniertem Griff

Verwenden Sie die `ui`-Stütze, um sie neu zu gestalten, z. B. als sichtbare Trennwand für bündige Layouts, und den `resize-handle`-Steckplatz, um Inhalte darin wie einen Griff darzustellen.

::component-example
---
collapse: true
name: 'splitter-custom-handle-example'
---
::

### With Persistenz

Geben Sie ein `auto-save-id` ein, um das Layout auf `localStorage` zu erhalten und beim Neuladen wiederherzustellen.

```vue
<template>
  <USplitter id="my-layout" auto-save-id="my-layout" :items="items">
    <!-- ... -->
  </USplitter>
</template>
```

## API Bearbeiten

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog

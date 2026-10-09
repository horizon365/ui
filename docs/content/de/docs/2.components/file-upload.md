---
title: File-Upload Bearbeiten
description: 'Ein Eingabeelement zum Hochladen von Dateien.'
category: form
keywords:
  - dropzone
  - drag and drop
  - file input
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FileUpload.vue
---

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um den Wert des FileUpload zu steuern.

::component-code
---
ignore:
  - modelValue
  - class
external:
  - modelValue
props:
  modelValue: null
  class: 'w-96 min-h-48'
---
::

### Mehrfach

Verwenden Sie die `multiple`-prop, um mehrere Dateien auszuwählen.

::component-code
---
ignore:
  - class
props:
  multiple: true
  class: 'w-96 min-h-48'
---
::

### Dropzone (englisch)

Verwenden Sie die `dropzone`-prop, um den absetzbaren Bereich zu aktivieren/deaktivieren. Standardmäßig `true`.

::component-code
---
ignore:
  - class
props:
  dropzone: false
  class: 'w-96 min-h-48'
---
::

### Interactive (englisch)

Verwenden Sie die `interactive`-Prop, um den anklickbaren Bereich zu aktivieren/deaktivieren. Standardmäßig `true`.

::tip{to="#with-files-bottom-slot"}
Dies kann nützlich sein, wenn Sie eine `Button`-Komponente in den `#actions`-Steckplatz hinzufügen.
::

::component-code
---
ignore:
  - class
props:
  interactive: false
  class: 'w-96 min-h-48'
---
::

### AcceptBearbeiten

Verwenden Sie die `accept`-prop, um die zulässigen Dateitypen für die Eingabe anzugeben. Geben Sie eine durch Kommas getrennte Liste von [MIME-Typen ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types) oder Dateierweiterungen (z. B. `image/png,application/pdf,.jpg`) an. Standardmäßig `*` (alle Dateitypen).

::component-code
---
ignore:
  - accept
  - class
props:
  accept: 'image/*'
  class: 'w-96 min-h-48'
---
::

### Label ist

Verwenden Sie die `label`-Prop, um das Label des FileUpload festzulegen.

::component-code
---
prettier: true
ignore:
  - class
props:
  label: 'Drop your image here'
  class: 'w-96 min-h-48'
---
::

xph069 Beschreibung

Verwenden Sie die `description`-Prop, um die Beschreibung des FileUpload festzulegen.

::component-code
---
prettier: true
ignore:
  - label
  - class
props:
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

### Icon (englisch)

Verwenden Sie die `icon`-Prop, um das Symbol des FileUpload. Defaults auf `i-lucide-upload` zu setzen.

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  icon: 'i-lucide-image'
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.upload` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter der `ui.icons.upload`-Taste anpassen.
:::
::

### Color Bearbeiten

Verwenden Sie die `color`-Prop, um die Farbe des FileUpload zu ändern.

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  color: neutral
  highlight: true
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

::note
Die `highlight`-prop wird hier verwendet, um den Fokuszustand anzuzeigen. Es wird intern verwendet, wenn ein Validierungsfehler auftritt.
::

### Variant Bearbeiten

Verwenden Sie die `variant`-prop, um die Variante des FileUpload zu ändern.

::component-code
---
ignore:
  - class
props:
  variant: button
---
::

### Size

Verwenden Sie die `size`-Prop, um die Größe des FileUpload zu ändern.

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  size: xl
  variant: area
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
---
::

### Layout (Englisch)

Verwenden Sie die `layout`-prop, um zu ändern, wie die Dateien im FileUpload. Defaults auf `grid` angezeigt werden.

::warning
Diese Prop funktioniert nur, wenn `variant` `area` ist.
::

::component-code
---
prettier: true
ignore:
  - label
  - description
  - multiple
  - class
  - ui.base
props:
  layout: list
  multiple: true
  label: 'Drop your images here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96'
  ui:
    base: 'min-h-48'
---
::

### Position (Englisch)

Verwenden Sie die `position`-prop, um die Position der Dateien in der Datei Upload. Defaults auf `outside` zu ändern.

::warning
Diese Prop funktioniert nur, wenn `variant` `area` und `layout` `list` ist.
::

::component-code
---
prettier: true
ignore:
  - label
  - description
  - multiple
  - layout
  - class
  - ui.base
props:
  position: inside
  layout: list
  multiple: true
  label: 'Drop your images here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96'
  ui:
    base: 'min-h-48'
---
::

## Beispiele

### With Formular Validierung

Sie können den FileUpload innerhalb einer [Form](/docs/components/form)-und [FormField](/docs/components/form-field)-Komponente verwenden, um die Validierung und Fehlerbehandlung zu verwalten.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-form-validation-example'
---
::

### Mit Default Slot

Sie können den Standardslot verwenden, um Ihre eigene FileUpload-Komponente zu erstellen.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-default-slot-example'
---
::

### With files-bottom slot (Datei-Boden-Steckplatz)

Sie können den `files-bottom`-Steckplatz verwenden, um einen [Button](/docs/components/button) unter der Dateiliste hinzuzufügen, um beispielsweise alle Dateien zu entfernen.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-files-bottom-slot-example'
---
::

::note{to="#interactive"}
Die `interactive`-Prop ist in diesem Beispiel auf `false` gesetzt, um den standardmäßig anklickbaren Bereich zu verhindern.
::

### With files-top slot (Datei-Top-Steckplatz)

Sie können den `files-top`-Steckplatz verwenden, um einen [Button](/docs/components/button) über der Dateiliste hinzuzufügen, um beispielsweise neue Dateien hinzuzufügen.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-files-top-slot-example'
---
::

## API ist

### Props (englisch)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<input>`-HTML-Attribute.
::

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

### Expose Bearbeiten

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typ|
| ---- | ---- |
| `inputRef`{lang="ts-type"} (englisch)| `Ref<HTMLInputElement \| null>`{lang="ts-type"} (englisch)|
| `dropzoneRef`{lang="ts-type"} (englisch)| `Ref<HTMLDivElement \| null>`{lang="ts-type"} (englisch)|

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog

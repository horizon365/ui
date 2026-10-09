---
title: Bestand uploaden
description: 'Een invoerelement om bestanden te uploaden.'
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

## Gebruik

Gebruik de `v-model`-richtlijn om de waarde van de FileUpload te bepalen.

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

### Meerdere

Gebruik de `multiple` prop om meerdere bestanden te selecteren.

::component-code
---
ignore:
  - class
props:
  multiple: true
  class: 'w-96 min-h-48'
---
::

### Dropzone

Gebruik de `dropzone`-prop om het droppable-gebied in / uit te schakelen. Standaard `true`.

::component-code
---
ignore:
  - class
props:
  dropzone: false
  class: 'w-96 min-h-48'
---
::

### Interactief

Gebruik de `interactive` prop om het klikbare gebied in / uit te schakelen. Standaard `true`.

::tip{to="#with-files-bottom-slot"}
Dit kan handig zijn bij het toevoegen van een `Button` component in de `#actions` slot.
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

### Accepteren

Gebruik de `accept` prop om de toegestane bestandstypen voor de invoer op te geven. Geef een door komma 's gescheiden lijst van [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types) of bestandsextensies (bijv. `image/png,application/pdf,.jpg`).
Standaard `*` (alle bestandstypen).

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

### Label

Gebruik de `label` prop om het label van de FileUpload in te stellen.

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

### Beschrijving

Gebruik de `description` prop om de beschrijving van de FileUpload in te stellen.

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

### Icoon

Gebruik de `icon` prop om het pictogram van de FileUpload in te stellen. Standaard `i-lucide-upload`.

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
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.upload`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.upload`-sleutel.
:::
::

### Kleur

Gebruik de `color` prop om de kleur van de FileUpload te wijzigen.

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
De `highlight` prop wordt hier gebruikt om de focusstatus weer te geven. Het wordt intern gebruikt wanneer er een validatiefout optreedt.
::

### Variant

Gebruik de `variant` prop om de variant van de FileUpload te wijzigen.

::component-code
---
ignore:
  - class
props:
  variant: button
---
::

### Grootte

Gebruik de `size` prop om de grootte van de FileUpload te wijzigen.

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

### Opmaak

Gebruik de `layout` prop om te wijzigen hoe de bestanden worden weergegeven in de FileUpload. Standaard is `grid`.

::warning
Deze prop werkt alleen als `variant` `area` is.
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

### Positie

Gebruik de `position` prop om de positie van de bestanden in de FileUpload te wijzigen. Standaard is `outside`.

::warning
Deze prop werkt alleen als `variant` `area` is en als `layout` `list` is.
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

## Voorbeelden

### Met formuliervalidatie

U kunt de FileUpload binnen een [Form](/docs/components/form) en [FormField](/docs/components/form-field) componenten gebruiken om validatie en foutafhandeling af te handelen.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-form-validation-example'
---
::

### Met standaard slot

U kunt de standaardsleuf gebruiken om uw eigen FileUpload-component te maken.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-default-slot-example'
---
::

### Met bestanden-bodem slot

U kunt de `files-bottom`-sleuf gebruiken om een [Button](/docs/components/button) onder de bestandslijst toe te voegen om bijvoorbeeld alle bestanden te verwijderen.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-files-bottom-slot-example'
---
::

::note{to="#interactive"}
De `interactive` prop is ingesteld op `false` in dit voorbeeld om het standaard klikbare gebied te voorkomen.
::

### Met bestanden-top slot

U kunt de `files-top`-sleuf gebruiken om een [Button](/docs/components/button) boven de bestandslijst toe te voegen om bijvoorbeeld nieuwe bestanden toe te voegen.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-files-top-slot-example'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<input>` HTML-kenmerken.
::

### Slots

:component-slots

### Uitzendt

:component-emits

### Expose

Wanneer u de component opent via een sjabloonref, kunt u het volgende gebruiken:

| Naam | Type |
| ---- | ---- |
| `inputRef`{lang="ts-type"} | `Ref<HTMLInputElement \| null>`{lang="ts-type"} |
| `dropzoneRef`{lang="ts-type"} | `Ref<HTMLDivElement \| null>`{lang="ts-type"} |

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog

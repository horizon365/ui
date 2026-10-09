---
title: Input-Tags
description: Ein Input-Element, das interaktive Tags anzeigt.
category: form
keywords:
  - chips input
  - multi value
links:
  - label: Input-Tags
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tags-input
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputTags.vue
---

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um den Wert der InputTags zu steuern.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
---
::

Verwenden Sie die `default-value`-prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
prettier: true
ignore:
  - defaultValue
props:
  defaultValue: ['Vue']
---
::

### Platzhalter

Verwenden Sie die `placeholder`-Prop, um einen Platzhaltertext festzulegen.

::component-code
---
props:
  placeholder: 'Enter tags...'
---
::

### Max Länge

Verwenden Sie die `max-length`-prop, um die maximale Anzahl von Zeichen in einem Tag festzulegen.

::component-code
---
props:
  maxLength: 4
---
::

### Color (englisch)

Verwenden Sie die `color`-Prop, um die Ringfarbe zu ändern, wenn die InputTags fokussiert sind.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  color: neutral
  highlight: true
---
::

::note
Die `highlight`-prop wird hier verwendet, um den Fokuszustand anzuzeigen. Es wird intern verwendet, wenn ein Validierungsfehler auftritt.
::

### Varianten

Verwenden Sie die `variant`-prop, um das Aussehen der InputTags zu ändern.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  variant: subtle
  color: neutral
  highlight: false
---
::

### Größe

Verwenden Sie die `size`-prop, um die Größe der InputTags anzupassen.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  size: xl
---
::

### Icon (englisch)

Verwenden Sie die `icon`-Prop, um eine [Icon](/docs/components/icon) innerhalb der InputTags anzuzeigen.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  icon: 'i-lucide-search'
  size: md
  variant: outline
---
::

::note
Verwenden Sie die `leading`-und `trailing`-Requisiten, um die Symbolposition festzulegen, oder die `leading-icon`-und `trailing-icon`-Requisiten, um für jede Position ein anderes Symbol festzulegen.
::

### Avatar (englisch)

Verwenden Sie die `avatar`-Prop, um eine [Avatar](/docs/components/avatar) innerhalb der InputTags anzuzeigen.

::component-code
---
prettier: true
ignore:
  - modelValue
  - avatar.loading
external:
  - modelValue
props:
  modelValue: ['Vue']
  avatar:
    src: 'https://github.com/vuejs.png'
    loading: lazy
  size: md
  variant: outline
---
::

### Delete Icon (englisch)

Verwenden Sie die `delete-icon`-Prop, um das Löschen [Icon](/docs/components/icon) in den Tags. Defaults auf `i-lucide-x` anzupassen.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  deleteIcon: 'i-lucide-trash'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.close` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.close` Schlüssel anpassen.
:::
::

### Loading (nicht verfügbar)

Verwenden Sie die `loading`-Prop, um ein Ladesymbol auf den InputTags anzuzeigen.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  loading: true
  trailing: false
---
::

### Loading Icon (englisch).

Verwenden Sie die `loading-icon`-Prop, um das Ladesymbol anzupassen. Standardmäßig `i-lucide-loader-circle`.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  loading: true
  loadingIcon: 'i-lucide-loader'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.loading` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.loading` Schlüssel anpassen.
:::
::

### Disabled (nicht verfügbar)

Verwenden Sie die `disabled`-Prop, um die InputTags zu deaktivieren.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  disabled: true
---
::

## Beispiele:

### Innerhalb eines Formularfelds

Sie können die InputTags innerhalb einer [FormField](/docs/components/form-field)-Komponente verwenden, um eine Beschriftung, einen Hilfetext, eine erforderliche Anzeige usw. anzuzeigen.

::component-example
---
name: 'input-tags-form-field-example'
---
::

## API ist

### Props Bearbeiten

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<input>`-HTML-Attribute.
::

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

### Expose (englisch)

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typen|
| ---- | ---- |
| `inputRef`{lang="ts-type"} nicht| `Ref<HTMLInputElement \| null>`{lang="ts-type"} (nicht)|

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog

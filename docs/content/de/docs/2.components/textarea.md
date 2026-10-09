---
description: Ein Textarea-Element zur Eingabe von mehrzeiligem Text.
category: form
keywords:
  - multiline
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Textarea.vue
---

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um den Wert des Textarea zu steuern.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ''
---
::

### rows Bearbeiten

Verwenden Sie die `rows`-prop, um die Anzahl der Zeilen festzulegen. Standardmäßig ist `3`.

::component-code
---
props:
  rows: 12
---
::

### Platzhalter

Verwenden Sie die `placeholder`-Prop, um einen Platzhaltertext festzulegen.

::component-code
---
props:
  placeholder: 'Type something...'
---
::

### AutoSize (englisch)

Verwenden Sie die `autoresize`-Prop, um die automatische Größenänderung der Höhe des Textarea zu aktivieren.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 'This is a long text that will autoresize the height of the Textarea.'
  autoresize: true
---
::

Verwenden Sie die Prop `maxrows`, um die maximale Anzahl von Zeilen bei der automatischen Größenänderung festzulegen. Wenn auf `0` gesetzt, wird der Textarea unbegrenzt wachsen.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 'This is a long text that will autoresize the height of the Textarea with a maximum of 4 rows.'
  maxrows: 4
  autoresize: true
---
::

### Color (englisch)

Verwenden Sie die `color`-Prop, um die Ringfarbe zu ändern, wenn der Textarea fokussiert ist.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: 'Type something...'
---
::

::note
Die `highlight`-prop wird hier verwendet, um den Fokuszustand anzuzeigen. Es wird intern verwendet, wenn ein Validierungsfehler auftritt.
::

### Variant Übersetzung

Verwenden Sie die `variant`-Prop, um die Variante des Textarea zu ändern.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: 'Type something...'
---
::

### Größe

Verwenden Sie die `size`-Stütze, um die Größe des Textarea zu ändern.

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: 'Type something...'
---
::

### Icon (Deutsche Ausgabe)

Verwenden Sie die `icon`-Prop, um eine [Icon](/docs/components/icon) innerhalb des Textarea anzuzeigen.

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  icon: 'i-lucide-search'
  size: md
  variant: outline
  placeholder: 'Search...'
  rows: 1
---
::

Verwenden Sie die `leading` und `trailing` props, um die Icon-Position oder die `leading-icon` und `trailing-icon` props, um ein anderes Symbol für jede Position gesetzt.

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  trailingIcon: i-lucide-at-sign
  placeholder: 'Enter your email'
  size: md
  rows: 1
---
::

### avatar Bearbeiten

Verwenden Sie die `avatar`-Prop, um ein [Avatar](/docs/components/avatar) im Textarea anzuzeigen.

::component-code
---
prettier: true
ignore:
  - placeholder
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  variant: outline
  placeholder: 'Search...'
  rows: 1
---
::

### loading (englisch)

Verwenden Sie die `loading`-Prop, um ein Ladesymbol auf der Textarea anzuzeigen.

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  trailing: false
  placeholder: 'Search...'
  rows: 1
---
::

### Loading Icon (englisch)

Verwenden Sie die `loading-icon`-Prop, um das Ladesymbol anzupassen. Standardmäßig ist `i-lucide-loader-circle`.

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  placeholder: 'Search...'
  rows: 1
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

Verwenden Sie die `disabled` prop, um die Textarea zu deaktivieren.

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: 'Type something...'
---
::

## API (Englisch)

### Props (nicht)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<textarea>` HTML-Attribute.
::

### Slots (englisch)

:component-slots

### Emits (englisch)

:component-emits

### Expose (englisch)

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typen|
| ---- | ---- |
| `textareaRef`{lang="ts-type"} (nicht)| `Ref<HTMLTextAreaElement \| null>`{lang="ts-type"} (nicht)|
| `autoResize`{lang="ts-type"} (nicht)| `() => void`{lang="ts-type"} (nicht)|

## Theme Bearbeiten

:component-theme

## Changelog Bearbeiten

:component-changelog

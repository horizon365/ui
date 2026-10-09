---
description: Eine Kontrolle, die zwischen zwei Staaten wechselt.
category: form
keywords:
  - toggle
  - toggle switch
links:
  - label: Switch
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/switch
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Switch.vue
---

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um den geprüften Zustand des Switches zu steuern.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: true
---
::

Verwenden Sie die `default-value`-prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: true
---
::

### Label ist

Verwenden Sie die `label` prop, um das Label des Switches festzulegen.

::component-code
---
props:
  label: Check me
---
::

Wenn Sie die `required`-Prop verwenden, wird neben dem Label ein Sternchen hinzugefügt.

::component-code
---
ignore:
  - label
props:
  required: true
  label: Check me
---
::

x31xBeschreibung

Verwenden Sie die `description`-Prop, um die Beschreibung des Switches festzulegen.

::component-code
---
ignore:
  - label
props:
  label: Check me
  description: 'This is a checkbox.'
---
::

### Icon (englisch)

Verwenden Sie die `checked-icon`-und `unchecked-icon`-Requisiten, um die Symbole des Switches festzulegen, wenn sie aktiviert und deaktiviert sind.

::component-code
---
prettier: true
ignore:
  - label
  - defaultValue
props:
  uncheckedIcon: 'i-lucide-x'
  checkedIcon: 'i-lucide-check'
  defaultValue: true
  label: Check me
---
::

### Loading (nicht verfügbar)

Verwenden Sie die `loading`-Prop, um ein Ladesymbol auf dem Switch anzuzeigen.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  loading: true
  defaultValue: true
  label: Check me
---
::

### Loading Icon [Bearbeiten | Quelltext bearbeiten

Verwenden Sie die `loading-icon`-Prop, um das Ladesymbol anzupassen. Standardmäßig `i-lucide-loader-circle`.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  defaultValue: true
  label: Check me
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter der `ui.icons.loading`-Taste anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter der `ui.icons.loading`-Taste.
:::
::

### Color (englisch)

Verwenden Sie die `color`-Prop, um die Farbe des Switches zu ändern.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  color: neutral
  defaultValue: true
  label: Check me
---
::

### Größe

Verwenden Sie die `size`-Prop, um die Größe des Switches zu ändern.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  size: xl
  defaultValue: true
  label: Check me
---
::

### Disabled (nicht verfügbar)

Verwenden Sie die `disabled`-Prop, um den Switch zu deaktivieren.

::component-code
---
ignore:
  - label
props:
  disabled: true
  label: Check me
---
::

## API (Englisch)

### Props (englisch)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>`-HTML-Attribute.
::

### Slots (englisch)

:component-slots

### Emits (englisch)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog

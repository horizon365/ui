---
description: Ein Eingabeelement zum Umschalten zwischen checked und unchecked states.
category: form
keywords:
  - tickbox
  - check
  - boolean
links:
  - label: Die Checkbox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Checkbox.vue
---

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um den Status der Checkbox zu steuern.

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

xph017unbestimmt

Verwenden Sie den Wert `indeterminate` in der Direktive `v-model` oder `default-value` prop, um das Kontrollkästchen auf [indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) zu setzen.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 'indeterminate'
---
::

### Indeterminate Icon (unbestimmtes Icon)

Verwenden Sie die `indeterminate-icon`-prop, um das unbestimmte Symbol anzupassen. Standardmäßig `i-lucide-minus`.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 'indeterminate'
  indeterminateIcon: 'i-lucide-plus'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.minus` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.minus` Schlüssel anpassen.
:::
::

### Label ist

Verwenden Sie die `label`-prop, um die Beschriftung der Checkbox festzulegen.

::component-code
---
props:
  label: Check me
---
::

Wenn Sie die `required`-Prop verwenden, wird neben dem Etikett ein Sternchen hinzugefügt.

::component-code
---
ignore:
  - label
props:
  required: true
  label: Check me
---
::

### Beschreibung

Verwenden Sie die `description`-prop, um die Beschreibung der Checkbox festzulegen.

::component-code
---
ignore:
  - label
props:
  label: Check me
  description: 'This is a checkbox.'
---
::

### Icon Übersetzung

Verwenden Sie die `icon`-prop, um das Symbol der Checkbox festzulegen, wenn es aktiviert ist. Standardmäßig `i-lucide-check`.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  icon: 'i-lucide-heart'
  defaultValue: true
  label: Check me
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter der `ui.icons.check`-Taste.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.check` Schlüssel anpassen.
:::
::

### Farbe

Verwenden Sie die `color`-Prop, um die Farbe des Kontrollkästchens zu verändern.

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

### Variant Bearbeiten

Verwenden Sie die `variant`-Prop, um die Variante des Kontrollkästchens zu ändern.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  color: 'primary'
  variant: 'card'
  defaultValue: true
  label: Check me
---
::

xph107 Größe

Verwenden Sie die `size`-Prop, um die Größe des Kontrollkästchens zu ändern.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  size: xl
  variant: list
  defaultValue: true
  label: Check me
---
::

### Indicator (Englisch)

Verwenden Sie die `indicator`-Stütze, um die Position zu ändern oder den Indikator auszublenden. Standardmäßig `start`.

::note
Wenn `indicator` `hidden` ist, wird stattdessen das Symbol über dem Label angezeigt.
::

::component-code
---
prettier: true
ignore:
  - label
  - icon
  - defaultValue
props:
  indicator: 'hidden'
  variant: 'card'
  icon: 'i-lucide-heart'
  defaultValue: true
  label: Check me
---
::

### Disabled (nicht verfügbar)

Verwenden Sie die `disabled`-Prop, um die Checkbox zu deaktivieren.

::component-code
---
ignore:
  - label
props:
  disabled: true
  label: Check me
---
::

## API Bearbeiten

### Props Bearbeiten

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>` HTML-Attribute.
::

### Slots (englisch)

:component-slots

### Emits (nicht)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog

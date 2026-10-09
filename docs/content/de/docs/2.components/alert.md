---
description: Ein Callout, um die Aufmerksamkeit des Benutzers zu erregen.
category: element
keywords:
  - notice
  - inline notification
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Alert.vue
---

## Bearbeiten

### Titel

Verwenden Sie die `title`-prop, um den Titel des Alarms festzulegen.

::component-code
---
props:
  title: 'Heads up!'
---
::

### Beschreibung

Verwenden Sie die `description` prop, um die Beschreibung der Warnung festzulegen.

::component-code
---
prettier: true
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
---
::

### Icon (englisch)

Verwenden Sie die `icon`-Prop, um eine [Icon](/docs/components/icon) anzuzeigen.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  icon: 'i-lucide-terminal'
---
::

### Avatar (englisch)

Verwenden Sie die `avatar`-Prop, um eine [Avatar](/docs/components/avatar) anzuzeigen.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  avatar.src: 'https://github.com/nuxt.png'
---
::

### Farbe

Verwenden Sie die `color` prop, um die Farbe des Alarms zu ändern.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  color: neutral
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  icon: 'i-lucide-terminal'
---
::

### Variant Bearbeiten

Verwenden Sie die `variant`-prop, um die Variante des Alarms zu ändern.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  color: neutral
  variant: subtle
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  icon: 'i-lucide-terminal'
---
::

### Close

Verwenden Sie die `close`-Prop, um eine [Button](/docs/components/button) anzuzeigen, um die Warnung zu beenden.

::tip
Ein `update:open`-Ereignis wird ausgegeben, wenn die Schaltfläche Schließen geklickt wird.
::

::component-code
---
prettier: true
ignore:
  - title
  - description
  - close
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  close: true
---
::

Sie können jede Eigenschaft der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - close.color
  - close.variant
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
---
::

### Close Icon (nicht vorhanden)

Verwenden Sie die `close-icon`-Prop, um die Schließen-Taste [Icon](/docs/components/icon). Defaults auf `i-lucide-x` anzupassen.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - close
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  close: true
  closeIcon: 'i-lucide-arrow-right'
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

### Actions Bearbeiten

Verwenden Sie die `actions`-Prop, um einige [Button](/docs/components/button)-Aktionen zur Warnung hinzuzufügen.

::component-code
---
prettier: true
ignore:
  - title
  - actions
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  actions:
    - label: Action 1
    - label: Action 2
      color: neutral
      variant: subtle
---
::

### Orientierung.

Verwenden Sie die `orientation`-Prop, um die Ausrichtung des Alarms zu ändern.

::component-code
---
prettier: true
ignore:
  - title
  - actions
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  orientation: horizontal
  actions:
    - label: Action 1
    - label: Action 2
      color: neutral
      variant: subtle
---
::

## Examples [Bearbeiten]

### `class` prop (Deutsche Ausgabe)

Verwenden Sie die `class` prop, um die Basisstile der Warnung zu überschreiben.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  class: 'rounded-none'
---
::

### `ui` prop (englisch)

Verwenden Sie die `ui`-Prop, um die Slots-Stile des Alerts zu überschreiben.

::component-code
---
prettier: true
ignore:
  - ui
  - title
  - description
  - icon
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  icon: i-lucide-rocket
  ui:
    icon: 'size-11'
---
::

## API (Englisch)

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

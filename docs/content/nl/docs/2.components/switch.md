---
description: Een controle die wisselt tussen twee toestanden.
category: form
keywords:
  - toggle
  - toggle switch
links:
  - label: Schakelaar
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/switch
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Switch.vue
---

## Gebruik

Gebruik de `v-model`-richtlijn om de aangevinkte status van de schakelaar te regelen.

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

Gebruik de `default-value` prop om de beginwaarde in te stellen wanneer u de status niet hoeft te regelen.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: true
---
::

### Label

Gebruik de `label` prop om het label van de Switch in te stellen.

::component-code
---
props:
  label: Check me
---
::

Bij gebruik van de `required` prop wordt naast het label een sterretje toegevoegd.

::component-code
---
ignore:
  - label
props:
  required: true
  label: Check me
---
::

### Beschrijving

Gebruik de `description` prop om de beschrijving van de Switch in te stellen.

::component-code
---
ignore:
  - label
props:
  label: Check me
  description: 'This is a checkbox.'
---
::

### Icoon

Gebruik de `checked-icon` en `unchecked-icon` props om de pictogrammen van de Switch in te stellen wanneer aangevinkt en niet aangevinkt.

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

### Bezig met laden

Gebruik de `loading` prop om een laadpictogram op de Switch te tonen.

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

### Icoon aan het laden

Gebruik de `loading-icon` prop om het laadpictogram aan te passen. Standaard `i-lucide-loader-circle`.

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
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.loading`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.loading`-sleutel.
:::
::

### Kleur

Gebruik de `color` prop om de kleur van de Switch te veranderen.

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

### Grootte

Gebruik de `size` prop om de grootte van de Switch te wijzigen.

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

### Uitgeschakeld

Gebruik de `disabled` prop om de Switch uit te schakelen.

::component-code
---
ignore:
  - label
props:
  disabled: true
  label: Check me
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<button>` HTML-kenmerken.
::

### Slots

:component-slots

### Uitzendt

:component-emits

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog

---
description: Een invoerelement om te schakelen tussen aangevinkte en niet-aangevinkte staten.
category: form
keywords:
  - tickbox
  - check
  - boolean
links:
  - label: Selectievakje
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Checkbox.vue
---

## Gebruik

Gebruik de `v-model`-richtlijn om de aangevinkte status van het selectievakje te regelen.

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

### Indeterminate

Gebruik de `indeterminate`-waarde in de `v-model`-richtlijn of `default-value`-prop om het selectievakje in te stellen op een [indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes).

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 'indeterminate'
---
::

### Indeterminate Icoon

Gebruik de `indeterminate-icon` prop om het onbepaalde pictogram aan te passen. Standaard `i-lucide-minus`.

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
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.minus`-toets.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.minus`-sleutel.
:::
::

### Label

Gebruik de `label` prop om het label van het selectievakje in te stellen.

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

Gebruik de `description` prop om de beschrijving van het selectievakje in te stellen.

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

Gebruik de `icon`-prop om het pictogram van het selectievakje in te stellen wanneer dit is aangevinkt. Standaard ingesteld op `i-lucide-check`.

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
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.check`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.check`-sleutel.
:::
::

### Kleur

Gebruik de `color` prop om de kleur van het selectievakje te wijzigen.

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

### Variant

Gebruik de `variant` prop om de variant van het selectievakje te wijzigen.

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

### Grootte

Gebruik de `size` prop om de grootte van het selectievakje te wijzigen.

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

### Indicator

Gebruik de `indicator` prop om de positie te wijzigen of de indicator te verbergen. Standaard `start`.

::note
Als `indicator` `hidden` is, wordt het pictogram boven het label weergegeven.
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

### Uitgeschakeld

Gebruik de `disabled` prop om het selectievakje uit te schakelen.

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

---
description: Een tekstgebiedelement om tekst met meerdere regels in te voeren.
category: form
keywords:
  - multiline
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Textarea.vue
---

## Gebruik

Gebruik de `v-model`-richtlijn om de waarde van het Textarea te bepalen.

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

### Rijen

Gebruik de `rows` prop om het aantal rijen in te stellen. Standaard ingesteld op `3`.

::component-code
---
props:
  rows: 12
---
::

### Plaatshouder

Gebruik de `placeholder` prop om een tijdelijke aanduiding in te stellen.

::component-code
---
props:
  placeholder: 'Type something...'
---
::

### Autoresize

Gebruik de `autoresize` prop om autoresizing van de hoogte van het Textarea mogelijk te maken.

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

Gebruik de `maxrows` prop om het maximum aantal rijen in te stellen bij autoresizing. Indien ingesteld op `0`, zal het Textarea oneindig groeien.

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

### Kleur

Gebruik de `color` prop om de ringkleur te veranderen wanneer het Textarea is scherpgesteld.

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
De `highlight` prop wordt hier gebruikt om de focusstatus weer te geven. Het wordt intern gebruikt wanneer er een validatiefout optreedt.
::

### Variant

Gebruik de `variant` prop om de variant van het Textarea te wijzigen.

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

### Grootte

Gebruik de `size` prop om de grootte van het tekstgebied te wijzigen.

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: 'Type something...'
---
::

### Icoon

Gebruik de `icon` prop om een [Icon](/docs/components/icon) binnen het Textarea te tonen.

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

Gebruik de `leading`- en `trailing`-rekwisieten om de pictogrampositie in te stellen of de `leading-icon`- en `trailing-icon`-rekwisieten om voor elke positie een ander pictogram in te stellen.

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

### Avatar [bewerken]

Gebruik de `avatar` prop om een [Avatar](/docs/components/avatar) in het Textarea te tonen.

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

### Bezig met laden

Gebruik de `loading` prop om een laadpictogram op het Textarea te tonen.

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

### Pictogram laden

Gebruik de `loading-icon` prop om het laadpictogram aan te passen. Standaard `i-lucide-loader-circle`.

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
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.loading`-toets.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.loading`-sleutel.
:::
::

### Uitgeschakeld

Gebruik de `disabled` prop om het Textarea uit te schakelen.

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: 'Type something...'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<textarea>` HTML-kenmerken.
::

### Slots

:component-slots

### Uitzendt

:component-emits

### Expose

Wanneer u de component opent via een sjabloonref, kunt u het volgende gebruiken:

| Naam | Type |
| ---- | ---- |
| `textareaRef`{lang="ts-type"} | `Ref<HTMLTextAreaElement \| null>`{lang="ts-type"} |
| `autoResize`{lang="ts-type"} | `() => void`{lang="ts-type"} |

## Thema

:component-theme

## Changelog

:component-changelog

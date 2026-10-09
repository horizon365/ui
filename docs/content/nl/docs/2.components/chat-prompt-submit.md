---
title: ChatPromptVerzenden
description: 'Een knop voor het verzenden van chatprompts met automatische statusafhandeling.'
category: chat
links:
  - label: Knop
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPromptSubmit.vue
---

## Gebruik

De ChatPromptSubmit-component wordt gebruikt in de [ChatPrompt](/docs/components/chat-prompt) -component om de prompt in te dienen. Het verwerkt automatisch de verschillende `status`-waarden om de chat te besturen.

Het breidt de [Button](/docs/components/button) component uit, zodat u elke eigenschap zoals `color`, `variant`, `size`, enz. Kunt doorgeven.

::code-preview

#default
:u-chat-prompt-submit

#code
```vue
<template>
  <UChatPrompt>
    <UChatPromptSubmit />
  </UChatPrompt>
</template>
```
::

::note
U kunt het ook gebruiken in de `footer`-sleuf van de [`ChatPrompt`](/docs/components/chat-prompt) component.
::

### Klaar

Als de status `ready`{lang="ts-type"} is, gebruikt u de `color`, `variant` en `icon` rekwisieten om de knop aan te passen. Standaard:

- `color="primary"`{lang="ts-type"}
- `variant="solid"`{lang="ts-type"}
- `icon="i-lucide-arrow-up"`{lang="ts-type"}

::component-code
---
prettier: true
items:
  color:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  variant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  color: 'primary'
  variant: 'solid'
  icon: 'i-lucide-arrow-up'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.arrowUp`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.arrowUp`-sleutel.
:::
::

### Ingezonden

Als de status `submitted`{lang="ts-type"} is, gebruikt u de `submitted-color`, `submitted-variant` en `submitted-icon` rekwisieten om de knop aan te passen. Standaard:

- `submittedColor="neutral"`{lang="ts-type"}
- `submittedVariant="subtle"`{lang="ts-type"}
- `submittedIcon="i-lucide-square"`{lang="ts-type"}

::note
De `stop` gebeurtenis wordt uitgezonden wanneer de gebruiker op de knop klikt.
::

::component-code
---
prettier: true
ignore:
  - status
items:
  submittedColor:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  submittedVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  submittedColor: 'neutral'
  submittedVariant: 'subtle'
  submittedIcon: 'i-lucide-square'
  status: 'submitted'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.stop`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.stop`-sleutel.
:::
::

### Streamen

Als de status `streaming`{lang="ts-type"} is, gebruikt u de `streaming-color`, `streaming-variant` en `streaming-icon` rekwisieten om de knop aan te passen. Standaard:

- `streamingColor="neutral"`{lang="ts-type"}
- `streamingVariant="subtle"`{lang="ts-type"}
- `streamingIcon="i-lucide-square"`{lang="ts-type"}

::note
De `stop`-gebeurtenis wordt uitgezonden wanneer de gebruiker op de knop klikt.
::

::component-code
---
prettier: true
ignore:
  - status
items:
  streamingColor:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  streamingVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  streamingColor: 'neutral'
  streamingVariant: 'subtle'
  streamingIcon: 'i-lucide-square'
  status: 'streaming'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.stop`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.stop`-sleutel.
:::
::

### Fout

Als de status `error`{lang="ts-type"} is, gebruikt u de `error-color`, `error-variant` en `error-icon` rekwisieten om de knop aan te passen. Standaard:

- `errorColor="error"`{lang="ts-type"}
- `errorVariant="soft"`{lang="ts-type"}
- `errorIcon="i-lucide-rotate-ccw"`{lang="ts-type"}

::note
De `reload`-gebeurtenis wordt uitgezonden wanneer de gebruiker op de knop klikt.
::

::component-code
---
prettier: true
ignore:
  - status
items:
  errorColor:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  errorVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  errorColor: 'error'
  errorVariant: 'soft'
  errorIcon: 'i-lucide-rotate-ccw'
  status: 'error'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.reload`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.reload`-sleutel.
:::
::

## Voorbeelden

::tip{to="/docs/components/chat"}
Bekijk de **Chat** overzichtspagina voor installatie-instructies, serverinstellingen en gebruiksvoorbeelden.
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

## Changelog

:component-changelog

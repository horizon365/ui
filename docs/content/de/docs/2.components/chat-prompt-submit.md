---
title: ChatPromptSubmit
description: 'Eine Schaltfläche zum Senden von Chat-Aufforderungen mit automatischer Statusbehandlung.'
category: chat
links:
  - label: Der Button
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPromptSubmit.vue
---

## Bearbeiten

Die ChatPromptSubmit-Komponente wird in der Komponente [ChatPrompt](/docs/components/chat-prompt) verwendet, um die Eingabeaufforderung zu senden.

Es erweitert die Komponente [Button](/docs/components/button), so dass Sie jede Eigenschaft wie `color`, `variant`, `size` usw. übergeben können.

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
Sie können es auch innerhalb des `footer`-Steckplatzes der [`ChatPrompt`](/docs/components/chat-prompt)-Komponente verwenden.
::

### ready ist verfügbar

Wenn der Status `ready`{lang="ts-type"} ist, verwenden Sie die Props `color`, `variant` und `icon`, um die Schaltfläche anzupassen.

- `color="primary"`{lang="ts-type"} (nicht vorhanden)
- `variant="solid"`{lang="ts-type"} (nicht vorhanden)
- `icon="i-lucide-arrow-up"`{lang="ts-type"} (nicht vorhanden)

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
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.arrowUp` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.arrowUp` Schlüssel anpassen.
:::
::

### Eingereicht

Wenn der Status `submitted`{lang="ts-type"} ist, verwenden Sie die Props `submitted-color`, `submitted-variant` und `submitted-icon`, um die Schaltfläche anzupassen.

- `submittedColor="neutral"`{lang="ts-type"} (nicht vorhanden)
- `submittedVariant="subtle"`{lang="ts-type"}x077xx07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x007x07x07x007x07x007x07x007x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
- `submittedIcon="i-lucide-square"`{lang="ts-type"} (nicht vorhanden)

::note
Das `stop`-Ereignis wird ausgegeben, wenn der Benutzer auf den Button klickt.
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
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.stop` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.stop` Schlüssel anpassen.
:::
::

### streaming (englisch)

Wenn der Status `streaming`{lang="ts-type"} ist, verwenden Sie die Props `streaming-color`, `streaming-variant` und `streaming-icon`, um die Schaltfläche anzupassen.

- `streamingColor="neutral"`{lang="ts-type"} (nicht)
- `streamingVariant="subtle"`{lang="ts-type"} (nicht)
- `streamingIcon="i-lucide-square"`{lang="ts-type"} (nicht)

::note
Das `stop`-Ereignis wird ausgegeben, wenn der Benutzer auf den Button klickt.
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
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.stop` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.stop` Schlüssel anpassen.
:::
::

### Fehler

Wenn der Status `error`{lang="ts-type"} ist, verwenden Sie die Props `error-color`, `error-variant` und `error-icon`, um die Schaltfläche anzupassen.

- `errorColor="error"`{lang="ts-type"} (englisch)
- `errorVariant="soft"`{lang="ts-type"} (englisch)
- `errorIcon="i-lucide-rotate-ccw"`{lang="ts-type"} (englisch)

::note
Das `reload`-Ereignis wird ausgegeben, wenn der Benutzer auf den Button klickt.
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
Sie können dieses Symbol global in Ihrem `app.config.ts` unter der `ui.icons.reload`-Taste.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.reload` Schlüssel anpassen.
:::
::

## Beispiele

::tip{to="/docs/components/chat"}
Auf der Übersichtsseite von **Chat** finden Sie Installationsanweisungen, Server-Setup und Anwendungsbeispiele.
::

## API

### Props (englisch)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>`-HTML-Attribute.
::

### Slots (englisch)

:component-slots

### Emits Bearbeiten

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (deutsch)

:component-changelog

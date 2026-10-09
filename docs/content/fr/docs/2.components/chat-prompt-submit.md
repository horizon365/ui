---
title: chatpromptsoumission
description: 'Un bouton pour soumettre des invites de chat avec gestion automatique du statut.'
category: chat
links:
  - label: bouton
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPromptSubmit.vue
---

## Utilisation

Le composant ChatPromptSubmit est utilisé à l'intérieur du composant [ChatPrompt](/docs/components/chat-prompt) pour soumettre l'invite. Il gère automatiquement les différentes valeurs `status` pour contrôler le chat.

Il étend le composant [Button](/docs/components/button), de sorte que vous pouvez passer n'importe quelle propriété telle que `color`, `variant`, `size`, etc.

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
Vous pouvez également l'utiliser dans l'emplacement `footer` du composant [`ChatPrompt`](/docs/components/chat-prompt).
::

### prêt

Lorsque son statut est `ready`{lang="ts-type"}, utilisez les accessoires `color`, `variant` et `icon` pour personnaliser le bouton.

- xx`color="primary"`xx{lang="ts-type"}
- x`variant="solid"`xx{lang="ts-type"}
- x`icon="i-lucide-arrow-up"`x{lang="ts-type"}

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
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.arrowUp`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.arrowUp`.
:::
::

### Répondre

Lorsque son statut est `submitted`{lang="ts-type"}, utilisez les accessoires `submitted-color`, `submitted-variant` et `submitted-icon` pour personnaliser le bouton.

- x`submittedColor="neutral"`xx{lang="ts-type"}
- xx`submittedVariant="subtle"`xxxph0777x
- xx`submittedIcon="i-lucide-square"`xx{lang="ts-type"}

::note
L'événement `stop` est émis lorsque l'utilisateur clique sur le bouton.
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
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.stop`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.stop`.
:::
::

### Streaming

Lorsque son statut est `streaming`{lang="ts-type"}, utilisez les accessoires `streaming-color`, `streaming-variant` et `streaming-icon` pour personnaliser le bouton.

- x`streamingColor="neutral"`x{lang="ts-type"}
- x`streamingVariant="subtle"`{lang="ts-type"}
- x`streamingIcon="i-lucide-square"`x{lang="ts-type"}

::note
L'événement `stop` est émis lorsque l'utilisateur clique sur le bouton.
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
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.stop`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.stop`.
:::
::

### erreur

Lorsque son statut est `error`{lang="ts-type"}, utilisez les accessoires `error-color`, `error-variant` et `error-icon` pour personnaliser le bouton.

- `errorColor="error"`x{lang="ts-type"}
- x`errorVariant="soft"`x{lang="ts-type"}
- x`errorIcon="i-lucide-rotate-ccw"`x{lang="ts-type"}

::note
L'événement `reload` est émis lorsque l'utilisateur clique sur le bouton.
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
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.reload`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.reload`.
:::
::

## Exemples

::tip{to="/docs/components/chat"}
Consultez la page d'aperçu **Chat** pour les instructions d'installation, la configuration du serveur et les exemples d'utilisation.
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

### Slots

:component-slots

### Emits

:component-emits

## Thème

:component-theme

## Changelog

:component-changelog

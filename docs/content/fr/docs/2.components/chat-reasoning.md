---
title: Chatraisonnement
description: Afficher un raisonnement ou un processus de réflexion d'IA pliable.
category: chat
links:
  - label: Collapsible
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatReasoning.vue
---

## Utilisation

Le composant ChatReasoning rend un bloc pliable qui affiche le contenu du raisonnement ou de la pensée de l'IA. Il s'ouvre automatiquement pendant le streaming et se ferme automatiquement après.

::component-example
---
collapse: true
prettier: true
name: 'chat-reasoning-example'
class: 'h-[252px]'
---
::

::note{to="/docs/composables/use-scroll-shadow"}
Le contenu du corps utilise le composable `useScrollShadow` pour appliquer des ombres de fondu lors du débordement.
::

### Texte écrit

Utilisez le prop `text` pour définir le contenu du raisonnement. Le texte s'affiche à l'intérieur du corps pliable.

::component-code
---
prettier: true
hide:
  - class
props:
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

### Streaming

Utilisez la prop `streaming` pour indiquer un raisonnement actif. Le composant s'ouvre automatiquement lorsque le streaming démarre et se ferme automatiquement lorsqu 'il se termine.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

::tip
Utilisez l'utilitaire `isPartStreaming` de `@nuxt/ui/utils/ai` pour déterminer si une partie est en cours de diffusion.
::

### écran

Lors de la diffusion en continu, l'étiquette de déclenchement utilise le composant [`ChatShimmer`](/docs/components/chat-shimmer). Utilisez la prop `shimmer` pour personnaliser ses `duration` et `spread`.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'The user is asking about Vue components...'
  shimmer:
    duration: 2
    spread: 2
  class: 'w-60'
---
::

### Icône

Utilisez la prop `icon` pour afficher un composant [Icon](/docs/components/icon) à côté du déclencheur.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  icon: i-lucide-brain
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

### Chevron

Utilisez le prop `chevron` pour changer la position de l'icône du chevron.

::note
Lorsque `chevron` est réglé sur `leading` avec un `icon`, l'icône change avec le chevron en survol et lorsqu 'elle est ouverte.
::

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  chevron: leading
  icon: i-lucide-brain
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

### Chevron Icône

Utilisez la prop `chevron-icon` pour personnaliser le chevron [Icon](/docs/components/icon).

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  chevronIcon: 'i-lucide-arrow-down'
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.chevronDown`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.chevronDown`.
:::
::

## exemples

::tip{to="/docs/components/chat"}
Consultez la page d'aperçu **Chat** pour les instructions d'installation, la configuration du serveur et les exemples d'utilisation.
::

## API

### Props équipements

:component-props

### Slots

:component-slots

### Emis

:component-emits

## thème

:component-theme

## Changelog écrit

:component-changelog

---
title: chattool
description: Afficher un état d'invocation d'outil AI pliable.
category: chat
links:
  - label: Collapsible
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatTool.vue
---

## Utilisation

Le composant ChatTool rend un bloc pliable qui affiche le statut d'appel de l'outil d'IA, tel que "Recherche de composants" ou "Lecture de documentation". Lorsqu 'un emplacement par défaut est fourni, il devient pliable pour révéler la sortie de l'outil.

::component-example
---
collapse: true
prettier: true
name: 'chat-tool-example'
---
::

### Texte écrit

Utilisez la prop `text` pour définir le texte d'état de l'outil.

::component-code
---
hide:
  - class
props:
  text: 'Searched components'
  class: 'w-60'
---
::

### suffixe

Utilisez le prop `suffix` pour afficher le texte secondaire après l'étiquette principale.

::component-code
---
hide:
  - class
ignore:
  - text
props:
  text: 'Reading component'
  suffix: 'Button'
  class: 'w-60'
---
::

### Streaming écouter

Utilisez la prop `streaming` pour indiquer que l'outil est activement en cours d'exécution. Le texte affiche une animation de miroitement.

::component-code
---
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'Searching components...'
  class: 'w-60'
---
::

::tip
Utilisez l'utilitaire `isToolStreaming` de `@nuxt/ui/utils/ai` pour déterminer si une pièce d'outil est toujours en cours d'exécution. Il renvoie `false` lorsque l'outil est en attente d'une approbation de l'utilisateur.
::

### écran

Lors du streaming, l'étiquette de déclenchement utilise le composant [`ChatShimmer`](/docs/components/chat-shimmer). Utilisez la prop `shimmer` pour personnaliser ses `duration` et `spread`.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'Searching components...'
  shimmer:
    duration: 2
    spread: 2
  class: 'w-60'
---
::

### icône

Utilisez la prop `icon` pour afficher un composant [Icon](/docs/components/icon) à côté du déclencheur.

::component-code
---
hide:
  - class
ignore:
  - text
props:
  icon: i-lucide-search
  text: 'Searched components'
  class: 'w-60'
---
::

### Chargement

Utilisez le prop `loading` pour afficher un indicateur de chargement. Utilisez le prop `loading-icon` pour personnaliser l'icône de chargement.

::component-code
---
hide:
  - class
ignore:
  - text
props:
  loading: true
  text: 'Searching components...'
  class: 'w-60'
---
::

### Icône de chargement

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut, `i-lucide-loader-circle`.

::component-code
---
hide:
  - class
ignore:
  - text
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  text: 'Searching components...'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.loading`.
:::
::

### chevron

Utilisez le prop `chevron` pour modifier la position de l'icône du chevron.

::note
Lorsque `chevron` est réglé sur `leading` avec un `icon`, l'icône change avec le chevron en survol et lorsqu 'il est ouvert.
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
  icon: i-lucide-search
  text: 'Searched components'
  class: 'w-60'
slots:
  default: |

    Tool output content
---
::

Icône ### Chevron

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
  text: 'Searched components'
  class: 'w-60'
slots:
  default: |

    Tool output content
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

### Variant

Utilisez la prop `variant` pour modifier le style visuel. Par défaut, `inline`.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
  - icon
props:
  variant: card
  text: 'Searched components'
  icon: i-lucide-search
  chevron: trailing
  class: 'w-60'
slots:
  default: |

    Tool output content
---
::

### Actions: badge{label="4.10+" class="align-text-top"}

Utilisez la prop `actions` pour afficher une liste de [Button](/docs/components/button) sous le déclencheur, utile pour les outils qui nécessitent une confirmation de l'utilisateur avant de s'exécuter.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
  - icon
  - variant
  - actions
props:
  actions:
    - label: 'Approve'
    - label: 'Deny'
      color: neutral
      variant: soft
  text: 'Run terminal command'
  variant: card
  icon: i-lucide-terminal
  class: 'w-60'
slots:
  default: |

    $ pnpm run lint
---
::

## Exemples

::tip{to="/docs/components/chat"}
Consultez la page d'aperçu **Chat** pour les instructions d'installation, la configuration du serveur et les exemples d'utilisation.
::

### Avec flux d'approbation: badge{label="4.10+" class="align-text-top"}

Utilisez la prop `actions` pour créer un flux d'approbation d'outil avec le [AI SDK](https://ai-sdk.dev/docs/agents/tool-approvals). Lorsqu 'une pièce d'outil est dans l'état `approval-requested`, affichez les actions approuver et refuser et répondez avec `addToolApprovalResponse`.

::component-example
---
collapse: true
prettier: true
name: 'chat-tool-approval-example'
---
::

::tip
Utilisez l'utilitaire `isToolApprovalPending` de `@nuxt/ui/utils/ai` pour détecter une approbation en attente, `isToolStreaming` renvoie `false` dans cet état.

```vue
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'
import { lastAssistantMessageIsCompleteWithApprovalResponses } from 'ai'

const { messages, addToolApprovalResponse } = useChat({
  sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithApprovalResponses
})
</script>

<template>
  <UChatTool
    v-if="isToolUIPart(part)"
    :text="getToolName(part)"
    :streaming="isToolStreaming(part)"
    :actions="part.state === 'approval-requested' ? [
      { label: 'Approve', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: true }) },
      { label: 'Deny', color: 'neutral', variant: 'ghost', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: false }) }
    ] : undefined"
  />
</template>
```
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Thème

:component-theme

## Changelog

:component-changelog

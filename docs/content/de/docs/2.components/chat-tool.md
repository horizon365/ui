---
title: Das Chattool
description: Zeigt den Status eines zusammenklappbaren AI-Tools an.
category: chat
links:
  - label: Kollapsibel
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatTool.vue
---

## Bearbeiten

Die ChatTool-Komponente rendert einen zusammenklappbaren Block, der den Aufrufstatus des KI-Tools anzeigt, z. B. „ Komponenten suchen "oder „ Dokumentation lesen". Wenn ein Standard-Slot bereitgestellt wird, wird er zusammenklappbar, um die Werkzeugausgabe anzuzeigen.

::component-example
---
collapse: true
prettier: true
name: 'chat-tool-example'
---
::

### Text Bearbeiten

Verwenden Sie die `text`-Prop, um den Werkzeugstatustext festzulegen.

::component-code
---
hide:
  - class
props:
  text: 'Searched components'
  class: 'w-60'
---
::

### Suffix (englisch)

Verwenden Sie die `suffix`-Prop, um sekundären Text nach dem Hauptlabel anzuzeigen.

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

### Streaming (englisch)

Verwenden Sie die `streaming`-Prop, um anzuzeigen, dass das Tool aktiv ausgeführt wird. Der Text zeigt eine Schimmer-Animation an.

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
Verwenden Sie das Dienstprogramm `isToolStreaming` von `@nuxt/ui/utils/ai`, um festzustellen, ob ein Werkzeugteil noch läuft.
::

### Shimmer (nicht)

Beim Streamen verwendet das Trigger-Label die Komponente [`ChatShimmer`](/docs/components/chat-shimmer). Verwenden Sie die `shimmer`-Prop, um die `duration` und `spread` anzupassen.

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

### Icon (nicht)

Verwenden Sie die `icon`-Prop, um eine [Icon](/docs/components/icon)-Komponente neben dem Trigger anzuzeigen.

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

### loading (englisch)

Verwenden Sie die `loading`-prop, um eine Ladeanzeige anzuzeigen. Verwenden Sie die `loading-icon`-prop, um das Ladesymbol anzupassen.

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

### Loading Icon [Bearbeiten | Quelltext bearbeiten

Verwenden Sie die `loading-icon`-prop, um das Ladesymbol anzupassen. Standardmäßig ist `i-lucide-loader-circle`.

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
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.loading` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.loading` Schlüssel anpassen.
:::
::

### Chevron Bearbeiten

Verwenden Sie die `chevron`-Prop, um die Position des Chevron-Symbols zu ändern.

::note
Wenn `chevron` mit einem `icon` auf `leading` gesetzt ist, wechselt das Symbol mit dem Chevron auf Hover und wenn es geöffnet ist.
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

### Chevron Icon (Deutsche Ausgabe)

Verwenden Sie die `chevron-icon`-Prop, um den chevron [Icon](/docs/components/icon). Defaults auf `i-lucide-chevron-down`.

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
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.chevronDown` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.chevronDown` Schlüssel anpassen.
:::
::

### Variant Bearbeiten

Verwenden Sie die `variant`-prop, um den visuellen Stil zu ändern. Standardmäßig auf `inline`.

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

### Actions: badge{label="4.10+" class="align-text-top"} (Aktion)

Verwenden Sie die `actions`-Prop, um eine Liste von [Button](/docs/components/button) unterhalb des Auslösers anzuzeigen, nützlich für Tools, die vor der Ausführung eine Benutzerbestätigung benötigen.

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

## Beispiele

::tip{to="/docs/components/chat"}
Auf der Übersichtsseite von **Chat** finden Sie Installationsanweisungen, Server-Setup und Anwendungsbeispiele.
::

### With Genehmigungsfluss: badge{label="4.10+" class="align-text-top"}

Verwenden Sie die `actions`-Prop, um einen Werkzeuggenehmigungsfluss mit dem [AI SDK](https://ai-sdk.dev/docs/agents/tool-approvalsxph22x zu erstellen. Wenn sich ein Werkzeugteil im `approval-requested`-Status befindet, zeigen Sie die Aktionen zum Genehmigen und Ablehnen an und antworten Sie mit `addToolApprovalResponse`.

::component-example
---
collapse: true
prettier: true
name: 'chat-tool-approval-example'
---
::

::tip
Verwenden Sie das `isToolApprovalPending`-Dienstprogramm von `@nuxt/ui/utils/ai`, um eine ausstehende Genehmigung zu erkennen, `isToolStreaming` gibt `false` in diesem Zustand zurück.

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

### Props (nicht)

:component-props

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog

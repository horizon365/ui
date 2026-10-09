---
title: Chattool
description: Mostrar un estado de invocación de herramienta de IA plegable.
category: chat
links:
  - label: El Collapsible
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatTool.vue
---

xph0000xUso

El componente ChatTool representa un bloque plegable que muestra el estado de invocación de la herramienta de IA, como "Buscar componentes" o "Leer documentación". Cuando se proporciona una ranura predeterminada, se vuelve plegable para revelar la salida de la herramienta.

::component-example
---
collapse: true
prettier: true
name: 'chat-tool-example'
---
::

### Text (Edición española)

Utilice el prop `text` para establecer el texto de estado de la herramienta.

::component-code
---
hide:
  - class
props:
  text: 'Searched components'
  class: 'w-60'
---
::

### sufijo

Utilice el prop `suffix` para mostrar texto secundario después de la etiqueta principal.

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

### Streaming en Español

Utilice el prop `streaming` para indicar que la herramienta se está ejecutando activamente.El texto muestra una animación de brillo.

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
Utilice la utilidad `isToolStreaming` de `@nuxt/ui/utils/ai` para determinar si una parte de la herramienta todavía está en ejecución. Devuelve `false` cuando la herramienta está esperando la aprobación del usuario.
::

### Climatización

Cuando se transmite, la etiqueta de activación utiliza el componente [`ChatShimmer`](/docs/components/chat-shimmer). Use el prop `shimmer` para personalizar su `duration` y `spread`.

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

### Icono

Utilice el prop `icon` para mostrar un componente [Icon](/docs/components/icon) junto al disparador.

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

### Cargando

Utilice el accesorio `loading` para mostrar un indicador de carga. Use el accesorio `loading-icon` para personalizar el icono de carga.

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

### Icono de carga

Utilice el prop `loading-icon` para personalizar el icono de carga.

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
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su Xph110x bajo la tecla Xph111x.
:::
::

Xph112xChevron (Edición española)

Utilice el accesorio `chevron` para cambiar la posición del icono de chevron.

::note
Cuando `chevron` se establece en `leading` con un `icon`, el icono se intercambia con el chevron en el cursor y cuando se abre.
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

XPH133xChevron Icono de diseño

Utilice el prop `chevron-icon` para personalizar el chevron [Icon](/docs/components/icon).

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
Puede personalizar este icono de forma global en su XPH155x bajo la tecla XPH156x.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` bajo la tecla `ui.icons.chevronDown`.
:::
::

### Variante

Utilice el prop `variant` para cambiar el estilo visual.

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

### Acciones: badge{label="4.10+" class="align-text-top"}

Utilice el prop `actions` para mostrar una lista de [Button](/docs/components/button) debajo del disparador, útil para herramientas que requieren una confirmación del usuario antes de ejecutarse.

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

## Ejemplos

::tip{to="/docs/components/chat"}
Consulte la página de descripción general de **Chat** para obtener instrucciones de instalación, configuración del servidor y ejemplos de uso.
::

### Con flujo de aprobación: badge{label="4.10+" class="align-text-top"}

Utilice el prop `actions` para crear un flujo de aprobación de herramientas con el SDK](https://ai-sdk.dev/docs/agents/tool-approvals) [AI. Cuando una pieza de herramienta está en el estado `approval-requested`, muestre las acciones aprobar y denegar y responda con `addToolApprovalResponse`.

::component-example
---
collapse: true
prettier: true
name: 'chat-tool-approval-example'
---
::

::tip
Utilice la utilidad `isToolApprovalPending` de `@nuxt/ui/utils/ai` para detectar una aprobación pendiente, `isToolStreaming` devuelve `false` en este estado.

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

### Props (accesorios)

:component-props

### Slots en línea

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog

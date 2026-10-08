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

@@pH000@@Uso del producto

El componente ChatTool representa un bloque plegable que muestra el estado de invocación de la herramienta de IA, como "Buscar componentes" o "Leer documentación". Cuando se proporciona una ranura predeterminada, se vuelve plegable para revelar la salida de la herramienta.

::component-example
---
Colapso: Verdad
Categoría: true
Nombre: 'chat-herramienta-ejemplo'
---
::

@0001 @ texto

Utilice el prop `text` para establecer el texto de estado de la herramienta.

::component-code
---
Escondido:
  @003@clase
Props:
  texto: 'Componentes buscados'
  Categoría: W-60.
---
::

@0004@suffix

Utilice el prop `suffix` para mostrar texto secundario después de la etiqueta principal.

::component-code
---
Escondido:
  @06@clase
Ignora:
  @0007@Proyecto
Props:
  texto: "Componente de lectura"
  Sufijo: "botón"
  Categoría: W-60
---
::

@008@Streaming en Español

Utilice el prop `streaming` para indicar que la herramienta se está ejecutando activamente.El texto muestra una animación de brillo.

::component-code
---
Escondido:
  @000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Ignora:
  @111@texto
Props:
  Streaming: Verdad
  texto: 'Búsqueda de componentes...'
  Categoría: W-60
---
::

::tip
Utilice la utilidad `isToolStreaming` de `@nuxt/ui/utils/ai` para determinar si una parte de la herramienta todavía se está ejecutando. Devuelve `false` cuando la herramienta está a la espera de la aprobación del usuario.
::

@150@@ciencia15

Cuando se transmite, la etiqueta de activación utiliza el [`ChatShimmer`](/docs/components/chat-shimmer) componente. Use el `shimmer` prop para personalizar su `duration` y `spread`.

::component-code
---
Categoría: true
Escondido:
  @@24@clase
Ignora:
  @@25@texto
Props:
  Streaming: Verdad
  texto: 'Búsqueda de componentes...'
  Shimmer:
    Duración: 2
    Difusión: 2
  Categoría: W-60
---
::

@26@Icon

Utilice el prop `icon` para mostrar un componente [Icon](/docs/components/icon) junto al disparador.

::component-code
---
Escondido:
  @@2003@clase
Ignora:
  @@33@texto
Props:
  Icono: i-lucide-search
  texto: 'Componentes buscados'
  Categoría: W-60
---
::

@@34@Cargando

Utilice el prop `loading` para mostrar un indicador de carga. Use el prop `loading-icon` para personalizar el icono de carga.

::component-code
---
Escondido:
  @37@clase
Ignora:
  @@pH038@texto
Props:
  Carga: Verdad
  texto: 'Búsqueda de componentes...'
  Categoría: W-60
---
::

### Icono de carga

Utilice el prop `loading-icon` para personalizar el icono de carga. Prevalue a `i-lucide-loader-circle`.

::component-code
---
Escondido:
  @@424@clase
Ignora:
  @@pH043@texto
Props:
  Carga: Verdad
  LoadingIcon: 'i-lucide-loader'(en inglés)
  texto: 'Búsqueda de componentes...'
  Categoría: W-60
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.loading`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.loading`.
:::
::

@484@chevron

Utilice el prop `chevron` para cambiar la posición del icono de chevron.

::note
Cuando `chevron` se establece en `leading` con un `icon`, el icono se intercambia con el chevron en el hover y cuando está abierto.
::

::component-code
---
Categoría: true
Escondido:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Ignora:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Chevron: líder
  Icono: i-lucide-search
  texto: 'Componentes buscados'
  Categoría: W-60
Los slots:
  Default:|

    Herramientas de output content
---
::

### Chevron Icono de diseño

Utilice el prop `chevron-icon` para personalizar el chevron [Icon](/docs/components/icon).

::component-code
---
Categoría: true
Escondido:
  @062@clase
Ignora:
  @@pH063@texto
Props:
  chevronIcon: 'i-lucide-arrow-down'
  texto: 'Componentes buscados'
  Categoría: W-60
Los slots:
  Default:|

    Herramientas de output content
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.chevronDown`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.chevronDown`.
:::
::

@@P068@@Variación

Utilice el prop `variant` para cambiar el estilo visual. Predeterminados a `inline`.

::component-code
---
Categoría: true
Escondido:
  @071@clase
Ignora:
  @2007@texto
  @@i73@icon
Props:
  Variación: Card
  texto: 'Componentes buscados'
  Icono: i-lucide-search
  Vía: Trailing
  Categoría: W-60
Los slots:
  Default:|

    Herramientas de output content
---
::

### Acciones: badge{label="4.10+" class="align-text-top"}

Utilice el prop `actions` para mostrar una lista de [Button](/docs/components/button) debajo del disparador, útil para herramientas que requieren una confirmación del usuario antes de ejecutarse.

::component-code
---
Categoría: true
Escondido:
  @081 @ clase
Ignora:
  @2008@texto
  @@iX083@icon
  - Variación
  @@85@acciones
Props:
  Acciones:
    - label:"Aprobar"
    - label:'Negación'
      Color: Neutro
      Categoría: Soft
  texto: "Ejecutar el comando terminal"
  Variación: Card
  Icono: i-lucide-terminal
  Categoría: W-60
Los slots:
  Default:|

    $pnpm correr lint
---
::

@888@Ejemplos

::tip{to="/docs/components/chat"}
Consulte la página de descripción general **Chat** para obtener instrucciones de instalación, configuración del servidor y ejemplos de uso.
::

### Con flujo de aprobación: badge{label="4.10+" class="align-text-top"}

Utilice el prop `actions` para crear un flujo de aprobación de herramientas con el [AI SDK](https://ai-sdk.dev/docs/agents/tool-approvals). Cuando una pieza de herramienta esté en el estado `approval-requested`, muestre las acciones aprobar y denegar y responda con `addToolApprovalResponse`.

::component-example
---
Colapso: Verdad
Categoría: true
Nombre: 'chat-tool-approval-example'
---
::

::tip
Utilice la utilidad `isToolApprovalPending` de `@nuxt/ui/utils/ai` para detectar una aprobación pendiente,`isToolStreaming` devuelve `false` en este estado.

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

@@pH126 @@ de nuevo

@127@127@127

Componentes Props

@128@128@128@128

Componentes de slots

@129@@129@129

Componentes Emisiones

@130 @@ Proyecto

Componente Tema

@131@Changelog

Categoría: component-changelog

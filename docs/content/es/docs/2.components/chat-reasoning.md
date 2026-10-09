---
title: ChatReasoning
description: Mostrar un razonamiento o proceso de pensamiento de IA plegable.
category: chat
links:
  - label: El Collapsible
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatReasoning.vue
---

xph0000xUso

El componente ChatReasoning representa un bloque plegable que muestra contenido de razonamiento o pensamiento de IA. Se abre automáticamente durante la transmisión y se cierra automáticamente después.

::component-example
---
collapse: true
prettier: true
name: 'chat-reasoning-example'
class: 'h-[252px]'
---
::

::note{to="/docs/composables/use-scroll-shadow"}
El contenido del cuerpo utiliza el composable `useScrollShadow` para aplicar sombras de desvanecimiento cuando se desborda.
::

### Text (Edición española)

Utilice el soporte `text` para establecer el contenido de razonamiento.El texto se muestra dentro del cuerpo plegable.

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

### Streaming en Español

Utilice el prop `streaming` para indicar el razonamiento activo. El componente se abre automáticamente cuando se inicia la transmisión y se cierra automáticamente cuando termina.

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
Utilice la utilidad `isPartStreaming` de `@nuxt/ui/utils/ai` para determinar si una parte se está transmitiendo actualmente.
::

### XC3xC3xC3xC3xC3xC3xC3xC3xC3

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
  text: 'The user is asking about Vue components...'
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

### xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Utilice el accesorio `chevron` para cambiar la posición del icono de chevron.

::note
Cuando `chevron` se establece en `leading` con un `icon`, el icono se intercambia con el chevron al flotar y cuando está abierto.
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

### Chevron Icono de diseño

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
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.chevronDown`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su Xph110x bajo la tecla Xph111x.
:::
::

## Ejemplos

::tip{to="/docs/components/chat"}
Consulte la página de descripción general de **Chat** para obtener instrucciones de instalación, configuración del servidor y ejemplos de uso.
::

## API (Edición española)

### Props (accesorios)

:component-props

### Slots en línea

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

Xph120xChangelog (Edición española)

:component-changelog

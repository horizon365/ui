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

@@pH000@@Uso del producto

El componente ChatReasoning representa un bloque plegable que muestra el razonamiento de la IA o el contenido de pensamiento. Se abre automáticamente durante la transmisión y se cierra automáticamente después.

::component-example
---
Colapso: Verdad
Categoría: true
nombre: 'chat-razonamiento-ejemplo'
clase: 'h-[252px]'
---
::

::note{to="/docs/composables/use-scroll-shadow"}
El contenido del cuerpo utiliza el `useScrollShadow` composable para aplicar sombras de desvanecimiento cuando se desborda.
::

@@pH0002 @ Proyecto

Utilice el prop `text` para establecer el contenido de razonamiento.El texto se muestra dentro del cuerpo plegable.

::component-code
---
Categoría: true
Escondido:
  @@clase004
Props:
  texto: "El usuario está preguntando acerca de los componentes de Vue..."
  Categoría: W-60
---
::

@000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `streaming` para indicar el razonamiento activo. El componente se abre automáticamente cuando se inicia la transmisión y se cierra automáticamente cuando termina.

::component-code
---
Categoría: true
Escondido:
  @007@clase
Ignora:
  @008@texto
Props:
  Streaming: Verdad
  texto: "El usuario está preguntando acerca de los componentes de Vue..."
  Categoría: W-60
---
::

::tip
Utilice la utilidad `isPartStreaming` de `@nuxt/ui/utils/ai` para determinar si una parte se está transmitiendo actualmente.
::

@@1111@11111

Cuando se transmite, la etiqueta de activación utiliza el [`ChatShimmer`](/docs/components/chat-shimmer) componente. Use el `shimmer` prop para personalizar su `duration` y `spread`.

::component-code
---
Categoría: true
Escondido:
  @200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Ignora:
  @21@@texto
Props:
  Streaming: Verdad
  texto: "El usuario está preguntando acerca de los componentes de Vue..."
  Shimmer:
    Duración: 2
    Difusión: 2
  Categoría: W-60
---
::

@222@Icon

Utilice el prop `icon` para mostrar un componente [Icon](/docs/components/icon) junto al disparador.

::component-code
---
Categoría: true
Escondido:
  @@28@clase
Ignora:
  @@29@texto
Props:
  Icono: i-lucide-brain
  texto: "El usuario está preguntando acerca de los componentes de Vue..."
  Categoría: W-60
---
::

@@P2000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `chevron` para cambiar la posición del icono de chevron.

::note
Cuando `chevron` se establece en `leading` con un `icon`, el icono se intercambia con el chevron en el hover y cuando está abierto.
::

::component-code
---
Categoría: true
Escondido:
  @35@clase
Ignora:
  @@pH036@texto
Props:
  Chevron: líder
  Icono: i-lucide-brain
  texto: "El usuario está preguntando acerca de los componentes de Vue..."
  Categoría: W-60
---
::

### Chevron Icono de diseño

Utilice el prop `chevron-icon` para personalizar el chevron [Icon](/docs/components/icon).

::component-code
---
Categoría: true
Escondido:
  @444@clase
Ignora:
  @450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  chevronIcon: 'i-lucide-arrow-down'
  texto: "El usuario está preguntando acerca de los componentes de Vue..."
  Categoría: W-60.
---
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.chevronDown`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.chevronDown`.
:::
::

@@P050@Ejemplos

::tip{to="/docs/components/chat"}
Consulte la página de descripción general **Chat** para obtener instrucciones de instalación, configuración del servidor y ejemplos de uso.
::

@@pH053

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Emisiones

@@507@Proyecto

Componente Tema

@@changelog

Categoría: component-changelog

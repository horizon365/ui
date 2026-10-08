---
title: chatpromptsubmit
description: 'Un botón para enviar mensajes de chat con manejo automático de estado.'
category: chat
links:
  - label: Botón
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPromptSubmit.vue
---

@@pH000@@Uso del producto

El componente ChatPromptSubmit se utiliza dentro del componente [ChatPrompt](/docs/components/chat-prompt) para enviar el mensaje.

Se extiende el [Button](/docs/components/button) componente, por lo que puede pasar cualquier propiedad, como `color`,`variant`,`size`, etc

::code-preview

#por defecto
U-Chat-Prompt-Submit (en inglés)

#El Código
```vue
<template>
  <UChatPrompt>
    <UChatPromptSubmit />
  </UChatPrompt>
</template>
```
::

::note
También puede usarlo dentro de la ranura `footer` del componente [`ChatPrompt`](/docs/components/chat-prompt).
::

@@26@26@26@26

Cuando su estado es `ready`{lang="ts-type"}, utilice los accesorios `color`,`variant` y `icon` para personalizar el botón.

@@
@@
@@

::component-code
---
Categoría: true
items:
  Color:
    - primary
    @@442@secondary
    @@43@@éxito
    @@44@Advertencia
    @@F045@error
    @@46000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  Variante:
    @@474@477
    @@48000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@499@somier
    @500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @ghost051
Props:
  Categoría:"Primary"
  Variante: "sólido"
  icono: 'i-lucide-arrow-up'
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.arrowUp`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` bajo la tecla `ui.icons.arrowUp`.
:::
::

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Cuando su estado es `submitted`{lang="ts-type"}, utilice los accesorios `submitted-color`,`submitted-variant` y `submitted-icon` para personalizar el botón.

@@
@@
@@@ph068@@@ph069@@@ph070

::note
El evento `stop` se emite cuando el usuario hace clic en el botón.
::

::component-code
---
Categoría: true
Ignora:
  @@2007@estado
Items:
  Subordinación:
    @@P073@primary
    @@774@secondary
    @@75@éxito
    @@760@Advertencia
    @@777@error
    @@78@neutralización
  Variante Subpuesta:
    @@799@solido
    @080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @081 @@ Trabajo
    @2018@subtil
    @ghost083 @
Props:
  Categoría:"Neutral"
  Variante: "subrepticia"
  Archivo de la etiqueta: i-lucide-square
  Estado: "Presentado"
---
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.stop`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.stop`.
:::
::

@@888@vía

Cuando su estado es `streaming`{lang="ts-type"}, utilice los accesorios `streaming-color`,`streaming-variant` y `streaming-icon` para personalizar el botón.

@@
@@
@100@@101@102

::note
El evento `stop` se emite cuando el usuario hace clic en el botón.
::

::component-code
---
Categoría: true
Ignora:
  @@pH104@estado
Items:
  Streaming de colores:
    @@P105@primary (en inglés)
    @106@106@106
    @@70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@P108@Advertencia
    @@pH109@error
    @110@Neutral
  Variaciones de Streaming:
    @@ph111@@sólido
    @112@@Escenario
    @113 @@ de nuevo
    @114@@subtil
    @115 @ Fantasía
Props:
  Categoría:'Neutral'
  Categoría:'Subtil'
  Archivo de la etiqueta: i-lucide-square
  Categoría:"Streaming"
---
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.stop`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.stop`.
:::
::

@@pH120@@error

Cuando su estado es `error`{lang="ts-type"}, utilice los accesorios `error-color`,`error-variant` y `error-icon` para personalizar el botón.

@126@@127@128
@@ph129@@@ph130@@ph131 @
@@ph132@@@ph133@@ph134 @

::note
El evento `reload` se emite cuando el usuario hace clic en el botón.
::

::component-code
---
Categoría: true
Ignora:
  @136@estado
Items:
  errores-color:
    @@ph137@primary (en inglés)
    @138@138 años
    @139 @ El éxito
    @@pH140@advertencia
    @@141@@error
    @@ph142@neutralización
  Variante de error:
    @@ph143@@sólido
    @@ph144@outline (Edición española)
    @145 @@ de nuevo
    @146@@subtil
    @ph147@ghost (en inglés)
Props:
  error: "error"
  Categoría:"Soft"
  Icono de error: 'i-lucide-rotate-ccw'
  Categoría:"Error"
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.reload`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.reload`.
:::
::

@@ph152@Ejemplos

::tip{to="/docs/components/chat"}
Consulte la página de descripción general de **Chat** para obtener instrucciones de instalación, configuración del servidor y ejemplos de uso.
::

@@pH155

@156@156@156

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<button>`.
::

@158@158@158

Componentes de slots

@159 @@ Emisiones

Componentes Emisiones

@160 @@ Proyecto

Componente Tema

@161@Changelog (Edición española)

Categoría: component-changelog

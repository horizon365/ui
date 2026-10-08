---
title: Chatón
description: 'Una paleta de chat para crear una interfaz de chatbot dentro de una superposición.'
category: chat
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPalette.vue
---

@@pH000@@Uso del producto

El componente ChatPalette es un envoltorio de diseño estructurado que organiza [ChatMessages](/docs/components/chat-messages) en un área de contenido desplazable y [ChatPrompt](/docs/components/chat-prompt) en una sección inferior fija, creando interfaces cohesivas de chatbot para modales, diapositivas o cajones.

```vue{2,8}
<template>
  <UChatPalette>
    <UChatMessages />

    <template #prompt>
      <UChatPrompt />
    </template>
  </UChatPalette>
</template>
```

@2000000 Ejemplos

::tip{to="/docs/components/chat"}
Consulte la página de descripción general **Chat** para obtener instrucciones de instalación, configuración del servidor y ejemplos de uso.
::

### Dentro de un Modal

Puede usar el componente ChatPalette dentro del contenido de un [Modal](/docs/components/modal).

::component-example
---
Colapso: Verdad
iframe:
  Tamaño: 500px
iframeMobile: Verdad
Desconocido: true
Nombre del archivo: 'chat-palette-modal-example'
---
::

### Dentro del contenido

Puede usar el componente ChatPalette condicionalmente dentro del contenido de [ContentSearch](/docs/components/content-search) para mostrar una interfaz de chatbot cuando un usuario selecciona un elemento.

::component-example
---
Colapso: Verdad
iframe:
  Tamaño: 500px
iframeMobile: Verdad
Desconocido: true
Nombre del archivo: 'chat-palette-content-search-example'
---
::


@3333@3333

@@30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@35000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@366@366

Componente Tema

@@changelog

Categoría: component-changelog

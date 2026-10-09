---
title: Chatón
description: 'Una paleta de chat para crear una interfaz de chatbot dentro de una superposición.'
category: chat
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPalette.vue
---

xph0000xUso

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

## Ejemplos

::tip{to="/docs/components/chat"}
Consulte la página de descripción general de **Chat** para obtener instrucciones de instalación, configuración del servidor y ejemplos de uso.
::

### Dentro de un Modal

Puede utilizar el componente ChatPalette dentro del contenido de un [Modal](/docs/components/modal).

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'chat-palette-modal-example'
---
::

### Dentro de ContentSearch

Puede utilizar el componente ChatPalette condicionalmente dentro del contenido de [ContentSearch](/docs/components/content-search) para mostrar una interfaz de chatbot cuando un usuario selecciona un elemento.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'chat-palette-content-search-example'
---
::


## API (en inglés)

### Propciones

:component-props

### Slots

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog

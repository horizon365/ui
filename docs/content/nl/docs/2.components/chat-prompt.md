---
title: ChatPrompt
description: 'Een verbeterd Textarea voor het indienen van prompts in AI-chatinterfaces.'
category: chat
links:
  - label: Tekstgebied
    to: /docs/components/textarea
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPrompt.vue
---

## Gebruik

De ChatPrompt-component geeft een `<form>`-element weer en breidt de [Textarea](/docs/components/textarea) -component uit, zodat u elke eigenschap zoals `icon`, `placeholder`, `autofocus`, enz. Kunt doorgeven.

::component-example
---
collapse: true
name: 'chat-prompt-example'
---
::

::note
De ChatPrompt verwerkt de volgende gebeurtenissen:

- Het formulier wordt verzonden wanneer de gebruiker op: kbd{value="enter"} drukt of wanneer de gebruiker op de verzendknop klikt.
Stel de `submit-on-enter`-prop in op `false` om te verzenden met: kbd{value="ctrl"} +: kbd{value="enter"} (of: kbd{value="cmd"} +: kbd{value="enter"} op macOS) in plaats daarvan, zodat: kbd{value="enter"} een nieuwe regel kan invoegen.
- Het tekstgebied wordt wazig wanneer: kbd{value="escape"} wordt ingedrukt en een `close`-gebeurtenis wordt uitgezonden.
::

### Variant

Gebruik de `variant` prop om de stijl van de prompt te wijzigen. Standaard is `outline`.

::component-code
---
hide:
  - autofocus
props:
  variant: 'soft'
  autofocus: false
---
::

## Voorbeelden

::tip{to="/docs/components/chat"}
Kijk op de **Chat** overzichtspagina voor installatie instructies, server setup en gebruiksvoorbeelden.
::

### Met een Editor: badge{label="4.10+" class="align-text-top"}

Stel de `#header`-, `#body` en `#footer`-slots samen om een rijke prompt te bouwen: bestandsbijlagen, een [Editor](/docs/components/editor) met `@`-vermeldingen en `/`-opdrachten via [EditorMentionMenu](/docs/components/editor-mention-menu), en een moduskiezer.

::component-example
---
collapse: true
name: 'chat-prompt-editor-example'
class: 'justify-center'
---
::

::note
De `#body`-sleuf vervangt het interne tekstgebied en toont `submit`- en `close`-handlers, zodat u de sneltoetsen van de editor naar het formulier kunt bedraden.
Wanneer een vermeldingsmenu geopend is, selecteert u op: kbd{value="enter"} het gemarkeerde item in plaats van te verzenden.
::

### As startpagina

Je kunt het ook gebruiken op de startpagina van je chatinterface.

```vue [pages/index.vue] {2,4,8-15,24,26}
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'

const input = ref('')

const { messages, status, sendMessage } = useChat()

async function onSubmit() {
  sendMessage({ text: input.value })

  // Navigate to chat page after first message
  if (messages.value.length === 1) {
    await navigateTo('/chat')
  }
}
</script>

<template>
  <UDashboardPanel>
    <template #body>
      <UContainer>
        <h1>How can I help you today?</h1>

        <UChatPrompt v-model="input" @submit="onSubmit">
          <UChatPromptSubmit :status="status" />
        </UChatPrompt>
      </UContainer>
    </template>
  </UDashboardPanel>
</template>
```

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<textarea>` HTML-kenmerken.
::

### Slots

:component-slots

### Uitzendt

:component-emits

### Expose

Wanneer u de component opent via een sjabloonref, kunt u het volgende gebruiken:

| Naam | Type |
| ---- | ---- |
| `textareaRef`{lang="ts-type"} | `Ref<HTMLTextAreaElement \| null>`{lang="ts-type"} |

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog

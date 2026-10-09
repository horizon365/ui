---
title: Chatprompt
description: 'Ein erweitertes Textarea zum Senden von Eingabeaufforderungen in KI-Chat-Schnittstellen.'
category: chat
links:
  - label: Textlich
    to: /docs/components/textarea
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPrompt.vue
---

## Bearbeiten

Die ChatPrompt-Komponente rendert ein `<form>`-Element und erweitert die [Textarea](/docs/components/textarea)-Komponente, sodass Sie jede Eigenschaft wie `icon`, `placeholder`, `autofocus` usw. übergeben können.

::component-example
---
collapse: true
name: 'chat-prompt-example'
---
::

::note
Der ChatPrompt verarbeitet die folgenden Ereignisse:

- Das Formular wird gesendet, wenn der Benutzer: kbd{value="enter"} drückt oder wenn der Benutzer auf die Schaltfläche zum Senden klickt. Setzen Sie stattdessen die `submit-on-enter`-Prop auf `false`, um mit: kbd{value="ctrl"} +: kbd{value="enter"} (oder: kbd{value="cmd"} +: kbd{value="enter"} auf macOS) zu senden, und erlauben Sie: kbd{value="enter"}, eine neue Zeile einzufügen.
- Der Textarea ist unscharf, wenn: kbd{value="escape"} gedrückt wird und ein `close`-Ereignis ausgibt.
::

### Variant Bearbeiten

Verwenden Sie die `variant`-prop, um den Stil der Eingabeaufforderung zu ändern. Standardmäßig zu `outline`.

::component-code
---
hide:
  - autofocus
props:
  variant: 'soft'
  autofocus: false
---
::

## Examples [Bearbeiten]

::tip{to="/docs/components/chat"}
Auf der Übersichtsseite **Chat** finden Sie Installationsanweisungen, Server-Setup und Anwendungsbeispiele.
::

### Mit Editor: badge{label="4.10+" class="align-text-top"}

Erstellen Sie die `#header`-, `#body`-und `#footer`-Steckplätze, um eine umfangreiche Eingabeaufforderung zu erstellen: Dateianhänge, ein [Editor](/docs/components/editor) mit `@`-Erwähnungen und `/`-Befehlen über [EditorMenu](/docs/components/editor-mention-menu) und einen Moduswähler.

::component-example
---
collapse: true
name: 'chat-prompt-editor-example'
class: 'justify-center'
---
::

::note
Der `#body`-Steckplatz ersetzt den internen Textarea und macht die `submit`-und `close`-Handler verfügbar, sodass Sie die Tastaturkürzel des Editors mit dem Formular verbinden können. Wenn ein Mention-Menü geöffnet ist, wählen Sie durch Drücken von: kbd{value="enter"} das hervorgehobene Element aus, anstatt es zu senden.
::

### A Homepage

Sie können es auch auf der homepage ihrer chat-schnittstelle verwenden.

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

## API (englisch)

### Props (nicht)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<textarea>` HTML-Attribute.
::

### Slots (englisch)

:component-slots

### Emits (nicht)

:component-emits

### Expose Bearbeiten

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typen|
| ---- | ---- |
| `textareaRef`{lang="ts-type"} | mehr| `Ref<HTMLTextAreaElement \| null>`{lang="ts-type"} | mehr|

## Theme Bearbeiten

:component-theme

## Changelog (deutsch)

:component-changelog

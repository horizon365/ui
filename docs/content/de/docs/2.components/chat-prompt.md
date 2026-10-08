---
title: ChatPrompt
description: 'Ein erweitertes Textarea zum Senden von Eingabeaufforderungen in KI-Chat-Schnittstellen.'
category: chat
links:
  - label: Textarea
    to: /docs/components/textarea
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPrompt.vue
---

@@@ph000@Verwendung

Die ChatPrompt-Komponente rendert ein `<form>`-Element und erweitert die Komponente [Textarea](/docs/components/textarea), so dass Sie jede Eigenschaft wie `icon`,`placeholder`,`autofocus` usw. übergeben können.

::component-example
---
Einsturz: wahr
Chat-Prompt-Beispiel:
---
::

::note
Der ChatPrompt verarbeitet die folgenden Ereignisse:

- Das Formular wird gesendet, wenn der Benutzer drückt: kbd{value="enter"} oder wenn der Benutzer auf die Schaltfläche Senden klickt. Setzen Sie stattdessen die `submit-on-enter` prop auf `false`, um mit: kbd{value="ctrl"}+: kbd{value="enter"}(oder: kbd{value="cmd"}+: kbd{value="enter"} auf macOS) zu senden, so dass: kbd{value="enter"} eine neue Zeile einfügen kann.
- Der Textarea ist verschwommen, wenn: kbd{value="escape"} gedrückt wird und ein `close`-Ereignis ausgibt.
::

@@ph021@@@Variantentyp

Verwenden Sie `variant` prop, um den Stil der Eingabeaufforderung zu ändern. Defaults zu `outline`.

::component-code
---
Hide:
  - autofocus
Props:
  Variante: „ weich "
  Autofokus: falsch
---
::

@@ph025@@Beispiele

::tip{to="/docs/components/chat"}
Auf der Übersichtsseite **Chat** finden Sie Installationsanweisungen, Server-Setup und Anwendungsbeispiele.
::

### Mit einem Editor: badge{label="4.10+" class="align-text-top"}

Erstellen Sie die Slots `#header`,`#body` und `#footer`, um eine umfangreiche Eingabeaufforderung zu erstellen:[Editor](/docs/components/editor) mit `@` Erwähnungen und `/` Befehle durch [EditorMentionMenu](/docs/components/editor-mention-menu), Ein Mode Selector.

::component-example
---
Einsturz: wahr
Name: 'chat-prompt-editor-example'(Chat-Eingabeaufforderungs-Editor-Beispiel)
Kategorie: „ Justizzentrum "
---
::

::note
Der `#body`-Slot ersetzt den internen Textarea und macht die `submit`-und `close`-Handler verfügbar, sodass Sie die Tastaturkürzel des Editors mit dem Formular verbinden können. Wenn ein Mention-Menü geöffnet ist, wählt das Drücken von: kbd{value="enter"} das hervorgehobene Element aus, anstatt es zu senden.
::

### As Homepage

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

@@800@bpb

@@@@@@@@@@@ph081@@props

Komponenten Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<textarea>` HTML-Attribute.
::

@@ph083@gmail.de

Die Komponenten-Slots

@@@@@@@@@@@emits

Komponenten emittieren

### Expose

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typ|
| ---- | ---- |
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|

@@ph090@gmail.de

Das Komponenten-Theme

@@ph091@@changelog @@changelog @ changelog

Das Component-Changelog

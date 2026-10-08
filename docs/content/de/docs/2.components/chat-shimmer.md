---
title: Chatschimmer
description: Zeigt einen Text Shimmer Animationseffekt an.
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatShimmer.vue
---

@@@ph000@@Verwendung

Die ChatShimmer-Komponente rendert ein Element mit einem animierten Schimmerverlauf über Text, der üblicherweise verwendet wird, um Streaming-oder Ladezustände in Chat-Schnittstellen anzuzeigen.

::note
Diese Komponente wird automatisch von den Komponenten [`ChatTool`](/docs/components/chat-tool) und [`ChatReasoning`](/docs/components/chat-reasoning) beim Streaming verwendet.
::

::tip
Die Animation wird automatisch deaktiviert, wenn der Benutzer eine reduzierte Bewegung bevorzugt, der Text wird stattdessen als statischer stummgeschalteter Text angezeigt.
::

@@ph011@@text (nicht)

Verwenden Sie `text` prop, um den Schimmertext festzulegen.

::component-code
---
Props:
  Text: "Nachdenken..."
---
::

### Dauer

Verwenden Sie die `duration` prop, um die Animationsgeschwindigkeit in Sekunden zu steuern.

::component-code
---
Props:
  Text: "Nachdenken..."
  Dauer: 4
---
::

@@ph015@spreizung

Verwenden Sie die `spread` prop, um die Breite des Schimmer-Glanzes zu steuern. Die tatsächliche Ausbreitung wird als `text.length * spread` in Pixeln berechnet.

::component-code
---
Props:
  Text: "Nachdenken..."
  Verbreitung: 5
---
::

@@ph018@@Beispiele

::tip{to="/docs/components/chat"}
Auf der Übersichtsseite **Chat** finden Sie Installationsanweisungen, Server-Setup und Anwendungsbeispiele.
::

## api

@@@ph022@@props

Komponenten Props

@@ph023@gmail.de

Das Komponenten-Theme

@@ph024@@changelog @ changelog

Das Component-Changelog

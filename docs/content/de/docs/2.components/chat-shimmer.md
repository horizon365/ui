---
title: Chatschimmer
description: Zeigt einen Text Shimmer Animationseffekt an.
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatShimmer.vue
---

## Bearbeiten

Die ChatShimmer-Komponente rendert ein Element mit einem animierten Schimmerverlauf über Text, der häufig verwendet wird, um Streaming-oder Ladezustände in Chat-Schnittstellen anzuzeigen.

::note
Diese Komponente wird automatisch von den Komponenten [`ChatTool`](/docs/components/chat-tool) und [`ChatReasoning`](xph09x) beim Streaming verwendet.
::

::tip
Die Animation wird automatisch deaktiviert, wenn der Benutzer eine reduzierte Bewegung bevorzugt, der Text wird stattdessen als statischer stummgeschalteter Text angezeigt.
::

### Text Übersetzung

Verwenden Sie die `text`-Prop, um den Schimmertext festzulegen.

::component-code
---
props:
  text: 'Thinking...'
---
::

### Duration Übersetzung

Verwenden Sie die `duration`-Prop, um die Animationsgeschwindigkeit in Sekunden zu steuern.

::component-code
---
props:
  text: 'Thinking...'
  duration: 4
---
::

### Spread (nicht)

Verwenden Sie die `spread` prop, um die Breite des Schimmer-Highlights zu steuern. Die tatsächliche Ausbreitung wird als `text.length * spread` in Pixel berechnet.

::component-code
---
props:
  text: 'Thinking...'
  spread: 5
---
::

## Examples (Beispiele)

::tip{to="/docs/components/chat"}
Auf der Übersichtsseite **Chat** finden Sie Installationsanweisungen, Server-Setup und Anwendungsbeispiele.
::

## API (englisch)

### Props Bearbeiten

:component-props

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog

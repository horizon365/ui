---
title: Chatreasoning Bearbeiten
description: Zeigen Sie eine zusammenklappbare KI Argumentation oder Denkprozess.
category: chat
links:
  - label: Kollapsfähig
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatReasoning.vue
---

## Bearbeiten

Die ChatReasoning-Komponente rendert einen zusammenklappbaren Block, der KI-Argumentation oder Denkinhalte anzeigt. Es öffnet sich automatisch während des Streamings und schließt sich danach automatisch.

::component-example
---
collapse: true
prettier: true
name: 'chat-reasoning-example'
class: 'h-[252px]'
---
::

::note{to="/docs/composables/use-scroll-shadow"}
Der Body-Inhalt verwendet das `useScrollShadow` composable, um beim Überlaufen Fade-Schatten anzuwenden.
::

### Text Übersetzung

Verwenden Sie die prop `text`, um den logischen Inhalt festzulegen. Der Text wird innerhalb des zusammenklappbaren Körpers angezeigt.

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

### Streaming (englisch)

Verwenden Sie die prop `streaming`, um aktives Denken anzuzeigen. Die Komponente öffnet sich automatisch, wenn das Streaming beginnt, und schließt sich automatisch, wenn es endet.

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
Verwenden Sie das Dienstprogramm `isPartStreaming` von `@nuxt/ui/utils/ai`, um zu bestimmen, ob ein Teil gerade gestreamt wird.
::

### Shimmer Bearbeiten

Beim Streamen verwendet das Trigger-Label die Komponente [`ChatShimmer`](/docs/components/chat-shimmer). Verwenden Sie die `shimmer`-Prop, um die `duration` und `spread` anzupassen.

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

### Icon (englisch)

Verwenden Sie die `icon`-Prop, um eine [Icon](/docs/components/icon)-Komponente neben dem Auslöser anzuzeigen.

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

### Chevron Bearbeiten

Verwenden Sie die `chevron`-Prop, um die Position des Chevron-Symbols zu ändern.

::note
Wenn `chevron` auf `leading` mit einem `icon` gesetzt ist, wechselt das Symbol mit dem Chevron auf Hover und wenn es geöffnet ist.
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

### Chevron Icon (englisch)

Verwenden Sie die `chevron-icon`-Prop, um den chevron [Icon](/docs/components/icon). Defaults auf `i-lucide-chevron-down`.

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
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.chevronDown` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.chevronDown` Schlüssel anpassen.
:::
::

## Examples [Bearbeiten]

::tip{to="/docs/components/chat"}
Auf der Übersichtsseite **Chat** finden Sie Installationsanweisungen, Server-Setup und Anwendungsbeispiele.
::

## API Bearbeiten

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

### Emits (nicht)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog

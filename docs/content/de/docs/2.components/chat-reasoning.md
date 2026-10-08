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

@@@ph000@@Verwendung

Die ChatReasoning-Komponente rendert einen zusammenklappbaren Block, der KI-Argumentation oder Denkinhalte anzeigt. Es öffnet sich automatisch während des Streamings und schließt sich danach automatisch.

::component-example
---
Einsturz: wahr
Schöner: wahr
Chat-Reasoning-Beispiel
Klasse: 'h-[252px]'(nicht vorhanden)
---
::

::note{to="/docs/composables/use-scroll-shadow"}
Der Body-Inhalt verwendet das `useScrollShadow` composable, um beim Überlaufen Fade-Schatten anzuwenden.
::

@@ph002@@text @ Übersetzung

Verwenden Sie `text` prop, um den logischen Inhalt festzulegen. Der Text wird im zusammenklappbaren Körper angezeigt.

::component-code
---
Schöner: wahr
Hide:
  @@004@Klasse
Props:
  Text: "Der Benutzer fragt nach Vue Komponenten..."
  Bezeichnung: W-60
---
::

@@ph005@streaming@ph005@@streaming@@@streaming@ph005@@@streaming@@streaming@@streaming@@streaming@streaming@streaming@streaming@@streaming@streaming@streaming@@streaming@streaming@@streaming@@streaming@@streaming@@streaming@@streaming@streaming@streaming@streaming@streaming@@streaming@streaming@@streaming@@@streaming-streaming@@@@@@streamingstreaming@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@streamingstreaming

Verwenden Sie `streaming` prop, um aktives Denken anzuzeigen. Die Komponente öffnet sich automatisch, wenn das Streaming beginnt, und schließt sich automatisch, wenn es endet.

::component-code
---
Schöner: wahr
Hide:
  @@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@class@c
Ignoriert:
  @@ph008@@text
Props:
  Streaming: Richtig
  Text: "Der Benutzer fragt nach Vue Komponenten..."
  Bezeichnung: W-60
---
::

::tip
Verwenden Sie das Utility `isPartStreaming` von `@nuxt/ui/utils/ai`, um festzustellen, ob ein Teil gerade gestreamt wird.
::

@@ph011@@schimmer

Beim Streamen verwendet das Trigger-Label die Komponente [`ChatShimmer`](/docs/components/chat-shimmer). Verwenden Sie die `shimmer` prop, um ihre `duration` und `spread`.

::component-code
---
Schöner: wahr
Hide:
  @@ph020@@class
Ignoriert:
  @@ph021@@text
Props:
  Streaming: Richtig
  Text: "Der Benutzer fragt nach Vue Komponenten..."
  Shimmer:
    Dauer: 2
    Verbreitung: 2
  Klasse: W-60
---
::

@@ph022@@@Ikonen-Seite

Verwenden Sie die `icon` prop, um eine [Icon](/docs/components/icon) Komponente neben dem Trigger anzuzeigen.

::component-code
---
Schöner: wahr
Hide:
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@classclass@class@classclass@classclassclassclass@classclassclass@class@class@class@class@class@class@class@class@class@class@class@c
Ignoriert:
  @@ph029@@text @@@ Übersetzung
Props:
  Bezeichnung: i-Lucide-Brain
  Text: "Der Benutzer fragt nach Vue Komponenten..."
  Klasse: W-60
---
::

@@ph030@@chvron

Verwenden Sie die `chevron` prop, um die Position des Chevron-Symbols zu ändern.

::note
Wenn `chevron` auf `leading` mit einem `icon` gesetzt ist, wechselt das Symbol mit dem Chevron auf Hover und wenn es geöffnet ist.
::

::component-code
---
Schöner: wahr
Hide:
  @@35@Klasse
Ignoriert:
  @@ph036@@text @ Übersetzung
Props:
  Chevron: Führung
  Bezeichnung: i-Lucide-Brain
  Text: "Der Benutzer fragt nach Vue Komponenten..."
  Klasse: W-60
---
::

@@ph037@@chevron Icon (nicht bekannt)

Verwenden Sie die `chevron-icon` prop, um den Chevron [Icon](/docs/components/icon). Defaults auf `i-lucide-chevron-down`.

::component-code
---
Schöner: wahr
Hide:
  @@@@@444@Klasse
Ignoriert:
  @@ph045@@text @ Übersetzung
Props:
  chevronIcon: 'i-lucide-arrow-down'(deutsch: 'i-lucide-arrow-down')
  Text: "Der Benutzer fragt nach Vue Komponenten..."
  Bezeichnung: W-60
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.chevronDown` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.chevronDown` key anpassen.
:::
::

@@ph050@@Beispiele

::tip{to="/docs/components/chat"}
Auf der Übersichtsseite **Chat** finden Sie Installationsanweisungen, Server-Setup und Anwendungsbeispiele.
::

@@@@@@553@@bpb

@@ph054@@gmail.de

Komponenten Props

@@ph055@gmail.de

Die Komponenten-Slots

@@ph056@@emits

Komponenten emittieren

@@ph057@gmail.de

Das Komponenten-Theme

@@ph058@@changelog @@@ changelog

Das Component-Changelog

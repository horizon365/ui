---
title: Das Chattool
description: Zeigt den Status eines zusammenklappbaren AI-Tools an.
category: chat
links:
  - label: Kollapsfähig
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatTool.vue
---

@@@ph000@Verwendung

Die ChatTool-Komponente rendert einen zusammenklappbaren Block, der den Aufrufstatus des KI-Tools anzeigt, z. B. „ Komponenten suchen "oder „ Dokumentation lesen". Wenn ein Standard-Slot bereitgestellt wird, wird er zusammenklappbar, um die Werkzeugausgabe anzuzeigen.

::component-example
---
Einsturz: wahr
Schöner: wahr
Name: 'Chat-Tool-Beispiel'
---
::

@@ph001@@text

Verwenden Sie `text` prop, um den Werkzeugstatustext festzulegen.

::component-code
---
Hide:
  @@003@Klasse
Props:
  Text: 'Gesuchte Komponenten'
  Bezeichnung: W-60
---
::

@@ph004@@suffix

Verwenden Sie die `suffix` prop, um sekundären Text nach dem Hauptlabel anzuzeigen.

::component-code
---
Hide:
  @@006@Klasse
Ignoriert:
  @@ph007@@text
Props:
  Text: 'Lesekomponente'
  Zitat von » Button «
  Klasse: W-60
---
::

@@ph008@streaming@streaming@ph008@@streaming@@streaming@@streaming@@streaming@streaming@@streaming@streaming@streaming@streaming@streaming@streaming@@streaming@streaming@@streaming@streaming@streaming@@streaming@@streaming@@@streaming@@@@@streaming@@@@@@@streaming@@@@@@@@@@@@@streamingstreaming@streaming@@@@streaming@@@@@@streaming@@@@@@@@@streaming@@@@@@@@@@@@@@@streaming@@@@@@@@@@@@@@@@@@@streaming@@@@@@@@@@@@@@@@@streaming@@@@@@@@@@@@@

Verwenden Sie die `streaming` prop, um anzuzeigen, dass das Tool aktiv ausgeführt wird.

::component-code
---
Hide:
  @@10@Klasse
Ignoriert:
  @@ph011@@text
Props:
  Streaming: Richtig
  Text: 'Komponenten suchen...'
  Klasse: W-60
---
::

::tip
Verwenden Sie das Dienstprogramm `isToolStreaming` von `@nuxt/ui/utils/ai`, um festzustellen, ob ein Werkzeugteil noch läuft. Es gibt `false` zurück, wenn das Werkzeug auf eine Benutzergenehmigung wartet.
::

@@ph015@@schimmernummer

Beim Streamen verwendet das Trigger-Label die Komponente [`ChatShimmer`](/docs/components/chat-shimmer). Verwenden Sie die `shimmer` prop, um die Komponenten `duration` und `spread` anzupassen.

::component-code
---
Schöner: wahr
Hide:
  @@ph024@gmail.de
Ignoriert:
  @@ph025@@text (nicht übersetzt)
Props:
  Streaming: Richtig
  Text: 'Komponenten suchen...'
  Shimmer:
    Dauer: 2
    Verbreitung: 2
  Bezeichnung: W-60
---
::

@@ph026@@@Ikonen-Seite

Verwenden Sie die `icon` prop, um eine [Icon](/docs/components/icon) Komponente neben dem Trigger anzuzeigen.

::component-code
---
Hide:
  @@@@@@@@@@@class
Ignoriert:
  @@ph033@@text @ Übersetzung
Props:
  I-Lucide-Suche
  Text: 'Gesuchte Komponenten'
  Bezeichnung: W-60
---
::

@@ph034@Aufladen

Verwenden Sie `loading` prop, um eine Ladeanzeige anzuzeigen.

::component-code
---
Hide:
  @@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@class@class@class@classclass@class@class@class@classclassclass@classclass@class@class
Ignoriert:
  @@ph038@@text @ Übersetzung
Props:
  Aufladung: true
  Text: 'Komponenten suchen...'
  Bezeichnung: W-60
---
::

@@ph039@@Icon-Anzeige

Verwenden Sie `loading-icon` prop, um das Ladesymbol anzupassen. Standardmäßig ist `i-lucide-loader-circle`.

::component-code
---
Hide:
  @@ph042@gmail.de
Ignoriert:
  @@ph043@@text
Props:
  Aufladung: true
  loadingIcon: 'i-lucide-loader'(englisch)
  Text: 'Komponenten suchen...'
  Bezeichnung: W-60
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.loading` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.loading` key anpassen.
:::
::

@@ph048@@chvrn

Verwenden Sie die `chevron` prop, um die Position des Chevron-Symbols zu ändern.

::note
Wenn `chevron` auf `leading` mit einem `icon` gesetzt ist, wechselt das Symbol mit dem Chevron auf Hover und wenn es geöffnet ist.
::

::component-code
---
Schöner: wahr
Hide:
  @@53@Klasse
Ignoriert:
  @@ph054@@text
Props:
  Chevron: Führung
  I-Lucide-Suche
  Text: 'Gesuchte Komponenten'
  Klasse: W-60
Die Slots:
  Default:|

    Tool für Output Content
---
::

@@ph055@@Chevron Icon (nicht bekannt)

Verwenden Sie die `chevron-icon` prop, um den Chevron [Icon](/docs/components/icon). Standardmäßig auf `i-lucide-chevron-down`.

::component-code
---
Schöner: wahr
Hide:
  @@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@c
Ignoriert:
  @@ph063@@text (nicht übersetzt)
Props:
  chevronIcon: 'i-lucide-arrow-down'(deutsch: 'i-lucide-arrow-down')
  Text: 'Gesuchte Komponenten'
  Klasse: W-60
Slots auf:
  Default:|

    Tool für Output Content
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

@@@ph068@@@Variant-Variante

Verwenden Sie `variant` prop, um den visuellen Stil zu ändern. Standardmäßig auf `inline`.

::component-code
---
Schöner: wahr
Hide:
  @@@@@@@@@@class
Ignoriert:
  @@ph072@@@text @@@ Übersetzung
  @@@@@@@@@@@icon.de
Props:
  Variante: Karte
  Text: 'Gesuchte Komponenten'
  I-Lucide-Suche
  Deutschland: Trailing
  Bezeichnung: W-60
Slots auf:
  Default:|

    Tool für Content Output
---
::

### Aktionen: badge{label="4.10+" class="align-text-top"}

Verwenden Sie `actions` prop, um eine Liste von [Button](/docs/components/button) unter dem Auslöser anzuzeigen, was für Tools nützlich ist, die vor der Ausführung eine Benutzerbestätigung benötigen.

::component-code
---
Schöner: wahr
Hide:
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclassclass@classclassclass@classclassclass@class@classclass@classclassclassclass@class@classclassclass
Ignoriert:
  @@@@@@@@82@@text
  @@@@@@@@@@@icon_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
  @@@@@@@@@@@@@@@@@@@@@@ph084@@@variant
  @@@@@@85@actions
Props:
  Aktionen:
    - label:'Genehmigen'
    - label:'Leugnen'
      Farbe: neutral
      Die Variante: Soft
  Text: "Terminalbefehl ausführen"
  Variante: Karte
  Bezeichnung: i-Lucide-Terminal
  Bezeichnung: W-60
Die Slots:
  Default:|

    $pnpm Run Lint Ubersetzungen
---
::

@@@@@@@88@@@Beispiele

::tip{to="/docs/components/chat"}
Auf der Übersichtsseite **Chat** finden Sie Installationsanweisungen, Server-Setup und Anwendungsbeispiele.
::

### Mit Genehmigungsfluss: badge{label="4.10+" class="align-text-top"}

Verwenden Sie `actions` prop, um einen Werkzeuggenehmigungsfluss mit dem [AI SDK]()) zu erstellen.

::component-example
---
Einsturz: wahr
Schöner: wahr
name: 'chat-tool-approval-example'(Chat-Tool-Approbationsbeispiel)
---
::

::tip
Verwenden Sie das Dienstprogramm `isToolApprovalPending` von `@nuxt/ui/utils/ai`, um eine ausstehende Genehmigung zu erkennen, und `isToolStreaming` gibt `false` in diesem Zustand zurück.

```vue
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'
import { lastAssistantMessageIsCompleteWithApprovalResponses } from 'ai'

const { messages, addToolApprovalResponse } = useChat({
  sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithApprovalResponses
})
</script>

<template>
  <UChatTool
    v-if="isToolUIPart(part)"
    :text="getToolName(part)"
    :streaming="isToolStreaming(part)"
    :actions="part.state === 'approval-requested' ? [
      { label: 'Approve', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: true }) },
      { label: 'Deny', color: 'neutral', variant: 'ghost', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: false }) }
    ] : undefined"
  />
</template>
```
::

@@126@bmw.de

@@@@@@@@@@@@@@ph127@@props

Komponenten-Props

### Spielautomaten

Die Komponenten-Slots

@@ph129@@emits

Komponenten emittieren

@@ph130@gmail.de @ Seite

Das Komponenten-Theme

@@ph131@@changelog @ changelog

Das Component-Changelog

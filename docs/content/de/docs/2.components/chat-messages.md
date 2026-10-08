---
title: Chat-Nachrichten
description: 'Zeigen Sie eine Liste von Chat-Nachrichten an, die für die nahtlose Zusammenarbeit mit dem Vercel AI SDK entwickelt wurden.'
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessages.vue
---

@@@ph000@@Verwendung

Die ChatMessages-Komponente zeigt eine Liste von [ChatMessage](/docs/components/chat-message) Komponenten an, wobei entweder der Standardslot oder die `messages` prop.

```vue {2,8}
<template>
  <UChatMessages>
    <UChatMessage
      v-for="(message, index) in messages"
      :key="index"
      v-bind="message"
    />
  </UChatMessages>
</template>
```

::callout{icon="i-lucide-rocket"}
Diese Komponente ist speziell für KI-Chatbots mit Funktionen wie:

- Initial scrollen Sie nach dem Laden nach unten ([`shouldScrollToBottom`]()).
- Kontinuierliches Scrollen nach unten, wenn neue Nachrichten ankommen ([`shouldAutoScroll`](#should-auto-scroll)).
- Ein "Auto scrollen"-Button erscheint, wenn Sie nach oben scrollen, so dass Benutzer zu den neuesten Nachrichten zurückspringen können ([`autoScroll`](#auto-scroll)).
- Eine Ladeanzeige wird angezeigt, während der Assistent verarbeitet ([`status`](#status)).
- Submitted messages werden nach oben im Viewport gescrollt und die Höhe der letzten User-Nachricht wird dynamisch angepasst.
::

@@ph042@@Nachrichten

Verwenden Sie `messages` prop, um eine Liste der Chat-Nachrichten anzuzeigen.

::component-code
---
Schöner: wahr
Außen:
  @@ph044@nachrichten
Ignoriert:
  @@ph045@nachrichten
Hide:
  - shouldScrollToBottom (auf Englisch)
Einsturz: wahr
Klasse: 'Überlauf-y-Auto'
Props:
  Nachrichten:
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'(auf Englisch)
      Rolle: Benutzer
      Teile:
        - type:'text'
          Text: "Hallo, wie geht es dir?"
    - id:'7a92b3c1-d5f8 - 4e76-b8a9 - 3c1e5fb2e0d8'(auf Englisch)
      Rolle: Assistent
      Teile:
        - type:'text'(Text)-
          Text: "Mir geht es gut, danke, dass Sie mich gefragt haben! Wie kann ich Ihnen heute helfen?"
    - id:'9c84d6a7 - 8b23 - 4f12-a1d5-e7f3b9c05e2a'(nicht bekannt)
      Rolle: Nutzer
      Teile:
        - type:'text'(Text) ist ein Text.
          Frage: "Wie ist das Wetter in Tokio?"
    - id:'b2e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'(auf Englisch)
      Rolle: Assistent
      Teile:
        - type:'text'(Text), oder: 'text'(Text)
          text:"Basierend auf den neuesten Daten erlebt Tokio derzeit sonniges Wetter mit Temperaturen um 24 ° C (75 ° F).
  shouldScrollToBottom: false (nicht vorhanden)
---
::

@@555 @ Der Staat

Verwenden Sie die `status` prop, um eine visuelle Anzeige anzuzeigen, wenn der Assistent verarbeitet.

::component-code
---
Schöner: wahr
Außen:
  @@ph057@nachrichten
Ignoriert:
  @@ph058@nachrichten
  @@@@@@599@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###############################################################################################################################################################
Hide:
  - shouldScrollToBottom (auf Englisch)
Klasse: 'Überlauf-y-Auto'
Props:
  Status: "eingereicht"
  Nachrichten:
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'(Deutsche Übersetzung)
      Rolle: Nutzer
      Teile:
        - type:'text'(Text) ist ein
          Text: "Hallo, wie geht es dir?"
  shouldScrollToBottom: false (nicht vorhanden)
---
::

::note
Hier ist das Detail der verschiedenen Zustände aus dem AI SDK `useChat` composable:

- `submitted`: Die Nachricht wurde an die API gesendet und wir warten auf den Start des Antwortstroms.
- `streaming`: Die Antwort wird aktiv von der API übertragen und empfängt Datenblöcke.
- `ready`: Die vollständige Antwort wurde empfangen und verarbeitet; eine neue Benutzernachricht kann eingereicht werden.
- `error`: Während der API-Anfrage ist ein Fehler aufgetreten, der den erfolgreichen Abschluss verhindert.
::

@@ph072@@Benutzer

Verwenden Sie `user` prop, um die [ChatMessage](/docs/components/chat-message) props für `user` messages zu ändern.

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`variant: 'soft'``variant: 'soft'``variant: 'soft'`{lang="ts-type"}

::component-code
---
Schöner: wahr
Außen:
  @@@@@@85@Nachrichten
Ignoriert:
  @@@@@@86@@Nachrichten
  - avatar.src
  - avatar.loading (nicht verfügbar)
Hide :
  @@ph089@@suldScrollToBottom
Einsturz : wahr
Items :
  user.variant:
    @@ph090@@gmail.de
    @@ph091@@outline (nicht bekannt)
    @@ph092@untenstehend
    @@ph093@gmail.de
    @@ph094@nackt
  user.side:
    @@@@@@95@left
    @@@@@@96@@1996@1996@1996@1996@1996@1996@1996@19996@1996@@19996@19996@19996@@1996@@1996@@1996@@1996@@19996@@19996@@@199999999999999999999999999999999999999999999990000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Klasse : ' Überlauf-y - Auto '
Props :
  Benutzer :
    Seite : Left
    Variante : solide
    Avatare sind :
      src :https://github.com/benjamincanac.png
      Aufladung : Lazy
  Nachrichten :
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'(auf Englisch)
      Rolle: Nutzer
      Teile:
        - type:'text'(Text) ist ein Text.
          Text: "Hallo, wie geht es dir?"
    - id:'7a92b3c1-d5f8 - 4e76-b8a9 - 3c1e5fb2e0d8'(auf Englisch)
      Rolle: Assistent
      Teile:
        - type:'text'(auf Englisch)
          Text: "Mir geht es gut, danke, dass Sie mich gefragt haben! Wie kann ich Ihnen heute helfen?"
    - id:'9c84d6a7 - 8b23 - 4f12-a1d5-e7f3b9c05e2a'(nicht bekannt)
      Rolle: Nutzer
      Teile:
        - type:'text'
          Frage: "Wie ist das Wetter in Tokio?"
    - id:'b2e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'(auf Englisch)
      Rolle: Assistent
      Teile:
        - type:'text'(Text auf Englisch)
          text:"Basierend auf den neuesten Daten erlebt Tokio derzeit sonniges Wetter mit Temperaturen um 24 ° C (75 ° F).
  shouldScrollToBottom: false (nicht vorhanden)
---
::

@105@Hilfeleistung

Verwenden Sie `assistant` prop, um die [ChatMessage](/docs/components/chat-message) props für `assistant` messages zu ändern.

`side: 'left'``side: 'left'`PH1114 @
`variant: 'naked'``variant: 'naked'`PH1117 @

::component-code
---
Schöner: wahr
Außen:
  @@118@Nachrichten
Ignoriert:
  @@ph119@Nachrichten
  @@ph120@@avatar.icon (nicht bekannt)
  - assistant.actions
Hide:
  - shouldScrollToBottom (auf Englisch)
Einsturz: wahr
Items:
  assistant.variant:
    @@123@Einmannsstraße
    - outline (@ Übersicht)
    - unterschwellig
    - swiss
    @@ph127@nackt
  assistant.side:
    @@@@@@@128@left
    @@@@@@129@129@129@129@129@129@129@12@129@12@129@12@129@12@@129@12@12@129@12@@129@12@12@129@12@12@12@129@12@12@@@12912@@@1212@@@121212@@@@@@@@@@@129121212@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@120012221212121212
Klasse: 'Überlauf-y-Auto'
Props:
  Assistenz:
    Seite: Left
    Beschreibung: Outline
    Avatare sind:
      I-Lucide-Bot hinzufügen
    Aktionen:
      - label:'In die Zwischenablage kopieren'
        Icon: I-Lucide-Copy (englisch)
  Nachrichten:
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'(Deutsche Übersetzung)
      Rolle: Nutzer
      Teile:
        - type:'text'(Text auf Englisch)
          Text: "Hallo, wie geht es dir?"
    - id:'7a92b3c1-d5f8 - 4e76-b8a9 - 3c1e5fb2e0d8'
      Rolle: Assistent
      Teile:
        - type:'text'(Text), oder 'text'(Text)
          Text: "Mir geht es gut, danke, dass Sie mich gefragt haben! Wie kann ich Ihnen heute helfen?"
    - id:'9c84d6a7 - 8b23 - 4f12-a1d5-e7f3b9c05e2a'(nicht bekannt)
      Rolle: Nutzer
      Teile:
        - type:'text'(Text) ist ein
          Frage: "Wie ist das Wetter in Tokio?"
    - id:'b2e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'(auf Englisch)
      Rolle: Assistent
      Teile:
        - type:'text'(Text) ist ein
          Text:"Basierend auf den neuesten Daten erlebt Tokio derzeit sonniges Wetter mit Temperaturen um 24 ° C (75 ° F).
  shouldScrollToBottom: false (nicht vorhanden)
---
::

### Auto-Scroll

Verwenden Sie `auto-scroll` prop, um die Schaltfläche zum automatischen Scrollen (mit dem Wert `false`) anzupassen oder auszublenden, die angezeigt wird, wenn Sie zum oberen Rand des Chats scrollen.

`color: 'neutral'`PH1444 @@
`variant: 'outline'`PH1466@@@@@@@@@@@@PH1466{lang="ts-type"}

Sie können jede Eigenschaft aus der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-code
---
Schöner: wahr
Einsturz: wahr
Außen:
  @@ph152@nachrichten
Ignoriert:
  @@ph153@nachrichten
  - autoScroll.color
  - autoScroll.variant
  - shouldScrollToBottom (auf Englisch)
Klasse: 'Überlauf-y-auto max-h-[341px] static'
Props:
  Autoscroll:
    Farbe: neutral
    Beschreibung: Outline
  shouldScrollToBottom: falsch
  Nachrichten:
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'(Deutsche Übersetzung)
      Rolle: Nutzer
      Teile:
        - type:'text'(Text) ist ein
          Text: "Hallo, wie geht es dir?"
    - id:'7a92b3c1-d5f8 - 4e76-b8a9 - 3c1e5fb2e0d8'(auf Englisch)
      Rolle: Assistent
      Teile:
        - type:'text'(Text auf Englisch)
          Text: "Mir geht es gut, danke, dass Sie mich gefragt haben! Wie kann ich Ihnen heute helfen?"
    - id:'9c84d6a7 - 8b23 - 4f12-a1d5-e7f3b9c05e2a'(nicht bekannt)
      Rolle: Benutzer
      Teile:
        - type:'text'(auf Englisch)
          Frage: "Wie ist das Wetter in Tokio?"
    - id:'b2e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'(auf Englisch)
      Rolle: Assistent
      Teile:
        - type:'text'(Text auf Englisch)
          Text: Basierend auf den neuesten Daten erlebt Tokio derzeit sonniges Wetter mit Temperaturen um 24 ° C (75 ° F). Es ist ein schöner Tag mit klarem Himmel. Die Prognose für den Rest der Woche zeigt eine leichte Regenwahrscheinlichkeit am Donnerstag, wobei die Temperaturen bis zum Wochenende allmählich auf 28 ° C steigen. Die Luftfeuchtigkeit ist mit etwa 65% moderat. und Windgeschwindigkeiten sind Licht bei 8 km/h aus dem Südosten. Die Luftqualität ist gut mit einem Index von 42. Der UV-Index ist hoch bei 7, so ist es empfehlenswert, Sonnencreme zu tragen, wenn Sie planen, Zeit im Freien zu verbringen. Sonnenaufgang war um 5:24 Uhr und Sonnenuntergang wird um 6:00 Uhr: 48 pm, was tokio heute ungefähr 13 stunden und 24 minuten tageslicht gibt der mond befindet sich derzeit in seiner zunehmenden gibbous-phase.
    - id:'c3e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'(auf Englisch)
      Rolle: Benutzer
      Teile:
        - type:'text'(Text auf Englisch)
          Text: 'Können Sie einige beliebte Touristenattraktionen in Kyoto empfehlen?'
    - id:'d4f5g8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'(auf Englisch)
      Rolle: Assistent
      Teile:
        - type:'text'(auf Englisch)
          Text: Kyoto ist bekannt für seine schönen Tempel, traditionellen Teehäuser und Gärten. Einige beliebte Attraktionen sind Kinkaku-ji.(Golden Pavilion) mit seiner atemberaubenden Blattgold-Fassade, die sich im Spiegelteich spiegelt, Fushimi Inari Schrein mit seinen Tausenden von zinnoberroten Torii-Toren, die sich den Berghang hinaufwinden, Arashiyama Bamboo Grove, wo hoch aufragende Stiele eine jenseitige Atmosphäre schaffen, Der Kiyomizu-dera-Tempel thront auf einem Hügel und bietet einen Panoramablick auf die Stadt und das historische Viertel Gion, in dem Sie Geishas sehen können, die zu abendlichen Terminen durch enge, gepflasterte Straßen mit traditionellen Holzmachiyahäusern eilen.
---
::

### Auto-Scroll-Icon

Verwenden Sie die `auto-scroll-icon` prop, um die automatische Scroll-Taste [Icon](/docs/components/icon). Standardmäßig auf `i-lucide-arrow-down`.

::component-code
---
Schöner: wahr
Einsturz: wahr
Außen:
  @@@@@@@176@Nachrichten
Ignoriert:
  @@@@@@@177@Nachrichten
  - autoScroll.color
  - autoScroll.variant
  - shouldScrollToBottom (auf Englisch)
Klasse: 'Überlauf-y-auto max-h-[341px] static'
Props:
  autoScrollIcon: 'i-lucide-chevron-down'(I-lucide-chevron-down)(auf Englisch)
  shouldScrollToBottom: falsch
  Botschaften:
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'(Deutsche Übersetzung)
      Rolle: Nutzer
      Teile:
        - type:'text'(Text auf Englisch)
          Text: "Hallo, wie geht es dir?"
    - id:'7a92b3c1-d5f8 - 4e76-b8a9 - 3c1e5fb2e0d8'
      Rolle: Assistent
      Teile:
        - type:'text'(auf Englisch)
          Text: "Mir geht es gut, danke, dass Sie mich gefragt haben! Wie kann ich Ihnen heute helfen?"
    - id:'9c84d6a7 - 8b23 - 4f12-a1d5-e7f3b9c05e2a'(nicht bekannt)
      Rolle: Benutzer
      Teile:
        - type:'text'(auf Englisch)
          Frage: "Wie ist das Wetter in Tokio?"
    - id:'b2e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'(auf Englisch)
      Rolle: Assistent
      Teile:
        - type:'text'(auf Englisch)
          Text: Basierend auf den neuesten Daten erlebt Tokio derzeit sonniges Wetter mit Temperaturen um 24 ° C (75 ° F). Es ist ein schöner Tag mit klarem Himmel. Die Prognose für den Rest der Woche zeigt eine leichte Regenwahrscheinlichkeit am Donnerstag, wobei die Temperaturen bis zum Wochenende allmählich auf 28 ° C steigen. Die Luftfeuchtigkeit ist mit etwa 65% moderat. und Windgeschwindigkeiten sind Licht bei 8 km/h aus dem Südosten. Die Luftqualität ist gut mit einem Index von 42. Der UV-Index ist hoch bei 7, so ist es empfehlenswert, Sonnencreme zu tragen, wenn Sie planen, Zeit im Freien zu verbringen. Sonnenaufgang war um 5:24 Uhr und Sonnenuntergang wird um 6:00 Uhr: 48 pm, was tokio heute ungefähr 13 stunden und 24 minuten tageslicht gibt der mond befindet sich derzeit in seiner zunehmenden gibbous-phase.
    - id:'c3e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'(- id:'c3e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4')
      Rolle: Nutzer
      Teile:
        - type:'text'(Text auf Englisch)
          Text: 'Können Sie einige beliebte Touristenattraktionen in Kyoto empfehlen?'
    - id:'d4f5g8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'(auf Englisch)
      Rolle: Assistent
      Teile:
        - type:'text'(auf Englisch)
          Text: Kyoto ist bekannt für seine schönen Tempel, traditionellen Teehäuser und Gärten. Zu den beliebten Attraktionen gehören Kinkaku-ji (Golden Pavilion) mit seiner atemberaubenden Blattgold-Fassade, die sich im Spiegelteich spiegelt, Fushimi Inari Schrein mit seinen Tausenden von zinnoberroten Torii-Toren, die sich den Berghang hinauf winden, Arashiyama Bamboo Grove, wo hoch aufragende Stiele eine jenseitige Atmosphäre schaffen, Der Kiyomizu-dera-Tempel thront auf einem Hügel und bietet einen Panoramablick auf die Stadt und das historische Viertel Gion, in dem Sie Geishas sehen können, die zu abendlichen Terminen durch enge, gepflasterte Straßen mit traditionellen Holzmachiyahäusern eilen.
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.arrowDown` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.arrowDown` key anpassen.
:::
::

### Should Auto Scroll (sollte automatisch scrollen)

Verwenden Sie `should-auto-scroll` prop, um kontinuierliches automatisches Scrollen zu aktivieren/deaktivieren, während Nachrichten gestreamt werden.

```vue
<template>
  <UChatMessages :messages="messages" should-auto-scroll />
</template>
```

### Should Scroll To Bottom (sollte nach unten scrollen)

Verwenden Sie `should-scroll-to-bottom` prop, um das automatische Scrollen am unteren Rand zu aktivieren/deaktivieren, wenn die Komponente eingehängt ist.

```vue
<template>
  <UChatMessages :messages="messages" :should-scroll-to-bottom="false" />
</template>
```

## Beispiele

::tip{to="/docs/components/chat"}
Auf der Übersichtsseite **Chat** finden Sie Installationsanweisungen, Server-Setup und Anwendungsbeispiele.
::

### Mit Indikator-Slot

Verwenden Sie den `#indicator`-Steckplatz, um die Ladeanzeige mit einem [`ChatShimmer`](/docs/components/chat-shimmer) Effekt anzupassen.

::component-example
---
name: 'chat-messages-indikator-slot-example'(Chat-Nachrichten-Indikator-Slot-Beispiel)
Klasse: 'Überlauf-y-Auto'
Einsturz: wahr
---
::

@@223@btw

@@@@@@@@@@ph224@Props

Komponenten Props

@@ph225@gmail.de

Die Komponenten-Slots

::tip
Sie können alle Steckplätze der [`ChatMessage`](/docs/components/chat-message#slots) Komponente in ChatMessages verwenden, sie werden automatisch weitergeleitet, so dass Sie individuelle Nachrichten anpassen können, wenn Sie die `messages` prop verwenden.

```vue{7-15}
<script setup lang="ts">
import { isTextUIPart } from 'ai'
</script>

<template>
  <UChatMessages :messages="messages" :status="status">
    <template #content="{ message }">
      <template
        v-for="(part, index) in message.parts"
        :key="`${message.id}-${part.type}-${index}`"
      >
        <p v-if="isTextUIPart(part)" class="whitespace-pre-wrap">
          {{ part.text }}
        </p>
      </template>
    </template>
  </UChatMessages>
</template>
```
::

### Aufstellen

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typen|
| ---- | ---- |
| {lang="ts-type"}| {lang="ts-type"}|

@@ph257@@gmail.de

Das Komponenten-Theme

@@ph258@@changelog @@ changelog

Das Component-Changelog

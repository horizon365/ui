---
title: Chatmessage
description: 'Anzeige einer Chat-Nachricht mit Symbol, Avatar und Aktionen.'
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessage.vue
---

@@@ph000@Verwendung

Die ChatMessage-Komponente rendert ein `<article>`-Element für eine `user`-oder `assistant`-Chat-Nachricht.

::code-preview

::u-chat-message
---
Teile:
  - type:'text'(auf Englisch)
    ID: „ 1 "
    Text: "Hallo! Erzähl mir mehr über das Erstellen von KI-Chatbots mit Nuxt UI."
Seite: "Richtig"
Variante: „ weich "
Rolle: "Benutzer"
ID: „ 1 "
Avatare sind:
  src: 'https://github.com/benjamincanac.png'
  Aufladung: Lazy
---
::

::

::tip{to="/docs/components/chat-messages"}
Verwenden Sie die Komponente `ChatMessages`, um eine Liste der Chatnachrichten anzuzeigen.
::

@@ph006@Teile

Verwenden Sie `parts` prop, um den Nachrichteninhalt im AI-SDK-Format anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph008@gmail.de
  @@ph009@@gmail.de
  @@ph010@@@gmail.de
Props:
  Teile:
    - type:'text'
      ID: „ 1 "
      Text: "Hallo! Erzähl mir mehr über das Erstellen von KI-Chatbots mit Nuxt UI."
  Rolle: "Benutzer"
  ID: „ 1 "
---
::

::note
Das `parts` prop ist das empfohlene Format für das AI SDK. Jeder Teil hat ein `type`(z.B.'text') und den entsprechenden Inhalt. Die ChatMessage-Komponente unterstützt auch das veraltete @@@@ prop für die Abwärtskompatibilität.
::

@@ph015 @ Seite

Verwenden Sie `side` prop, um die Nachricht auf der linken oder rechten Seite anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph017@parts
  @@ph018@@gmail.de
  @@ph019@@gmail.de
Props:
  Seite: "Richtig"
  Teile:
    - type:'text' und 'text'
      ID: „ 1 "
      Text: "Hallo! Erzähl mir mehr über das Erstellen von KI-Chatbots mit Nuxt UI."
  Rolle: "Benutzer"
  ID: „ 1 "
---
::

::note
Bei Verwendung der Komponente [`ChatMessages`](/docs/components/chat-messages) wird die `side` prop auf `left` für `assistant`-Nachrichten und `right` für `user`-Nachrichten eingestellt.
::

@@ph031@@Variant-Variante

Verwenden Sie `variant` prop, um den Stil der Nachricht zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph033@teile
  @@ph034@gmail.de
  @@ph035@@gmail.de
Props:
  Variante: „ weich "
  Teile:
    - type:'text'(Text) ist ein
      ID: „ 1 "
      Text: "Hallo! Erzähl mir mehr über das Erstellen von KI-Chatbots mit Nuxt UI."
  Rolle: "Benutzer"
  ID: „ 1 "
---
::

::note
Bei Verwendung der Komponente [`ChatMessages`]() wird die `variant` prop auf `naked` für `assistant`-Nachrichten und `soft` für `user`-Nachrichten eingestellt.
::

@@ph047@@@ph048@@@ph048@@@@ph048@@@@@ph048@@@@@ph048: badge@ph048 @@

Verwenden Sie die `color` prop, um die Farbe der Nachricht zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@@ph050@teile
  @@ph051@@gmail.de
  @@ph052@@gmail.de
Props:
  Variante: „ weich "
  Farbe: "Primär"
  Teile:
    - type:'text'(Text), oder 'text'(Text)
      ID: „ 1 "
      Text: "Hallo! Erzähl mir mehr über das Erstellen von KI-Chatbots mit Nuxt UI."
  Rolle: "Benutzer"
  ID: „ 1 "
---
::

@@ph054@@gmail.de

Verwenden Sie die `icon` prop, um eine [Icon](/docs/components/icon) Komponente neben der Nachricht anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph060@teile
  @@ph061@Seite
  @@ph062@@variantenreich
  @@ph063@@gmail.de
  @@@@@@@@@@@ph064@@id
Props:
  I-Lucide-Benutzer
  Variante: „ weich "
  Seite: "Richtig"
  Teile:
    - type:'text'(auf Englisch)
      ID: „ 1 "
      Text: "Hallo! Erzähl mir mehr über das Erstellen von KI-Chatbots mit Nuxt UI."
  Rolle: "Benutzer"
  ID: „ 1 "
---
::

@@@@@@avatar_066@@@avatar_0666@@@@avatar_0666@@@@@@avatar_0666@@@@@@@avatar_0666@@@@@@avatar_066@@@@avatar_066@@@@avatar_066@@@@avatar_066@@@@@@avatar_0066@@@@@@@@@avatar_0000006@@@@@@@avatar_0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Verwenden Sie die `avatar` prop, um eine [Avatar](/docs/components/avatar) Komponente neben der Nachricht anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph072@teile
  @@@@@@@@@ph073@seite
  @@ph074@variantenreich
  @@ph075@gmail.de
  @@@@@@@@@@@ph076@@@id
  - avatar.loading (auf Englisch)
Props:
  Avatare sind:
    src: 'https://github.com/benjamincanac.png'
    Aufladung: Lazy
  Variante: „ weich "
  Seite: "Richtig"
  Teile:
    - type:'text'(auf Englisch)
      ID: „ 1 "
      Text: "Hallo! Erzähl mir mehr über das Erstellen von KI-Chatbots mit Nuxt UI."
  Rolle: "Benutzer"
  ID: „ 1 "
---
::

Sie können auch die `avatar.icon` prop verwenden, um ein Symbol als Avatar anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph080@@teile
  @@@@@@81@1@1981
  @@@@@@@@@@@@ph082@@id
Props:
  Avatare sind:
    I-Lucide-Bot hinzufügen
  Teile:
    - type:'text'(auf Englisch)
      ID: „ 1 "
      text: Nuxt UI bietet mehrere Funktionen zum Erstellen von KI-Chatbots, einschließlich der Komponenten ChatMessage, ChatMessages und ChatPrompt. Best Practices umfassen die Verwendung der Chat-Klasse aus dem AI SDK, die Implementierung des richtigen Nachrichten-Stylings mit Varianten und die Verwendung der integrierten Aktionen für Nachrichteninteraktionen. Die Komponenten sind vollständig anpassbar mit Theming-Unterstützung und responsivem Design.
  Funktion: „ Assistent "
  ID: „ 1 "
---
::

@@@@@@@@@84@Aktion

Verwenden Sie `actions` prop, um Aktionen unterhalb der Nachricht anzuzeigen, die angezeigt werden, wenn Sie den Mauszeiger über die Nachricht bewegen.

::component-code
---
Schöner: wahr
Außen:
  @@@@@@@@@86@actions
Externe Typen:
  @@@ph087@@buttonprops [Bearbeiten | Quelltext bearbeiten]
Ignoriert:
  @@@@@888@88@88@88@888@88@88@@888@@88@888@@88@88@88@@888@8@888@88@@888@88@88@88@88@88@88@Teile
  @@@@@@@@@89@@actions
  @@ph090@@gmail.de
  @@@@@@@@@@@ph091@@id
Props:
  Aktionen:
    - label:'In die Zwischenablage kopieren'
      Icon: I-Lucide-Copy (englisch)
  Teile:
    - type:'text'(auf Englisch)
      ID: „ 1 "
      text: Nuxt UI bietet mehrere Funktionen zum Erstellen von KI-Chatbots, einschließlich der Komponenten ChatMessage, ChatMessages und ChatPrompt. Best Practices umfassen die Verwendung der Chat-Klasse aus dem AI SDK, die Implementierung des richtigen Nachrichten-Stylings mit Varianten und die Verwendung der integrierten Aktionen für Nachrichteninteraktionen. Die Komponenten sind vollständig anpassbar mit Theming-Unterstützung und responsivem Design.
  Rolle: "Benutzer"
  ID: „ 1 "
---
::

@@ph094@@Beispiele

::tip{to="/docs/components/chat"}
Auf der Übersichtsseite **Chat** finden Sie Installationsanweisungen, Server-Setup und Anwendungsbeispiele.
::

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@api

@@@@@@@@@@@@ph098@@props

Komponenten Props

@@ph099@@gmail.de

Die Komponenten-Slots

@@ph100@gmail.de

Das Komponenten-Theme

@@ph101@@changelog @@@ changelog @@@ changelog @ changelog @ changelog @ changelog

Das Component-Changelog

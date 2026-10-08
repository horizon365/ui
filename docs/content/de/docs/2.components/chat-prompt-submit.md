---
title: ChatPromptSubmit
description: 'Eine Schaltfläche zum Senden von Chat-Aufforderungen mit automatischer Statusbehandlung.'
category: chat
links:
  - label: Der Button
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPromptSubmit.vue
---

@@@ph000@@Verwendung

Die ChatPromptSubmit-Komponente wird innerhalb der Komponente [ChatPrompt](/docs/components/chat-prompt) verwendet, um die Eingabeaufforderung zu senden.

Es erweitert die Komponente [Button](/docs/components/button), so dass Sie jede Eigenschaft wie `color`,`variant`,`size` usw. übergeben können.

::code-preview

#DefaultBearbeiten
: u-chat-prompt-submit

#Der Code
```vue
<template>
  <UChatPrompt>
    <UChatPromptSubmit />
  </UChatPrompt>
</template>
```
::

::note
Sie können es auch innerhalb des `footer`-Schlitzes der Komponente [`ChatPrompt`](/docs/components/chat-prompt) verwenden.
::

@@ph026 @ bereit

Wenn der Status `ready`{lang="ts-type"} ist, verwenden Sie die Props `color`,`variant` und `icon`, um den Button anzupassen.

@@@@@@@@@@@@@@@@@@@@@@PH0333@@@@@@@@@@@@@@PH03333@@@@@@@@@@@@@@@PH0334{lang="ts-type"}{lang="ts-type"}PH03334@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`variant="solid"``variant="solid"``variant="solid"`{lang="ts-type"}
`icon="i-lucide-arrow-up"`{lang="ts-type"}

::component-code
---
Schöner: wahr
Items:
  Farbe:
    - vorallem
    @@ph042@zweitrangig
    @@ph043@Erfolg
    @@ph044@@warning
    @@ph045@Fehler
    @@ph046@neutral.de
  Varianten:
    @@ph047@@gmail.de
    @@ph048@@aufräumen
    @@ph049@gmail.de
    @@@ph050@unterschwellig
    @@ph051@ghost@ghost@ghost.com
Props:
  Farbe: "Primär"
  Variante: "solide"
  I-Lucide-Arrow-Up (englisch)
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.arrowUp` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.arrowUp` Schlüssel anpassen.
:::
::

@@@ph056@einreichung@

Wenn der Status `submitted`{lang="ts-type"} ist, verwenden Sie die Props `submitted-color`,`submitted-variant` und `submitted-icon`, um den Button anzupassen.

`submittedColor="neutral"``submittedColor="neutral"``submittedColor="neutral"`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH0666@@@@@@@@@@@@@PH0667 @@
`submittedIcon="i-lucide-square"``submittedIcon="i-lucide-square"`{lang="ts-type"}

::note
Das `stop`-Ereignis wird ausgegeben, wenn der Benutzer auf den Button klickt.
::

::component-code
---
Schöner: wahr
Ignoriert:
  @@@@@@@@@@@@@@@@ph072@@status
Items:
  Unterschriftenfarbe:
    - vorallem
    @@ph074@zweitrangig
    @@ph075@@Erfolg
    @@ph076@@warning
    @@@ph077@Fehler
    @@@ph078@neutral.de
  Untergebener Variant:
    @@ph079@@gmail.de
    @@@@@@@@@@@ph080@@outline
    @@@@@@@@@@@ph081@@soft
    @@ph082@untenstehend
    @@ph083@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost.com
Props:
  Farbe: "Neutral"
  Untertitel: „ Subtil "
  Bildnachweis: i-Lucide-Square
  Status: "eingereicht"
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.stop` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.stop` key anpassen.
:::
::

### streaming

Wenn der Status `streaming`{lang="ts-type"} ist, verwenden Sie die Props `streaming-color`,`streaming-variant` und `streaming-icon`, um den Button anzupassen.

`streamingColor="neutral"``streamingColor="neutral"``streamingColor="neutral"`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`streamingIcon="i-lucide-square"`PH10101@@@@@@PH10102 @

::note
Das `stop`-Ereignis wird ausgegeben, wenn der Benutzer auf den Button klickt.
::

::component-code
---
Schöner: wahr
Ignoriert:
  @@@@@@@@104@status
Items:
  Streaming-Farben:
    @105@1
    @@106@secondary
    @@107@Erfolg
    @@108@warning
    @@ph109@Fehler
    @@110@Neutral
  Streaming-Möglichkeiten:
    @@111@1111@11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    - outline (@ Übersicht)
    - swiss
    - unterschwellig
    @@ph115@ghost.de
Props:
  Farbe: 'neutral'
  Schlagwörter:"subtiler"
  streamingIcon: 'i-lucide-square'(auf Englisch)
  Kategorie: „ Streaming "
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.stop` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.stop` key anpassen.
:::
::

@@ph120@@Fehler

Wenn der Status `error`{lang="ts-type"} ist, verwenden Sie die Props `error-color`,`error-variant` und `error-icon`, um den Button. Defaults anzupassen:

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###############################################################################################################################
`errorVariant="soft"``errorVariant="soft"``errorVariant="soft"`PH13131 @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH13333@@@@@@@@@@@PH13334@@@@@@@@@PH1334.

::note
Das `reload`-Ereignis wird ausgegeben, wenn der Benutzer auf den Button klickt.
::

::component-code
---
Schöner: wahr
Ignoriert:
  @@@@@@136@136@136@136@136@136@136@136@@136@136@@136@@136@@136@136@136@136@136@136@136@136@136@@136@136@@136@136@@@000000@@00000@@@00000
Items:
  Fehlerfarbe:
    @137@1
    @@138@138@138@138@138@138@138@138@138@138@138@138@138@@138@138@138@138@138@138@@138@@138@@138@138@138@138@138@138@@@@@@1338@@@@@138@138@@@@@@@138@@@@@@@@@@@@@@@@@1338@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @139@@Erfolg
    @@140@warning
    @@141@Fehler
    @@142@Neutral
  Fehlervariante:
    @@143@Einmannsstraße
    @@144 @ Übersicht
    @@ph145@gmail.de
    @146@Unterföhring
    @@ph147@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost
Props:
  Fehler: "Fehler"
  Fehler: "Soft"
  errorIcon: 'i-lucide-rotate-ccw'(I-lucide-rotate-ccw)(I-lucide-rotate-ccw)
  Status: "Fehler"
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.reload` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.reload` key anpassen.
:::
::

## Beispiele

::tip{to="/docs/components/chat"}
Auf der Übersichtsseite **Chat** finden Sie Installationsanweisungen, Server-Setup und Anwendungsbeispiele.
::

@155@btw

### Props

Komponenten Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>` HTML-Attribute.
::

### Spielautomaten

Die Komponenten-Slots

@@ph159@@emits

Komponenten emittieren

@@ph160@gmail.de

Das Komponenten-Theme

## Changelog (Deutsche Übersetzung)

Das Component-Changelog

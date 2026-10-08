---
title: Kommandobrücke
description: Eine Befehlspalette mit Volltextsuche, die von Fuse.js für effizientes Fuzzy-Matching unterstützt wird.
category: navigation
keywords:
  - command menu
  - cmdk
  - spotlight
  - global search
links:
  - label: Fuse.js
    icon: i-custom-fuse-js
    to: https://fusejs.io/
    target: _blank
  - label: Listbox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/CommandPalette.vue
---

@@@ph000@Verwendung

Verwenden Sie die Direktive `v-model`, um den Wert der CommandPalette zu steuern, oder die Direktive `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
Einsturz: wahr
Hide:
  - autofocus
Ignoriert:
  @@ph004@@gmail.de
  - modellWert
  @@006@Klasse
Außen:
  @@ph007@@gmail.de
  - modellWert
Externe Personen:
  - CommandPaletteGroup [Bearbeiten | Quelltext bearbeiten]
Klasse: '! p-0'
Props:
  Modellwert: {}
  Autofokus: false
  Gruppen:
    - id:'Benutzer'
      Label: "Benutzer"
      Items:
        - label:'Benjamin Canac'(auf Englisch)
          Zitat von » Benjamincanac «
          Avatare sind:
            src: 'https://github.com/benjamincanac.png'
            Aufladung: Lazy
        - label:'Hugo Richard'(auf Englisch)
          Suffix: 'HugoRCD'(Englisch)
          Avatare sind:
            src: 'https://github.com/HugoRCD.png'
            Aufladung: Lazy
        - label:'Sébastien Chopin'(Deutsche Übersetzung)
          Zitat von » atinox «
          Avatare sind:
            src: 'https://github.com/atinux.png'(https://github.com/atinux.png)
            Aufladung: Lazy
        - label:'Romain Hamel'(auf Englisch)
          Zitat von » romhml «
          Avatare sind:
            src: 'https://github.com/romhml.png'(auf Englisch)
            Aufladung: Lazy
        - label:'Sandro Circi'(auf Englisch)
          Zitat von » Sandros94 «
          Avatare sind:
            src: 'https://github.com/sandros94.png'(auf Englisch)
            Aufladung: Lazy
        - label:'Jakub Michálek'(auf Englisch)
          Nachsilbe: 'J-Michalek'
          Avatare sind:
            src: 'https://github.com/J-Michalek.png'
            Aufladung: Lazy
        @@ph018@@label:'Alex'(auf Englisch)
          Zitat von » Hywax «
          Avatare sind:
            src: 'https://github.com/hywax.png'(auf Englisch)
            Aufladung: Lazy
        - label:'Maxime Pauvert'(auf Englisch)
          Zitat von » Maximepvrt «
          Avatare sind:
            src: 'https://github.com/maximepvrt.png'
            Aufladung: Lazy
  Klasse: 'flex-1 h-80'(Einheit)
---
::

::tip{to="#control-selected-items"}
Sie können auch das `@update:model-value`-Ereignis verwenden, um die ausgewählten Elemente anzuhören.
::

@@@ph021@@Gruppen

Die CommandPalette-Komponente filtert Gruppen und ordnet übereinstimmende Befehle nach Relevanz, wenn Benutzer sie eingeben. Sie bietet dynamische, sofortige Suchergebnisse für eine effiziente Befehlsermittlung. Verwenden Sie `groups` prop als Array von Objekten mit den folgenden Eigenschaften:

`id: string``id: string``id: string`{lang="ts-type"}
`label?: string`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}PH028027@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`slot?: string``slot?: string`PH03030{lang="ts-type"}{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@PH0333@@@@@@@@@@@@@@PH03333@@@@@@@@@@@@@@@PH0334{lang="ts-type"}{lang="ts-type"}PH03334@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
- [`ignoreFilter?: boolean`{lang="ts-type"}]()
[`postFilter?: (searchTerm: string, items: T[]) => T[]`{lang="ts-type"}]()
`highlightedIcon?: string``highlightedIcon?: string``highlightedIcon?: string``highlightedIcon?: string``highlightedIcon?: string`{lang="ts-type"}PH05051 @

::caution
Sie müssen für jede Gruppe ein `id` angeben, sonst wird die Gruppe ignoriert.
::

Jede Gruppe enthält ein `items`-Array von Objekten, die die Befehle definieren.

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH0555@@@@@@@@@@@PH05555@@@@@@@@@@@PH0556
`label?: string`{lang="ts-type"}`label?: string`PH0599{lang="ts-type"}PH0599@@@@@@@@@@@@@PH05999@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`suffix?: string``suffix?: string`{lang="ts-type"}
`icon?: string``icon?: string``icon?: string`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#########################################################################################
`chip?: ChipProps``chip?: ChipProps``chip?: ChipProps``chip?: ChipProps`{lang="ts-type"}PH07070@@@@@@@@@@@@@@PH0707070@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`kbds?: string[] | KbdProps[]``kbds?: string[] | KbdProps[]``kbds?: string[] | KbdProps[]`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`slot?: string``slot?: string`PH08999@@@@@PH0899@@@@@PH0899@@@@@PH08999@@@@@@@PH089999@@@@@@@@@PH089999999@@@@@@@@@@@@@@@@@@@@@@@@@@@PH089999999999999999999@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`children?: CommandPaletteItem[]``children?: CommandPaletteItem[]``children?: CommandPaletteItem[]`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`class?: any`PH10101@@@@@@PH10102 @
`ui?: { item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelPrefix?: ClassNameValue, itemLabelBase?: ClassNameValue, itemLabelSuffix?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue, itemTrailingHighlightedIcon?: ClassNameValue, itemTrailingIcon?: ClassNameValue }``ui?: { item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelPrefix?: ClassNameValue, itemLabelBase?: ClassNameValue, itemLabelSuffix?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue, itemTrailingHighlightedIcon?: ClassNameValue, itemTrailingIcon?: ClassNameValue }``ui?: { item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelPrefix?: ClassNameValue, itemLabelBase?: ClassNameValue, itemLabelSuffix?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue, itemTrailingHighlightedIcon?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}.@

Sie können jede Eigenschaft von der [Link](/docs/components/link#props) Komponente wie `to`,`target` usw. übergeben.

::component-code
---
Einsturz: wahr
Hide:
  - autofocus
Ignoriert:
  - gruppen
  - modellWert
  @@115@Klasse
Außen:
  - gruppen
  - modellWert
Externe Typen:
  - CommandPaletteGroup [Bearbeiten | Quelltext bearbeiten]
Klasse: '! p-0'
Props:
  Nachricht: {}
  Autofokus: falsch
  Fraktionen:
    - id:'Benutzer'
      Label: "Benutzer"
      Items:
        - label:'Benjamin Canac'(auf Englisch)
          Zitat von » Benjamincanac «
          Avatare sind:
            src: 'https://github.com/benjamincanac.png'
            Aufladung: Lazy
        - label:'Hugo Richard'(auf Englisch)
          Suffix: 'HugoRCD'(englisch)
          Avatare sind:
            src: 'https://github.com/HugoRCD.png'
            Aufladung: Lazy
        - label:'Sébastien Chopin'(Deutsche Übersetzung)
          Zitat von » atinox «
          Avatare sind:
            src: 'https://github.com/atinux.png'(https://github.com/atinux.png)
            Aufladung: Lazy
        - label:'Romain Hamel'(auf Englisch)
          Zitat von » romhml «
          Avatare sind:
            src: 'https://github.com/romhml.png'(auf Englisch)
            Aufladung: Lazy
        - label:'Sandro Circi'(auf Englisch)
          Zitat von » Sandros94 «
          Avatare sind:
            src: 'https://github.com/sandros94.png'(auf Englisch)
            Aufladung: Lazy
        - label:'Jakub Michálek'(auf Englisch)
          Nachsilbe: 'J-Michalek'
          Avatare sind:
            src: 'https://github.com/J-Michalek.png'
            Aufladung: Lazy
        @@ph127@@label:'Alex'(auf Englisch)
          Zitat von » Hywax «
          Avatare sind:
            src: 'https://github.com/hywax.png'(auf Englisch)
            Aufladung: Lazy
        - label:'Maxime Pauvert'(auf Englisch)
          Zitat von » Maximepvrt «
          Avatare sind:
            src: 'https://github.com/maximepvrt.png'
            Aufladung: Lazy
  Klasse: Flex-1
---
::

::tip{to="#with-children-in-items"}
Jedes Element kann ein `children`-Array von Objekten mit den folgenden Eigenschaften zum Erstellen von Untermenüs verwenden:
::

@130@130@130

Verwenden Sie `multiple` prop, um Mehrfachauswahl zu ermöglichen.

::component-code
---
Einsturz: wahr
Hide:
  - autofocus
Ignoriert:
  - Gruppen
  - modellWert
  @@135@mehrfache135@mehrfache135@mehrfache135
  @@136@Klasse
Außen:
  @@@@@@@137@@gruppen
  - modellWert
Externe Typen:
  - CommandPaletteGroup [Bearbeiten | Quelltext bearbeiten]
Klasse: '! p-0'
Props:
  Anzahl: true
  Autofokus: false
  Modellwert: []
  Gruppen:
    - id:'Benutzer'
      Label: "Benutzer"
      Items:
        - label:'Benjamin Canac'(auf Englisch)
          Zitat von » benjamincanac «
          Avatare sind:
            src: 'https://github.com/benjamincanac.png'
            Aufladung: Lazy
        - label:'Hugo Richard'(auf Englisch)
          Suffix: 'HugoRCD'(englisch)
          Avatare sind:
            src: 'https://github.com/HugoRCD.png'
            Aufladung: Lazy
        - label:'Sébastien Chopin'(Deutsche Übersetzung)
          Zitat von » atinox «
          Avatare sind:
            src: 'https://github.com/atinux.png'(https://github.com/atinux.png)
            Aufladung: Lazy
        - label:'Romain Hamel'(auf Englisch)
          Zitat von » romhml «
          Avatare sind:
            src: 'https://github.com/romhml.png'(auf Englisch)
            Aufladung: Lazy
        - label:'Sandro Circi'(auf Englisch)
          Zitat von » Sandros94 «
          Avatare sind:
            src: 'https://github.com/sandros94.png'(auf Englisch)
            Aufladung: Lazy
        - label:'Jakub Michálek'(auf Englisch)
          Suffix: 'J-Michalek'(englisch)
          Avatare sind:
            src: 'https://github.com/J-Michalek.png'
            Aufladung: Lazy
        @@ph147@@label:'Alex'(auf Englisch)
          Zitat von » Hywax «
          Avatare sind:
            src: 'https://github.com/hywax.png'(auf Englisch)
            Aufladung: Lazy
        - label:'Maxime Pauvert'(auf Englisch)
          Zitat von » Maximepvrt «
          Avatare sind:
            src: 'https://github.com/maximepvrt.png'
            Aufladung: Lazy
  Klasse: Flex-1
---
::

::caution
Stellen Sie sicher, dass Sie ein Array an die `default-value` prop oder die `v-model`-Direktive übergeben.
::

### Platzhalter

Verwenden Sie die `placeholder` prop, um den Platzhaltertext zu ändern.

::component-code
---
Einsturz: wahr
Hide:
  - autofocus
Ignoriert:
  @@154@Klasse
  - gruppen
Außen:
  - gruppen
Externe Personen:
  - CommandPaletteGroup [Bearbeiten | Quelltext bearbeiten]
Klasse: '! p-0'
Props:
  Autofokus: false
  Platzhalter: "Suche eine App..."
  Gruppen:
    - id:'Apps'
      Items:
        - label:'Kalender'
          Icon: 'i-lucide-Kalender'
        - label:'Musik'
          Icon: 'i-lucide-music'(Deutsche Übersetzung)
        - label:'Karten'
          Icon: 'i-lucide-map'(auf Englisch)
  Klasse: 'Flex-1'
---
::

@@162@163@163@163@163@163@163@163@163@163@163@163@163@163@@163@163@163@163@163@163@163@163@163@163@163@163@163@@163@163@163@163@@163@@163@163@@163@@163@@@163@@163@@@@163@@@@@@163@@@@@@@@@@@@@@@@@@@@@1633333333333@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Verwenden Sie `size` prop, um die Größe der CommandPalette zu ändern.

::component-code
---
Einsturz: wahr
Hide:
  - autofocus
Ignoriert:
  @@166@166@166@166@166@166@166@1666@166@166@166@166@166@166@166@16@166@16@16@16@16@16@16@16@166@@@166@@@166@16@16@16@16@@@@1666@@@@@@@@1666@@@@@@@@@@@@@@@@@@@@166666@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Klasse
  @@@@@@@167@@gruppen
Außen:
  @@@@@@@168@@gruppen
Externe Personen:
  - CommandPaletteGroup [Bearbeiten | Quelltext bearbeiten]
Klasse: '! p-0'
Props:
  Autofokus: false
  Größe:'xl'
  Fraktionen:
    - id:'Apps'
      Items:
        - label:'Kalender'
          Icon: 'i-lucide-Kalender'
        - label:'Musik'
          Icon: 'i-lucide-music'(Deutsche Übersetzung)
        - label:'Karten'
          Icon: 'i-lucide-map'(auf Englisch)
  Klasse: 'Flex-1'
---
::

@@@@@@@@@@@@@@@@@@@@@@ICON

Verwenden Sie `icon` prop, um die Eingabe [Icon](/docs/components/icon). Standardmäßig auf `i-lucide-search`.

::component-code
---
Einsturz: wahr
Hide:
  - autofocus
Ignoriert:
  @@182@gmail.de
  @@@@@@@183@@gruppen
Außen:
  @@@@@@@184@@gruppen
Externe Personen:
  - CommandPaletteGroup [Bearbeiten | Quelltext bearbeiten]
Klasse: '! p-0'
Props:
  Autofokus: false
  Icon: 'i-lucide-box'(I-lucide-Box) auf Englisch
  Gruppen:
    - id:'Apps'
      Items:
        - label:'Kalender'
          Icon: 'i-lucide-Kalender'
        - label:'Musik'
          Icon: 'i-lucide-music'(Deutsche Übersetzung)
        - label:'Karten'
          Icon: 'i-lucide-map'(auf Englisch)
  Klasse: 'Flex-1'
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.search` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.search` key anpassen.
:::
::

@@ph194@@ausgewählte Ikone

Verwenden Sie die `selected-icon` prop, um das ausgewählte Element anzupassen [Icon](/docs/components/icon). Standardmäßig auf `i-lucide-check`.

::component-code
---
Einsturz: wahr
Hide:
  - autofocus
Ignoriert:
  - Gruppen
  - modellWert
  @@ph204@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache204@mehrfache@mehrfache@mehrfache@mehrfache-fache-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e
  @@ph205@gmail.de
Außen:
  - Gruppen
  - modellWert
Externe Typen:
  - CommandPaletteGroup [Bearbeiten | Quelltext bearbeiten]
Klasse: '! p-0'
Props:
  Vielfach: wahr
  Autofokus: false
  Modellwert:
    - label:'Benjamin Canac'(auf Englisch)
      Zitat von » benjamincanac «
      Avatare sind:
        src: 'https://github.com/benjamincanac.png'
        Aufladung: Lazy
  selectedIcon: 'i-lucide-circle-check'(I-lucide-Kreis-Check)
  Fraktionen:
    - id:'Benutzer'
      Label: "Benutzer"
      Items:
        - label:'Benjamin Canac'(auf Englisch)
          Zitat von » benjamincanac «
          Avatare sind:
            src: 'https://github.com/benjamincanac.png'
            Aufladung: Lazy
        - label:'Hugo Richard'(auf Englisch)
          Suffix: 'HugoRCD'(englisch)
          Avatare sind:
            src: 'https://github.com/HugoRCD.png'
            Aufladung: Lazy
        - label:'Sébastien Chopin'(auf Englisch)
          Zitat von » atinux «
          Avatare sind:
            src: 'https://github.com/atinux.png'(https://github.com/atinux.png)
            Aufladung: Lazy
        - label:'Romain Hamel'(auf Englisch)
          Zitat von » romhml «
          Avatare sind:
            src: 'https://github.com/romhml.png'(auf Englisch)
            Aufladung: Lazy
        - label:'Sandro Circi'(auf Englisch)
          Zitat von » Sandros94 «
          Avatare sind:
            src: 'https://github.com/sandros94.png'(auf Englisch)
            Aufladung: Lazy
        - label:'Jakub Michálek'(auf Englisch)
          Nachsilbe: 'J-Michalek'
          Avatare sind:
            src: 'https://github.com/J-Michalek.png'
            Aufladung: Lazy
        @@ph217@@label:'Alex'(auf Englisch)
          Zitat von » Hywax «
          Avatare sind:
            src: 'https://github.com/hywax.png'(auf Englisch)
            Aufladung: Lazy
        - label:'Maxime Pauvert'(auf Englisch)
          Zitat von » Maximepvrt «
          Avatare sind:
            src: 'https://github.com/maximepvrt.png'
            Aufladung: Lazy
  Klasse: Flex-1
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.check` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.check` key anpassen.
:::
::

@@ph223@trailing-icon @ trailing-symbol

Verwenden Sie die `trailing-icon` prop, um die nachlaufende [Icon](/docs/components/icon) anzupassen, wenn ein Element Kinder hat.

::component-code
---
Einsturz: wahr
Schöner: wahr
Hide:
  - autofocus
Ignoriert:
  - Gruppen
  @@232@Klasse
Außen:
  @@ph233@@gmbh
Externe Personen:
  - CommandPaletteGroup [Bearbeiten | Quelltext bearbeiten]
Klasse: '! p-0'
Props:
  Autofokus: false
  trailingIcon: 'i-lucide-arrow-right'(englisch)
  Fraktionen:
    - id:'Aktionen'
      Items:
        - label:'Teilen'
          Icon: 'i-lucide-share'(auf Englisch)
          Kinder:
            - label:'E-Mail'
              Icon: 'i-lucide-mail'(auf Englisch)
            - label:'Kopieren'
              Icon: 'i-lucide-copy'(auf Englisch)
            - label:'Link'(auf Englisch)
              Icon: 'i-lucide-link'(I-lucide-Verbindung)
  Klasse: 'Flex-1'
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.chevronRight` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.chevronRight` key anpassen.
:::
::

@@ph244@Aufladen

Verwenden Sie `loading` prop, um ein Ladesymbol in der CommandPalette anzuzeigen.

::component-code
---
Einsturz: wahr
Hide:
  - autofocus
Ignoriert:
  @@@@@@@class247@class247@class@class247@class@class@class@class@class247@class@class@class@class@class@class@class247@class@class@class@class@class@class@class@class247@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@class@classclass@class@classclassclassclass@class@class@class@classclassclassclass@classclassclass@classclassclassclass@classclassclassclassclassclassclassclassclassclassclassclass@classclassclassclassclassclassclassclassclassclassclassclassclassc
  @@@@@@@248@@@gruppen
Außen:
  @@ph249@@gmail.de
Externe Typen:
  - CommandPaletteGroup [Bearbeiten | Quelltext bearbeiten]
Klasse: '! p-0'
Props:
  Autofokus: falsch
  Aufladung: true
  Fraktionen:
    - id:'Apps'
      Items:
        - label:'Kalender'
          Icon: 'i-lucide-Kalender'
        - label:'Musik'
          Icon: 'i-lucide-music'(Deutsche Übersetzung)
        - label:'Karten'
          Icon: 'i-lucide-map'(auf Englisch)
  Klasse: Flex-1
---
::

@@ph255@@Icon-Anzeige

Verwenden Sie `loading-icon` prop, um das Ladesymbol anzupassen. Standardmäßig ist `i-lucide-loader-circle`.

::component-code
---
Einsturz: wahr
Hide:
  - autofocus
Ignoriert:
  @@ph259@gmail.de
  - Gruppen
Außen:
  - gruppen
Externe Personen:
  - CommandPaletteGroup [Bearbeiten | Quelltext bearbeiten]
Klasse: '! p-0'
Props:
  Autofokus: false
  Aufladung: true
  loadingIcon: 'i-lucide-loader'(englisch)
  Fraktionen:
    - id:'Apps'
      Items:
        - label:'Kalender'
          Icon: 'i-lucide-Kalender'
        - label:'Musik'
          Icon: 'i-lucide-music'(Deutsche Ausgabe)
        - label:'Karten'
          Icon: 'i-lucide-map'(auf Englisch)
  Klasse: Flex-1
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

### Schließen

Verwenden Sie die `close` prop, um eine [Button](/docs/components/button) anzuzeigen, um die CommandPalette zu schließen.

::tip
Ein `update:open`-Ereignis wird ausgegeben, wenn der Schließen-Button angeklickt wird.
::

::component-code
---
Einsturz: wahr
Hide:
  - autofocus
Ignoriert:
  @@@@@@@class279@@class279@class@class279@class@class@class279@class@class@class279@class@class@class@class@class@class@class279@class@class@class@class@class@class@class279@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@classclassclass@classclassclassclass@classclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassc@classc@classclassclassc@classclassclassclassclassclassclassclass
  @@ph280@@gmail.de
  @@ph281@gmail.de
Außen:
  @@@@@@@@@282@@@@gruppen
Externe Personen:
  - CommandPaletteGroup [Bearbeiten | Quelltext bearbeiten]
Klasse: '! p-0'
Props:
  Autofokus: false
  Schließen: true
  Gruppen:
    - id:'Apps'
      Items:
        - label:'Kalender'
          Icon: 'i-lucide-Kalender'
        - label:'Musik'
          Icon: 'i-lucide-music'(Deutsche Ausgabe)
        - label:'Karten'
          Icon: 'i-lucide-map'(auf Englisch)
  Klasse: Flex-1
---
::

Sie können jede Eigenschaft von der [Button](/docs/components/button) Komponente übergeben, um sie anzupassen.

::component-code
---
Einsturz: wahr
Schöner: wahr
Hide:
  - autofocus
Ignoriert:
  - close.color (@@ close. color) Bearbeiten
  @@ph294@close.variant (nicht verfügbar)
  @@@ph295@@gruppen
  @@@@@@@@class296@@class296@class@class@class@class@class296@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@classclass@classclass@classclassclass@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classc
Außen:
  @@@ph297@@gruppen
Externe Personen:
  - CommandPaletteGroup [Bearbeiten | Quelltext bearbeiten]
Klasse: '! p-0'
Props:
  Autofokus: falsch
  Schließen:
    Farbe: Primär
    Beschreibung: Outline
    Klasse: 'rounded-full'
  Fraktionen:
    - id:'Apps'
      Items:
        - label:'Kalender'
          Icon: 'i-lucide-Kalender'
        - label:'Musik'
          Icon: 'i-lucide-music'(Deutsche Ausgabe)
        - label:'Karten'
          Icon: 'i-lucide-map'(auf Englisch)
  Klasse: Flex-1
---
::

@@ph303@Schließen-Icon

Verwenden Sie die `close-icon` prop, um die Schließen-Schaltfläche anzupassen [Icon](/docs/components/icon). Standardmäßig auf `i-lucide-x`.

::component-code
---
Einsturz: wahr
Hide:
  - Autofokus
Ignoriert:
  @@311@Klasse
  - Gruppen
  @@ph313@abschluss@abschluss.de
Außen:
  - Gruppen
Externe Personen:
  - CommandPaletteGroup [Bearbeiten | Quelltext bearbeiten]
Klasse: '! p-0'
Props:
  Autofokus: false
  Schließen: true
  closeIcon: 'i-lucide-arrow-right'(I-lucide-arrow-rechts)
  Gruppen:
    - id:'Apps'
      Items:
        - label:'Kalender'
          Icon: 'i-lucide-Kalender'
        - label:'Musik'
          Icon: 'i-lucide-music'(Deutsche Ausgabe)
        - label:'Karten'
          Icon: 'i-lucide-map'(auf Englisch)
  Klasse: Flex-1
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.close` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.close` key anpassen.
:::
::

@@324@zurück

Verwenden Sie `back` prop, um die Zurück-Schaltfläche (mit `false`-Wert) anzupassen oder auszublenden, die angezeigt wird, wenn Sie in ein Untermenü navigieren.

Sie können jede Eigenschaft aus der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-code
---
Einsturz: wahr
Schöner: wahr
Hide:
  - autofocus
Ignoriert:
  @@ph332@back.color @ zurück
  @@@@@@@@333@@gmail.de
  @@334@Klasse
Außen:
  @@335@gmail.de
Externe Typen:
  - CommandPaletteGroup [Bearbeiten]
Klasse: '! p-0'
Props:
  Autofokus: false
  zurück:
    Farbe: Primär
  Fraktionen:
    - id:'Aktionen'
      Items:
        - label:'Teilen'
          Icon: 'i-lucide-share'(auf Englisch)
          Kinder:
            - label:'E-Mail'(E-Mail-Adresse)
              Icon: 'i-lucide-mail'(auf Englisch)
            - label:'Kopieren'
              Icon: 'i-lucide-copy'(auf Englisch)
            - label:'Link'
              Icon: 'i-lucide-link'(I-lucide-Verbindung)
  Klasse: 'Flex-1'
---
::

@@ph342@@zurück Icon

Verwenden Sie die `back-icon` prop, um die Zurück-Taste anzupassen [Icon](/docs/components/icon). Standardmäßig auf `i-lucide-arrow-left`.

::component-code
---
Einsturz: wahr
Hide:
  - Autofokus
Ignoriert:
  @350@Klasse
  @@@@@@@351@@@gruppen
  @@352@zurück
Außen:
  @@@@@@@353@@gmail.de
Externe Personen:
  - CommandPaletteGroup [Bearbeiten | Quelltext bearbeiten]
Klasse: '! p-0'
Props:
  Autofokus: false
  Zurück: True
  zurück Icon: 'i-lucide-house'
  Gruppen:
    - id:'Aktionen'
      Items:
        - label:'Teilen'
          Icon: 'i-lucide-share'(auf Englisch)
          Kinder:
            - label:'E-Mail'
              Icon: 'i-lucide-mail'(auf Englisch)
            - label:'Kopieren'
              Icon: 'i-lucide-copy'(auf Englisch)
            - label:'Link'(auf Englisch)
              Icon: 'i-lucide-link'(I-lucide-Verbindung)
  Klasse: Flex-1
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.arrowLeft` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.arrowLeft` key anpassen.
:::
::

### disabled @ disabled

Verwenden Sie `disabled` prop, um die CommandPalette zu deaktivieren.

::component-code
---
Einsturz: wahr
Hide:
  - autofocus
Ignoriert:
  @@@@@@@367@@@gruppen
  @@368@gmail.de
Außen:
  @@@@@@@369@@gmail.de
Externe Typen:
  - CommandPaletteGroup [Bearbeiten | Quelltext bearbeiten]
Klasse: '! p-0'
Props:
  Autofokus: falsch
  Behindert: Wahr
  Fraktionen:
    - id:'Apps'
      Items:
        - label:'Kalender'
          Icon: 'i-lucide-Kalender'
        - label:'Musik'
          Icon: 'i-lucide-music'(Deutsche Ausgabe)
        - label:'Karten'
          Icon: 'i-lucide-map'(auf Englisch)
  Klasse: Flex-1
---
::

@@375@Beispiele

### Control ausgewählte (n) Artikel

Sie können die ausgewählten Elemente steuern, indem Sie die `default-value` prop-oder die `v-model`-Direktive verwenden, indem Sie das Feld `onSelect` auf jedem Element verwenden oder indem Sie das `@update:model-value`-Ereignis verwenden.

::component-example
---
Einsturz: wahr
Name: 'Kommandozeilen-Auswahl-Beispiel'.
Klasse: '! p-0'
Props:
  Autofokus: falsch
---
::

::tip
Verwenden Sie `value-key` prop, um ein Feld eines Elements auszuwählen, das als Wert anstelle des Objekts selbst verwendet werden soll.
::

### Kontroll-Suchbegriff

Verwenden Sie die `v-model:search-term`-Direktive, um den Suchbegriff zu steuern.

::component-example
---
Einsturz: wahr
Name: 'command-palette-search-term-example'(Befehlspalette-Suchbegriff-Beispiel)
Klasse: '! p-0'
Props:
  Autofokus: falsch
---
::

::note
In diesem Beispiel wird das `@update:model-value`-Ereignis verwendet, um den Suchbegriff zurückzusetzen, wenn ein Element ausgewählt wird.
::

### Mit Kindern in Sachen

Sie können hierarchische Menüs erstellen, indem Sie die `children`-Eigenschaft in items verwenden. Wenn ein Element untergeordnete Elemente hat, wird automatisch ein Chevron-Symbol angezeigt und die Navigation in ein Untermenü aktiviert.

::component-example
---
Einsturz: wahr
Schöner: wahr
Name: 'command-palette-items-children-example'(Befehlszeilen-Palette-Item-Kinder-Beispiel)
Klasse: '! p-0'
Props:
  Autofokus: falsch
---
::

::note
Navigieren Sie in ein Untermenü:
- Der Suchbegriff wird zurückgesetzt
- Ein Zurück-Button erscheint in der Eingabe
- Sie können zur vorherigen Gruppe zurückkehren, indem Sie die Taste kbd{value="backspace"} drücken
::

### Mit hergeholten Gegenständen

Sie können Elemente von einer API abrufen und in der CommandPalette verwenden.

::component-example
---
Einsturz: wahr
Name: 'Kommandozeilen-Beispiel'
Klasse: '! p-0'
Props:
  Autofokus: falsch
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `server: false` verwendet, um Daten auf dem Client abzurufen, ohne das anfängliche Rendern zu blockieren. Der Ladezustand überprüft sowohl `pending` als auch `idle` status, um eine Ladeanzeige vor und während des Abrufs anzuzeigen.
::

### Mit Ignorierfilter

Sie können das Feld `ignoreFilter` auf `true` in einer Gruppe setzen, um die interne Suche zu deaktivieren und Ihre eigene Suchlogik zu verwenden.

::component-example
---
Einsturz: wahr
Name: 'command-palette-ignore-filter-example'(Befehls-Palette-Ignore-Filter-Beispiel)
Klasse: '! p-0'
Props:
  Autofokus: falsch
---
::

::note
In diesem Beispiel wird [`refDebounced`]() verwendet, um die API-Aufrufe zu entkräften.
::

### Mit Post-gefilterten Elementen

Sie können das Feld `postFilter` in einer Gruppe verwenden, um Elemente zu filtern, nachdem die Suche stattgefunden hat.

::component-example
---
Einsturz: wahr
Name: 'Kommando-Palette-Post-Filter-Beispiel'
Klasse: '! p-0'
Props:
  Autofokus: false
---
::

::note
Beginnen Sie mit der Eingabe, um Elemente mit höherer Ebene zu sehen.
::

### Mit benutzerdefinierten Sicherung Suche

Sie können die `fuse` prop verwenden, um die Optionen von [useFuse](https://vueuse.org/integrations/useFuse) zu überschreiben, die standardmäßig auf:

```ts
{
  fuseOptions: {
    ignoreLocation: true,
    threshold: 0.1,
    keys: ['label', 'description', 'suffix']
  },
  resultLimit: 12,
  matchAllWhenSearchEmpty: true
}
```

::tip
Die `fuseOptions` sind die Optionen von [Fuse.js](https://www.fusejs.io/),`resultLimit` ist die maximale Anzahl der Ergebnisse, die zurückgegeben werden sollen, und `matchAllWhenSearchEmpty` ist ein Boolean, um alle Elemente zu finden, wenn der Suchbegriff leer ist.
::

Sie können zum Beispiel `{ fuseOptions: { includeMatches: true } }`{lang="ts-type"} einstellen, um den Suchbegriff in den Elementen hervorzuheben.

::component-example
---
Einsturz: wahr
Name: 'Kommandopalette-Fuse-Beispiel'
Klasse: '! p-0'
Props:
  Autofokus: falsch
---
::

### Mit Virtualisierung: badge{label="4.1+" class="align-text-top"}

Verwenden Sie `virtualize` prop, um die Virtualisierung für große Listen als Boolean oder ein Objekt mit Optionen wie `{ estimateSize: 32, overscan: 12 }` zu aktivieren.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
Wenn diese Option aktiviert ist, werden alle Gruppen aufgrund einer Einschränkung der Reka-Benutzeroberfläche in eine einzige Liste zusammengefasst.
::

::component-example
---
Einsturz: wahr
Name: 'Kommando-Palette-Virtualisierungs-Beispiel'
Klasse: '! p-0'
Props:
  Autofokus: falsch
---
::

### Innerhalb eines Popovers

Sie können die CommandPalette-Komponente innerhalb eines Inhalts von [Popover](/docs/components/popover) verwenden.

::component-example
---
Einsturz: wahr
Name: 'popoor-command-palette-example'(Popoor-Befehl-Palette-Beispiel)
Props:
  Autofokus: false
---
::

### Innerhalb eines Modals

Sie können die CommandPalette-Komponente innerhalb eines [Modal](/docs/components/modal)'s Inhalts verwenden.

::component-example
---
Einsturz: wahr
Name: 'modal-command-palette-example'(modal-Befehl-Paletten-Beispiel)
Props:
  Autofokus: falsch
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Daten nur beim Öffnen des Modal abzurufen.
::

### Innerhalb einer Schublade

Sie können die CommandPalette-Komponente innerhalb eines Inhalts von [Drawer](/docs/components/drawer) verwenden.

::component-example
---
Einsturz: wahr
Name: 'drawer-command-palette-example'(Zeiger-Befehl-Paletten-Beispiel)
Props:
  Autofokus: falsch
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Daten nur beim Öffnen der Schublade abzurufen.
::

### Listen offener Zustand

Wenn Sie die `close` prop verwenden, können Sie das `update:open`-Ereignis anhören, wenn Sie auf die Schaltfläche klicken.

::component-example
---
Einsturz: wahr
Name: 'Beispiel-Befehlspalette-Open-Beispiel'
Props:
  Autofokus: false
---
::

::note
Dies kann nützlich sein, wenn Sie die CommandPalette in einem [`Modal`](/docs/components/modal) zum Beispiel verwenden.
::

### Mit Fußzeilensteckplatz

Verwenden Sie den `#footer`-Steckplatz, um benutzerdefinierte Inhalte am unteren Rand der CommandPalette hinzuzufügen, z. B. Hilfe für Tastaturkürzel oder zusätzliche Aktionen.

::component-example
---
Einsturz: wahr
name: 'command-palette-footer-slot-example'(Befehlszeilen-Palette-Fußzeilen-Slot-Beispiel)
Klasse: '! p-0'
Props:
  Autofokus: false
---
::

### Mit benutzerdefinierten Steckplatz

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element oder eine bestimmte Gruppe anzupassen.

Sie haben Zugriff auf folgende Slots:

`#{{ item.slot }}``#{{ item.slot }}`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#######################################################################################
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@########################################################################################
`#{{ item.slot }}-trailing``#{{ item.slot }}-trailing``#{{ item.slot }}-trailing`{lang="ts-type"}

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@########################################################################################
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@######################################################################################################
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`#{{ group.slot }}-trailing``#{{ group.slot }}-trailing`{lang="ts-type"}

::component-example
---
Einsturz: wahr
name: 'command-palette-custom-slot-example'(Befehlszeilen-Palette-Benutzerdefinitions-Slot-Beispiel)
Klasse: '! p-0'
Props:
  Autofokus: falsch
---
::

::tip{to="#slots"}
Sie können auch die `#item`,`#item-leading`,`#item-label` und `#item-trailing` Slots verwenden, um alle Elemente anzupassen.
::

## api

@@@@@@@@999@@@@@@@@@@s3

Komponenten Props

@@@ph500@@slots

Die Komponenten-Slots

@@ph501@@emits

Komponenten emittieren

@@ph502@@gmail.de

Das Komponenten-Theme

@@ph503@@changelog @ changelog

Das Component-Changelog

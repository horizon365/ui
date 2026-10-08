---
description: 'Eine Komponente, die eine Abfolge von Ereignissen mit Datum, Titel, Icons oder Avataren anzeigt.'
category: data
keywords:
  - activity feed
  - history
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Timeline.vue
---

@@@ph000@Verwendung

Verwenden Sie die Zeitleisten-Komponente, um eine Liste von Elementen in einer Zeitleiste anzuzeigen.

::component-code
---
Einsturz: wahr
Hide:
  @@001@Klasse
  - defaultValue
Ignoriert:
  @@ph003@gmail.de
  @@004@Klasse
  - defaultValue
Außen:
  @@ph006@gmail.de
Externe Typen:
  - TimelineItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Defaultwert: 2
  Items:
    - date:'März 15, 2025'
      Titel: Das Projekt Kickoff
      description: 'Projekt mit Teamausrichtung gestartet. Projektmeilensteine und zugeordnete Ressourcen einrichten.'
      Icon: 'I-Lucide-Rakete'
    - date:'März 22 2025'
      Titel: "Designphase"
      description: 'User research and design workshops. Created wireframes and prototypes for user testing.'(Benutzerforschung und Design-Workshops. Erstellt Wireframes und Prototypen für Benutzertests.)
      Icon: 'i-lucide-palette'(auf Englisch)
    - date:'März 29 2025'
      Stichwort: „ Sprint "
      description: 'Frontend und Backend Entwicklung. Kernfunktionen implementiert und mit APIs integriert.'
      Icon: 'i-lucide-code'(Symbol: 'i-lucide-code')
    - date:'Apr 5 2025'(auf Englisch)
      Titel: "Testen & Deployment"
      description: 'QA-Tests und Leistungsoptimierung. Bereitstellung der Anwendung in der Produktion.'
      Icon: 'i-lucide-check-circle'(I-lucide-Check-Kreis)
  Klasse: W-96
---
::

@@ph012@gmail.de

Verwenden Sie `items` prop als Array von Objekten mit den folgenden Eigenschaften:

`date?: string`{lang="ts-type"}`date?: string`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}
`title?: string``title?: string``title?: string`{lang="ts-type"}
`description?: AvatarProps`PH0221{lang="ts-type"}
`icon?: string``icon?: string``icon?: string`{lang="ts-type"}
`avatar?: AvatarProps`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}PH028027@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`value?: string | number``value?: string | number`PH03030{lang="ts-type"}{lang="ts-type"}
[PH0333{lang="ts-type"}]()
`class?: any``class?: any``class?: any``class?: any``class?: any`{lang="ts-type"}PH04040@@@@@@@@@@@@@PH0404040@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`ui?: { item?: ClassNameValue, container?: ClassNameValue, indicator?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, date?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`PH0444 @@

::component-code
---
Ignoriert:
  @@ph045@gmail.de
  @@@@@@46@46@46@46@46@46@46@46@@46@@46@46@@46@46@@46@@46@@46@@46@@46@@@@class@class@classclassclassclassclassclassclassclassclassclassclassclassclass@classclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassc@classclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassc@classclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassc@classclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassc@classclass
  - defaultValue
Außen:
  @@ph048@gmail.de
Externe Personen:
  @@ph049@@timelineItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Defaultwert: 2
  Items:
    - date:'März 15, 2025'
      Titel: Das Projekt Kickoff
      description: 'Projekt mit Teamausrichtung gestartet. Projektmeilensteine und zugeordnete Ressourcen einrichten.'
      Icon: 'I-Lucide-Rakete'
    - date:'März 22 2025'
      Titel: "Designphase"
      description: 'User research and design workshops. Created wireframes and prototypes for user testing.'(Benutzerforschung und Design-Workshops. Erstellt Wireframes und Prototypen für Benutzertests.)
      Icon: 'i-lucide-palette'(auf Englisch)
    - date:'März 29 2025'
      Stichwort: „ Sprint "
      description: 'Frontend und Backend Entwicklung. Kernfunktionen implementiert und mit APIs integriert.'
      Icon: 'i-lucide-code'(Symbol: 'i-lucide-code')
    - date:'Apr 5 2025'(auf Englisch)
      Titel: "Testen & Deployment"
      description: 'QA-Tests und Leistungsoptimierung. Bereitstellung der Anwendung in der Produktion.'
      Icon: 'i-lucide-check-circle'(I-lucide-Check-Kreis)
  Klasse: W-96
---
::

### Farbe

Verwenden Sie `color` prop, um die Farbe der aktiven Elemente in einer Zeitleiste zu ändern.

::component-code
---
Ignoriert:
  @@ph056@gmail.de
  @@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@
  - defaultValue
Außen:
  @@ph059@gmail.de
Externe Typen:
  - TimelineItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Farbe: neutral
  Defaultwert: 2
  Items:
    - date:'März 15, 2025'
      Titel: Das Projekt Kickoff
      description: 'Projekt mit Teamausrichtung gestartet. Projektmeilensteine und zugeordnete Ressourcen einrichten.'
      Icon: 'I-Lucide-Rakete'
    - date:'März 22 2025'
      Titel: "Designphase"
      description: 'User research and design workshops. Created wireframes and prototypes for user testing.'(Benutzerforschung und Design-Workshops. Erstellt Wireframes und Prototypen für Benutzertests.)
      Icon: 'i-lucide-palette'(auf Englisch)
    - date:'März 29 2025'
      Stichwort: „ Sprint "
      description: 'Frontend und Backend Entwicklung. Kernfunktionen implementiert und mit APIs integriert.'
      Icon: 'i-lucide-code'(Symbol: 'i-lucide-code')
    - date:'Apr 5 2025'(auf Englisch)
      Titel: "Testen & Deployment"
      description: 'QA-Tests und Leistungsoptimierung. Bereitstellung der Anwendung in der Produktion.'
      Icon: 'i-lucide-check-circle'(i-lucide-check-Kreis)
  Klasse: W-96
---
::

### Größe

Verwenden Sie `size` prop, um die Größe der Timeline zu ändern.

::component-code
---
Ignoriert:
  - Artikel
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@classclass@class@class@class@class@classclass@class@classclass@classc
  - defaultValue
Außen:
  @@ph070@gmail.de
Externe Typen:
  - TimelineItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Größe: XS
  Defaultwert: 2
  Items:
    - date:'März 15, 2025'
      Titel: Das Projekt Kickoff
      description: 'Projekt mit Teamausrichtung gestartet. Projektmeilensteine und zugeordnete Ressourcen einrichten.'
      Icon: 'I-Lucide-Rakete'
    - date:'März 22 2025'
      Titel: "Designphase"
      description: 'User research and design workshops. Created wireframes and prototypes for user testing.'(Benutzerforschung und Design-Workshops. Erstellt Wireframes und Prototypen für Benutzertests.)
      Icon: 'i-lucide-palette'(auf Englisch)
    - date:'März 29 2025'
      Stichwort: „ Sprint "
      description: 'Frontend und Backend Entwicklung. Kernfunktionen implementiert und mit APIs integriert.'
      Icon: 'i-lucide-code'(Symbol: 'i-lucide-code')
    - date:'Apr 5 2025'
      Titel: "Testen & Deployment"
      description: 'QA-Tests und Leistungsoptimierung. Bereitstellung der Anwendung in der Produktion.'
      Icon: 'i-lucide-check-circle'(I-lucide-Check-Kreis)
  Klasse: W-96
---
::

### Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung der Timeline. Defaults auf `vertical` zu ändern.

::component-code
---
Ignoriert:
  @@@ph079@gmail.de
  @@80@Klasse
  - defaultValue
Außen:
  @@@ph082@@gmail.de
Externe Typen:
  @@@@@@@@timelineItem []
Props:
  Orientierung: "horizontal"
  Defaultwert: 2
  Items:
    - date:'März 15, 2025'
      Titel: Das Projekt Kickoff
      description: 'Das Projekt mit Teamausrichtung gestartet.'
      Icon: 'I-Lucide-Rakete'
    - date:'März 22 2025'
      Titel: "Designphase"
      Beschreibung: "User Research und Design-Workshops."
      Icon: 'i-lucide-palette'(I-lucide-Palette) auf
    - date:'März 29 2025'
      Stichwort: „ Sprint "
      Beschreibung: "Frontend-und Backend-Entwicklung."
      Icon: 'i-lucide-code'(Symbol: 'i-lucide-code')
    - date:'Apr 5 2025'(auf Englisch)
      Titel: "Testen & Deployment"
      Beschreibung: 'QA-Tests und Leistungsoptimierung.'
      Icon: 'i-lucide-check-circle'(i-lucide-check-Kreis)
  Klasse: "W-voll"
Klasse: 'Überlauf-X-Auto'
---
::

@@@@@@@@@ph088@@reverse

Verwenden Sie die umgekehrte Stütze, um die Richtung der Timeline umzukehren.

::component-code
---
Ignoriert:
  @@ph089@gmail.de
  @@90@Klasse
  - defaultValue
Außen:
  @@ph092@@gmail.de
Externe Typen:
  @@@ph093@@timelineItem [Bearbeiten | Quelltext bearbeiten]
Props:
  umgekehrt: wahr
  Modellwert: 2
  Orientierung: "vertikal"
  Items:
    - date:'März 15, 2025'
      Titel: Das Projekt Kickoff
      description: 'Das Projekt mit Teamausrichtung gestartet.'
      Icon: 'I-Lucide-Rakete'
    - date:'März 22 2025'
      Titel: "Designphase"
      Beschreibung: "User Research und Design-Workshops."
      Icon: 'i-lucide-palette'(auf Englisch)
    - date:'März 29 2025'
      Stichwort: „ Sprint "
      Beschreibung: "Frontend-und Backend-Entwicklung."
      Icon: 'i-lucide-code'(Symbol: 'i-lucide-code')
    - date:'Apr 5 2025'
      Titel: "Testen & Deployment"
      Beschreibung: 'QA-Tests und Leistungsoptimierung.'
      Icon: 'i-lucide-check-circle'(I-lucide-Check-Kreis)
  Klasse: "W-voll"
Klasse: 'Überlauf-X-Auto'
---
::

@@ph098@@@Beispiele

### Control Aktiver Artikel

Sie können das aktive Element steuern, indem Sie die `default-value` prop oder die `v-model` Direktive mit der `value` des Elements verwenden.

: component-example {name="timeline-model-value-example" prettier}

::tip
Verwenden Sie `value-key` prop, um den Schlüssel zu ändern, der für die Übereinstimmung mit Elementen verwendet wird, wenn ein `v-model` oder `default-value` bereitgestellt wird.
::

### Mit ausgewähltem Event

Sie können einen `@select`-Listener hinzufügen, um Elemente anklickbar zu machen.

::note
Die handler-Funktion empfängt die Argumente `Event` und `TimelineItem` als erstes bzw. zweites Argument.
::

::component-example
---
Schöner: wahr
timeline-select-example (Beispiel)
---
::

### Mit alternativem Layout

Verwenden Sie `ui` prop, um eine Zeitleiste mit alternierendem Layout zu erstellen.

: component-example {name="timeline-alternating-layout-example" prettier}

### Mit benutzerdefinierten Steckplatz

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element anzupassen.

Sie haben Zugriff auf folgende Slots:

`#{{ item.slot }}-indicator``#{{ item.slot }}-indicator`PH1119 @
`#{{ item.slot }}-date`PH12121@@@@@@@@PH1222 @
`#{{ item.slot }}-title``#{{ item.slot }}-title``#{{ item.slot }}-title`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###############################################################################################################################

: component-example {name="timeline-custom-slot-example" prettier}

### Mit Slots

Verwenden Sie die verfügbaren Slots, um eine komplexere Timeline zu erstellen.

: component-beispiel {name="timeline-slots-example" prettier}

@@@@@132@@api

@@@@@@@@133@@props

Komponenten-Props

### Slots

Die Komponenten-Slots

@@@@@@@@135@Emits

Komponenten emittieren

@@136@Einsteigertipps

Das Komponenten-Theme

@@ph137@@changelog @ changelog

Das Component-Changelog

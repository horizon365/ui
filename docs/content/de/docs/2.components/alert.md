---
description: Ein Callout, um die Aufmerksamkeit des Benutzers zu erregen.
category: element
keywords:
  - notice
  - inline notification
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Alert.vue
---

@@@ph000@Verwendung

@@ph001@title

Verwenden Sie `title` prop, um den Titel des Alerts festzulegen.

::component-code
---
Props:
  Titel: „ Kopf hoch!"
---
::

@@ph003 @ Beschreibung

Verwenden Sie `description` prop, um die Beschreibung des Alerts festzulegen.

::component-code
---
Schöner: wahr
Props:
  Titel: „ Kopf hoch!"
  Beschreibung: 'Sie können die Primärfarbe in Ihrer App-Konfiguration ändern.'
---
::

@@ph005@@gmail.de

Verwenden Sie die `icon` prop, um eine [Icon](/docs/components/icon) anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@11@Titel
  @@ph012@beschreibung
Props:
  Titel: "Kopf hoch!"
  Beschreibung: 'Sie können die Primärfarbe in Ihrer App-Konfiguration ändern.'
  I-Lucide-Terminal-Symbol
---
::

@@@@@avatar@@avatar@@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avataratar@avataratar@avatarataratar@avataratar@avataratar@avataratar@avataratar@avatar@avataratar@avatar@avataratar@avatar@avataratar@avatarataratar@avatar@avataratar@avatarataratar@avataratar@avatar@avatar@avataratarataratar@@avatarataratar@avatar@avatarataratar@@@@avatarataratarataratar

Verwenden Sie die `avatar` prop, um eine [Avatar](/docs/components/avatar) anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph019@title
  @@ph020@beschreibung
Props:
  Titel: "Kopf hoch!"
  Beschreibung: "Sie können die Primärfarbe in Ihrer App-Konfiguration ändern."
  avatar. src: 'https://github.com/nuxt.png'(englisch)
---
::

@@ph021@@gmail.de

Verwenden Sie `color` prop, um die Farbe des Alerts zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph023@title
  @@ph024@beschreibung
  @@ph025@@gmail.de
Props:
  Farbe: neutral
  Titel: "Kopf hoch!"
  Beschreibung: "Sie können die Primärfarbe in Ihrer App-Konfiguration ändern."
  I-Lucide-Terminal-Symbol
---
::

@@ph026@@@Variantentyp

Verwenden Sie `variant` prop, um die Variante des Alerts zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph028@title
  @@ph029@beschreibung
  @@ph030@@gmail.de
Props:
  Farbe: neutral
  Variante: subtil
  Titel: "Kopf hoch!"
  Beschreibung: 'Sie können die Primärfarbe in Ihrer App-Konfiguration ändern.'
  I-Lucide-Terminal-Symbol
---
::

@@ph031@@abschluss@abschluss.de

Verwenden Sie die `close` prop, um eine [Button](/docs/components/button) anzuzeigen, um die Warnung abzuweisen.

::tip
Ein `update:open`-Ereignis wird ausgegeben, wenn der Schließen-Button angeklickt wird.
::

::component-code
---
Schöner: wahr
Ignoriert:
  @@@@@@38@title
  @@ph039 @ Beschreibung
  @@ph040@@schließen
  @@ph041@gmail.de
  @@ph042@@variantenreich
Props:
  Titel: "Kopf hoch!"
  Beschreibung: 'Sie können die Primärfarbe in Ihrer App-Konfiguration ändern.'
  Farbe: neutral
  Variante: Übersicht
  Schließen: true
---
::

Sie können jede Eigenschaft aus der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph047@title
  @@ph048@beschreibung
  - close.color (@ close. color) Bearbeiten
  @@ph050@close.variant (nicht)
  @@ph051@gmail.de
  @@ph052@@variantenreich
Props:
  Titel: "Kopf hoch!"
  Beschreibung: "Sie können die Primärfarbe in Ihrer App-Konfiguration ändern."
  Farbe: neutral
  Variante: Übersicht
  Schließen:
    Farbe: Primary
    Beschreibung: Outline
    Klasse: 'rounded-full'
---
::

@@ph053@Schließen-Symbol

Verwenden Sie die `close-icon` prop, um die Schließen-Taste anzupassen [Icon](/docs/components/icon). Standardmäßig auf `i-lucide-x`.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph060@@title
  - description
  -  schließen
  @@ph063@gmail.de
  @@ph064@@variantenreich
Props:
  Titel: "Kopf hoch!"
  Beschreibung: "Sie können die Primärfarbe in Ihrer App-Konfiguration ändern."
  Farbe: neutral
  Beschreibung: Outline
  Schließen: true
  closeIcon: 'i-lucide-arrow-right'(I-lucide-arrow-rechts)
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

@@ph069@@Aktion

Verwenden Sie die `actions` prop, um einige [Button](/docs/components/button) Aktionen zur Warnung hinzuzufügen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph075@title
  @@ph076@Aktion
  @@@@@@@@@@@@@@@@colour@colour@colour@colour@colour@colour@colour@colour@colour@colour@colour@colour@colour@colour@colour@colour@colour@colour@colour@colour@colour@colour@colour@colour@colourcolour@colour@colour@colourcolour@colour@colourcolour@colourcolour@colourcolour@colourcolour@colourcolour@colourcolourcolour@colourcolour@colourcolour@colourcolourcolour@colourcolour@colourcolourcolour@colourcolourcolour@colourcolour@colourcolourcolour
  @@@ph078@@variantenreich
Props:
  Titel: "Kopf hoch!"
  Beschreibung: "Sie können die Primärfarbe in Ihrer App-Konfiguration ändern."
  Farbe: neutral
  Variante: Übersicht
  Aktionen:
    - label: Aktion 1
    - label: Aktion 2
      Farbe: neutral
      Variante: subtil
---
::

@@@@@@@@@@@ph081@@Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung des Alerts zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@@@@83@title
  @@@@@@@@@844@actions
  @@@@@@@@@@@@@@ph085@color
  @@ph086@@variantenreich
Props:
  Titel: "Kopf hoch!"
  Beschreibung: "Sie können die Primärfarbe in Ihrer App-Konfiguration ändern."
  Farbe: neutral
  Variante: Übersicht
  Ausrichtung: horizontal
  Aktionen:
    - label: Aktion 1
    - label: Aktion 2
      Farbe: neutral
      Variante: subtil
---
::

@@ph089@@Beispiele

`class` prop

Verwenden Sie `class` prop, um die Basisstile des Alerts zu überschreiben.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph093@title
  @@ph094@beschreibung
Props:
  Titel: "Kopf hoch!"
  Beschreibung: "Sie können die Primärfarbe in Ihrer App-Konfiguration ändern."
  Klasse: 'rounded-none'(nicht gerundet)
---
::

`ui` prop

Verwenden Sie `ui` prop, um die Slots-Stile des Alerts zu überschreiben.

::component-code
---
Schöner: wahr
Ignoriert:
  @@@@@@@@@@@@ph098@@ui
  @@999@Titel
  @@@ph100@beschreibung
  @@@@@@@@icon101
Props:
  Titel: "Kopf hoch!"
  Beschreibung: 'Sie können die Primärfarbe in Ihrer App-Konfiguration ändern.'
  I-Lucide-Rakete
  ui: ist
    Icon: "Größe-11"
---
::

@@102@btw

@@@@@@@@ph103@props

Komponenten Props

### Slots

Die Komponenten-Slots

@@ph105@@emits

Komponenten emittieren

@@106@@Einsteiger

Das Komponenten-Theme

@@ph107@@changelog (auf Englisch)

Das Component-Changelog

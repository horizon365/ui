---
description: Eine Liste von Schaltflächen oder Links zum Navigieren durch Seiten.
category: navigation
keywords:
  - pager
  - page navigation
links:
  - label: Paginierung
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pagination
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Pagination.vue
---

@@@ph000@@Verwendung

Verwenden Sie die `default-page` prop oder die `v-model:page` Direktive, um die aktuelle Seite zu steuern.

::component-code
---
Außen:
  @@ph003@Seite
Das Model:
  @@ph004@Seite
Ignoriert:
  @@ph005@Seite
  - Gesamt
Props:
  Seite: 5
  Gesamt: 100
---
::

::note
Die Paginierungskomponente verwendet einige [`Button`](/docs/components/button) um die Seiten anzuzeigen, verwenden Sie [`color`](#color),[](#variant) und [`size`](#size) props, um sie zu stylen.
::

### Gesamt

Verwenden Sie `total` prop, um die Gesamtzahl der Elemente in der Liste festzulegen.

::component-code
---
Außen:
  @@ph029@Seite
Das Model:
  @@ph030@Seite
Props:
  Seite: 5
  Gesamt: 100
---
::

### Artikel pro Seite

Verwenden Sie `items-per-page` prop, um die Anzahl der Elemente pro Seite festzulegen.

::component-code
---
Ignoriert:
  @@ph034@Seite
Außen:
  @@ph035@Seite
Modell:
  @@ph036@Seite
Props:
  Seite: 5
  Artikel-Schlagworte: 20
  Gesamt: 100
---
::

### Sibling Graf

Verwenden Sie `sibling-count` prop, um die Anzahl der Geschwister zu setzen, die angezeigt werden sollen. Defaults zu `2`.

::component-code
---
Ignoriert:
  @@ph040@Seite
  - insgesamt
Außen:
  @@ph042@Seite
Modell:
  @@ph043@Seite
Props:
  Seite: 5
  SiblingCount: 1
  Gesamt: 100
---
::

### Show Edges Bearbeiten

Verwenden Sie `show-edges` prop, um immer die Auslassungspunkte, die erste und die letzte Seite anzuzeigen.

::component-code
---
Ignoriert:
  @@ph047@Seite
  @@@@@48@insgesamt
Außen:
  @@ph049@Seite
Das Model:
  @@ph050@Seite
Props:
  Seite: 5
  Schlagwörter: true
  SiblingCount: 1
  Gesamt: 100
---
::

### Show-Controls

Verwenden Sie `show-controls` prop, um den ersten, den vorherigen, den nächsten und den letzten Button anzuzeigen.

::component-code
---
Ignoriert:
  @@ph054@Seite
  @@555@insgesamt
Außen:
  @@ph056@Seite
Das Model:
  @@ph057@Seite
Props:
  Seite: 5
  Anzeige: false
  Schlagwörter: true
  Gesamt: 100
---
::

### color

Verwenden Sie `color` prop, um die Farbe der inaktiven Steuerelemente festzulegen.

::component-code
---
Ignoriert:
  @@ph061@Seite
  - insgesamt
Außen:
  @@ph063@Seite
Modell:
  @@ph064@Seite
Items:
  Farbe:
    @@@@@@65@@1965
    @@@@@@@@@@@@ph066@zweitrangig
    - Erfolg
    @@@68@@info.de
    @@ph069@@warning
    @@ph070@Fehler
    @@@ph071@neutral
Props:
  Seiten: 5
  Farbe: Primär
  Gesamt: 100
---
::

@@@ph072@@@@@Variant.de

Verwenden Sie `variant` prop, um die Variante der inaktiven Steuerelemente zu setzen.

::component-code
---
Ignoriert:
  @@@ph075@Seite
  - insgesamt
Außen:
  @@@ph077@Seite
Das Model:
  @@@ph078@Seite
Items:
  Farbe:
    @@@@@@@@@@1979
    @@@@@@@@@@@ph080@@secondary
    @@@@@@81@@Erfolg
    @@@82@@info@info@info@info@@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@@info@info@info@info@@info@info@@info@info@info@info@@info@@info@@info@info@info@info@info@info@info@info@info@info@info@info
    @@@@@@@@@@@@ph083@@warning
    @@@84@@Fehler
    @@85@Neutral
  Variante:
    @@@@@@@@@@@@@@@ph086@@@solid
    @@@@@@@@@ph087@@outline
    @@@@@@88@88@88@88@888@88@@888@@888@@@888@@88@88@@888@@88@@888@@88@@88@@888@@88@8@@88@8@88@8@88@@@888@8@@888@8@888@@888@@8@@888@8@@@8888@@@@88@@888@@@@888@@@@@88888@@@@@@@@@888888@@@@@@@@@@@8888888@@@@@@@@@@@@@@@888888888@@@@@@@@@@@@@@@@@@@@@@@@@@8888
    @@@@@ph089@unterschwellig
    @@ph090@ghost@ghost@ghost@ghost@ghost@ghost@ghost.com
    @@@@@@@1991 @ Link
Props:
  Seite: 5
  Farbe: neutral
  Variante: subtil
  Gesamt: 100
---
::

### Aktivfarbe

Verwenden Sie `active-color` prop, um die Farbe des aktiven Steuerelements festzulegen. Standardmäßig ist `primary`.

::component-code
---
Ignoriert:
  @@ph095@@Seite
  @@@@@@96@insgesamt
Außen:
  @@ph097@Seite
Modell:
  @@@@@@98@@Seite
Items:
  Aktiviert:
    @@999@1
    - zweitrangig
    @@101@Erfolg
    @@102@@info@@info@@info@info@@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@
    @@103@warning
    @@ph104@Fehler
    @@ph105@neutral
Props:
  Seite: 5
  Farbe: Neutral
  Gesamt: 100
---
::

### Aktive Variante

Verwenden Sie `active-variant` prop, um die Variante des aktiven Steuerelements zu setzen.

::component-code
---
Ignoriert:
  @@ph109@@Seite
  @@110@insgesamt
Außen:
  @@111@Seite
Das Model:
  @@ph112@Seite
Items:
  Aktiviert:
    @@113@113@13@13@13@113@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@13@@13@13@@13@@@13@@@13@@@@@13@@@@13@@@@@@@@@@@@@@@@@@@@@11113@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@114@zweitrangig
    - Erfolg
    @@116@info.de
    @@117@warning
    @@118@Fehler
    @@119@Neutral
  Aktivvariante:
    @@ph120@@gmail.de
    - outline (@@@@ outline) Bearbeiten
    - smail.de
    - unterschwellig
    @@ph124@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost
    @@125@Link
Props:
  Seiten: 5
  activeFarbe: primär
  Ausführung: subtiler
  Gesamt: 100
---
::

@@126@126@126@126

Verwenden Sie `size` prop, um die Größe der Steuerelemente festzulegen. Standardmäßig auf `md`.

::component-code
---
Ignoriert:
  @@ph129@Seite
  @@130@Gesamtsumme
Außen:
  @@131@Seite
Das Model:
  @@ph132 @ Seite
Items:
  Größe:
    @@133@xxx
    @@134@sm
    @135@md
    @@136@@gmail.de
    @@137@xl
Props:
  Seiten: 5
  Größe: XL
  Gesamt: 100
---
::

@@138@@dealery.de

Verwenden Sie `disabled` prop, um die Paginierungssteuerelemente zu deaktivieren.

::component-code
---
Ignoriert:
  @@ph140@Seite
  @@141@141@insgesamt
Außen:
  @@ph142@Seite
Das Model:
  @@ph143@Seite
Props:
  Seite: 5
  Gesamt: 100
  Behindert: Wahr
---
::

## Beispiele

@@145@mit Links

Verwenden Sie `to` prop, um Schaltflächen in Links zu verwandeln. Übergeben Sie eine Funktion, die die Seitenzahl empfängt und ein Routenziel zurückgibt.

::component-example
---
name: 'pagination-links-beispiel'
---
::

::note
In diesem Beispiel fügen wir den `#with-links`-Hash hinzu, um zu vermeiden, dass Sie an den Anfang der Seite gelangen.
::

@@148@bmg148

@@@@@@@@149@@@props

Komponenten-Props

### Slots

Die Komponenten-Slots

### Emits

Komponenten emittieren

@@ph152@@gmail.de

Das Komponenten-Theme

@@ph153@@changelog @@@ changelog @@@ changelog

Das Component-Changelog

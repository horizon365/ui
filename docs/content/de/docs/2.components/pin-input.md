---
title: Pininput hinzufügen
description: Ein Eingabeelement, um einen Pin einzugeben.
category: form
keywords:
  - otp
  - one-time password
  - verification code
links:
  - label: PinEingang
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pin-input
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PinInput.vue
---

@@@ph000@@Verwendung

Verwenden Sie die `v-model`-Direktive, um den Wert des PinInput zu steuern.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: []
---
::

Verwenden Sie `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
Schöner: wahr
Ignoriert:
  - defaultValue
Props:
  DefaultValue: ['1','2','3']
---
::

@@@@@@@006@0000@000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Verwenden Sie `type` prop, um den Eingabetyp zu ändern. Standardmäßig ist `text`.

::component-code
---
Items:
  Typen:
    @@ph009@@text
    @@ph010@@Nummer
Props:
  Typ: 'Anzahl'
---
::

::note
Wenn `type` auf `number` gesetzt ist, werden nur numerische Zeichen akzeptiert.
::

@@@@@13@13.13.2013

Verwenden Sie `mask` prop, um die Eingabe wie ein Passwort zu behandeln.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph015@gmail.de
  - defaultValue
Props:
  Maske: wahr
  defaultValue: ['1','2','3','4','5']
---
::

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##########################################################################################################################################################################################################

Verwenden Sie `otp` prop, um die One-Time Password-Funktion zu aktivieren. Wenn diese Funktion aktiviert ist, können mobile Geräte OTP-Codes automatisch aus SMS-Nachrichten oder Zwischenablage-Inhalten erkennen und ausfüllen, wobei die automatische Vervollständigung unterstützt wird.

::component-code
---
Props:
  OTP: Wahr
---
::

### Platzhalter

Verwenden Sie `placeholder` prop, um einen Platzhaltertext zu setzen.

::component-code
---
Props:
  Beispiel: „ Platzhalter "
---
::

### Länge

Verwenden Sie `length` prop, um die Anzahl der Eingaben zu ändern.

::component-code
---
Ignoriert:
  @@ph023@gmail.de
Props:
  Länge: 6
  Beispiel: „ Platzhalter "
---
::

### Separator: badge{label="4.9+" class="align-text-top"}

Verwenden Sie `separator` prop, um ein Trennzeichen zwischen Gruppen von Eingängen einzufügen.

::component-code
---
Ignoriert:
  @@ph027@gmail.de
Props:
  Länge: 6
  Trennung: 3
  Beispiel: „ Platzhalter "
---
::

Sie können auch ein Array von Positionen übergeben, um Trennzeichen nach bestimmten Eingaben einzufügen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph028@@gmail.de
  @@ph029@@Länge
  @@ph030@@trennzeichen
Props:
  Dauer: 7
  Trennzeichen: [3, 4]
  Beispiel: „ Platzhalter "
---
::

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###############################################################################################################################################################################################

Verwenden Sie `color` prop, um die Ringfarbe zu ändern, wenn der PinInput fokussiert ist.

::component-code
---
Ignoriert:
  @@ph033@gmail.de
Props:
  Farbe: neutral
  Highlight: Wahr
  Beispiel: "Platzhalter"
---
::

::note
`highlight` prop wird hier verwendet, um den Fokuszustand anzuzeigen. Es wird intern verwendet, wenn ein Validierungsfehler auftritt.
::

@@ph035@@Variantentabelle

Verwenden Sie `variant` prop, um die Variante der PinInput zu ändern.

::component-code
---
Ignoriert:
  @@ph037@gmail.de
Props:
  Farbe: neutral
  Variante: subtil
  Markiert: false
  Beispiel: "Platzhalter"
---
::

@@@@@@38@38

Verwenden Sie `size` prop, um die Größe der PinInput zu ändern.

::component-code
---
Ignoriert:
  @@ph040@@gmail.de
Props:
  Größe: XL
  Beispiel: "Platzhalter"
---
::

### disabled @ disabled

Verwenden Sie `disabled` prop, um die PinInput zu deaktivieren.

::component-code
---
Ignoriert:
  @@ph043@gmail.de
Props:
  Behindert: Wahr
  Beispiel: "Platzhalter"
---
::

@@ph044@@Beispiele

### Mit Trennschlitz: badge{label="4.9+" class="align-text-top"}

Verwenden Sie den `separator`-Steckplatz, um das Erscheinungsbild des Separators anzupassen.

::component-example
---
Name: 'Pin-Input-Separator-Slot-Beispiel'
---
::

@@048@gbt-gbt.de

@@ph049@@@gmail.de

Komponenten Props

@@ph050@gmail.de

Die Komponenten-Slots

@@ph051@emits

Komponenten emittieren

### Aufdecken

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typ|
| ---- | ---- |
| {lang="ts-type"}| {lang="ts-type"}|

@@ph057@gmail.de

Das Komponenten-Theme

@@ph058@@changelog @@@ changelog

Das Component-Changelog

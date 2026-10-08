---
description: Eine Reihe von Schritten, die verwendet werden, um den Fortschritt in einem mehrstufigen Prozess anzuzeigen.
category: navigation
keywords:
  - wizard
links:
  - label: Stepper sein
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/stepper
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Stepper.vue
---

@@@ph000@@Verwendung

Verwenden Sie die Stepper-Komponente, um eine Liste der Elemente in einem Stepper anzuzeigen.

::component-code
---
Einsturz: wahr
Hide:
  @@001@Klasse
Ignoriert:
  @@ph002@@gmail.de
  @@003@Klasse
Außen:
  @@ph004@gmail.de
Externe Personen:
  - StepperItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Items:
    - title:'Adresse'
      Beschreibung: 'Fügen Sie hier Ihre Adresse hinzu'
      Das I-Lucide-Haus
    - title:'Versand'
      Beschreibung: 'Wählen Sie Ihre bevorzugte Versandmethode'
      Icon: 'I-Lucide-Truck'(englisch)
    - title:'Checkout'(siehe unten)
      Beschreibung: 'Bestätigen Sie Ihre Bestellung'
  Klasse: "W-voll"
---
::

@@ph009@gmail.de

Verwenden Sie `items` prop als Array von Objekten mit den folgenden Eigenschaften:

`title?: string``title?: string`{lang="ts-type"}
`description?: AvatarProps`{lang="ts-type"}`description?: AvatarProps`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}
`content?: string``content?: string``content?: string`{lang="ts-type"}
`icon?: string`PH0221{lang="ts-type"}
`value?: string | number``value?: string | number``value?: string | number`{lang="ts-type"}
`disabled?: boolean`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}
[`slot?: string`))))))))PH03434@@@@PH03434@@@@@@@PH03444444444@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`class?: any``class?: any`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}
`ui?: { item?: ClassNameValue, container?: ClassNameValue, trigger?: ClassNameValue, indicator?: ClassNameValue, icon?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }``ui?: { item?: ClassNameValue, container?: ClassNameValue, trigger?: ClassNameValue, indicator?: ClassNameValue, icon?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }``ui?: { item?: ClassNameValue, container?: ClassNameValue, trigger?: ClassNameValue, indicator?: ClassNameValue, icon?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }``ui?: { item?: ClassNameValue, container?: ClassNameValue, trigger?: ClassNameValue, indicator?: ClassNameValue, icon?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }``ui?: { item?: ClassNameValue, container?: ClassNameValue, trigger?: ClassNameValue, indicator?: ClassNameValue, icon?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"}PH04040@@@@@@@@@@@@@PH0404040@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

::component-code
---
Ignoriert:
  @@ph042@@gmail.de
  @@ph043@gmail.de
Außen:
  @@ph044@gmail.de
Externe Typen:
  - StepperItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Items:
    - title:'Adresse'
      Beschreibung: 'Fügen Sie Ihre Adresse hier hinzu'
      Das I-Lucide-Haus
    - title:'Versand'
      Beschreibung: 'Wählen Sie Ihre bevorzugte Versandmethode'
      Icon: 'I-Lucide-Truck'(englisch)
    - title:'Checkout'(siehe unten)
      Beschreibung: 'Bestätigen Sie Ihre Bestellung'
  Klasse: "W-voll"
---
::

::note
Klicken Sie auf die Elemente, um durch die Schritte zu navigieren.
::

@@ph049@gmail.de

Verwenden Sie die `color` prop, um die Farbe des Steppers zu ändern.

::component-code
---
Ignoriert:
  @@ph051 @ Inhalt
  @@ph052@gmail.de
  @@53@Klasse
Außen:
  @@ph054@gmail.de
Externe Personen:
  - StepperItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Farbe: neutral
  Items:
    - title:'Adresse'
      Beschreibung: 'Fügen Sie Ihre Adresse hier hinzu'
      Das I-Lucide-Haus
    - title:'Versand'
      Beschreibung: 'Wählen Sie Ihre bevorzugte Versandmethode'
      Icon: 'I-Lucide-Truck'(englisch)
    - title:'Checkout'(siehe unten)
      Beschreibung: 'Bestätigen Sie Ihre Bestellung'
  Klasse: "W-voll"
---
::

@@599@059@059@0000000000000000000

Verwenden Sie die `size` prop, um die Größe des Steppers zu ändern.

::component-code
---
Ignoriert:
  @@@@@@@@@@ph061@@@content
  - Artikel
  @@@@@@class063@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@class@class@class
Außen:
  @@ph064@gmail.de
Externe Typen:
  - StepperItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Größe: XL
  Items:
    - title:'Adresse'
      Beschreibung: 'Fügen Sie Ihre Adresse hier hinzu'
      Das I-Lucide-Haus
    - title:'Versand'
      Beschreibung: 'Wählen Sie Ihre bevorzugte Versandmethode'
      Icon: 'I-Lucide-Truck'(englisch)
    - title:'Checkout'(siehe unten)
      Beschreibung: 'Bestätigen Sie Ihre Bestellung'
  Klasse: "W-voll"
---
::

@@ph069@@Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung des Stepper. Defaults auf `horizontal` zu ändern.

::component-code
---
Ignoriert:
  @@@@@@@@@@@ph072@@@content
  @@@ph073@gmail.de
  @@@@@@@class074@class@class@class074@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclassclass@class@class@class@class@class@class@class@class@class@class@class@class@class@class
Außen:
  @@ph075@gmail.de
Externe Typen:
  - StepperItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Ausrichtung: Vertikal
  Items:
    - title:'Adresse'
      Beschreibung: 'Fügen Sie Ihre Adresse hier hinzu'
      Das I-Lucide-Haus
    - title:'Versand'
      Beschreibung: 'Wählen Sie Ihre bevorzugte Versandmethode'
      Icon: 'I-Lucide-Truck'(englisch)
    - title:'Checkout'(siehe unten)
      Beschreibung: 'Bestätigen Sie Ihre Bestellung'
  Klasse: "W-voll"
---
::

### disabled

Verwenden Sie die `disabled` prop, um die Navigation durch die Schritte zu deaktivieren.

::component-code
---
Ignoriert:
  @@@@@@@@@@@@@@@@@@@@@@@@ph082@@@@@@content
  @@ph083@gmail.de
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@class@classclassclassclass@classclass@class@class@class@class@class@class@class@class@class@class@class@class@c
Außen:
  @@@@@@@@@@@ph085@gmail.de
Externe Personen:
  - StepperItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Behindert: Wahr
  Items:
    @@ph087@title:'Adresse'
      Beschreibung: 'Fügen Sie Ihre Adresse hier hinzu'
      Das I-Lucide-Haus
    - title:'Versand'
      Beschreibung: 'Wählen Sie Ihre bevorzugte Versandmethode'
      Icon: 'I-Lucide-Truck'(englisch)
    - title:'Checkout'(siehe unten)
      Beschreibung: 'Bestätigen Sie Ihre Bestellung'
---
::

::note{to="#with-controls"}
Dies kann hilfreich sein, wenn Sie die Navigation mit Steuerelementen erzwingen möchten.
::

@@ph090@@Beispiele

### Mit Kontrollen

Sie können zusätzliche Steuerelemente für den Stepper mithilfe von Tasten hinzufügen.

: component-beispiel {name="stepper-with-controls-example"}

### Control Aktives Element

Sie können das aktive Element steuern, indem Sie die `default-value` prop oder die `v-model` Direktive mit der `value` des Elements verwenden.

: component-beispiel {name="stepper-model-value-example"}

::tip
Verwenden Sie `value-key` prop, um den Schlüssel zu ändern, mit dem Elemente übereinstimmen, wenn ein `v-model` oder `default-value` bereitgestellt wird.
::

### Mit Inhalt Slot

Verwenden Sie den `#content`-Slot, um den Inhalt jedes Elements anzupassen.

: component-example {name="stepper-content-slot-example"}

### Mit benutzerdefinierten Steckplatz

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element anzupassen.

Sie haben Zugriff auf folgende Slots:

`#{{ item.slot }}`PH10999@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

: component-example {name="stepper-custom-slot-example"}

@1111@bpb

@@@@@@@@ph112@props

Komponenten Props

### Slots

Die Komponenten-Slots

@@@@@@@114@Emits

Komponenten emittieren

### Aufdecken

Sie können auf die typisierte Komponenteninstanz über [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) zugreifen.

```vue
<script setup lang="ts">
const stepper = useTemplateRef('stepper')
</script>

<template>
  <UStepper ref="stepper" />
</template>
```

Dies gibt Ihnen Zugang zu den folgenden:

| Vorname| Typen|
| ---- | ---- |
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##########################################################################################################################|{lang="ts-type"}|
| {lang="ts-type"}|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|
| {lang="ts-type"}|{lang="ts-type"}|
| {lang="ts-type"}| {lang="ts-type"}|

@@146@Einsteigertipps

Das Komponenten-Theme

@@ph147@@changelog (auf Englisch)

Das Component-Changelog

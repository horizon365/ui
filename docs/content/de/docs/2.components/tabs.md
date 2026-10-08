---
description: Eine Reihe von Tab-Panels, die jeweils einzeln angezeigt werden.
category: navigation
keywords:
  - tabbed
  - panels
  - sections
links:
  - label: Tabs sind
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tabs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tabs.vue
---

@@@ph000@Verwendung

Verwenden Sie die Tabs-Komponente, um eine Liste von Elementen in Tabs anzuzeigen.

::component-example
---
Einsturz: wahr
Schöner: wahr
Name: 'Tabs-Beispiel'
Props:
  Klasse: "W-voll"
---
::

@@ph001@gmail.de

Verwenden Sie `items` prop als Array von Objekten mit den folgenden Eigenschaften:

`label?: string`PH0004@@@@@@@@@@@PH0005 @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH0007@@@@@@@@@@@PH0008@@@@@PH00008 @
`avatar?: AvatarProps``avatar?: AvatarProps`PH0111 @@
`badge?: string | number | BadgeProps``badge?: string | number | BadgeProps``badge?: string | number | BadgeProps`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}`badge?: string | number | BadgeProps`{lang="ts-type"}
`content?: string``content?: string``content?: string`{lang="ts-type"}{lang="ts-type"}`content?: string``content?: string``content?: string`
`value?: string | number``value?: string | number`PH02020
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
- [`slot?: string`](#with-custom-slot)
`class?: any`PH03333 @
`ui?: { trigger?: ClassNameValue, leadingIcon?: ClassNameValue, leadingAvatar?: ClassNameValue, leadingAvatarSize?: ClassNameValue, label?: ClassNameValue, trailingBadge?: ClassNameValue, trailingBadgeSize?: ClassNameValue, content?: ClassNameValue }``ui?: { trigger?: ClassNameValue, leadingIcon?: ClassNameValue, leadingAvatar?: ClassNameValue, leadingAvatarSize?: ClassNameValue, label?: ClassNameValue, trailingBadge?: ClassNameValue, trailingBadgeSize?: ClassNameValue, content?: ClassNameValue }``ui?: { trigger?: ClassNameValue, leadingIcon?: ClassNameValue, leadingAvatar?: ClassNameValue, leadingAvatarSize?: ClassNameValue, label?: ClassNameValue, trailingBadge?: ClassNameValue, trailingBadgeSize?: ClassNameValue, content?: ClassNameValue }`{lang="ts-type"}{lang="ts-type"}

::component-code
---
Ignoriert:
  @@ph037@gmail.de
  @@@@@@38@38@38@38@38@38@38@38@38@38@38@38@38@38@38@38@@38@38@@38@38@@38@@38@@38@@38@@38@@38@@38@@38@@38@@38@@38@@38@@38@38@@38@@38@@@38@@@38@@@38@@@38@@@@@38@@@@@38@@@@@@@@@@@@@@@@@@38338@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@383338
Außen:
  @@ph039@gmail.de
Externe Typen:
  @@ph040@@tabsItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Items:
    - label: Rechnung
      Icon: 'i-lucide-user'(Benutzer)
      content: "Dies ist der Inhalt des Kontos."
    @@ph042@@label: Passwort eingeben
      Icon: 'i-lucide-lock'(I-luzide-Schloss)
      content: 'Dies ist der Inhalt des Passworts.'
  Klasse: "W-voll"
---
::

@@ph043@@Inhalt

Setzen Sie `content` prop auf `false`, um die Trigger ohne Panels zu rendern.

::component-code
---
Ignoriert:
  @@@@@@@@@@@ph047@@Inhalt
  @@ph048@gmail.de
  @@@@@@49@class
Außen:
  @@@ph050@gmail.de
Externe Personen:
  @@ph051@@tabsItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Inhalt: false
  Items:
    - label: Rechnung
      Icon: 'i-lucide-user'(Benutzer)
      content: "Dies ist der Inhalt des Kontos."
    @@ph053@label: Passwort eingeben
      Icon: 'i-lucide-lock'(I-luzide-Schloss)
      content: 'Dies ist der Inhalt des Passworts.'
  Klasse: "W-voll"
---
::

@@ph054@unmount

Verwenden Sie `unmount-on-hide` prop, um zu verhindern, dass der Inhalt beim Herunterklappen der Tabs entfernt wird.

::component-code
---
Ignoriert:
  @@ph057@@Inhalt
  @@ph058@gmail.de
  @@599@Klasse
Außen:
  @@ph060@@gmail.de
Externe Typen:
  - TabsItem [Bearbeiten | Quelltext bearbeiten]
Props:
  unmountOnHide: falsch
  Items:
    - label: Rechnung
      Icon: 'i-lucide-user'(Benutzer)
      content: "Dies ist der Inhalt des Kontos."
    - label: Passwort eingeben
      Icon: 'i-lucide-lock'(I-luzide-Schloss)
      content: 'Dies ist der Inhalt des Passworts.'
  Klasse: "W-voll"
---
::

::note
Sie können das DOM inspizieren, um zu sehen, wie der Inhalt jedes Elements gerendert wird.
::

### Farbe

Verwenden Sie die `color` prop, um die Farbe der Tabs zu ändern.

::component-code
---
Ignoriert:
  @@@@@@@@@@@@@ph066@@@@content
  - Artikel
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@class@class@class@class@class@class@class@class@class@classc
Außen:
  @@ph069@gmail.de
Externe Typen:
  - TabsItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Farbe: neutral
  Inhalt: false
  Items:
    - label: Rechnung
    - label: Passwort eingeben
  Klasse: "W-voll"
---
::

@@@ph073@@@Variant

Verwenden Sie die `variant` prop, um die Variante der Tabs zu ändern.

::component-code
---
Ignoriert:
  - content
  @@ph076@@gmail.de
  @@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@c
Außen:
  @@@ph078@@gmail.de
Externe Personen:
  - TabsItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Farbe: neutral
  Variante: Link
  Inhalt: false
  Items:
    - label: Rechnung
    - label: Passwort eingeben
  Klasse: "W-voll"
---
::

### Größe

Verwenden Sie die `size` prop, um die Größe der Tabs zu ändern.

::component-code
---
Ignoriert:
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@ph084@@@@content
  @@@@@@@@@@@ph085@gmail.de
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@classclass@class@classclassclassclassclass@class@class
Außen:
  @@@ph087@gmail.de
Externe Personen:
  @@@@@@@@@@@@TabsItem []
Props:
  Größe: md
  Variante: Pille
  Inhalt: false
  Items:
    - label: Rechnung
    @@ph090@label: Passwort eingeben
  Klasse: "W-voll"
---
::

@@ph091@@Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung der Tabs. Defaults auf `horizontal` zu ändern.

::component-code
---
Ignoriert:
  @@ph094 @ Inhalt
  @@ph095@gmail.de
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class
Außen:
  @@ph097@gmail.de
Externe Personen:
  @@ph098@@tabsItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Ausrichtung: Vertikal
  Variante: Pille
  Inhalt: false
  Items:
    - label: Rechnung
    @@@ph100@label: Passwort eingeben
  Klasse: "W-voll"
---
::

@@101 @ Beispiele

### Control aktiv Element

Sie können das aktive Element steuern, indem Sie die `default-value` prop oder die `v-model` Direktive mit der `value` des Elements verwenden. Wenn kein `value` angegeben ist, wird standardmäßig der Index **als Zeichenfolge ** verwendet.

: component-example {name="tabs-model-value-example"}

::tip
Verwenden Sie `value-key` prop, um den Schlüssel zu ändern, der für die Übereinstimmung mit Elementen verwendet wird, wenn ein `v-model` oder `default-value` bereitgestellt wird.
::

### Mit Routenabfrage

Sie können das aktive Element über einen URL-Abfrageparameter steuern, indem Sie `route.query.tab` als `value` des Elements verwenden.

: component-example {name="tabs-route-query-example"}

### Mit Inhalt Slot

Verwenden Sie den `#content`-Slot, um den Inhalt jedes Elements anzupassen.

: component-example {name="tabs-content-slot-example"}

### Mit unterer Tabulatorleiste

Verwenden Sie `ui` prop, um die Tabs in eine untere Tab-Leiste im mobilen Stil mit Symbolen und kleinen Labels zu verwandeln, ähnlich wie bei YouTube oder Instagram.

::component-example
---
Einsturz: wahr
Tabs-bottom-tab-bar-Beispiel
---
::

### Mit benutzerdefinierten Steckplatz

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element anzupassen.

Sie haben Zugriff auf folgende Slots:

`#{{ item.slot }}``#{{ item.slot }}``#{{ item.slot }}`{lang="ts-type"}

::component-example
---
Einsturz: wahr
Name: 'tabs-custom-slot-Beispiel'
---
::

@@127@btw

@@@@@@@@@@@@@@@ph128@@props

Komponenten Props

### Spielautomaten

Die Komponenten-Slots

@@ph130@emits

Komponenten emittieren

@@131@131@131@131@131@131@131@131@131@131@131@131@13@131@13@131@131@13@131@131@13@131@@131@131@131@131@131@131@131@131@131@131@131@@131@131@131@@@13131@@@13131@@@@13131@@@@131331@@@@@@@1313131@@@@@@@@1313131@@@@@@@@@@@131313131331@@@@@@@@@@@@@@@@@@

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typ|
| ---- | ---- |
| {lang="ts-type"}|{lang="ts-type"}|

@@136@Einsteigertipps

Das Komponenten-Theme

@@ph137@@changelog @ changelog

Das Component-Changelog

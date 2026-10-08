---
title: Das Formfeld
description: Ein Wrapper für Formularelemente, der Validierung und Fehlerbehandlung bietet.
category: form
keywords:
  - field wrapper
  - form label
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FormField.vue
---

@@@ph000@@Verwendung

Wickeln Sie eine beliebige Formularkomponente mit einem FormField. Used in einem [Form](/docs/components/form), bietet es Validierung und Fehlerbehandlung.

@@ph005@@bmg-aufsatz

Verwenden Sie `label` prop, um die Beschriftung für das Formularsteuerelement festzulegen.

::component-code
---
Schöner: wahr
Props:
  Label: E-Mail
Slots auf:
  Default:|

    @@@@007 @
---

: u-eingabe {placeholder="Enter your email"}
::

::note
Das Attribut `for` und das Formular-Steuerelement sind mit einem eindeutigen `id` verknüpft, falls nicht angegeben.
::

Bei Verwendung von `required` prop wird neben dem Etikett ein Sternchen hinzugefügt.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph012@@aufkleber
Props:
  Label: E-Mail
  Erforderlich: true
Die Slots:
  Default:|

    @@ph013 @
---

: u-eingabe {placeholder="Enter your email"}
::

@@ph015 @ Beschreibung

Verwenden Sie `description` prop, um zusätzliche Informationen unter dem Etikett anzugeben.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph017@@aufkleber
Props:
  Label: E-Mail
  Beschreibung: Wir werden Ihre E-Mail-Adresse niemals mit anderen teilen.
Die Slots:
  Default:|

    @@ph018
---

: u-eingabe {placeholder="Enter your email" class="w-full"}
::

@@ph020@@hint

Verwenden Sie `hint` prop, um eine Hinweismeldung neben dem Etikett anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph022@@aufkleber
Props:
  Label: E-Mail
  Hint: optional
Die Slots:
  Default:|

    @@ph023
---

: u-eingabe {placeholder="Enter your email"}
::

@@ph025@hilfe

Verwenden Sie `help` prop, um eine Hilfenachricht unterhalb des Formular-Steuerelements anzuzeigen. Wenn Sie zusammen mit `error` prop verwendet werden, hat `error` prop Vorrang.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph029@@aufkleber
Props:
  Label: E-Mail
  Hilfe: Bitte geben Sie eine gültige E-Mail-Adresse ein.
Slots auf:
  Default:|

    @030
---

: u-input {placeholder="Enter your email" class="w-full"}
::

@@ph032@@Fehler

Verwenden Sie `error` prop, um eine Fehlermeldung unterhalb des Formular-Steuerelements anzuzeigen. Bei Verwendung zusammen mit `help` prop hat `error` prop Vorrang.

Bei Verwendung innerhalb eines [Form](/docs/components/form) wird dies automatisch gesetzt, wenn ein Validierungsfehler auftritt.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph040@@aufkleber
Props:
  Label: E-Mail
  error: Bitte geben Sie eine gültige E-Mail-Adresse ein.
Die Slots:
  Default:|

    @@041
---

: u-input {placeholder="Enter your email" class="w-full"}
::

::tip{to="/docs/getting-started/theme/design-system#color-system"}
Dies setzt die `color` auf `error` auf der Formularsteuerung. Sie können es global in Ihrem `app.config.ts` ändern.
::

@@ph046@@Fehlermuster

Dies ist besonders relevant für Komponenten mit Array-Werten wie [InputTags](/docs/components/input-tags), wo Fehler Array-Indizes in ihrem Namen enthalten (z. B.`tags.0`).

::tip{to="/docs/components/form#error-reporting"}
Siehe ein Beispiel für die Verwendung von `error-pattern` innerhalb eines Formulars.
::

@@@@@544@@554@54@54@54@54@54@54@54@@@54@@@54@@@54@@@54@@54@@@54@@@54@54@54@54@54@@54@54@@554@@54@54@54@54@54@54@54@554@54@@554@@554@@@554@@@54@@5554@@@@@@55554@@@@@@@@@@55554@@@@@@@@@@@@@55554@@@@@@@@@@@@@@55554@@@@@@@@@@@@@@@@@@@555554@@@@@@@@@@@@

Verwenden Sie `size` prop, um die Größe des FormFelds zu ändern, das `size` wird an das Formularsteuerelement weitergeleitet.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph057@@aufkleber
  @@ph058@beschreibung
  @@@@@@599@@@himp
  @@ph060@Hilfe
Props:
  Label: E-Mail
  Beschreibung: Wir werden Ihre E-Mail-Adresse niemals mit anderen teilen.
  Hint: optional
  Hilfe: Bitte geben Sie eine gültige E-Mail-Adresse ein.
  Größe: XL
Slots auf:
  Default:|

    @@061
---

: u-input {placeholder="Enter your email" class="w-full"}
::

### Orientierung: badge{label="4.3+" class="align-text-top"}

Verwenden Sie `orientation` prop, um das Layout des FormField. Defaults auf `vertical` zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph067@@aufkleber
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@class@class@class@class@class@class@class@class@class@classc
Props:
  Ausrichtung: horizontal
  Label: E-Mail
  Hilfe: Bitte geben Sie eine gültige E-Mail-Adresse ein.
  Klasse: W-72
Slots auf:
  Default:|

    @@@@@@@@@@@@@@069 @
---

: u-input {placeholder="Enter your email" class="w-full"}
::

## api

@@@@@@@@@@@ph072@@props

Komponenten Props

### Slots

Die Komponenten-Slots

@@@@@@@@@ph074@theme

Das Komponenten-Theme

@@ph075@@changelog @ changelog

Das Component-Changelog

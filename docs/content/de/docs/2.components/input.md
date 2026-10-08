---
description: Ein Eingabeelement zum Eingeben von Text.
category: form
keywords:
  - text field
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Input.vue
---

@@@ph000@Verwendung

Verwenden Sie die `v-model` Direktive, um den Wert der Eingabe zu steuern.

::component-code
---
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: ''
---
::

@@004@0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Verwenden Sie `type` prop, um den Eingabetyp zu ändern. Standardmäßig ist `text`.

Einige Typen wurden in ihren eigenen Komponenten implementiert, wie [Checkbox](/docs/components/checkbox),[Radio](/docs/components/radio-group),[InputNumber](/docs/components/input-number) etc. und andere wurden wie `file`zum Beispiel gestyt.

::component-code
---
Items:
  Typen:
    @@ph020@@@text @@ Übersetzung
    @@ph021@@Nummer
    @@@ph022@passwort
    @@@ph023@suche
    @@ph024@Dateiendung
Props:
  Typ: 'Datei'
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types" target="_blank"}
Sie können alle verfügbaren Typen in den MDN Web Docs überprüfen.
::

### Platzhalter

Verwenden Sie `placeholder` prop, um einen Platzhaltertext zu setzen.

::component-code
---
Props:
  Platzhalter: 'Suche...'
---
::

@@ph027@gmail.de

Verwenden Sie `color` prop, um die Ringfarbe zu ändern, wenn die Eingabe fokussiert ist.

::component-code
---
Ignoriert:
  @@ph029@@gmail.de
Props:
  Farbe: neutral
  Highlight: Wahr
  Platzhalter: 'Suche...'
---
::

::note
`highlight` prop wird hier verwendet, um den Fokuszustand anzuzeigen. Es wird intern verwendet, wenn ein Validierungsfehler auftritt.
::

@@ph031@@Variant-Variante

Verwenden Sie `variant` prop, um die Variante der Eingabe zu ändern.

::component-code
---
Ignoriert:
  @@ph033@gmail.de
Props:
  Farbe: neutral
  Variante: subtil
  Markiert: false
  Platzhalter: 'Suche...'
---
::

@@ph034 @ Größe

Verwenden Sie `size` prop, um die Größe der Eingabe zu ändern.

::component-code
---
Ignoriert:
  @@ph036@gmail.de
Props:
  Größe: XL
  Platzhalter: 'Suche...'
---
::

@@ph037@@gmail.de

Verwenden Sie die `icon` prop, um ein [Icon](/docs/components/icon) innerhalb des Eingangs anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph043@gmail.de
Props:
  Icon: 'i-lucide-search'(auf Englisch)
  Größe: MD
  Beschreibung: Outline
  Platzhalter: 'Suche...'
---
::

Verwenden Sie `leading` und `trailing` props, um die Symbolposition festzulegen, oder die `leading-icon` und `trailing-icon` props, um für jede Position ein anderes Symbol festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph048@@gmail.de
Props:
  Bezeichnung: i-Lucide-at-Sign
  Platzhalter: "Geben Sie Ihre E-Mail ein"
  Größe: MD
---
::

@@@@@@Avatar@@Avatar@Avatar@Avatar@@@@@Avatar@@@Avatar@@@@@Avatar@@@@Avatar@@@@@Avatar@@Avatar@Avatar@Avatar@Avatar@Avatar@@Avatar@Avatar@@Avatar@Avatar@@Avatar@@Avatar@@Avatar@@@@Avatar@@@@Avatar@@@@@@Avatar@@@@@@@@@Avatar@@@@@@@@@@@Avatar@@@@@@@@@@@@@@@Avatar@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@avatarataratarar

Verwenden Sie die `avatar` prop, um ein [Avatar](/docs/components/avatar) innerhalb des Eingangs anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph055@gmail.de
  - avatar.loading (nicht verfügbar)
Props:
  Avatare sind:
    src: 'https://github.com/nuxt.png'(auf Englisch)
    Aufladung: Lazy
  Größe: md
  Variante: Übersicht
  Platzhalter: 'Suche...'
---
::

@@@@@57@Aufladen

Verwenden Sie `loading` prop, um ein Ladesymbol auf der Eingabe anzuzeigen.

::component-code
---
Ignoriert:
  @@ph059@gmail.de
Props:
  Aufladung: true
  Nachtrag: false
  Platzhalter: 'Suche...'
---
::

@@ph060@@Icon-Anzeige

Verwenden Sie `loading-icon` prop, um das Ladesymbol anzupassen. Standardmäßig ist `i-lucide-loader-circle`.

::component-code
---
Ignoriert:
  @@ph063@@gmail.de
Props:
  Aufladung: true
  loadingIcon: 'i-lucide-loader'(englisch)
  Platzhalter: 'Suche...'
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

### disabled @@ nicht vorhanden

Verwenden Sie `disabled` prop, um die Eingabe zu deaktivieren.

::component-code
---
Ignoriert:
  @@ph070@@gmail.de
Props:
  Behindert: Wahr
  Platzhalter: 'Suche...'
---
::

## Beispiele

### Mit einem klaren Knopf

Sie können einen [Button](/docs/components/button) in den `#trailing`-Steckplatz einfügen, um die Eingabe zu löschen.

::component-example
---
Name: 'input-clear-button-beispiel'.
---
::

### Mit Kopierknopf

Sie können einen [Button](/docs/components/button) in den `#trailing`-Steckplatz einfügen, um den Wert in die Zwischenablage zu kopieren.

::component-example
---
Name: 'Input-Copy-Button-Beispiel'
---
::

### Mit Passwort-Umschalter

Sie können ein [Button](/docs/components/button) innerhalb des `#trailing`-Steckplatzes setzen, um die Passwortsichtbarkeit umzuschalten.

::component-example
---
name: 'input-password-toggle-example'(Eingabe-Passwort-Toggle-Beispiel)
---
::

### Mit Kennwortstärkeanzeige

Sie können die Komponente [Progress](/docs/components/progress) verwenden, um die Kennwortstärkeanzeige anzuzeigen.

::component-example
---
Einsturz: wahr
Name: 'input-password-strength-indicator-example'(Eingabekennwort-Stärke-Indikator-Beispiel)
---
::

### Mit Zeichenbegrenzung

Sie können den `#trailing`-Slot verwenden, um der Eingabe eine Zeichenbegrenzung hinzuzufügen.

::component-example
---
Name: 'input-character-limit-example'(Eingabezeichen-Beispiel)
---
::

### Mit Tastaturkürzel

Sie können die [Kbd](/docs/components/kbd) Komponente innerhalb des `#trailing` Steckplatzes verwenden, um eine Tastenkombination zur Eingabe hinzuzufügen.

::component-example
---
Name: 'input-kbd-beispiel'
---
::

::note{to="/docs/composables/define-shortcuts"}
In diesem Beispiel wird das `defineShortcuts` composable verwendet, um die Eingabe zu fokussieren, wenn die Taste: kbd{value="/"} gedrückt wird.
::

### Mit Maske

Es gibt keine integrierte Unterstützung für Masken, aber Sie können Bibliotheken wie [maska](https://github.com/beholdr/maska) verwenden, um die Eingabe zu maskieren.

::component-example
---
Name: 'input-mask-example'(Eingabemaske)
---
::

### Mit schwimmendem Etikett

Sie können den `#default`-Steckplatz verwenden, um dem Eingang ein Floating-Label hinzuzufügen.

::component-example
---
Bezeichnung: Input-Floating-Label-Example.
---
::

### Innerhalb eines FormFeldes

Sie können die Eingabe innerhalb einer [FormField](/docs/components/form-field) Komponente verwenden, um ein Etikett, einen Hilfetext, einen erforderlichen Indikator usw. anzuzeigen.

::component-example
---
name: 'input-form-field-example'(Eingabe-Formular-Feld-Beispiel)
---
::

::tip{to="/docs/components/form"}
Es bietet auch Validierung und Fehlerbehandlung, wenn es in einer **Form** Komponente verwendet wird.
::

### Innerhalb einer Feldgruppe

Sie können die Eingabe innerhalb einer [FieldGroup](/docs/components/field-group) Komponente verwenden, um mehrere Elemente zusammen zu gruppieren.

::component-example
---
Name: 'input-field-group-example'(Eingabefeld-Gruppenbeispiel)
---
::

### Als Telefonnummer eingeben

Sie können die Eingabe in einer [FieldGroup](/docs/components/field-group) Komponente neben einer [SelectMenu](/docs/components/select-menu) verwenden, um eine Rufnummerneingabe mit Ländervorwahl zu erstellen.

::component-example
---
Einsturz: wahr
Name: 'Eingabe-Telefonnummer-Beispiel'.
---
::

@@@@@@133@133@133@133@133@133@@133@13@133@@133@@133@@133@@133@13@13@13@13@13@@133@133@@@133@133@@13@@1333@@133@133@@133@@133@@1333@@@@13333@@@@@13333@@@@@@133333@@@@@@@@@133333333@@@@@@@@@@@@@1333333333@@@@@@@@@@@@@@@@@@@1333333333333@@@@@@@@@@@@@@

@@@@@@@@134@@props

Komponenten Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<input>` HTML-Attribute.
::

### Slots

Die Komponenten-Slots

@@@@@@@@@@@@@@Emits

Komponenten emittieren

@@138@@smail.de

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typen|
| ---- | ---- |
| {lang="ts-type"}|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###################################################################################################################################|

@@143@Einsteiger-Tipp

Das Komponenten-Theme

@@ph144@@changelog @@ changelog

Das Component-Changelog

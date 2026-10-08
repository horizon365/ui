---
description: Ein Textarea-Element zur Eingabe von mehrzeiligem Text.
category: form
keywords:
  - multiline
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Textarea.vue
---

@@@ph000@@Verwendung

Verwenden Sie die `v-model`-Direktive, um den Wert des Textarea zu steuern.

::component-code
---
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: ""
---
::

@@@@@@@004@rows

Verwenden Sie `rows` prop, um die Anzahl der Zeilen festzulegen. Standardmäßig ist `3`.

::component-code
---
Props:
  Roben: 12
---
::

### Platzhalter

Verwenden Sie `placeholder` prop, um einen Platzhaltertext zu setzen.

::component-code
---
Props:
  Platzhalter: "Typ etwas..."
---
::

@@ph009@autoresize

Verwenden Sie `autoresize` prop, um die automatische Größenänderung der Höhe des Textarea zu aktivieren.

::component-code
---
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  modelValue: 'Dies ist ein langer Text, der die Höhe des Textareas automatisch skaliert.'
  Autoresize: wahr
---
::

Verwenden Sie `maxrows` prop, um die maximale Anzahl von Zeilen bei der automatischen Größenänderung festzulegen. Wenn auf `0` gesetzt, wird der Textarea unbegrenzt wachsen.

::component-code
---
Ignoriert:
  - modellwert
Außen:
  - modellWert
Props:
  modelValue: 'Dies ist ein langer Text, der die Höhe des Textareas mit maximal 4 Zeilen automatisch skaliert.'
  Maxon: 4 von
  Autoresize: wahr
---
::

@@@@@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17

Verwenden Sie die `color` prop, um die Ringfarbe zu ändern, wenn der Textarea fokussiert ist.

::component-code
---
Ignoriert:
  @@ph019@@gmail.de
Props:
  Farbe: neutral
  Highlight: Wahr
  Platzhalter: 'Typ etwas...'
---
::

::note
`highlight` prop wird hier verwendet, um den Fokuszustand anzuzeigen. Es wird intern verwendet, wenn ein Validierungsfehler auftritt.
::

@@ph021@@@Variantentyp

Verwenden Sie `variant` prop, um die Variante des Textarea zu ändern.

::component-code
---
Ignoriert:
  @@ph023@gmail.de
Props:
  Farbe: neutral
  Variante: subtil
  Markiert: false
  Platzhalter: 'Typ etwas...'
---
::

@@ph024 @ Größe

Verwenden Sie `size` prop, um die Größe des Textarea zu ändern.

::component-code
---
Ignoriert:
  @@ph026@@gmail.de
Props:
  Größe: XL
  Platzhalter: 'Typ etwas...'
---
::

@@@@@@@@@@@@@@@@@@@ICON

Verwenden Sie die `icon` prop, um ein [Icon](/docs/components/icon) innerhalb des Textarea anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph033@gmail.de
Props:
  Icon: 'i-lucide-search'(auf Englisch)
  Größe: MD
  Beschreibung: Outline
  Platzhalter: 'Suche...'
  Roben: 1
---
::

Verwenden Sie `leading` und `trailing` props, um die Symbolposition festzulegen, oder die `leading-icon` und `trailing-icon` props, um für jede Position ein anderes Symbol festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph038@gmail.de
Props:
  Bezeichnung: i-Lucide-at-Sign
  Platzhalter: "Geben Sie Ihre E-Mail ein"
  Größe: MD
  Röhren: 1
---
::

@@@@@@Avatar@@@@@Avatar@@@@@@@@Avatar@@Avatar@@@Avatar@@Avatar@@Avatar@@Avatar@@Avatar@@Avatar@@Avatar@@Avatar@Avatar@@Avatar@@Avatar@Avatar@@Avatar@Avatar@@@Avatar@@Avatar@@@@Avatar@@@@@Avatar@@@@@@Avatar@@@@@@@@@Avatar@@@@@@@@@@@@Avatar@@@@@@@@@@@@@@@@@Avatar@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Verwenden Sie die `avatar` prop, um ein [Avatar](/docs/components/avatar) innerhalb des Textarea zu zeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph045@gmail.de
  - avatar.loading (nicht verfügbar)
Props:
  Avatare sind:
    src: 'https://github.com/nuxt.png'(auf Englisch)
    Aufladung: Lazy
  Größe: MD
  Variante: Übersicht
  Platzhalter: 'Suche...'
  Röhren: 1
---
::

@@ph047@Aufladen

Verwenden Sie `loading` prop, um ein Ladesymbol auf dem Textarea anzuzeigen.

::component-code
---
Ignoriert:
  @@ph049@gmail.de
Props:
  Aufladung: true
  Nachtrag: false
  Platzhalter: 'Suche...'
  Roben: 1
---
::

@@ph050@@@Icon-Aufladung

Verwenden Sie `loading-icon` prop, um das Ladesymbol anzupassen. Standardmäßig ist `i-lucide-loader-circle`.

::component-code
---
Ignoriert:
  @@ph053@@gmail.de
Props:
  Aufladung: true
  loadingIcon: 'i-lucide-loader'(englisch)
  Platzhalter: 'Suche...'
  Roben: 1
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.loading` Schlüssel anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.loading` key anpassen.
:::
::

### disabled

Verwenden Sie `disabled` prop, um den Textarea zu deaktivieren.

::component-code
---
Ignoriert:
  @@ph060@@gmail.de
Props:
  Behindert: Wahr
  Platzhalter: 'Typ etwas...'
---
::

## api

### Props

Komponenten Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<textarea>` HTML-Attribute.
::

### Slots

Die Komponenten-Slots

@@ph065@@emits

Komponenten emittieren

### Aufdecken

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typ|
| ---- | ---- |
| {lang="ts-type"}|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|

@@@@@@@@@ph075@theme

Das Komponenten-Theme

@@ph076@@changelog @@changelog

Das Component-Changelog

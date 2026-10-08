---
title: File-Upload hinzufügen
description: 'Ein Eingabeelement zum Hochladen von Dateien.'
category: form
keywords:
  - dropzone
  - drag and drop
  - file input
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FileUpload.vue
---

@@@ph000@@Verwendung

Verwenden Sie die `v-model`-Direktive, um den Wert von FileUpload zu steuern.

::component-code
---
Ignoriert:
  - modellWert
  @@003@Klasse
Außen:
  - modellWert
Props:
  Modellwert: Null
  Klasse: 'w-96 min-h-48'
---
::

@@ph005@mehrfache

Verwenden Sie `multiple` prop, um mehrere Dateien auszuwählen.

::component-code
---
Ignoriert:
  @@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@class@c
Props:
  Anzahl: true
  Bezeichnung: W-96 Min-H-48
---
::

### Dropzone

Verwenden Sie `dropzone` prop, um den absetzbaren Bereich zu aktivieren/deaktivieren. Standardmäßig `true`.

::component-code
---
Ignoriert:
  @@11@Klasse
Props:
  Dropzone: falsch
  Bezeichnung: W-96 Min-H-48
---
::

### Interaktiv

Verwenden Sie `interactive` prop, um den anklickbaren Bereich zu aktivieren/deaktivieren. Standardmäßig `true`.

::tip{to="#with-files-bottom-slot"}
Dies kann nützlich sein, wenn Sie eine `Button` Komponente in den `#actions` Slot einfügen.
::

::component-code
---
Ignoriert:
  @@@@@17@17@17
Props:
  Aktion: FALSE
  Klasse: 'w-96 min-h-48'
---
::

@@ph018@accept | nicht

Verwenden Sie `accept` prop, um die zulässigen Dateitypen für die Eingabe anzugeben. Geben Sie eine kommagetrennte Liste von [MIME-Typen ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types) oder Dateierweiterungen (z. B.`image/png,application/pdf,.jpg`) an.

::component-code
---
Ignoriert:
  @@ph026@accepts
  @@ph027@gmail.de
Props:
  accept: 'Bild/*'
  Klasse: 'w-96 min-h-48'
---
::

@@@@@@@@@@ph028@@label.de

Verwenden Sie `label` prop, um das Label des FileUpload festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @30@Klasse
Props:
  Label: "Hier können Sie Ihr Bild einfügen"
  Klasse: 'w-96 min-h-48'
---
::

@@ph031 @ Beschreibung

Verwenden Sie `description` prop, um die Beschreibung des FileUpload festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph033@@aufkleber
  @@34@Klasse
Props:
  Label: "Hier können Sie Ihr Bild einfügen"
  Beschreibung: 'SVG, PNG, JPG oder GIF (max. 2MB)'
  Klasse: 'w-96 min-h-48'
---
::

@@ph035@@gmail.de

Verwenden Sie `icon` prop, um das Symbol des FileUpload. Defaults auf `i-lucide-upload` zu setzen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph038@@bmg-aufkleber
  @@ph039 @ Beschreibung
  @@ph040@class
Props:
  Icon: 'I-Lucide-Bild'
  Label: "Hier können Sie Ihr Bild einfügen"
  Beschreibung: 'SVG, PNG, JPG oder GIF (max. 2MB)'
  Bezeichnung: W-96 Min-H-48
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.upload` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.upload` key anpassen.
:::
::

@@@@@45@gmail.de

Verwenden Sie `color` prop, um die Farbe des FileUpload zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph047@@aufkleber
  @@ph048@beschreibung
  @@@@@@49@class
Props:
  Farbe: neutral
  Highlight: Wahr
  Label: "Hier können Sie Ihr Bild einfügen"
  Beschreibung: 'SVG, PNG, JPG oder GIF (max. 2MB)'
  Bezeichnung: W-96 Min-H-48
---
::

::note
`highlight` prop wird hier verwendet, um den Fokuszustand anzuzeigen. Es wird intern verwendet, wenn ein Validierungsfehler auftritt.
::

@@ph051@@@Variantentabelle

Verwenden Sie `variant` prop, um die Variante des FileUploads zu ändern.

::component-code
---
Ignoriert:
  @@53@Klasse
Props:
  Variante: Knopf
---
::

@@@@@544@@554@54@54@54@54@54@54@54@@@54@@@54@@@54@@@54@@54@@@54@@@54@54@54@54@54@@54@54@@554@@54@54@54@54@54@54@54@554@54@@554@@554@@@554@@@54@@5554@@@@@@55554@@@@@@@@@@55554@@@@@@@@@@@@@55554@@@@@@@@@@@@@@55554@@@@@@@@@@@@@@@@@@@555554@@@@@@@@@@@@

Verwenden Sie `size` prop, um die Größe des FileUpload zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph056@@aufkleber
  @@ph057@beschreibung
  @@@@@@58@000000000000000000000000000000000000000000000000000
Props:
  Größe: XL
  Variante: Bereich
  Label: "Hier können Sie Ihr Bild einfügen"
  Beschreibung: 'SVG, PNG, JPG oder GIF (max. 2MB)'
---
::

@@@@@599@@gmail.de

Verwenden Sie `layout` prop, um zu ändern, wie die Dateien im FileUpload. Defaults auf `grid` angezeigt werden.

::warning
Diese Requisite funktioniert nur, wenn `variant``area`.
::

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph064@@aufkleber
  @@ph065@beschreibung
  @@ph066@@mehrfache
  @@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@c
  - ui.base
Props:
  Layout: Aufzählung
  Vielfach: wahr
  Label: "Bilder hier einfügen"
  Beschreibung: 'SVG, PNG, JPG oder GIF (max. 2MB)'
  Klasse: W-96
  ui: ist
    Bezeichnung: min-h-48
---
::

@@ph069@@Einwurf

Verwenden Sie `position` prop, um die Position der Dateien in FileUpload. Defaults auf `outside` zu ändern.

::warning
Diese Requisite funktioniert nur, wenn `variant``area` ist und wenn `layout``list` ist.
::

::component-code
---
Schöner: wahr
Ignoriert:
  @@@ph076@@aufkleber
  @@ph077@beschreibung
  @@@ph078@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache-fache-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e
  @@ph079@@aufräumen
  @@80@Klasse
  - ui.base
Props:
  Position: Innen
  Layout: Liste
  Vielfach: wahr
  Label: "Bilder hier einfügen"
  Beschreibung: 'SVG, PNG, JPG oder GIF (max. 2MB)'
  Klasse: W-96
  ui: ist
    Bezeichnung: min-h-48
---
::

@@ph082@@@Beispiele

### Mit Formularvalidierung

Sie können den FileUpload innerhalb eines [Form](/docs/components/form) und [FormField](/docs/components/form-field) Komponenten verwenden, um die Validierung und Fehlerbehandlung durchzuführen.

::component-example
---
Schöner: wahr
Einsturz: wahr
Name: 'Datei-Upload-Form-Validierungsbeispiel'
---
::

### Mit Default-Slot

Sie können den Standard-Slot verwenden, um Ihre eigene FileUpload-Komponente zu erstellen.

::component-example
---
Schöner: wahr
Einsturz: wahr
Datei-Upload-Default-Slot-Beispiel
---
::

### Mit Datei-Boden-Slot

Sie können den `files-bottom`-Slot verwenden, um einen [Button](/docs/components/button) unter der Dateiliste hinzuzufügen, um beispielsweise alle Dateien zu entfernen.

::component-example
---
Schöner: wahr
Einsturz: wahr
Datei-Upload-Files-Bottom-Slot-Beispiel
---
::

::note{to="#interactive"}
Der `interactive` prop wird in diesem Beispiel auf `false` gesetzt, um den standardmäßig anklickbaren Bereich zu verhindern.
::

### Mit Datei-Top-Slot

Sie können den `files-top`-Slot verwenden, um einen [Button](/docs/components/button) über der Dateiliste hinzuzufügen, um beispielsweise neue Dateien hinzuzufügen.

::component-example
---
Schöner: wahr
Einsturz: wahr
Datei-Upload-Files-Top-Slot-Beispiel
---
::

@@107@bpb

@@@@@@@@@@@@@@@ph108@@props

Komponenten-Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<input>` HTML-Attribute.
::

### Slots

Die Komponenten-Slots

@@@@@@@@111@emits

Komponenten emittieren

### Aufdecken

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typen|
| ---- | ---- |
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###################################################################################################################|
| {lang="ts-type"}|{lang="ts-type"}|

@@121@Einsteiger-Tipp

Das Komponenten-Theme

@@ph122@@changelog @ changelog

Das Component-Changelog

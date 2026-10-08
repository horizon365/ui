---
title: Input-Tags
description: Ein Input-Element, das interaktive Tags anzeigt.
category: form
keywords:
  - chips input
  - multi value
links:
  - label: Input-Tags
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tags-input
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputTags.vue
---

@@@ph000@Verwendung

Verwenden Sie die `v-model` Direktive, um den Wert der InputTags zu steuern.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: ["Vue"]
---
::

Verwenden Sie `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
Schöner: wahr
Ignoriert:
  - defaultValue
Props:
  DefaultValue: ['Sichtung']
---
::

### Platzhalter

Verwenden Sie `placeholder` prop, um einen Platzhaltertext zu setzen.

::component-code
---
Props:
  Platzhalter: "Enter tags..."
---
::

### Max Länge

Verwenden Sie `max-length` prop, um die maximale Anzahl von Zeichen in einem Tag festzulegen.

::component-code
---
Props:
  Max-Größe: 4
---
::

@@@@@10@100@100@100@100@100@100@10@10@10@10@10@10@@10@10@10@@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@@100@@@@@100000@@@@@@@@@@@@@1000000000@@@@@@@@@@@@@@@@@@@@@@@10000000000@@@@@@@@@@@@@@@@@@@

Verwenden Sie die `color` prop, um die Ringfarbe zu ändern, wenn die InputTags fokussiert sind.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: ['Vue']
  Farbe: neutral
  Highlight: Wahr
---
::

::note
Das `highlight` prop wird hier verwendet, um den Fokuszustand anzuzeigen. Es wird intern verwendet, wenn ein Validierungsfehler auftritt.
::

@@ph015@@@Varianten

Verwenden Sie `variant` prop, um das Aussehen der InputTags zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: ['Vue']
  Variante: subtil
  Farbe: neutral
  Markiert: false
---
::

@@ph019 @ Größe

Verwenden Sie die `size` prop, um die Größe der InputTags anzupassen.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: ["Vue"]
  Größe: XL
---
::

@@ph023@@gmail.de

Verwenden Sie die `icon` prop, um ein [Icon](/docs/components/icon) innerhalb der InputTags anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: ["Vue"]
  Icon: 'i-lucide-search'(auf Englisch)
  Größe: MD
  Variante: Übersicht
---
::

::note
Verwenden Sie `leading` und `trailing` props, um die Symbolposition festzulegen, oder die `leading-icon` und `trailing-icon` props, um für jede Position ein anderes Symbol festzulegen.
::

@@@@@@avatar35@avatar35@@avatar35@@avatar35@@avatar35@@avatar35@@avatar35@@avatar35@@avatar35@@avatar35@avatar35@avatar35@avatar5@@avatarant35@@avatarant35@@avatarantgardiy@avatardiyardiy@avatardiy@avatardiatardiy@avatardiatardiy@avatardiy@avatardiatardiy@avatardiy@avatardiy@@avatardiatardiatardiy@@@avatardiatardiatardiatardiatardiy@@avatardiy@@avatardiyardiy@@@@@avatardiatardiyardiatardiatardiatardiy

Verwenden Sie die `avatar` prop, um ein [Avatar](/docs/components/avatar) innerhalb der InputTags anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
  - avatar.loading (nicht verfügbar)
Außen:
  - modellWert
Props:
  Modellwert: ['Vue']
  Avatare sind:
    src: 'https://github.com/vuejs.png'(auf Englisch)
    Aufladung: Lazy
  Größe: md
  Beschreibung: Outline
---
::

@@ph044@@Delete Icon Bearbeiten

Verwenden Sie die `delete-icon` prop, um das Löschen von [Icon](/docs/components/icon) in den Tags. Defaults auf `i-lucide-x` anzupassen.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: ['Vue']
  deleteIcon: 'i-lucide-trash'(deutsch: 'i-lucide-trash')
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

@@@@@57@Aufladen

Verwenden Sie das `loading` prop, um ein Ladesymbol auf den InputTags anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: ['Vue']
  Aufladung: true
  Nachtrag: false
---
::

@@ph061@@Icon-Loading-Funktion

Verwenden Sie `loading-icon` prop, um das Ladesymbol anzupassen. Standardmäßig ist `i-lucide-loader-circle`.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: ["Vue"]
  Aufladung: true
  loadingIcon: 'i-lucide-loader'(englisch)
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

### disabled @ disabled

Verwenden Sie `disabled` prop, um die InputTags zu deaktivieren.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: ['Vue']
  Behindert: Wahr
---
::

## Beispiele

### Innerhalb eines FormFeldes

Sie können die InputTags innerhalb einer [FormField](/docs/components/form-field) Komponente verwenden, um ein Etikett, einen Hilfetext, einen erforderlichen Indikator usw. anzuzeigen.

::component-example
---
Name: 'input-tags-form-field-example'(Eingabe-Tags-Formular-Feld-Beispiel)
---
::

@@800@bpb

@@@@@@@@@@@ph081@@props

Komponenten-Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<input>` HTML-Attribute.
::

@@ph083@gmail.de

Die Komponenten-Slots

@@@@@@@@@@@emits

Komponenten emittieren

### Expose

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typ|
| ---- | ---- |
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|

@@ph090@gmail.de

Das Komponenten-Theme

@@ph091@@changelog @@changelog @ changelog

Das Component-Changelog

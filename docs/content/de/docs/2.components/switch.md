---
description: Eine Kontrolle, die zwischen zwei Staaten wechselt.
category: form
keywords:
  - toggle
  - toggle switch
links:
  - label: Switch ist
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/switch
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Switch.vue
---

@@@ph000@Verwendung

Verwenden Sie die `v-model`-Direktive, um den geprüften Zustand des Switches zu steuern.

::component-code
---
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Wert: true
---
::

Verwenden Sie `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  DefaultWert: true
---
::

@@ph006@@bmdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdb

Verwenden Sie `label` prop, um die Bezeichnung des Switches festzulegen.

::component-code
---
Props:
  Titel: Check Me
---
::

Bei Verwendung von `required` prop wird neben dem Etikett ein Sternchen hinzugefügt.

::component-code
---
Ignoriert:
  @@ph009@@aufkleber
Props:
  Erforderlich: true
  Titel: Check Me
---
::

@@ph010 @ Beschreibung

Verwenden Sie `description` prop, um die Beschreibung des Switches festzulegen.

::component-code
---
Ignoriert:
  @@ph012@@aufkleber
Props:
  Titel: Check Me
  Beschreibung: 'Dies ist eine Checkbox.'
---
::

@@ph013@@Icon-Seite

Verwenden Sie die `checked-icon` und `unchecked-icon` props, um die Symbole des Switches zu setzen, wenn sie aktiviert und deaktiviert sind.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph016@@aufkleber
  - defaultValue
Props:
  uncheckedIcon: 'i-lucide-x'(nicht markiert)
  checkedIcon: 'i-lucide-check'(auf Englisch)
  DefaultValue: true ist wahr
  Titel: Check Me
---
::

@@ph018@Aufladen

Verwenden Sie das `loading` prop, um ein Ladesymbol auf dem Switch anzuzeigen.

::component-code
---
Ignoriert:
  @@ph020@@aufkleber
  - defaultValue
Props:
  Aufladung: true
  DefaultWert: true
  Titel: Check Me
---
::

@@ph022@@Icon-Aufladung

Verwenden Sie `loading-icon` prop, um das Ladesymbol anzupassen. Standardmäßig auf `i-lucide-loader-circle`.

::component-code
---
Ignoriert:
  @@ph025@@aufkleber
  - defaultValue
Props:
  Aufladung: true
  loadingIcon: 'i-lucide-loader'(englisch)
  DefaultValue: true ist wahr
  Titel: Check Me
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

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###############################################################################################################################################################################################

Verwenden Sie die `color` prop, um die Farbe des Schalters zu ändern.

::component-code
---
Ignoriert:
  @@ph033@@aufkleber
  - defaultValue
Props:
  Farbe: neutral
  DefaultWert: true
  Titel: Check Me
---
::

@@ph035 @ Größe

Verwenden Sie die `size` prop, um die Größe des Switches zu ändern.

::component-code
---
Ignoriert:
  @@ph037@@aufkleber
  - defaultValue
Props:
  Größe: XL
  DefaultValue: true ist wahr
  Titel: Check Me
---
::

@@ph039@disabled @ disabled

Verwenden Sie die `disabled` prop, um den Switch zu deaktivieren.

::component-code
---
Ignoriert:
  @@ph041@@aufkleber
Props:
  Behindert: Wahr
  Titel: Check Me
---
::

## api

@@ph043@@gmail.de

Komponenten Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>` HTML-Attribute.
::

@@ph045@gmail.de

Die Komponenten-Slots

@@ph046@@emits

Komponenten emittieren

@@ph047@@gmail.de

Das Komponenten-Theme

@@ph048@@changelog

Das Component-Changelog

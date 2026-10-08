---
description: Ein Eingabeelement zum Umschalten zwischen checked und unchecked states.
category: form
keywords:
  - tickbox
  - check
  - boolean
links:
  - label: Die Checkbox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Checkbox.vue
---

@@@ph000@@Verwendung

Verwenden Sie die `v-model`-Direktive, um den Status der Checkbox zu kontrollieren.

::component-code
---
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: true
---
::

Verwenden Sie `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  DefaultValue: true ist wahr
---
::

@@ph006@undefinierbar

Verwenden Sie den `indeterminate`-Wert in der `v-model`-Richtlinie oder `default-value` prop, um das Kontrollkästchen auf einen [unbestimmten Zustand ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) zu setzen.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  defaultValue: 'unbestimmt'
---
::

@@ph015@undefiniertes Icon

Verwenden Sie `indeterminate-icon` prop, um das unbestimmte Symbol anzupassen. Standardmäßig `i-lucide-minus`.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  defaultValue: 'unbestimmt'
  indeterminateIcon: 'i-lucide-plus'(unbestimmt)
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.minus` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.minus` key anpassen.
:::
::

@@ph023@@abbauseite

Verwenden Sie `label` prop, um die Beschriftung der Checkbox festzulegen.

::component-code
---
Props:
  Markiert: Check Me
---
::

Bei Verwendung von `required` prop wird neben dem Etikett ein Sternchen hinzugefügt.

::component-code
---
Ignoriert:
  @@ph026@@aufkleber
Props:
  erforderlich: true
  Titel: Check Me
---
::

@@ph027@@Beschreibung

Verwenden Sie `description` prop, um die Beschreibung der Checkbox festzulegen.

::component-code
---
Ignoriert:
  @@ph029@@aufkleber
Props:
  Titel: Check Me
  Beschreibung: 'Dies ist eine Checkbox.'
---
::

@@ph030@@gmail.de

Verwenden Sie `icon` prop, um das Symbol des Kontrollkästchens zu setzen, wenn es aktiviert ist. Standardmäßig auf `i-lucide-check`.

::component-code
---
Ignoriert:
  @@ph033@@aufkleber
  - defaultValue
Props:
  I-Lucide-Heart (englisch)
  DefaultValue: true ist wahr
  Titel: Check Me
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.check` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.check` key anpassen.
:::
::

@@@@@399@bmg-ng-ng.de

Verwenden Sie `color` prop, um die Farbe des Kontrollkästchens zu ändern.

::component-code
---
Ignoriert:
  @@ph041@@aufkleber
  - defaultValue
Props:
  Farbe: neutral
  DefaultValue: true ist wahr
  Titel: Check Me
---
::

@@ph043@@Variantentabelle

Verwenden Sie `variant` prop, um die Variante des Checkboxes zu ändern.

::component-code
---
Ignoriert:
  @@ph045@@aufkleber
  - defaultValue
Props:
  Farbe: "Primär"
  Variante: „ Karte "
  DefaultWert: true
  Titel: Check Me
---
::

@@ph047 @ Größe

Verwenden Sie `size` prop, um die Größe des Kontrollkästchens zu ändern.

::component-code
---
Ignoriert:
  @@ph049@@aufkleber
  - defaultValue
Props:
  Größe: XL
  Variante: Liste
  DefaultValue: true ist wahr
  Titel: Check Me
---
::

### Indikator

Verwenden Sie `indicator` prop, um die Position zu ändern oder den Indikator auszublenden. Standardmäßig `start`.

::note
Wenn `indicator``hidden` ist, wird stattdessen das Symbol über dem Etikett angezeigt.
::

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph056@@aufkleber
  @@ph057@@gmail.de
  - defaultValue
Props:
  Anzeige: "Versteckt"
  Variante: „ Karte "
  I-Lucide-Heart (englisch)
  DefaultValue: true ist wahr
  Titel: Check Me
---
::

@@ph059@@disabled

Verwenden Sie `disabled` prop, um die Checkbox zu deaktivieren.

::component-code
---
Ignoriert:
  @@ph061@@aufkleber
Props:
  Behindert: Wahr
  Titel: Check Me
---
::

## api

### Props

Komponenten-Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>` HTML-Attribute.
::

### Slots

Die Komponenten-Slots

@@@@@@@@@@@@emits

Komponenten emittieren

## Thema

Das Komponenten-Theme

@@ph068@@changelog @@changelog

Das Component-Changelog

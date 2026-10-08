---
description: Ein gestapeltes Set von zusammenklappbaren Panels.
category: data
keywords:
  - disclosure
  - collapse
  - faq
  - expansion panel
links:
  - label: Akkordeon ist
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/accordion
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Accordion.vue
---

@@@ph000@Verwendung

Verwenden Sie die Akkordeon-Komponente, um eine Liste zusammenklappbarer Elemente anzuzeigen.

::component-code
---
Einsturz: wahr
Ignoriert:
  @@ph001@@gmail.de
  - ui.content
Außen:
  @@ph003@gmail.de
Externe Typen:
  @@ph004@@accordionItem [Bearbeiten | Quelltext bearbeiten]
Hide:
  @@005@Klasse
  @@006@0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  - defaultValue
Props:
  DefaultWert: '0'
  Klasse: 'px-4 max-w-lg'
  ui: ist
    Inhalt: 'Text-mutiert'
  Items:
    - label:'Ist Nuxt UI kostenlos zu verwenden?'
      Nuxt UI ist komplett kostenlos und Open Source unter der MIT-Lizenz. Alle 125 + Komponenten sind für jedermann verfügbar.
    - label:"Kann ich Nuxt UI mit Vue ohne Nuxt verwenden?"
      Inhalte: „ Ja! Während für Nuxt optimiert, funktioniert Nuxt UI perfekt mit eigenständigen Vue-Projekten über unser Vite Plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) um loszulegen.
    - label:"Ist Nuxt UI produktionsbereit?"
      Nuxt UI wird in der Produktion von Tausenden von Anwendungen mit umfangreichen Tests, regelmäßigen Updates und aktiver Wartung verwendet.
---
::

@@ph015@gmail.de

Verwenden Sie `items` prop als Array von Objekten mit folgenden Eigenschaften:

`label?: string``label?: string``label?: string`{lang="ts-type"}
`icon?: string`PH0221@@@@@@@PH0222 @
`trailingIcon?: string``trailingIcon?: string``trailingIcon?: string`{lang="ts-type"}
`content?: string`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}PH028027@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`value?: string``value?: string`PH03030{lang="ts-type"}{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@PH0333@@@@@@@@@@@@@@PH03333@@@@@@@@@@@@@@@PH0334{lang="ts-type"}{lang="ts-type"}PH03334@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
- [`slot?: string`{lang="ts-type"}]()
`class?: any`PH0444
`ui?: { item?: ClassNameValue, header?: ClassNameValue, trigger?: ClassNameValue, leadingIcon?: ClassNameValue, label?: ClassNameValue, trailingIcon?: ClassNameValue, content?: ClassNameValue, body?: ClassNameValue }``ui?: { item?: ClassNameValue, header?: ClassNameValue, trigger?: ClassNameValue, leadingIcon?: ClassNameValue, label?: ClassNameValue, trailingIcon?: ClassNameValue, content?: ClassNameValue, body?: ClassNameValue }``ui?: { item?: ClassNameValue, header?: ClassNameValue, trigger?: ClassNameValue, leadingIcon?: ClassNameValue, label?: ClassNameValue, trailingIcon?: ClassNameValue, content?: ClassNameValue, body?: ClassNameValue }``ui?: { item?: ClassNameValue, header?: ClassNameValue, trigger?: ClassNameValue, leadingIcon?: ClassNameValue, label?: ClassNameValue, trailingIcon?: ClassNameValue, content?: ClassNameValue, body?: ClassNameValue }`{lang="ts-type"}

::component-code
---
Ignoriert:
  @@ph048@gmail.de
Außen:
  @@ph049@gmail.de
Externe Personen:
  @@ph050@@accordionItem [Bearbeiten | Quelltext bearbeiten]
Hide:
  @@@@@@51@000@051@051@051@051@000@0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Klasse: px-4
  Items:
    - label:'Icons'(auf Englisch)
      I-Lucide-Smile (englisch)
      Sie haben nichts zu tun,@ nuxt/icon wird das automatisch erledigen.
    - label:'Farben'
      I-Lucide-Swatch-Book (englisch)
      content: 'Wählen Sie eine primäre und eine neutrale Farbe aus Ihrem Tailwind CSS-Thema.'
    - label:'Komponenten'
      Icon: 'i-lucide-box'(auf Englisch)
      Sie können Komponenten anpassen, indem Sie die `class`/`ui` props oder in Ihrer app.config.ts verwenden.
---
::

### 

Setzen Sie `type` prop auf `multiple`, damit mehrere Elemente gleichzeitig aktiv sein können.

::component-code
---
Ignoriert:
  @@ph061@@gmail.de
  - Artikel
Außen:
  @@ph063@gmail.de
Externe Personen:
  - accordionItem [Bearbeiten | Quelltext bearbeiten]
Hide:
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class
Props:
  Klasse: px-4
  Typ: "Vielfach"
  Items:
    - label:'Icons'(auf Englisch)
      I-Lucide-Smile (englisch)
      Sie haben nichts zu tun,@ nuxt/icon wird das automatisch erledigen.
    - label:'Farben'
      I-Lucide-Swatch-Book (englisch)
      content: 'Wählen Sie eine primäre und eine neutrale Farbe aus Ihrem Tailwind CSS-Thema.'
    - label:'Bestandteile'
      Icon: 'i-lucide-box'(I-lucide-Box) auf Englisch
      Sie können Komponenten anpassen, indem Sie die `class`/`ui` props oder in Ihrer app.config.ts verwenden.
---
::

### zusammenklappbar

Wenn `type` ist, können Sie `collapsible` prop auf `false` setzen, um zu verhindern, dass das aktive Element zusammenbricht.

::component-code
---
Ignoriert:
  - zusammenklappbar
  @@@ph077@gmail.de
Außen:
  @@@ph078@@gmail.de
Externe Typen:
  - accordionItem [Bearbeiten | Quelltext bearbeiten]
Hide:
  @@80@Klasse
Props:
  Klasse: 'px-4'
  False: False
  Items:
    - label:'Icons'(auf Englisch)
      I-Lucide-Smile (englisch)
      Sie haben nichts zu tun,@ nuxt/icon wird das automatisch erledigen.
    - label:'Farben'
      I-Lucide-Swatch-Book (englisch)
      content: 'Wählen Sie eine primäre und eine neutrale Farbe aus Ihrem Tailwind CSS-Thema.'
    - label:'Komponenten'
      Icon: 'i-lucide-box'(I-lucide-Box) auf Englisch
      Sie können Komponenten anpassen, indem Sie die `class`/`ui` props oder in Ihrer app.config.ts verwenden.
---
::

@@@@@@@@@@@ph086@@unmount

Verwenden Sie die `unmount-on-hide` prop, um zu verhindern, dass der Inhalt beim Zusammenklappen des Akkordeons abgehängt wird.

::component-code
---
Ignoriert:
  @@ph089@@gmail.de
Außen:
  @@ph090@gmail.de
Externe Personen:
  @@ph091@@accordionItem [Bearbeiten | Quelltext bearbeiten]
Hide:
  @@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@classclass@class@class@class@classclass@class@class@class@class@c
Props:
  Klasse: 'px-4'
  unmountOnHide: falsch
  Items:
    - label:'Icons'(auf Englisch)
      I-Lucide-Smile (englisch)
      Sie haben nichts zu tun,@ nuxt/icon wird das automatisch erledigen.
    - label:'Farben'
      I-Lucide-Swatch-Book (englisch)
      content: 'Wählen Sie eine primäre und eine neutrale Farbe aus Ihrem Tailwind CSS-Thema.'
    - label:'Komponenten'
      Icon: 'i-lucide-box'(I-lucide-Box) auf Englisch
      Sie können Komponenten anpassen, indem Sie die `class`/`ui` props oder in Ihrer app.config.ts verwenden.
---
::

::note
Sie können das DOM inspizieren, um zu sehen, wie der Inhalt jedes Elements gerendert wird.
::

### disabled

Verwenden Sie die `disabled`-Eigenschaft, um das Akkordeon zu deaktivieren.

Sie können auch ein bestimmtes Element deaktivieren, indem Sie die `disabled`-Eigenschaft im item-Objekt verwenden.

::component-code
---
Ignoriert:
  - Artikel
Außen:
  - Artikel
Externe Typen:
  - AccordionItem [Bearbeiten | Quelltext bearbeiten]
Hide:
  @@104@Klasse
Props:
  Klasse: px-4
  Behinderung: true
  Items:
    - label:'Icons'(auf Englisch)
      I-Lucide-Smile (englisch)
      Sie haben nichts zu tun,@ nuxt/icon wird das automatisch erledigen.
    - label:'Farben'
      I-Lucide-Swatch-Book (englisch)
      content: 'Wählen Sie eine primäre und eine neutrale Farbe aus Ihrem Tailwind CSS-Thema.'
      Behindert: Wahr
    - label:'Komponenten'
      Icon: 'i-lucide-box'(I-lucide-Box) auf Englisch
      Sie können Komponenten anpassen, indem Sie die `class`/`ui` props oder in Ihrer app.config.ts verwenden.
---
::

@@ph110@trailing-icon (auf Englisch)

Verwenden Sie die `trailing-icon` prop, um die nachlaufende [Icon](/docs/components/icon) jedes Elements anzupassen.

::tip
Sie können auch ein Symbol für ein bestimmtes Element festlegen, indem Sie die `trailingIcon`-Eigenschaft im item-Objekt verwenden.
::

::component-code
---
Ignoriert:
  @@118@gmail.de
Außen:
  - Artikel
Externe Personen:
  - AccordionItem [Bearbeiten | Quelltext bearbeiten]
Hide:
  @@121@Klasse
Props:
  Klasse: 'px-4'
  trailingIcon: 'i-lucide-arrow-down'(deutsch: 'i-lucide-arrow-down')
  Items:
    - label:'Icons'(auf Englisch)
      I-Lucide-Smile (englisch)
      Sie haben nichts zu tun,@ nuxt/icon wird das automatisch erledigen.
      trailingIcon: 'i-lucide-plus'(auf Englisch)
    - label:'Farben'
      I-Lucide-Swatch-Book (englisch)
      content: 'Wählen Sie eine primäre und eine neutrale Farbe aus Ihrem Tailwind CSS-Thema.'
    - label:'Komponenten'
      Icon: 'i-lucide-box'(I-lucide-Box) auf Englisch
      Sie können Komponenten anpassen, indem Sie die `class`/`ui` props oder in Ihrer app.config.ts verwenden.
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.chevronDown` Schlüssel anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.chevronDown` key anpassen.
:::
::

@@131@@@Beispiele

### Control aktive (n) Artikel

Sie können das aktive Element steuern, indem Sie die `default-value` prop oder die `v-model` Direktive mit der `value` des Elements verwenden. Wenn kein `value` angegeben ist, wird standardmäßig der Index **als Zeichenfolge ** verwendet.

::component-example
---
Bezeichnung: 'accordion-model-value-example'
Props:
  Klasse: px-4
---
::

::tip
Verwenden Sie `value-key` prop, um den Schlüssel zu ändern, der für die Übereinstimmung mit Elementen verwendet wird, wenn ein `v-model` oder `default-value` bereitgestellt wird.
::

::caution
Wenn `type="multiple"`, stellen Sie sicher, dass Sie ein Array an die `default-value` prop oder die `v-model`-Direktive übergeben.
::

### Mit Drag & Drop

Verwenden Sie die [`useSortable`]() composable from [`@vueuse/integrations`https://vueuse.org/integrations/README.html) um Drag & Drop-Funktionalität auf dem Akkordeon zu aktivieren. Für ein reibungsloses Drag & Drop Erlebnis.

::component-example
---
Name: 'Akkordeon-Drag-and-Drop-Beispiel'
---
::

### Mit Körperschlitz

Verwenden Sie den `#body` slot, um den Körper jedes Elements anzupassen.

::component-example
---
Name: 'Akkordeon-Körper-Slot-Beispiel'
Props:
  Klasse: px-4
---
::

::tip
Der `#body` slot enthält einige vordefinierte Stile, verwenden Sie die [`#content` slot](#with-content-slot) wenn Sie von vorne anfangen möchten.
::

### Mit Inhaltssteckplatz

Verwenden Sie den `#content`-Slot, um den Inhalt jedes Elements anzupassen.

::component-example
---
Name: 'accordion-content-slot-beispiel'
Props:
  Klasse: 'px-4'
---
::

### Mit benutzerdefinierten Steckplatz

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element anzupassen.

Sie haben Zugriff auf folgende Slots:

`#{{ item.slot }}``#{{ item.slot }}``#{{ item.slot }}`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#####################################################################################################

::component-example
---
Name: 'accordion-custom-slot-beispiel'
Props:
  Klasse: 'px-4'
---
::

### Mit Markdown-Inhalt

Sie können die [Markdown](https://comark.dev/rendering/vue) Komponente von `@comark/vue` verwenden, um Markdown in den Akkordeon-Artikeln zu rendern.

::component-example
---
Einsturz: wahr
Name: 'Akkordeon-Markdown-Beispiel'
Klasse: px-8
---
::

@@184@bmg18

@@@@@@@@185@@props

Komponenten-Props

### Slots

Die Komponenten-Slots

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Emits

Komponenten emittieren

@@@@@@@188@188@@188@@188@18@188@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@@1818@@181818@18@1818@@@1818

Das Komponenten-Theme

@@ph189@@changelog (auf Englisch)

Das Component-Changelog

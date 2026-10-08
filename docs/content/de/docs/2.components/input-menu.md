---
title: Input-Menü
description: Autocomplete-Eingabe mit Echtzeit-Vorschlägen.
category: form
keywords:
  - combobox
  - typeahead
  - autosuggest
links:
  - label: Die Combobox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: Autovervollständigung
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/autocomplete
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputMenu.vue
---

@@@ph000@Verwendung

Verwenden Sie die Direktive `v-model`, um den Wert des InputMenu zu steuern, oder die Direktive `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
  @@ph004@gmail.de
Außen:
  @@@ph005@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Items:
    @@ph007@@backlog
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###################################################################################################################################################################################################################
    @@ph009@in Bearbeitung
    @@ph010@@gmail.com
---
::

::tip
Verwenden Sie dies über eine [`Input`](/docs/components/input), um die Vorteile von Reka UI zu nutzen [`Combobox`](https://reka-ui.com/docs/components/combobox) Komponente, die Autocomplete-Funktionen bietet.
::

::note
Diese Komponente ähnelt der [`SelectMenu`](/docs/components/select-menu), verwendet jedoch eine Eingabe anstelle einer Auswahl.
::

@@ph026@gmail.de

Verwenden Sie `items` prop als Array aus Strings, Zahlen oder Booleans:

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
  @@ph029@gmail.de
Außen:
  @@ph030@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Items:
    @@ph032@@backlog
    @@@@@333@@333@333@@333@33@@@333@@33@@33@@@33@@@33@@@33@@@33@@@@33@@@@33@@@@33@@@33@@@33@3@@@@333@@@333@@@333@@@333@@@33@@33@@@33@@33@@@33@@@@333@@@@333@@@@@333@@@@@@@@333333@@@@@@@@@@@@@@3333333@@@@@@@@@@@@@@@@@@@@333333333@@@@@@@@@@@@@@@@@@@@@@@@@
    @@ph034@in Bearbeitung
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##################################################################################################################################################################################################
---
::

Sie können auch ein Array von Objekten mit den folgenden Eigenschaften übergeben:

`label?: string``label?: string`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}
[`type?: "label" | "separator" | "item"`PH044444 @
- [`icon?: string`{lang="ts-type"}]()
- [`avatar?: AvatarProps`{lang="ts-type"}](PH0588@@@@PH05858)
`chip?: ChipProps`PH0666))
`disabled?: boolean``disabled?: boolean`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

::component-code
---
Ignoriert:
  - modelValue.label (auf Englisch)
  @@ph080@@gmail.de
Außen:
  @@ph081@@gmail.de
  - modellWert
Externe Personen:
  @@@ph083@@@inputmenuitem [Bearbeiten | Quelltext bearbeiten]
Props:
  Modellwert:
    Markiert: "Todo"
  Items:
    - label:'Backlog'
    - label:'Todo'(auf Englisch)
    - label:'In Bearbeitung'
    - label:'Fertig'
---
::

Sie können auch ein Array von Arrays an `items` prop übergeben, um getrennte Gruppen von Elementen anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
  @@ph090@gmail.de
Außen:
  @@ph091@@gmail.de
  - modellWert
Props:
  Modellbezeichnung: "Apple"
  Items:
    @@ph093 @@-Apple hat es geschafft.
      @@ph094@@banana
      @@ph095@@bmwbbb
      @@@@@@@@@ph096@@@grapes
      @@ph097@@pineapple
    - -Aubergine
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Broccoli
      @@ph100@@karotte
      @@@@@@@@101@@101@101@101@101@101@@101@@101@@@101@@101@@@101@@@101@@101@101@101@101@101@@10101@101@@10101@101@10101@@10101@@101001@@101001@@10001@@100001@@@@1000001@@@@@@@10000001@@@@@@@@@@@@@@@10000000001@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@100000000
      @@@@@@@@102@@leek
---
::

### Wertschlüssel

Sie können eine einzelne Eigenschaft des Objekts anstelle des gesamten Objekts binden, indem Sie die `value-key` prop. Defaults auf `undefined` verwenden.

::component-code
---
Einsturz: wahr
Ignoriert:
  - modellWert
  - valueKey
  @@@@@@@108@108@108@108@108@108@108@108@108@108@108@108@108@108@100@1000@108@108@10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Außen:
  @@ph109@gmail.de
  - modellWert
Externe Personen:
  @@@PH11@@@InputMenuItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Modellwert: 'Todo'
  Schlüsselwort:'id'
  Items:
    - label:'Backlog'(auf Englisch)
      Bezeichnung: Backlog
    - label:'Todo'(auf Englisch)
      Suche nach: 'Todo'
    - label:'In Bearbeitung'
      id: 'in_progress'(auf Englisch)
    - label:'Fertig'
      ID: "erledigt"
---
::

::tip
Verwenden Sie `by` prop, um Objekte durch ein Feld anstelle eines Verweises zu vergleichen, wenn `model-value` ein Objekt ist.
::

@@118@118@118@118@118@118@18@18@18@18@118@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@@18@18@@18@18@18@@18@18@@@@@@1818@@@@@@181818@@@@@1818@@@@@@@181818181

Verwenden Sie die `multiple` prop, um Mehrfachauswahl zu ermöglichen, die ausgewählten Elemente werden als Tags angezeigt.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
  - Artikel
  @@122@@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache22@mehrfache@mehrfache@mehrfache22@mehrfache@mehrfache-fache-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-
Außen:
  - Artikel
  - modellWert
Props:
  Modellwert:
    @@ph125@backlog @@ zurück
    @@@@@@@126@126@@126@126@12@126@126@12@126@12@126@@126@12@@126@12@@126@12@12@@126@12@12@@126@12@12@@126
  Vielfach: wahr
  Items:
    @@127@Backlog
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@################################################################################################################################################################################################################
    @@129 @ im Verlauf
    @@@@@@@130@Done
---
::

::caution
Stellen Sie sicher, dass Sie ein Array an die `default-value` prop oder die `v-model`-Direktive übergeben.
::

@@ph133@@Delete Icon Bearbeiten

Mit `multiple` verwenden Sie die `delete-icon` prop, um das Löschen von [Icon](/docs/components/icon) in den Tags. Defaults auf `i-lucide-x`.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
  - Artikel
  @@143@mehrfache143@mehrfache143@mehrfache143@mehrfache143@mehrfache143
Außen:
  - Artikel
  - modellWert
Props:
  Modellwert:
    @@146@Backlog
    @@@@@@@147@147@147@147@147@147@147@147@147@147@147@147@147@147@147@147@@147@147@147@147@147@@147@@147@147@@147@@147@@@147@@@@1447@@@@@@@14477@@@@@@@@@@@@@@@@@@@@@@@@@@14777777777@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  Vielfach: wahr
  deleteIcon: 'i-lucide-trash'(deutsch: 'i-lucide-trash')
  Items:
    @@148@Backlog
    @@149@@149@149@149@149@149@149@149@149@149@149@149@@149@149@149@149@149@149@149@@149@@149@@149@@149@@1499@@@1491449@@@@@@@14999999999999999999999999999999999990000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @150@150@150@150@150@150@150@150@150@150@150@150@150@150@150@150@150@150@150@150@150@150@150@150@150@1500@15000@15000@150000@15000@150000000
    @151@151@151@151@151@151@151@151@151@151@151@151@151@151@151@151@151@151@151@151@151@151@151@151@151@15151@151@15151@151@@15151@@15151@@15151@@@1515151@@@@@1515151@@@@@@15151515151@@@@@@@@@@@@@@@15151000000000001@@@@@@@@@@@@@@@@@@1515151515151@@@@@
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

### Platzhalter

Verwenden Sie `placeholder` prop, um einen Platzhaltertext zu setzen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph158@gmail.de
Außen:
  @@ph159@gmail.de
Props:
  Platzhalter: 'Status auswählen'
  Items:
    @@ph160@backlog @ zurück
    @@161@161@161@161@161@161@161@161@161@161@@161@161@161@16@161@@161@@161@@@161@@@161@@@161@@@161@@@161@@161@@161@@@161@@@@161@@@@@@16161@@@@@@@@@@@@@@@@@@@@16161111111111111@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    - In Bearbeitung
    @@163@163@163@163@163@163@163@163@163@163@163@163@163@163@163@163@163@163@163@163@163@163@163@@163@163@163@163@@163@@163@163@163
---
::

### Mode: badge{label="4.8+" class="align-text-top"}

Setzen Sie `mode` prop auf `autocomplete`, um das InputMenu in eine Freiform-Texteingabe mit Vorschlägen zu verwandeln.

::component-example
---
Name: 'input-menu-mode-example'(Eingabemenü-Beispiel)
---
::

::caution
Wenn `mode``autocomplete`,`multiple`,`by`,`resetSearchTermOnSelect` und `resetModelValueOnClear` nicht anwendbar sind.
::

::tip
Verwenden Sie `content.hideWhenEmpty` prop, um das Menü auszublenden, wenn es keine passenden Vorschläge gibt.
::

### Inhalt

Verwenden Sie `content` prop, um zu steuern, wie der Inhalt des InputMenus gerendert wird, wie zum Beispiel `align` oder `side`.

::component-code
---
Schöner: wahr
Ignoriert:
  @@181@181@181@181@181@181@181@181@181@181@181@@181@181@18@181@18@18@18@@181@@@181@@18@@@181@@181@@181@@181@@181@@181@@181@@181@@@@181000000@@@@@@1000000000
  - modellWert
Außen:
  @@ph183@gmail.de
  - modellWert
Items:
  content.align:
    @@@@@@185@startup
    @@@@@@@@186@186@@186@186@186@186@186@186@186@186@186@186@186@186@186@186@186@186@186@186@186@186@186@186@186@186@@186@@186@@186@@186@@186@@186@@@186@@@@18186@@@@@@18186@@@@@@@@@18618186@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@186
    @@187@187@187@187@187@187@187@187@187@187@187@187@187@187@187@187@187@187@187@@187@187@@187@@187@@187@187@@187@@187@@187@@187@187@@@@187@@187@@@187@@@@@187@@@@@@187@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Ende
  content.side:
    @@@@@@@188@188@@188@188@188@188@188@188@188@188@188@188@188@188@18@188@18@188@18@18@18@188@18@188@18@18@188@18@188@18@1818@1818@@181818@@@18181818
    @@@@@@189@left
    @190@Oberstleuchte
    @@191@bottom
Props:
  Beispiel: "Backlog"
  Inhalt:
    Ausrichtung: Center
    Seite: Bottom
    Seitenversatz: 8
  Items:
    @@192@Backlog
    @@@@@@@193@193@193@193@193@193@@193@193@@193@@193@@193@@193@@193@@193@@193@@193@@193@@193@@193@@193@@193@@193@@193@@@1993@@1919191919191999999999999990000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@194@194@194.de
    @@195@195@195@1995@195@195@195@195@195@195@195@195@195@195@195@195@195@195@195@195@@195@@195@@@195@@195@19195@19191919191919191919100000000000000000000000
---
::

@@ph196@arrow (nicht)

Verwenden Sie `arrow` prop, um einen Pfeil im Eingabemenü anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph198@@gmail.de
  - modellWert
  @@ph200@@arrow (nicht)
Außen:
  @@ph201@@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Arrow: wahr
  Items:
    @@ph203@@backlog
    @@@@@@@@204@@104.04.2013
    @@ph205@in Bearbeitung
    @@ph206@@Done
---
::

@@ph207@@gmail.de

Verwenden Sie `color` prop, um die Ringfarbe zu ändern, wenn das InputMenu fokussiert ist.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph209@gmail.de
  - modellWert
Außen:
  @@ph211@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Farbe: neutral
  Highlight: Wahr
  Items:
    @@ph213@@backlog
    @@ph214@@gmail.de
    @@ph215@in Bearbeitung
    @@ph216@@Done
---
::

::note
Der `highlight` prop wird hier verwendet, um den Fokuszustand anzuzeigen.
::

@@@@@@@@218@@@@Variant

Verwenden Sie `variant` prop, um die Variante des InputMenu zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph220@@gmail.de
  - modellWert
Außen:
  @@ph222@@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Farbe: neutral
  Variante: subtil
  Markiert: false
  Items:
    @@224@Backlog
    @@@225@@Einsteiger
    @@@@@@@226@@In Bearbeitung
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#####################################################################################################################################################################################################
---
::

@@@@@@@@228@@Größe

Verwenden Sie `size` prop, um die Größe des InputMenu zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph230@gmail.de
  - modellWert
Außen:
  @@ph232@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Größe: XL
  Items:
    @@ph234@backlog @@ zurück
    @@ph235@@gmail.de
    @@ph236@@in Bearbeitung
    @@ph237@gmail.de
---
::

@@ph238@@@Icon-Seite

Verwenden Sie die `icon` prop, um ein [Icon](/docs/components/icon) innerhalb des InputMenu anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph244@gmail.de
  - modellWert
Außen:
  @@ph246@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Icon: 'i-lucide-search'(auf Englisch)
  Größe: MD
  Items:
    @@ph248@backlog @@ zurück
    @@@@@@@249@@@Todo
    @@ph250@in Bearbeitung
    @@ph251@gmail.de
---
::

@@ph252@@trailing-symbol

Verwenden Sie die `trailing-icon` prop, um die nachlaufende [Icon](/docs/components/icon). Standardmäßig auf `i-lucide-chevron-down`.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph259@gmail.de
  - modellWert
Außen:
  - Items
  - modellWert
Props:
  Beispiel: "Backlog"
  trailingIcon: 'i-lucide-arrow-down'(deutsch: 'i-lucide-arrow-down')
  Größe: md
  Items:
    @@ph263@@backlog
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###########################################################################################################################################################################################################################
    - In Bearbeitung
    @@ph266@@Eingestellt von
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.chevronDown` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.chevronDown` key anpassen.
:::
::

### Ausgewähltes Icon

Verwenden Sie `selected-icon` prop, um das Symbol anzupassen, wenn ein Element ausgewählt wird.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph274@gmail.de
  - modellWert
Außen:
  - Artikel
  - modellWert
Props:
  Beispiel: "Backlog"
  selectedIcon: 'i-lucide-flame'(I-Lucide-Flamme)
  Größe: md
  Items:
    @@@ph278@@backlog
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#################################################################################################################################################################################################################
    @@ph280@@in Bearbeitung
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@######################################################################################################################################################################################################
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

@@ph286@@clear@ph287@@@clear@ph287@@@clear.com: badge@ph287@@@@ph287

Verwenden Sie `clear` prop, um eine Schaltfläche zum Löschen anzuzeigen, wenn ein Wert ausgewählt ist.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph289@gmail.de
  - modellWert
Außen:
  @@@ph291@gmail.de
  - modellWert
Items:
  Eindeutig:
    @@ph293@@true
    @@ph294@@unwahr
Props:
  Beispiel: "Backlog"
  eindeutig: true
  Items:
    @@ph295@backlog @@ zurück
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##################################################################################################################################################################################################################
    @@ph297 @ in Bearbeitung
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#############################################################################################################################################################################
---
::

### Clear Icon: badge{label="4.4+" class="align-text-top"}

Verwenden Sie die `clear-icon` prop, um die klare Schaltfläche anzupassen [Icon](/docs/components/icon). Standardmäßig auf `i-lucide-x`.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph307@gmail.de
  - modellWert
Außen:
  @@ph309@gmail.de
  - modellWert
Items:
  Eindeutig:
    @@ph311@@true
    @@ph312 @ falsch
Props:
  Beispiel: "Backlog"
  eindeutig: true
  clearIcon: 'i-lucide-trash'(deutsch: 'i-lucide-trash')
  Items:
    @@ph313@@backlog
    @@@@@@@@314@@Todo
    @@ph315@@in Bearbeitung
    @@@@@@@316@Done
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

@@@@@@@avatar321@@avatar321@@avatar321@@@avatar321@@@avatar321@@@avatar321@@@avatar321@@avatar321@@avatar321@@avatar321@@avatar321@@avataryary@avataryary@avataryary@avatary@avataryary@@avataryaryaryary@@@@avataryaryaryaryaryaryaryary@@@@avatyaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryaryary

Verwenden Sie die `avatar` prop, um ein [Avatar](/docs/components/avatar) innerhalb des InputMenus anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph327@gmail.de
  - modellWert
  - avatar.loading (nicht verfügbar)
Außen:
  @@ph330@gmail.de
  - modellWert
Props:
  Modellwert: 'Nuxt'
  Avatare sind:
    src: 'https://github.com/nuxt.png'(auf Englisch)
    Aufladung: Lazy
  Items:
    @@332@@nutten
    - NuxtHub
    - NuxtLabs
    - Nuxt-Module
    - Nuxt-Gemeinschaft
---
::

@@337@Aufladen

Verwenden Sie `loading` prop, um ein Ladesymbol im InputMenu anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@339@gmail.de
  - modellWert
Außen:
  @@ph341@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Aufladung: true
  Nachtrag: false
  Items:
    @@343@Backlog
    @@@@@@@@344@@Todo
    @@345 @ im Verlauf
    @@346@Eingestellt von
---
::

@@ph347@@Icon-Loading-Funktion

Verwenden Sie `loading-icon` prop, um das Ladesymbol anzupassen. Standardmäßig ist `i-lucide-loader-circle`.

::component-code
---
Schöner: wahr
Ignoriert:
  @@@ph350@gmail.de
  - modellWert
Außen:
  @@ph352@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Aufladung: true
  loadingIcon: 'i-lucide-loader'(englisch)
  Items:
    @@ph354@@backlog
    @@@@@555@@@555@555@@@555@555@@555@@@@555@@@55@@55@@@@55@@55@@@55@@@55@@@55@@@55@@@55@@55@@@@5555@@@@@@@5555@@@555@@@@555@@@@@@@55555@@@@@@@@@@@@5555555@@@@@@@@@@@@@@@@@@@@@@55555555@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@55555555000000
    @@356@@Vorwärtsbewegung
    @@@@@@@357@Done
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

### disabled @@ nicht verfügbar

Verwenden Sie `disabled` prop, um das Eingabemenü zu deaktivieren.

::component-code
---
Schöner: wahr
Ignoriert:
  - Artikel
  @@ph365@gmail.de
Außen:
  @@ph366@gmail.de
Props:
  Behindert: Wahr
  Platzhalter: 'Status auswählen'
  Items:
    @@367@Backlog
    @@@@@@@@368@@Todo
    @@369@@Vorwärtskommen
    @@@@@@@370@@Done
---
::

## Beispiele

### Mit Artikel Typ

Sie können die `type`-Eigenschaft mit `separator` verwenden, um ein Trennzeichen zwischen Elementen anzuzeigen, oder `label`, um eine Beschriftung anzuzeigen.

::component-code
---
Einsturz: wahr
Ignoriert:
  - modellWert
  @@@@@@@ph377@@artikel
Außen:
  @@@@@@@378@gmail.de
  - modellWert
Externe Personen:
  @@380@@inputmenuitem [Bearbeiten | Quelltext bearbeiten]
Props:
  Modellbezeichnung: "Apple"
  Items:
    - -type: 'kennzeichnung'
        Schlagwort: "Früchte"
      @@ph382@@Apple auf
      @@383@Banana
      @@384@@Blaubeerenbach
      @@@@@@@385@@gmail.de
      @@ph386@@pineapple
    - -type: 'kennzeichnung'
        Kategorie: „ Gemüse "
      @@@@@@@@388@@Aubergine
      @@389@Bärbel
      @@ph390@@gmail.de
      @@@@@@@@391@@@@@@
      @@@@@@@@392@@leek
---
::

::note
Wenn Sie `label` Elemente als Gruppenüberschriften verwenden, übergeben Sie ein Array von Arrays, damit ein Label zusammen mit seiner Gruppe bei der Suche herausgefiltert wird.
::

### Mit Icon in den Elementen

Sie können die `icon`-Eigenschaft verwenden, um ein [Icon](/docs/components/icon) innerhalb der Elemente anzuzeigen.

::component-example
---
Einsturz: wahr
Name: 'input-menu-items-icon-example'(Eingabe-Menü-Item-Icon-Beispiel)
---
::

::tip
Sie können auch den `#leading`-Slot verwenden, um das ausgewählte Symbol anzuzeigen.
::

### Mit Avatar in den Artikeln

Sie können die `avatar`-Eigenschaft verwenden, um ein [Avatar](/docs/components/avatar) innerhalb der Elemente anzuzeigen.

::component-example
---
Einsturz: wahr
Name: 'input-menu-items-avatar-example'(Eingabemenü-Elemente-Avatar-Beispiel)
---
::

::tip
Sie können auch den `#leading` Slot verwenden, um den ausgewählten Avatar anzuzeigen.
::

### Mit Chip in den Artikeln

Sie können die `chip`-Eigenschaft verwenden, um ein [Chip](/docs/components/chip) innerhalb der Elemente anzuzeigen.

::component-example
---
Einsturz: wahr
name: 'input-menu-items-chip-example'(Eingabe-Menü-Item-Chip-Beispiel)
---
::

::note
In diesem Beispiel wird der `#leading`-Steckplatz verwendet, um den ausgewählten Chip anzuzeigen.
::

### Control Offener Zustand

Sie können den offenen Zustand mit der `default-open` prop oder der `v-model:open`-Direktive steuern.

::component-example
---
Name: 'input-menu-open-example'(Eingabemenü-Beispiel)
---
::

::note
In diesem Beispiel können Sie unter Verwendung von [`defineShortcuts`]() das InputMenu durch Drücken von: kbd{value="O"} umschalten.
::

### Control offener Zustand auf Fokus

Sie können die `open-on-focus` oder `open-on-click` props verwenden, um das Menü zu öffnen, wenn die Eingabe fokussiert oder angeklickt wird.

::component-example
---
Name: 'input-menu-open-focus-example'(Eingabe-Menü-Offen-Fokus-Beispiel)
---
::

### Kontrollsuchbegriff

Verwenden Sie die `v-model:search-term`-Direktive, um den Suchbegriff zu steuern.

::component-example
---
name: 'input-menu-search-term-example'(Eingabemenü-Suchbegriff-Beispiel)
---
::

### Mit rotierendem Icon

Hier ist ein Beispiel mit einem rotierenden Symbol, das den geöffneten Zustand des InputMenu anzeigt.

::component-example
---
Name: 'input-menu-icon-beispiel'.
---
::

### Mit erstellen Element

Verwenden Sie `create-item` prop, um Benutzern das Hinzufügen benutzerdefinierter Werte zu ermöglichen, die nicht in den vordefinierten Optionen enthalten sind.

::component-example
---
Einsturz: wahr
Name: 'input-menu-create-item-example'(Eingabemenü-Element-Beispiel)
---
::

::note
Die Option create wird angezeigt, wenn standardmäßig keine Übereinstimmung gefunden wird. Setzen Sie sie auf `always`, um sie auch dann anzuzeigen, wenn ähnliche Werte existieren.
::

::tip{to="#emits"}
Verwenden Sie das `@create`-Ereignis, um die Erstellung des Elements zu bearbeiten. Sie erhalten das Ereignis und das Element als Argumente.
::

### Mit hergeholten Artikeln

Sie können Elemente aus einer API abrufen und im InputMenu verwenden.

::component-example
---
Einsturz: wahr
Name: 'input-menu-fetch-example'(Eingabemenü-Beispiel)
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Daten nur beim Öffnen des Menüs abzurufen, wodurch unnötige API-Aufrufe beim Laden der Seite vermieden werden.
::

### Mit Ignorierfilter

Setzen Sie `ignore-filter` prop auf `true`, um die interne Suche zu deaktivieren und Ihre eigene Suchlogik zu verwenden.

::component-example
---
Einsturz: wahr
Name: 'input-menu-ignore-filter-example'(Eingabe-Menü-Ignore-Filter-Beispiel)
---
::

::note
In diesem Beispiel wird [`refDebounced`]() verwendet, um die API-Aufrufe zu entkräften.
::

### Mit Filterfeldern

Verwenden Sie `filter-fields` prop mit einem Array von Feldern, um nach. Defaults auf `[labelKey]` zu filtern.

::component-example
---
Einsturz: wahr
name: 'input-menu-filter-fields-example'(Eingabemenü-Filter-Feld-Beispiel)
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Daten nur beim Öffnen des Menüs abzurufen, wodurch unnötige API-Aufrufe beim Laden der Seite vermieden werden.
::

### Mit Virtualisierung: badge{label="4.1+" class="align-text-top"}

Verwenden Sie `virtualize` prop, um die Virtualisierung für große Listen als Boolean oder ein Objekt mit Optionen wie `{ estimateSize: 32, overscan: 12 }` zu aktivieren.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
Wenn diese Option aktiviert ist, werden alle Gruppen aufgrund einer Einschränkung der Reka-Benutzeroberfläche in eine einzige Liste zusammengefasst.
::

::component-example
---
Schöner: wahr
Name: 'input-menu-virtualize-example'(Eingabe-Menü-Virtualisierungs-Beispiel)
---
::

### Mit unendlicher Bildlauf: badge{label="4.4+" class="align-text-top"}

Sie können das [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) composable verwenden, um mehr Daten zu laden, während der Benutzer scrollt.

::component-example
---
Schöner: wahr
Einsturz: wahr
Highlights:
  @@@@462@41
  @@@@563@51
Übertreibungen: wahr
Name: 'input-menu-infinite-scroll-example'(Eingabe-Menü-infinite-scroll-Beispiel)
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, sodass die Daten nur beim Scrollen des Benutzers geladen werden.
::

### Mit voller Inhaltsbreite

Sie können den Inhalt auf die volle Breite seiner Elemente erweitern, indem Sie die Klasse `min-w-fit` auf dem @@-Steckplatz hinzufügen.

::component-example
---
Name: 'input-menu-content-width-example'(Eingabemenü-Inhalt-Widget-Beispiel)
Einsturz: wahr
---
::

::tip
Sie können die Inhaltsbreite auch global in Ihrem `app.config.ts` ändern:

```
export default defineAppConfig({
  ui: {
    inputMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

### Als ein Land picker

Sie können das InputMenu als Länderauswahl mit Lazy Loading verwenden. Länder werden nur beim ersten Öffnen des Menüs abgerufen.

::component-example
---
Einsturz: wahr
name: 'input-menu-countries-example'(Eingabemenü-Länder-Beispiel)
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Länder nur beim ersten Öffnen des Menüs zu laden.
::

@@@@@@@484@@@api

@@@@@@@@@@ph485@@Props

Komponenten-Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<input>` HTML-Attribute.
::

@@ph487@@slots

Die Komponenten-Slots

@@@@@@@@@@@@@@@@Emits

Komponenten emittieren

### Aufdecken

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typen|
| ---- | ---- |
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@####################################################################################################################|{lang="ts-type"}|
| {lang="ts-type"}|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|

@@@ph498@@theme.de

Das Komponenten-Theme

@@ph499@@changelog @@@changelog

Das Component-Changelog

---
description: Ein select-Element zur Auswahl aus einer Liste von Optionen.
category: form
keywords:
  - dropdown
  - picker
links:
  - label: Select auswählen
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/select
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Select.vue
---

@@@ph000@@Verwendung

Verwenden Sie die Direktive `v-model`, um den Wert von Select zu steuern, oder die Direktive `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
Schöner: wahr
Hide:
  @@003@Klasse
Ignoriert:
  - modellWert
  @@@ph005@gmail.de
  @@006@Klasse
Außen:
  @@ph007@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Items:
    @@ph009@@backlog
    @@@@@1010@1010@1010@1010@1010@100@100@100@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@100@@@10000@@@100000@@@@@@@100000000@@@@@@@@100000@@@@@@@@@@@@10000000000@@@@@@@@@@@@@@@@@@@@@@@@10000000000000@@@@@@@@
    @@ph011@in Bearbeitung
    @@ph012@@gmail.de
  Klasse: W-48
---
::

@@ph013@gmail.de

Verwenden Sie `items` prop als Array aus Strings, Zahlen oder Booleans:

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
  @@ph016@@gmail.de
  @@@@@17@17@17
Außen:
  @@ph018@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Items:
    @@ph020@@backlog
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##########################################################################################################################################################################################################################
    @@ph022 @ in Bearbeitung
    @@ph023@@gmail.de
  Klasse: W-48
---
::

Sie können auch ein Array von Objekten mit den folgenden Eigenschaften übergeben:

`label?: string``label?: string`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH03333)
- [`type?: "label" | "separator" | "item"`](#with-items-type)
[`icon?: string`{lang="ts-type"}PH0444)
{lang="ts-type"}PH05444@@@@@@PH0553 @
- [`chip?: ChipProps`{lang="ts-type"}]()
`disabled?: boolean``disabled?: boolean``disabled?: boolean`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH0666@@@@@@@@@@@@@PH0667 @@
`ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }``ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"}

::component-code
---
Ignoriert:
  - modellWert
  @@@ph072@@gmail.de
  @@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@c
Außen:
  @@ph074@gmail.de
  - modellWert
Externe Personen:
  - SelectItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Bezeichnung: Backlog
  Items:
    - label:'Backlog'(auf Englisch)
      Bedeutung: Backlog
    - label:'Todo'(auf Englisch)
      Wert: "alles"
    - label:'In Bearbeitung'
      Wert: 'in_progress'(in_progress)
    @@@ph080@@label:'Fertig'
      Wert: „ Done "
  Klasse: W-48
---
::

::caution
Wenn Sie Objekte verwenden, müssen Sie auf die `value`-Eigenschaft des Objekts in der `v-model`-Direktive oder der `default-value` prop. verweisen.
::

Sie können auch ein Array von Arrays an `items` prop übergeben, um separate Gruppen von Elementen anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
  @@ph086@@gmail.de
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@class@classclass@classclass@classclassclass@classclassclassclass@class@classclass@classclassclassclassclass@classclassclass
Außen:
  @@@@@@@@@@@@@@@ph0888@@@items
  - modellWert
Props:
  Modellbezeichnung: "Apple"
  Items:
    @@ph090 @@-Apple hat es geschafft.
      @@ph091@@bumble
      @@ph092@@@Blaubeerenbach
      @@ph093@@gmail.de
      @@ph094@@pineapple
    @@ph095 @@-Aubergine
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Broccoli
      @@@@@@@@@@@@Carrot
      @@@@@@@@@@@@@@@@ph098@@courgette
      @@@@@@@@999@@leek
  Klasse: W-48
---
::

### Wertschlüssel

Sie können die Eigenschaft ändern, die zum Festlegen des Werts verwendet wird, indem Sie `value-key` prop. Defaults auf `value` verwenden.

::component-code
---
Ignoriert:
  - modellWert
  - valueKey
  @@ph105@gmail.de
  @@106@Klasse
Außen:
  - Artikel
  - modellWert
Externe Personen:
  - SelectItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Bezeichnung: Backlog
  Schlüsselwort:'id'
  Items:
    - label:'Backlog'(auf Englisch)
      Bezeichnung: Backlog
    @@@PH11@label:'Todo'(auf Englisch)
      Suche nach: 'Todo'
    - label:'In Bearbeitung'
      id: 'in_progress'(auf Englisch)
    - label:'Fertig'
      ID: „ erledigt "
  Klasse: W-48
---
::

@@114@114@114@114@114@114@114@114@114@114@114@114@114@114@114@114@114@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@@14@14@@14@@@@14@@@14@@@@14@14@@@@14@@@@@@1414@@@@@@@@1414@@@@@@@@1414@@@@@@141414

Verwenden Sie `multiple` prop, um Mehrfachauswahl zu ermöglichen, die ausgewählten Elemente werden durch ein Komma im Trigger getrennt.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
  - Artikel
  @@118@118@118@118@118@118@18@118@18@18@118@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@@18@18@@18@@18@@18@@18@18@@@@@1818@@@@@@@@181818@@@@@@@@@@@@@@18181818@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@119@class
Außen:
  - Artikel
  - modellWert
Props:
  Modellwert:
    @@ph122@backlog @ zurück
    @@@@@@@123@123@123@123@12@123@123@@123@@123@12@12@123@@12@@123@@123@12@@12@@123@12@@123@@12@@123@12@@123@@123@123@@@123@@@123@@@123@@@1223@@@@@@1223@@@@@@@123@@@@@@@@@@@@1223@@@@@@@@@@@1233@@@@@@@@@@@@@@@123333@@@@@@@@@@@@@@@@@@@@@@@@@@@@@123333@@@
  Vielfach: wahr
  Items:
    @@124@Backlog
    @@@@@@@@125@125@125@125@125@125@@125@125@@125@@125@@125@12@@125@@@125@12@@125@@@125@12@@125@@125@@125@@125@@125@@@125@@@125@@@@1225@@@@@@125@@@@125@@@@@@@1225@@@@@@@@@@@@@@@12225@@@@@@@@@@@@@@@@@@@@@@122222222222222222222222222222222222222222222222
    - In Bearbeitung
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#######################################################################################################################################################################################################
  Klasse: W-48
---
::

::caution
Stellen Sie sicher, dass Sie ein Array an die `default-value` prop oder die `v-model`-Direktive übergeben.
::

### Platzhalter

Verwenden Sie `placeholder` prop, um einen Platzhaltertext zu setzen.

::component-code
---
Schöner: wahr
Ignoriert:
  - Artikel
  @133@Klasse
Außen:
  @@ph134@gmail.de
Props:
  Platzhalter: "Status auswählen"
  Items:
    @@ph135@@backlog
    @@136@@136@136@136@136@136@136@136@136@136@136@136@136@136@@136@136@136@136@136@136@136@136@136@136@136@136@@136@@136@@136@@136@@136@@@1336@@@@@@133336@@@@@@@@@@@@@@@@@1333333336@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@1333333333
    @@137 @ im Verlauf
    @@@@@@138@138@138@138@138@138@138@138@138@138@138@138@138@138@138@@138@138@138@138@@138@@138@@138@@1338@@1338@1338@@1338@@@1338@@1338@@@@1338@@@@13338@@@@@@@@1333338@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@133333338@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  Klasse: W-48
---
::

@@@@@@139 @ Inhalt

Verwenden Sie `content` prop, um zu steuern, wie der Select-Inhalt gerendert wird, z. B.`align` oder `side`.

::component-code
---
Schöner: wahr
Ignoriert:
  - Artikel
  - modellWert
  @145@Klasse
Außen:
  - Artikel
  - modellWert
Items:
  content.align:
    @@148@Start-Ups
    @@149@@gmail.de
    @150@Ende
  content.side:
    @151@151@151@151@151@151@151@151@151@151@151@151@151@151@151@151@15@151@15@151@151@151@151@151@151@151@151@151@151@@15151@@@15151@@15151@@@@15151@@@@@@@@@1515151@@@@@@@@@@@@@@@@@@@@@@@@@@@@15151515151@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@152@left
    @153@Oberstleuchte
    - bottom
Props:
  Beispiel: "Backlog"
  Inhalte:
    Ausrichtung: Center
    Seite: Bottom
    Seitenversatz: 8
  Items:
    @@ph155@backlog @@ zurück
    @@@@@@156@156@156@156@156@156@156@156@156@156@156@156@156@@156@156@156@156@156@156@156@156@156@156@156@156@156@@156@@156@@156@@1556@@@1556@@@@@155556@@@@@@@@@@@@@@@@15555555556
    @@@@@157@157@157@157@157@157@157@157@157@157@157@157@157@157@157@157@157@157@157@157@157@157@157@157@157@157@157@157@157
    @@@@@@158@158@158@158@158@158@158@158@158@158@158@158@158@158@@158@158@158@158@158@158@158@158@158@158@158@158@158@158@158@@158@158@@1558@@@@15558@@1558@@@@15558@@@@@@@@@@@@15855558@@@@@@@@@@@@@@@@@@@@15800000000000000000
  Klasse: W-48
---
::

::note
Diese Optionen gelten nur, wenn `content.position``popper`(Standard) ist.
::

### Position: badge{label="4.7+" class="align-text-top"}

Verwenden Sie `content.position` prop, um zu steuern, wie der Inhalt von Select relativ zum Trigger positioniert wird. Standardmäßig auf `popper`, wodurch der Inhalt wie andere Popovers positioniert wird. Setzen Sie ihn auf `item-aligned`, um den Inhalt mit dem ausgewählten Element auszurichten (ähnlich einem nativen macOS-Menü).

::component-code
---
Schöner: wahr
Ignoriert:
  - Artikel
  - modellWert
  @@168@168@168@168@168@168@168@168@168@168@168@168@168@168@168@168@168@168@168@168@168@168@168@168@168@168@168@168@168@@168@168@168@@168@@168@@@168@@168@@@168@@@168@@@@@168@@@@168@@@@@@@@@@@@@168000000000000000000000
Außen:
  @@ph169@gmail.de
  - modellWert
Items:
  content.position:
    -  item-aligned (auf Englisch)
    - popper
Props:
  Modellwert: 'Todo'
  Inhalt:
    Position: Item-Aligned
  Items:
    @@173@Backlog
    @@@@@@@174@174@174@174@174@174@174@174@174@174@174@174@174@@174@174@174@174@174@174@174@174@174@174@174@174@174@@174@174@@174@@174@@@@@1774@@@@@@17774@@@@@@@@@@@@@@@@@@17777774@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@175@@In Bearbeitung
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@########################################################################################################################################################################################################
  Klasse: W-48
---
::

@@@@@@@177@Arrow

Verwenden Sie `arrow` prop, um einen Pfeil auf dem Select anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@@@@@@179@gmail.de
  - modellWert
  @@181@181@181@181@181@181@181@181@181@181@181@181@@181@@181@181@@181@@181@181@@@181@181@@@181@@@class
  @@ph182@arrow (nicht bekannt)
Außen:
  @@ph183@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Arrow: wahr
  Items:
    @@185@Backlog
    @@@@@@@186@186@186@186@186@186@186@186@186@186@@186@186@186@186@186@186@186@186@186@@186@@186@186@@186@186@@186@@186@@186@@186@@186@@@18186@@@@@1818186@@@@@@@@@@@18618181818181181818
    @@@@@@@187@@In Bearbeitung
    @@@@@@188@188@@188@188@188@188@188@188@188@188@188@188@188@188@18@188@18@188@18@188@18@188@18@188@18@188@188@@181818@181818@@@18181818
  Klasse: W-48
---
::

@@189@Einhorn

Verwenden Sie die `color` prop, um die Ringfarbe zu ändern, wenn die Auswahl fokussiert ist.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph191@@gmail.de
  - modellWert
  @@193@Klasse
Außen:
  @@ph194@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Farbe: neutral
  Highlight: Wahr
  Items:
    @@196@Backlog
    @@@@@@@197@197@197@197@197@197@197@@197@197@@197@@197@@197@@197@@197@@197@@197@197@197@197@191919191919191919191919191919191919191919191919999999100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@@@@@198@@In Bearbeitung
    @1999 @ Eingestellt von
  Klasse: W-48
---
::

::note
Der `highlight` prop wird hier verwendet, um den Fokuszustand anzuzeigen.
::

@@@@@@@@@201@@Variant

Verwenden Sie `variant` prop, um die Variante des Select zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph203@gmail.de
  - modellWert
  @@ph205@gmail.de
Außen:
  @@ph206@@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Farbe: neutral
  Variante: subtil
  Markiert: false
  Items:
    @@ph208@@backlog
    @@@@@@@209@@109
    @@ph210@in Bearbeitung
    @@ph211@gmail.de
  Klasse: W-48
---
::

@@ph212 @ Größe

Verwenden Sie `size` prop, um die Größe des Select zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph214@gmail.de
  - modellWert
  @@ph216@gmail.de
Außen:
  @@ph217@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Größe: XL
  Items:
    @@ph219@@backlog
    @@@@@@@@220@@@Todo
    @@@@@@@221@@In Bearbeitung
    @@@@@@@@222@Done
  Klasse: W-48
---
::

@@@@@@@@@@Icon223

Verwenden Sie die `icon` prop, um ein [Icon](/docs/components/icon) innerhalb des Select anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph229@gmail.de
  - modellWert
  @@231@Klasse
Außen:
  @@ph232@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Icon: 'i-lucide-search'(auf Englisch)
  Größe: md
  Items:
    @@ph234@backlog @@ zurück
    @@ph235@@gmail.de
    @@ph236@@in Bearbeitung
    @@ph237@gmail.de
  Klasse: W-48
---
::

@@ph238@@trailing-symbol

Verwenden Sie die `trailing-icon` prop, um die nachlaufende [Icon](/docs/components/icon).

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph245@gmail.de
  - modellWert
  @@@@@@@class247@class247@class@class247@class@class@class@class@class247@class@class@class@class@class@class@class247@class@class@class@class@class@class@class@class247@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@class@classclass@class@classclassclassclass@class@class@class@classclassclassclass@classclassclass@classclassclassclass@classclassclassclassclassclassclassclassclassclassclassclass@classclassclassclassclassclassclassclassclassclassclassclassclassc
Außen:
  @@ph248@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  trailingIcon: 'i-lucide-arrow-down'(deutsch: 'i-lucide-arrow-down')
  Größe: MD
  Items:
    @@ph250@Backlog (nicht vorhanden)
    @@ph251@@gmail.de
    @@ph252 @ in Bearbeitung
    @@ph253@gmail.de
  Klasse: W-48
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
  - Items
  - modellWert
  @@ph263@gmail.de
Außen:
  - Artikel
  - modellWert
Props:
  Beispiel: "Backlog"
  selectedIcon: 'i-lucide-flame'(I-Lucide-Flamme)
  Größe: MD
  Items:
    @@ph266@@backlog
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@####################################################################################################################################################################################################################
    - In Bearbeitung
    @@@ph269@@Done
  Klasse: W-48
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.check` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.check` Schlüssel anpassen.
:::
::

@@@@@@@@avatar274@@avatar274@@@avatar274@@@avatar274@@@avatar274@@@avatar274@@@avatar274@@@avatar274@@avatar274@@avatar274@@avatar274@@avatar274@@avatar274@@@avatarataratary@@avatarataratarataratary@@avatarataratarataratarataratarataratarataratarataratarataratarataratarataratarataratarataratarataratarataratarataratarataratarataratarataraber

Verwenden Sie die `avatar` prop, um ein [Avatar](/docs/components/avatar) innerhalb des Select anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph280@@gmail.de
  - modellWert
  @@@@@@@282@class
  - avatar.loading (nicht verfügbar)
Außen:
  @@ph284@gmail.de
  - modellWert
Props:
  Modellwert: 'Nuxt'
  Avatare sind:
    src: 'https://github.com/nuxt.png'(auf Englisch)
    Aufladung: Lazy
  Items:
    @@ph286@@nuxt
    - NuxtHub
    - NuxtLabs
    - Nuxt-Module
    - Nuxt-Gemeinschaft
  Klasse: W-48
---
::

@@ph291@Aufladen

Verwenden Sie `loading` prop, um ein Ladesymbol auf dem Select anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@@ph293@gmail.de
  - modellWert
  @@ph295@gmail.de
Außen:
  @@@ph296@@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Aufladung: true
  Nachtrag: false
  Items:
    @@ph298@@backlog
    @@@@@@@299@@@tutuu.de
    @@ph300@in Bearbeitung
    @@@@@@@@301@Done
  Klasse: W-48
---
::

@@ph302@@Icon-Laden

Verwenden Sie `loading-icon` prop, um das Ladesymbol anzupassen. Standardmäßig ist `i-lucide-loader-circle`.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph305@gmail.de
  - modellWert
  @@307@Klasse
Außen:
  @@ph308@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Aufladung: true
  loadingIcon: 'i-lucide-loader'(englisch)
  Items:
    @@ph310@Backlog (englisch)
    @@@@@@@@311@@@Todo
    @@ph312 @ in Bearbeitung
    @@313 @ Eingestellt von
  Klasse: W-48
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

@@ph318@disabled @ disabled

Verwenden Sie `disabled` prop, um die Auswahl zu deaktivieren.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph320@@gmail.de
  @@ph321@gmail.de
  @@322@Klasse
Außen:
  @@ph323@gmail.de
Props:
  Behindert: Wahr
  Platzhalter: 'Status auswählen'
  Items:
    @@ph324@Backlog (nicht vorhanden)
    @@@@@@@@325@@Todo
    @@ph326@@in Bearbeitung
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#####################################################################################################################################################################################################
  Klasse: W-48
---
::

@@328@@Beispiele

### Mit Artikel Typ

Sie können die `type`-Eigenschaft mit `separator` verwenden, um ein Trennzeichen zwischen Elementen anzuzeigen, oder `label`, um eine Beschriftung anzuzeigen.

::component-code
---
Einsturz: wahr
Ignoriert:
  - modellWert
  @@334@gmail.de
  @@335@Klasse
Außen:
  @@336@gmail.de
  - modellWert
Externe Typen:
  @@338@auswählenArtikel []
Props:
  Modellbezeichnung: "Apple"
  Items:
    - type:'beschriftung'.
      Schlagwort: "Früchte"
    @@ph340@@apple.de
    @@341@Banana
    @@342@@Blaubeerenbach
    @@343@@gmail.de
    @@ph344@@pineapple
    - type:'Trennzeichen'
    - type:'label'
      Kategorie: „ Gemüse "
    @@@@@@@@b347@b347 @ b347
    @@348@Bärbel
    @@349@Karotte
    @@ph350@@gmail.de
    @@351@@gmail.de
  Klasse: W-48
---
::

### Mit Icon in den Artikeln

Sie können die `icon`-Eigenschaft verwenden, um ein [Icon](/docs/components/icon) innerhalb der Elemente anzuzeigen.

::component-example
---
Einsturz: wahr
Name: 'select-items-icon-example'(Ikonenbeispiel)
---
::

::note
In diesem Beispiel wird das Symbol aus der `value`-Eigenschaft des ausgewählten Elements berechnet.
::

::tip
Sie können auch den `#leading`-Slot verwenden, um das ausgewählte Symbol anzuzeigen.
::

### Mit Avatar in den Artikeln

Sie können die `avatar`-Eigenschaft verwenden, um ein [Avatar](/docs/components/avatar) innerhalb der Elemente anzuzeigen.

::component-example
---
Einsturz: wahr
name: 'select-items-avatar-example'(select-Elemente-Avatar-Beispiel)
---
::

::note
In diesem Beispiel wird der Avatar aus der `value`-Eigenschaft des ausgewählten Elements berechnet.
::

::tip
Sie können auch den `#leading` Slot verwenden, um den ausgewählten Avatar anzuzeigen.
::

### Mit Chip in den Artikeln

Sie können die `chip`-Eigenschaft verwenden, um ein [Chip](/docs/components/chip) innerhalb der Elemente anzuzeigen.

::component-example
---
Einsturz: wahr
name: 'select-items-chip-example'(select-items-chip-beispiel)
---
::

::note
In diesem Beispiel wird der `#leading`-Steckplatz verwendet, um den ausgewählten Chip anzuzeigen.
::

### Control offener Zustand

Sie können den offenen Zustand mit der `default-open` prop oder der `v-model:open` Direktive steuern.

::component-example
---
Name: 'Beispiel auswählen'
---
::

::note
In diesem Beispiel können Sie unter Verwendung von [`defineShortcuts`]() wählen, indem Sie auf kbd{value="O"} drücken.
::

### Mit rotierendem Icon

Hier ist ein Beispiel mit einem rotierenden Symbol, das den geöffneten Zustand des Select anzeigt.

::component-example
---
Name: 'select-icon-example' auswählen
---
::

### Mit hergeholten Artikeln

Sie können Elemente aus einer API abrufen und in der Auswahl verwenden.

::component-example
---
Name: 'select-fetch-example'(Auswahl-Beispiel)
Einsturz: wahr
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Daten nur beim Öffnen des Menüs abzurufen, wodurch unnötige API-Aufrufe beim Laden der Seite vermieden werden.
::

### Mit unendlichem Scroll: badge{label="4.4+" class="align-text-top"}

Sie können das [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) composable verwenden, um mehr Daten zu laden, während der Benutzer scrollt.

::component-example
---
Schöner: wahr
Einsturz: wahr
Highlights:
  @@395@41
  @@396@51
Übertreibungen: wahr
Name: 'select-infinite-scroll-example'(Auswahl-unendlich-scroll-Beispiel)
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, sodass die Daten nur beim Scrollen des Benutzers geladen werden.
::

### Mit voller Inhaltsbreite

Sie können den Inhalt auf die volle Breite seiner Elemente erweitern, indem Sie die Klasse `min-w-fit` auf dem @@-Slot hinzufügen.

::component-example
---
Name: 'select-content-width-example'(select-content-width-Beispiel)
Einsturz: wahr
---
::

::tip
Sie können die Inhaltsbreite auch global in Ihrem `app.config.ts` ändern:

```
export default defineAppConfig({
  ui: {
    select: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

@@1414 @ BTW

@@@ph415@@Props

Komponenten Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>` HTML-Attribute.
::

### Spielautomaten

Die Komponenten-Slots

@@@ph418@@emits

Komponenten emittieren

@@ph419@@Aufdecken

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typ|
| ---- | ---- |
| {lang="ts-type"}|{lang="ts-type"}|
| {lang="ts-type"}|{lang="ts-type"}|

@@@ph428@@theme.de

Das Komponenten-Theme

@@ph429@@changelog @@@changelog

Das Component-Changelog

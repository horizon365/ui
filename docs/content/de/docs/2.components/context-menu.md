---
title: Kontextmenü erstellen
description: Ein Menü zum Anzeigen von Aktionen beim Rechtsklick auf ein Element.
category: overlay
keywords:
  - right click menu
links:
  - label: Kontextmenü
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/context-menu
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ContextMenu.vue
---

@@@ph000@Verwendung

Verwenden Sie alles, was Sie im Standard-Slot des ContextMenu möchten, und klicken Sie mit der rechten Maustaste darauf, um das Menü anzuzeigen.

::component-code
---
Schöner: wahr
Einsturz: wahr
Ignoriert:
  @@ph001@@gmail.de
  - ui.content
Außen:
  @@ph003@gmail.de
Externe Typen:
  @@@ph004@@@contextmenuItem [][]
Props:
  Items:
    - -label: Aussehen
        Kinder:
          - label: Das System
            Bildnachweis: i-Lucide-Monitor
          - label: Licht
            Bildnachweis: i-lucide-sun
          @@ph008@@label: dunkel
            I-Lucide-Moon Ubersetzungen
    - -label: Seitenleiste anzeigen
        Die KBS:
          @@1010@100@100@100@100@100@100@100@100@100@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@@10@@10@@@100@@@@@@@@@1000000@@@@@@@@@@@@@@@@@@@1000000000@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@1000000000000@@@@@@@@@@@@@@@@@
          @@@@@@11@11@11@11@11@11@111@111@111@1111@111@111@111111@@111111@@11111@111@1111@1111@1111@1111@11111@1111111@11111111@111111111111111111@@111111111111111111111111111111111111111@@@@@@11111111111111111111111111111111111111111111111111111111@@@@@@11111
      - label: Symbolleiste anzeigen
        Die KBS:
          @@ph013@schichten.de
          @@@@@14@14@14@14@14@14@14@14@14@14@14@14
          @@@@@15@15
      - label: Eingeklemmte Tabs
        Behindert: Wahr
    - -label: Aktualisieren Sie die Seite
      - label: Cookies löschen und aktualisieren
      - label: Cache löschen und aktualisieren
      - type: trennzeichen
      - label: Entwickler
        Kinder:
          - -label: Quelle ansehen
              Die KBS:
                @@@@@@@@@@@@@@@@ph023@meta
                @@ph024@schichten.de
                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@########################################################################################################################################################################
            - label: Entwicklertools
              Die KBS:
                @@ph027@@option
                @@@@@@@@@@@ph028@@meta
                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###########################################################################################################################################################
            - label: Elemente prüfen
              Die KBS:
                @@ph031@@option
                @@@@@@@@@@@@@@@@@@ph032@meta
                @@@@@@333@@33@@33@@333@@333@@@@333@@@@333@@@@333@@@333@@@@@@333@@@@33@@@@333@@@@33@@@@33@@@@@333@@@@@333@@@@333@@@@@33@@@@@@@@333@@@@@@@@@@@@@@@@@@@33333@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
          - -label: JavaScript-Konsole
              Die KBS:
                @@ph035@@option
                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###########################################################################################################################################################################################################
                @@@37@jm10
Slots auf:
  Default:|

    @@@@@@@@@@@@@@@@@038 @
      Rechts klicken Sie hier
    @@@@@@@39
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Rechtsklick hier]
::

@@ph041@gmail.de

Verwenden Sie `items` prop als Array von Objekten mit den folgenden Eigenschaften:

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH0444@@@@@@@@PH0444@@@@@@@@@@@PH04444@@@@@@@@@@PH0445 @
`icon?: string``icon?: string``icon?: string`{lang="ts-type"}
`avatar?: AvatarProps``avatar?: AvatarProps``avatar?: AvatarProps``avatar?: AvatarProps``avatar?: AvatarProps`{lang="ts-type"}PH05051 @
`kbds?: string[] | KbdProps[]``kbds?: string[] | KbdProps[]``kbds?: string[] | KbdProps[]`{lang="ts-type"}
- [`type?: "link" | "label" | "separator" | "checkbox"`{lang="ts-type"}]()
`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"``color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"``color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`))PH0667@@@@@PH0667@@@@@PH0667@@@
`checked?: boolean`)))))PH0744.@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`slot?: string`PH08080@@@@@@PH080444`slot?: string`PH08080@@@@@PH08080@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`onUpdateChecked?: (checked: boolean) => void`{lang="ts-type"}{lang="ts-type"}PH0944)PH0994{lang="ts-type"}PH0944@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`class?: any`PH1000@@@@@@PH1001 @
`ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }``ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }``ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`{lang="ts-type"}

Sie können jede Eigenschaft von der [Link](/docs/components/link#props) Komponente wie `to`,`target`, etc. übergeben.

::component-code
---
Schöner: wahr
Einsturz: wahr
Ignoriert:
  - Artikel
  - ui.content
Außen:
  - Artikel
Externe Personen:
  - KontextMenuItem [][]
Props:
  Items:
    - -label: Aussehen
        Kinder:
          - label: Das System
            Bildnachweis: i-Lucide-Monitor
          - label: Licht
            Bildnachweis: i-lucide-sun
          - label: Dunkel
            I-Lucide-Moon Ubersetzungen
    - -label: Seitenleiste anzeigen
        Die KBS:
          @@120@gmail.de
          @@121@s2
      - label: Symbolleiste anzeigen
        Die KBS:
          @@ph123@schichten.de
          @@@@@@@@124@meta
          @@@@@@@125@125@125@125@125@125@125@125@125@@125@@125@@125@@125@@125@125@@@125@@125@125@125@@@125@125@125@@@@125@@@@125@@@125@@@125@@@@@@125@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      - label: Eingeklemmte Tabs
        Behindert: Wahr
    - -label: Aktualisieren Sie die Seite
      - label: Cookies löschen und aktualisieren
      - label: Cache löschen und aktualisieren
      - type: trennzeichen
      - label: Entwickler
        Kinder:
          - -label: Quelle ansehen
              Die KBS:
                @@133@@133@133@13@133@133@133@133@133@133@133@133@@1333@13@13@13@13@13@13@13@13@13@@133@133@@133@13@133@@@1333@@@1333@@@@@13333@@@@@@@@133333@@@@@@@@@@@@@13333333@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                @@ph134@schichten.de
                @135@135@135@135@135@135@135@135@135@135@135@135@135@135@@135@135@135@135@135@@135@@135@@135@135@135@135@135@135@135@@@135@135@@135@@@135@@@@135@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
            - label: Entwicklertools
              Die KBS:
                @@ph137@@option
                @@138@138@138@138@138@138@138@138@138@138@138@138@@138@138@138@138@138@138@138@138@@138@138@@138@138@138@@@@1338@@@@@1338@@@@@@@@138@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###########################################################
                @139 @ ich
            - label: Elemente prüfen
              Die KBS:
                @@ph141@@option
                @@@@@@@142@@meta
                @@@@@@143@143@143@143@143@143@143@143@143@143@143@143@143@143@143@@143@143@143@@143@@143@@143@@143@@143@@143@@143@@@143@@@@143@@@@143@@@@@@@143
          - -label: JavaScript-Konsole
              Die KBS:
                @@ph145@@option
                @@146@@btw
                @@147@jm14
  ui: ist
    Inhalt: "W-48"
Die Slots:
  Default:|

    @@@@@@@148
      Rechts klicken Sie hier
    @@@@149
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Rechtsklick hier]
::

::note
Sie können auch ein Array von Arrays an `items` prop übergeben, um getrennte Gruppen von Elementen zu erstellen.
::

::tip
Jedes Element kann ein `children` Array von Objekten mit den gleichen Eigenschaften wie die `items` prop nehmen, um ein verschachteltes Menü zu erstellen, das mit den Eigenschaften `open`,`defaultOpen` und `content` gesteuert werden kann.
::

@@157@157@157

Verwenden Sie `size` prop, um die Größe des ContextMenu zu ändern.

::component-code
---
Schöner: wahr
Einsturz: wahr
Ignoriert:
  @@ph159@gmail.de
  - ui.content (auf Englisch)
Außen:
  - Artikel
Externe Personen:
  - KontextMenuItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Größe: XL
  Items:
    - label: Das System
      Bildnachweis: i-Lucide-Monitor
    - label: Licht
      Bildnachweis: i-lucide-sun
    - label: Dunkel
      I-Lucide-Moon Ubersetzungen
  ui: ist
    Inhalt: "W-48"
Slots auf:
  Default:|

    @@@@166 @
      Rechts klicken Sie hier
    @@@@@@167 @
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Rechtsklick hier]
::

@@@@@@169@modal

Verwenden Sie `modal` prop, um zu steuern, ob das ContextMenu die Interaktion mit externen Inhalten blockiert.

::component-code
---
Schöner: wahr
Einsturz: wahr
Ignoriert:
  -  Artikel
  - ui.content (auf Englisch)
Außen:
  - Artikel
Externe Typen:
  - KontextMenuItem []
Props:
  Ausführung: FALSE
  Items:
    - label: Das System
      Bildnachweis: i-Lucide-Monitor
    - label: Licht
      Bildnachweis: i-lucide-sun
    - label: Dunkel
      I-Lucide-Moon Ubersetzungen
  ui: ist
    Inhalt: "W-48"
Slots auf:
  Default:|

    @@@@179 @
      Rechts klicken Sie hier
    @@@@180 @
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Rechtsklick hier]
::


### disabled

Verwenden Sie `disabled` prop, um das ContextMenu zu deaktivieren.

::component-code
---
Schöner: wahr
Einsturz: wahr
Ignoriert:
  @@ph184@gmail.de
  - ui.content @@ Ui.content - Ui.content @ Ui.content @@Ui.content @@Ui.content - Ui.content @ Ui.content @@Ui.content
Außen:
  @@186@gmail.de
Externe Personen:
  - KontextMenuItem []
Props:
  Behindert: Wahr
  Items:
    - label: Das System
      Bildnachweis: i-Lucide-Monitor
    - label: Licht
      Bildnachweis: i-lucide-sun
    - label: Dunkel
      I-Lucide-Moon Ubersetzungen
  ui: ist
    Inhalt: "W-48"
Slots auf:
  Default:|

    @@@@191
      Rechts klicken Sie hier
    @@@@@@192 @
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Rechtsklick hier]
::

## Beispiele

### Mit Checkbox Elemente

Sie können die `type`-Eigenschaft mit `checkbox` verwenden und die `checked`/`onUpdateChecked`-Eigenschaften verwenden, um den überprüften Zustand des Elements zu steuern.

::component-example
---
Einsturz: wahr
Name: 'context-menu-checkbox-items-example'(Kontext-Menü-Checkbox-Elemente-Beispiel)
---
::

::note
Um die Reaktivität für den `checked`-Status von Elementen sicherzustellen, wird empfohlen, Ihr `items`-Array in ein `computed`-Array zu wickeln.
::

### Mit farbigen Elementen

Sie können die `color` Eigenschaft verwenden, um bestimmte Elemente mit einer Farbe hervorzuheben.

::component-example
---
Einsturz: wahr
name: 'context-menu-color-items-example'(Kontext-Menü-Farb-Elemente-Beispiel)
---
::

### Mit benutzerdefinierten Steckplatz

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element anzupassen.

Sie haben Zugriff auf folgende Slots:

`#{{ item.slot }}``#{{ item.slot }}``#{{ item.slot }}`PH2099`#{{ item.slot }}`PH2099@@@@@@@@@@PH2099999@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@####################################################################################################################################
`#{{ item.slot }}-label``#{{ item.slot }}-label``#{{ item.slot }}-label``#{{ item.slot }}-label`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#########################################################################################################################

::component-example
---
Einsturz: wahr
name: 'context-menu-custom-slot-example'(Kontextmenü-Beispiel-Beispiel)
---
::

::tip{to="#slots"}
Sie können auch die Slots `#item`,`#item-leading`,`#item-label` und `#item-trailing` verwenden, um alle Elemente anzupassen.
::

### Extract-Verknüpfungen

Verwenden Sie das Dienstprogramm [extractShortcuts](/docs/composables/extract-shortcuts), um automatisch Verknüpfungen aus Menüelementen mit einer `kbds`-Eigenschaft zu definieren.

```vue
<script setup lang="ts">
const items = [
  [{
    label: 'Show Sidebar',
    kbds: ['meta', 'S'],
    onSelect() {
      console.log('Show Sidebar clicked')
    }
  }, {
    label: 'Show Toolbar',
    kbds: ['shift', 'meta', 'D'],
    onSelect() {
      console.log('Show Toolbar clicked')
    }
  }, {
    label: 'Collapse Pinned Tabs',
    disabled: true
  }], [{
    label: 'Refresh the Page'
  }, {
    label: 'Clear Cookies and Refresh'
  }, {
    label: 'Clear Cache and Refresh'
  }, {
    type: 'separator' as const
  }, {
    label: 'Developer',
    children: [[{
      label: 'View Source',
      kbds: ['option', 'meta', 'U'],
      onSelect() {
        console.log('View Source clicked')
      }
    }, {
      label: 'Developer Tools',
      kbds: ['option', 'meta', 'I'],
      onSelect() {
        console.log('Developer Tools clicked')
      }
    }], [{
      label: 'Inspect Elements',
      kbds: ['option', 'meta', 'C'],
      onSelect() {
        console.log('Inspect Elements clicked')
      }
    }], [{
      label: 'JavaScript Console',
      kbds: ['option', 'meta', 'J'],
      onSelect() {
        console.log('JavaScript Console clicked')
      }
    }]]
  }]
]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
In diesem Beispiel: kbd{value="meta"}: kbd{value="S" class="ms-px"},: kbd{value="shift"}: kbd{value="meta" class="ms-px"}: kbd{value="D" class="ms-px"},: kbd{value="D" class="ms-px"},:@ bbbd@@ph298 @@: bd@@ph299 @: bd@@ph300 @: bd@ph301 @: bd@ph302 @: bd@ph302 @@: bd@ph302 @: bd@ph302 @: bd@@ph300 @@: bd@@ph302 @:{value="I" class="ms-px"},: kbd{value="option"}: kbd{value="meta" class="ms-px"}: kbd{value="C" class="ms-px"} und: kbd{value="option"}: kbd{value="meta" class="ms-px"}: kbd{value="J" class="ms-px"} würde die `select`-Funktion des entsprechenden Elements auslösen.
::

@@310@bmdr

@@ph311@@gmail.de

Komponenten-Props

### Slots

Die Komponenten-Slots

@@ph313@@emits

Komponenten emittieren

@@ph314@@gmail.de

Das Komponenten-Theme

@@ph315@changelog @@@@ changelog @@@ changelog

Das Component-Changelog

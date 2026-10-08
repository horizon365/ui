---
title: Dropdownmenu hinzufügen
description: Ein Menü zum Anzeigen von Aktionen beim Klicken auf ein Element.
category: overlay
keywords:
  - menu
  - context menu
  - actions
links:
  - label: Dropdownmenu hinzufügen
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dropdown-menu
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DropdownMenu.vue
---

@@@ph000@Verwendung

Verwenden Sie eine [Button](/docs/components/button) oder eine andere Komponente im Standard-Slot des DropdownMenu.

::component-code
---
Schöner: wahr
Einsturz: wahr
Ignoriert:
  @@@ph005@gmail.de
  - ui.content (auf Englisch)
Außen:
  @@ph007@gmail.de
Externe Typen:
  @@@ph008@@dropdownMenuItem [][]
Props:
  Items:
    @@-label: Bender
        Avatare sind:
          src: 'https://github.com/benjamincanac.png'
          Aufladung: Lazy
        Typ: Etikette
    - -label: Profil
        I-Lucide-Benutzer
      - label: Rechnungsstellung
        Icon: i-lucide-Kreditkarte
      - label: Einstellungen
        Bezeichnung: i-Lucide-Cog
        Die KBS:
          @@ph013 @@","
      - label: Tastaturkürzel
        Bildnachweis: i-Lucide-Monitor
    - -label: Das Team
        Icon: i-lucide-Benutzer
        Filterung:
          Platzhalter: 'Mitglieder suchen...'
        Kinder:
          - -label: benjamincanac (auf Englisch)
              Avatare sind:
                src: 'https://github.com/benjamincanac.png'
                Aufladung: Lazy
            - label: HugoRCD
              Avatare sind:
                src: 'https://github.com/HugoRCD.png'
                Aufladung: Lazy
            - label: atinux
              Avatare sind:
                src: 'https://github.com/atinux.png'(https://github.com/atinux.png)
                Aufladung: Lazy
            - label: romhml
              Avatare sind:
                src: 'https://github.com/romhml.png'(auf Englisch)
                Aufladung: Lazy
            - label: sandros94
              Avatare sind :
                src : ' https://github.com/sandros94.png ' (auf Englisch)
                Aufladung : Lazy
            - label : J-Michalek
              Avatare sind :
                src : ' https://github.com/J-Michalek.png '
                Aufladung : Lazy
            - label : hywax
              Avatare sind :
                src : ' https://github.com/hywax.png ' (auf Englisch)
                Aufladung : Lazy
      - label : Benutzer einladen
        I-Lucide - Benutzer-Plus
        Kinder :
          - - label : E-Mail - Adresse
              Icon : i-lucide - mail (englisch)
            - label : Nachricht
              I-Lucide - Message-Square (englisch)
          - - label : Mehr
              Bezeichnung : i-Lucide - Circle-Plus
              Kinder :
                - label : Import von Slack
                  Icon : I-Simple - Icons-Slack (englisch)
                  auf : ' https://slack.com'
                  Ziel : _ blank
                - label: Import von Trello
                  Icon: I-Simple-Icons-Trello (englisch)
                - label: Import aus Asana
                  Icon: I-Simple-Icons-Asana (Deutsche Übersetzung)
      - label: Neues Team
        Bezeichnung: i-Lucide-Plus
        Die KBS:
          @@@@@@@@@@@@@@ph031@@meta
          @@@@@32@32
    - -label: GitHub (auf Englisch)
        Icon: I-Simple-Icons-GitHub
        zu: 'https://github.com/nuxt/ui'
        Ziel: _blank
      - label: Unterstützung
        Bezeichnung: i-lucide-life-buoy
        zu: '/docs/components/dropdown-menu'
      - label: API
        I-Lucide-Cloud hinzufügen
        Behindert: Wahr
    - -label: Abmelden
        Icon: I-Lucide-Log-Out (Ausloggen)
        Farbe: Error
        Die KBS:
          @@ph037@schichten.de
          @@@@@@@@@@@@@@@@ph038@@@meta
          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@################################################################################################################################################################################################################
Slots auf:
  Default:|

    @@040
---

: u-button {icon="i-lucide-menu" color="neutral" variant="outline"}
::

@@ph042@gmail.de

Verwenden Sie `items` prop als Array von Objekten mit den folgenden Eigenschaften:

`label?: string``label?: string``label?: string``label?: string`{lang="ts-type"}
`icon?: string``icon?: string``icon?: string`{lang="ts-type"}PH0499@@@@@@@@@PH0499@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`avatar?: AvatarProps``avatar?: AvatarProps``avatar?: AvatarProps`{lang="ts-type"}
`kbds?: string[] | KbdProps[]``kbds?: string[] | KbdProps[]`PH0554@@@@@@@@@@@PH0555 @@
- [`type?: "link" | "label" | "separator" | "checkbox"`{lang="ts-type"}]()
`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}))PH0668@@@@@PH0668@@@@@PH0668@@@@@@@PH0668@@@
`checked?: boolean``checked?: boolean``checked?: boolean`)
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`onUpdateChecked?: (checked: boolean) => void``onUpdateChecked?: (checked: boolean) => void``onUpdateChecked?: (checked: boolean) => void``onUpdateChecked?: (checked: boolean) => void`PH0995)))
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`filter?: boolean | InputProps`{lang="ts-type"}]())
`filterFields?: string[]`PH10999@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#################################################################################################################################
`class?: any``class?: any`PH1115 @@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###########################################################################################################################

Sie können jede Eigenschaft von der [Link](/docs/components/link#props) Komponente wie `to`,`target`, etc. übergeben.

::component-code
---
Schöner: wahr
Einsturz: wahr
Ignoriert:
  @@ph125@gmail.de
  - ui.content
Außen:
  - Artikel
Externe Typen:
  - DropdownMenuItem [][]
Props:
  Items:
    - -label: Benjamin (nicht bekannt)
        Avatare sind:
          src: 'https://github.com/benjamincanac.png'
          Aufladung: Lazy
        Typ: Etikette
    - -label: Profil
        Icon: I-Lucide-Benutzer
      - label: Abrechnung
        Icon: i-lucide-Kreditkarte
      - label: Einstellungen
        Bezeichnung: i-Lucide-Cog
        Die KBS:
          @@@@@@@133 @','
      - label: Tastaturkürzel
        Bildnachweis : i-Lucide - Monitor
    - - label : Das Team
        Icon : i-lucide - Benutzer
      - label : Benutzer einladen
        I-Lucide - Benutzer-Plus
        Kinder :
          - - label : E-Mail - Adresse
              Icon : i-lucide - mail (englisch)
            - label : Nachricht
              I-Lucide - Message-Square (englisch)
          - - label : Mehr
              Bezeichnung : i-Lucide - Circle-Plus
              Kinder :
                - label : Import von Slack
                  Icon : I-Simple - Icons-Slack (englisch)
                  auf : ' https ://slack.com'
                  Ziel : _ blank
                - label : Import von Trello
                  Icon : I-Simple - Icons-Trello (englisch)
                - label : Import aus Asana
                  Icon : I-Simple - Icons-Asana (Deutsche Übersetzung)
      - label : Neues Team
        Bezeichnung : i-Lucide - Plus
        Die KBS :
          @@144@@144@144@144@144@144@144@144@144@1444@1444@1444@1444@1444@1444@144@144@1444@144@144@1444@@1444@@@144444@@@@144444@@@@1444444@@@@@@@@1444444@@@@@@@@@@@@@@@@144444444@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
          @145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@145@@145@@@14555@@@@@14551445@@@@@@@@@@144555555@@@@@@@@@@@@@@@@1445555555@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    - -label: GitHub
        Icon: I-Simple-Icons-GitHub
        zu: 'https://github.com/nuxt/ui'
        Ziel: _blank
      - label: Unterstützung
        Bezeichnung: i-lucide-life-buoy
        zu: '/docs/components/dropdown-menu'
      - label: API
        I-Lucide-Cloud hinzufügen
        Behindert: Wahr
    - -label: Abmelden
        Icon: I-Lucide-Log-Out (Ausloggen)
        Die KBS:
          @@ph150@schichten.de
          @@151@151@151@151@151@15
          @@@@@@@@152@@152@152@152@152@152@152@152@152@152@152@152@152@152@@152@@152@152@152@152@@152@@152@152@152@152@@152@@152@152@@152@@152@@@152@@@@@152@@@@@@@@@@@152@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  ui: ist
    Inhalt: "W-48"
Die Slots:
  Default:|

    @@@@153
---

: u-button {icon="i-lucide-menu" color="neutral" variant="outline"}
::

::note
Sie können auch ein Array von Arrays an `items` prop übergeben, um getrennte Gruppen von Elementen zu erstellen.
::

::tip
Jedes Element kann ein `children` Array von Objekten mit den gleichen Eigenschaften wie die `items` prop nehmen, um ein verschachteltes Menü zu erstellen, das mit den Eigenschaften `open`,`defaultOpen` und `content` gesteuert werden kann.
::

@@@@@@@161@161@161@161@161@161@161@161@161@@161@161@161@@161@161@161@161@161@161@@161@161@@161@@161@161@@@161@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Inhalt

Verwenden Sie `content` prop, um zu steuern, wie der DropdownMenu-Inhalt gerendert wird, z. B.`align` oder `side`.

::component-code
---
Schöner: wahr
Einsturz: wahr
Ignoriert:
  - Artikel
  - ui.content (auf Englisch)
Außen:
  - Artikel
Externe Typen:
  - DropdownMenuItem [Bearbeiten | Quelltext bearbeiten]
Items:
  content.align:
    @@@@@@169@@startup
    @@@@@@@@170@Zentrum
    @@171@171@171@171@171@171@171@171@171@171@171@171@171@171@171@171@171@@171@171@171@171@@171@@171@171@171@171@@17171@@@17171@@@17171@@@@17171@@@@@1717171@@@@@@@@@@@@@@@@@171717
  content.side:
    @@@@@@@172@172@17@172@172@172@172@17@172@172@172@17@172@17@172@17@172@@172@172@172@172@172@@172@172@172@@172@@172@@172@@172@@172@@@172@@@@@@172@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#####################
    @@173@bt173@bt173@bt173@bt17.de
    @@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@@174@174@@174@@174@@@@174@@@174@@@@174@@@@174@@@@@1774@@@@@@@@@@17744@@@@@@@@@@@@@@@@@@@@@@@@@@@@@17774444444@@@@@
    @@175@bottom
Props:
  Items:
    - label: Profil anzeigen
      I-Lucide-Benutzer
    - label: Rechnungsstellung
      Icon: i-lucide-Kreditkarte
    - label: Einstellungen
      Bezeichnung: i-Lucide-Cog
  Inhalte:
    Align: Starten
    Seite: Bottom
    Seitenversatz: 8
  ui: ist
    Inhalt: "W-48"
Slots auf:
  Default:|

    @@@@179 @
---

: u-button {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Filter: badge{label="4.6+" class="align-text-top"} Filter: badge{label="4.6+" class="align-text-top"} Filter: badge### Filter: badge{label="4.6+" class="align-text-top"} Filter: badge{label="4.6+" class="align-text-top"} Filter: badge{label="4.6+" class="align-text-top"} Filter: badge{label="4.6+" class="align-text-top"}{label="4.6+" class="align-text-top"}

Verwenden Sie `filter` prop, um eine Filtereingabe innerhalb des DropdownMenu anzuzeigen.

::note{to="#with-ignore-filter"}
Verwenden Sie `ignore-filter` prop, um die interne Suche zu deaktivieren und Ihre eigene Suchlogik zu verwenden.
::

::note{to="#with-filter-fields"}
Verwenden Sie `filter-fields` prop, um anzugeben, nach welchen Feldern gefiltert werden soll.
::

Sie können jede Eigenschaft von der Komponente [Input](/docs/components/input) übergeben, um sie anzupassen.

::component-code
---
Schöner: wahr
Einsturz: wahr
Ignoriert:
  @@ph192@@gmail.de
  @@@ph193@filter.icon
  - content.align
  - ui.content @@ Ui.content - Ui.content @ Ui.content @@Ui.content - Ui.content @ Ui.content @@Ui.content
Außen:
  - Artikel
Externe Personen:
  - DropdownMenuItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Filterung:
    I-Lucide-Suche
  Items:
    - label: Profil anzeigen
      I-Lucide-Benutzer
    - label: Rechnungsstellung
      Icon: i-lucide-Kreditkarte
    - label: Einstellungen
      Bezeichnung: i-Lucide-Cog
    - label: Das Team
      Icon: i-lucide-Benutzer
    - label: Benutzer einladen
      I-Lucide-Benutzer-Plus
    - label: Neues Team
      Bezeichnung: i-Lucide-Plus
  Inhalte:
    Align: Starten
  ui: ist
    Inhalt: "W-48"
Slots auf:
  Default:|

    @@204 von
---

: u-button {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::tip{to="#with-filter-items"}
Sie können den Filter auch für bestimmte Untermenüs aktivieren, indem Sie das Feld `filter` bei Elementen mit `children` verwenden.
::

@@ph208@Pfeiltasten

Verwenden Sie `arrow` prop, um einen Pfeil im DropdownMenu anzuzeigen.

::component-code
---
Schöner: wahr
Einsturz: wahr
Ignoriert:
  @@ph210@arrow (nicht bekannt)
  @@ph211@gmail.de
  - ui.content (auf Englisch)
Außen:
  @@ph213@gmail.de
Externe Personen:
  - DropdownMenuItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Arrow: wahr
  Items:
    - label: Profil anzeigen
      I-Lucide-Benutzer
    - label: Rechnungsstellung
      Icon: i-lucide-Kreditkarte
    - label: Einstellungen
      Bezeichnung: i-Lucide-Cog
  ui: ist
    Inhalt: "W-48"
Slots auf:
  Default:|

    @@@@@@@@218
---

: u-button {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

@@220@000000000000000

Verwenden Sie `size` prop, um die Größe des DropdownMenu zu steuern.

::component-code
---
Schöner: wahr
Einsturz: wahr
Ignoriert:
  @@ph222@@gmail.de
  - content.align
  - ui.content (auf Englisch)
Außen:
  @@ph225@gmail.de
Externe Typen:
  - DropdownMenuItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Größe: XL
  Items:
    - label: Profil anzeigen
      I-Lucide-Benutzer
    - label: Rechnungsstellung
      Icon: i-lucide-Kreditkarte
    - label: Einstellungen
      Bezeichnung: i-Lucide-Cog
  Inhalte:
    Ausrichtung: Start
  ui: ist
    Inhalt: "W-48"
Slots auf:
  Default:|

    @@@@@@@230 @
---

: u-button {size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::warning
Der `size` prop wird nicht an den Button weitergeleitet, Sie müssen ihn selbst einstellen.
::

::note
Bei Verwendung derselben Größe werden die DropdownMenu-Elemente perfekt auf den Button ausgerichtet.
::

@@ph233@modal (nicht)

Verwenden Sie `modal` prop, um zu steuern, ob das DropdownMenu die Interaktion mit externen Inhalten blockiert.

::component-code
---
Schöner: wahr
Einsturz: wahr
Ignoriert:
  @@ph236@gmail.de
  - ui.content @@ Ui.content - ui.content
Außen:
  @@ph238@gmail.de
Externe Personen:
  @@ph239@@dropdownmenuitem [Bearbeiten | Quelltext bearbeiten]
Props:
  Ausführung: false
  Items:
    - label: Profil anzeigen
      I-Lucide-Benutzer
    - label: Rechnungsstellung
      Icon: i-lucide-Kreditkarte
    - label: Einstellungen
      Bezeichnung: i-Lucide-Cog
  ui: ist
    Inhalt: "W-48"
Die Slots:
  Default:|

    @@243
---

: u-button {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### disabled @@ nicht vorhanden

Verwenden Sie `disabled` prop, um das DropdownMenu zu deaktivieren.

::component-code
---
Schöner: wahr
Einsturz: wahr
Ignoriert:
  @@ph247@gmail.de
  - ui.content @@ Ui.content - ui.content
Außen:
  @@ph249@gmail.de
Externe Personen:
  @@ph250@dropdownmenuitem [Bearbeiten | Quelltext bearbeiten]
Props:
  Behindert: Wahr
  Items:
    - label: Profil anzeigen
      I-Lucide-Benutzer
    - label: Rechnungsstellung
      Icon: i-lucide-Kreditkarte
    - label: Einstellungen
      Bezeichnung: i-Lucide-Cog
  ui: ist
    Inhalt: "W-48"
Slots auf:
  Default:|

    @@254
---

: u-button {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

## Beispiele

### Mit Checkbox Elemente

Sie können die `type`-Eigenschaft mit `checkbox` verwenden und die `checked`/`onUpdateChecked`-Eigenschaften verwenden, um den überprüften Zustand des Elements zu steuern.

::component-example
---
Einsturz: wahr
Name: 'dropdown-menu-checkbox-items-example'(Dropdown-Menü-Checkbox-Elemente-Beispiel)
---
::

::note
Um die Reaktivität für den `checked`-Status von Elementen sicherzustellen, wird empfohlen, Ihr `items`-Array in ein `computed`-Array zu wickeln.
::

### Mit farbigen Elementen

Sie können die `color`-Eigenschaft verwenden, um bestimmte Elemente mit einer Farbe hervorzuheben.

::component-example
---
Einsturz: wahr
Name: 'dropdown-menu-color-items-example'(Dropdown-Menü-Farb-Elemente-Beispiel)
---
::

### Mit Filterelementen: badge{label="4.6+" class="align-text-top"}

Sie können die `filter`-Eigenschaft für Elemente mit `children` verwenden, um eine Filtereingabe im Untermenü anzuzeigen.

::component-example
---
Einsturz: wahr
name: 'dropdown-menu-filter-items-example'(Dropdown-Menü-Filter-Elemente-Beispiel)
---
::

### Control Offener Zustand

Sie können den offenen Zustand mit der `default-open` prop oder der `v-model:open` Direktive steuern.

::component-example
---
Einsturz: wahr
Name: 'dropdown-menu-open-example'(Dropdown-Menü-öffnen-Beispiel).
---
::

::note
In diesem Beispiel können Sie das DropdownMenu mithilfe von [`defineShortcuts`]() umschalten, indem Sie: kbd{value="O"}.
::

### Mit benutzerdefinierten Steckplatz

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element anzupassen.

Sie haben Zugriff auf folgende Slots:

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#######################################################################################################################
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##########################################################################################################################
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@########################################################################################################################
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#######################################################################################################

::component-example
---
Einsturz: wahr
name: 'dropdown-menu-custom-slot-example'(Dropdown-Menü-Benutzerdefinitions-Slot-Beispiel)
---
::

::tip{to="#slots"}
Sie können auch die `#item`,`#item-leading`,`#item-label` und `#item-trailing` Slots verwenden, um alle Elemente anzupassen.
::

### Mit Schalter in Elemente

Sie können die `slot`-Eigenschaft mit einem `#{{ slot }}-trailing`-Slot verwenden, um einen [Switch](/docs/components/switch) innerhalb eines Artikels zu rendern.

::component-example
---
Einsturz: wahr
Name: 'dropdown-menu-switch-items-example'(Dropdown-Menü-Schalter-Elemente-Beispiel)
---
::

### Mit Ignorierfilter: badge{label="4.6+" class="align-text-top"}

Wenn Sie das Feld `filter` prop oder das Feld `filter` für Elemente mit `children` verwenden, können Sie `ignore-filter` prop auf `true` einstellen, um die interne Suche zu deaktivieren und Ihre eigene Suchlogik zu verwenden.

::component-example
---
Einsturz: wahr
Name: 'dropdown-menu-ignore-filter-example'(Dropdown-Menü-Ignore-Filter-Beispiel)
---
::

::note
Dieses Beispiel verwendet [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced), um die API-Aufrufe zu entkräften.
::

### Mit Filterfeldern: badge{label="4.6+" class="align-text-top"}

Wenn Sie das Feld `filter` prop oder das Feld `filter` für Elemente mit `children` verwenden, können Sie das Feld `filter-fields` prop mit einem Array von Feldern zum Filtern festlegen.

::component-example
---
Einsturz: wahr
name: 'dropdown-menu-filter-fields-example'(Dropdown-Menü-Filter-Felder-Beispiel)
---
::

### Mit Trigger Inhalt Breite

Sie können den Inhalt auf die volle Breite seiner Schaltfläche erweitern, indem Sie die Klasse `w-(--reka-dropdown-menu-trigger-width)` auf dem @@-Steckplatz hinzufügen.

::component-example
---
Einsturz: wahr
Name: 'dropdown-menu-content-width-example'(Dropdown-Menü-Inhalt-Breite-Beispiel)
---
::

::tip
Sie können die Inhaltsbreite auch global in Ihrem `app.config.ts` ändern:

```
export default defineAppConfig({
  ui: {
    dropdownMenu: {
      slots: {
        content: 'w-(--reka-dropdown-menu-trigger-width)'
      }
    }
  }
})
```
::

### Extract-Verknüpfungen

Verwenden Sie das Dienstprogramm [extractShortcuts](/docs/composables/extract-shortcuts), um automatisch Verknüpfungen aus Menüelementen mit einer `kbds`-Eigenschaft zu definieren.

```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[] = [{
  label: 'Invite users',
  icon: 'i-lucide-user-plus',
  children: [{
    label: 'Invite by email',
    icon: 'i-lucide-send-horizontal',
    kbds: ['meta', 'e'],
    onSelect() {
      console.log('Invite by email clicked')
    }
  }, {
    label: 'Invite by link',
    icon: 'i-lucide-link',
    kbds: ['meta', 'i'],
    onSelect() {
      console.log('Invite by link clicked')
    }
  }]
}, {
  label: 'New team',
  icon: 'i-lucide-plus',
  kbds: ['meta', 'n'],
  onSelect() {
    console.log('New team clicked')
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
In diesem Beispiel: kbd{value="meta"}: kbd{value="E" class="ms-px"},: kbd{value="meta"}: kbd{value="I" class="ms-px"} und: kbd{value="meta"}: kbd{value="N" class="ms-px"} würde die Funktion `select` des entsprechenden Elements auslösen.
::

@@391@@bmg391@bmg391@bmg391@bmg391@bmg391@bmg391@bmg391@bmg391@bmg391@bmg391@bmg391@bmg391@bmg391@bmg391@bmg391@bmg391@bmg391@bmg391@bmg391@bmg31@bmg391@bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd391@bbbbbbbbbbbbd@bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd391@

@@@@@@@@ph392@@Props

Komponenten-Props

@@ph393@gmail.de

Die Komponenten-Slots

@@@@@@@@394@@@Emits

Komponenten emittieren

@@ph395@@gmail.de

Das Komponenten-Theme

@@ph396@@changelog @@changelog

Das Component-Changelog

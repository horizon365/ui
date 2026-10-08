---
title: Navigationsmenu
description: Eine Liste von Links, die horizontal oder vertikal angezeigt werden können.
category: navigation
keywords:
  - navbar
  - menubar
  - sidebar navigation
links:
  - label: Navigationsmenü
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/navigation-menu
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/NavigationMenu.vue
---

@@@ph000@Verwendung

Verwenden Sie die NavigationMenu-Komponente, um eine Liste von Links horizontal oder vertikal anzuzeigen.

::component-code
---
Einsturz: wahr
Hide:
  @@001@Klasse
Ignoriert:
  @@ph002@@gmail.de
Außen:
  @@ph003@gmail.de
Externe Typen:
  - NavigationMenuItem []
Props:
  Items:
    - label: Anleitung
      I-Lucide-Book-Open (englisch)
      nach/docs/getting-started
      Kinder:
        - label: Einführung
          Beschreibung: Vollständig gestaltete und anpassbare Komponenten für Nuxt.
          I-Lucide-Haus
        - label: Installation
          Beschreibung: Erfahren Sie, wie Sie die Nuxt UI in Ihrer Anwendung installieren und konfigurieren.
          Icon: i-lucide-cloud-download (auf Englisch)
        - label:'Icons'(auf Englisch)
          I-Lucide-Smile (englisch)
          Sie haben nichts zu tun,@ nuxt/icon wird das automatisch erledigen.
        - label:'Farben'
          I-Lucide-Swatch-Book (englisch)
          Beschreibung: 'Wählen Sie eine primäre und eine neutrale Farbe aus Ihrem Tailwind CSS-Thema.'
        - label:'Thema'
          Icon: 'i-lucide-cog'(englisch)
          Sie können Komponenten anpassen, indem Sie die `class`/`ui` props oder in Ihrer app.config.ts verwenden.
    - label: Kompositionsmaterialien
      I-Lucide-Datenbank
      nach: /docs/composables
      Kinder:
        - label: defineShortcuts [Bearbeiten | Quelltext bearbeiten]
          Icon: I-Lucide-Dateitext
          Beschreibung: Definieren Sie Shortcuts für Ihre Anwendung.
          nach/docs/composables/define-shortcuts
        - label: useOverlay [Bearbeiten | Quelltext bearbeiten]
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie ein Modal/Slideover in Ihrer Anwendung an.
          zu: /docs/composables/use-overlay
        - label: useToast (auf Englisch)
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie einen Toast innerhalb Ihrer Anwendung an.
          zu: /docs/composables/use-toast
    - label: Komponenten
      Icon: I-Lucide-Box (englisch)
      nach: /docs/components
      Aktiv: Wahr
      Kinder:
        @@ph018@@label: Link
          Icon: I-Lucide-Dateitext
          Verwenden Sie NuxtLink mit Superkräften.
          zu: /docs/components/link
        - label: Modal
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie ein Modal innerhalb Ihrer Anwendung an.
          nach: /docs/components/modal
        - label: Navigationsmenü
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigt eine Liste der Links an.
          zu: /docs/components/navigation-menu
        - label: Paginierung
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigt eine Liste von Seiten an.
          zu: /docs/components/pagination
        - label: Popover
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigt einen nicht-modalen Dialog an, der um ein Triggerelement herum schwebt.
          zu: /docs/components/popover
        - label: Fortschritt
          Icon: I-Lucide-Dateitext
          Beschreibung : Zeigen Sie einen horizontalen Balken an , um den Fortschritt der Aufgabe anzuzeigen .
          nach :/docs/components/progress
    - label : GitHub
      Icon : I-Simple - Icons-GitHub
      Größe : 6K
      zwei :https://github.com/nuxt/ui
      Ziel : _ blank
    - label : Hilfe
      Icon : i-lucide - circle-help (englisch)
      Behindert : Wahr
  Klasse : ' w-volles Rechtsprechungszentrum '
---
::

@@ph026@gmail.de

Verwenden Sie`items`prop als Array von Objekten mit folgenden Eigenschaften :

`label?: string`PH03030
`icon?: string`PH03333@
`avatar?: AvatarProps``avatar?: AvatarProps``avatar?: AvatarProps`{lang="ts-type"}{lang="ts-type"}
`badge?: string | number | BadgeProps``badge?: string | number | BadgeProps``badge?: string | number | BadgeProps`{lang="ts-type"}
[`chip?: boolean | ChipProps`{lang="ts-type"}))
`tooltip?: TooltipProps`{lang="ts-type"}PH0552)
- [PH0555@@@@@@@PH0559)PH05999
`trailingIcon?: string``trailingIcon?: string`{lang="ts-type"}
`type?: 'label' | 'trigger' | 'link'``type?: 'label' | 'trigger' | 'link'`PH06666@
`defaultOpen?: boolean``defaultOpen?: boolean`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`slot?: string`PH08080@@@@@@PH080444`slot?: string`PH08080@@@@@PH08080@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`children?: NavigationMenuChildItem[]`PH09090@@@@@@@@@PH09090@@@@@@@@PH09090@@@@@@@@@@@PH090990@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`class?: any``class?: any``class?: any`{lang="ts-type"}
`ui?: { linkLeadingAvatarSize?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingChipSize?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingBadgeSize?: ClassNameValue, linkTrailingBadge?: ClassNameValue, linkTrailingIcon?: ClassNameValue, label?: ClassNameValue, link?: ClassNameValue, content?: ClassNameValue, childList?: ClassNameValue, childLabel?: ClassNameValue, childItem?: ClassNameValue, childLink?: ClassNameValue, childLinkIcon?: ClassNameValue, childLinkWrapper?: ClassNameValue, childLinkLabel?: ClassNameValue, childLinkLabelExternalIcon?: ClassNameValue, childLinkDescription?: ClassNameValue }``ui?: { linkLeadingAvatarSize?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingChipSize?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingBadgeSize?: ClassNameValue, linkTrailingBadge?: ClassNameValue, linkTrailingIcon?: ClassNameValue, label?: ClassNameValue, link?: ClassNameValue, content?: ClassNameValue, childList?: ClassNameValue, childLabel?: ClassNameValue, childItem?: ClassNameValue, childLink?: ClassNameValue, childLinkIcon?: ClassNameValue, childLinkWrapper?: ClassNameValue, childLinkLabel?: ClassNameValue, childLinkLabelExternalIcon?: ClassNameValue, childLinkDescription?: ClassNameValue }``ui?: { linkLeadingAvatarSize?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingChipSize?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingBadgeSize?: ClassNameValue, linkTrailingBadge?: ClassNameValue, linkTrailingIcon?: ClassNameValue, label?: ClassNameValue, link?: ClassNameValue, content?: ClassNameValue, childList?: ClassNameValue, childLabel?: ClassNameValue, childItem?: ClassNameValue, childLink?: ClassNameValue, childLinkIcon?: ClassNameValue, childLinkWrapper?: ClassNameValue, childLinkLabel?: ClassNameValue, childLinkLabelExternalIcon?: ClassNameValue, childLinkDescription?: ClassNameValue }`{lang="ts-type"}

Sie können jede Eigenschaft von der [Link](/docs/components/link#props) Komponente wie `to`,`target`, etc. übergeben.

::component-code
---
Einsturz: wahr
Ignoriert:
  @@ph104@gmail.de
  @@105@Klasse
Außen:
  - Artikel
Externe Typen:
  - NavigationMenuItem []
Props:
  Items:
    - label: Anleitung
      I-Lucide-Book-Open (englisch)
      nach/docs/getting-started
      Kinder:
        - label: Einführung
          Beschreibung: Vollständig gestaltete und anpassbare Komponenten für Nuxt.
          I-Lucide-Haus
        - label: Installation
          Beschreibung: Erfahren Sie, wie Sie die Nuxt UI in Ihrer Anwendung installieren und konfigurieren.
          Icon: i-lucide-cloud-download (auf Englisch)
        @@@PH11@label:'Icons'(auf Englisch)
          I-Lucide-Smile (englisch)
          Sie haben nichts zu tun,@ nuxt/icon wird das automatisch erledigen.
        - label:'Farben'
          I-Lucide-Swatch-Book (englisch)
          Beschreibung: 'Wählen Sie eine primäre und eine neutrale Farbe aus Ihrem Tailwind CSS-Thema.'
        - label:'Thema'
          Icon: 'i-lucide-cog'(englisch)
          Sie können Komponenten anpassen, indem Sie die `class`/`ui` props oder in Ihrer app.config.ts verwenden.
    - label: Kompositionsmaterialien
      I-Lucide-Datenbank
      nach/docs/composables
      Kinder:
        - label: defineShortcuts [Bearbeiten | Quelltext bearbeiten]
          Icon: I-Lucide-Dateitext
          Beschreibung: Definieren Sie Shortcuts für Ihre Anwendung.
          nach/docs/composables/define-shortcuts
        - label: useOverlay [Bearbeiten | Quelltext bearbeiten]
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie ein Modal/Slideover in Ihrer Anwendung an.
          zu: /docs/composables/use-overlay
        - label: useToast (auf Englisch)
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie einen Toast in Ihrer Anwendung an.
          zu: /docs/composables/use-toast
    - label: Komponenten
      Icon: I-Lucide-Box (englisch)
      nach: /docs/components
      Aktiv: Wahr
      Kinder:
        - label: Link
          Icon: I-Lucide-Dateitext
          Verwenden Sie NuxtLink mit Superkräften.
          zu: /docs/components/link
        - label: Modal
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie ein Modal in Ihrer Anwendung an.
          nach/docs/components/modal
        - label: Navigationsmenü
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigt eine Liste von Links an.
          zu: /docs/components/navigation-menu
        - label: Paginierung
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigt eine Liste von Seiten an.
          zu: /docs/components/pagination
        - label: Popover
          Icon: I-Lucide-Dateitext
          Beschreibung : Zeigt einen nicht-modalen Dialog an , der um ein Triggerelement herum schwebt .
          zu :/docs/components/popover
        - label : Fortschritt
          Icon : I-Lucide - Dateitext
          Beschreibung : Zeigen Sie einen horizontalen Balken an , um den Fortschritt der Aufgabe anzuzeigen .
          nach :/docs/components/progress
    - label : GitHub
      Icon : I-Simple - Icons-GitHub
      Größe : 6K
      zwei :https://github.com/nuxt/ui
      Ziel : _ blank
    - label : Hilfe
      Icon : i-lucide - circle-help (englisch)
      Behindert : Wahr
  Klasse : ' w-volles Rechtsprechungszentrum '
---
::

::note
Sie können auch ein Array von Arrays an`items`prop übergeben , um Gruppen von Elementen anzuzeigen .
::

::tip
Jedes Element kann ein`children`Array von Objekten mit den folgenden Eigenschaften zum Erstellen von Untermenüs verwenden :

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###################################################################################################################
`description?: string`
`icon?: string`
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`class?: any`

::

@@141@141@141@141@141@141@141@141@141@141@141@141@141@141@141@141@141@141@14@141@141@141@141@141@141@141@141@141@141@141@141@141@141@141@141@@14141@@14141@@@14141@@@1414141@@@@@@@@141414141@@@@@@@@@@141414141@@@@@@@@@@@@@@@@@@@@141414141414141@@@@@

Verwenden Sie`orientation`prop , um die Ausrichtung des NavigationMenüs zu ändern .

::note
Wenn die Orientierung`vertical`ist , eine[Accordion](/docs/components/accordion)Komponente wird verwendet , um jede Gruppe anzuzeigen . Sie können den offenen Zustand jedes Elements mit den Eigenschaften`open`und`defaultOpen`steuern und das Verhalten mit den Eigenschaften[`collapsible`](/docs/components/accordion#collapsibleändern .](](/docs/components/accordion#multiple)props .
::

::note
Wenn die Orientierung `vertical` ist und das Menü nicht `collapsed` ist, werden Kinder rekursiv als Elemente dargestellt, so dass `ui.link` sie formatiert.`ui.childLink` gilt nur für die `content`, die in der `horizontal` angezeigt wird, und für die [popover](#with-popover-in-items) wenn `collapsed`.
::

::component-code
---
Einsturz: wahr
Ignoriert:
  @@@@@@@171@171@171@171@171@171@@171@17@17@@171@17@@@171@@17@@17@@17@1@17@1@@17@@17@1@@17@1@@17@@@17@@17@@17@1@17@1@177@@1@@@177@1@@@@177@@1@@@@@1777@@@@@1@@@@@@@@Artikel
  @@@@@@@172@class
Außen:
  - Artikel
Externe Typen:
  - NavigationMenuItem [][]
Props:
  Ausrichtung: "vertikal"
  Items:
    @@175 @@-label: Links (auf Englisch)
        Typ: 'Etikette'
      - label: Anleitung
        I-Lucide-Book-Open (englisch)
        Kinder:
          - label: Einführung
            Beschreibung: Vollständig gestaltete und anpassbare Komponenten für Nuxt.
            I-Lucide-Haus
          - label: Installation
            Beschreibung: Erfahren Sie, wie Sie die Nuxt UI in Ihrer Anwendung installieren und konfigurieren.
            Icon: i-lucide-cloud-download (auf Englisch)
          - label:'Icons'(auf Englisch)
            I-Lucide-Smile (englisch)
            Sie haben nichts zu tun,@ nuxt/icon wird das automatisch erledigen.
          - label:'Farben'
            I-Lucide-Swatch-Book (englisch)
            Beschreibung: 'Wählen Sie eine primäre und eine neutrale Farbe aus Ihrem Tailwind CSS-Thema.'
          - label:'Thema'
            Icon: 'i-lucide-cog'(englisch)
            Sie können Komponenten anpassen, indem Sie die `class`/`ui` props oder in Ihrer app.config.ts verwenden.
      - label: Kompositionsmaterialien
        I-Lucide-Datenbank
        Kinder:
          - label: defineShortcuts [Bearbeiten | Quelltext bearbeiten]
            Icon: I-Lucide-Dateitext
            Beschreibung: Definieren Sie Shortcuts für Ihre Anwendung.
            nach/docs/composables/define-shortcuts
          - label: useOverlay [Bearbeiten | Quelltext bearbeiten]
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigen Sie ein Modal/Slideover in Ihrer Anwendung an.
            zu: /docs/composables/use-overlay
          - label: useToast (auf Englisch)
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigen Sie einen Toast in Ihrer Anwendung an.
            zu: /docs/composables/use-toast
      - label: Komponenten
        Icon: I-Lucide-Box (englisch)
        nach: /docs/components
        Typ: „ Trigger "
        Aktiv: Wahr
        DefaultÖffnen: true
        Kinder:
          @@ph189@@label: Link
            Icon: I-Lucide-Dateitext
            Verwenden Sie NuxtLink mit Superkräften.
            zu: /docs/components/link
          - label: Modal
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigen Sie ein Modal in Ihrer Anwendung an.
            nach/docs/components/modal
          - label: NavigationMenu
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigt eine Liste der Links an.
            zu: /docs/components/navigation-menu
          - label: Paginierung
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigt eine Liste von Seiten an.
            zu: /docs/components/pagination
          - label: Popover
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigt einen nicht-modalen Dialog an, der um ein Triggerelement herum schwebt.
            zu: /docs/components/popover
          - label: Fortschritt
            Icon : I-Lucide - Dateitext
            Beschreibung : Zeigt einen horizontalen Balken an , um den Fortschritt der Aufgabe anzuzeigen .
            zu :/docs/components/progress
    - - label : GitHub
        Icon : I-Simple - Icons-GitHub
        Größe : 6K
        zwei :https://github.com/nuxt/ui
        Ziel : _ blank
      - label : Hilfe
        Icon : i-lucide - circle-help (englisch)
        Behindert : Wahr
  Klasse : ' data - [ ausrichtung = vertikal ] : w - 48 '
---
::

::note
Gruppen werden beabstandet , wenn die Orientierung`horizontal`ist , und getrennt , wenn die Orientierung`vertical`ist .
::

@@199@gmail.de ist kaputt

Verwenden Sie in der`vertical`Orientierung die`collapsed`prop , um das NavigationMenu zu reduzieren , dies kann beispielsweise in einer Seitenleiste nützlich sein .

::note
Sie können die[`tooltip`](#with-tooltip-in-items)und[`popover`](#with-popover-in-items)Props verwenden , um weitere Informationen zu den zusammengebrochenen Gegenständen anzuzeigen .
::

::component-code
---
Einsturz : wahr
Ignoriert :
  - Artikel
  @@ph213@Orientierung
  @@ph214@class
Außen :
  @@ph215@gmail.de
Externe Personen :
  - NavigationMenuItem [ ] [ ]
Items:
  Tooltip:
    @@ph217@@true
    @@ph218@@unwahr
  Populisten:
    @@ph219@@true
    @@ph220@@unwahr
Props:
  untergegangen: true
  Schlagwörter: false
  Schlagwörter: false
  Orientierung: "vertikal"
  Items:
    @@@221 @@-label: Links (auf Englisch)
        Typ: 'Etikette'
      - label: Anleitung
        I-Lucide-Book-Open (englisch)
        Kinder:
          - label: Einführung
            Beschreibung: Vollständig gestaltete und anpassbare Komponenten für Nuxt.
            I-Lucide-Haus
          - label: Installation
            Beschreibung: Erfahren Sie, wie Sie die Nuxt UI in Ihrer Anwendung installieren und konfigurieren.
            Icon: i-lucide-cloud-download (englisch)
          - label:'Icons'(auf Englisch)
            I-Lucide-Smile (englisch)
            Sie haben nichts zu tun,@ nuxt/icon wird das automatisch erledigen.
          - label:'Farben'
            I-Lucide-Swatch-Book (englisch)
            Beschreibung: 'Wählen Sie eine primäre und eine neutrale Farbe aus Ihrem Tailwind CSS-Thema.'
          - label:'Thema'
            Icon: 'i-lucide-cog'(englisch)
            Sie können Komponenten anpassen, indem Sie die `class`/`ui` props oder in Ihrer app.config.ts verwenden.
      - label: Kompositionsmaterialien
        I-Lucide-Datenbank
        Kinder:
          - label: defineShortcuts [Bearbeiten | Quelltext bearbeiten]
            Icon: I-Lucide-Dateitext
            Beschreibung: Definieren Sie Shortcuts für Ihre Anwendung.
            nach/docs/composables/define-shortcuts
          - label: useOverlay [Bearbeiten | Quelltext bearbeiten]
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigen Sie ein Modal/Slideover in Ihrer Anwendung an.
            zu: /docs/composables/use-overlay
          - label: useToast (auf Englisch)
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigen Sie einen Toast in Ihrer Anwendung an.
            zu: /docs/composables/use-toast
      - label: Komponenten
        Icon: I-Lucide-Box (englisch)
        nach: /docs/components
        Aktiv: Wahr
        Kinder:
          @@ph235@@label: Link
            Icon: I-Lucide-Dateitext
            Verwenden Sie NuxtLink mit Superkräften.
            zu: /docs/components/link
          - label: Modal
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigen Sie ein Modal innerhalb Ihrer Anwendung an.
            nach/docs/components/modal
          - label: Navigationsmenü
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigt eine Liste der Links an.
            zu: /docs/components/navigation-menu
          - label: Paginierung
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigt eine Liste von Seiten an.
            zu: /docs/components/pagination
          - label: Popover
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigt einen nicht-modalen Dialog an, der um ein Triggerelement herum schwebt.
            zu: /docs/components/popover
          - label: Fortschritt
            Icon: I-Lucide-Dateitext
            Beschreibung : Zeigt einen horizontalen Balken an , um den Fortschritt der Aufgabe anzuzeigen .
            zu :/docs/components/progress
    - - label : GitHub
        Icon : I-Simple - Icons-GitHub
        Größe : 6K
        zwei :https://github.com/nuxt/ui
        Ziel : _ blank
      - label : Hilfe
        Icon : i-lucide - circle-help (englisch)
        Behindert : Wahr
---
::

@@ph243@@highlight@@@@bmw243@bmw.de

Verwenden Sie`highlight`prop , um einen hervorgehobenen Rahmen für das aktive Element anzuzeigen .

Verwenden Sie`highlight-color`prop , um die Farbe des Rahmens zu ändern . Es ist standardmäßig`color`prop .

::component-code
---
Einsturz : wahr
Schöner : wahr
Ignoriert :
  @@ph247@gmail.de
  @@248@gmail.de
Außen :
  @@ph249@gmail.de
Externe Typen :
  - NavigationMenuItem [ ] [ ]
Props :
  Highlight : Wahr
  highlightFarbe : ' primär '
  Orientierung: "horizontal"
  Items:
    - -label: Anleitung
        I-Lucide-Book-Open (englisch)
        Kinder:
          - label: Einführung
            Beschreibung: Vollständig gestaltete und anpassbare Komponenten für Nuxt.
            I-Lucide-Haus
          - label: Installation
            Beschreibung: Erfahren Sie, wie Sie die Nuxt UI in Ihrer Anwendung installieren und konfigurieren.
            Icon: i-lucide-cloud-download (auf Englisch)
          - label:'Icons'(auf Englisch)
            I-Lucide-Smile (englisch)
            Sie haben nichts zu tun,@ nuxt/icon wird das automatisch erledigen.
          - label:'Farben'
            I-Lucide-Swatch-Book (englisch)
            Beschreibung: 'Wählen Sie eine primäre und eine neutrale Farbe aus Ihrem Tailwind CSS-Thema.'
          - label:'Thema'
            Icon: 'i-lucide-cog'(englisch)
            Sie können Komponenten anpassen, indem Sie die `class`/`ui` props oder in Ihrer app.config.ts verwenden.
      - label: Kompositionsmaterialien
        I-Lucide-Datenbank
        Kinder:
          - label: defineShortcuts [Bearbeiten | Quelltext bearbeiten]
            Icon: I-Lucide-Dateitext
            Beschreibung: Definieren Sie Shortcuts für Ihre Anwendung.
            nach/docs/composables/define-shortcuts
          - label: useOverlay [Bearbeiten | Quelltext bearbeiten]
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigen Sie ein Modal/Slideover in Ihrer Anwendung an.
            zu: /docs/composables/use-overlay
          - label: useToast (auf Englisch)
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigen Sie einen Toast in Ihrer Anwendung an.
            zu: /docs/composables/use-toast
      - label: Komponenten
        Icon: I-Lucide-Box (englisch)
        nach: /docs/components
        Aktiv: Wahr
        DefaultÖffnen: true
        Kinder:
          - label: Link (auf Englisch)
            Icon: I-Lucide-Dateitext
            Verwenden Sie NuxtLink mit Superkräften.
            zu: /docs/components/link
          - label: Modal
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigen Sie ein Modal innerhalb Ihrer Anwendung an.
            nach/docs/components/modal
          - label: Navigationsmenü
            Icon : I-Lucide - Dateitext
            Beschreibung : Zeigt eine Liste der Links an .
            zu :/docs/components/navigation-menu
          - label : Paginierung
            Icon : I-Lucide - Dateitext
            Beschreibung : Zeigt eine Liste von Seiten an .
            zu :/docs/components/pagination
          - label : Popover
            Icon : I-Lucide - Dateitext
            Beschreibung : Zeigt einen nicht-modalen Dialog an , der um ein Triggerelement herum schwebt .
            zu :/docs/components/popover
          - label : Fortschritt
            Icon : I-Lucide - Dateitext
            Beschreibung : Zeigt einen horizontalen Balken an , um den Fortschritt der Aufgabe anzuzeigen .
            zu :/docs/components/progress
    - - label : GitHub (auf Englisch)
        Icon : I-Simple - Icons-GitHub
        Größe : 6K
        zwei :https://github.com/nuxt/ui
        Ziel : _ blank
      - label : Hilfe
        Icon : i-lucide - circle-help (englisch)
        Behindert : Wahr
  Klasse : ' data - [ orientation = horizontal ] : border-b border-default data - [ orientation = horizontal ] : w-full data - [ orientation = vertical ] : w - 48 '
---
::

::note
In diesem Beispiel wird die Klasse`border-b`angewendet , um einen Rahmen in der Orientierung`horizontal`anzuzeigen , dies wird nicht standardmäßig getan , damit Sie eine saubere Weste haben , mit der Sie arbeiten können .
::

::caution
In der `vertical` Orientierung hebt die `highlight` prop nur die Grenze der aktiven Kinder hervor.
::

@@@@@@@b276 @ böhm

Verwenden Sie `color` prop, um die Farbe des NavigationMenüs zu ändern.

::component-code
---
Einsturz: wahr
Ignoriert:
  @@@ph278@gmail.de
  @@@@@@@class279@@class279@class@class279@class@class@class279@class@class@class279@class@class@class@class@class@class@class279@class@class@class@class@class@class@class279@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@classclassclass@classclassclassclass@classclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassc@classc@classclassclassc@classclassclassclassclassclassclassclass
Außen:
  @@ph280@@gmail.de
Externe Typen:
  - NavigationMenuItem [][]
Props:
  Farbe: neutral
  Items:
    - -label: Anleitung
        I-Lucide-Book-Open (englisch)
        nach/docs/getting-started
      - label: Kompositionsmaterialien
        I-Lucide-Datenbank
        nach/docs/composables
      - label: Komponenten
        Icon: I-Lucide-Box (englisch)
        nach: /docs/components
        Aktiv: Wahr
    - -label: GitHub
        Icon : I-Simple - Icons-GitHub
        Größe : 6K
        zwei :https://github.com/nuxt/ui
        Ziel : _ blank
  Klasse : " W-voll "
---
::

@@@@@@@@286@@@Variant-Variante

Verwenden Sie`variant`prop , um die Variante des NavigationMenus zu ändern .

::component-code
---
Einsturz : wahr
Ignoriert :
  @@@ph288@@gmail.de
  @@@@@@@@class289@class289@class@class289@class@class289@class@class289@class@class@class289@class@class@class@class@class@class@class@class289@class@class@class@class@class@class@class@class@class@class@class@classclass@class@classclass@class@class@classclassclass@classclassclassclass@classclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassc@classclassc@classclassclassclassc@classclassclassclassclassc@classclassclassclassc@classclassclassclassclassclassclass
Außen :
  @@ph290@@gmail.de
Externe Typen :
  - NavigationMenuItem [ ] [ ]
Props :
  Farbe : neutral
  Variante : Link
  Markiert : false
  Items :
    - - label : Anleitung
        I-Lucide - Book-Open (englisch)
        nach/docs/getting-started
      - label : Kompositionsmaterialien
        I-Lucide - Datenbank
        nach :/docs/composables
      - label : Komponenten
        Icon : I-Lucide - Box (englisch)
        nach :/docs/components
        Aktiv : Wahr
    - - label : GitHub
        Icon : I-Simple - Icons-GitHub
        Größe : 6K
        zwei :https://github.com/nuxt/ui
        Ziel : _ blank
  Klasse : " W-voll "
---
::

::note
Die`highlight`prop ändert die`pill`Variante aktiven Element style . Try es aus , um den Unterschied zu sehen .
::

@@ph298@@trailing-icon@trailing-symbol

Verwenden Sie die`trailing-icon`prop , um die nachlaufende[Icon]()jedes Elements anzupassen .

::tip
Sie können auch ein Symbol für ein bestimmtes Element festlegen , indem Sie die`trailingIcon`- Eigenschaft im item Objekt verwenden .
::

::component-code
---
Einsturz : wahr
Ignoriert :
  @@ph306@gmail.de
  @@307@Klasse
Außen :
  @@ph308@gmail.de
Externe Typen :
  - NavigationMenuItem [ ]
Props :
  trailingIcon : ' i-lucide - arrow-down ' (deutsch : ' i-lucide - arrow-down')
  Items:
    - label: Anleitung
      I-Lucide-Book-Open (englisch)
      nach/docs/getting-started
      Kinder:
        - label: Einführung
          Beschreibung: Vollständig gestaltete und anpassbare Komponenten für Nuxt.
          I-Lucide-Haus
        - label: Installation
          Beschreibung: Erfahren Sie, wie Sie die Nuxt UI in Ihrer Anwendung installieren und konfigurieren.
          Icon: i-lucide-cloud-download (englisch)
        - label:'Icons'(auf Englisch)
          I-Lucide-Smile (englisch)
          Sie haben nichts zu tun,@ nuxt/icon wird das automatisch erledigen.
        - label:'Farben'
          I-Lucide-Swatch-Book (englisch)
          Beschreibung: 'Wählen Sie eine primäre und eine neutrale Farbe aus Ihrem Tailwind CSS-Thema.'
        - label:'Thema'
          Icon: 'i-lucide-cog'(englisch)
          Sie können Komponenten anpassen, indem Sie die `class`/`ui` props oder in Ihrer app.config.ts verwenden.
    - label: Kompositionsmaterialien
      I-Lucide-Datenbank
      nach/docs/composables
      Kinder:
        - label: defineShortcuts [Bearbeiten | Quelltext bearbeiten]
          Icon: I-Lucide-Dateitext
          Beschreibung: Definieren Sie Shortcuts für Ihre Anwendung.
          nach/docs/composables/define-shortcuts
        - label: useOverlay [Bearbeiten | Quelltext bearbeiten]
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie ein Modal/Slideover in Ihrer Anwendung an.
          zu: /docs/composables/use-overlay
        - label: useToast (auf Englisch)
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie einen Toast in Ihrer Anwendung an.
          zu: /docs/composables/use-toast
    - label: Komponenten
      Icon: I-Lucide-Box (englisch)
      nach: /docs/components
      Aktiv: Wahr
      Kinder:
        @@ph323@@label: Link
          Icon: I-Lucide-Dateitext
          Verwenden Sie NuxtLink mit Superkräften.
          zu: /docs/components/link
        - label: Modal
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie ein Modal innerhalb Ihrer Anwendung an.
          nach/docs/components/modal
        - label: Navigationsmenü
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigt eine Liste der Links an.
          zu: /docs/components/navigation-menu
        - label: Paginierung
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigt eine Liste von Seiten an.
          zu: /docs/components/pagination
        - label: Popover
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigt einen nicht-modalen Dialog an, der um ein Triggerelement herum schwebt.
          zu: /docs/components/popover
        - label: Fortschritt
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie einen horizontalen Balken an, um den Fortschritt der Aufgabe anzuzeigen.
          zu: /docs/components/progress
  Klasse: 'w-volles Rechtsprechungszentrum'
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

@@333@Pfeiltasten

Verwenden Sie `arrow` prop, um einen Pfeil auf den Inhalt des NavigationMenüs anzuzeigen, wenn Elemente untergeordnete Elemente haben.

::component-code
---
Einsturz: wahr
Ignoriert:
  @@335@gmail.de
  @@336@Pfeiltasten
  @@337@Klasse
Außen:
  @@338@gmail.de
Externe Typen:
  @@@339@@nivelliert.de [Bearbeiten]
Props:
  Arrow: wahr
  Items:
    - label: Anleitung
      I-Lucide-Book-Open (englisch)
      nach/docs/getting-started
      Kinder:
        - label: Einführung
          Beschreibung: Vollständig gestaltete und anpassbare Komponenten für Nuxt.
          I-Lucide-Haus
        - label: Installation
          Beschreibung: Erfahren Sie, wie Sie die Nuxt UI in Ihrer Anwendung installieren und konfigurieren.
          Icon: i-lucide-cloud-download (auf Englisch)
        - label:'Icons'(auf Englisch)
          I-Lucide-Smile (englisch)
          Sie haben nichts zu tun,@ nuxt/icon wird das automatisch erledigen.
        - label:'Farben'
          I-Lucide-Swatch-Book (englisch)
          Beschreibung: 'Wählen Sie eine primäre und eine neutrale Farbe aus Ihrem Tailwind CSS-Thema.'
        - label:'Thema'
          Icon: 'i-lucide-cog'(englisch)
          Sie können Komponenten anpassen, indem Sie die `class`/`ui` props oder in Ihrer app.config.ts verwenden.
    - label: Kompositionsmaterialien
      I-Lucide-Datenbank
      nach/docs/composables
      Kinder:
        - label: defineShortcuts [Bearbeiten | Quelltext bearbeiten]
          Icon: I-Lucide-Dateitext
          Beschreibung: Definieren Sie Shortcuts für Ihre Anwendung.
          nach/docs/composables/define-shortcuts
        - label: useOverlay [Bearbeiten | Quelltext bearbeiten]
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie ein Modal/Slideover in Ihrer Anwendung an.
          zu: /docs/composables/use-overlay
        - label: useToast (auf Englisch)
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie einen Toast in Ihrer Anwendung an.
          zu: /docs/composables/use-toast
    - label: Komponenten
      Icon: I-Lucide-Box (englisch)
      nach: /docs/components
      Aktiv: Wahr
      Kinder:
        @@ph353@@label: Link
          Icon: I-Lucide-Dateitext
          Verwenden Sie NuxtLink mit Superkräften.
          zu: /docs/components/link
        - label: Modal
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie ein Modal innerhalb Ihrer Anwendung an.
          nach/docs/components/modal
        - label: Navigationsmenü
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigt eine Liste der Links an.
          zu: /docs/components/navigation-menu
        - label: Paginierung
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigt eine Liste von Seiten an.
          zu: /docs/components/pagination
        - label: Popover
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigt einen nicht-modalen Dialog an, der um ein Triggerelement herum schwebt.
          zu: /docs/components/popover
        - label: Fortschritt
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie einen horizontalen Balken an, um den Fortschritt der Aufgabe anzuzeigen.
          zu: /docs/components/progress
  Klasse: 'w-volles Rechtsprechungszentrum'
---
::

::note
Der Pfeil wird animiert, um dem aktiven Element zu folgen.
::

### Inhaltsorientierung

Verwenden Sie `content-orientation` prop, um die Ausrichtung des Inhalts zu ändern.

::warning
Diese Requisite funktioniert nur, wenn `orientation``horizontal` ist.
::

::component-code
---
Einsturz: wahr
Ignoriert:
  @@363@gmail.de
  @@ph364@arrow (nicht)
  @@365@Klasse
Außen:
  @@ph366@gmail.de
Externe Personen:
  - NavigationMenuItem []
Props:
  Arrow: wahr
  Inhaltsausrichtung: 'vertikal'
  Items:
    - label: Anleitung
      I-Lucide-Book-Open (englisch)
      nach/docs/getting-started
      Kinder:
        - label: Einführung
          Beschreibung: Vollständig gestaltete und anpassbare Komponenten für Nuxt.
          I-Lucide-Haus
        - label: Installation
          Beschreibung: Erfahren Sie, wie Sie die Nuxt UI in Ihrer Anwendung installieren und konfigurieren.
          Icon: i-lucide-cloud-download (auf Englisch)
        - label:'Icons'(auf Englisch)
          I-Lucide-Smile (englisch)
          Sie haben nichts zu tun,@ nuxt/icon wird das automatisch erledigen.
    - label: Kompositionsmaterialien
      I-Lucide-Datenbank
      nach: /docs/composables
      Kinder:
        - label: defineShortcuts [Bearbeiten | Quelltext bearbeiten]
          Icon: I-Lucide-Dateitext
          Beschreibung: Definieren Sie Shortcuts für Ihre Anwendung.
          nach/docs/composables/define-shortcuts
        - label: useOverlay [Bearbeiten | Quelltext bearbeiten]
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie ein Modal/Slideover in Ihrer Anwendung an.
          zu: /docs/composables/use-overlay
        - label: useToast (auf Englisch)
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie einen Toast in Ihrer Anwendung an.
          zu: /docs/composables/use-toast
    - label: Komponenten
      Icon: I-Lucide-Box (englisch)
      nach: /docs/components
      Aktiv: Wahr
      Kinder:
        - label: Link
          Icon: I-Lucide-Dateitext
          Verwenden Sie NuxtLink mit Superkräften.
          zu: /docs/components/link
        - label: Modal
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie ein Modal innerhalb Ihrer Anwendung an.
          nach/docs/components/modal
        - label: Navigationsmenü
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigt eine Liste von Links an.
          zu: /docs/components/navigation-menu
        - label: Paginierung
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigt eine Liste von Seiten an.
          zu: /docs/components/pagination
  Klasse: 'w-volles Rechtsprechungszentrum'
---
::

@@381@unmount

Verwenden Sie `unmount-on-hide` prop, um das Verhalten des Absetzens von Inhalten zu steuern. Standardmäßig `true`.

::component-code
---
Einsturz: wahr
Ignoriert:
  @@384@gmail.de
  @@ph385@arrow (nicht)
  @@386@gmail.de
Außen:
  @@@@@@@@ph387@@gmail.de
Externe Personen:
  @@388@@nautismus.de [Bearbeiten | Quelltext bearbeiten]
Props:
  unmountOnHide: falsch
  Items:
    - label: Anleitung
      I-Lucide-Book-Open (englisch)
      nach/docs/getting-started
      Kinder:
        - label: Einführung
          Beschreibung: Vollständig gestaltete und anpassbare Komponenten für Nuxt.
          I-Lucide-Haus
        - label: Installation
          Beschreibung: Erfahren Sie, wie Sie die Nuxt UI in Ihrer Anwendung installieren und konfigurieren.
          Icon: i-lucide-cloud-download (englisch)
        - label:'Icons'(auf Englisch)
          I-Lucide-Smile (englisch)
          Sie haben nichts zu tun,@ nuxt/icon wird das automatisch erledigen.
        - label:'Farben'
          I-Lucide-Swatch-Book (englisch)
          Beschreibung: 'Wählen Sie eine primäre und eine neutrale Farbe aus Ihrem Tailwind CSS-Thema.'
        - label:'Thema'
          Icon: 'i-lucide-cog'(englisch)
          Sie können Komponenten anpassen, indem Sie die `class`/`ui` props oder in Ihrer app.config.ts verwenden.
    - label: Kompositionsmaterialien
      I-Lucide-Datenbank
      nach/docs/composables
      Kinder:
        - label: defineShortcuts [Bearbeiten | Quelltext bearbeiten]
          Icon: I-Lucide-Dateitext
          Beschreibung: Definieren Sie Shortcuts für Ihre Anwendung.
          nach/docs/composables/define-shortcuts
        - label: useOverlay [Bearbeiten | Quelltext bearbeiten]
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie ein Modal/Slideover in Ihrer Anwendung an.
          zu: /docs/composables/use-overlay
        - label: useToast (auf Englisch)
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie einen Toast in Ihrer Anwendung an.
          zu: /docs/composables/use-toast
    - label: Komponenten
      Icon: I-Lucide-Box (englisch)
      nach: /docs/components
      Aktiv: Wahr
      Kinder:
        - label: Link
          Icon: I-Lucide-Dateitext
          Verwenden Sie NuxtLink mit Superkräften.
          zu: /docs/components/link
        - label: Modal
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie ein Modal innerhalb Ihrer Anwendung an.
          nach/docs/components/modal
        - label: Navigationsmenü
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigt eine Liste der Links an.
          zu: /docs/components/navigation-menu
        - label: Paginierung
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigt eine Liste von Seiten an.
          zu: /docs/components/pagination
        - label: Popover
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigt einen nicht-modalen Dialog an, der um ein Triggerelement herum schwebt.
          zu: /docs/components/popover
        - label: Fortschritt
          Icon: I-Lucide-Dateitext
          Beschreibung: Zeigen Sie einen horizontalen Balken an, um den Fortschritt der Aufgabe anzuzeigen.
          zu: /docs/components/progress
  Klasse: 'w-volles Rechtsprechungszentrum'
---
::

::note
Sie können das DOM inspizieren, um zu sehen, wie der Inhalt jedes Elements gerendert wird.
::

@@ph408@@Beispiele

### Control aktiv Element

Sie können die aktiven Elemente steuern, indem Sie die `default-value` prop oder die `v-model` Direktive mit der `value` des Elements verwenden. Wenn kein `value` angegeben ist, wird standardmäßig `item-${index}` für Elemente der obersten Ebene oder `item-${level}-${index}` für verschachtelte Elemente verwendet.

::component-example
---
Einsturz: wahr
name: 'navigation-menu-model-value-example'(navigation-menü-modell-wert-beispiel)
---
::

::tip
Verwenden Sie `value-key` prop, um den Schlüssel zu ändern, der für die Übereinstimmung mit Elementen verwendet wird, wenn ein `v-model` oder `default-value` bereitgestellt wird.
::

::note
In diesem Beispiel können Sie unter Verwendung von [`defineShortcuts`]() das aktive Element durch Drücken von kbd{value="1"}, kbd{value="2"} oder kbd{value="3"} umschalten.
::

### Mit Tooltip in den Elementen

Wenn die Orientierung `vertical` ist und das Menü `collapsed` ist, Sie können die `tooltip` prop auf `true` einstellen, um eine [Tooltip]()) um Elemente mit ihrem Etikett herum anzuzeigen, aber Sie können auch die `tooltip`-Eigenschaft für jedes Element verwenden, um den Standard-Tooltip zu überschreiben. Wenn Sie sich orientieren möchten, können Sie die `tooltip`-Eigenschaft für jedes Element verwenden, um ein [Tooltip](/docs/components/tooltip) um Elemente anzuzeigen.

::note
Die `tooltip`-Eigenschaft eines Elements zeigt immer einen Tooltip an, unabhängig von der globalen `tooltip`-Prop.
::

Sie können jede Eigenschaft von der [Tooltip](/docs/components/tooltip) Komponente global oder auf jedem Element übergeben.

::component-code
---
Einsturz: wahr
Ignoriert:
  @@499@gmail.de
  @@500@Klasse
Außen:
  @@ph451@gmail.de
Externe Typen:
  - NavigationMenuItem [][]
Items:
  Der Tooltip:
    @@ph453@@true
    @@@@@@@554@@554@54@554@@@554@54@@54@54@54@54@@@false
Props:
  Tooltip: Richtig
  untergegangen: true
  Ausrichtung: "vertikal"
  Items:
    @@@ph455 @@-label: Links (auf Englisch)
        Typ: 'Etikette'
      - label: Anleitung
        I-Lucide-Book-Open (englisch)
        Kinder:
          - label: Einführung
            Beschreibung: Vollständig gestaltete und anpassbare Komponenten für Nuxt.
            I-Lucide-Haus
          - label: Installation
            Beschreibung: Erfahren Sie, wie Sie die Nuxt UI in Ihrer Anwendung installieren und konfigurieren.
            Icon: i-lucide-cloud-download (englisch)
          - label:'Icons'(auf Englisch)
            I-Lucide-Smile (englisch)
            Sie haben nichts zu tun,@ nuxt/icon wird das automatisch erledigen.
          - label:'Farben'
            I-Lucide-Swatch-Book (englisch)
            Beschreibung: 'Wählen Sie eine primäre und eine neutrale Farbe aus Ihrem Tailwind CSS-Thema.'
          - label:'Thema'
            Icon: 'i-lucide-cog'(englisch)
            Sie können Komponenten anpassen, indem Sie die `class`/`ui` props oder in Ihrer app.config.ts verwenden.
      - label: Kompositionsmaterialien
        I-Lucide-Datenbank
        Kinder:
          - label: defineShortcuts [Bearbeiten | Quelltext bearbeiten]
            Icon: I-Lucide-Dateitext
            Beschreibung: Definieren Sie Shortcuts für Ihre Anwendung.
            nach/docs/composables/define-shortcuts
          - label: useOverlay [Bearbeiten | Quelltext bearbeiten]
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigen Sie ein Modal/Slideover in Ihrer Anwendung an.
            zu: /docs/composables/use-overlay
          - label: useToast (auf Englisch)
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigen Sie einen Toast in Ihrer Anwendung an.
            zu: /docs/composables/use-toast
      - label: Komponenten
        Icon: I-Lucide-Box (englisch)
        nach: /docs/components
        Aktiv: Wahr
        Kinder:
          - label: Link
            Icon: I-Lucide-Dateitext
            Verwenden Sie NuxtLink mit Superkräften.
            zu: /docs/components/link
          - label: Modal
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigen Sie ein Modal in Ihrer Anwendung an.
            nach/docs/components/modal
          - label: NavigationMenu
            Icon: I-Lucide-Dateitext
            Beschreibung : Zeigt eine Liste von Links an .
            zu :/docs/components/navigation-menu
          - label : Paginierung
            Icon : I-Lucide - Dateitext
            Beschreibung : Zeigt eine Liste von Seiten an .
            zu :/docs/components/pagination
          - label : Popover
            Icon : I-Lucide - Dateitext
            Beschreibung : Zeigt einen nicht-modalen Dialog an , der um ein Triggerelement herum schwebt .
            zu :/docs/components/popover
          - label : Fortschritt
            Icon : I-Lucide - Dateitext
            Beschreibung : Zeigt einen horizontalen Balken an , um den Fortschritt der Aufgabe anzuzeigen .
            zu :/docs/components/progress
    - - label : GitHub (auf Englisch)
        Icon : I-Simple - Icons-GitHub
        Größe : 6K
        zwei :https://github.com/nuxt/ui
        Ziel : _ blank
        Der Tooltip :
          Text : " Öffnen auf GitHub "
          Die KBS :
            @@@@676@@6000
      - label : Hilfe
        Icon : i-lucide - circle-help (englisch)
        Behindert: Wahr
---
::

### Mit Popover in Artikeln

Wenn die Orientierung `vertical` ist und das Menü `collapsed` ist, können Sie die `popover` prop auf `true` einstellen, um eine [Popover](/docs/components/popover) um Elemente mit ihren Kindern anzuzeigen, aber Sie können auch die `popover` Eigenschaft auf jedem Element verwenden, um die Standard-Popover zu überschreiben.

::note
Die `popover`-Eigenschaft eines Elements zeigt immer ein Popover an, unabhängig von der globalen `popover`-Prop.
::

Sie können jede Eigenschaft von der [Popover](/docs/components/popover) Komponente global oder auf jedem Artikel übergeben.

::component-code
---
Einsturz: wahr
Ignoriert:
  @@ph494@gmail.de
  @@ph495@@orientierung
  @@496@gmail.de
Außen:
  @@@ph497@gmail.de
Externe Typen:
  - NavigationMenuItem [][]
Items:
  Populisten:
    @@ph499@@true
    @@ph500@@unwahr
Props:
  Popovers: wahr
  untergegangen: true
  Orientierung: "vertikal"
  Items:
    @@501 @@-label: Links (auf Englisch)
        Typ: 'Etikette'
      - label: Anleitung
        I-Lucide-Book-Open (englisch)
        Kinder:
          - label: Einführung
            Beschreibung: Vollständig gestaltete und anpassbare Komponenten für Nuxt.
            I-Lucide-Haus
          - label: Installation
            Beschreibung: Erfahren Sie, wie Sie die Nuxt UI in Ihrer Anwendung installieren und konfigurieren.
            Icon: i-lucide-cloud-download (englisch)
          - label:'Icons'(auf Englisch)
            I-Lucide-Smile (englisch)
            Sie haben nichts zu tun,@ nuxt/icon wird das automatisch erledigen.
          - label:'Farben'
            I-Lucide-Swatch-Book (englisch)
            Beschreibung: 'Wählen Sie eine primäre und eine neutrale Farbe aus Ihrem Tailwind CSS-Thema.'
          - label:'Thema'
            Icon: 'i-lucide-cog'(englisch)
            Sie können Komponenten anpassen, indem Sie die `class`/`ui` props oder in Ihrer app.config.ts verwenden.
      - label: Kompositionsmaterialien
        I-Lucide-Datenbank
        Popovers:
          Modus: "Klick"
        Kinder:
          - label: defineShortcuts [Bearbeiten | Quelltext bearbeiten]
            Icon: I-Lucide-Dateitext
            Beschreibung: Definieren Sie Shortcuts für Ihre Anwendung.
            nach/docs/composables/define-shortcuts
          - label: useOverlay [Bearbeiten | Quelltext bearbeiten]
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigen Sie ein Modal/Slideover in Ihrer Anwendung an.
            zu: /docs/composables/use-overlay
          - label: useToast (auf Englisch)
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigen Sie einen Toast in Ihrer Anwendung an.
            zu: /docs/composables/use-toast
      - label: Komponenten
        Icon: I-Lucide-Box (englisch)
        nach: /docs/components
        Aktiv: Wahr
        Kinder:
          - label: Link
            Icon: I-Lucide-Dateitext
            Verwenden Sie NuxtLink mit Superkräften.
            zu: /docs/components/link
          - label: Modal
            Icon: I-Lucide-Dateitext
            Beschreibung: Zeigen Sie ein Modal in Ihrer Anwendung an.
            nach/docs/components/modal
          - label: Navigationsmenü
            Icon: I-Lucide-Dateitext
            Beschreibung : Zeigt eine Liste der Links an .
            zu :/docs/components/navigation-menu
          - label : Paginierung
            Icon : I-Lucide - Dateitext
            Beschreibung : Zeigt eine Liste von Seiten an .
            zu :/docs/components/pagination
          - label : Popover
            Icon : I-Lucide - Dateitext
            Beschreibung : Zeigt einen nicht-modalen Dialog an , der um ein Triggerelement herum schwebt .
            zu :/docs/components/popover
          - label : Fortschritt
            Icon : I-Lucide - Dateitext
            Beschreibung : Zeigen Sie einen horizontalen Balken an , um den Fortschritt der Aufgabe anzuzeigen .
            zu :/docs/components/progress
    - - label : GitHub (auf Englisch)
        Icon : I-Simple - Icons-GitHub
        Größe : 6K
        zwei :https://github.com/nuxt/ui
        Ziel : _ blank
        Der Tooltip :
          Text : " Öffnen auf GitHub "
          Die KBS :
            @@@522@@6k
      - label : Hilfe
        Icon : i-lucide - circle-help (englisch)
        Behindert: Wahr
---
::

::tip{to="#with-content-slot"}
Sie können den `#content`-Slot verwenden, um den Inhalt des Popovers in der `vertical`-Ausrichtung anzupassen.
::

### Mit Chip in Artikeln: badge{label="4.5+" class="align-text-top"}

Verwenden Sie die `chip` Eigenschaft, um eine [Chip](/docs/components/chip) um das Symbol der Elemente anzuzeigen, Sie können jede seiner Requisiten übergeben.

::component-code
---
Einsturz: wahr
Ignoriert:
  @@ph533@gmail.de
  @@534@Klasse
Außen:
  @@ph535@gmail.de
Externe Typen:
  - NavigationMenuItem [][]
Props:
  untergegangen: true
  Orientierung: "vertikal"
  Items:
    - -label: Anleitung
        I-Lucide-Book-Open (englisch)
        Der CHIP:
          Farbe: Error
      - label: Kompositionsmaterialien
        I-Lucide-Datenbank
        Der CHIP:
          Farbe: Info
          Text: 3
      - label : Komponenten
        Icon : I-Lucide - Box (englisch)
        nach :/docs/components
        Aktiv : Wahr
        Chip : echt
    - - label : GitHub
        Icon : I-Simple - Icons-GitHub
        zwei :https://github.com/nuxt/ui
        Ziel : _ blank
      - label : Hilfe
        Icon : i-lucide - circle-help (englisch)
        Behindert : Wahr
---
::

### Mit unterer Tabulatorleiste

Verwenden Sie`ui`prop , um das NavigationMenu in eine untere Tab-Leiste im mobilen Stil mit Symbolen und kleinen Labels zu verwandeln , ähnlich wie YouTube oder Instagram .

::component-example
---
Einsturz : wahr
name : ' navigation-menu - bottom-tab - bar-example ' (navigation-menu - bottom-tab - bar-Beispiel)
---
::

### Mit zusammengebrochenen Etiketten

Verwenden Sie`ui`prop , um ein Etikett unter jedem Symbol anzuzeigen , wenn es zusammengeklappt ist .

::component-example
---
Einsturz : wahr
name : ' navigation-menu - collapsed-label - example ' (navigation-menu - collapsed-label - example) (navigation-menu - collapsed-label - beispiel)
---
::

::tip
Sie können dies auch global über die`app.config.ts`mit[`compoundVariants`](/docs/getting-started/theme/components#compound-variants):

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    navigationMenu: {
      compoundVariants: [{
        orientation: 'vertical',
        collapsed: true,
        class: {
          link: 'flex-col',
          linkLabel: 'block text-[10px]/3 text-center'
        }
      }]
    }
  }
})
```

::

### Mit benutzerdefinierten Steckplatz

Verwenden Sie die`slot`- Eigenschaft , um ein bestimmtes Element anzupassen .

Sie haben Zugriff auf folgende Slots :

`#{{ item.slot }}``#{{ item.slot }}``#{{ item.slot }}`{lang="ts-type"}
`#{{ item.slot }}-leading``#{{ item.slot }}-leading``#{{ item.slot }}-leading`PH5755
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH5777@@@@@@@@@@@PH57777{lang="ts-type"}
`#{{ item.slot }}-trailing``#{{ item.slot }}-trailing`PH5800`#{{ item.slot }}-trailing`{lang="ts-type"}
`#{{ item.slot }}-content`{lang="ts-type"}

::component-example
---
Einsturz: wahr
name: 'navigation-menu-custom-slot-example'(navigation-menu-custom-slot-example)(navigation-menu-custom-slot-beispiel)
---
::

::tip{to="#slots"}
Sie können auch die Slots `#item`,`#item-leading`,`#item-label`,`#item-trailing` und `#item-content` verwenden, um alle Elemente anzupassen.
::

### Mit nachlaufendem Steckplatz

Verwenden Sie den `#item-trailing` slot oder die `slot` Eigenschaft (`#{{ item.slot }}-trailing`), um ein [DropdownMenu](/docs/components/dropdown-menu) hinzuzufügen, das auf dem Hover erscheint, ähnlich wie Notion oder Linear.

::component-example
---
Einsturz: wahr
name: 'navigation-menu-trailing-slot-example'(navigationsmenü-nachführung-slot-beispiel)
---
::

### Mit Inhalt Slot

Verwenden Sie den `#item-content`-Slot oder die `slot`-Eigenschaft (`#{{ item.slot }}-content`), um den Inhalt eines bestimmten Elements anzupassen.

::component-example
---
Einsturz: wahr
name: 'navigation-menu-content-slot-example'(navigation-menu-content-slot-example)(navigation-menu-content-slot-beispiel)
---
::

::note
In diesem Beispiel fügen wir die Klasse `sm:w-(--reka-navigation-menu-viewport-width)` auf die Klasse `viewport` ein, um eine dynamische Breite zu erhalten.
::

@@604@bmwbbbb

### Props

Komponenten-Props

### Spielautomaten

Die Komponenten-Slots

@@@ph607@@@emits

Komponenten emittieren

## Theme

Das Komponenten-Theme

@@ph609@@changelog (auf Englisch)

Das Component-Changelog

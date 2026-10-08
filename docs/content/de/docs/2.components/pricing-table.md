---
title: Preistabelle
description: 'Eine responsive Preistabellenkomponente, die abgestufte Preispläne mit Feature-Vergleichen anzeigt.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingTable.vue
---

@@@ph000@@Verwendung

Die PricingTable-Komponente bietet eine reaktionsschnelle und anpassbare Möglichkeit, Preispläne in einem Tabellenformat anzuzeigen und automatisch zwischen einem horizontalen Tabellenlayout auf dem Desktop für einen einfachen Vergleich und einem vertikalen Kartenlayout auf dem Handy für eine bessere Lesbarkeit zu wechseln.

::code-preview

::u-pricing-table
---
Dritter:
  @@ph001@@id:'allein'
    Titel: Allein
    Beschreibung: "Für Indie-Hacker."
    Preis: $249
    AbrechnungZyklus: '/Monat'
    Rechnungszeitraum: 'jährlich abgerechnet'
    Badge: "Beliebteste"
    Der Button:
      Label: "Jetzt kaufen"
      Variante: "Unterwürfig"
  - id:'Team'
    Titel: „ Team "
    Beschreibung: "Für wachsende Teams."
    Preis: $499
    AbrechnungZyklus: '/Monat'
    Rechnungszeitraum: 'jährlich abgerechnet'
    Der Button:
      Label: "Jetzt kaufen"
    Highlight: Wahr
  - id:'Unternehmen'
    Titel: Enterprise
    Beschreibung: "Für große Organisationen."
    Preis: "Custom"
    Der Button:
      Label: 'Kontaktverkauf'
      Farbe: „ neutral "
Sektionen:
  - title:'Eigenschaften'
    Features:
      - title:'Anzahl der Entwickler'
        Dritter:
          Allein: 1
          Mannschaft: "5"
          Unternehmen: "Unlimited"
      - title:'Projekte'
        Dritter:
          Allein: wahr
          Mannschaft: True
          Unternehmen: true
      - title:'GitHub Repository Access'(Zugriff auf GitHub Repository)
        Dritter:
          Solo: wahr
          Mannschaft: Wahr
          Unternehmen: true
      - title:'Aktualisiert'
        Dritter:
          für Patch & Minor
          Team: "Alle Updates"
          Enterprise: 'Alle Updates'
      - title:'Unterstützung'
        Dritter:
          Solo: "Gemeinschaft"
          Kategorie: "Priorität"
          Unternehmen: 24/7
  - title:'Sicherheit'
    Features:
      - title:'SSO'(auf Englisch)
        Dritter:
          Einfach: False
          Mannschaft: Wahr
          Unternehmen: true
      - title:'Prüfprotokolle'
        Dritter:
          Einfach: false
          Mannschaft: Wahr
          Unternehmen: true
      - title:'Benutzerdefinierte Sicherheitsüberprüfung'
        Dritter:
          Einfach: false
          Mannschaft: False
          Unternehmen: true
---
::

::

@@@@@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@@14@@@1414@@@@@1414@@@@@@@141414@@@@@@@@@@@@@@@@140000000000014@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@140000000000

Verwenden Sie `tiers` prop als Array von Objekten, um Ihre Preispläne zu definieren. Jedes Tierobjekt unterstützt die folgenden Eigenschaften:

- `id: string`{lang="ts-type"}-Eindeutige Kennung für die Ebene (erforderlich)
- `title?: string`{lang="ts-type"}-Name des Preisplans
- `description?: string`{lang="ts-type"}-Kurze Beschreibung des Plans
- `price?: string`{lang="ts-type"}-Der aktuelle Preis des Plans (z. B."99 $","99 €","Free")
- `discount?: string`{lang="ts-type"}-Der ermäßigte Preis, der die `price` mit durchgestrichen (zB "$79","€ 79") angezeigt wird
- `billingCycle?: string`{lang="ts-type"}-Der Einheitspreiszeitraum, der neben dem Preis erscheint (z. B."/Monat","/Sitz/Monat")
- `billingPeriod?: string`{lang="ts-type"}-Zusätzlicher Abrechnungskontext, der über dem Abrechnungszyklus erscheint (z. B."monatlich abgerechnet")
- `badge?: string | BadgeProps`{lang="ts-type"}-Zeigen Sie ein Abzeichen neben dem Titel `{ color: 'primary', variant: 'subtle' }`{lang="ts-type"}
- `button?: ButtonProps`{lang="ts-type"}-Konfigurieren Sie die CTA-Taste `{ size: 'lg', block: true }`{lang="ts-type"}
- `highlight?: boolean`{lang="ts-type"}-Ob diese Stufe als empfohlene Option visuell hervorgehoben werden soll

::component-code
---
Schöner: wahr
Einsturz: wahr
Außen:
  @@@@@@51@51@51@51@51@51@51@51@@51@@51@51@51@@51@@51@51@@51@@51@@51@@51@@51@@@51@@51@@51@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externe Personen:
  - PricingTableTier []
Hide:
  @@53@Klasse
Ignoriert:
  @@@@@54@54
Props:
  Dritter:
    @@ph055@@id:'allein'
      Titel: Allein
      Beschreibung: "Für Indie-Hacker."
      Preis: $249
      AbrechnungZyklus: '/Monat'
      Rechnungszeitraum: 'jährlich abgerechnet'
      Badge: "Beliebteste"
      Der Button:
        Label: "Jetzt kaufen"
        Variante: „ subtil "
    - id:'Team'
      Titel: „ Team "
      Beschreibung: "Für wachsende Teams."
      Preis: $499
      AbrechnungZyklus: '/Monat'
      Rechnungszeitraum: 'jährlich abgerechnet'
      Der Button:
        Label: "Jetzt kaufen"
      Highlight: Wahr
    - id:'Unternehmen'
      Titel: Enterprise
      Beschreibung: "Für große Organisationen."
      Preis: "Custom"
      Der Button:
        Label: 'Kontaktverkauf'
        Farbe: „ neutral "
  Klasse: 'border-b border-default'(border-b-border-default)-Klasse: 'border-b border-default'(border-b-Standardeinstellung)
---
::

@@@@@@58@58@58@58@@58@58@58@@58@@58@@58@@58@@58@@58@58@@58@@58@@58@@58@@58@@58@@58@58@58@58@58@58@58@58@58@58@58@58@58@58@58@@58@5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555

Verwenden Sie `sections` prop, um Funktionen in logischen Gruppen zu organisieren. Jeder Abschnitt stellt eine Kategorie von Funktionen dar, die Sie über verschiedene Preisstufen hinweg vergleichen möchten.

- `title: string`{lang="ts-type"}-Die Überschrift für den Feature-Abschnitt
- `features: PricingTableSectionFeature[]`{lang="ts-type"}-Eine Reihe von Funktionen mit ihrer Verfügbarkeit in jeder Ebene:
  - Jede Funktion erfordert eine `title` und eine `tiers` Objektzuordnungs-Tier-IDs auf Werte
  - Boolean-Werte (`true`/`false`) werden als Häkchen (✓) oder Minuszeichen (-) angezeigt.
  - String-Werte werden als Text angezeigt (z. B."Unbegrenzt","Bis zu 5 Benutzer")
  - Numerische Werte werden so angezeigt, wie sie sind (z.B. 10, 100)

::component-code
---
Schöner: wahr
Einsturz: wahr
Außen:
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#####################################################################################################################################################
  @@ph075@sektionen
Externe Personen:
  - PricingTableTier []
  - PricingTableSection [Bearbeiten | Quelltext bearbeiten]
Hide:
  @@@@@@@@@@@@@class
Ignoriert:
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#############################################################################################################################################################
  @@@@@80@100@1000
Props:
  Dritter:
    @@ph081@@id:'allein'
      Titel: Allein
      Preis: $249
      Beschreibung: "Für Indie-Hacker."
      AbrechnungZyklus: '/Monat'
      Der Button:
        Label: "Jetzt kaufen"
        Variante: "Unterwürfig"
    - id:'Team'
      Titel: „ Team "
      Preis: $499
      Beschreibung: "Für wachsende Teams."
      AbrechnungZyklus: '/Monat'
      Der Button:
        Label: "Jetzt kaufen"
    - id:'Unternehmen'
      Titel: Enterprise
      Preis: „ Custom "
      Beschreibung: "Für große Organisationen."
      Der Button:
        Label: 'Kontaktverkauf'
        Farbe: „ neutral "
  Sektionen:
    - title:'Eigenschaften'
      Features:
        - title:'Anzahl der Entwickler'
          Dritter:
            Allein: 1
            Mannschaft: "5"
            Unternehmen: "Unlimited"
        - title:'Projekte'
          Dritter:
            Solo: wahr
            Mannschaft: True
            Unternehmen: true
    - title:'Sicherheit'
      Features:
        - title:'SSO'(auf Englisch)
          Dritter:
            Einfach: false
            Mannschaft: True
            Unternehmen: true
---
::

@@ph089@@Beispiele

### Mit Steckplätzen

Die PricingTable-Komponente bietet leistungsstarke Slot-Anpassungsoptionen, um die Anzeige Ihrer Inhalte anzupassen. Sie können einzelne Elemente mit generischen Slots anpassen oder bestimmte Elemente mit ihren IDs ansprechen.

::component-example
---
Schöner: wahr
Name: 'Preis-Tabelle-Slots-Beispiel'
Einsturz: wahr
---
::

Die Komponente unterstützt verschiedene Slot-Typen für maximale Anpassungsflexibilität:

| Der Slot Typ| pattern| Description| beispiel|
|-----------|---------|-------------|---------|
| @@ph094@@@ph095@@@ph095 @|@@@@@@@@91 @| Spezifische Ziele für Dritte| `#solo-price`|
| @@ph098@@@ph099@@@ph099@@@@ph0999@@@@@@ph0999@@@@@@ph099| @@@@@@96| Spezifische Target-Abschnitte| @@@@@@@@@@@@@097|
| @@ph102@@feature-slots@@ph103 @|@1000| Spezifische Targets| @@@@101 @|
| **Generische Slots **| `#tier-title`,`#section-title`, usw.| Gilt für alle Items| @106|

::note
Wenn kein `id` angegeben ist, wird der Slot-Name automatisch aus dem Titel generiert (z. B. wird aus "Premium-Features!"`#section-premium-features-title`).
::

@1111@bpb

@@@@@@@@ph112@props

Komponenten-Props

### Slots

Die Komponenten-Slots

@@114@Einsteigertipps

Das Komponenten-Theme

@@ph115@@changelog (auf Englisch)

Das Component-Changelog

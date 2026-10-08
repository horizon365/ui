---
title: Preisplan
description: 'Ein anpassbarer Preisplan, der auf einer Preisseite angezeigt wird.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlan.vue
---

@@@ph000@@Verwendung

Die PricingPlan-Komponente bietet eine flexible Möglichkeit, einen Preisplan mit anpassbaren Inhalten wie Titel, Beschreibung, Preis, Funktionen usw. anzuzeigen.

::code-preview

::u-pricing-plan
---
Titel: „ Solo "
Für Bootstrapper und Indie-Hacker.
Preis: 249 €
Rabatt: $199
Rechnungszyklus: '/Monat'
Badge: "Beliebteste"
Features:
  - 'Ein Entwickler'
  - 'Unbegrenzte Projekte'
  - 'Zugriff auf GitHub-Repository '
  - 'Unbegrenzter Patch & kleinere Updates'
  - 'Lebenslanger Zugang'
Der Button:
  Labels: "Jetzt kaufen"
Klasse: W-96
---
::

::

::tip{to="/docs/components/pricing-plans"}
Verwenden Sie die Komponente `PricingPlans`, um mehrere Preispläne in einem responsiven Rasterlayout anzuzeigen.
::

@@007@Titel

Verwenden Sie `title` prop, um den Titel des PricingPlans festzulegen.

::component-code
---
Ignoriert:
  @@009@Klasse
Props:
  Titel: „ Solo "
  Klasse: W-96
---
::

@@ph010 @ Beschreibung

Verwenden Sie `description` prop, um die Beschreibung des PricingPlans festzulegen.

::component-code
---
Hide:
  @@12@Klasse
Ignoriert:
  @@ph013@title
Props:
  Titel: „ Solo "
  Für Bootstrapper und Indie-Hacker.
  Klasse: W-96
---
::

@@@@@@@@@@badge.de

Verwenden Sie die `badge` prop, um ein [Badge](/docs/components/badge) neben dem Titel des PricingPlans anzuzeigen.

::component-code
---
Schöner: wahr
Hide:
  @@ph020@@class
Ignoriert:
  @@ph021@title
  @@ph022@beschreibung
Props:
  Titel: „ Solo "
  Für Bootstrapper und Indie-Hacker."
  Badge: "Beliebteste"
  Klasse: W-96
---
::

Sie können jede Eigenschaft aus der Komponente [Badge](/docs/components/badge#props) übergeben, um sie anzupassen.

::component-code
---
Schöner: wahr
Hide:
  @@ph027@gmail.de
Ignoriert:
  @@ph028@title
  @@ph029@beschreibung
  @@ph030@badge.label
  @@ph031@@badge.color
  @@ph032@badge.variant
Props:
  Titel: Allein
  Für Bootstrapper und Indie-Hacker.
  Badge:
    Labels: "Beliebteste"
    Farbe: "neutral"
    Variante: "solide"
  Klasse: W-96
---
::

@@ph033@@Preis

Verwenden Sie `price` prop, um den Preis des PricingPlans festzulegen.

::component-code
---
Schöner: wahr
Hide:
  @@35@Klasse
Ignoriert:
  @@ph036@title
  @@ph037@beschreibung
Props:
  Titel: Allein
  Für Bootstrapper und Indie-Hacker."
  Preis: 249 €
  Klasse: W-96
---
::

@@ph038@discount@@discount@@discount@@discount@@discount@@discount@@discount@discount@@discount@discount@@discount@@discount@discount@@discount@discount@@discount@discount@discount@discount@discount@@discount@discount@@discount@@discount@@discount@@discount@@@discount@@discount@discount@discount@discount@discount@discount@discount@discount@@discount@@discount@discount@@discount@discount@@discount@@discount@discount@@discount@@discount@@@discount@@discount@@@discount@discount@@discount@@discount@@discount

Verwenden Sie `discount` prop, um einen ermäßigten Preis festzulegen, der neben dem ursprünglichen Preis angezeigt wird (der mit einem Durchstreichen angezeigt wird).

::component-code
---
Schöner: wahr
Hide:
  @@ph040@class
Ignoriert:
  @@ph041@title
  @@ph042@beschreibung
Props:
  Titel: Allein
  Für Bootstrapper und Indie-Hacker."
  Preis: 249 €
  Rabatt: $199
  Klasse: W-96
---
::

@@ph043@abrechnung

Verwenden Sie `billing-cycle` und/oder `billing-period` props, um die Rechnungsinformationen des PricingPlans anzuzeigen.

::component-code
---
Schöner: wahr
Hide:
  @@@@@@46@46@46@46@46@46@46@46@@46@@46@46@@46@46@@46@@46@@46@@46@@46@@@@class@class@classclassclassclassclassclassclassclassclassclassclassclassclass@classclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassc@classclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassc@classclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassc@classclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassc@classclass
Ignoriert:
  @@ph047@title
  @@ph048@beschreibung
Props:
  Titel: „ Solo "
  Für Bootstrapper und Indie-Hacker.
  Preis: "9 €"
  AbrechnungZyklus: '/Monat'
  Rechnungszeitraum: 'jährlich abgerechnet'
  Klasse: W-96
---
::

@@ph049@@Eigenschaften

Verwenden Sie `features` prop als Zeichenfolge, um eine Liste von Funktionen im Preisplan anzuzeigen:

::component-code
---
Schöner: wahr
Hide:
  @@@@@@51@000@051@051@051@051@000@0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Ignoriert:
  @@ph052@title
  @@@ph053@beschreibung
  @@ph054@Preis
  @@ph055@gmail.de
Props:
  Titel: Allein
  Für Bootstrapper und Indie-Hacker."
  Preis: 249 €
  Features:
    - 'Ein Entwickler'
    - 'Unbegrenzte Projekte'
    - 'Zugriff auf GitHub-Repository'
    - 'Unbegrenzter Patch und kleinere Updates'
    - 'Lebenslanger Zugang'
  Klasse: W-96
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.success` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.success` key anpassen.
:::
::

Sie können auch ein Array von Objekten mit den folgenden Eigenschaften übergeben:

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH0666@@@@@@@@@@@@@PH0667 @@
`icon?: string``icon?: string`{lang="ts-type"}

::component-code
---
Schöner: wahr
Hide:
  @@@@@@@@@@class
Außen:
  @@@ph072@@features
Externe Personen:
  - PricingPlanFeature [Bearbeiten | Quelltext bearbeiten]
Ignoriert:
  @@ph074@title
  @@ph075@beschreibung
  @@ph076@@Preis
  @@ph077@@gmail.de
Props:
  Titel: Allein
  Für Bootstrapper und Indie-Hacker."
  Preis: 249 €
  Features:
    - title:'Ein Entwickler'
      I-Lucide-Benutzer
    - title:'Unbegrenzte Projekte'
      Bildnachweis: i-Lucide-Infinity
    - title:'Zugriff auf GitHub-Repository'
      Icon: I-Lucide-GitHub (englisch)
    - title:'Unbegrenzter Patch & kleinere Updates'
      I-Lucide-Refresh-CW (englisch)
    - title:'Lebenslanger Zugang'
      I-Lucide-Uhr
  Klasse: W-96
---
::

@@@@@button83

Verwenden Sie die `button` prop mit einer beliebigen Eigenschaft aus der Komponente [Button](), um eine Schaltfläche am unteren Rand des Preisplans anzuzeigen.

::component-code
---
Schöner: wahr
Hide:
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@classclassclass@class@classclass@classclassclass@classclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclass
Ignoriert:
  @@90@Titel
  @@ph091@beschreibung
  @@ph092@@Preis
  @@ph093@gmail.de
Props:
  Titel: Allein
  Für Bootstrapper und Indie-Hacker."
  Preis: 249 €
  Features:
    - 'Ein Entwickler'
    - 'Unbegrenzte Projekte'
    - 'Zugriff auf GitHub-Repository '
    - 'Unbegrenzter Patch und kleinere Updates'
    - 'Lebenslanger Zugang'
  Der Button:
    Label: "Jetzt kaufen"
  Klasse: W-96
---
::

::tip
Verwenden Sie das Feld `onClick`, um einen Klick-Handler hinzuzufügen, um den Kauf des Plans auszulösen.
::

@@100@Variantentabelle

Verwenden Sie `variant` prop, um die Variante des PricingPlans zu ändern.

::component-code
---
Schöner: wahr
Hide:
  @@102@Klasse
Ignoriert:
  @@103@Titel
  @@ph104@beschreibung
  @@ph105@Preis
  - Eigenschaften
  @@@ph107@button.label (auf Englisch)
Props:
  Titel: Allein
  Für Bootstrapper und Indie-Hacker.
  Preis: 249 €
  Features:
    - 'Ein Entwickler'
    - 'Unbegrenzte Projekte'
    - 'Zugriff auf GitHub-Repository'
    - 'Unbegrenzter Patch & kleinere Updates'
    - 'Lebenslanger Zugang'
  Der Button:
    Label: "Jetzt kaufen"
  Variante: „ subtil "
  Klasse: W-96
---
::

### Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung des PricingPlan. Defaults auf `vertical` zu ändern.

::component-code
---
Schöner: wahr
Hide:
  @@116@Klasse
Ignoriert:
  @@117@title
  @@118@description
  @@119@Preis
  @@ph120@gmail.de
  - button.label
Props:
  Titel: Allein
  Für Bootstrapper und Indie-Hacker."
  Preis: 249 €
  Features:
    - 'Ein Entwickler'
    - 'Unbegrenzte Projekte'
    - 'Zugriff auf GitHub-Repository'
    - 'Lebenslanger Zugang'
  Der Button:
    Label: "Jetzt kaufen"
  Ausrichtung: horizontal
  Variante: "Übersicht"
  Klasse: "W-voll"
---
::

@@@@@@@126@@@tagline

Verwenden Sie die `tagline` prop, um einen Tagline-Text über dem Preis anzuzeigen.

::component-code
---
Schöner: wahr
Hide:
  @@128@gmail.de
Ignoriert:
  @@129@title
  @@@ph130@beschreibung
  @@131@Preis
  @@ph132@gmail.de
  @@@ph133@button.label
  @@ph134@Orientierung
Props:
  Titel: Allein
  Für Bootstrapper und Indie-Hacker.
  Preis: 249 €
  Features:
    - 'Ein Entwickler'
    - 'Unbegrenzte Projekte'
    - 'Zugriff auf GitHub-Repository'
    - 'Lebenslanger Zugang'
  Der Button:
    Label: "Jetzt kaufen"
  Ausrichtung: horizontal
  Motto: „ Einmal zahlen, für immer behalten "
  Klasse: "W-voll"
---
::

@@@@@@139@139@139@139@139@139@139@139@@139@139@139@139@139@139@139@139@139@139@139@139@139@139@139@13@139@139@1399@@1399@@13399@@@@@@@@@@@@@@139999999999@@@@@@@@@@@@@@@@@@@@@@@0000000000

Verwenden Sie `terms` prop, um die Bedingungen unter dem Preis anzuzeigen.

::component-code
---
Schöner: wahr
Hide:
  @@141@141@141@141@141@141@141@141@141@141@141@141@141@141@@141@@141@14@14@14@@141@@141@141@141@141@@1414@@141@141@@@14141@@141@@@@14141@@@@@@1414141@@@@@@@@@@@1414141@@@@@@@@@@@@@@@@@@@@@@@@1414141414141@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Ignoriert:
  @@142 @ Überschrift
  - Beschreibung
  @@144@Preis
  @@ph145@gmail.de
  @@@ph146@button.label @ button.label @@button.label @ button.label
  - Orientierung
  @@148@gmail.de
Props:
  Titel: Allein
  Für Bootstrapper und Indie-Hacker."
  Preis: 249 €
  Features:
    - 'Ein Entwickler'
    - 'Unbegrenzte Projekte'
    - 'Zugriff auf GitHub-Repository '
    - 'Lebenslanger Zugang'
  Der Button:
    Label: "Jetzt kaufen"
  Ausrichtung: horizontal
  Motto: „ Einmal zahlen, für immer behalten "
  "Rechnungen und Quittungen verfügbar".
  Klasse: "W-voll"
---
::

### Highlight

Verwenden Sie `highlight` prop, um einen hervorgehobenen Rahmen um den PricingPlan anzuzeigen.

::component-code
---
Schöner: wahr
Hide:
  @155@Klasse
Ignoriert:
  @@156 @ Überschrift
  - Beschreibung
  @@158@Preis
  @@ph159@gmail.de
  @@@ph160@button.label (auf Englisch)
Props:
  Titel: Allein
  Für Bootstrapper und Indie-Hacker.
  Preis: 249 €
  Features:
    - 'Ein Entwickler'
    - 'Unbegrenzte Projekte'
    - 'Zugriff auf GitHub-Repository'
    - 'Unbegrenzter Patch & kleinere Updates '
    - 'Lebenslanger Zugang'
  Der Button:
    Label: "Jetzt kaufen"
  Highlight: Wahr
  Klasse: W-96
---
::

@@@@@@166@166@166@166@166@166@166@166@166@166@166@166@166@16@16@166@16@16@16@16@16@16@16@16@@166@@16@@166@16@16@16@@@1616@@@1616@@@@@161616

Verwenden Sie `scale` prop, um einen PricingPlan größer als die anderen zu machen.

::note{to="/docs/components/pricing-plans#scale"}
Schauen Sie sich das Beispiel von PricingPlans `scale` an, um zu sehen, wie es funktioniert, da es selbst schwer zu demonstrieren ist.
::

@@@@@@169@@bmwbp.de

@@@@@@@@170@@props

Komponenten-Props

### Slots

Die Komponenten-Slots

## theme

Das Komponenten-Theme

@@ph173@@changelog @ changelog

Das Component-Changelog

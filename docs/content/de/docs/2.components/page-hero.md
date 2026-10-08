---
title: PageHero ist
description: 'Ein responsive Held für Ihre Seiten.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHero.vue
---

@@@ph000@Verwendung

Die PageHero-Komponente umhüllt Ihre Inhalte in einem [Container](/docs/components/container), während sie die Flexibilität der vollen Breite beibehält, wodurch es einfach ist, Hintergrundfarben, Bilder oder Muster hinzuzufügen.

::code-preview

:::u-page-hero
---
Weitere Informationen: Ultimate Vue UI Library
Beschreibung: Eine Nuxt/Vue-integrierte UI-Bibliothek, die eine Vielzahl von vollständig gestalteten, zugänglichen und hochgradig anpassbaren Komponenten für die Erstellung moderner Webanwendungen bietet.
---

::::u-page-card{variant="subtle" class="rounded-lg"}

![App-Screenshot ](/blocks/image4.png){width="960" height="540" class="rounded-sm shadow-2xl ring ring-default"}

::::

:::

::

@@ph010@title

Verwenden Sie die `title` prop, um den Titel des Helden festzulegen.

::component-code
---
Props:
  Weitere Informationen: Ultimate Vue UI Library
---
::

@@ph012 @ Beschreibung

Verwenden Sie die `description` prop, um die Beschreibung des Helden festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph014@title
Props:
  Weitere Empfehlungen zu „ Ultimate Vue UI Library "
  Beschreibung: : Eine Nuxt/Vue-integrierte UI-Bibliothek, die eine Vielzahl von vollständig gestalteten, zugänglichen und hochgradig anpassbaren Komponenten für die Erstellung moderner Webanwendungen bietet.
---
::

@@@@@@15@15@15.10.2015 @ Überschrift

Verwenden Sie die `headline` prop, um die Überschrift des Helden festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph017@title
  @@ph018@beschreibung
Props:
  Weitere Empfehlungen zu „ Ultimate Vue UI Library "
  Beschreibung: : Eine Nuxt/Vue-integrierte UI-Bibliothek, die eine Vielzahl von vollständig gestalteten, zugänglichen und hochgradig anpassbaren Komponenten für die Erstellung moderner Webanwendungen bietet.
  Schlagzeile: „ Neues Release "
---
::

@@@@19@19@19.19.2019 @ Links

Verwenden Sie `links` prop, um eine Liste von [Button](/docs/components/button) unter der Beschreibung anzuzeigen.

::component-code
---
Schöner: wahr
Außen:
  @@@@@25@@links
Externe Personen:
  @@ph026@@buttonprops [Bearbeiten | Quelltext bearbeiten]
Ignoriert:
  @@ph027@title
  @@ph028@beschreibung
  @@@@@@@@@29@@links
Props:
  Weitere Empfehlungen zu „ Ultimate Vue UI Library "
  Beschreibung: Eine Nuxt/Vue-integrierte UI-Bibliothek, die eine Vielzahl von vollständig gestalteten, zugänglichen und hochgradig anpassbaren Komponenten für die Erstellung moderner Webanwendungen bietet.
  Links auf:
    - label:'Mach den Anfang'
      nach/docs/getting-started/
      I-Lucide-Square-Play (Deutsche Ausgabe)
    - label:'Mehr erfahren'
      zu: '/docs/getting-started/theme/design-system'
      Farbe: "neutral"
      Variante: „ subtil "
      trailingIcon: 'i-lucide-arrow-right'(englisch)
---
::

@@ph032@Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung mit dem Standardslot zu ändern.

::component-code
---
Schöner: wahr
Außen:
  @@@@@35@@links
Externe Typen:
  @@ph036@buttonprops [Bearbeiten | Quelltext bearbeiten]
Ignoriert:
  @@ph037@title
  @@ph038@beschreibung
  @@@@@headline
  @@@@@40@@links
Props:
  Weitere Empfehlungen zu „ Ultimate Vue UI Library "
  Beschreibung: : Eine Nuxt/Vue-integrierte UI-Bibliothek, die eine Vielzahl von vollständig gestalteten, zugänglichen und hochgradig anpassbaren Komponenten für die Erstellung moderner Webanwendungen bietet.
  Schlagzeile: „ Neues Release "
  Ausrichtung: horizontal
  Links auf:
    - label:'Fangen Sie an'
      nach/docs/getting-started
      I-Lucide-Square-Play (Deutsche Ausgabe)
    - label:'Mehr erfahren'
      zu: '/docs/getting-started/theme/design-system'
      Farbe: „ neutral "
      Variante: „ subtil "
      trailingIcon: 'i-lucide-arrow-right'(englisch)
Slots auf:
  Default:|

    @@043 @
---

![App-Screenshot ](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-default"}
::

@@ph049@umgekehrt@ph049

Verwenden Sie die `reverse` prop, um die Ausrichtung des Standardsteckplatzes umzukehren.

::component-code
---
Schöner: wahr
Außen:
  @@@@@@@@51@@links
Externe Personen:
  @@ph052@@buttonprops [Bearbeiten | Quelltext bearbeiten]
Ignoriert:
  @@ph053@title
  @@@ph054@beschreibung
  @@@@555@headline
  @@@@@@@56@@links
Props:
  Weitere Empfehlungen zu „ Ultimate Vue UI Library "
  Beschreibung: : Eine Nuxt/Vue-integrierte UI-Bibliothek, die eine Vielzahl von vollständig gestalteten, zugänglichen und hochgradig anpassbaren Komponenten für die Erstellung moderner Webanwendungen bietet.
  Schlagzeile: „ Neues Release "
  Ausrichtung: horizontal
  umgekehrt: wahr
  Linke:
    - label:'Fangen Sie an'
      nach/docs/getting-started
      I-Lucide-Square-Play (Deutsche Ausgabe)
    - label:'Mehr erfahren'
      zu: '/docs/getting-started/theme/design-system'
      Farbe: "neutral"
      Variante: "Unterwürfig"
      trailingIcon: 'i-lucide-arrow-right'(englisch)
Slots auf:
  Default:|

    @@@@@59
---

![App-Screenshot ](/blocks/image4.png{class="rounded-lg shadow-2xl ring ring-default"}
::

## api

@@@@@@@@@ph066@@Props

Komponenten-Props

### Slots

Die Komponenten-Slots

## theme

Das Komponenten-Theme

@@ph069@@changelog @@changelog

Das Component-Changelog

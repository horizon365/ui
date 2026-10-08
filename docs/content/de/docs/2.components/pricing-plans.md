---
title: Preisplaner
description: 'Zeigen Sie eine Liste von Preisplänen in einem responsiven Rasterlayout an.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlans.vue
---

@@@ph000@@Verwendung

Die PricingPlans-Komponente bietet ein flexibles Layout, um eine Liste von [PricingPlan](/docs/components/pricing-plan) Komponenten entweder mit dem Standard-Slot oder dem `plans` prop.

```vue {2,8}
<template>
  <UPricingPlans>
    <UPricingPlan
      v-for="(plan, index) in plans"
      :key="index"
      v-bind="plan"
    />
  </UPricingPlans>
</template>
```

::tip
Die Rasterspalten werden automatisch basierend auf der Anzahl der Pläne berechnet, dies funktioniert mit dem `plans` prop aber auch mit dem Standardslot.
::

@@ph018@@@Pläne

Verwenden Sie `plans` prop als Array von Objekten mit den Eigenschaften der Komponente [PricingPlan](/docs/components/pricing-plan#props).

::component-code
---
Einsturz: wahr
Ignoriert:
  @@ph024@Pläne
Außen:
  @@ph025@Pläne
Externe Typen:
  - PricingPlanProps [Bearbeiten | Quelltext bearbeiten]
Props:
  Pläne:
    @@ph027@title: Einfach
      Beschreibung: 'Maßgeschneidert für Indie-Hacker.'
      Preis: 249 €
      Features:
        - 'Ein Entwickler'
        - 'Lebenslanger Zugang'
      Der Button:
        Label: "Jetzt kaufen"
    - title: Startseite
      Beschreibung: "Am besten für kleine Teams geeignet."
      Preis: $499
      Features:
        - 'Bis zu 5 Entwickler'
        - 'Alles im Alleingang'
      Der Button:
        Label: "Jetzt kaufen"
    - title: Organisation
      Beschreibung: "Ideal für größere Teams und Organisationen."
      Preis: '999'
      Features:
        - 'Bis zu 20 Entwickler'
        - 'Alles im Startup'
      Der Button:
        Label: "Jetzt kaufen"
---
::

@@ph036@Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung der PricingPlans. Defaults auf `horizontal` zu ändern.

::component-code
---
Einsturz: wahr
Hide:
  @@@@@@399@@class
Ignoriert:
  @@ph040@Pläne
Außen:
  - Pläne
Externe Typen:
  - PricingPlanProps []
Props:
  Ausrichtung: Vertikal
  Plane:
    @@ph043@title: Einfach
      Beschreibung: 'Maßgeschneidert für Indie-Hacker.'
      Preis: 249 €
      Features:
        - 'Ein Entwickler'
        - 'Lebenslanger Zugang'
      Der Button:
        Label: "Jetzt kaufen"
    - title: Startseite
      Beschreibung: "Am besten für kleine Teams geeignet."
      Preis: $499
      Features:
        - 'Bis zu 5 Entwickler '
        - 'Alles im Alleingang'
      Der Button:
        Label: "Jetzt kaufen"
    - title: Organisation
      Beschreibung: "Ideal für größere Teams und Organisationen."
      Preis: '999'
      Features:
        - 'Bis zu 20 Entwickler'
        - 'Alles im Startup'
      Der Button:
        Label: "Jetzt kaufen"
  Klasse: "W-voll"
---
::

::tip
Bei Verwendung von `plans` prop anstelle des Standard-Steckplatzes wird das `orientation` der Pläne automatisch umgekehrt,`horizontal` zu `vertical` und umgekehrt.
::

### compact

Verwenden Sie `compact` prop, um das Auffüllen zwischen den Plänen zu reduzieren, wenn einer der Pläne skaliert wird, um eine bessere visuelle Balance zu erzielen.

::component-code
---
Einsturz: wahr
Ignoriert:
  @@@@@@58@gmail.de
  @@ph059@@gmail.de
Außen:
  - Pläne
Externe Personen:
  - PricingPlanProps []
Klasse: 'P-8'
Props:
  Kompakt: wahr
  Pläne:
    - title: Einfach
      Beschreibung: 'Maßgeschneidert für Indie-Hacker.'
      Preis: $249
      Features:
        - 'Ein Entwickler'
        - 'Lebenslanger Zugang'
      Der Button:
        Label: "Jetzt kaufen"
    - title: Startseite
      Beschreibung: "Am besten für kleine Teams geeignet."
      Preis: $499
      Maßstab: true
      Features:
        - 'Bis zu 5 Entwickler'
        - 'Alles im Alleingang'
      Der Button:
        Label: "Jetzt kaufen"
    - title: Organisation
      Beschreibung: "Ideal für größere Teams und Organisationen."
      Preis: '999'
      Features:
        - 'Bis zu 20 Entwickler '
        - 'Alles im Startup'
      Der Button:
        Label: "Jetzt kaufen"
---
::

@@@ph071@@gmail.de

Verwenden Sie `scale` prop, um den Abstand zwischen den Plänen anzupassen, wenn einer der Pläne skaliert wird, um eine bessere visuelle Balance zu erzielen.

::component-code
---
Einsturz: wahr
Ignoriert:
  - Pläne
  @@ph074@gmail.de
Außen:
  @@ph075@Pläne
Externe Personen:
  - PricingPlanProps []
Klasse: 'P-8'
Props:
  Maßstab: true
  Pläne:
    - title: Einfach
      Beschreibung: 'Maßgeschneidert für Indie-Hacker.'
      Preis: $249
      Features:
        - 'Ein Entwickler'
        - 'Lebenslanger Zugang'
      Der Button:
        Label: "Jetzt kaufen"
    - title: Startseite
      Beschreibung: "Am besten für kleine Teams geeignet."
      Preis: $499
      Maßstab: true
      Features:
        - 'Bis zu 5 Entwickler'
        - 'Alles im Alleingang '
      Der Button:
        Label: "Jetzt kaufen"
    - title: Organisation
      Beschreibung: "Ideal für größere Teams und Organisationen."
      Preis: '999'
      Features:
        - 'Bis zu 20 Entwickler '
        - 'Alles im Startup'
      Der Button:
        Label: "Jetzt kaufen"
---
::

@@ph086@@@Beispiele

::note
Während in diesen Beispielen [Nuxt Content](https://content.nuxt.com) verwendet wird, können die Komponenten in jedes Content-Management-System integriert werden.
::

### Innerhalb einer Seite

Verwenden Sie die Komponente PricingPlans auf einer Seite, um eine Preisseite zu erstellen:

```vue [pages/pricing/index.vue]{11}
<script setup lang="ts">
const { data: plans } = await useAsyncData('plans', () => queryCollection('plans').all())
</script>

<template>
  <UPage>
    <UPageHero title="Pricing" />

    <UPageBody>
      <UContainer>
        <UPricingPlans :plans="plans" />
      </UContainer>
    </UPageBody>
  </UPage>
</template>
```

::note
In diesem Beispiel werden die `plans` mit `queryCollection` aus dem Modul `@nuxt/content` abgerufen.
::

@@112@bmw.de

@@@@@@@@113@@props

Komponenten-Props

### Slots

Die Komponenten-Slots

@@115@Einsteigertipps

Das Komponenten-Theme

## Changelog (Deutsche Übersetzung)

Das Component-Changelog

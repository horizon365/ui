---
title: Proseaccordion Bearbeiten
description: 'Erstellen Sie erweiterbare Inhaltsabschnitte für eine bessere Informationsorganisation.'
category: components
navigation.title: Accordion
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Accordion.vue
---

## Bearbeiten

Verwenden Sie die Komponenten `accordion` und `accordion-item`, um ein [Accordion](/docs/components/accordion) in Ihrem Inhalt anzuzeigen.

::code-preview{class="[&>div]:*:my-0"}

:::accordion
---
defaultValue:
  - '1'
---

::accordion-item{label="Ist Nuxt UI kostenlos zu verwenden?" icon="i-lucide-circle-help"}
Ja! Nuxt UI ist völlig kostenlos und Open Source unter der MIT-Lizenz. Alle 125 + Komponenten sind für jedermann verfügbar.
::

::accordion-item{label="Kann ich Nuxt UI mit Vue ohne Nuxt verwenden?" icon="i-lucide-circle-help"}
ja! Während für Nuxt optimiert, funktioniert Nuxt UI perfekt mit Standalone-Vue-Projekten über unsere Vite plugin. You können die [installation guide](/docs/getting-started/installation/vue) folgen, um zu beginnen.
::

::accordion-item{label="Ist Nuxt UI produktionsbereit?" icon="i-lucide-circle-help"}
Nuxt UI wird in der Produktion von Tausenden von Anwendungen mit umfangreichen Tests, regelmäßigen Updates und aktiver Wartung verwendet.
::

:::

#code

```mdc
::accordion
---
defaultValue:
  - '1'
---

::accordion-item{label="Is Nuxt UI free to use?" icon="i-lucide-circle-help"}
Yes! Nuxt UI is completely free and open source under the MIT license. All 125+ components are available to everyone.
::

::accordion-item{label="Can I use Nuxt UI with Vue without Nuxt?" icon="i-lucide-circle-help"}
Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.
::

::accordion-item{label="Is Nuxt UI production-ready?" icon="i-lucide-circle-help"}
Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.
::

::
```

::

## API (englisch)

### Props (nicht)

:component-props{prose}

### Slots Bearbeiten

:component-slots{prose}

## Theme Bearbeiten

::component-theme{prose}
---
extra:
  - accordionItem
---
::

## Changelog Übersetzung

:component-changelog{prefix="prose"}

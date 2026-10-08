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

@@@ph000@Verwendung

Verwenden Sie die Komponenten `accordion` und `accordion-item`, um ein [Accordion](/docs/components/accordion) in Ihrem Inhalt anzuzeigen.

::code-preview{class="[&>div]:*:my-0"}

:::accordion
---
Defaultwert:
  @@@007 @ 1
---

::accordion-item{label="Ist Nuxt UI kostenlos zu verwenden?" icon="i-lucide-circle-help"}
Ja! Nuxt UI ist völlig kostenlos und Open Source unter der MIT-Lizenz. Alle 125 + Komponenten sind für jedermann verfügbar.
::

::accordion-item{label="Kann ich Nuxt UI mit Vue ohne Nuxt verwenden?" icon="i-lucide-circle-help"}
ja! Während für Nuxt optimiert, funktioniert Nuxt UI perfekt mit Standalone-Vue-Projekten über unsere Vite plugin. You können die [installation guide](/docs/getting-started/installation/vue) folgen, um loszulegen.
::

::accordion-item{label="Ist Nuxt UI produktionsreif?" icon="i-lucide-circle-help"}
Nuxt UI wird in der Produktion von Tausenden von Anwendungen mit umfangreichen Tests, regelmäßigen Updates und aktiver Wartung eingesetzt.
::

:::

#Der Code

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

@@@@@@b36@b36

@@@@@@@@@@ph037@@props

{prose}

@@ph039@gmail.de

: component-slots {prose}

@@ph041@@gmail.de

::component-theme{prose}
---
Zusätzliches:
  @@ph042@accordionArtikel
---
::

@@ph043@@changelog @ changelog

: component-changelog {prefix="prose"}

---
title: ProseAccordeon
description: 'Maak uitbreidbare inhoudssecties voor een betere informatieorganisatie.'
category: components
navigation.title: Accordion
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Accordion.vue
---

## Gebruik

Gebruik de `accordion` en `accordion-item` componenten om een [Accordion](/docs/components/accordion) in uw inhoud weer te geven.

::code-preview{class="[&>div]:*:my-0"}

:::accordion
---
defaultValue:
  - '1'
---

::accordion-item{label="Is Nuxt UI gratis te gebruiken?" icon="i-lucide-circle-help"}
Ja! Nuxt UI is volledig gratis en open source onder de MIT-licentie. Alle 125 + componenten zijn voor iedereen beschikbaar.
::

::accordion-item{label="Kan ik Nuxt UI gebruiken met Vue zonder Nuxt?" icon="i-lucide-circle-help"}
Ja! Hoewel geoptimaliseerd voor Nuxt, werkt Nuxt UI perfect met stand-alone Vue-projecten via onze Vite-plug-in. U kunt de [install volgen guide](/docs/getting-started/installation/vue) om aan de slag te gaan.
::

::accordion-item{label="Is Nuxt UI klaar voor productie?" icon="i-lucide-circle-help"}
Ja! Nuxt UI wordt in productie gebruikt door duizenden applicaties met uitgebreide tests, regelmatige updates en actief onderhoud.
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

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Thema

::component-theme{prose}
---
extra:
  - accordionItem
---
::

## Wijzigingsgelog

:component-changelog{prefix="prose"}

---
description: Een gestapelde set opvouwbare panelen.
category: data
keywords:
  - disclosure
  - collapse
  - faq
  - expansion panel
links:
  - label: Accordeon
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/accordion
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Accordion.vue
---

## Gebruik

Gebruik de Accordion-component om een lijst met opvouwbare items weer te geven.

::component-code
---
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
  - ui
  - defaultValue
props:
  defaultValue: '0'
  class: 'px-4 max-w-lg'
  ui:
    content: 'text-muted'
  items:
    - label: 'Is Nuxt UI free to use?'
      content: 'Yes! Nuxt UI is completely free and open source under the MIT license. All 125+ components are available to everyone.'
    - label: 'Can I use Nuxt UI with Vue without Nuxt?'
      content: 'Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.'
    - label: 'Is Nuxt UI production-ready?'
      content: 'Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.'
---
::

### Items

Gebruik de `items` prop als een array van objecten met de volgende eigenschappen:

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `trailingIcon?: string`{lang="ts-type"}
- `content?: string`{lang="ts-type"}
- `value?: string`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, header?: ClassNameValue, trigger?: ClassNameValue, leadingIcon?: ClassNameValue, label?: ClassNameValue, trailingIcon?: ClassNameValue, content?: ClassNameValue, body?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### Meerdere

Stel de `type` prop in op `multiple` om meerdere items tegelijkertijd actief te laten zijn. Standaard op `single`.

::component-code
---
ignore:
  - type
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  type: 'multiple'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### Inklapbaar

Als `type` `single` is, kunt u de `collapsible` prop instellen op `false` om te voorkomen dat het actieve item instort.

::component-code
---
ignore:
  - collapsible
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  collapsible: false
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### Ontkoppelen

Gebruik de `unmount-on-hide` prop om te voorkomen dat de inhoud wordt ontkoppeld wanneer de accordeon is samengevouwen. Standaard is `true`.

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  unmountOnHide: false
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

::note
U kunt de DOM inspecteren om te zien dat de inhoud van elk item wordt weergegeven.
::

### Uitgeschakeld

Gebruik de eigenschap `disabled` om de accordeon uit te schakelen.

U kunt een specifiek item ook uitschakelen met de eigenschap `disabled` in het itemobject.

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  disabled: true
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
      disabled: true
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### Achterliggende pictogram

Gebruik de `trailing-icon` prop om de [Icon](/docs/components/icon) van elk item aan te passen. Standaard `i-lucide-chevron-down`.

::tip
U kunt ook een pictogram voor een specifiek item instellen met de eigenschap `trailingIcon` in het itemobject.
::

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  trailingIcon: 'i-lucide-arrow-down'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
      trailingIcon: 'i-lucide-plus'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.chevronDown`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.chevronDown`-sleutel.
:::
::

## Voorbeelden

### Controle actief (e) item (s)

U kunt het actieve item besturen met behulp van de `default-value` prop of de `v-model` richtlijn met de `value` van het item.
Als er geen `value` is opgegeven, wordt standaard de index **as a string** gebruikt.

::component-example
---
name: 'accordion-model-value-example'
props:
  class: 'px-4'
---
::

::tip
Gebruik de `value-key` prop om de sleutel te wijzigen die wordt gebruikt om items te matchen wanneer een `v-model` of `default-value` wordt geleverd.
::

::caution
Zorg er bij `type="multiple"` voor dat u een array doorgeeft aan de `default-value` prop of de `v-model` richtlijn.
::

### Met slepen en neerzetten

Gebruik de [`useSortable`](https://vueuse.org/integrations/useSortable/) van [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) om slepen en neerzetten op de Accordion mogelijk te maken. Deze integratie omvat [Sortable.js](https://sortablejs.github.io/Sortable/) voor een naadloze slepen en neerzetten-ervaring.

::component-example
---
name: 'accordion-drag-and-drop-example'
---
::

### Met body slot

Gebruik de `#body`-sleuf om de behuizing van elk item aan te passen.

::component-example
---
name: 'accordion-body-slot-example'
props:
  class: 'px-4'
---
::

::tip
De `#body`-sleuf bevat enkele vooraf gedefinieerde stijlen, gebruik de [`#content` slot](#with-content-slot) als je helemaal opnieuw wilt beginnen.
::

### Met inhoud slot

Gebruik de `#content`-sleuf om de inhoud van elk item aan te passen.

::component-example
---
name: 'accordion-content-slot-example'
props:
  class: 'px-4'
---
::

### Met aangepaste sleuf

Gebruik de eigenschap `slot` om een specifiek item aan te passen.

U krijgt toegang tot de volgende slots:

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-body`{lang="ts-type"}

::component-example
---
name: 'accordion-custom-slot-example'
props:
  class: 'px-4'
---
::

### Met markdown-inhoud

U kunt de [Markdown](https://comark.dev/rendering/vue) van `@comark/vue` gebruiken om markdown in de accordeonitems weer te geven.

::component-example
---
collapse: true
name: 'accordion-markdown-example'
class: 'px-8'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog

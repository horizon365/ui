---
description: Een set tabpanelen die één voor één worden weergegeven.
category: navigation
keywords:
  - tabbed
  - panels
  - sections
links:
  - label: Tabbladen
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tabs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tabs.vue
---

## Gebruik

Gebruik de Tabs-component om een lijst met items in tabbladen weer te geven.

::component-example
---
collapse: true
prettier: true
name: 'tabs-example'
props:
  class: 'w-full'
---
::

### Items

Gebruik de `items` prop als een array van objecten met de volgende eigenschappen:

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `badge?: string | number | BadgeProps`{lang="ts-type"}
- `content?: string`{lang="ts-type"}
- `value?: string | number`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { trigger?: ClassNameValue, leadingIcon?: ClassNameValue, leadingAvatar?: ClassNameValue, leadingAvatarSize?: ClassNameValue, label?: ClassNameValue, trailingBadge?: ClassNameValue, trailingBadgeSize?: ClassNameValue, content?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

### Inhoud

Stel de `content` prop in op `false` om de triggers zonder panelen weer te geven. Standaard op `true`.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  content: false
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

### Ontkoppelen

Gebruik de `unmount-on-hide`-prop om te voorkomen dat de inhoud wordt ontkoppeld wanneer de tabbladen zijn samengevouwen. Standaard `true`.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  unmountOnHide: false
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

::note
U kunt de DOM inspecteren om te zien dat de inhoud van elk item wordt weergegeven.
::

### Kleur

Gebruik de `color` prop om de kleur van de Tabbladen te veranderen.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  color: neutral
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### Variant

Gebruik de `variant` prop om de variant van de Tabs te wijzigen.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  color: neutral
  variant: link
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### Grootte

Gebruik de `size` prop om de grootte van de tabbladen te wijzigen.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  size: md
  variant: pill
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### Oriëntatie

Gebruik de `orientation`-prop om de oriëntatie van de tabbladen te wijzigen. Standaard `horizontal`.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  orientation: vertical
  variant: pill
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

## Voorbeelden

### Control actief item

U kunt het actieve item besturen met de `default-value` prop of de `v-model` richtlijn met de `value` van het item.
Als er geen `value` is opgegeven, wordt standaard de index **as a string** gebruikt.

:component-example{name="tabs-model-value-example"}

::tip
Gebruik de `value-key` prop om de sleutel te wijzigen die wordt gebruikt om items te matchen wanneer een `v-model` of `default-value` wordt geleverd.
::

### Met routequery

U kunt het actieve item besturen met een URL-queryparameter, met `route.query.tab` als `value` van het item.

:component-example{name="tabs-route-query-example"}

### Met inhoud slot

Gebruik de `#content`-sleuf om de inhoud van elk item aan te passen.

:component-example{name="tabs-content-slot-example"}

### Met onderste tabbalk

Gebruik de `ui`-prop om de tabbladen om te vormen tot een tabbalk in mobiele stijl met pictogrammen en kleine labels, vergelijkbaar met YouTube of Instagram.

::component-example
---
collapse: true
name: 'tabs-bottom-tab-bar-example'
---
::

### Met aangepaste sleuf

Gebruik de eigenschap `slot` om een specifiek item aan te passen.

U krijgt toegang tot de volgende slots:

- `#{{ item.slot }}`{lang="ts-type"}

::component-example
---
collapse: true
name: 'tabs-custom-slot-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

### Expose

Wanneer u de component opent via een sjabloonref, kunt u het volgende gebruiken:

| Naam | Type |
| ---- | ---- |
| `triggersRef`{lang="ts-type"} | `Ref<ComponentPublicInstance[]>`{lang="ts-type"} |

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog

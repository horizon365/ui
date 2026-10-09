---
title: DropdownMenu
description: Een menu om acties weer te geven bij het klikken op een element.
category: overlay
keywords:
  - menu
  - context menu
  - actions
links:
  - label: DropdownMenu
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dropdown-menu
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DropdownMenu.vue
---

## Gebruik

Gebruik een [Button](/docs/components/button) of een ander onderdeel in de standaardsleuf van het DropdownMenu.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[][]
props:
  items:
    - - label: Benjamin
        avatar:
          src: 'https://github.com/benjamincanac.png'
          loading: lazy
        type: label
    - - label: Profile
        icon: i-lucide-user
      - label: Billing
        icon: i-lucide-credit-card
      - label: Settings
        icon: i-lucide-cog
        kbds:
          - ','
      - label: Keyboard shortcuts
        icon: i-lucide-monitor
    - - label: Team
        icon: i-lucide-users
        filter:
          placeholder: 'Search members...'
        children:
          - - label: benjamincanac
              avatar:
                src: 'https://github.com/benjamincanac.png'
                loading: lazy
            - label: HugoRCD
              avatar:
                src: 'https://github.com/HugoRCD.png'
                loading: lazy
            - label: atinux
              avatar:
                src: 'https://github.com/atinux.png'
                loading: lazy
            - label: romhml
              avatar:
                src: 'https://github.com/romhml.png'
                loading: lazy
            - label: sandros94
              avatar:
                src: 'https://github.com/sandros94.png'
                loading: lazy
            - label: J-Michalek
              avatar:
                src: 'https://github.com/J-Michalek.png'
                loading: lazy
            - label: hywax
              avatar:
                src: 'https://github.com/hywax.png'
                loading: lazy
      - label: Invite users
        icon: i-lucide-user-plus
        children:
          - - label: Email
              icon: i-lucide-mail
            - label: Message
              icon: i-lucide-message-square
          - - label: More
              icon: i-lucide-circle-plus
              children:
                - label: Import from Slack
                  icon: i-simple-icons-slack
                  to: 'https://slack.com'
                  target: _blank
                - label: Import from Trello
                  icon: i-simple-icons-trello
                - label: Import from Asana
                  icon: i-simple-icons-asana
      - label: New team
        icon: i-lucide-plus
        kbds:
          - meta
          - n
    - - label: GitHub
        icon: i-simple-icons-github
        to: 'https://github.com/nuxt/ui'
        target: _blank
      - label: Support
        icon: i-lucide-life-buoy
        to: '/docs/components/dropdown-menu'
      - label: API
        icon: i-lucide-cloud
        disabled: true
    - - label: Logout
        icon: i-lucide-log-out
        color: error
        kbds:
          - shift
          - meta
          - q
slots:
  default: |

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Items

Gebruik de `items` prop als een array van objecten met de volgende eigenschappen:

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `kbds?: string[] | KbdProps[]`{lang="ts-type"}
- [`type?: "link" | "label" | "separator" | "checkbox"`{lang="ts-type"}](#with-checkbox-items)
- [`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}](#with-color-items)
- [`checked?: boolean`{lang="ts-type"}](#with-checkbox-items)
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `onSelect?: (e: Event) => void`{lang="ts-type"}
- [`onUpdateChecked?: (checked: boolean) => void`{lang="ts-type"}](#with-checkbox-items)
- `children?: DropdownMenuItem[] | DropdownMenuItem[][]`{lang="ts-type"}
- [`filter?: boolean | InputProps`{lang="ts-type"}](#with-filter-items)
- `filterFields?: string[]`{lang="ts-type"}
- `ignoreFilter?: boolean`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`{lang="ts-type"}

U kunt elke eigenschap van de [Link](/docs/components/link#props) component doorgeven, zoals `to`, `target`, enz.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[][]
props:
  items:
    - - label: Benjamin
        avatar:
          src: 'https://github.com/benjamincanac.png'
          loading: lazy
        type: label
    - - label: Profile
        icon: i-lucide-user
      - label: Billing
        icon: i-lucide-credit-card
      - label: Settings
        icon: i-lucide-cog
        kbds:
          - ','
      - label: Keyboard shortcuts
        icon: i-lucide-monitor
    - - label: Team
        icon: i-lucide-users
      - label: Invite users
        icon: i-lucide-user-plus
        children:
          - - label: Email
              icon: i-lucide-mail
            - label: Message
              icon: i-lucide-message-square
          - - label: More
              icon: i-lucide-circle-plus
              children:
                - label: Import from Slack
                  icon: i-simple-icons-slack
                  to: 'https://slack.com'
                  target: _blank
                - label: Import from Trello
                  icon: i-simple-icons-trello
                - label: Import from Asana
                  icon: i-simple-icons-asana
      - label: New team
        icon: i-lucide-plus
        kbds:
          - meta
          - n
    - - label: GitHub
        icon: i-simple-icons-github
        to: 'https://github.com/nuxt/ui'
        target: _blank
      - label: Support
        icon: i-lucide-life-buoy
        to: '/docs/components/dropdown-menu'
      - label: API
        icon: i-lucide-cloud
        disabled: true
    - - label: Logout
        icon: i-lucide-log-out
        kbds:
          - shift
          - meta
          - q
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{icon="i-lucide-menu" color="neutral" variant="outline"}
::

::note
U kunt ook een reeks arrays doorgeven aan de `items`-prop om afzonderlijke groepen items te maken.
::

::tip
Elk item kan een `children`-array van objecten met dezelfde eigenschappen als de `items`-prop gebruiken om een genest menu te maken dat kan worden bediend met de `open`, `defaultOpen` en `content`
 eigenschappen.
::

### Inhoud

Gebruik de `content` prop om te bepalen hoe de inhoud van DropdownMenu wordt weergegeven, zoals de `align` of `side` bijvoorbeeld.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
items:
  content.align:
    - start
    - center
    - end
  content.side:
    - right
    - left
    - top
    - bottom
props:
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  content:
    align: start
    side: bottom
    sideOffset: 8
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Filter: badge{label="4.6+" class="align-text-top"}

Gebruik de `filter` prop om een filterinvoer in het DropdownMenu weer te geven. Standaard `false`.

::note{to="#with-ignore-filter"}
Gebruik de `ignore-filter` prop om de interne zoekopdracht uit te schakelen en gebruik je eigen zoeklogica.
::

::note{to="#with-filter-fields"}
Gebruik de `filter-fields`-prop om op te geven op welke velden moet worden gefilterd. Standaard wordt de `labelKey`-prop gebruikt.
::

U kunt elke eigenschap van de [Input](/docs/components/input) component doorgeven om deze aan te passen.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - filter.icon
  - content.align
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  filter:
    icon: i-lucide-search
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
    - label: Team
      icon: i-lucide-users
    - label: Invite users
      icon: i-lucide-user-plus
    - label: New team
      icon: i-lucide-plus
  content:
    align: start
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::tip{to="#with-filter-items"}
U kunt het filter ook inschakelen op specifieke submenu 's met het veld `filter` op items met `children`.
::

### Pijl

Gebruik de `arrow` prop om een pijl in het DropdownMenu weer te geven.

::component-code
---
prettier: true
collapse: true
ignore:
  - arrow
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  arrow: true
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Grootte

Gebruik de `size` prop om de grootte van het DropdownMenu te bepalen.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - content.align
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  size: xl
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  content:
    align: start
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::warning
De `size` prop zal niet geproxied worden naar de Button, je moet hem zelf instellen.
::

::note
Bij gebruik van dezelfde maat worden de DropdownMenu-items perfect uitgelijnd met de knop.
::

### Modaal

Gebruik de `modal` prop om te bepalen of het DropdownMenu de interactie met externe inhoud blokkeert. Standaard `true`.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  modal: false
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Uitgeschakeld

Gebruik de `disabled` prop om het DropdownMenu uit te schakelen.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  disabled: true
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

## Voorbeelden

### Met checkbox items

U kunt de eigenschap `type` gebruiken met `checkbox` en de eigenschappen `checked` / `onUpdateChecked` gebruiken om de gecontroleerde status van het item te controleren.

::component-example
---
collapse: true
name: 'dropdown-menu-checkbox-items-example'
---
::

::note
Om reactiviteit voor de `checked` status van items te garanderen, is het raadzaam om je `items` array in een `computed` te wikkelen.
::

### Met kleur artikelen

U kunt de eigenschap `color` gebruiken om bepaalde items met een kleur te markeren.

::component-example
---
collapse: true
name: 'dropdown-menu-color-items-example'
---
::

### Met filter artikelen: badge{label="4.6+" class="align-text-top"}

U kunt de eigenschap `filter` gebruiken op items met `children` om een filterinvoer in het submenu weer te geven.

::component-example
---
collapse: true
name: 'dropdown-menu-filter-items-example'
---
::

### Control open staat

U kunt de open status regelen met behulp van de `default-open` prop of de `v-model:open`-richtlijn.

::component-example
---
collapse: true
name: 'dropdown-menu-open-example'
---
::

::note
In dit voorbeeld, gebruikmakend van [`defineShortcuts`](/docs/composables/define-shortcuts), kunt u het dropdownmenu omschakelen door op: kbd{value="O"} te drukken.
::

### Met aangepaste sleuf

Gebruik de eigenschap `slot` om een specifiek item aan te passen.

U krijgt toegang tot de volgende slots:

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

::component-example
---
collapse: true
name: 'dropdown-menu-custom-slot-example'
---
::

::tip{to="#slots"}
U kunt ook de `#item`, `#item-leading`, `#item-label` en `#item-trailing` slots gebruiken om alle items aan te passen.
::

### Met schakelaar in artikelen

U kunt de eigenschap `slot` met een `#{{ slot }}-trailing`-sleuf gebruiken om een [Switch](/docs/components/switch) in een item weer te geven.

::component-example
---
collapse: true
name: 'dropdown-menu-switch-items-example'
---
::

### Met filter negeren: badge{label="4.6+" class="align-text-top"}

Wanneer u de `filter` prop of het `filter` veld gebruikt op items met `children`, kunt u de `ignore-filter` prop instellen op `true` om de interne zoekopdracht uit te schakelen en uw eigen zoeklogica te gebruiken
.

::component-example
---
collapse: true
name: 'dropdown-menu-ignore-filter-example'
---
::

::note
Dit voorbeeld gebruikt [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) om de API-aanroepen te debounce. De ophaalactie wordt uitgesteld met `immediate: false`, dus er wordt geen verzoek gedaan totdat het menu wordt geopend.
::

### Met filtervelden: badge{label="4.6+" class="align-text-top"}

Wanneer u de `filter` prop of het `filter` veld gebruikt op items met `children`, kunt u de `filter-fields` prop instellen met een array van velden om op te filteren. Standaard `[labelKey]`.

::component-example
---
collapse: true
name: 'dropdown-menu-filter-fields-example'
---
::

### Met trigger inhoud breedte

U kunt de inhoud uitbreiden tot de volledige breedte van de knop door de klasse `w-(--reka-dropdown-menu-trigger-width)` toe te voegen aan de `ui.content`-sleuf.

::component-example
---
collapse: true
name: 'dropdown-menu-content-width-example'
---
::

::tip
U kunt de inhoudsbreedte ook globaal wijzigen in uw `app.config.ts`:

```
export default defineAppConfig({
  ui: {
    dropdownMenu: {
      slots: {
        content: 'w-(--reka-dropdown-menu-trigger-width)'
      }
    }
  }
})
```
::

### Sneltoetsen uitpakken

Gebruik het [extractShortcuts](/docs/composables/extract-shortcuts) hulpprogramma om automatisch snelkoppelingen te definiëren van menu-items met een `kbds`-eigenschap. Het extraheert recursief snelkoppelingen en retourneert een object dat compatibel is met [defineShortcuts](/docs/composables/define-shortcuts).

```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[] = [{
  label: 'Invite users',
  icon: 'i-lucide-user-plus',
  children: [{
    label: 'Invite by email',
    icon: 'i-lucide-send-horizontal',
    kbds: ['meta', 'e'],
    onSelect() {
      console.log('Invite by email clicked')
    }
  }, {
    label: 'Invite by link',
    icon: 'i-lucide-link',
    kbds: ['meta', 'i'],
    onSelect() {
      console.log('Invite by link clicked')
    }
  }]
}, {
  label: 'New team',
  icon: 'i-lucide-plus',
  kbds: ['meta', 'n'],
  onSelect() {
    console.log('New team clicked')
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
In dit voorbeeld zou: kbd{value="meta"}: kbd{value="E" class="ms-px"},: kbd{value="meta"}: kbd{value="I" class="ms-px"} en: kbd{value="meta"}: kbd{value="N" class="ms-px"} de `select`-functie van het overeenkomstige item activeren.
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

---
description: Een select element om uit een lijst met opties te kiezen.
category: form
keywords:
  - dropdown
  - picker
links:
  - label: Selecteer
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/select
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Select.vue
---

## Gebruik

Gebruik de `v-model`-richtlijn om de waarde van de Select of de `default-value`-prop te regelen om de beginwaarde in te stellen wanneer u de status niet hoeft te regelen.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Items

Gebruik de `items` prop als een array van strings, nummers of boolean:

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

U kunt ook een reeks objecten doorgeven met de volgende eigenschappen:

- `label?: string`{lang="ts-type"}
- [`value?: string`{lang="ts-type"}](#value-key)
- [`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type)
- [`icon?: string`{lang="ts-type"}](#with-icons-in-items)
- [`avatar?: AvatarProps`{lang="ts-type"}](#with-avatar-in-items)
- [`chip?: ChipProps`{lang="ts-type"}](#with-chip-in-items)
- `disabled?: boolean`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectItem[]
props:
  modelValue: 'backlog'
  items:
    - label: 'Backlog'
      value: 'backlog'
    - label: 'Todo'
      value: 'todo'
    - label: 'In Progress'
      value: 'in_progress'
    - label: 'Done'
      value: 'done'
  class: 'w-48'
---
::

::caution
Wanneer u objecten gebruikt, moet u verwijzen naar de `value`-eigenschap van het object in de `v-model`-richtlijn of de `default-value`-prop.
::

U kunt ook een reeks arrays doorgeven aan de `items`-prop om afzonderlijke groepen items weer te geven.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Apple'
  items:
    - - Apple
      - Banana
      - Blueberry
      - Grapes
      - Pineapple
    - - Aubergine
      - Broccoli
      - Carrot
      - Courgette
      - Leek
  class: 'w-48'
---
::

### Value-sleutel

U kunt de eigenschap die wordt gebruikt om de waarde in te stellen wijzigen met behulp van de `value-key` prop. Standaard is `value`.

::component-code
---
ignore:
  - modelValue
  - valueKey
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectItem[]
props:
  modelValue: 'backlog'
  valueKey: 'id'
  items:
    - label: 'Backlog'
      id: 'backlog'
    - label: 'Todo'
      id: 'todo'
    - label: 'In Progress'
      id: 'in_progress'
    - label: 'Done'
      id: 'done'
  class: 'w-48'
---
::

### Meerdere

Gebruik de `multiple` prop om meerdere selecties toe te staan, de geselecteerde items worden gescheiden door een komma in de trigger.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
  - class
external:
  - items
  - modelValue
props:
  modelValue:
    - Backlog
    - Todo
  multiple: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::caution
Zorg ervoor dat u een array doorgeeft aan de `default-value` prop of de `v-model` richtlijn.
::

### Plaatshouder

Gebruik de `placeholder` prop om een tijdelijke aanduiding in te stellen.

::component-code
---
prettier: true
ignore:
  - items
  - class
external:
  - items
props:
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Inhoud

Gebruik de `content`-prop om te bepalen hoe de Select-inhoud wordt weergegeven, zoals bijvoorbeeld `align` of `side`.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
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
  modelValue: 'Backlog'
  content:
    align: center
    side: bottom
    sideOffset: 8
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::note
Deze opties zijn alleen van toepassing wanneer `content.position` `popper` is (standaard).
::

### Positie: badge{label="4.7+" class="align-text-top"}

Gebruik de `content.position`-prop om te bepalen hoe de Select-inhoud wordt gepositioneerd ten opzichte van de trigger. Standaard wordt `popper` gebruikt, die de inhoud positioneert zoals andere popovers.
Stel het in op `item-aligned` om de inhoud uit te lijnen met het geselecteerde item (vergelijkbaar met een native macOS-menu).

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
items:
  content.position:
    - item-aligned
    - popper
props:
  modelValue: 'Todo'
  content:
    position: item-aligned
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Pijl

Gebruik de `arrow` prop om een pijl op de Select weer te geven.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
  - arrow
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  arrow: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Kleur

Gebruik de `color` prop om de ringkleur te wijzigen wanneer de Select is scherpgesteld.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  color: neutral
  highlight: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::note
De `highlight` prop wordt hier gebruikt om de focusstatus weer te geven. Het wordt intern gebruikt wanneer er een validatiefout optreedt.
::

### Variant

Gebruik de `variant` prop om de variant van de Select te wijzigen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  color: neutral
  variant: subtle
  highlight: false
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Grootte

Gebruik de `size` prop om de grootte van de Select te wijzigen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  size: xl
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Icoon

Gebruik de `icon` prop om een [Icon](/docs/components/icon) in de Select te tonen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  icon: 'i-lucide-search'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Achterliggende pictogram

Gebruik de `trailing-icon` prop om de [Icon](/docs/components/icon) aan te passen. Standaard `i-lucide-chevron-down`.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  trailingIcon: 'i-lucide-arrow-down'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
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

### Geselecteerd pictogram

Gebruik de `selected-icon` prop om het pictogram aan te passen wanneer een item is geselecteerd. Standaard `i-lucide-check`.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  selectedIcon: 'i-lucide-flame'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.check`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.check`-toets.
:::
::

### Avatar [bewerken]

Gebruik de `avatar` prop om een [Avatar](/docs/components/avatar) in de Select te tonen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
  - avatar.loading
external:
  - items
  - modelValue
props:
  modelValue: 'Nuxt'
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  items:
    - Nuxt
    - NuxtHub
    - NuxtLabs
    - Nuxt Modules
    - Nuxt Community
  class: 'w-48'
---
::

### Bezig met laden

Gebruik de `loading` prop om een laadpictogram op de Select te tonen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  loading: true
  trailing: false
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Pictogram laden

Gebruik de `loading-icon` prop om het laadpictogram aan te passen. Standaard `i-lucide-loader-circle`.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  loading: true
  loadingIcon: 'i-lucide-loader'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.loading`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.loading`-sleutel.
:::
::

### Uitgeschakeld

Gebruik de `disabled` prop om de Select uit te schakelen.

::component-code
---
prettier: true
ignore:
  - items
  - placeholder
  - class
external:
  - items
props:
  disabled: true
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

## Voorbeelden

### Met items type

U kunt de eigenschap `type` met `separator` gebruiken om een scheidingsteken tussen items weer te geven of `label` om een label weer te geven.

::component-code
---
collapse: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectItem[]
props:
  modelValue: 'Apple'
  items:
    - type: 'label'
      label: 'Fruits'
    - Apple
    - Banana
    - Blueberry
    - Grapes
    - Pineapple
    - type: 'separator'
    - type: 'label'
      label: 'Vegetables'
    - Aubergine
    - Broccoli
    - Carrot
    - Courgette
    - Leek
  class: 'w-48'
---
::

### Met pictogram in items

U kunt de eigenschap `icon` gebruiken om een [Icon](/docs/components/icon) in de items weer te geven.

::component-example
---
collapse: true
name: 'select-items-icon-example'
---
::

::note
In dit voorbeeld wordt het pictogram berekend vanuit de eigenschap `value` van het geselecteerde item.
::

::tip
U kunt ook de `#leading`-sleuf gebruiken om het geselecteerde pictogram weer te geven.
::

### Met avatar in items

U kunt de eigenschap `avatar` gebruiken om een [Avatar](/docs/components/avatar) in de items weer te geven.

::component-example
---
collapse: true
name: 'select-items-avatar-example'
---
::

::note
In dit voorbeeld wordt de avatar berekend vanuit de eigenschap `value` van het geselecteerde item.
::

::tip
U kunt ook de `#leading`-sleuf gebruiken om de geselecteerde avatar weer te geven.
::

### Met chip in artikelen

U kunt de eigenschap `chip` gebruiken om een [Chip](/docs/components/chip) in de items weer te geven.

::component-example
---
collapse: true
name: 'select-items-chip-example'
---
::

::note
In dit voorbeeld wordt de `#leading`-sleuf gebruikt om de geselecteerde chip weer te geven.
::

### Controle open staat

U kunt de open status regelen met behulp van de `default-open` prop of de `v-model:open`-richtlijn.

::component-example
---
name: 'select-open-example'
---
::

::note
In dit voorbeeld kunt u, gebruikmakend van [`defineShortcuts`](/docs/composables/define-shortcuts), de Selectie omschakelen door op: kbd{value="O"} te drukken.
::

### Met draaiend pictogram

Hier is een voorbeeld met een roterend pictogram dat de open status van de Select aangeeft.

::component-example
---
name: 'select-icon-example'
---
::

### Met opgehaalde items

U kunt items ophalen uit een API en deze gebruiken in de Select.

::component-example
---
name: 'select-fetch-example'
collapse: true
---
::

::note
Dit voorbeeld gebruikt `useLazyFetch` met `immediate: false` om alleen gegevens op te halen wanneer het menu wordt geopend, waardoor onnodige API-aanroepen bij het laden van pagina 's worden vermeden.
::

### Met oneindig scrollen: badge{label="4.4+" class="align-text-top"}

U kunt de [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) composable gebruiken om meer gegevens te laden terwijl de gebruiker scrolt.

::component-example
---
prettier: true
collapse: true
highlights:
  - 41
  - 51
overflowHidden: true
name: 'select-infinite-scroll-example'
---
::

::note
Dit voorbeeld gebruikt `useLazyFetch` met `immediate: false`, dus gegevens worden alleen geladen terwijl de gebruiker scrolt.
::

### Met volledige inhoud breedte

U kunt de inhoud uitbreiden tot de volledige breedte van de items door de klasse `min-w-fit` toe te voegen aan de `ui.content`-sleuf.

::component-example
---
name: 'select-content-width-example'
collapse: true
---
::

::tip
U kunt de inhoudsbreedte ook globaal wijzigen in uw `app.config.ts`:

```
export default defineAppConfig({
  ui: {
    select: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<button>` HTML-kenmerken.
::

### Slots

:component-slots

### Uitzendt

:component-emits

### Expose

Wanneer u de component opent via een sjabloonref, kunt u het volgende gebruiken:

| Naam | Type |
| ---- | ---- |
| `triggerRef`{lang="ts-type"} | `Ref<HTMLButtonElement \| null>`{lang="ts-type"} |
| `viewportRef`{lang="ts-type"} | `Ref<HTMLDivElement \| null>`{lang="ts-type"} |

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog

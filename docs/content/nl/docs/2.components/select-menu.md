---
title: SelectMenu
description: Een geavanceerd doorzoekbaar select element.
category: form
keywords:
  - combobox
  - multi select
  - filterable select
links:
  - label: Combobox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/SelectMenu.vue
---

## Gebruik

Gebruik de `v-model`-richtlijn om de waarde van het SelectMenu of de `default-value`-prop te regelen om de beginwaarde in te stellen wanneer u de status niet hoeft te regelen.

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

::tip
Gebruik dit over een [`Select`](/docs/components/select) om te profiteren van Reka UI 's [`Combobox`](https://reka-ui.com/docs/components/combobox) component die zoekmogelijkheden en meervoudige selectie biedt.
::

::note
Dit onderdeel is vergelijkbaar met de [`InputMenu`](/docs/components/input-menu) , maar gebruikt een selectie in plaats van een invoer met de zoekopdracht in het menu.
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
- [`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type)
- [`icon?: string`{lang="ts-type"}](#with-icons-in-items)
- [`avatar?: AvatarProps`{lang="ts-type"}](#with-avatar-in-items)
- [`chip?: ChipProps`{lang="ts-type"}](#with-chip-in-items)
- `disabled?: boolean`{lang="ts-type"}
- `onSelect?: (e: Event) => void`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - modelValue.label
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue:
    label: 'Todo'
  items:
    - label: 'Backlog'
    - label: 'Todo'
    - label: 'In Progress'
    - label: 'Done'
  class: 'w-48'
---
::

::caution
In tegenstelling tot de [`Select`](/docs/components/select) , verwacht het SelectMenu dat het hele object standaard wordt doorgegeven aan de `v-model`-richtlijn of de `default-value`-prop.
::

U kunt ook een reeks arrays doorgeven aan de `items` prop om afzonderlijke groepen items weer te geven.

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

U kunt ervoor kiezen om een enkele eigenschap van het object te binden in plaats van het hele object met behulp van de `value-key` prop. Standaard `undefined`.

::component-code
---
collapse: true
ignore:
  - modelValue
  - valueKey
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue: 'todo'
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

::tip
Gebruik de `by` prop om objecten te vergelijken met een veld in plaats van referentie wanneer de `model-value` een object is.
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

### Zoek Input

Gebruik de `search-input` prop om de zoekinvoer aan te passen of te verbergen (met `false`-waarde).

U kunt elke eigenschap van de [Input](/docs/components/input) component doorgeven om deze aan te passen.

::component-code
---
prettier: true
ignore:
  - modelValue.label
  - modelValue.icon
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue:
    label: 'Backlog'
    icon: 'i-lucide-circle-help'
  searchInput:
    placeholder: 'Filter...'
    icon: 'i-lucide-search'
  items:
    - label: Backlog
      icon: 'i-lucide-circle-help'
    - label: Todo
      icon: 'i-lucide-circle-plus'
    - label: In Progress
      icon: 'i-lucide-circle-arrow-up'
    - label: Done
      icon: 'i-lucide-circle-check'
  class: 'w-48'
---
::

::tip
U kunt de `search-input` prop instellen op `false` om de zoekinvoer te verbergen.
::

::note
Gebruik `:search-input="{ autofocus: false }"` om te voorkomen dat de zoekinvoer wordt scherpgesteld wanneer het menu wordt geopend, bijvoorbeeld om te voorkomen dat het virtuele toetsenbord op aanraakapparaten wordt geopend.
::

### Inhoud

Gebruik de `content` prop om te bepalen hoe de SelectMenu-inhoud wordt weergegeven, zoals de `align` of `side` bijvoorbeeld.

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

### Pijl

Gebruik de `arrow` prop om een pijl op het SelectMenu weer te geven.

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

Gebruik de `color` prop om de ringkleur te veranderen wanneer het SelectMenu is scherpgesteld.

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

Gebruik de `variant` prop om de variant van het SelectMenu te wijzigen.

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

Gebruik de `size` prop om de grootte van het SelectMenu te wijzigen.

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

Gebruik de `icon` prop om een [Icon](/docs/components/icon) in het SelectMenu weer te geven.

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

### Trailing pictogram

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
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.check`-sleutel.
:::
::

### Wissen: badge{label="4.4+" class="align-text-top"}

Gebruik de `clear` prop om een duidelijke knop weer te geven wanneer een waarde is geselecteerd.

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
  clear:
    - true
    - false
props:
  modelValue: 'Backlog'
  clear: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Duidelijk pictogram: badge{label="4.4+" class="align-text-top"}

Gebruik de `clear-icon` prop om de duidelijke knop aan te passen [Icon](/docs/components/icon). Standaard `i-lucide-x`.

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
  clear:
    - true
    - false
props:
  modelValue: 'Backlog'
  clear: true
  clearIcon: 'i-lucide-trash'
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
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.close`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.close`-sleutel.
:::
::

### Avatar [bewerken]

Gebruik de `avatar` prop om een [Avatar](/docs/components/avatar) in het SelectMenu weer te geven.

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

Gebruik de `loading` prop om een laadpictogram op het SelectMenu te tonen.

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

### Icoon aan het laden

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

Gebruik de `disabled` prop om het SelectMenu uit te schakelen.

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
  - SelectMenuItem[]
props:
  modelValue: 'Apple'
  items:
    - - type: 'label'
        label: 'Fruits'
      - Apple
      - Banana
      - Blueberry
      - Grapes
      - Pineapple
    - - type: 'label'
        label: 'Vegetables'
      - Aubergine
      - Broccoli
      - Carrot
      - Courgette
      - Leek
  class: 'w-48'
---
::

::note
Wanneer u `label`-items als groepskoppen gebruikt, geeft u een reeks arrays door, zodat een label samen met zijn groep wordt uitgefilterd tijdens het zoeken.
::

### Met pictogram in items

U kunt de eigenschap `icon` gebruiken om een [Icon](/docs/components/icon) in de items weer te geven.

::component-example
---
collapse: true
name: 'select-menu-items-icon-example'
---
::

::tip
U kunt ook de `#leading`-sleuf gebruiken om het geselecteerde pictogram weer te geven.
::

### Met avatar in items

U kunt de eigenschap `avatar` gebruiken om een [Avatar](/docs/components/avatar) in de items weer te geven.

::component-example
---
collapse: true
name: 'select-menu-items-avatar-example'
---
::

::tip
U kunt ook de `#leading`-sleuf gebruiken om de geselecteerde avatar weer te geven.
::

### Met chip in artikelen

U kunt de eigenschap `chip` gebruiken om een [Chip](/docs/components/chip) in de items weer te geven.

::component-example
---
collapse: true
name: 'select-menu-items-chip-example'
---
::

::note
In dit voorbeeld wordt de `#leading`-sleuf gebruikt om de geselecteerde chip weer te geven.
::

### Controle open staat

U kunt de open status regelen met behulp van de `default-open` prop of de `v-model:open`-richtlijn.

::component-example
---
name: 'select-menu-open-example'
---
::

::note
In dit voorbeeld, gebruikmakend van [`defineShortcuts`](/docs/composables/define-shortcuts), kunt u het SelectMenu omschakelen door op: kbd{value="O"} te drukken.
::

### Controle zoekterm

Gebruik de `v-model:search-term`-richtlijn om de zoekterm te controleren.

::component-example
---
name: 'select-menu-search-term-example'
---
::

### Met draaiend pictogram

Hier is een voorbeeld met een roterend pictogram dat de open status van het SelectMenu aangeeft.

::component-example
---
name: 'select-menu-icon-example'
---
::

### Met item aanmaken

Gebruik de `create-item`-prop om gebruikers in staat te stellen aangepaste waarden toe te voegen die niet in de vooraf gedefinieerde opties staan.

::component-example
---
collapse: true
name: 'select-menu-create-item-example'
---
::

::note
De optie Maken wordt weergegeven wanneer er standaard geen overeenkomst wordt gevonden. Stel het in op `always` om het weer te geven, zelfs als er vergelijkbare waarden bestaan.
::

::tip{to="#emits"}
Gebruik de `@create`-gebeurtenis om het aanmaken van het item af te handelen. U ontvangt de gebeurtenis en het item als argumenten.
::

### Met opgehaalde items

U kunt items ophalen uit een API en deze gebruiken in het SelectMenu.

::component-example
---
collapse: true
name: 'select-menu-fetch-example'
---
::

::note
Dit voorbeeld gebruikt `useLazyFetch` met `immediate: false` om alleen gegevens op te halen wanneer het menu wordt geopend, waardoor onnodige API-aanroepen bij het laden van pagina 's worden vermeden.
::

### Met filter negeren

Stel de `ignore-filter` prop in op `true` om het interne zoeken uit te schakelen en gebruik je eigen zoeklogica.

::component-example
---
collapse: true
name: 'select-menu-ignore-filter-example'
---
::

::note
Dit voorbeeld gebruikt [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) om de API-aanroepen te debounce. De ophaalactie wordt uitgesteld met `immediate: false`, dus er wordt geen verzoek gedaan totdat het menu wordt geopend.
::

### Met filtervelden

Gebruik de `filter-fields`-prop met een reeks velden om op te filteren. Standaard `[labelKey]`.

::component-example
---
collapse: true
name: 'select-menu-filter-fields-example'
---
::

::note
Dit voorbeeld gebruikt `useLazyFetch` met `immediate: false` om alleen gegevens op te halen wanneer het menu wordt geopend, waardoor onnodige API-aanroepen bij het laden van de pagina worden vermeden.
::

### Met virtualisatie: badge{label="4.1+" class="align-text-top"}

Gebruik de `virtualize` prop om virtualisatie in te schakelen voor grote lijsten als een boolean of een object met opties zoals `{ estimateSize: 32, overscan: 12 }`.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
Indien ingeschakeld, worden alle groepen samengevoegd tot één lijst vanwege een beperking van de Reka-gebruikersinterface.
::

::component-example
---
prettier: true
name: 'select-menu-virtualize-example'
---
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
name: 'select-menu-infinite-scroll-example'
---
::

::note
Dit voorbeeld gebruikt `useLazyFetch` met `immediate: false`, dus gegevens worden alleen geladen terwijl de gebruiker scrolt.
::

### Met volledige inhoud breedte

U kunt de inhoud uitbreiden tot de volledige breedte van de items door de klasse `min-w-fit` toe te voegen aan de `ui.content`-sleuf.

::component-example
---
name: 'select-menu-content-width-example'
collapse: true
---
::

::tip
U kunt de inhoudsbreedte ook globaal wijzigen in uw `app.config.ts`:

```
export default defineAppConfig({
  ui: {
    selectMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

### Als landenkiezer

U kunt het SelectMenu gebruiken als landenkiezer met lui laden. Landen worden pas opgehaald wanneer het menu voor het eerst wordt geopend.

::component-example
---
collapse: true
name: 'select-menu-countries-example'
---
::

::note
Dit voorbeeld gebruikt `useLazyFetch` met `immediate: false` om alleen landen te laden wanneer het menu voor het eerst wordt geopend.
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

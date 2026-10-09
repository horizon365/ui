---
title: InputMenu
description: Een invoer voor automatisch aanvullen met realtime suggesties.
category: form
keywords:
  - combobox
  - typeahead
  - autosuggest
links:
  - label: Combobox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: Automatisch aanvullen
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/autocomplete
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputMenu.vue
---

## Gebruik

Gebruik de `v-model`-richtlijn om de waarde van het InputMenu of de `default-value`-prop te regelen om de beginwaarde in te stellen wanneer u de status niet hoeft te regelen.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
---
::

::tip
Gebruik dit over een [`Input`](/docs/components/input) om te profiteren van Reka UI 's [`Combobox`](https://reka-ui.com/docs/components/combobox) component die mogelijkheden voor automatisch aanvullen biedt.
::

::note
Dit onderdeel is vergelijkbaar met de [`SelectMenu`](/docs/components/select-menu) , maar gebruikt een invoer in plaats van een selectie.
::

### Items

Gebruik de `items` prop als een array van strings, nummers of boolean:

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
- `ui?: { tagsItem?: ClassNameValue, tagsItemText?: ClassNameValue, tagsItemDelete?: ClassNameValue, tagsItemDeleteIcon?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - modelValue.label
  - items
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
props:
  modelValue:
    label: 'Todo'
  items:
    - label: 'Backlog'
    - label: 'Todo'
    - label: 'In Progress'
    - label: 'Done'
---
::

U kunt ook een reeks arrays doorgeven aan de `items` prop om afzonderlijke groepen items weer te geven.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
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
---
::

::tip
Gebruik de `by` prop om objecten te vergelijken met een veld in plaats van referentie wanneer de `model-value` een object is.
::

### Meerdere

Gebruik de `multiple` prop om meerdere selecties toe te staan, de geselecteerde items worden weergegeven als tags.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
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
---
::

::caution
Zorg ervoor dat u een array doorgeeft aan de `default-value` prop of de `v-model`-richtlijn.
::

### Icoon verwijderen

Gebruik met `multiple` de `delete-icon` prop om de delete [Icon](/docs/components/icon) in de tags aan te passen. Standaard `i-lucide-x`.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
external:
  - items
  - modelValue
props:
  modelValue:
    - Backlog
    - Todo
  multiple: true
  deleteIcon: 'i-lucide-trash'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
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

### Plaatshouder

Gebruik de `placeholder` prop om een tijdelijke aanduiding in te stellen.

::component-code
---
prettier: true
ignore:
  - items
external:
  - items
props:
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
---
::

### Modus: badge{label="4.8+" class="align-text-top"}

Stel de `mode` prop in op `autocomplete` om het InputMenu om te zetten in een vrije vorm tekstinvoer met suggesties. De `modelValue` wordt de invoertekst (`string`) in plaats van een geselecteerd item.

::component-example
---
name: 'input-menu-mode-example'
---
::

::caution
Wanneer `mode` `autocomplete` is, zijn `multiple`, `by`, `resetSearchTermOnSelect` en `resetModelValueOnClear` niet van toepassing.
::

::tip
Gebruik de `content.hideWhenEmpty` prop om het menu te verbergen als er geen overeenkomende suggesties zijn.
::

### Inhoud

Gebruik de `content`-prop om te bepalen hoe de InputMenu-inhoud wordt weergegeven, zoals bijvoorbeeld `align` of `side`.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Pijl

Gebruik de `arrow` prop om een pijl op het InputMenu weer te geven.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Kleur

Gebruik de `color` prop om de ringkleur te wijzigen wanneer het InputMenu is scherpgesteld.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::note
De `highlight` prop wordt hier gebruikt om de focusstatus weer te geven. Het wordt intern gebruikt wanneer er een validatiefout optreedt.
::

### Variant

Gebruik de `variant` prop om de variant van het InputMenu te wijzigen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Grootte

Gebruik de `size` prop om de grootte van het InputMenu te wijzigen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Icoon

Gebruik de `icon` prop om een [Icon](/docs/components/icon) in het InputMenu weer te geven.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.close` toets.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.close`-sleutel.
:::
::

### Avatar [bewerken]

Gebruik de `avatar` prop om een [Avatar](/docs/components/avatar) in het InputMenu weer te geven.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Bezig met laden

Gebruik de `loading` prop om een laadpictogram op het InputMenu te tonen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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

Gebruik de `disabled` prop om het InputMenu uit te schakelen.

::component-code
---
prettier: true
ignore:
  - items
  - placeholder
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
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
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
name: 'input-menu-items-icon-example'
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
name: 'input-menu-items-avatar-example'
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
name: 'input-menu-items-chip-example'
---
::

::note
In dit voorbeeld wordt de `#leading`-sleuf gebruikt om de geselecteerde chip weer te geven.
::

### Controle open staat

U kunt de open status regelen met behulp van de `default-open` prop of de `v-model:open`-richtlijn.

::component-example
---
name: 'input-menu-open-example'
---
::

::note
In dit voorbeeld kunt u, gebruikmakend van [`defineShortcuts`](/docs/composables/define-shortcuts), het InputMenu omschakelen door op: kbd{value="O"} te drukken.
::

### Controle open staat op focus

U kunt de `open-on-focus`- of `open-on-click`-rekwisieten gebruiken om het menu te openen wanneer de invoer wordt scherpgesteld of erop wordt geklikt.

::component-example
---
name: 'input-menu-open-focus-example'
---
::

### Controle zoekterm

Gebruik de `v-model:search-term` richtlijn om de zoekterm te controleren.

::component-example
---
name: 'input-menu-search-term-example'
---
::

### Met draaiend pictogram

Hier is een voorbeeld met een roterend pictogram dat de open status van het InputMenu aangeeft.

::component-example
---
name: 'input-menu-icon-example'
---
::

### Met item aanmaken

Gebruik de `create-item` prop om gebruikers in staat te stellen aangepaste waarden toe te voegen die niet in de vooraf gedefinieerde opties staan.

::component-example
---
collapse: true
name: 'input-menu-create-item-example'
---
::

::note
De optie Maken wordt weergegeven wanneer er standaard geen overeenkomst wordt gevonden. Stel het in op `always` om het weer te geven, zelfs als er vergelijkbare waarden bestaan.
::

::tip{to="#emits"}
Gebruik de `@create`-gebeurtenis om het aanmaken van het item af te handelen. U ontvangt de gebeurtenis en het item als argumenten.
::

### Met opgehaalde items

U kunt items ophalen uit een API en deze gebruiken in het InputMenu.

::component-example
---
collapse: true
name: 'input-menu-fetch-example'
---
::

::note
Dit voorbeeld gebruikt `useLazyFetch` met `immediate: false` om alleen gegevens op te halen wanneer het menu wordt geopend, waardoor onnodige API-aanroepen bij het laden van de pagina worden vermeden.
::

### Met filter negeren

Stel de `ignore-filter` prop in op `true` om de interne zoekopdracht uit te schakelen en gebruik je eigen zoeklogica.

::component-example
---
collapse: true
name: 'input-menu-ignore-filter-example'
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
name: 'input-menu-filter-fields-example'
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
name: 'input-menu-virtualize-example'
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
name: 'input-menu-infinite-scroll-example'
---
::

::note
In dit voorbeeld wordt `useLazyFetch` met `immediate: false` gebruikt, zodat gegevens alleen worden geladen terwijl de gebruiker scrolt.
::

### Met volledige inhoudsbreedte

U kunt de inhoud uitbreiden tot de volledige breedte van de items door de klasse `min-w-fit` toe te voegen aan de `ui.content`-sleuf.

::component-example
---
name: 'input-menu-content-width-example'
collapse: true
---
::

::tip
U kunt de inhoudsbreedte ook globaal wijzigen in uw `app.config.ts`:

```
export default defineAppConfig({
  ui: {
    inputMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

### Als landenkiezer

U kunt het InputMenu gebruiken als een landenkiezer met lui laden. Landen worden pas opgehaald wanneer het menu voor het eerst wordt geopend.

::component-example
---
collapse: true
name: 'input-menu-countries-example'
---
::

::note
Dit voorbeeld gebruikt `useLazyFetch` met `immediate: false` om alleen landen te laden wanneer het menu voor het eerst wordt geopend.
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<input>` HTML-kenmerken.
::

### Slots

:component-slots

### Uitzendt

:component-emits

### Expose

Wanneer u de component opent via een sjabloonref, kunt u het volgende gebruiken:

| Naam | Type |
| ---- | ---- |
| `inputRef`{lang="ts-type"} | `Ref<HTMLInputElement \| null>`{lang="ts-type"} |
| `viewportRef`{lang="ts-type"} | `Ref<HTMLDivElement \| null>`{lang="ts-type"} |

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog

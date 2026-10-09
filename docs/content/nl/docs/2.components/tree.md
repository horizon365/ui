---
description: Een boomweergavecomponent om hiërarchische gegevensstructuren weer te geven en ermee om te gaan.
category: data
keywords:
  - file tree
  - hierarchy
  - folder tree
links:
  - label: Boom
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tree
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tree.vue
---

## Gebruik

Gebruik de boomcomponent om een hiërarchische structuur van items weer te geven.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### Items

Gebruik de `items` prop als een array van objecten met de volgende eigenschappen:

- `icon?: string`{lang="ts-type"}
- `label?: string`{lang="ts-type"}
- `trailingIcon?: string`{lang="ts-type"}
- `defaultExpanded?: boolean`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- `slot?: string`{lang="ts-type"}
- `children?: TreeItem[]`{lang="ts-type"}
- `onToggle?: (e: TreeItemToggleEvent<TreeItem>) => void`{lang="ts-type"}
- `onSelect?: (e: TreeItemSelectEvent<TreeItem>) => void`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, itemWithChildren?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLabel?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingIcon?: ClassNameValue, listWithChildren?: ClassNameValue }`{lang="ts-type"}

::note
Voor elk item is een unieke identificatie vereist. De component gebruikt de `label` prop als identificatie als er geen `get-key` is opgegeven.
Idealiter zou u een `get-key`-functieprop moeten bieden om een unieke identificatie te retourneren. Als alternatief kunt u de `labelKey`-prop gebruiken om op te geven welke eigenschap als de unieke identificatie moet worden gebruikt.
::

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### Meerdere

Gebruik de `multiple` prop om meerdere itemselecties toe te staan.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  multiple: true
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### Genesteld: badge{label="4.1+" class="align-text-top"}

Gebruik de `nested`-prop om te bepalen of de boom wordt weergegeven met een geneste structuur of als een platte lijst. Standaard `true`.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  nested: false
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::note{to="#with-virtualization"}
Wanneer `nested` `false` is, worden alle items op hetzelfde niveau weergegeven met inspringing om de hiërarchie aan te geven. Dit is handig voor virtualisatie of slepen en neerzetten.
::

### Kleur

Gebruik de `color` prop om de kleur van de boom te veranderen.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  color: neutral
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### Grootte

Gebruik de `size` prop om de grootte van de boom te wijzigen.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  size: xl
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### Achterliggende pictogram

Gebruik de `trailing-icon` prop om de [Icon](/docs/components/icon) van een bovenliggend knooppunt aan te passen. Standaard `i-lucide-chevron-down`.

::note
Als een pictogram is opgegeven voor een item, heeft dit altijd voorrang op deze rekwisieten.
::

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  trailingIcon: 'i-lucide-arrow-down'
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          trailingIcon: 'i-lucide-chevron-down'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
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

### Uitgebreid pictogram

Gebruik de `expanded-icon`- en `collapsed-icon`-rekwisieten om de pictogrammen van een bovenliggend knooppunt aan te passen wanneer het wordt uitgevouwen of samengevouwen. Standaard op respectievelijk `i-lucide-folder-open` en `i-lucide-folder`.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  expandedIcon: 'i-lucide-book-open'
  collapsedIcon: 'i-lucide-book'
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt deze pictogrammen globaal aanpassen in uw `app.config.ts` onder `ui.icons.folder` en `ui.icons.folderOpen` toetsen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt deze pictogrammen globaal aanpassen in uw `vite.config.ts` onder `ui.icons.folder` en `ui.icons.folderOpen` toetsen.
:::
::

### Uitgeschakeld

Gebruik de `disabled` prop om elke gebruikersinteractie met de Tree te voorkomen.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  disabled: true
  items:
    - label: 'app'
      icon: 'i-lucide-folder'
      defaultExpanded: true
      children:
        - label: 'composables'
          icon: 'i-lucide-folder'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components'
          icon: 'i-lucide-folder'
          children:
            - label: 'Home'
              icon: 'i-lucide-folder'
              children:
                - label: 'Card.vue'
                  icon: 'i-vscode-icons-file-type-vue'
                - label: 'Button.vue'
                  icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::note
U kunt ook afzonderlijke items uitschakelen met `item.disabled`.
::

## Voorbeelden

### Beheer geselecteerde item (s)

U kunt de geselecteerde item (s) bedienen met behulp van de `default-value` prop of de `v-model` richtlijn.

::component-example
---
name: 'tree-model-value-example'
collapse: true
props:
  class: 'w-60'
---
::

::tip
Gebruik de `get-key` prop om de functie te wijzigen die wordt gebruikt om de unieke sleutel van elk item te krijgen wanneer een `v-model` of `default-value` wordt geleverd.
::

Als u wilt voorkomen dat een item wordt geselecteerd, kunt u de eigenschap `item.onSelect()`{lang="ts-type"} of de algemene `select`-gebeurtenis gebruiken:

::component-example
---
name: 'tree-on-select-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
Hiermee kunt u een bovenliggend item uitbreiden of samenvouwen zonder het te selecteren.
::

### Control uitgebreide items

U kunt de uitgebreide items bedienen met behulp van de `default-expanded` prop of de `v-model` richtlijn.

::component-example
---
name: 'tree-expanded-example'
collapse: true
props:
  class: 'w-60'
---
::

Als u wilt voorkomen dat een item wordt uitgebreid, kunt u de eigenschap `item.onToggle()`{lang="ts-type"} of de algemene `toggle`-gebeurtenis gebruiken:

::component-example
---
name: 'tree-on-toggle-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
Hiermee kunt u een bovenliggend item selecteren zonder de kinderen uit te breiden of in te storten.
::

### Met checkbox in items: badge{label="4.1+" class="align-text-top"}

U kunt de `item-leading`-sleuf gebruiken om een [Checkbox](/docs/components/checkbox) aan de items toe te voegen.
Gebruik de `multiple`, `propagate-select` en `bubble-select` rekwisieten om multi-selectie met ouder-kind relatie mogelijk te maken en de `select` en `toggle` gebeurtenissen om de geselecteerde en uitgebreide status van de items te regelen.

::component-example
---
name: 'tree-checkbox-items-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
Dit voorbeeld gebruikt de `as` prop om de items te wijzigen van `button` naar `div` als de [`Checkbox`](/docs/components/checkbox) wordt ook weergegeven als een `button`.
::

### Met slepen en neerzetten: badge{label="4.1+" class="align-text-top"}

Gebruik de [`useSortable`](https://vueuse.org/integrations/useSortable/) van [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) om slepen en neerzetten op de boom mogelijk te maken. Deze integratie omvat [Sortable.js](https://sortablejs.github.io/Sortable/) om een naadloze slepen-en-neerzetten-ervaring te bieden.

::component-example
---
prettier: true
collapse: true
name: 'tree-drag-and-drop-example'
---
::

::note
Dit voorbeeld stelt de `nested` prop in op `false` om een platte lijst met items te hebben, zodat de items kunnen worden gesleept en neergezet.
::

### Met virtualisatie: badge{label="4.1+" class="align-text-top"}

Gebruik de `virtualize` prop om virtualisatie in te schakelen voor grote lijsten als een boolean of een object met opties zoals `{ estimateSize: 32, overscan: 12 }`.

::warning
Wanneer virtualisatie is ingeschakeld, wordt de boomstructuur afgeplat, vergelijkbaar met het instellen van de `nested` prop op `false`.
::

::component-example
---
prettier: true
name: 'tree-virtualize-example'
props:
  class: 'w-60'
---
::

### Met aangepaste sleuf

Gebruik de eigenschap `slot` om een specifiek item aan te passen.

U krijgt toegang tot de volgende slots:

- `#{{ item.slot }}-wrapper`{lang="ts-type"}
- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

::component-example
---
name: 'tree-custom-slot-example'
collapse: true
props:
  class: 'w-60'
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

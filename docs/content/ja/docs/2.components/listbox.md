---
description: 検索、仮想化、リッチアイテムレンダリングを備えたアイテムの選択可能なリスト。
category: form
keywords:
  - option list
  - picker
  - selection
links:
  - label: Listbox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Listbox.vue
---

## 使用法

Listboxの値を制御するには`v-model`ディレクティブを使って、状態を制御する必要がないときには`default-value`プロパティを使って初期値を設定します。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - modelValue.label
  - modelValue.icon
  - modelValue.value
  - items
external:
  - items
  - modelValue
externalTypes:
  - ListboxItem[]
props:
  modelValue:
    label: 'France'
    icon: 'i-lucide-map-pin'
    value: 'FR'
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
    - label: 'Netherlands'
      icon: 'i-lucide-map-pin'
      value: 'NL'
    - label: 'Poland'
      icon: 'i-lucide-map-pin'
      value: 'PL'
    - label: 'Belgium'
      icon: 'i-lucide-map-pin'
      value: 'BE'
    - label: 'Portugal'
      icon: 'i-lucide-map-pin'
      value: 'PT'
    - label: 'Austria'
      icon: 'i-lucide-map-pin'
      value: 'AT'
    - label: 'Sweden'
      icon: 'i-lucide-map-pin'
      value: 'SE'
  class: 'w-full'
---
::

### アイテム

`items`プロパティを次のプロパティを持つオブジェクトの配列として使用します。

- `label?: string`{lang="ts-type"}
- [`description?: string`{lang="ts-type"}](#with-description-in-items)
- [`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type)
- [`icon?: string`{lang="ts-type"}](#with-icon-in-items)
- [`avatar?: AvatarProps`{lang="ts-type"}](#with-avatar-in-items)
- [`chip?: ChipProps`{lang="ts-type"}](#with-chip-in-items)
- `disabled?: boolean`{lang="ts-type"}
- `onSelect?: (e: Event) => void`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, ... }`{lang="ts-type"}

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
  - ListboxItem[]
props:
  items:
    - label: 'France'
      description: 'The Hexagon'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      description: 'The Federal Republic'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      description: 'The Boot'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      description: 'The Bull Skin'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

`items`プロパティに配列の配列を渡して、項目の分離グループを表示することもできます。

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
  - ListboxItem[][]
props:
  items:
    - - label: 'France'
        icon: 'i-lucide-map-pin'
        value: 'FR'
      - label: 'Germany'
        icon: 'i-lucide-map-pin'
        value: 'DE'
      - label: 'Italy'
        icon: 'i-lucide-map-pin'
        value: 'IT'
    - - label: 'Brazil'
        icon: 'i-lucide-map-pin'
        value: 'BR'
      - label: 'Argentina'
        icon: 'i-lucide-map-pin'
        value: 'AR'
  class: 'w-full'
---
::

### 複数

複数の項目を選択できるようにするには`multiple`プロパティを使用します。有効にすると、`v-model`は配列になります。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
  - multiple
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  multiple: true
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### Valueキー

`value-key`プロパティを使用することで、オブジェクト全体ではなく、オブジェクトの単一プロパティをバインドすることができます。デフォルトは`undefined`です。

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
  - ListboxItem[]
props:
  modelValue: 'FR'
  valueKey: 'value'
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### Filter

`filter`プロパティを使用してフィルター入力を表示するか、オブジェクトを渡して[Input](/docs/components/input)コンポーネントをカスタマイズします。デフォルトは`false`です。

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
  - ListboxItem[]
props:
  filter:
    placeholder: 'Filter...'
    icon: 'i-lucide-search'
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
    - label: 'Netherlands'
      icon: 'i-lucide-map-pin'
      value: 'NL'
    - label: 'Poland'
      icon: 'i-lucide-map-pin'
      value: 'PL'
  class: 'w-full'
---
::

### 選択したアイコン

`selected-icon`プロパティを使用して、アイテムが選択されたときにアイコンをカスタマイズします。デフォルトは`i-lucide-check`です。

::component-code
---
collapse: true
ignore:
  - items
  - modelValue
  - valueKey
  - class
external:
  - items
  - modelValue
externalTypes:
  - ListboxItem[]
props:
  modelValue: 'FR'
  selectedIcon: 'i-lucide-flame'
  valueKey: 'value'
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### サイズ

リストボックスのサイズを変更するには`size`プロパティを使用します。

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
  - ListboxItem[]
props:
  size: xl
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### 読み込み中

`loading`プロパティを使用してロードインジケータを表示します。`loading-icon`プロパティを使用してアイコンをカスタマイズします。

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
  - ListboxItem[]
props:
  loading: true
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
  class: 'w-full'
---
::

### 無効

`disabled`プロパティを使用して、Listboxとのユーザ操作を防止します。

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
  - ListboxItem[]
props:
  disabled: true
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

## 例

###  With items type

`separator`とともに`type`プロパティを使用してアイテム間の区切り文字を表示したり、`label`を使用してラベルを表示したりできます。

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
  - ListboxItem[][]
props:
  items:
    - - type: 'label'
        label: 'Fruits'
      - label: 'Apple'
      - label: 'Banana'
      - label: 'Blueberry'
      - label: 'Grapes'
      - label: 'Pineapple'
    - - type: 'label'
        label: 'Vegetables'
      - label: 'Aubergine'
      - label: 'Broccoli'
      - label: 'Carrot'
      - label: 'Courgette'
      - label: 'Leek'
  class: 'w-full'
---
::

::note
`label`アイテムをグループ見出しとして使用する場合は、検索時にラベルがグループとともにフィルタリングされるように配列の配列を渡します。
::

### アイテムにアイコン付き

`icon`プロパティを使用して、アイテム内に[Icon](/docs/components/icon)を表示できます。

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
  - ListboxItem[]
props:
  items:
    - label: 'Backlog'
      icon: 'i-lucide-circle-help'
      value: 'backlog'
    - label: 'Todo'
      icon: 'i-lucide-circle-plus'
      value: 'todo'
    - label: 'In Progress'
      icon: 'i-lucide-circle-arrow-up'
      value: 'in_progress'
    - label: 'Done'
      icon: 'i-lucide-circle-check'
      value: 'done'
  class: 'w-full'
---
::

### アイテム内のアバター付き

`avatar`プロパティを使用して、アイテム内に[Avatar](/docs/components/avatar)を表示できます。

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
  - ListboxItem[]
props:
  items:
    - label: 'benjamincanac'
      avatar:
        src: 'https://github.com/benjamincanac.png'
    - label: 'HugoRCD'
      avatar:
        src: 'https://github.com/HugoRCD.png'
    - label: 'atinux'
      avatar:
        src: 'https://github.com/atinux.png'
    - label: 'romhml'
      avatar:
        src: 'https://github.com/romhml.png'
  class: 'w-full'
---
::

### Withチップinアイテム

`chip`プロパティを使用して、[Chip](/docs/components/chip)をアイテム内に表示できます。

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
  - ListboxItem[]
props:
  items:
    - label: 'bug'
      chip:
        color: 'error'
    - label: 'feature'
      chip:
        color: 'success'
    - label: 'enhancement'
      chip:
        color: 'info'
  class: 'w-full'
---
::

### アイテムの説明付き

`description`プロパティを使用して、ラベルの下に追加のテキストを表示できます。

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
  - ListboxItem[]
props:
  items:
    - label: 'France'
      description: 'The Hexagon'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      description: 'The Federal Republic'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      description: 'The Boot'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      description: 'The Bull Skin'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### 選択項目の制御

`default-value`プロパティまたは`v-model`ディレクティブを使用して選択した項目を制御できます。

::component-example
---
name: 'listbox-model-value-example'
collapse: true
---
::

### Control検索語

`v-model:search-term`ディレクティブを使用して検索語を制御します。

::component-example
---
name: 'listbox-search-term-example'
---
::

### 無視フィルタ付き

内部検索を無効にし、独自の検索ロジックを使用するには、`ignore-filter`プロパティを`true`に設定します。

::component-example
---
collapse: true
name: 'listbox-ignore-filter-example'
---
::

::note
この例では[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)を使用してAPI呼び出しをデバウンスします。
::

### フィルターフィールド付き

`filter-fields`プロパティをフィルターするフィールドの配列とともに使用します。デフォルトは`[labelKey]`です。

::component-example
---
collapse: true
name: 'listbox-filter-fields-example'
---
::

### 仮想化

`virtualize`プロパティを使用して、大きなリストをブール値または`{ estimateSize: 32, overscan: 12 }`のようなオプションを持つオブジェクトとして仮想化できます。

::component-example
---
name: 'listbox-virtualize-example'
collapse: true
---
::

### 転送リストとして

転送リストパターンを構築するには、[Button](/docs/components/button)コントロールを使用して2つのリストボックスコンポーネントを構成できます。

::component-example
---
name: 'listbox-transfer-list-example'
collapse: true
---
::

## API

### Props

:component-props

### スロット

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog

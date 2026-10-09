---
title: 選択メニュー
description: 高度な検索可能な選択要素。
category: form
keywords:
  - combobox
  - multi select
  - filterable select
links:
  - label: コンボボックス
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/SelectMenu.vue
---

## 使用法

SelectMenuの値を制御するには`v-model`ディレクティブを使用してください。状態を制御する必要がない場合は`default-value`プロパティを使用して初期値を設定します。

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
検索機能と複数選択機能を提供するReka UIの[`Combobox`](https://reka-ui.com/docs/components/combobox)コンポーネントを利用するには、[`Select`](/docs/components/select)上でこれを使用します。
::

::note
このコンポーネントは[`InputMenu`](/docs/components/input-menu)に似ていますが、Inputの代わりにSelectを使用し、メニュー内で検索します。
::

### アイテム

`items`プロパティを文字列、数値、ブール値の配列として使用します。

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

次のプロパティを持つオブジェクトの配列を渡すこともできます：

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
[`Select`](/docs/components/select)コンポーネントとは異なり、SelectMenuはデフォルトでオブジェクト全体が`v-model`ディレクティブまたは`default-value`プロパティに渡されることを期待しています。
::

`items`プロパティに配列の配列を渡して、項目の分離グループを表示することもできます。

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
`model-value`がオブジェクトの場合、参照の代わりにフィールドでオブジェクトを比較するには、`by`プロパティを使用します。
::

### 複数

複数選択を許可するには`multiple`プロパティを使用します。選択された項目はトリガー内でコンマで区切られます。

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
`default-value`プロパティまたは`v-model`ディレクティブに配列を渡してください。
::

### Placeholder

`placeholder`プロパティを使用してプレースホルダーテキストを設定します。

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

### 検索入力

`search-input`プロパティを使用して、検索入力（`false`値）をカスタマイズまたは非表示にします。

[Input](/docs/components/input)コンポーネントの任意のプロパティを渡してカスタマイズできます。

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
`search-input`プロパティを`false`に設定すると、検索入力を非表示にできます。
::

::note
`:search-input="{ autofocus: false }"`を使用して、メニューが開いたときに検索入力がフォーカスされないようにします。
::

### コンテンツ

`content`プロパティを使用して、`align`や`side`など、SelectMenuコンテンツのレンダリング方法を制御します。

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

### Arrow

`arrow`プロパティを使用して、SelectMenuに矢印を表示します。

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

### カラー

SelectMenuがフォーカスされたときにリングの色を変更するには、`color`プロパティを使用します。

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
`highlight`プロパティはフォーカス状態を表示するために使用されます。バリデーションエラーが発生したときに内部で使用されます。
::

### Variant

`variant`プロパティを使用して、SelectMenuのバリアントを変更します。

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

### サイズ

`size`プロパティを使用して、SelectMenuのサイズを変更します。

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

### Icon

`icon`プロパティを使用して、[Icon](/docs/components/icon)をSelectMenu内に表示します。

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

### Trailingアイコン

`trailing-icon`プロパティを使用して、末尾の[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-chevron-down`です。

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
このアイコンは`app.config.ts`の`ui.icons.chevronDown`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.chevronDown`キーでグローバルにカスタマイズできます。
:::
::

### 選択したアイコン

`selected-icon`プロパティを使用して、アイテムが選択されたときにアイコンをカスタマイズします。デフォルトは`i-lucide-check`です。

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
このアイコンは`app.config.ts`の`ui.icons.check`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.check`キーでグローバルにカスタマイズできます。
:::
::

### クリアbadge{label="4.4+" class="align-text-top"}

値が選択されたときにクリアボタンを表示するには、`clear`プロパティを使用します。

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

### アイコンをクリアbadge{label="4.4+" class="align-text-top"}

`clear-icon`プロパティを使用して、クリアボタン[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

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
このアイコンは`app.config.ts`の`ui.icons.close`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.close`キーでグローバルにカスタマイズできます。
:::
::

### アバター

`avatar`プロパティを使用して、[Avatar](/docs/components/avatar)をSelectMenu内に表示します。

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

### Loading

`loading`プロパティを使用して、SelectMenuにロードアイコンを表示します。

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

### Loadingアイコン

`loading-icon`プロパティを使用してロードアイコンをカスタマイズします。デフォルトは`i-lucide-loader-circle`です。

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
このアイコンは`app.config.ts`の`ui.icons.loading`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.loading`キーでグローバルにカスタマイズできます。
:::
::

### 無効

`disabled`プロパティを使用してSelectMenuを無効にします。

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

## サンプル

### With items type

`separator`プロパティを`type`で使用してアイテム間の区切り文字を表示したり、`label`でラベルを表示したりできます。

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
`label`アイテムをグループ見出しとして使用する場合は、検索時にラベルがグループとともにフィルタリングされるように配列の配列を渡します。
::

### アイテムにアイコン付き

`icon`プロパティを使用して、[Icon](/docs/components/icon)をアイテム内に表示できます。

::component-example
---
collapse: true
name: 'select-menu-items-icon-example'
---
::

::tip
`#leading`スロットを使用して、選択したアイコンを表示することもできます。
::

### アイテムにアバター付き

`avatar`プロパティを使用して、アイテム内に[Avatar](/docs/components/avatar)を表示できます。

::component-example
---
collapse: true
name: 'select-menu-items-avatar-example'
---
::

::tip
`#leading`スロットを使用して、選択したアバターを表示することもできます。
::

### Withチップinアイテム

`chip`プロパティを使用して、アイテム内に[Chip](/docs/components/chip)を表示できます。

::component-example
---
collapse: true
name: 'select-menu-items-chip-example'
---
::

::note
この例では、`#leading`スロットを使用して選択したチップを表示します。
::

### Controlオープンステート

オープン状態は`default-open`プロパティまたは`v-model:open`ディレクティブを使用して制御できます。

::component-example
---
name: 'select-menu-open-example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd{value="O"}を押してSelectMenuを切り替えることができます。
::

### Control検索語

`v-model:search-term`ディレクティブを使用して検索語を制御します。

::component-example
---
name: 'select-menu-search-term-example'
---
::

### 回転アイコン付き

SelectMenuの開いた状態を示す回転アイコンの例を示します。

::component-example
---
name: 'select-menu-icon-example'
---
::

### With create item

`create-item`プロパティを使用して、ユーザーが定義済みオプションにないカスタム値を追加できるようにします。

::component-example
---
collapse: true
name: 'select-menu-create-item-example'
---
::

::note
createオプションは、デフォルトで一致するものが見つからない場合を表示します。`always`に設定すると、似たような値が存在しても表示されます。
::

::tip{to="#emits"}
`@create`イベントを使用してアイテムの作成を処理します。イベントとアイテムを引数として受け取ります。
::

### フェッチされたアイテム

APIから項目を取得し、SelectMenuで使用できます。

::component-example
---
collapse: true
name: 'select-menu-fetch-example'
---
::

::note
この例では、`useLazyFetch`と`immediate: false`を使用して、メニューが開いたときにのみデータをフェッチします。
::

### 無視フィルタ付き

内部検索を無効にし、独自の検索ロジックを使用するには、`ignore-filter`プロパティを`true`に設定します。

::component-example
---
collapse: true
name: 'select-menu-ignore-filter-example'
---
::

::note
この例では、[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)を使用してAPI呼び出しをデバウンスします。フェッチは`immediate: false`で延期されるため、メニューが開くまでリクエストは行われません。
::

### フィルターフィールド付き

`filter-fields`プロパティをフィルターするフィールドの配列とともに使用します。デフォルトは`[labelKey]`です。

::component-example
---
collapse: true
name: 'select-menu-filter-fields-example'
---
::

::note
この例では、`useLazyFetch`と`immediate: false`を使用して、メニューが開いたときにのみデータをフェッチします。
::

### 仮想化badge{label="4.1+" class="align-text-top"}

`virtualize`プロパティを使用して、大きなリストをブール値または`{ estimateSize: 32, overscan: 12 }`のようなオプションを持つオブジェクトとして仮想化できます。

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
有効にすると、Reka UIの制限により、すべてのグループが1つのリストにフラット化されます。
::

::component-example
---
prettier: true
name: 'select-menu-virtualize-example'
---
::

### 無限スクロールbadge{label="4.4+" class="align-text-top"}

[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/)コンポーザブルを使用して、ユーザーがスクロールするにつれてより多くのデータをロードできます。

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
この例では`useLazyFetch`と`immediate: false`を使用しています。
::

### 全コンテンツ幅

`ui.content`スロットに`min-w-fit`クラスを追加することで、コンテンツをアイテムの幅いっぱいに展開できます。

::component-example
---
name: 'select-menu-content-width-example'
collapse: true
---
::

::tip
`app.config.ts`でコンテンツ幅をグローバルに変更することもできます。

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

### カントリーピッカーとして

SelectMenuは遅延読み込みの国別ピッカーとして使用できます。国はメニューが最初に開かれたときにのみ取得されます。

::component-example
---
collapse: true
name: 'select-menu-countries-example'
---
::

::note
この例では、`useLazyFetch`と`immediate: false`を使用して、メニューを最初に開いたときにのみ国をロードします。
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
このコンポーネントはすべてのネイティブ`<button>` HTML属性もサポートします。
::

### スロット

:component-slots

### Emits

:component-emits

### Expose

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `triggerRef`{lang="ts-type"}| `Ref<HTMLButtonElement \| null>`{lang="ts-type"}|
| `viewportRef`{lang="ts-type"}| `Ref<HTMLDivElement \| null>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog

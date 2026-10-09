---
title: 入力メニュー
description: リアルタイムの提案を含むオートコンプリート入力。
category: form
keywords:
  - combobox
  - typeahead
  - autosuggest
links:
  - label: コンボボックス
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: オートコンプリート
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/autocomplete
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputMenu.vue
---

## 使用法

InputMenuの値を制御するには`v-model`ディレクティブを使用してください。状態を制御する必要がない場合は`default-value`プロパティを使用して初期値を設定します。

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
これを[`Input`](/docs/components/input)上で使用すると、オートコンプリート機能を提供するReka UIの[`Combobox`](https://reka-ui.com/docs/components/combobox)コンポーネントを利用できます。
::

::note
このコンポーネントは[`SelectMenu`](/docs/components/select-menu)に似ていますが、Selectの代わりにInputを使用しています。
::

### アイテム

`items`プロパティを文字列、数値、ブール値の配列として使用します。

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

次のプロパティを持つオブジェクトの配列を渡すこともできます：

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

`items`プロパティに配列の配列を渡して、項目の分離グループを表示することもできます。

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

### Valueキー

`value-key` propを使用することで、オブジェクト全体ではなく、オブジェクトの単一プロパティをバインドすることができます。デフォルトは`undefined`です。

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
`model-value`がオブジェクトの場合、参照の代わりにフィールドでオブジェクトを比較するには、`by`プロパティを使用します。
::

### 複数

`multiple`プロパティを使用して複数選択を許可し、選択された項目がタグとして表示されます。

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
`default-value`プロパティまたは`v-model`ディレクティブに配列を渡してください。
::

### Deleteアイコン

`multiple`では、`delete-icon`プロパティを使用して、タグ内の削除[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

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
このアイコンは`app.config.ts`の`ui.icons.close`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.close`キーでグローバルにカスタマイズできます。
:::
::

### Placeholder

`placeholder`プロパティを使用してプレースホルダーテキストを設定します。

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

### モードbadge{label="4.8+" class="align-text-top"}

`mode`プロパティを`autocomplete`に設定して、InputMenuを提案付きの自由形式テキスト入力に変換します。`modelValue`は選択された項目の代わりに入力テキスト`string`になります。

::component-example
---
name: 'input-menu-mode-example'
---
::

::caution
`mode`が`autocomplete`の場合、`multiple`、`by`、`resetSearchTermOnSelect`、`resetModelValueOnClear`は適用されません。
::

::tip
一致する提案がない場合、`content.hideWhenEmpty`プロパティを使用してメニューを非表示にします。
::

### コンテンツ

`content`プロパティを使用して、`align`や`side`など、InputMenuコンテンツのレンダリング方法を制御します。

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

### Arrow

`arrow`プロパティを使用して、InputMenuに矢印を表示します。

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

### Color

`color`プロパティを使用して、InputMenuがフォーカスされたときにリングの色を変更します。

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
`highlight`プロパティはフォーカス状態を表示するために使用されます。バリデーションエラーが発生したときに内部で使用されます。
::

### Variant

`variant`プロパティを使用して、InputMenuのバリアントを変更します。

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

### サイズ

`size`プロパティを使用して、InputMenuのサイズを変更します。

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

### Icon

`icon`プロパティを使用して、[Icon](/docs/components/icon)をInputMenu内に表示します。

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

### Trailingアイコン

`trailing-icon`プロパティを使用して、末尾の[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-chevron-down`です。

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

### アイコンをクリアbadge{label="4.4+" class="align-text-top"}

`clear-icon`プロパティを使用して、クリアボタン[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

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
このアイコンは`app.config.ts`の`ui.icons.close`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.close`キーでグローバルにカスタマイズできます。
:::
::

### アバター

`avatar`プロパティを使用して、[Avatar](/docs/components/avatar)をInputMenu内に表示します。

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

### 読み込み中

`loading`プロパティを使用して、InputMenuにロードアイコンを表示します。

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

### Loadingアイコン

`loading-icon`プロパティを使用してロードアイコンをカスタマイズします。デフォルトは`i-lucide-loader-circle`です。

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
このアイコンは`app.config.ts`の`ui.icons.loading`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.loading`キーでグローバルにカスタマイズできます。
:::
::

### 無効

`disabled`プロパティを使用してInputMenuを無効にします。

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

## サンプル

###  With items type

`separator`プロパティを`type`で使用してアイテム間の区切り文字を表示したり、`label`でラベルを表示したりできます。

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
`label`アイテムをグループ見出しとして使用する場合は、検索時にラベルがグループとともにフィルタリングされるように配列の配列を渡します。
::

### アイテム内のアイコン付き

`icon`プロパティを使用して、アイテム内に[Icon](/docs/components/icon)を表示できます。

::component-example
---
collapse: true
name: 'input-menu-items-icon-example'
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
name: 'input-menu-items-avatar-example'
---
::

::tip
`#leading`スロットを使用して、選択したアバターを表示することもできます。
::

### Withチップinアイテム

`chip`プロパティを使用して、[Chip](/docs/components/chip)をアイテム内に表示できます。

::component-example
---
collapse: true
name: 'input-menu-items-chip-example'
---
::

::note
この例では、`#leading`スロットを使用して選択したチップを表示します。
::

###  Controlオープンステート

オープン状態は`default-open`プロパティまたは`v-model:open`ディレクティブを使用して制御できます。

::component-example
---
name: 'input-menu-open-example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd{value="O"}を押してInputMenuを切り替えることができます。
::

### フォーカス時のオープン状態を制御

`open-on-focus`または`open-on-click`プロパティを使用して、入力にフォーカスまたはクリックしたときにメニューを開くことができます。

::component-example
---
name: 'input-menu-open-focus-example'
---
::

### Control検索語

検索語を制御するには`v-model:search-term`ディレクティブを使用します。

::component-example
---
name: 'input-menu-search-term-example'
---
::

### 回転アイコン付き

InputMenuの開いている状態を示す回転アイコンの例を示します。

::component-example
---
name: 'input-menu-icon-example'
---
::

### With create item

`create-item`プロパティを使用して、ユーザーが定義済みオプションにないカスタム値を追加できるようにします。

::component-example
---
collapse: true
name: 'input-menu-create-item-example'
---
::

::note
createオプションは、デフォルトで一致するものが見つからない場合を表示します。`always`に設定して、類似した値が存在する場合でも表示します。
::

::tip{to="#emits"}
`@create`イベントを使用して、アイテムの作成を処理します。イベントとアイテムを引数として受け取ります。
::

### フェッチされたアイテム

APIから項目を取得し、InputMenuで使用できます。

::component-example
---
collapse: true
name: 'input-menu-fetch-example'
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
name: 'input-menu-ignore-filter-example'
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
name: 'input-menu-filter-fields-example'
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
name: 'input-menu-virtualize-example'
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
name: 'input-menu-infinite-scroll-example'
---
::

::note
この例では`useLazyFetch`と`immediate: false`を使用しています。
::

### 全内容幅

`ui.content`スロットに`min-w-fit`クラスを追加することで、コンテンツをアイテムの幅いっぱいに展開できます。

::component-example
---
name: 'input-menu-content-width-example'
collapse: true
---
::

::tip
`app.config.ts`でコンテンツ幅をグローバルに変更することもできます。

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

### カントリーピッカーとして

InputMenuは遅延読み込みで国別ピッカーとして使用できます。国はメニューが最初に開かれたときにのみ取得されます。

::component-example
---
collapse: true
name: 'input-menu-countries-example'
---
::

::note
この例では、`useLazyFetch`と`immediate: false`を使用して、メニューを最初に開いたときにのみ国をロードします。
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
このコンポーネントはすべてのネイティブ`<input>` HTML属性もサポートします。
::

### スロット

:component-slots

### Emits

:component-emits

### Expose

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `inputRef`{lang="ts-type"}| `Ref<HTMLInputElement \| null>`{lang="ts-type"}|
| `viewportRef`{lang="ts-type"}| `Ref<HTMLDivElement \| null>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog

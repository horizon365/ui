---
description: オプションのリストから選択するselect要素。
category: form
keywords:
  - dropdown
  - picker
links:
  - label: 選択
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/select
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Select.vue
---

## 使用法

Selectプロパティの値を制御するには`v-model`ディレクティブを使用して、状態を制御する必要がない場合は`default-value`プロパティの初期値を設定します。

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
オブジェクトを使用する場合は、`v-model`ディレクティブまたは`default-value`プロパティでオブジェクトの`value`プロパティを参照する必要があります。
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

値を設定するために使用するプロパティは、`value-key`プロパティを使用して変更できます。デフォルトは`value`です。

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

### コンテンツ

`content`プロパティを使用して、`align`や`side`など、Selectコンテンツのレンダリング方法を制御します。

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
これらのオプションは`content.position`が`popper`（デフォルト）の場合にのみ適用されます。
::

### ポジションbadge{label="4.7+" class="align-text-top"}

`content.position`プロパティを使用して、Selectコンテンツがトリガーに対してどのように配置されるかを制御します。デフォルトは`popper`で、他のポップオーバーと同様にコンテンツを配置します。コンテンツを選択したアイテムに合わせるには、`item-aligned`に設定します（macOSネイティブメニューと同様）。

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

### Arrow

`arrow`プロパティを使用して、Selectに矢印を表示します。

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

### Color

Selectフォーカス時にリングの色を変更するには、`color`プロパティを使用します。

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
`highlight`プロパティはフォーカスの状態を表示するために使用されます。バリデーションエラーが発生したときに内部で使用されます。
::

### Variant

`variant`プロパティを使用してSelectのバリアントを変更します。

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

`size`プロパティを使用してSelectのサイズを変更します。

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

`icon`プロパティを使用して、Select内に[Icon](/docs/components/icon)を表示します。

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

### アバター

`avatar`プロパティを使用して、Select内に[Avatar](/docs/components/avatar)を表示します。

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

`loading`プロパティを使用して、Selectにロードアイコンを表示します。

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

### Loading Icon

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

`disabled`プロパティを使用してSelectを無効にします。

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

`type`プロパティを`separator`とともに使用してアイテム間の区切り文字を表示したり、`label`を使用してラベルを表示したりできます。

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

### アイテムにアイコン付き

`icon`プロパティを使用して、アイテム内に[Icon](/docs/components/icon)を表示できます。

::component-example
---
collapse: true
name: 'select-items-icon-example'
---
::

::note
この例では、選択されたアイテムの`value`プロパティからアイコンが計算されます。
::

::tip
`#leading`スロットを使用して、選択したアイコンを表示することもできます。
::

### アイテムにアバター付き

`avatar`プロパティを使用して、アイテム内に[Avatar](/docs/components/avatar)を表示できます。

::component-example
---
collapse: true
name: 'select-items-avatar-example'
---
::

::note
この例では、選択されたアイテムの`value`プロパティからアバターが計算されます。
::

::tip
`#leading`スロットを使用して、選択したアバターを表示することもできます。
::

### Withチップinアイテム

`chip`プロパティを使用して、アイテム内に[Chip](/docs/components/chip)を表示できます。

::component-example
---
collapse: true
name: 'select-items-chip-example'
---
::

::note
この例では、`#leading`スロットを使用して選択したチップを表示します。
::

### Controlオープンステート

オープン状態は`default-open`プロパティまたは`v-model:open`ディレクティブを使用して制御できます。

::component-example
---
name: 'select-open-example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd{value="O"}を押して選択を切り替えることができます。
::

### 回転アイコン付き

選択の開いた状態を示す回転アイコンの例を以下に示します。

::component-example
---
name: 'select-icon-example'
---
::

### フェッチされたアイテム

APIから項目を取得し、Selectで使用できます。

::component-example
---
name: 'select-fetch-example'
collapse: true
---
::

::note
この例では、`useLazyFetch`と`immediate: false`を使用して、メニューが開いたときにのみデータをフェッチします。
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
name: 'select-infinite-scroll-example'
---
::

::note
この例では`useLazyFetch`と`immediate: false`を使用しています。
::

### 全コンテンツ幅

`ui.content`スロットに`min-w-fit`クラスを追加することで、コンテンツをアイテムの幅いっぱいに展開できます。

::component-example
---
name: 'select-content-width-example'
collapse: true
---
::

::tip
`app.config.ts`でコンテンツ幅をグローバルに変更することもできます：

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

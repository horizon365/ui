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

`v-model`ディレクティブを使用してInputMenuの値を制御し、状態を制御する必要がない場合は`default-value` propを使用して初期値を設定します。

::component-code
---
きれい真
無視
  -  modelValue
  - アイテム
外部
  - アイテム
  -  modelValue
小道具
  modelValue 'Backlog'
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
---
::

::tip
これを[`Input`](/docs/components/input)[`Combobox`](https://reka-ui.com/docs/components/combobox))で使用して、オートコンプリート機能を提供します。
::

::note
このコンポーネントは[`SelectMenu`](/docs/components/select-menu)に似ていますが、Selectの代わりにInputを使用しています。
::

### アイテム

`items` propを文字列、数値、ブール値の配列として使用します。

::component-code
---
きれい真
無視
  -  modelValue
  - アイテム
外部
  - アイテム
  -  modelValue
小道具
  modelValue 'Backlog'
  アイテム
    -  Backlog
    -  Todo
    - 進行中
    - 完了
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
無視
  -  modelValue.label
  - アイテム
外部
  - アイテム
  -  modelValue
externalTypes
  - 入力メニュー []
小道具
  modelValue
    レーベル'Todo'
  アイテム
    -  label Backlog
    -  label 'Todo'
    -  label '進行中'
    -  label 'Done'
---
::

`items`プロパティに配列の配列を渡して、項目のグループを分離して表示することもできます。

::component-code
---
きれい真
無視
  -  modelValue
  - アイテム
外部
  - アイテム
  -  modelValue
小道具
  modelValue 'Apple'
  アイテム
    - —アップル
      - バナナ
      - ブルーベリー
      - ブドウ
      - パイナップル
    - —Aubergine
      - ブロッコリー
      - キャロット
      - クルジェット
      - ネギ
---
::

### 値キー

`value-key` propを使用して、オブジェクト全体ではなく、オブジェクトの単一のプロパティをバインドすることができます。デフォルトは`undefined`です。

::component-code
---
崩壊真
無視
  -  modelValue
  -  valueKey
  - アイテム
外部
  - アイテム
  -  modelValue
externalTypes
  - 入力メニュー []
小道具
  modelValue 'todo'
  valueKey 'id'
  アイテム
    -  label Backlog
      id 'backlog'
    -  label 'Todo'
      id 'todo'
    -  label '進行中'
      id 'in_progress'
    - ラベル'完了'
      id '完了'
---
::

::tip
`model-value`がオブジェクトの場合、参照の代わりにフィールドでオブジェクトを比較するには、`by`プロパティを使用します。
::

### 複数

`multiple`プロパティを使用して複数選択を許可すると、選択された項目がタグとして表示されます。

::component-code
---
きれい真
無視
  -  modelValue
  - アイテム
  - 複数
外部
  - アイテム
  -  modelValue
小道具
  modelValue
    -  Backlog
    -  Todo
  複数true
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
---
::

::caution
`default-value` propまたは`v-model`ディレクティブに配列を渡してください。
::

### アイコンを削除

`multiple`では、`delete-icon`プロパティを使用して、タグ内の[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

::component-code
---
きれい真
無視
  -  modelValue
  - アイテム
  - 複数
外部
  - アイテム
  -  modelValue
小道具
  modelValue
    -  Backlog
    - 藤堂
  複数true
  deleteIcon 'i—lucide—trash'
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.close`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.close`キーの`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### プレースホルダー

プレースホルダーテキストを設定するには、`placeholder`プロパティを使用します。

::component-code
---
きれい真
無視
  - アイテム
外部
  - アイテム
小道具
  プレースホルダー 'ステータスの選択'
  アイテム
    -  Backlog
    -  Todo
    - 進行中
    - 完了
---
::

### モードbadge {label="4.8+" class="align-text-top"}

`mode`プロパティを`autocomplete`に設定して、InputMenuを提案付きの自由形式テキスト入力に変換します。`modelValue`は、選択された項目の代わりに入力テキスト（`string`）になります。

::component-example
---
名前'入力メニューモード例'
---
::

::caution
`mode`が`autocomplete`の場合、`multiple`、`by`、`resetSearchTermOnSelect`、`resetModelValueOnClear`は適用されません。
::

::tip
`content.hideWhenEmpty`プロパティを使用して、一致する提案がない場合メニューを非表示にします。
::

### コンテンツ

`content`プロパティを使用して、InputMenuコンテンツのレンダリング方法を制御します。たとえば、`align`や`side`などです。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
外部
  - アイテム
  -  modelValue
アイテム
  content.align:
    -  start
    - センター
    -  end
  content.side:
    - 右
    - 左
    -  top
    -  bottom
小道具
  modelValue 'Backlog'
  内容：
    整列センター
    側面底
    sideOffset 8
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
---
::

### アロー

`arrow`プロパティを使用して、InputMenuに矢印を表示します。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
  -  arrow
外部
  -  items
  -  modelValue
小道具
  modelValue 'Backlog'
  矢印true
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
---
::

### カラー

`color`プロパティを使用して、InputMenuがフォーカスされているときにリングの色を変更します。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
外部
  - アイテム
  -  modelValue
小道具
  modelValue 'Backlog'
  色ニュートラル
  ハイライト真
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
---
::

::note
`highlight`プロパティはフォーカス状態を表示するために使用されます。これはバリデーションエラーが発生したときに内部で使用されます。
::

### バリアント

`variant`プロパティを使用して、InputMenuのバリアントを変更します。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
外部
  - アイテム
  -  modelValue
小道具
  modelValue 'Backlog'
  色ニュートラル
  バリアント：微妙
  ハイライトfalse
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
---
::

### サイズ

`size`プロパティを使用して、InputMenuのサイズを変更します。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
外部
  - アイテム
  -  modelValue
小道具
  modelValue 'Backlog'
  サイズXL
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
---
::

### アイコン

`icon` propを使用して、[ Icon ](/docs/components/icon)をInputMenu内に表示します。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
外部
  - アイテム
  -  modelValue
小道具
  modelValue 'Backlog'
  アイコン'i—lucide'
  サイズMD
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
---
::

### トレーリングアイコン

`trailing-icon`プロパティを使用して、末尾の[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-chevron-down`です。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
外部
  - アイテム
  -  modelValue
小道具
  modelValue 'Backlog'
  trailingIcon 'i—lucide—arrow—down'
  サイズMD
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.chevronDown`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.chevronDown`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### 選択したアイコン

アイテムが選択されたときにアイコンをカスタマイズするには、`selected-icon`プロパティを使用します。デフォルトは`i-lucide-check`です。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
外部
  - アイテム
  -  modelValue
小道具
  modelValue 'Backlog'
  selectedIcon 'i—lucide—flame'
  サイズMD
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.check`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.check`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### クリアバッジ{label="4.4+" class="align-text-top"}

値が選択されたときにクリアボタンを表示するには、`clear`プロパティを使用します。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
外部
  - アイテム
  -  modelValue
アイテム
  クリア
    -  true
    -  false
小道具
  modelValue 'Backlog'
  クリア真
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
---
::

### クリアアイコン：バッジ{label="4.4+" class="align-text-top"}

`clear-icon`プロパティを使用して、クリアボタン[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
外部
  - アイテム
  -  modelValue
アイテム
  クリア
    -  true
    -  false
小道具
  modelValue 'Backlog'
  クリア真
  clearIcon 'i—lucide—trash'
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.close`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.close`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### アバター

`avatar` propを使用して、[ Avatar ](/docs/components/avatar)を入力メニュー内に表示します。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
  -  avatar.ローディング
外部
  - アイテム
  -  modelValue
小道具
  modelValue 'Nuxt'
  アバター
    https//github.com/nuxt.png
    読み込み怠惰
  アイテム
    -  Nuxt
    -  NuxtHub
    -  NuxtLabs
    -  Nuxtモジュール
    -  Nuxtコミュニティ
---
::

### ローディング

`loading`プロパティを使用して、InputMenuに読み込み中のアイコンを表示します。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
外部
  - アイテム
  -  modelValue
小道具
  modelValue 'Backlog'
  読み込み真
  トレーリングfalse
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
---
::

###  Loadingアイコン

読み込みアイコンをカスタマイズするには、`loading-icon`プロパティを使用します。デフォルトは`i-lucide-loader-circle`です。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
外部
  - アイテム
  -  modelValue
小道具
  modelValue 'Backlog'
  読み込み真
  loadingIcon 'i—lucide—loader'
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.loading`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.loading`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### 無効

`disabled`プロパティを使用して、InputMenuを無効にします。

::component-code
---
きれい真
無視
  - アイテム
  - プレースホルダー
外部
  - アイテム
小道具
  無効true
  プレースホルダー 'ステータスの選択'
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
---
::

## 例

### アイテムタイプ付き

`type`プロパティを`separator`とともに使用してアイテム間の区切り文字を表示したり、`label`を使用してラベルを表示したりできます。

::component-code
---
崩壊真
無視
  -  modelValue
  - アイテム
外部
  - アイテム
  -  modelValue
externalTypes
  - 入力メニュー []
小道具
  modelValue 'Apple'
  アイテム
    - —タイプ'label'
        ラベル'フルーツ'
      - アップル
      - バナナ
      - ブルーベリー
      - ブドウ
      - パイナップル
    - —タイプ'label'
        ラベル'野菜'
      -  Aubergine
      - ブロッコリー
      - キャロット
      - クルジェット
      - ネギ
---
::

::note
`label`アイテムをグループ見出しとして使用する場合は、検索時にラベルがグループとともにフィルタリングされるように配列の配列を渡します。
::

### アイテム内のアイコン付き

`icon`プロパティを使用して、アイテム内に[ Icon ](/docs/components/icon)を表示できます。

::component-example
---
崩壊真
名前'入力メニュー—items—icon—example'
---
::

::tip
`#leading`スロットを使用して、選択したアイコンを表示することもできます。
::

### アイテム内のアバター付き

`avatar`プロパティを使用して、アイテム内に[ Avatar ](/docs/components/avatar)を表示できます。

::component-example
---
崩壊真
名前'input—menu—items—avatar—example'
---
::

::tip
`#leading`スロットを使用して、選択したアバターを表示することもできます。
::

### アイテムのチップ付き

`chip`プロパティを使用して、アイテム内に[ Chip ](/docs/components/chip)を表示できます。

::component-example
---
崩壊真
名前'入力メニュー—items—chip—example'
---
::

::note
この例では、`#leading`スロットを使用して選択したチップを表示します。
::

###  Controlオープンステート

`default-open` propまたは`v-model:open`ディレクティブを使用してオープン状態を制御できます。

::component-example
---
名前'入力メニュー—open—example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd {value="O"}を押して入力メニューを切り替えることができます。
::

### フォーカスのオープン状態を制御

`open-on-focus`または`open-on-click` propsを使用して、入力がフォーカスされたりクリックされたりしたときにメニューを開くことができます。

::component-example
---
名前'input—menu—open—focus—example'
---
::

###  Control検索語

`v-model:search-term`ディレクティブを使用して検索語を制御します。

::component-example
---
名前'入力メニュー—検索用語—例'
---
::

### 回転アイコン付き

InputMenuの開いている状態を示す回転アイコンの例を示します。

::component-example
---
名前'入力メニュー—icon—example'
---
::

### 作成項目付き

`create-item`プロパティを使用して、ユーザーが定義済みオプションにないカスタム値を追加できるようにします。

::component-example
---
崩壊真
名前'入力メニュー—create—item—example'
---
::

::note
createオプションは、デフォルトで一致するものが見つからない場合を表示します。`always`に設定すると、似たような値が存在しても表示されます。
::

::tip{to="#emits"}
`@create`イベントを使用してアイテムの作成を処理します。イベントとアイテムを引数として受け取ります。
::

### 取得したアイテム

APIから項目を取得し、InputMenuで使用できます。

::component-example
---
崩壊真
名前'入力メニュー—fetch—example'
---
::

::note
この例では、`useLazyFetch`と`immediate: false`を使用して、メニューが開いたときにのみデータを取得し、ページ読み込み時に不要なAPI呼び出しを回避します。
::

### 無視フィルタ付き

`ignore-filter` propを`true`に設定して、内部検索を無効にして独自の検索ロジックを使用します。

::component-example
---
崩壊真
名前'入力メニュー—ignore—filter—example'
---
::

::note
この例では、[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)を使用してAPI呼び出しをデバウンスします。フェッチは`immediate: false`で延期されるため、メニューが開くまでリクエストは行われません。
::

### フィルターフィールド付き

`filter-fields`プロパティにフィルターをかけるフィールドの配列を使用します。デフォルトは`[labelKey]`です。

::component-example
---
崩壊真
名前'入力メニューフィルターフィールド例'
---
::

::note
この例では、`useLazyFetch`と`immediate: false`を使用して、メニューが開いたときにのみデータを取得し、ページ読み込み時に不要なAPI呼び出しを回避します。
::

### 仮想化の場合：badge {label="4.1+" class="align-text-top"}

`virtualize`プロパティを使用して、ブール値または`{ estimateSize: 32, overscan: 12 }`のようなオプションを持つオブジェクトとして大きなリストの仮想化を有効にします。

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
有効にすると、Reka UIの制限により、すべてのグループが1つのリストにフラット化されます。
::

::component-example
---
きれい真
名前'入力メニュー仮想化例'
---
::

### 無限スクロールbadge {label="4.4+" class="align-text-top"}

[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/)を使用して、ユーザーがスクロールするたびにさらにデータを読み込むことができます。

::component-example
---
きれい真
崩壊真
ハイライト
  -  41
  -  51
overflowHidden true
名前'input—menu—infinite—scroll—example'
---
::

::note
この例では、`useLazyFetch`と`immediate: false`を使用しているため、ユーザーがスクロールしたときにのみデータが読み込まれます。
::

### 全内容幅

`ui.content`スロットに`min-w-fit`クラスを追加することで、コンテンツを項目の幅いっぱいに展開できます。

::component-example
---
名前'input—menu—content—width'
崩壊真
---
::

::tip
また、`app.config.ts`でコンテンツの幅をグローバルに変更することもできます。

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
崩壊真
名前'入力メニュー—countries—example'
---
::

::note
この例では、メニューが最初に開かれたときにのみ国をロードするために、`useLazyFetch`と`immediate: false`を使用します。
::

##  API

###  Props

component—props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
このコンポーネントは、すべてのネイティブ`<input>` HTML属性もサポートします。
::

### スロット

コンポーネントスロット

### エミッツ

component—emits

### エクスポーズ

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `inputRef`{lang="ts-type"}| `Ref<HTMLInputElement \| null>`{lang="ts-type"}|
| `viewportRef`{lang="ts-type"}| `Ref<HTMLDivElement \| null>`{lang="ts-type"}|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog

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

Selectの値を制御するには`v-model`ディレクティブを使用し、状態を制御する必要がない場合は`default-value`プロパティを使用して初期値を設定します。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  modelValue
  - アイテム
  - クラス
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
  クラス'w—48'
---
::

### アイテム

`items` propを文字列、数値、ブール値の配列として使用します。

::component-code
---
きれい真
無視
  -  modelValue
  - アイテム
  - クラス
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
  クラス'w—48'
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
無視
  -  modelValue
  - アイテム
  - クラス
外部
  - アイテム
  -  modelValue
externalTypes
  -  SelectItem []
小道具
  modelValue 'backlog'
  アイテム
    -  label Backlog
      値'backlog'
    -  label 'Todo'
      値'todo'
    -  label 'In Progress'
      値'in_progress'
    -  label 'Done'
      値'完了'
  クラス'w—48'
---
::

::caution
オブジェクトを使用する場合は、`v-model`ディレクティブまたは`default-value` propでオブジェクトの`value`プロパティを参照する必要があります。
::

`items`プロパティに配列の配列を渡して、項目のグループを分離して表示することもできます。

::component-code
---
きれい真
無視
  -  modelValue
  - アイテム
  - クラス
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
  クラス'w—48'
---
::

###  Valueキー

`value-key` propを使用して、値を設定するために使用するプロパティを変更できます。デフォルトは`value`です。

::component-code
---
無視
  -  modelValue
  -  valueKey
  - アイテム
  - クラス
外部
  - アイテム
  -  modelValue
externalTypes
  -  SelectItem []
小道具
  modelValue 'backlog'
  valueKey 'id'
  アイテム
    -  label Backlog
      id 'backlog'
    -  label 'Todo'
      id 'todo'
    -  label '進行中'
      id 'in_progress'
    -  label 'Done'
      id '完了'
  クラス'w—48'
---
::

### 複数

複数選択を許可するには`multiple`プロパティを使用します。選択された項目はトリガー内でコンマで区切られます。

::component-code
---
きれい真
無視
  -  modelValue
  - アイテム
  - 複数
  - クラス
外部
  - アイテム
  -  modelValue
小道具
  modelValue
    -  Backlog
    - 藤堂
  複数true
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
  クラス'w—48'
---
::

::caution
`default-value` propまたは`v-model`ディレクティブに配列を渡してください。
::

### プレースホルダー

プレースホルダーテキストを設定するには、`placeholder`プロパティを使用します。

::component-code
---
きれい真
無視
  - アイテム
  - クラス
外部
  - アイテム
小道具
  プレースホルダー 'ステータスの選択'
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
  クラス'w—48'
---
::

### コンテンツ

`content`プロパティを使用して、Selectコンテンツのレンダリング方法を制御します。たとえば、`align`や`side`などです。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
  - クラス
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
  クラス'w—48'
---
::

::note
これらのオプションは、`content.position`が`popper`デフォルトの場合にのみ適用されます。
::

### ポジションbadge {label="4.7+" class="align-text-top"}

`content.position`プロパティを使用して、Selectコンテンツがトリガーから相対的にどのように配置されるかを制御します。デフォルトは`popper`で、他のポップオーバーと同様にコンテンツを配置します。コンテンツを選択したアイテムに合わせるには、`item-aligned`に設定します（macOSネイティブメニューと同様）。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
  - クラス
外部
  - アイテム
  -  modelValue
アイテム
  content.position:
    -  item—aligned
    -  popper
小道具
  modelValue 'Todo'
  内容：
    positionアイテム整列
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
  クラス'w—48'
---
::

### アロー

`arrow`プロパティを使用して、Selectに矢印を表示します。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
  - クラス
  -  arrow
外部
  - アイテム
  -  modelValue
小道具
  modelValue 'Backlog'
  矢印true
  アイテム
    -  Backlog
    - 藤堂
    - 進行中
    - 完了
  クラス'w—48'
---
::

### カラー

Selectがフォーカスされたときにリングの色を変更するには、`color`プロパティを使用します。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
  - クラス
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
  クラス'w—48'
---
::

::note
`highlight` propはフォーカス状態を表示するために使用されます。これは、バリデーションエラーが発生したときに内部で使用されます。
::

### バリアント

Selectのバリアントを変更するには、`variant`プロパティを使用します。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
  - クラス
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
  クラス'w—48'
---
::

### サイズ

Selectのサイズを変更するには、`size`プロパティを使用します。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
  - クラス
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
  クラス'w—48'
---
::

### アイコン

`icon` propを使用して、Select内に[ Icon ](/docs/components/icon)を表示します。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
  - クラス
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
  クラス'w—48'
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
  - クラス
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
  クラス'w—48'
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
  - クラス
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
  クラス'w—48'
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

### アバター

`avatar` propを使用して、Select内に[ Avatar ](/docs/components/avatar)を表示します。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
  -  class
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
  クラス'w—48'
---
::

### ローディング

`loading`プロパティを使用して、Selectにロードアイコンを表示します。

::component-code
---
きれい真
無視
  - アイテム
  -  modelValue
  - クラス
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
  クラス'w—48'
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
  - クラス
外部
  - アイテム
  -  modelValue
小道具
  modelValue 'Backlog'
  読み込み真
  loadingIcon 'i—lucide—loader'
  アイテム
    -  Backlog
    -  Todo
    - 進行中
    - 完了
  クラス'w—48'
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

`disabled`プロパティを使用してSelectを無効にします。

::component-code
---
きれい真
無視
  - アイテム
  - プレースホルダー
  - クラス
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
  クラス'w—48'
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
  - クラス
外部
  - アイテム
  -  modelValue
externalTypes
  -  SelectItem []
小道具
  modelValue 'Apple'
  アイテム
    -  type 'label'
      ラベル'フルーツ'
    - アップル
    - バナナ
    - ブルーベリー
    - ブドウ
    - パイナップル
    - タイプ'separator'
    -  type 'label'
      ラベル'野菜'
    -  Aubergine
    - ブロッコリー
    - キャロット
    - クルジェット
    - ネギ
  クラス'w—48'
---
::

### アイテム内のアイコン付き

`icon`プロパティを使用して、アイテム内に[ Icon ](/docs/components/icon)を表示できます。

::component-example
---
崩壊真
名前'select—items—icon—example'
---
::

::note
この例では、選択されたアイテムの`value`プロパティからアイコンが計算されます。
::

::tip
`#leading`スロットを使用して、選択したアイコンを表示することもできます。
::

### アイテム内のアバター付き

`avatar`プロパティを使用して、アイテム内に[ Avatar ](/docs/components/avatar)を表示できます。

::component-example
---
崩壊真
名前'select—items—avatar—example'
---
::

::note
この例では、選択されたアイテムの`value`プロパティからアバターが計算されます。
::

::tip
`#leading`スロットを使用して、選択したアバターを表示することもできます。
::

### アイテムのチップ付き

`chip`プロパティを使用して、アイテム内に[ Chip ](/docs/components/chip)を表示できます。

::component-example
---
崩壊真
名前'select—items—chip—example'
---
::

::note
この例では、`#leading`スロットを使用して選択したチップを表示します。
::

###  Controlオープンステート

`default-open` propまたは`v-model:open`ディレクティブを使用してオープン状態を制御できます。

::component-example
---
名前'select—open—example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd {value="O"}を押して選択を切り替えることができます。
::

### 回転アイコン付き

選択の開いた状態を示す回転アイコンの例を以下に示します。

::component-example
---
名前'select—icon—example'
---
::

### フェッチされたアイテム

APIから項目を取得し、Selectで使用できます。

::component-example
---
名前'select—fetch'
崩壊真
---
::

::note
この例では、`useLazyFetch`と`immediate: false`を使用して、メニューが開いたときにのみデータを取得し、ページ読み込み時に不要なAPI呼び出しを回避します。
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
名前'select—infinity—scroll—example'
---
::

::note
この例では、`useLazyFetch`と`immediate: false`を使用しています。
::

### 全コンテンツ幅

`ui.content`スロットに`min-w-fit`クラスを追加することで、コンテンツを項目の幅いっぱいに展開できます。

::component-example
---
名前'select—content—width—example'
崩壊真
---
::

::tip
また、`app.config.ts`でコンテンツの幅をグローバルに変更することもできます。

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

##  API

###  Props

component—props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
このコンポーネントは、すべてのネイティブ`<button>` HTML属性もサポートします。
::

### スロット

コンポーネントスロット

### エミッツ

component—emits

###  Expose

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `triggerRef`{lang="ts-type"}| `Ref<HTMLButtonElement \| null>`{lang="ts-type"}|
| `viewportRef`{lang="ts-type"}| `Ref<HTMLDivElement \| null>`{lang="ts-type"}|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog

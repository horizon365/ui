---
description: テキストを入力するinput要素。
category: form
keywords:
  - text field
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Input.vue
---

## 使用法

Inputの値を制御するには`v-model`ディレクティブを使用します。

::component-code
---
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue ''
---
::

### タイプ

入力タイプを変更するには、`type`プロパティを使用します。デフォルトは`text`です。

[ Checkbox ](/docs/components/checkbox)[ Radio ](/docs/components/radio-group)[ INputNumber ](/docs/components/input-number)などのような型もあります。

::component-code
---
アイテム
  タイプ
    - テキスト
    -  number
    - パスワード
    - 検索
    - ファイル
小道具
  タイプ'file'
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types" target="_blank"}
利用可能なすべての型はMDN Web Docsで確認できます。
::

### プレースホルダー

プレースホルダーテキストを設定するには、`placeholder`プロパティを使用します。

::component-code
---
小道具
  プレースホルダー '検索...'
---
::

### カラー

`color`プロパティを使用して、Inputがフォーカスされたときにリングの色を変更します。

::component-code
---
無視
  - プレースホルダー
小道具
  色ニュートラル
  ハイライト真
  プレースホルダー '検索...'
---
::

::note
`highlight` propはフォーカス状態を示すために使用されます。これはバリデーションエラーが発生したときに内部で使用されます。
::

### バリアント

Inputのバリアントを変更するには、`variant`プロパティを使用します。

::component-code
---
無視
  - プレースホルダー
小道具
  色ニュートラル
  バリアント：微妙
  ハイライトfalse
  プレースホルダー '検索...'
---
::

### サイズ

入力のサイズを変更するには、`size`プロパティを使用します。

::component-code
---
無視
  - プレースホルダー
小道具
  サイズXL
  プレースホルダー '検索...'
---
::

### アイコン

`icon` propを使用して、入力内に[ Icon ](/docs/components/icon)を表示します。

::component-code
---
きれい真
無視
  - プレースホルダー
小道具
  アイコン'i—lucide'
  サイズMD
  variantアウトライン
  プレースホルダー '検索...'
---
::

アイコンの位置を設定するには`leading`と`trailing` propsを使用し、位置ごとに異なるアイコンを設定するには`leading-icon`と`trailing-icon` propsを使用します。

::component-code
---
きれい真
無視
  - プレースホルダー
小道具
  trailingIcon i—lucide—at—sign
  プレースホルダー 'メールアドレスを入力'
  サイズMD
---
::

### アバター

`avatar` propを使用して、入力内に[ Avatar ](/docs/components/avatar)を表示します。

::component-code
---
きれい真
無視
  - プレースホルダー
  -  avatar.loading
小道具
  アバター
    https//github.com/nuxt.png
    読み込み怠惰
  サイズMD
  variantアウトライン
  プレースホルダー '検索...'
---
::

### ローディング

`loading`プロパティを使用して、Inputにロードアイコンを表示します。

::component-code
---
無視
  - プレースホルダー
小道具
  読み込み真
  トレーリングfalse
  プレースホルダー '検索...'
---
::

###  Loadingアイコン

読み込みアイコンをカスタマイズするには、`loading-icon`プロパティを使用します。デフォルトは`i-lucide-loader-circle`です。

::component-code
---
無視
  - プレースホルダー
小道具
  読み込み真
  loadingIcon 'i—lucide—loader'
  プレースホルダー '検索...'
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

入力を無効にするには、`disabled`プロパティを使用します。

::component-code
---
無視
  - プレースホルダー
小道具
  無効true
  プレースホルダー '検索...'
---
::

## 例

### クリアボタン付き

入力をクリアするには、[ Button ](/docs/components/button)を`#trailing`スロット内に入れます。

::component-example
---
名前'入力—クリア—ボタンの例'
---
::

### コピーボタン付き

[ Button ](/docs/components/button)を`#trailing`スロット内に入れて、値をクリップボードにコピーできます。

::component-example
---
名前'入力—コピー—ボタン—例'
---
::

### パスワードトグル付き

[ Button ](/docs/components/button)を`#trailing`スロット内に入れて、パスワードの表示を切り替えることができます。

::component-example
---
名前'入力パスワード—toggle—example'
---
::

### パスワード強度インジケータ付き

[ Progress ](/docs/components/progress)コンポーネントを使用して、パスワード強度インジケータを表示できます。

::component-example
---
崩壊真
名前'入力パスワード強度インジケータ例'
---
::

### 文字数制限あり

`#trailing`スロットを使用して、入力に文字制限を追加できます。

::component-example
---
名前'入力文字制限例'
---
::

### キーボードショートカット付き

`#trailing`スロット内の[ Kbd ](/docs/components/kbd)コンポーネントを使用して、入力にキーボードショートカットを追加できます。

::component-example
---
名前'input—kbd—example'
---
::

::note{to="/docs/composables/define-shortcuts"}
この例では、kbd {value="/"}キーが押されたときに入力にフォーカスするために`defineShortcuts`コンポーザブルを使用します。
::

### マスク付き

マスクの組み込みサポートはありませんが、[ maska ](https://github.com/beholdr/maska)のようなライブラリを使用して入力をマスクできます。

::component-example
---
名前'入力マスク—example'
---
::

### フローティングラベル付き

`#default`スロットを使用して、Inputにフローティングラベルを追加できます。

::component-example
---
名前'input—floating—label—example'
---
::

###  FormField内

[ FormField ](/docs/components/form-field)コンポーネント内のInputを使用して、ラベル、ヘルプテキスト、必須インジケータなどを表示できます。

::component-example
---
名前'入力フォームフィールド例'
---
::

::tip{to="/docs/components/form"}
また、** Form **コンポーネント内で使用された場合の検証とエラー処理も提供します。
::

### フィールドグループ内

[ FieldGroup ](/docs/components/field-group)コンポーネント内のInputを使用して、複数の要素をグループ化できます。

::component-example
---
名前'入力フィールドグループ例'
---
::

### 電話番号入力として

[ FieldGroup ](/docs/components/field-group)コンポーネント内の入力を[ SelectMenu ](/docs/components/select-menu)と一緒に使用して、国コードを選択した電話番号入力を作成できます。

::component-example
---
崩壊真
名前'入力電話番号—example'
---
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

###  Expose

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `inputRef`{lang="ts-type"}| `Ref<HTMLInputElement \| null>`{lang="ts-type"}|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog

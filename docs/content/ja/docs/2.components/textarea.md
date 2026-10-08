---
description: 複数行のテキストを入力するtextarea要素。
category: form
keywords:
  - multiline
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Textarea.vue
---

## 使用法

`v-model`ディレクティブを使用して、Textareaの値を制御します。

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

###  Rows

行数を設定するには`rows`プロパティを使用します。デフォルトは`3`です。

::component-code
---
小道具
  列12
---
::

### プレースホルダー

プレースホルダーテキストを設定するには、`placeholder`プロパティを使用します。

::component-code
---
小道具
  プレースホルダー：'何かを入力...'
---
::

###  Autorisize

`autoresize`プロパティを使用して、テキストエリアの高さを自動リサイズできます。

::component-code
---
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue：'これはテキストエリアの高さを自動サイズ変更する長いテキストです。
  自動サイズ変更true
---
::

`maxrows`プロパティを使用して、自動サイズ変更時の最大行数を設定します。`0`に設定すると、Textareaは無期限に成長します。

::component-code
---
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue：'これは長いテキストで、Textareaの高さを最大4行まで自動サイズ変更します。
  maxrows 4
  自動サイズ変更true
---
::

### カラー

`color`プロパティを使用して、Textareaがフォーカスされたときにリングの色を変更します。

::component-code
---
無視
  - プレースホルダー
小道具
  色ニュートラル
  ハイライト真
  プレースホルダー：'何かを入力...'
---
::

::note
`highlight` propはフォーカス状態を表示するために使用されます。これは、バリデーションエラーが発生したときに内部で使用されます。
::

### バリアント

`variant`プロパティを使用して、Textareaのバリアントを変更します。

::component-code
---
無視
  - プレースホルダー
小道具
  色ニュートラル
  バリアント：微妙
  ハイライトfalse
  プレースホルダー：'何かを入力...'
---
::

### サイズ

`size`プロパティを使用して、Textareaのサイズを変更します。

::component-code
---
無視
  - プレースホルダー
小道具
  サイズXL
  プレースホルダー：'何かを入力...'
---
::

### アイコン

`icon` propを使用して、[ Icon ](/docs/components/icon)をテキストエリア内に表示します。

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
  列1
---
::

アイコンの位置を設定するには`leading`および`trailing` propsを使用し、位置ごとに異なるアイコンを設定するには`leading-icon`および`trailing-icon` propsを使用します。

::component-code
---
きれい真
無視
  - プレースホルダー
小道具
  trailingIcon i—lucide—at—sign
  プレースホルダー 'メールアドレスを入力'
  サイズMD
  列1
---
::

### アバター

`avatar` propを使用して、[ Avatar ](/docs/components/avatar)をテキストエリア内に表示します。

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
  列1
---
::

### ローディング

`loading` propを使用して、Textareaにロードアイコンを表示します。

::component-code
---
無視
  - プレースホルダー
小道具
  読み込み真
  トレーリングfalse
  プレースホルダー '検索...'
  列1
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
  列1
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

`disabled`プロパティを使用して、Textareaを無効にします。

::component-code
---
無視
  - プレースホルダー
小道具
  無効true
  プレースホルダー：'何かを入力...'
---
::

##  API

###  Props

component—props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
このコンポーネントは、すべてのネイティブ`<textarea>` HTML属性もサポートします。
::

### スロット

コンポーネントスロット

### エミッツ

component—emits

### エクスポーズ

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `textareaRef`{lang="ts-type"}| `Ref<HTMLTextAreaElement \| null>`{lang="ts-type"}|
| `autoResize`{lang="ts-type"}|`() => void`{lang="ts-type"}|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog

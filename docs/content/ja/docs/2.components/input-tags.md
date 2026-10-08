---
title: 入力タグ
description: インタラクティブタグを表示するinput要素。
category: form
keywords:
  - chips input
  - multi value
links:
  - label: 入力タグ
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tags-input
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputTags.vue
---

## 使用法

`v-model`ディレクティブを使用して、InputTagsの値を制御します。

::component-code
---
きれい真
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue ['Vue']
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
きれい真
無視
  -  defaultValue
小道具
  defaultValue ['Vue']
---
::

### プレースホルダー

プレースホルダーテキストを設定するには、`placeholder`プロパティを使用します。

::component-code
---
小道具
  プレースホルダー 'タグを入力...'
---
::

### 最大長

`max-length`プロパティを使用して、タグで許可される最大文字数を設定します。

::component-code
---
小道具
  maxLength 4
---
::

### カラー

`color`プロパティを使用して、InputTagsがフォーカスされたときにリングの色を変更します。

::component-code
---
きれい真
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue ['Vue']
  色ニュートラル
  ハイライト真
---
::

::note
`highlight` propはフォーカス状態を表示するために使用されます。これはバリデーションエラーが発生したときに内部で使用されます。
::

### バリアント

`variant`プロパティを使用して、InputTagsの外観を変更します。

::component-code
---
きれい真
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue ['Vue']
  バリアント：微妙
  色ニュートラル
  ハイライトfalse
---
::

### サイズ

`size`プロパティを使用して、InputTagsのサイズを調整します。

::component-code
---
きれい真
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue ['Vue']
  サイズXL
---
::

### アイコン

`icon` propを使用して、[ Icon ](/docs/components/icon)をInputTags内に表示します。

::component-code
---
きれい真
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue ['Vue']
  アイコン'i—lucide'
  サイズMD
  variantアウトライン
---
::

::note
アイコンの位置を設定するには`leading`および`trailing` propsを使用し、位置ごとに異なるアイコンを設定するには`leading-icon`および`trailing-icon` propsを使用します。
::

### アバター

`avatar` propを使用して、[ Avatar ](/docs/components/avatar)をInputTags内に表示します。

::component-code
---
きれい真
無視
  -  modelValue
  -  avatar.loading
外部
  -  modelValue
小道具
  modelValue ['Vue']
  アバター
    http//github.com/vuejs.png/
    読み込み怠惰
  サイズMD
  variantアウトライン
---
::

### アイコンを削除

`delete-icon`プロパティを使用して、タグ内の[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

::component-code
---
きれい真
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue ['Vue']
  deleteIcon 'i—lucide—trash'
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

### ローディング

`loading`プロパティを使用して、InputTagsに読み込み中のアイコンを表示します。

::component-code
---
きれい真
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue ['Vue']
  読み込み真
  トレーリングfalse
---
::

###  Loadingアイコン

読み込みアイコンをカスタマイズするには、`loading-icon`プロパティを使用します。デフォルトは`i-lucide-loader-circle`です。

::component-code
---
きれい真
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue ['Vue']
  読み込み真
  loadingIcon 'i—lucide—loader'
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

`disabled`プロパティを使用して、InputTagsを無効にします。

::component-code
---
きれい真
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue ['Vue']
  無効true
---
::

## 例

###  FormField内

[ FormField ](/docs/components/form-field)コンポーネント内のInputTagsを使用して、ラベル、ヘルプテキスト、必要なインジケータなどを表示できます。

::component-example
---
名前'入力タグフォームフィールド例'
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

### エクスポーズ

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `inputRef`{lang="ts-type"}| `Ref<HTMLInputElement \| null>`{lang="ts-type"}|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog

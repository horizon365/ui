---
title: InputNumber
description: カスタマイズ可能な範囲を持つ数値の入力。
category: form
keywords:
  - number field
  - spinbutton
  - counter
links:
  - label: NumberField
    icon: i-custom-reka-ui
    to: https://www.reka-ui.com/docs/components/number-field
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputNumber.vue
---

## 使用法

`v-model`ディレクティブを使用して、InputNumberの値を制御します。

::component-code
---
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue 5
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
無視
  -  defaultValue
小道具
  defaultValue 5
---
::

::note
このコンポーネントは[`@internationalized/number`](https://react-spectrum.adobe.com/internationalized/number/index.html)パッケージに依存しており、ロケールや番号システム間で数値をフォーマットして解析するためのユーティリティを提供しています。
::

###  Min/Max

`min`および`max` propsを使用して、InputNumberの最小値と最大値を設定します。

::component-code
---
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue 5
  分0
  最高10
---
::

### ステップ

`step`プロパティを使用して、InputNumberのステップ値を設定します。

::component-code
---
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue 5
  ステップ2
---
::

### オリエンテーション

`orientation`プロパティを使用して、InputNumberの向きを変更します。

::component-code
---
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue 5
  オリエンテーション垂直
---
::

### プレースホルダー

プレースホルダーテキストを設定するには、`placeholder`プロパティを使用します。

::component-code
---
小道具
  プレースホルダー '数字を入力'
---
::

### カラー

`color`プロパティを使用して、InputNumberがフォーカスされたときにリングの色を変更します。

::component-code
---
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue 5
  色ニュートラル
  ハイライト真
---
::

### バリアント

`variant`プロパティを使用して、InputNumberのバリアントを変更します。

::component-code
---
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue 5
  バリアント：微妙
  色ニュートラル
  ハイライトfalse
---
::

### サイズ

`size`プロパティを使用して、InputNumberのサイズを変更します。

::component-code
---
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue 5
  サイズXL
---
::

### 無効

`disabled`プロパティを使用して、InputNumberを無効にします。

::component-code
---
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue 5
  無効true
---
::

### 増分/減分

`increment`および`decrement` propsを使用して、任意の[ Button ](/docs/components/button) propsで増減ボタンをカスタマイズします。デフォルトは`{ variant: 'link' }`{lang="ts-type"}です。

::component-code
---
きれい真
無視
  -  modelValue
  -  increment.size
  -  increment.color
  -  increment.variant
  -  decrement.size
  -  decrement.color
  -  decrement.variant
外部
  -  modelValue
小道具
  modelValue 5
  インクリメント
    色ニュートラル
    バリアント固体
    サイズXS
  減少：
    色ニュートラル
    バリアント固体
    サイズXS
---
::

### 増分/減分アイコン

`increment-icon`および`decrement-icon` propsを使用して、[ Icon ](/docs/components/icon)ボタンをカスタマイズします。デフォルトは`i-lucide-plus`/`i-lucide-minus`です。

::component-code
---
きれい真
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue 5
  incrementIcon 'i—lucide—arrow—right'
  decrementIcon 'i—lucide—arrow—left'
---
::

## 例

### 十進形式

`format-options`プロパティを使用して、値の形式をカスタマイズします。

::component-example
---
名前'入力番号10進数の例'
---
::

### パーセンテージ形式

値の形式をカスタマイズするには、`format-options`と`style: 'percent'`を使用します。

::component-example
---
名前'入力数パーセントの例'
---
::

### 通貨フォーマット付き

値の形式をカスタマイズするには、`style: 'currency'`とともに`format-options`を使用します。

::component-example
---
名前'入力番号通貨の例'
---
::

### ボタンなし

`increment`と`decrement` propsを使用して、ボタンの表示を制御できます。

::component-example
---
名前'入力番号のないボタンの例'
---
::

###  FormField内

[ FormField ](/docs/components/form-field)コンポーネント内のInputNumberを使用して、ラベル、ヘルプテキスト、必須インジケータなどを表示できます。

::component-example
---
名前'入力番号フォームフィールドの例'
---
::

### スロット付き

`#increment`および`#decrement`スロットを使用してボタンをカスタマイズします。

::component-example
---
name '入力番号スロット例'
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

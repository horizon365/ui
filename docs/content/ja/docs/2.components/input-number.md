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

InputNumberの値を制御するには`v-model`ディレクティブを使用します。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 5
---
::

::note
このコンポーネントは[`@internationalized/number`](https://react-spectrum.adobe.com/internationalized/number/index.html)パッケージに依存しています。
::

### Min/Max

`min`と`max`プロパティを使用して、InputNumberの最小値と最大値を設定します。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  min: 0
  max: 10
---
::

### Step

`step`プロパティを使用して、InputNumberのステップ値を設定します。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  step: 2
---
::

### Orientation

`orientation`プロパティを使用して、InputNumberの向きを変更します。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  orientation: vertical
---
::

### Placeholder

`placeholder`プロパティを使用してプレースホルダーテキストを設定します。

::component-code
---
props:
  placeholder: 'Enter a number'
---
::

### Color

InputNumberにフォーカスしたときにリングの色を変更するには、`color`プロパティを使用します。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  color: neutral
  highlight: true
---
::

### Variant

`variant`プロパティを使用して、InputNumberのバリアントを変更します。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  variant: subtle
  color: neutral
  highlight: false
---
::

### サイズ

`size`プロパティを使用して、InputNumberのサイズを変更します。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  size: xl
---
::

### 無効

`disabled`プロパティを使用してInputNumberを無効にします。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  disabled: true
---
::

### Increment/Decrement

[Button](/docs/components/button) propsでインクリメント/デクリメントボタンをカスタマイズするには、`increment`と`decrement` propsを使用します。デフォルトは`{ variant: 'link' }`xph18xです。

::component-code
---
prettier: true
ignore:
  - modelValue
  - increment.size
  - increment.color
  - increment.variant
  - decrement.size
  - decrement.color
  - decrement.variant
external:
  - modelValue
props:
  modelValue: 5
  increment:
    color: neutral
    variant: solid
    size: xs
  decrement:
    color: neutral
    variant: solid
    size: xs
---
::

### Increment/Decrementアイコン

`increment-icon`と`decrement-icon`プロップを使用して、ボタン[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-plus`/`i-lucide-minus`です。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  incrementIcon: 'i-lucide-arrow-right'
  decrementIcon: 'i-lucide-arrow-left'
---
::

## 例

###  10進数形式

`format-options`プロパティを使用して、値のフォーマットをカスタマイズします。

::component-example
---
name: 'input-number-decimal-example'
---
::

### パーセンテージ形式

値のフォーマットをカスタマイズするには、`format-options`プロパティを`style: 'percent'`とともに使用します。

::component-example
---
name: 'input-number-percentage-example'
---
::

### 通貨フォーマット付き

値のフォーマットをカスタマイズするには、`style: 'currency'`とともに`format-options`プロパティを使用します。

::component-example
---
name: 'input-number-currency-example'
---
::

### ボタンなし

`increment`と`decrement`の小道具を使用して、ボタンの表示を制御できます。

::component-example
---
name: 'input-number-without-buttons-example'
---
::

### FormField内

[FormField](/docs/components/form-field)コンポーネント内のInputNumberを使用して、ラベル、ヘルプテキスト、必須インジケータなどを表示できます。

::component-example
---
name: 'input-number-form-field-example'
---
::

### スロット付き

`#increment`および`#decrement`スロットを使用してボタンをカスタマイズします。

::component-example
---
name: 'input-number-slots-example'
---
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

## Theme

:component-theme

## Changelog

:component-changelog

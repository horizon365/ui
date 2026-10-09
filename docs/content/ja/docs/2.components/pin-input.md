---
title: ピン入力
description: ピンを入力する入力要素。
category: form
keywords:
  - otp
  - one-time password
  - verification code
links:
  - label: ピン入力
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pin-input
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PinInput.vue
---

## 使用法

PinInputの値を制御するには`v-model`ディレクティブを使用します。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: []
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
prettier: true
ignore:
  - defaultValue
props:
  defaultValue: ['1','2','3']
---
::

### Type

`type`プロパティを使用して入力タイプを変更します。デフォルトは`text`です。

::component-code
---
items:
  type:
    - text
    - number
props:
  type: 'number'
---
::

::note
`type`が`number`に設定されている場合、数字のみを受け付けます。
::

### マスク

入力をパスワードのように扱うには`mask`プロパティを使用します。

::component-code
---
prettier: true
ignore:
  - placeholder
  - defaultValue
props:
  mask: true
  defaultValue: ['1','2','3','4','5']
---
::

### OTP

`otp`プロパティを使用して、ワンタイムパスワード機能を有効にします。有効にすると、モバイルデバイスはSMSメッセージやクリップボードのコンテンツからOTPコードを自動的に検出して入力します。

::component-code
---
props:
  otp: true
---
::

### Placeholder

`placeholder`プロパティを使用してプレースホルダーテキストを設定します。

::component-code
---
props:
  placeholder: '○'
---
::

### Length

`length`プロパティを使用して入力量を変更します。

::component-code
---
ignore:
  - placeholder
props:
  length: 6
  placeholder: '○'
---
::

### Separator badge{label="4.9+" class="align-text-top"}

`separator`プロパティを使用して、入力のグループ間に区切り文字を挿入します。N番目の入力ごとに挿入するには、数値を渡します。

::component-code
---
ignore:
  - placeholder
props:
  length: 6
  separator: 3
  placeholder: '○'
---
::

位置の配列を渡して、特定の入力の後に区切り文字を挿入することもできます。

::component-code
---
prettier: true
ignore:
  - placeholder
  - length
  - separator
props:
  length: 7
  separator: [3, 4]
  placeholder: '○'
---
::

### Color

PinInputがフォーカスされたときにリングの色を変更するには、`color`プロパティを使用します。

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: '○'
---
::

::note
`highlight`プロパティはフォーカスの状態を示すために使用されます。バリデーションエラーが発生したときに内部で使用されます。
::

### Variant

`variant`プロパティを使用して、PinInputのバリアントを変更します。

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: '○'
---
::

### Size

`size`プロパティを使用して、PinInputのサイズを変更します。

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: '○'
---
::

### 無効

`disabled`プロパティを使用してPinInputを無効にします。

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: '○'
---
::

## 例

### セパレータースロット付きbadge{label="4.9+" class="align-text-top"}

`separator`スロットを使用してセパレータの外観をカスタマイズします。

::component-example
---
name: 'pin-input-separator-slot-example'
---
::

## API

### Props

:component-props

### スロット

:component-slots

### Emits

:component-emits

### Expose

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `inputsRef`{lang="ts-type"}| `Ref<ComponentPublicInstance[]>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog

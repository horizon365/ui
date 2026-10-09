---
description: 範囲内の数値を選択するための入力。
category: form
keywords:
  - range slider
links:
  - label: スライダ
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/slider
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slider.vue
---

## 使用法

Sliderの値を制御するには、`v-model`ディレクティブを使用します。

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 50
---
::

::tip
`aria-label`または`aria-labelledby`を使用して単一のthumb Sliderに名前を付けると、`slider`ロールを持つ要素であるthumbに転送されます。

複数の親指スライダーの親指は位置によって名前が付けられます。2つの親指の場合は`Minimum`/`Maximum`、3つ以上の場合は`Value n of m`です。これらの名前は保持され、`aria-label`はすべての親指で繰り返されるのではなく、ルート上の`group`ロールを通じてスライダー全体に名前を付けます。
::

### Min/Max

`min`と`max`のプロパティを使用して、スライダーの最小値と最大値を設定します。デフォルトは`0`と`100`です。

::component-code
---
ignore:
  - defaultValue
props:
  min: 0
  max: 50
  defaultValue: 50
---
::

### Step

スライダーのインクリメント値を設定するには、`step`プロパティを使用します。デフォルトは`1`です。

::component-code
---
ignore:
  - defaultValue
props:
  step: 10
  defaultValue: 50
---
::

### 複数

`v-model`ディレクティブまたは`default-value`プロパティを値の配列とともに使用して、範囲Sliderを作成します。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [25, 75]
---
::

`min-steps-between-thumbs`プロパティを使用して、親指の間の最小距離を制限します。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [25, 50, 75]
  minStepsBetweenThumbs: 10
---
::

### Orientation

スライダーの向きを変更するには、`orientation`プロパティを使用します。デフォルトは`horizontal`です。

::component-code
---
ignore:
  - defaultValue
  - class
props:
  orientation: vertical
  defaultValue: 50
  class: 'h-48'
---
::

### Color

`color`プロパティを使用してスライダーの色を変更します。

::component-code
---
ignore:
  - defaultValue
props:
  color: neutral
  defaultValue: 50
---
::

### サイズ

`size`プロパティを使用してスライダーのサイズを変更します。

::component-code
---
ignore:
  - defaultValue
props:
  size: xl
  defaultValue: 50
---
::

### Tooltip

`tooltip`プロパティを使用して、[Tooltip](/docs/components/tooltip)をスライダー親指の周りに現在の値で表示します。デフォルトの動作では`true`に設定するか、[Tooltip](/docs/components/tooltip#props)コンポーネントの任意のプロパティを使用してカスタマイズするオブジェクトを渡すことができます。

::component-code
---
ignore:
  - defaultValue
  - tooltip
props:
  defaultValue: 50
  tooltip: true
---
::

### Disable

`disabled`プロパティを使用してスライダーを無効にします。

::component-code
---
ignore:
  - defaultValue
props:
  disabled: true
  defaultValue: 50
---
::

### 反転

`inverted`プロパティを使用してスライダーを視覚的に反転させます。

::component-code
---
ignore:
  - defaultValue
props:
  inverted: true
  defaultValue: 25
---
::

## API

### Props

:component-props

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog

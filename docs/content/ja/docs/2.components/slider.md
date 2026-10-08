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

`v-model`ディレクティブを使用して、Sliderの値を制御します。

::component-code
---
外部
  -  modelValue
小道具
  modelValue 50
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
無視
  -  defaultValue
小道具
  defaultValue 50
---
::

::tip
`aria-label`または`aria-labelledby`を使用して、単一のthumb Sliderに名前を付けます。thumb Sliderは`slider`ロールを持つ要素であるthumbに転送されます。

複数の親指Sliderの親指は位置によって名前が付けられ、2つの親指の場合は`Minimum`/`Maximum`、3つ以上の場合は`Value n of m`です。これらの名前は保持され、`aria-label`はすべての親指で繰り返されるのではなく、ルート上の`group`ロールを介してスライダー全体に名前を付けます。
::

###  Min/Max

`min`および`max` propsを使用して、スライダーの最小値と最大値を設定します。デフォルトは`0`および`100`です。

::component-code
---
無視
  -  defaultValue
小道具
  分0
  最高50
  defaultValue 50
---
::

### ステップ

スライダーのインクリメント値を設定するには、`step`プロパティを使用します。デフォルトは`1`です。

::component-code
---
無視
  -  defaultValue
小道具
  ステップ10
  defaultValue 50
---
::

### 複数

`v-model`ディレクティブまたは`default-value`プロパティを値の配列で使用して、範囲スライダーを作成します。

::component-code
---
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue [25 75]
---
::

`min-steps-between-thumbs`プロパティを使用して、親指の間の最小距離を制限します。

::component-code
---
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue [25 50 75]
  最小ステップ間親指10
---
::

### オリエンテーション

スライダーの向きを変更するには、`orientation`プロパティを使用します。デフォルトは`horizontal`です。

::component-code
---
無視
  -  defaultValue
  - クラス
小道具
  オリエンテーション垂直
  defaultValue 50
  クラス'h—48'
---
::

### カラー

スライダーの色を変更するには、`color`プロパティを使用します。

::component-code
---
無視
  -  defaultValue
小道具
  色ニュートラル
  defaultValue 50
---
::

### サイズ

スライダーのサイズを変更するには、`size`プロパティを使用します。

::component-code
---
無視
  -  defaultValue
小道具
  サイズXL
  defaultValue 50
---
::

### ツールチップ

`tooltip` propを使用して、現在の値でSliderの親指の周りに[ Tooltip ](/docs/components/tooltip)を表示します。デフォルトの動作で`true`に設定するか、[ Tooltip ](/docs/components/tooltip#props)コンポーネントの任意のプロパティを使用してカスタマイズするオブジェクトを渡すことができます。

::component-code
---
無視
  -  defaultValue
  - ツールチップ
小道具
  defaultValue 50
  ツールチップtrue
---
::

### 無効

スライダーを無効にするには、`disabled`プロパティを使用します。

::component-code
---
無視
  -  defaultValue
小道具
  無効true
  defaultValue 50
---
::

### インバータ

スライダーを視覚的に反転させるには、`inverted`プロパティを使用します。

::component-code
---
無視
  -  defaultValue
小道具
  反転：true
  defaultValue 25
---
::

##  API

###  Props

component—props

### エミッツ

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog

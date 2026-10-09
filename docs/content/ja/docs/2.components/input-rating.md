---
title: 入力評価
description: ユーザーからの評価を表示および収集するコンポーネント。
category: form
keywords:
  - star rating
  - stars
links:
  - label: レーティング
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/rating
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputRating.vue
---

## 使用法

`v-model`ディレクティブを使用して、InputRatingコンポーネントのレーティング値を制御します。

::component-code
---
external:
  - modelValue
props:
  modelValue: 3
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 3
---
::

### Step

`step`プロパティを使用して各スターの粒度を制御します。`0.5`に設定して、ハーフスターのレーティングを許可します。

::component-code
---
ignore:
  - defaultValue
props:
  step: 0.5
  defaultValue: 3.5
---
::

### Length

`length`プロパティを使用して星の数を設定します。デフォルトは`5`です。

::component-code
---
ignore:
  - defaultValue
props:
  length: 10
  step: 0.5
  defaultValue: 7.5
---
::

### Clearable

`clearable`プロパティを使用して、ユーザーが現在選択されている値をクリックしてレーティングをクリアできるようにします。デフォルトは`false`です。

::component-code
---
ignore:
  - defaultValue
props:
  clearable: true
  defaultValue: 3
---
::

### Hoverable

`hoverable`プロパティを使用して、星の上にホバリングしたときにレーティングが値をプレビューするかどうかを制御します。デフォルトは`false`です。

::component-code
---
ignore:
  - defaultValue
props:
  hoverable: true
  defaultValue: 3
---
::

### Icon

`icon`プロパティを使用して、星に使用するアイコンをカスタマイズします。デフォルトは`i-lucide-star`です。

::component-code
---
ignore:
  - defaultValue
props:
  icon: 'i-lucide-heart'
  defaultValue: 4
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
デフォルトのスターアイコンは`app.config.ts`の`ui.icons.star`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
デフォルトのスターアイコンは`vite.config.ts`の`ui.icons.star`キーでグローバルにカスタマイズできます。
:::
::

### Emptyのアイコン

`empty-icon`プロパティを使用して、空の星に使用するアイコンをカスタマイズします。指定されていない場合は、`icon`と同じアイコンを使用します。

::component-code
---
ignore:
  - defaultValue
props:
  emptyIcon: 'i-lucide-circle'
  icon: 'i-lucide-circle-check'
  defaultValue: 3
---
::

### Color

`color`プロパティを使用して、塗りつぶされた星の色を変更します。

::component-code
---
ignore:
  - defaultValue
props:
  color: neutral
  defaultValue: 4
---
::

### サイズ

`size`プロパティを使用して星のサイズを変更します。

::component-code
---
ignore:
  - defaultValue
items:
  size:
    - xs
    - sm
    - md
    - lg
    - xl
props:
  size: xl
  defaultValue: 4
---
::

### Orientation

`orientation`プロパティを使用してレーティングの向きを変更します。デフォルトは`horizontal`です。

::component-code
---
ignore:
  - defaultValue
props:
  orientation: vertical
  defaultValue: 4
---
::

### 無効

`disabled`プロパティを使用してInputRatingコンポーネントを無効にします。無効にすると、コンポーネントの不透明度が75%減少し、対話的でないことを示す`not-allowed`カーソルが表示されます。

::component-code
---
ignore:
  - defaultValue
props:
  disabled: true
  defaultValue: 3
---
::

### 読み取り専用

`readonly`プロパティを使用して、ユーザーの操作を許可せずにレーティングを表示します。`disabled`とは異なり、通常の外観完全な不透明度、デフォルトカーソルを維持します。変更できないレーティングを表示したい場合に使用します。

::component-code
---
ignore:
  - defaultValue
props:
  readonly: true
  defaultValue: 4.5
---
::

## API

### Props

:component-props

### スロット

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog

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
外部
  -  modelValue
小道具
  modelValue 3
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
無視
  -  defaultValue
小道具
  defaultValue 3
---
::

### ステップ

`step` propを使用して、各星の粒度を制御します。`0.5`に設定して、半星の評価を許可します。

::component-code
---
無視
  -  defaultValue
小道具
  ステップ0.5
  defaultValue 3.5
---
::

### 長さ

`length`プロパティを使用して、星の数を設定します。デフォルトは`5`です。

::component-code
---
無視
  -  defaultValue
小道具
  長さ10
  ステップ0.5
  defaultValue 7.5
---
::

###  Clearable

`clearable`プロパティを使用して、ユーザーが現在選択されている値をクリックしてレーティングをクリアできるようにします。デフォルトは`false`です。

::component-code
---
無視
  -  defaultValue
小道具
  clearable true
  defaultValue 3
---
::

###  Hoverable

`hoverable`プロパティを使用して、星の上にカーソルを合わせたときにレーティングが値をプレビューするかどうかを制御します。デフォルトは`false`です。

::component-code
---
無視
  -  defaultValue
小道具
  hoverable true
  defaultValue 3
---
::

### アイコン

`icon`プロパティを使用して、星に使用されるアイコンをカスタマイズします。デフォルトは`i-lucide-star`です。

::component-code
---
無視
  -  defaultValue
小道具
  アイコン'i—lucide—heart'
  defaultValue 4
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
デフォルトのスターアイコンは、`ui.icons.star`キーの`app.config.ts`でカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
デフォルトのスターアイコンは、`ui.icons.star`キーの`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### 空のアイコン

空の星に使用されるアイコンをカスタマイズするには、`empty-icon` propを使用します。指定されていない場合は、`icon`と同じアイコンを使用します。

::component-code
---
無視
  -  defaultValue
小道具
  emptyIcon 'i—lucide'
  アイコン'i—lucide—circle—check'
  defaultValue 3
---
::

### カラー

`color`プロパティを使用して、塗りつぶされた星の色を変更します。

::component-code
---
無視
  -  defaultValue
小道具
  色ニュートラル
  defaultValue 4
---
::

### サイズ

`size`を使って、星の大きさを変更します。

::component-code
---
無視
  -  defaultValue
アイテム
  サイズ
    お問い合わせ：-  xs
    -  sm
    -  md
    -  lg
    お問い合わせ：-  xl
小道具
  サイズXL
  defaultValue 4
---
::

### オリエンテーション

`orientation`プロパティを使用して、レーティングの向きを変更します。デフォルトは`horizontal`です。

::component-code
---
無視
  -  defaultValue
小道具
  オリエンテーション垂直
  defaultValue 4
---
::

### 無効

InputRatingコンポーネントを無効にするには、`disabled`プロパティを使用します。無効にすると、コンポーネントの不透明度が低下し75%、インタラクティブでないことを示す`not-allowed`カーソルが表示されます。

::component-code
---
無視
  -  defaultValue
小道具
  無効true
  defaultValue 3
---
::

### 読み取り専用

`readonly`プロパティを使用して、ユーザーの操作を許可せずにレーティングを表示します。`disabled`とは異なり、通常の外観（完全な不透明度、デフォルトカーソル）を維持します。変更できないレーティングを表示したい場合に使用します。

::component-code
---
無視
  -  defaultValue
小道具
  readonly true
  defaultValue 4.5
---
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

### エミッツ

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog

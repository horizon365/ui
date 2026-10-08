---
description: タスクの進捗状況を示すインジケータ。
category: element
keywords:
  - progress bar
  - loading bar
  - meter
links:
  - label: 進捗
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/progress
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Progress.vue
---

## 使用法

Progressの値を制御するには`v-model`ディレクティブを使用します。

::component-code
---
外部
  -  modelValue
小道具
  modelValue 50
---
::

::note
[`ProgressGroup`](/docs/components/progress-group)コンポーネントを使用して、1つのバーを合計する複数のセグメントに分割します。
::

### マックス

Progressの最大値を設定するには、`max`プロパティを使用します。

::component-code
---
外部
  -  modelValue
小道具
  modelValue 3
  最高4
---
::

`max`プロパティを文字列の配列で使用して、バーの下にアクティブなステップを表示します。Progressの最大値は配列の長さです。

::component-code
---
きれい真
無視
  -  max
外部
  -  modelValue
小道具
  modelValue 3
  マックス
    - 'Waiting...'
    - 'クローニング...'
    - '移行...'
    - 'デプロイ...'
    - 'Done！'
---
::

### ステータス

`status`プロパティを使用して、バーの上に現在のProgress値を表示します。

::component-code
---
外部
  -  modelValue
小道具
  modelValue 50
  ステータス真
---
::

::tip
ステータスはバーの終わりを追跡します。代わりに`:ui="{ status: 'w-full' }"`を使用して、バーの幅全体にまたがるようにします。
::

### 不定

`v-model`が設定されていない場合や、値が`null`の場合、Progressは_indetermine_になります。プログレスバーは`carousel`としてアニメーション化されますが、[`animation`](#animation) propを使って変更できます。

::component-code
---
外部
  -  modelValue
小道具
  modelValue null
---
::

### アニメーション

`animation`プロパティを使用して、Progressのアニメーションを逆カルーセル、スイングバー、エラスティックバーに変更します。デフォルトは`carousel`です。

::component-code
---
小道具
  アニメーション：スイング
---
::

::tip
アニメーションは、ユーザーが縮小された動きを好む場合に自動的に無効になり、不定のバーは代わりに全幅のパルスとして表示されます。
::

### オリエンテーション

プログレスの向きを変更するには、`orientation`プロパティを使用します。デフォルトは`horizontal`です。

::component-code
---
無視
  - クラス
小道具
  オリエンテーション垂直
  クラス'h—48'
---
::

### カラー

プログレスの色を変更するには、`color`プロパティを使用します。

::component-code
---
小道具
  色ニュートラル
---
::

::tip
このプロパティはテーマ外のパレットのCSSカラー値も受け付けます。
::

### サイズ

プログレスのサイズを変更するには、`size`プロパティを使用します。

::component-code
---
小道具
  サイズXL
---
::

### インバータ

Progressを視覚的に反転させるには、`inverted` propを使用します。

::component-code
---
小道具
  反転：true
  modelValue 25
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

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
external:
  - modelValue
props:
  modelValue: 50
---
::

::note
[`ProgressGroup`](/docs/components/progress-group)コンポーネントを使用して、1つのバーを複数のセグメントに分割し、合計します。
::

### Max

`max`プロパティを使用して、Progressの最大値を設定します。

::component-code
---
external:
  - modelValue
props:
  modelValue: 3
  max: 4
---
::

`max`プロパティを文字列の配列で使用して、バーの下にアクティブなステップを表示します。Progressの最大値は配列の長さです。

::component-code
---
prettier: true
ignore:
  - max
external:
  - modelValue
props:
  modelValue: 3
  max:
    - 'Waiting...'
    - 'Cloning...'
    - 'Migrating...'
    - 'Deploying...'
    - 'Done!'
---
::

### Status

`status`プロパティを使用して、現在のProgress値をバーの上に表示します。

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
  status: true
---
::

::tip
ステータスはバーの終わりを追跡します。`:ui="{ status: 'w-full' }"`を使用して、代わりに幅いっぱいにします。
::

### 不定

`v-model`が設定されていない場合、または値が`null`の場合、Progressは_indetermineter__になります。プログレスバーは`carousel`としてアニメーション化されますが、[`animation`](#animation) propを使用して変更できます。

::component-code
---
external:
  - modelValue
props:
  modelValue: null
---
::

### アニメーション

`animation`プロパティを使用して、Progressのアニメーションを逆カルーセル、スイングバー、エラスティックバーに変更します。デフォルトは`carousel`です。

::component-code
---
props:
  animation: swing
---
::

::tip
アニメーションは、ユーザーが縮小された動きを好む場合に自動的に無効になり、不定のバーは代わりに全幅のパルスとして表示されます。
::

### Orientation

`orientation`プロパティを使用してプログレスの向きを変更します。デフォルトは`horizontal`です。

::component-code
---
ignore:
  - class
props:
  orientation: vertical
  class: 'h-48'
---
::

### Color

`color`プロパティを使用してプログレスの色を変更します。

::component-code
---
props:
  color: neutral
---
::

::tip
このプロパティはテーマ外のパレットのCSSカラー値も受け付けます。
::

### サイズ

`size`プロパティを使用してプログレスのサイズを変更します。

::component-code
---
props:
  size: xl
---
::

### 反転

`inverted`プロパティを使用してProgressを視覚的に反転します。

::component-code
---
props:
  inverted: true
  modelValue: 25
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

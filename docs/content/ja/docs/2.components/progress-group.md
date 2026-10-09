---
title: ProgressGroup
description: プログレスバーが複数のセグメントに分割され、合計になります。
category: element
navigation.badge: New
keywords:
  - meter
  - meter group
  - segmented progress
  - stacked bar
  - breakdown
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ProgressGroup.vue
---

## 使用法

ProgressGroupコンポーネントを使用して、複数の値を1つのプログレスバーのセグメントとして表示します。

::component-code
---
collapse: true
ignore:
  - items
  - max
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  max: 128
  items:
    - label: 'System'
      value: 24
      color: 'neutral'
      icon: 'i-lucide-cog'
    - label: 'Apps'
      value: 8
      color: 'error'
      icon: 'i-lucide-app-window'
    - label: 'Documents'
      value: 12
      color: 'warning'
      icon: 'i-lucide-file'
    - label: 'Multimedia'
      value: 42
      color: 'success'
      icon: 'i-lucide-film'
  class: 'w-96'
---
::

### アイテム

`items`プロパティを次のプロパティを持つオブジェクトの配列として使用します。

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `value?: number`{lang="ts-type"}
- [`color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | (string & {})`{lang="ts-type"}](#with-custom-colors)
- `slot?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { segment?: ClassNameValue, indicator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingDot?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue }`{lang="ts-type"}

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  items:
    - label: 'Compute'
      value: 42
      color: 'primary'
    - label: 'Storage'
      value: 18
      color: 'info'
    - label: 'Bandwidth'
      value: 9
      color: 'warning'
  class: 'w-96'
---
::

::note
`icon`がないアイテムは、代わりにリストに色付きドットが表示されます。
::

### Max

`max`プロパティを使用して、すべてのアイテムが加算される値を設定します。デフォルトは`100`です。

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  max: 512
  items:
    - label: 'Used'
      value: 128
      color: 'primary'
    - label: 'Reserved'
      value: 64
      color: 'neutral'
  class: 'w-96'
---
::

::note
値は`0`と`max`の間でクランプされ、`max`を超えるセグメントは比例してトラックを共有します。
::

### Status

`status`プロパティを使用して、バーの上に合計値を表示します。

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  status: true
  max: 128
  items:
    - label: 'System'
      value: 24
      color: 'neutral'
    - label: 'Apps'
      value: 8
      color: 'error'
    - label: 'Multimedia'
      value: 42
      color: 'success'
  class: 'w-96'
---
::

::tip
ステータスはバーの終わりを追跡します。`:ui="{ status: 'w-full' }"`を使用して、代わりに幅いっぱいにします。
::

### Color

`color`プロパティを使用して、独自の色を設定していないすべてのセグメントの色を変更します。

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  color: neutral
  items:
    - label: 'Read'
      value: 42
    - label: 'Write'
      value: 18
  class: 'w-96'
---
::

::tip
このプロパティと各アイテムの`color`はどちらもCSSの色値を受け付けます。これはテーマ外のパレットに便利です。
::

### サイズ

`size`プロパティを使用してProgressGroupのサイズを変更します。

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  size: xl
  items:
    - label: 'Read'
      value: 42
      color: 'primary'
    - label: 'Write'
      value: 18
      color: 'info'
  class: 'w-96'
---
::

### Orientation

`orientation`プロパティを使用してProgressGroupの向きを変更します。デフォルトは`horizontal`です。

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  orientation: vertical
  items:
    - label: 'Read'
      value: 42
      color: 'primary'
    - label: 'Write'
      value: 18
      color: 'info'
  class: 'h-48'
---
::

## Example

### ステータススロット付き

`#status`スロットを使用して、合計パーセンテージを独自のコンテンツに置き換えます。

::component-example
---
collapse: true
name: progress-group-status-example
---
::

### アイテムスロット付き

`#item-label`と`#item-trailing`スロットを使用して、各エントリの表示内容を変更します。どちらも`item`、`index`、`percent`を受け取ります。

::component-example
---
collapse: true
name: progress-group-item-example
---
::

### カスタムカラー

各項目にCSS色を付けて、テーマパレットの外で内訳を作成します。

::component-example
---
collapse: true
name: progress-group-custom-color-example
---
::

## API

### Props

:component-props

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog

---
description: ステータスまたはカテゴリを表す短いテキスト。
category: element
keywords:
  - tag
  - pill
  - label
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Badge.vue
---

## 使用法

デフォルトスロットを使用してバッジのラベルを設定します。

::component-code
---
slots:
  default: Badge
---
::

### Label

`label`プロパティを使用してバッジのラベルを設定します。

::component-code
---
props:
  label: Badge
---
::

### Color

`color`プロパティを使用してバッジの色を変更します。

::component-code
---
props:
  color: neutral
slots:
  default: Badge
---
::

### Variant

`variant` propsを使用してバッジのバリアントを変更します。

::component-code
---
props:
  color: neutral
  variant: outline
slots:
  default: Badge
---
::

### サイズ

`size`プロパティを使用してバッジのサイズを変更します。

::component-code
---
props:
  size: xl
slots:
  default: Badge
---
::

### Icon

`icon`プロパティを使用して、バッジ内の[Icon](/docs/components/icon)を表示します。

::component-code
---
props:
  icon: i-lucide-rocket
  size: md
  color: primary
  variant: solid
slots:
  default: Badge
---
::

アイコンの位置を設定するには`leading`と`trailing`の小道具を使用し、位置ごとに異なるアイコンを設定するには`leading-icon`と`trailing-icon`の小道具を使用します。

::component-code
---
props:
  trailingIcon: i-lucide-arrow-right
  size: md
slots:
  default: Badge
---
::

### アバター

`avatar`プロパティを使用して、バッジ内の[Avatar](/docs/components/avatar)を表示します。

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  color: neutral
  variant: outline
slots:
  default: |

    Badge
---
::

## 例

### `class`プロップ

`class`プロパティを使用して、バッジの基本スタイルを上書きします。

::component-code
---
props:
  class: 'font-bold rounded-full'
slots:
  default: Badge
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

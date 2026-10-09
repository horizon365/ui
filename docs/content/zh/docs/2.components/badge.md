---
description: 表示状态或类别的简短文本。
category: element
keywords:
  - tag
  - pill
  - label
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Badge.vue
---

## 用法

使用默认插槽设置Badge的标签。

::component-code
---
slots:
  default: Badge
---
::

### Label

使用`label`道具设置徽章的标签。

::component-code
---
props:
  label: Badge
---
::

### 颜色

使用`color`道具来改变徽章的颜色。

::component-code
---
props:
  color: neutral
slots:
  default: Badge
---
::

### Variant

使用`variant`道具来改变徽章的变体。

::component-code
---
props:
  color: neutral
  variant: outline
slots:
  default: Badge
---
::

### Size

使用`size`道具更改徽章的大小。

::component-code
---
props:
  size: xl
slots:
  default: Badge
---
::

### Icon

使用`icon`道具在徽章内显示[Icon](/docs/components/icon)。

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

使用`leading`和`trailing`道具设置图标位置，或使用`leading-icon`和`trailing-icon`道具为每个位置设置不同的图标。

::component-code
---
props:
  trailingIcon: i-lucide-arrow-right
  size: md
slots:
  default: Badge
---
::

### 头像

使用`avatar`道具在徽章内显示[Avatar](/docs/components/avatar)。

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

## 示例

### `class`道具

使用`class`道具覆盖徽章的基本样式。

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

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog

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

## 使用情况

使用默认插槽设置Badge的标签。

::component-code
---
插槽：
  默认值：徽章
---
::

### Label

使用`label`道具设置徽章的标签。

::component-code
---
道具：
  标签：徽章
---
::

### Color

使用`color`道具改变徽章的颜色。

::component-code
---
道具：
  颜色：中性
插槽：
  默认值：徽章
---
::

### Variant

使用`variant`道具更改徽章的变体。

::component-code
---
道具：
  颜色：中性
  变体：轮廓
插槽：
  默认值：徽章
---
::

### Size

使用`size`道具更改徽章的大小。

::component-code
---
道具：
  尺寸：xl
插槽：
  默认值：标记
---
::

### Icon

使用`icon`道具在徽章内显示[Icon](/docs/components/icon)。

::component-code
---
道具：
  图标：i-lucide-火箭
  尺寸：md
  颜色：原色
  变体：实心
插槽：
  默认值：徽章
---
::

使用`leading`和`trailing`道具设置图标位置，或使用`leading-icon`和`trailing-icon`道具为每个位置设置不同的图标。

::component-code
---
道具：
  trailingIcon：i-lucide-arrow-right
  尺寸：md
插槽：
  默认值：徽章
---
::

阿凡达

使用`avatar`道具在徽章内显示[](/docs/components/avatar)。

::component-code
---
更漂亮：真的
忽略：
- 头像.加载中
道具：
  头像：
    来源：'https：//github.com/nuxt.png'
    加载：惰性
  尺寸：md
  颜色：中性
  变体：轮廓
插槽：
  默认值：|

    徽章
---
::

示例

道具：

使用`class`道具覆盖徽章的基本样式。

::component-code
---
道具：
  类别：'粗体四舍五入完整字型'
插槽：
  默认值：徽章
---
::

## 活性成分

道具

：组件-支柱

插槽

：组件插槽

主题

：组件主题

## 变更日志

：组件更改日志

---
description: 水平或垂直分隔内容。
category: element
keywords:
  - divider
  - hr
  - horizontal rule
links:
  - label: 分离器
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/separator
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Separator.vue
---

## 使用情况

按原样使用分隔符组件分隔内容。

::component-code
---
类别：'p-8'
---
::

方向

使用`orientation`属性来变更分隔符号的方向。预设为`horizontal`。

::component-code
---
忽略：
  班级
类别：'p-8'
道具：
  方向：垂直
  类别：'h-48'
---
::

标签

使用`label`道具在分隔符中间显示标签。

::component-code
---
类别：'p-8'
道具：
  标签：“Hello World”
---
::

### 位置：徽章{label="4.8+" class="align-text-top"}

使用`position`属性来变更分隔符号内容的位置。预设值为`center`。

::component-code
---
忽略：
  班级
类别：'p-8'
道具：
  位置：开始
  标签：“Hello World”
---
::

### 图标

使用`icon`道具在分隔符中间显示图标。

::component-code
---
类别：'p-8'
道具：
  图标：“简单图标-nuxtdotjs”
---
::

虚拟人偶

使用`avatar`道具在分隔符中间显示一个虚拟形象。

::component-code
---
更漂亮：真的
类别：'p-8'
忽略：
- 虚拟形象.加载中
道具：
  头像：
    来源：'https：//github.com/nuxt.png'
    加载：惰性
---
::

颜色

使用`color`道具将Separator. png的颜色更改为`neutral`。

::component-code
---
类别：'p-8'
道具：
  颜色：原色
  类型：实心
---
::

### Type

使用`type`属性将Separator. png的类型更改为`solid`。

::component-code
---
类别：'p-8'
道具：
  类型：虚线
---
::

### Size

使用`size`道具将Separator. gif的大小更改为`xs`。

::component-code
---
类别：'p-8'
道具：
  Size：lg
---
::

## API

### Props

：组件-支柱

### Slots

：组件插槽

## Theme

：组件主题

## Changelog

：组件更改日志

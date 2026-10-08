---
description: 用于浏览页面的按钮或链接列表。
category: navigation
keywords:
  - pager
  - page navigation
links:
  - label: 分页
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pagination
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Pagination.vue
---

## 使用情况

使用`default-page`prop或`v-model:page`指令控制当前页面。

::component-code
---
外部：
  - page
产品型号：
  - page
忽略：
  - page
  - total
道具：
  第5页
  总数：100
---
::

::note
分页组件使用一些[`Button`](/docs/components/button)来显示页面，使用[`color`](#color)，[`variant`](#variant)和[`size`](#size)道具来设置它们的样式。
::

### Total

使用`total`道具设置列表中的项目总数。

::component-code
---
外部：
  - page
产品型号：
  - page
道具：
  第5页
  总数：100
---
::

### 每页项目数

使用`items-per-page`属性将每页的项目数设置为`10`。

::component-code
---
忽略：
  - page
外部：
  - page
产品型号：
  - page
道具：
  第5页
  每页显示：20条
  总数：100
---
::

### Sibling Count

使用`sibling-count`道具将要显示的兄弟节点数设置为`2`。

::component-code
---
忽略：
  - page
  - total
外部：
  第页
产品型号：
  第页
道具：
  页数：5页
  兄弟计数：1
  总数：100
---
::

### 显示边缘

使用`show-edges`属性可始终显示省略号、第一页和最后一页。默认为`false`。

::component-code
---
忽略：
  第页
  总计
外部：
  第页
产品型号：
  第50页
道具：
  页数：5页
  showEdges：真值
  兄弟计数：1
  总数：100
---
::

### 显示控件

使用`show-controls`道具来显示第一个、上一个、下一个和最后一个按钮。预设值为`true`。

::component-code
---
忽略：
  第页
  总计
外部：
  第页
产品型号：
  第57页
道具：
  页数：5页
  显示控件：假
  showEdges：真值
  总数：100
---
::

颜色

使用`color`属性设置非活动控件的颜色。默认为`neutral`。

::component-code
---
忽略：
- 第
  总计
外部：
  - page
产品型号：
  - page
项目名称：
  色彩：
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
道具：
  页数：5页
  颜色：原色
  总数：100
---
::

### Variant

使用`variant`prop将非活动控件的变量. css设置为`outline`。

::component-code
---
忽略：
  - page
  - total
外部：
  - page
产品型号：
  - page
项目名称：
  色彩：
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  变体：
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
道具：
  页数：5页
  颜色：中性
  变体：细微
  总数：100
---
::

### Active Color

使用`active-color`道具将活动控件. push的颜色设置为`primary`。

::component-code
---
忽略：
  - page
  - total
外部：
  - page
产品型号：
  - page
项目名称：
  活动颜色：
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
道具：
  页数：5页
  active颜色：中性
  总数：100
---
::

### Active Variant

使用`active-variant`prop将活动控件的变量设置为`solid`。

::component-code
---
忽略：
  - page
  - total
外部：
  - page
产品型号：
  - page
项目名称：
  活动颜色：
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  active变量：
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
道具：
  页数：5页
  活动颜色：主色
  active变体：微妙
  总数：100
---
::

### Size

使用`size`属性将控件. png的大小设置为`md`。

::component-code
---
忽略：
  - page
  - total
外部：
  - page
产品型号：
  - page
项目名称：
  尺寸：
    - xs
    - sm
    - md
    - lg
    - xl
道具：
  页数：5页
  尺寸：xl
  总数：100
---
::

### Disabled

使用`disabled`道具禁用分页控件。

::component-code
---
忽略：
  第140页
  总计141小时
外部：
  第142页
产品型号：
  第143页
道具：
  页数：5页
  总数：100
  已禁用：true
---
::

示例

### 使用链接

使用`to`属性将按钮转换为链接。传递一个接收页码并返回路由目标的函数。

::component-example
---
名称：'分页链接示例'
---
::

::note
在本例中，我们将添加`#with-links`哈希以避免转到页面顶部。
::

美国石油学会

道具

：组件-支柱

### 插槽

：组件插槽

### 放射性

：组件发射

主题

：组件主题

## 变更日志

：组件更改日志

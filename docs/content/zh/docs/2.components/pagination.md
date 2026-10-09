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

## 用法

使用`default-page` prop或`v-model:page`指令控制当前页面。

::component-code
---
external:
  - page
model:
  - page
ignore:
  - page
  - total
props:
  page: 5
  total: 100
---
::

::note
Pagination组件使用一些[`Button`](/docs/components/button)来显示页面，使用[`color`](#color)，[`variant`](#variant)和[`size`](#size)道具来样式化它们。
::

### 总计

使用`total`属性设置列表中的项目总数。

::component-code
---
external:
  - page
model:
  - page
props:
  page: 5
  total: 100
---
::

### 每页项目数

使用`items-per-page`属性将每页的项目数设置为`10`。

::component-code
---
ignore:
  - page
external:
  - page
model:
  - page
props:
  page: 5
  itemsPerPage: 20
  total: 100
---
::

### 同胞计数

使用`sibling-count`属性将要显示的兄弟节点数设置为`2`。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  siblingCount: 1
  total: 100
---
::

### 显示边缘

使用`show-edges`属性总是显示省略号，第一页和最后一页。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  showEdges: true
  siblingCount: 1
  total: 100
---
::

### 显示控件

使用`show-controls`道具来显示第一个，上一个，下一个和最后一个按钮。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  showControls: false
  showEdges: true
  total: 100
---
::

### Color

使用`color`属性将非活动控件的颜色设置为`neutral`。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  page: 5
  color: primary
  total: 100
---
::

### Variant

使用`variant`属性将非活动控件的变量设置为`outline`。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  variant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  page: 5
  color: neutral
  variant: subtle
  total: 100
---
::

### Active Color

使用`active-color`属性将活动控件的颜色设置为`primary`。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  page: 5
  activeColor: neutral
  total: 100
---
::

### 活动变体

使用`active-variant` prop将活动控件的变量. css设置为`solid`。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  activeVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  page: 5
  activeColor: primary
  activeVariant: subtle
  total: 100
---
::

### Size

使用`size`属性将controls.xml的大小设置为`md`。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  size:
    - xs
    - sm
    - md
    - lg
    - xl
props:
  page: 5
  size: xl
  total: 100
---
::

### 禁用

使用`disabled`属性禁用分页控件。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  total: 100
  disabled: true
---
::

## 示例

### 带链接

使用`to` prop将按钮转换为链接。传递一个函数，该函数接收页码并返回路由目的地。

::component-example
---
name: 'pagination-links-example'
---
::

::note
在这个例子中，我们添加了`#with-links`散列，以避免进入页面顶部。
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog

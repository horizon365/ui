---
title: 仪表板面板
description: '要在仪表板中显示的可调整大小的面板。'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardPanel.vue
---

## 用法

DashboardPanel组件用于显示面板。其状态（大小，折叠等）将根据您提供给[DashboardGroup](/docs/components/dashboard-group#props)组件的`storage`和`storage-key`属性保存。

在[DashboardGroup](/docs/components/dashboard-group)组件的默认插槽中使用它，您可以将多个面板彼此相邻放置：

```vue [pages/index.vue]{8,10}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel id="inbox-1" resizable />

  <UDashboardPanel id="inbox-2" class="hidden lg:flex" />
</template>
```

::caution
在不同页面中使用多个面板时，建议设置一个`id`，以避免冲突。
::

::warning
当使用`resizable`属性时，此组件没有单个根元素，因此如果您使用页面过渡或需要单个根进行布局，请将其包装在容器（例如`<div class="flex flex-1">`）中。
::

使用`header`、`body`和`footer`插槽来自定义面板或默认插槽（如果您不想要带填充的可滚动正文）。

::component-example
---
collapse: true
name: 'dashboard-panel-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
大多数情况下，您将使用`header`插槽中的[`DashboardNavbar`](/docs/components/dashboard-navbar)组件。
::

### 可调整大小

使用`resizable`属性使面板可调整大小。

::component-code
---
prettier: true
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  body: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

#body
:placeholder{class="h-96"}
::

### Size

使用`min-size`、`max-size`和`default-size`道具自定义面板的大小。

::component-code
---
prettier: true
ignore:
  - resizable
hide:
  - class
props:
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  body: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

#body
:placeholder{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
默认情况下，大小以百分比计算。您可以使用`DashboardGroup`组件上的`unit`属性来更改此设置。
::

## 应用程序接口

### 道具

:component-props

x插槽

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog

---
title: 仪表板搜索按钮
description: '一个预先设置样式的按钮，用于打开DashboardSearch模式。'
category: dashboard
links:
  - label: 按钮
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearchButton.vue
---

## 用法

DashboardSearchButton组件用于打开[DashboardSearch](/docs/components/dashboard-search)模型。

:component-code

它扩展了[Button](/docs/components/button)组件，因此您可以传递任何属性，如`color`，`variant`，`size`等。

::component-code
---
ignore:
  - variant
props:
  variant: 'subtle'
---
::

::note{to="#collapsed"}
按钮在未折叠时默认为`color="neutral"`和`variant="outline"`，折叠时默认为`variant="ghost"`。
::

### 崩溃

使用`collapsed`道具隐藏按钮的标签，并将[kbds](#kbds). `false`隐藏。

::component-code
---
prettier: true
props:
  collapsed: true
---
::

::tip{to="/docs/components/dashboard-sidebar#slots"}
当使用**DashboardSidebar**组件中的按钮时，直接使用`collapsed`插槽道具。
::

### Kbds

使用`kbds`属性在button. `['meta', 'K']`{lang="ts-type"}中显示键盘键，以匹配[DashboardSearch](/docs/components/dashboard-search#shortcut)组件的默认快捷方式。

::component-code
---
prettier: true
ignore:
  - kbds
props:
  collapsed: false
  kbds:
    - 'alt'
    - 'O'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
此组件还支持所有原生`<button>` HTML属性。
::

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog

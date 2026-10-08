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

## 使用情况

仪表板搜索按钮组件用于打开[仪表板搜索](/docs/components/dashboard-search)模式。

：组件代码

它扩展了[Button](/docs/components/button)组件，因此您可以传递任何属性，如`color`、`variant`、`size`等。

::component-code
---
忽略：
- 变体
道具：
  变体："细微"
---
::

::note{to="#collapsed"}
未折叠时，按钮默认为`color="neutral"`和`variant="outline"`，折叠时默认为`variant="ghost"`。
::

已折叠

使用`collapsed`属性隐藏按钮的标签和[kbds](#kbds)。预设值为`false`。

::component-code
---
更漂亮：真的
道具：
  折叠：true
---
::

::tip{to="/docs/components/dashboard-sidebar#slots"}
使用**DashboardSidebar**组件中的按钮时，请直接使用`collapsed`插槽属性。
::

### 千桶

使用`kbds`属性可在按钮中显示键盘键。默认值为`['meta', 'K']`{lang="ts-type"}，以匹配[DashboardSearch](/docs/components/dashboard-search#shortcut)组件的默认快捷方式。

::component-code
---
更漂亮：真的
忽略：
  34千桶
道具：
  折叠：false
  千字节数：
    - '替换'
    - 'O '号
---
::

美国石油学会

道具

：组件-支柱

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
此组件还支持所有本机`<button>`HTML属性。
::

插槽

：组件插槽

主题

：组件主题

## 变更日志

：组件更改日志

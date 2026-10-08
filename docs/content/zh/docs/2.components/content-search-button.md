---
title: ContentSearchButton
description: '一个预先设置样式的按钮，用于打开ContentSearch模式。'
category: content
framework: nuxt
links:
  - label: 按钮
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearchButton.vue
---

::warning{to="/docs/getting-started/integrations/content"}
此组件仅在安装了`@nuxt/content`模块时可用。
::

## 用法

内容搜索按钮组件用于打开[内容搜索](/docs/components/content-search)模式。

：组件代码{prefix="content"}

它扩展了[Button](/docs/components/button)组件，因此您可以传递任何属性，如`color`、`variant`、`size`等。

::component-code{prefix="content"}
---
忽略：
- 变体
道具：
  变体：“细微”
---
::

::note{to="#collapsed"}
未折叠时，按钮默认为`color="neutral"`和`variant="outline"`，折叠时默认为`variant="ghost"`。
::

已折叠

使用`collapsed`属性来显示按钮的标签和[kbds](#kbds)。预设值为`true`。

::component-code{prefix="content"}
---
更漂亮：真的
道具：
  折叠：false
---
::

### 千桶

使用`kbds`属性可在按钮中显示键盘键。默认为`['meta', 'K']`{lang="ts-type"}，以匹配[ContentSearch](/docs/components/content-search#shortcut)组件的默认快捷方式。

::component-code{prefix="content"}
---
更漂亮：真的
忽略：
- 千桶
道具：
  折叠：false
  千字节数：
    - '替换'
    - 'O'号
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

：组件更改日志{prefix="content"}

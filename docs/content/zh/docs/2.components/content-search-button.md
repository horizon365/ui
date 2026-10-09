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
此组件仅在安装`@nuxt/content`模块时可用。
::

## 用法

ContentSearchButton组件用于打开[ContentSearch](/docs/components/content-search)模型。

:component-code{prefix="content"}

它扩展了[Button](/docs/components/button)组件，因此您可以传递任何属性，如`color`，`variant`，`size`等。

::component-code{prefix="content"}
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

使用`collapsed`道具显示按钮的标签，并将[kbds](#kbds). `true`转换为`true`。

::component-code{prefix="content"}
---
prettier: true
props:
  collapsed: false
---
::

### Kbds

使用`kbds` prop在button中显示键盘键。将`['meta', 'K']`{lang="ts-type"}替换为[ContentSearch](/docs/components/content-search#shortcut)组件的默认快捷方式。

::component-code{prefix="content"}
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

:component-changelog{prefix="content"}

---
description: 一个组件，用于显示来自Iconify或其他组件的任何图标。
category: element
keywords:
  - svg
  - iconify
  - symbol
links:
  - label: 图标化
    to: https://iconify.design/
    target: _blank
    icon: i-simple-icons-iconify
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Icon.vue
---

## 用法

使用`name`道具显示图标。

::component-code
---
props:
  name: 'i-lucide-lightbulb'
  class: 'size-5'
---
::

::note
您可以使用<https://iconify.design>集合中的任何名称。在<https://icones.js.org>上轻松浏览它们，或使用[`search-icons`](/docs/getting-started/ai/mcp#available-tools) MCP工具直接从AI助手搜索。
::

::framework-only
#nuxt
:::caution{to="/docs/getting-started/integrations/icons/nuxt#collections"}
强烈建议您安装所需的图标集，阅读更多有关此的信息。
:::
::

## 示例

### SVG

你也可以将一个Vue组件传入`name` prop：

::component-example
---
name: 'icon-svg-example'
---
::

您可以自己定义图标组件，或使用[`unplugin-icons`](https://github.com/unplugin/unplugin-icons)直接从SVG文件导入它们：

```vue
<script setup lang="ts">
import IconLightbulb from '~icons/lucide/lightbulb'
</script>

<template>
  <UIcon :name="IconLightbulb" class="size-5" />
</template>
```

## API

### Props

:component-props

## Changelog

:component-changelog

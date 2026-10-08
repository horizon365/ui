---
title: 帕吉奥尔
description: '要在页面中显示的锚列表。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAnchors.vue
---

## 使用情况

使用PageAnchors组件可显示链接列表。

::component-code
---
收阖：true
更漂亮：真的
忽略：
  链接
外部：
  链接
外部类型：
  页面锚点[]
道具：
  链接：
    - 标签：“文档”
      图标：i-lucide-书本-打开
      到：/docs/开始使用
    - 标签：“组件”
      图标：i-lucide-box（液晶盒）
      到：/docs/组件
    - 标签：“菲格玛工具包”
      图标：i-simple-icons-figma（简单图标）
      发送至：https://go.nuxt.com/figma-ui
      目标：空白（_B）
    - 标签：“版本”
      图标：i-simple-图标-github
      发送至：https://github.com/nuxt/ui/releases
      目标：空白（_B）
---
::

链接

使用`links`属性作为具有下列属性的对象数组：

我的天啊！
我的天啊！
我的天啊！
019、020、021、

您可以从[Link](/docs/components/link#props)元件传递任何属性，例如`to`、`target`等。

::component-code
---
更漂亮：真的
忽略：
  链接链接
外部：
  链接
外部类型：
  页面锚点[]
道具：
  链接：
    - label：'文档'
      图标：i-lucide-book-open
      到：/docs/getting-started
    - label：'组件'
      图标：i-lucide-box（液晶盒）
      到：/docs/组件
    - label：'Figma Kit'
      图标：i-simple-icons-figma
      发送至：https://go.nuxt.com/figma-ui
      目标：空白（_B）
    - label：'发布'
      图标：i-simple-图标-github
      发送至：https://github.com/nuxt/ui/releases
      目标：空白（_B）
---
::

## 示例

::note
虽然这些示例使用[Nuxt Content](https://content.nuxt.com)，但这些组件可以与任何内容管理系统集成。
::

### 布局内

使用[PageAside](/docs/components/page-aside)组件中的PageAsideors组件在导航上方显示链接列表。

```vue [layouts/docs.vue]{35}
<script setup lang="ts">
import type { PageAnchor } from '@nuxt/ui'
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<ContentNavigationItem[]>('navigation')

const links: PageAnchor[] = [{
  label: 'Documentation',
  icon: 'i-lucide-book-open',
  to: '/docs/getting-started'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  to: '/docs/components'
}, {
  label: 'Figma Kit',
  icon: 'i-simple-icons-figma',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UPageAnchors :links="links" />

        <USeparator type="dashed" />

        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

美国石油学会

道具

：组件-支柱

### Slots

：组件插槽

主题

：组件主题

## Changelog

：组件更改日志

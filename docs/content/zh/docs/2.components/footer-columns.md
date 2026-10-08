---
title: FooterColumns
description: '作为列显示在页脚中的链接列表。'
category: navigation
keywords:
  - footer links
  - sitemap
  - columns
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FooterColumns.vue
---

## 使用情况

FooterColumns组件会呈现要在页脚中显示的列的列表。

请在[页脚](组件的/docs/components/footer插槽中使用它：

```vue {3-7}
<template>
  <UFooter>
    <template #top>
      <UContainer>
        <UFooterColumns />
      </UContainer>
    </template>
  </UFooter>
</template>
```

### 列

使用`columns`属性作为具有下列属性的对象数组：

019、020、021、
022号，023号

每一栏都包含定义链接之物件的`children`数组。每个链接都可以有下列属性：

我的天啊！
我的天啊！
我的天啊！
我的天啊！

您可以从[Link](/docs/components/link#props)元件传递任何属性，例如`to`、`target`等。

::component-example
---
更漂亮：真的
名称：'页脚列示例'
类别：'p-8'
道具：
  类别：'w-完整'
---
::

美国石油学会

道具

：组件-支柱

插槽

：组件插槽

主题

：组件主题

## 变更日志

：组件更改日志

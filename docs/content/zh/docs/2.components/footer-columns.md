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

## 用法

FooterColumns组件会呈现要在页脚中显示的列的列表。

在[Footer](/docs/components/footer)组件的`top`插槽中使用：

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

使用`columns` prop作为具有以下属性的对象数组：

- `label: string`{lang="ts-type"}
- `children?: FooterColumnLink[]`{lang="ts-type"}

每列包含一个`children`对象数组，用于定义链接。每个链接可以具有以下属性：

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"}

您可以从[Link](/docs/components/link#props)组件传递任何属性，如`to`、`target`等。

::component-example
---
prettier: true
name: 'footer-columns-example'
class: 'p-8'
props:
  class: 'w-full'
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog

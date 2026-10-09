---
title: 帕吉奥尔
description: '要在页面中显示的锚列表。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAnchors.vue
---

## 用法

使用PageSender组件显示链接列表。

::component-code
---
collapse: true
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageAnchor[]
props:
  links:
    - label: 'Documentation'
      icon: i-lucide-book-open
      to: /docs/getting-started
    - label: 'Components'
      icon: i-lucide-box
      to: /docs/components
    - label: 'Figma Kit'
      icon: i-simple-icons-figma
      to: https://go.nuxt.com/figma-ui
      target: _blank
    - label: 'Releases'
      icon: i-simple-icons-github
      to: https://github.com/nuxt/ui/releases
      target: _blank
---
::

### 链接

使用`links` prop作为具有以下属性的对象数组：

- `label: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeading?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"}

可以从[Link](/docs/components/link#props)组件传递任何属性，如`to`、`target`等。

::component-code
---
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageAnchor[]
props:
  links:
    - label: 'Documentation'
      icon: i-lucide-book-open
      to: /docs/getting-started
    - label: 'Components'
      icon: i-lucide-box
      to: /docs/components
    - label: 'Figma Kit'
      icon: i-simple-icons-figma
      to: https://go.nuxt.com/figma-ui
      target: _blank
    - label: 'Releases'
      icon: i-simple-icons-github
      to: https://github.com/nuxt/ui/releases
      target: _blank
---
::

## 示例

::note
虽然这些示例使用[Nuxt Content](https://content.nuxt.com)，但这些组件可以与任何内容管理系统集成。
::

### 在布局中

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

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog

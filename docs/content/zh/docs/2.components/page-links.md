---
title: 页面链接
description: '要在页面中显示的链接列表。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLinks.vue
---

## 用法

使用PageLinks组件显示链接列表。

::component-code
---
collapse: true
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageLink[]
props:
  links:
    - label: 'Edit this page'
      icon: i-lucide-file-pen
      to: https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label: 'Star on GitHub'
      icon: i-lucide-star
      to: https://github.com/nuxt/ui
    - label: 'Releases'
      icon: i-lucide-rocket
      to: https://github.com/nuxt/ui/releases
---
::

### 链接

使用`links` prop作为具有以下属性的对象数组：

- `label: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"}

可以从[Link](/docs/components/link#props)组件传递任何属性，如`to`、`target`等。

::component-code
---
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageLink[]
props:
  links:
    - label: 'Edit this page'
      icon: i-lucide-file-pen
      to: https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label: 'Star on GitHub'
      icon: i-lucide-star
      to: https://github.com/nuxt/ui
    - label: 'Releases'
      icon: i-lucide-rocket
      to: https://github.com/nuxt/ui/releases
---
::

### 标题

使用`title`道具在链接上方显示标题。

::component-code
---
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageLink[]
props:
  title: 'Community'
  links:
    - label: 'Edit this page'
      icon: i-lucide-file-pen
      to: https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label: 'Star on GitHub'
      icon: i-lucide-star
      to: https://github.com/nuxt/ui
    - label: 'Releases'
      icon: i-lucide-rocket
      to: https://github.com/nuxt/ui/releases
---
::

## 示例

::note
虽然这些示例使用[Nuxt Content](https://content.nuxt.com)，但这些组件可以与任何内容管理系统集成。
::

### 页面内

使用ContentToc组件的`bottom`插槽中的PageLinks组件可以在目录下显示链接列表。

```vue [pages/\[...slug\\].vue]{48-52}
<script setup lang="ts">
import type { PageLink } from '@nuxt/ui'

const route = useRoute()

definePageMeta({
  layout: 'docs'
})

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('content', route.path)
})

const links = computed<PageLink[]>(() => [{
  icon: 'i-lucide-file-pen',
  label: 'Edit this page',
  to: `https://github.com/nuxt/ui/edit/v4/docs/content/${page?.value?.stem}.md`,
  target: '_blank'
}, {
  icon: 'i-lucide-star',
  label: 'Star on GitHub',
  to: 'https://github.com/nuxt/ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases'
}])
</script>

<template>
  <UPage>
    <UPageHeader :title="page.title" :description="page.description" />

    <UPageBody>
      <ContentRenderer :value="page" />

      <USeparator />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template #right>
      <UContentToc :links="page.body.toc.links">
        <template #bottom>
          <USeparator type="dashed" />

          <UPageLinks title="Community" :links="links" />
        </template>
      </UContentToc>
    </template>
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

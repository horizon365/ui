---
description: '具有左右列的页面网格布局。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Page.vue
---

## 用法

“页面”组件帮助您创建具有可选左栏和右栏的布局。它非常适合构建文档站点和其他以内容为中心的页面。

```vue {2,6}
<template>
  <UPage>
    <template #left />

    <template #right />
  </UPage>
</template>
```

::tip
如果未指定插槽，则页面将显示为居中单列布局。
::

示例：

::note
虽然这些示例使用[Nuxt Content](https://content.nuxt.com)，但这些组件可以与任何内容管理系统集成。
::

### 在布局内

在具有`left`插槽的布局中使用Page组件可显示导航：

```vue [layouts/docs.vue] {9-13}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

::note
在本例中，我们使用`ContentNavigation`组件来显示`app.vue`中注入的导航。
::

### 在页面内

在具有`right`插槽的页面中使用Page组件来显示目录：

```vue [pages/\[...slug\\].vue]{29-31}
<script setup lang="ts">
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
      <UContentToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>
```

::note
在本例中，我们使用`ContentToc`组件显示目录。
::

## 应用程序接口

### 道具

:component-props

### 插槽

:component-slots

## 主题

:component-theme

## 更改日志

:component-changelog

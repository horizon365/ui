---
title: 内容搜索
description: '一个随时可用的命令行添加到您的文档中。'
category: content
framework: nuxt
links:
  - label: 指挥官
    to: /docs/components/command-palette
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearch.vue
---

::warning{to="/docs/getting-started/integrations/content"}
此组件仅在安装`@nuxt/content`模块时可用。
::

## 用法

ContentSearch组件扩展了[CommandPalette](/docs/components/command-palette)组件，内置了[`@nuxt/content`](https://content.nuxt.com)搜索支持，导航分组和颜色模式命令。它同时支持客户端[Fuse.js](https://www.fusejs.io/)过滤和服务器端[FTS 5完整-text search](https://www.sqlite.org/fts5.html)。您可以传递任何Command属性，如`icon`、`placeholder`等。

::component-example
---
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
source: false
name: 'content-search-example'
---
::

::note
您可以通过按：kbd{value="meta"}：kbd{value="K" class="ms-px"}、使用[ContentSearchButton](/docs/components/content-search-button)组件或使用`useContentSearch`组合：`const { open } = useContentSearch()`{lang="ts"}来打开CommandButton。
::

::tip
建议将`ContentSearch`组件包装在[ClientOnly](https://nuxt.com/docs/api/components/client-only)组件中，这样它就不会呈现在服务器上。
::

### 导航

将`navigation`属性与[`queryCollectionNavigation`](https://content.nuxt.com/docs/utils/query-collection-navigation)一起使用，可以按部分对搜索结果进行分组：

```vue [app.vue] {2, 9}
<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))
</script>

<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
</template>
```

### 文件

使用`files` prop和[`queryCollectionSearchSections`](https://content.nuxt.com/docs/utils/query-collection-search-sections)预先加载所有搜索部分，并使用客户端[Fuse.js](https://www.fusejs.io/)过滤：

```vue [app.vue] {4-8, 16}
<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))

const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs', {
  ignoredTags: ['style']
}), {
  server: false
})
</script>

<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        :navigation="navigation"
        :files="files"
        :fuse="{ resultLimit: 20, fuseOptions: { threshold: 0.2 } }"
      />
    </ClientOnly>
  </UApp>
</template>
```

::tip
使用`fuse`属性配置[useFuse](https://vueuse.org/integrations/useFuse)传递到底层[CommandPalette](/docs/components/command-palette)的选项，如`resultLimit`（默认`12`）和`fuseOptions.threshold`（默认`0.1`）。
::

### 搜索：badge{label="4.8+" class="align-text-top"}

将`search` prop与[`useSearchCollection`](https://content.nuxt.com/docs/utils/use-search-collection)配合使用，以进行服务器端[FTS 5全文搜索](https://www.sqlite.org/fts5.html)，突出显示片段，而不是客户端筛选：

::warning
需要`@nuxt/content` v3.14+。
::

```vue [app.vue] {4-7, 24-25}
<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))

const { search, status, init } = useSearchCollection('content', {
  immediate: false,
  ignoredTags: ['style']
})

const { open } = useContentSearch()

// Defer index initialization until the user opens the palette when using `immediate: false`
watch(open, (value) => {
  if (value && status.value === 'idle') {
    init()
  }
})
</script>

<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        :navigation="navigation"
        :search="search"
        :search-status="status"
      />
    </ClientOnly>
  </UApp>
</template>
```

::tip
传递`search-status`，以便组件可以在索引准备就绪后自动重新触发搜索。使用`search-delay`（默认`100ms`）控制在搜索触发前必须暂停输入的时间。`fuse.resultLimit`选项限制所有组（搜索结果，链接，主题等）返回的总结果。
::

::note
当使用`search` prop时，您不需要传递`files`。组件在每个子目录上调用fixc搜索函数，而不是Fuse.js。结果会自动映射并按导航进行分组，并突出显示片段。与`files`方法不同，`search` prop只在输入查询后返回结果。`files`方法预先加载所有搜索部分，并允许您在输入前浏览导航项。
::

### php

使用`shortcut`属性将[defineShortcuts](/docs/composables/define-shortcuts)中用于打开ContentSearch组件的快捷方式. png更改为`meta_k`（：kbd{value="meta"}：kbd{value="K"}）。

```vue [app.vue]{5}
<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        shortcut="meta_k"
      />
    </ClientOnly>
  </UApp>
</template>
```

### 链接

使用`links` prop在命令面板顶部添加一组快速访问链接：

```vue [app.vue] {21}
<script setup lang="ts">
const links = [{
  label: 'Docs',
  icon: 'i-lucide-book',
  to: '/docs/getting-started'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  to: '/docs/components'
}, {
  label: 'Showcase',
  icon: 'i-lucide-presentation',
  to: '/showcase'
}]
</script>

<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        :links="links"
      />
    </ClientOnly>
  </UApp>
</template>
```

### 颜色模式

默认情况下，一组命令会被添加到命令面板中，这样你就可以在亮暗模式之间切换。这只会在特定页面中不强制`colorMode`的情况下生效，这可以通过`definePageMeta`来实现：

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

您可以通过将`color-mode`属性设置为`false`来禁用此行为：

```vue [app.vue]{5}
<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        :color-mode="false"
      />
    </ClientOnly>
  </UApp>
</template>
```

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

### Expose

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| `commandPaletteRef`{lang="ts-type"}| `Ref<InstanceType<typeof UCommandPalette> \| null>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog{prefix="content"}

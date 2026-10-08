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
此组件仅在安装了`@nuxt/content`模块时可用。
::

## 用法

内容搜索组件使用内置的[`@nuxt/content`](https://content.nuxt.com)搜索支持来扩展[CommandPalette](PH07)component，导航分组和颜色模式命令，同时支持客户端[Fuse.js](https://www.fusejs.io/)过滤和服务器端[FTS5全文搜索](https://www.sqlite.org/fts5.html)。您可以传递任何CommandPalette属性，例如`icon`、`placeholder`等。

::component-example
---
iframe：
  高度：500 px;
iframeMobile：真的
overflowHidden：真的
资料来源：错误
名称：'内容搜索示例'
---
::

::note
您可以按下：kbd{value="meta"}：kbd{value="K" class="ms-px"}、使用[ContentSearchButton](/docs/components/content-search-button)组件或使用`useContentSearch`可组合：`const { open } = useContentSearch()`{lang="ts"}来开启[命令调色盘]。
::

::tip
建议您将`ContentSearch`组件包装在[ClientOnly](https://nuxt.com/docs/api/components/client-only)组件中，这样就不会在服务器上呈现该组件。
::

导航功能

将`navigation`属性与[`queryCollectionNavigation`](https://content.nuxt.com/docs/utils/query-collection-navigation)配合使用，可按节对搜索结果进行分组：

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

文件夹

将`files`属性与[`queryCollectionSearchSections`](https://content.nuxt.com/docs/utils/query-collection-search-sections)配合使用，以便预先加载所有搜索节，并使用客户端[Fuse.js](https://www.fusejs.io/)筛选：

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
使用`fuse`属性配置传递给底层[CommandPalette](/docs/components/command-palette)的[useFuse](https://vueuse.org/integrations/useFuse)选项，例如`resultLimit`（默认值为`12`）和`fuseOptions.threshold`（默认值为`0.1`）。
::

### 搜索：徽章{label="4.8+" class="align-text-top"}

将`search`属性与[`useSearchCollection`](https://content.nuxt.com/docs/utils/use-search-collection)搭配使用，以进行服务器端[FTS5全文查找搜寻](https://www.sqlite.org/fts5.html)搭配反白显示的程式码片段，而非客户端筛选：

::warning
需要`@nuxt/content`v3.14以上版本。
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
传递`search-status`，以便在索引准备就绪后，组件可以自动重新触发搜索。使用`search-delay`（默认为`100ms`）可控制在触发搜索之前必须暂停键入的时间。`fuse.resultLimit`选项可限制所有组（搜索结果、链接、主题等）中返回的总结果。
::

::note
当使用`search`属性时，您不需要传递`files`。该组件在每次击键时调用异步搜索函数，而不是Fuse.js。结果将自动映射并按导航进行分组，并突出显示代码段。与`files`方法不同的是，`files`方法会预先加载所有搜索部分，并允许您在键入之前浏览导航项。`search`属性仅在输入查询后返回结果。
::

### 快捷方式

使用`shortcut`属性可更改[defineShortcuts](/docs/composables/define-shortcuts)中用于打开内容搜索组件的快捷方式。默认为`meta_k`（：kbd{value="meta"}：kbd{value="K"}）。

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

使用`links`属性在命令调板顶部添加一组快速访问链接：

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

### 彩色模式

默认情况下，一组命令将被添加到命令调色板中，以便您可以在亮模式和暗模式之间切换。只有当`colorMode`未被强制用于特定页面时，此操作才会生效，这可以通过`definePageMeta`来实现：

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

您可以将`color-mode`属性设定为`false`来停用此行为：

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

## 活性成分

道具

：组件-支柱

### 插槽

：组件插槽

发射性

：组件发射

暴露

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| 233号，235号|236号线|

主题

：组件主题

## Changelog

：component-changelog{prefix="content"}

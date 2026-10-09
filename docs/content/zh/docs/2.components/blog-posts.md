---
title: 博客文章
description: '在响应式网格布局中显示博客文章列表。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPosts.vue
---

## 用法

BlogPosts组件提供了一个灵活的布局，可以使用默认插槽或`posts`属性显示[BlogPost](/docs/components/blog-post)组件的列表。

```vue {2,8}
<template>
  <UBlogPosts>
    <UBlogPost
      v-for="(post, index) in posts"
      :key="index"
      v-bind="post"
    />
  </UBlogPosts>
</template>
```

### 帖子

使用`posts` prop作为具有[BlogPost](/docs/components/blog-post#props)组件属性的对象数组。

::component-code
---
collapse: true
ignore:
  - posts
external:
  - posts
externalTypes:
  - BlogPostProps[]
props:
  posts:
    - title: Nuxt Icon v1
      description: 'Discover Nuxt Icon v1!'
      image: https://nuxt.com/assets/blog/nuxt-icon/cover.png
      date: 2024-11-25
    - title: Nuxt 3.14
      description: 'Nuxt 3.14 is out!'
      image: https://nuxt.com/assets/blog/v3.14.png
      date: 2024-11-04
    - title: Nuxt 3.13
      description: 'Nuxt 3.13 is out!'
      image: https://nuxt.com/assets/blog/v3.13.png
      date: 2024-08-22
---
::

### 定向

使用`orientation`属性将BlogPosts.xml的方向更改为`horizontal`。

::component-code
---
collapse: true
ignore:
  - posts
external:
  - posts
externalTypes:
  - BlogPostProps[]
props:
  orientation: vertical
  posts:
    - title: Nuxt Icon v1
      description: 'Discover Nuxt Icon v1!'
      image: https://nuxt.com/assets/blog/nuxt-icon/cover.png
      date: 2024-11-25
    - title: Nuxt 3.14
      description: 'Nuxt 3.14 is out!'
      image: https://nuxt.com/assets/blog/v3.14.png
      date: 2024-11-04
    - title: Nuxt 3.13
      description: 'Nuxt 3.13 is out!'
      image: https://nuxt.com/assets/blog/v3.13.png
      date: 2024-08-22
---
::

::tip
当使用`posts`道具而不是默认插槽时，帖子的`orientation`会自动反转，`horizontal`到`vertical`，反之亦然。
::

## 示例

::note
虽然这些示例使用[Nuxt Content](https://content.nuxt.com)，但这些组件可以与任何内容管理系统集成。
::

### 页面内

使用页面中的BlogPosts组件创建博客页面：

```vue [pages/blog/index.vue]{11-18}
<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => queryCollection('posts').all())
</script>

<template>
  <UPage>
    <UPageHero title="Blog" />

    <UPageBody>
      <UContainer>
        <UBlogPosts>
          <UBlogPost
            v-for="(post, index) in posts"
            :key="index"
            v-bind="post"
            :to="post.path"
          />
        </UBlogPosts>
      </UContainer>
    </UPageBody>
  </UPage>
</template>
```

::note
在本例中，`posts`是使用`queryCollection`从`@nuxt/content`模块中获取的。
::

::tip
这里`to`属性被覆盖，因为`@nuxt/content`使用`path`属性。
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

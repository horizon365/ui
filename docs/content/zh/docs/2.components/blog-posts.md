---
title: 博客文章
description: '在响应式网格布局中显示博客文章列表。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPosts.vue
---

## 使用情况

BlogPosts组件提供了一种灵活的布局，可使用默认插槽或`posts`属性显示[BlogPost](/docs/components/blog-post)组件的列表。

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

使用`posts`属性作为具有[BlogPost](/docs/components/blog-post#props)组件属性的对象数组。

::component-code
---
收阖：true
忽略：
  帖子
外部：
  帖子
外部类型：
  - BlogPostProps []博客帖子支持
道具：
  职位：
    新图标v1
      描述：'发现Nuxt图标v1!'
      图片：www.example.com
      日期：2024年11月25日
    新版本3.14
      描述："Nuxt 3.14已发布!"
      图片：www.example.com
      日期：2024年11月4日
    新版本3.13
      描述："Nuxt 3.13已经出来了!"
      图片：www.example.com
      日期：2024年8月22日
---
::

定位

使用`orientation`道具更改博客帖子的方向。默认为`horizontal`。

::component-code
---
收阖：true
忽略：
  帖子
外部：
  帖子
外部类型：
  - BlogPostProps []博客帖子
道具：
  方位：垂直
  职位：
    新图标v1
      描述：'发现Nuxt图标v1!'
      图片：www.example.com
      日期：2024年11月25日
    - title：Nuxt 3.14
      描述：“Nuxt 3.14已发布！”
      图片：https://nuxt.com/assets/blog/v3.14.png
      2019 -11-04 - 24
    - title：Nuxt 3.13
      说明：'Nuxt 3.13已经发布了！'
      图片：https://nuxt.com/assets/blog/v3.13.png
      日期：2024年8月22日
---
::

::tip
当使用`posts`道具而不是默认插槽时，立柱的`orientation`会自动反转，从`horizontal`到`vertical`，反之亦然。
::

## Examples

::note
虽然这些示例使用[Nuxt Content](https://content.nuxt.com)，但这些组件可以与任何内容管理系统集成。
::

### 页内

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
在本例中，使用`queryCollection`从`@nuxt/content`模块中获取`posts`。
::

::tip
由于`@nuxt/content`使用了`path`属性，因此在此处覆盖了`to`属性。
::

## API

### Props

：组件-支柱

### Slots

：组件插槽

## Theme

：组件主题

## Changelog

：组件更改日志

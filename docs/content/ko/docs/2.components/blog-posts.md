---
title: 블로그포스트 (BlogPosts)
description: '반응형 그리드 레이아웃에 블로그 게시물 목록을 표시합니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPosts.vue
---

## Usage

BlogPosts 구성 요소는 유연한 레이아웃을 제공하여 기본 슬롯이나 `posts` prop를 사용하여 [BlogPost](xph04x) 구성 요소 목록을 표시합니다.

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

### Posts

`posts` prop을 [BlogPost](/docs/components/blog-post#props) 구성 요소의 속성을 가진 오브젝트 배열로 사용합니다.

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

### 방향

`orientation` prop을 사용하여 BlogPosts.default의 방향을 `horizontal`로 변경합니다.

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
기본 슬롯 대신 `posts` prop을 사용하면 포스트의 `orientation`가 자동으로 반전되고 `horizontal`가 `vertical`로 또는 그 반대의 경우도 마찬가지입니다.
::

## 예

::note
이러한 예제에서는 [Nuxt Content](https://content.nuxt.com)를 사용하지만 구성 요소는 모든 콘텐츠 관리 시스템과 통합 될 수 있습니다.
::

### 페이지 안에서

페이지의 BlogPosts 구성 요소를 사용하여 블로그 페이지를 만들려면:

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
이 예제에서는 `posts`가 `queryCollection` 모듈에서 `queryCollection`를 사용하여 인출됩니다.
::

::tip
`@nuxt/content`가 `path` 속성을 사용하기 때문에 `to` prop이 재정의됩니다.
::

## API 파일

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog

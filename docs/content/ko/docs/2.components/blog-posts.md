---
title: 블로그포스트 (BlogPosts)
description: '반응형 그리드 레이아웃에 블로그 게시물 목록을 표시합니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPosts.vue
---

## 사용

BlogPosts   구성 요소 는   유연 한   레이아웃 을   제공 하 여   기본   슬롯 이나  `posts`prop 을   사용 하 여  [BlogPost](/docs/components/blog-post)구성 요소   목록 을   표시 합니다 .

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

###   게시물

`posts`prop 을  [BlogPost](/docs/components/blog-post#props)  구성   요소 의   속성 을   가진   객체   배열 로   사용 합니다 .

::component-code
---
축소 :   true
무시 하 기 :
  - posts
외부 :
  - posts
externalTypes :
  - BlogPostProps   [ ]
소품   :
  포스트 :
    - title :   Nuxt   Icon   v 1
      설명 :   " Discover   Nuxt   Icon   v 1 ! "   (Nuxt   Icon   v 1 을   발견 하 십시오)
      그림 :https://nuxt.com/assets/blog/nuxt-icon/cover.png
      날짜   :   2024 - 11 - 25
    - title :   Nuxt   3 . 14
      설명 :   " Nuxt   3 . 14 가   나왔 습니다 ! "
      이미지 :https://nuxt.com/assets/blog/v3.14.png
      날짜 :   2024 - 11 - 04
    - title :   Nuxt   3 . 13
      설명 :   " Nuxt   3 . 13 이   나왔 습니다 ! "
      그림 :https://nuxt.com/assets/blog/v3.13.png
      날짜   :   2024 - 08 - 22
---
::

### 방향

`orientation`prop   을   사용 하 여   BlogPosts . 기본 값 을  `horizontal`로   변경 합니다 .

::component-code
---
축소 :   true
무시 하 기 :
  - posts
외부 :
  - posts
externalTypes :
  - BlogPostProps   [ ]
소품   :
  방향 : 세로
  포스트 :
    - title :   Nuxt   Icon   v 1
      설명 :   " Discover   Nuxt   Icon   v 1 ! "   (Nuxt   Icon   v 1 을   발견 하 십시오)
      이미지 :https://nuxt.com/assets/blog/nuxt-icon/cover.png
      날짜   :   2024 - 11 - 25
    - title :   Nuxt   3 . 14
      설명 :   " Nuxt   3 . 14 가   나왔 습니다 . "
      이미지 :https://nuxt.com/assets/blog/v3.14.png
      날짜   :   2024 - 11 - 04
    - title :   Nuxt   3 . 13
      설명 :   " Nuxt   3 . 13 이   나왔 습니다 ! "
      그림 :https://nuxt.com/assets/blog/v3.13.png
      날짜   :   2024 - 08 - 22
---
::

::tip
기본   슬롯   대신  `posts`prop 을   사용 하 면  `orientation`  포스트 가   자동 으로   반전 되 고  `horizontal`  to  `vertical`  또는   그   반대 의   경우 도   마찬가지 입니다 .
::

## 예제

::note
이러 한   예 에서 는  [Nuxt   Content](https://content.nuxt.com)를   사용 하 지만   모든   컨텐츠   관리   시스템 과   구성   요소 를   통합 할   수   있 습니다 .
::

###   페이지   내 에서

페이지 의   BlogPosts   구성   요소 를   사용 하 여   블로그   페이지 를   만들 려면 :

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
이   예제 에서 는  `posts`  모듈 에서  `queryCollection`  를   사용 하 여  `@nuxt/content`  를   가져옵니다 .
::

::tip
`to`prop 은  `@nuxt/content`  속성 을   사용 하 기   때문 에   여기 서   재정 의 됩니다 .
::

## API

### Props   이미지

: 컴포넌트   -   소품

### 슬롯

: 컴포넌트   -   슬롯

##   테마

: 구성 요소   -   주제

## Changelog

: component - changelog   구성 요소   변경   로그

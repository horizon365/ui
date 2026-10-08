---
title: ContentSurround (컨 텐트서라운드)
description: '페이지 사이를 탐색할 수 있는 prev 및 다음 링크 쌍입니다.'
category: content
framework: nuxt
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSurround.vue
---

::warning{to="/docs/getting-started/integrations/content"}
이 구성요소는 `@nuxt/content` 모듈이 설치된 경우에만 사용할 수 있습니다.
::

##  사용

페이지 서라운드를 가져올 때 얻은 `surround`{lang="ts-type"} 값과 함께 `surround`prop을 사용합니다.

::component-example
---
이름: 'content-surround-example'
소품 :
  클래스: 'w-full'
---
::

###  Prev/다음

`prev-icon` 및 `next-icon`props를 사용하여 [Icon](/docs/components/icon) 버튼을 사용자 지정합니다.

::component-code{prefix="content"}
---
상품명 : True
축소: true
무시하기:
  - surround @ @ @ surround
외부:
  -  surround
externalTypes:
  -  ContentSurroundLink []
소품 :
  prevIcon: 'i-lucide-chevron-left'
  nextIcon: 'i-lucide-chevron-right'에 해당되는 글 1건
  surround : 주변
  -  title: ContentSearchButton
    경로: /docs/components/content-search-button
    stem : docs/2.components/content-search-button / 문서 검색 버튼
    ContentSearch 모달을 여는 미리 스타일된 Button입니다.A pre-styled Button to open the ContentSearch modal.
  - title: ContentToc
    경로 : /docs/components/content-toc
    줄기: docs/2.components/content-toc
    설명: 사용자 지정 가능한 슬롯이 있는 스티커 카탈로그입니다.
---
::

##  예제

###  한 페이지 내에서

페이지의 ContentSurround 구성 요소를 사용하여 이전 및 다음 링크를 표시합니다.

```vue [pages/\[...slug\\].vue]{19}
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryCollection('docs').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <UPage v-if="page">
    <UPageHeader :title="page.title" />

    <UPageBody>
      <ContentRenderer v-if="page.body" :value="page" />

      <USeparator v-if="surround?.filter(Boolean).length" />

      <UContentSurround :surround="(surround as any)" />
    </UPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>
```

##  API

### Props 이미지

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

##  테마

:구성요소 주제

##  Changelog

: component-changelog{prefix="content"}

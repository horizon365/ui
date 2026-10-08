---
title: PageBody 페이지 바디
description: '페이지의 주요 내용입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageBody.vue
---

##  사용

PageBody 구성 요소는 기본 내용을 감싸고 일정한 간격을 유지하기 위해 패딩을 추가합니다.

[Page](/docs/components/page) 구성 요소의 기본 슬롯 안에서 사용하고 [PageHeader](/docs/components/page-header) 구성 요소 다음에 사용합니다.

```vue {5}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

##  예

::note
이러한 예에서는 [Nuxt Content](https://content.nuxt.com)를 사용하지만 모든 컨텐츠 관리 시스템과 통합할 수 있습니다.
::

###  페이지 내에서

페이지의 PageBody 구성 요소를 사용하여 페이지 내용을 표시합니다.

```vue [pages/\[...slug\\].vue]{21-27}
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
이 예제에서는 [`ContentRenderer`](https://content.nuxt.com/docs/components/content-renderer) 구성요소를 사용하여 페이지의 내용을 렌더링합니다.
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그

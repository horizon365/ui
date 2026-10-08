---
title: PageHeader 페이지헤더
description: '페이지에 대한 응답 헤더입니다.A responsible header for your pages.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHeader.vue
---

##  사용

PageHeader 구성 요소는 페이지의 헤더를 표시합니다.The PageHeader component displays a header for your page.

[Page](/docs/components/page) 구성 요소의 기본 슬롯 안에서 사용하고 [PageBody](/docs/components/page-body) 구성 요소 앞에 사용합니다.

```vue {3}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

###  제목

`title`prop 을 사용하여 헤더에 제목을 표시합니다.

::component-code
---
숨기기 (Hide):
  -  클래스
소품 :
  제목 : PageHeader
  클래스: 'w-full'
---
::

###  설명

`description`prop 을 사용하여 헤더에 설명을 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
숨기기 (Hide):
  -  클래스
소품 :
  제목 : PageHeader
  제목, 설명 및 작업이 포함된 응답형 페이지 헤더입니다.A responsive page header with title, description and actions.
  클래스 : 'w-full'
---
::

###  헤드라인

`headline`prop 을 사용하여 헤더에 제목을 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  설명
숨기기 (Hide):
  -  클래스
소품 :
  제목 : PageHeader
  제목, 설명 및 작업이 포함된 응답형 페이지 헤더입니다.A responsive page header with title, description and actions.
  사진: "Components"
  클래스 : 'w-full'
---
::

###  링크

`links`prop을 사용하여 [Button](/docs/components/button)의 목록을 헤더에 표시합니다.

::component-code
---
상품명 : True
외부:
  -  링크
externalTypes:
  - ButtonProps []
무시하기:
  -  title
  -  설명
  -  headline
  -  링크
숨기기 (Hide):
  -  클래스
소품 :
  제목 : PageHeader
  제목, 설명 및 작업이 포함된 응답형 페이지 헤더입니다.A responsive page header with title, description and actions.
  사진: "Components"
  링크:
    - label: 'GitHub'
      아이콘: i-simple-icons-github
      다음 주소: 'https://github.com/nuxt/ui/tree/v4/src/runtime/components/PageHeader.vue'
      대상: '_blank'
  클래스: 'w-full'
---
::

##  예

::note
이러한 예에서는 [Nuxt Content](https://content.nuxt.com)를 사용하지만 모든 컨텐츠 관리 시스템과 구성 요소를 통합할 수 있습니다.
::

###  페이지 내에서

페이지의 PageHeader 구성 요소를 사용하여 페이지의 머리글을 표시합니다.

```vue [pages/\[...slug\\].vue]{19-24}
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
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :headline="page.headline"
      :links="page.links"
    />

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

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그

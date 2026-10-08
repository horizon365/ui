---
title: 컨 텐트 Toc
description: '자동으로 활성화된 앵커 링크 강조 표시가 있는 고정 목차입니다.'
category: content
framework: nuxt
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentToc.vue
---

::warning{to="/docs/getting-started/integrations/content"}
이 구성 요소는 `@nuxt/content` 모듈이 설치된 경우에만 사용할 수 있습니다.
::

##  사용

페이지를 가져올 때 `links`prop을 `page?.body?.toc?.links`{lang="ts-type"}와 함께 사용하십시오.

::component-example
---
이름: 'content-toc-example'
소품 :
  클래스 : 'w-full'
---
::

###  제목

`title`prop을 사용하여 목차 제목을 변경합니다.

::component-code{prefix="content"}
---
상품명 : True
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  링크
외부:
  -  링크
externalTypes:
  -  ContentTocLink []
소품 :
  사진: "On this page"
  클래스: 'w-full'
  링크:
  - id: 사용법
    깊이: 2
    텍스트: 사용
    1차 하위 항목:
    - id: 제목
      깊이 : 3
      텍스트: 제목
    - id: 색상
      깊이 : 3
      텍스트: 색상
    - id: 하이라이트
      깊이: 3
      텍스트: 강조표시
    - id: '하이라이트 컬러'
      깊이: 3
      텍스트:강조 색상
    - id: 'highlight-variant'
      깊이 : 3
      텍스트:변형 강조
---
::

###  색상

`color`prop을 사용하여 링크 색상을 변경합니다.

::component-code{prefix="content"}
---
상품명 : True
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  링크
외부:
  -  링크
externalTypes:
  -  ContentTocLink []
소품 :
  색상: Neutral
  클래스 : 'w-full'
  링크:
    - id: 사용법
      깊이: 2
      텍스트: 사용
      1차 하위 항목:
        - id: 제목
          깊이 : 3
          텍스트: 제목
        - id: 색상
          깊이: 3
          텍스트: 색상
        - id: 하이라이트
          깊이: 3
          텍스트: 강조표시
        - id: 'highlight-color'
          깊이: 3
          텍스트:강조 색상
        - id: 'highlight-variant'
          깊이 : 3
          텍스트:변형 강조
---
::

###  하이라이트

`highlight`prop 을 사용하여 활성 항목의 강조 표시된 테두리를 표시합니다.

::component-code{prefix="content"}
---
상품명 : True
축소: true
숨기기 (Hide):
  -  class
무시하기:
  -  링크
외부:
  -  링크
externalTypes:
  -  ContentTocLink []
소품 :
  강조 표시:true
  클래스: 'w-full'
  링크:
    - id: 사용법
      깊이 : 2
      텍스트: 사용
      1차 하위 항목:
        - id: 제목
          깊이 : 3
          텍스트: 제목
        - id: 색상
          깊이 : 3
          텍스트: 색상
        - id: 하이라이트
          깊이: 3
          텍스트: 강조표시
        - id: '하이라이트 컬러'
          깊이 : 3
          텍스트:강조 색상
        - id: 'highlight-variant'
          깊이: 3
          텍스트:변형 강조
---
::

### 하이라이트 색상

`highlight-color`prop 을 사용하여 강조 표시 색상을 변경합니다. 기본값은 `color`prop입니다.

::component-code{prefix="content"}
---
상품명 : True
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  링크
  -  highlight
외부:
  -  링크
externalTypes:
  -  ContentTocLink []
소품 :
  강조 표시:true
  highlightColor : 'neutral'
  클래스: 'w-full'
  링크:
    - id: 사용법
      깊이: 2
      텍스트: 사용
      1차 하위 항목:
        - id: 제목
          깊이: 3
          문자: 제목
        - id: 색상
          깊이: 3
          텍스트: 색상
        - id: 하이라이트
          깊이: 3
          텍스트: 강조표시
        - id: '하이라이트 컬러'
          깊이: 3
          텍스트:강조 색상
        - id: 'highlight-variant'
          깊이: 3
          텍스트:변형 강조
---
::

### 하이라이트 변형: badge{label="4.6+" class="align-text-top"}

`highlight-variant`prop을 사용하여 강조 표시 스타일을 변경합니다. 기본값은 `straight`입니다.

::component-code{prefix="content"}
---
상품명 : True
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  링크
  -  highlight
외부:
  -  링크
externalTypes:
  -  ContentTocLink []
소품 :
  강조 표시:true
  highlightColor: '기본'
  highlightVariant: '회로'
  클래스 : 'w-full'
  링크:
    - id: 사용법
      깊이 : 2
      텍스트: 사용
      1차 하위 항목:
        - id: 제목
          깊이: 3
          문자: 제목
        - id: 색상
          깊이 : 3
          텍스트: 색상
        - id: 하이라이트
          깊이: 3
          텍스트: 강조표시
        - id: 'highlight-color'
          깊이 : 3
          텍스트:강조 색상
        - id: 'highlight-variant'
          깊이: 3
          텍스트:변형 강조
    - id: 예제
      깊이 : 2
      텍스트: 예제
      1차 하위 항목:
        - id: 페이지 안에 있음
          깊이 : 3
          텍스트: 페이지 안에서
    -  id: api
      깊이: 2
      텍스트: API
      1차 하위 항목:
        - id: props
          깊이: 3
          텍스트: 소품
        - id: 슬롯
          깊이: 3
          텍스트: 슬롯
        - id: 방출
          깊이: 3
          텍스트: Emits
    - id: 테마
      깊이: 2
      텍스트: 주제
---
::

##  예

###  페이지 내에서

페이지에서 ContentToc 구성 요소를 사용하여 목차를 표시합니다.

```vue [pages/\[...slug\\].vue]{22-24}
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

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

###  Emits

:구성요소 - 방사

##  테마

:구성요소 - 주제

##  Changelog

: component-changelog{prefix="content"}

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

## Usage

페이지 서라운드를 가져올 때 얻은 `surround`{lang="ts-type"} 값과 함께 `surround` prop을 사용합니다.

::component-example
---
name: 'content-surround-example'
props:
  class: 'w-full'
---
::

### Prev/다음

`prev-icon` 및 `next-icon` 소품을 사용하여 [Icon](/docs/components/icon) 버튼을 사용자 정의합니다.

::component-code{prefix="content"}
---
prettier: true
collapse: true
ignore:
  - surround
external:
  - surround
externalTypes:
  - ContentSurroundLink[]
props:
  prevIcon: 'i-lucide-chevron-left'
  nextIcon: 'i-lucide-chevron-right'
  surround:
  - title: ContentSearchButton
    path: /docs/components/content-search-button
    stem: docs/2.components/content-search-button
    description: A pre-styled Button to open the ContentSearch modal.
  - title: ContentToc
    path: /docs/components/content-toc
    stem: docs/2.components/content-toc
    description: A sticky Table of Contents with customizable slots.
---
::

## 예

### 페이지 안에

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

## API 파일

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog{prefix="content"}

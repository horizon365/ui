---
description: '왼쪽 및 오른쪽 열이 있는 페이지에 대한 그리드 레이아웃입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Page.vue
---

## Usage

Page 구성 요소는 왼쪽 및 오른쪽 열을 선택적으로 사용하여 레이아웃을 만들 수 있도록 도와줍니다. 문서 사이트 및 기타 내용 중심 페이지를 작성하는 데 적합합니다.

```vue {2,6}
<template>
  <UPage>
    <template #left />

    <template #right />
  </UPage>
</template>
```

::tip
슬롯이 지정되지 않은 경우 페이지가 중앙에 있는 단일 열 레이아웃으로 표시됩니다.
::

## examples 예제

::note
이러한 예제에서는 [Nuxt Content](https://content.nuxt.com)를 사용하지만 구성 요소는 모든 콘텐츠 관리 시스템과 통합 할 수 있습니다.
::

### 레이아웃 내에서

`left` 슬롯이 있는 레이아웃에서 페이지 구성 요소를 사용하여 탐색을 표시합니다.

```vue [layouts/docs.vue] {9-13}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

::note
이 예제에서는 `ContentNavigation` 구성 요소를 사용하여 `app.vue`에 주입된 탐색을 표시합니다.
::

### 페이지 안에서

`right` 슬롯이 있는 페이지에서 페이지 구성 요소를 사용하여 목차를 표시합니다.

```vue [pages/\[...slug\\].vue]{29-31}
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
이 예제에서는 `ContentToc` 구성 요소를 사용하여 목차를 표시합니다.
::

## API

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog

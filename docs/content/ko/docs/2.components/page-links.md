---
title: 페이지링크 (PageLinks)
description: '페이지에 표시할 링크 목록입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLinks.vue
---

## Usage

PageLinks 구성 요소를 사용하여 링크 목록을 표시할 수 있습니다.

::component-code
---
collapse: true
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageLink[]
props:
  links:
    - label: 'Edit this page'
      icon: i-lucide-file-pen
      to: https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label: 'Star on GitHub'
      icon: i-lucide-star
      to: https://github.com/nuxt/ui
    - label: 'Releases'
      icon: i-lucide-rocket
      to: https://github.com/nuxt/ui/releases
---
::

### 링크

`links` prop을 다음 속성을 가진 오브젝트 배열로 사용합니다.

- `label: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"} - {lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"} Xph033x{lang="ts-type"}

[Link](/docs/components/link#props) 구성 요소(예: `to`, `target` 등)에서 모든 속성을 전달할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageLink[]
props:
  links:
    - label: 'Edit this page'
      icon: i-lucide-file-pen
      to: https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label: 'Star on GitHub'
      icon: i-lucide-star
      to: https://github.com/nuxt/ui
    - label: 'Releases'
      icon: i-lucide-rocket
      to: https://github.com/nuxt/ui/releases
---
::

### 제목

`title` Prop을 사용하여 링크 위에 제목을 표시합니다.

::component-code
---
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageLink[]
props:
  title: 'Community'
  links:
    - label: 'Edit this page'
      icon: i-lucide-file-pen
      to: https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label: 'Star on GitHub'
      icon: i-lucide-star
      to: https://github.com/nuxt/ui
    - label: 'Releases'
      icon: i-lucide-rocket
      to: https://github.com/nuxt/ui/releases
---
::

## 예

::note
이러한 예제에서는 [Nuxt Content](https://content.nuxt.com)를 사용하지만 구성 요소는 모든 콘텐츠 관리 시스템과 통합 할 수 있습니다.
::

### 페이지 안에서

ContentToc 구성 요소의 `bottom` 슬롯에 있는 PageLinks 구성 요소를 사용하여 목차 아래에 링크 목록을 표시합니다.

```vue [pages/\[...slug\\].vue]{48-52}
<script setup lang="ts">
import type { PageLink } from '@nuxt/ui'

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

const links = computed<PageLink[]>(() => [{
  icon: 'i-lucide-file-pen',
  label: 'Edit this page',
  to: `https://github.com/nuxt/ui/edit/v4/docs/content/${page?.value?.stem}.md`,
  target: '_blank'
}, {
  icon: 'i-lucide-star',
  label: 'Star on GitHub',
  to: 'https://github.com/nuxt/ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases'
}])
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
      <UContentToc :links="page.body.toc.links">
        <template #bottom>
          <USeparator type="dashed" />

          <UPageLinks title="Community" :links="links" />
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
```

## API

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog

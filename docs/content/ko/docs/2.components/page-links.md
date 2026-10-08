---
title: 페이지링크 (PageLinks)
description: '페이지에 표시할 링크 목록입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLinks.vue
---

## 사용

PageLinks   구성   요소 를   사용 하 여   링크   목록 을   표시 할   수   있 습니다 .

::component-code
---
축소 :   true
상품명   :   True
무시 하 기 :
  - 링크
외부 :
  - 링크
externalTypes :
  - PageLink [ ]
소품   :
  링크 :
    - label :   ' 이   페이지   편집 '
      아이콘   :   i - lucide - file - pen
      대상   :https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label :   ' Star   on   GitHub '
      아이콘   :   i - lucide - star
      대상   :https://github.com/nuxt/ui
    - label :   ' Releases '
      아이콘   :   i - lucide - rocket
      대상   :https://github.com/nuxt/ui/releases
---
::

### 링크

`links`prop 을   다음 과   같 은   속성 을   가진   객체 의   배열 로   사용 합니다 .

- `label: string` {lang="ts-type"}
- `icon?: string`{lang="ts-type"}
-  @ `class?: any` @ @ {lang="ts-type"} @
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"}

당신 은  [Link](/docs/components/link#props)  구성   요소 에서   모든   속성 을   전달   할   수   있 습니다  `to`,  `target`  등 .

::component-code
---
상품명   :   True
무시 하 기 :
  - 링크
외부 :
  - 링크
externalTypes :
  - PageLink [ ]
소품   :
  링크 :
    - label :   ' 이   페이지   편집 '
      아이콘   :   i - lucide - file - pen
      대상   :https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label :   ' Star   on   GitHub '
      아이콘   :   i - lucide - star
      대상   :https://github.com/nuxt/ui
    - label :   ' Releases '
      아이콘   :   i - lucide - rocket
      대상 :https://github.com/nuxt/ui/releases
---
::

### 제목

`title`prop   을   사용 하 여   링크   위 에   제목 을   표시 합니다 .

::component-code
---
상품명   :   True
무시 하 기 :
  - 링크
외부 :
  - 링크
externalTypes :
  - PageLink [ ]
소품   :
  사진 :   " Community "
  링크 :
    - label :   ' 이   페이지   편집 '
      아이콘   :   i - lucide - file - pen
      대상 :https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label :   ' Star   on   GitHub '
      아이콘   :   i - lucide - star
      대상   :https://github.com/nuxt/ui
    - label :   ' Releases '
      아이콘   :   i - lucide - rocket
      대상   :https://github.com/nuxt/ui/releases
---
::

## 예제

::note
이러 한   예 에서 는  [Nuxt   Content](https://content.nuxt.com)를   사용 하 지만   모든   컨텐츠   관리   시스템 과   통합 할   수   있 습니다 .
::

###   한   페이지   내 에서

ContentToc   구성   요소 의  `bottom`슬롯 에   있 는   PageLinks   구성   요소 를   사용 하 여   목차   아래 에   링크   목록 을   표시 합니다 .

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

### Props

: 컴포넌트   -   소품

### 슬롯

:컴포넌트 - 슬롯

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그

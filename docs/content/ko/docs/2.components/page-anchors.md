---
title: PageAnchors (페이지 앵커)
description: '페이지에 표시할 앵커 목록입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAnchors.vue
---

## 사용

PageAnchors   구성   요소 를   사용 하 여   링크   목록 을   표시 합니다 .

::component-code
---
축소 :   true
상품명   :   True
무시 하 기 :
  - 링크
외부 :
  - 링크
externalTypes :
  - PageAnchor [ ]
소품   :
  링크 :
    - label :   ' 문서 '
      아이콘 :   i - lucide - book - open
      to :  /docs/getting - started   시작
    - label :   ' 구성   요소 '
      아이콘 :   i - lucide - box
      대상 :  /docs/components
    - label :   ' Figma   Kit '
      아이콘 :   i - simple - icons - figma
      대상 :https://go.nuxt.com/figma-ui
      target :   _ blank   대상
    - label :   ' Releases '
      아이콘 :   i - simple - icons - github
      대상 :https://github.com/nuxt/ui/releases
      target: _blank 대상
---
::

###  링크

`links`prop을 다음과 같은 속성을 가진 객체의 배열로 사용합니다.

- `label: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
-  @ `class?: any` @ @ {lang="ts-type"} @
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeading?: ClassNameValue, linkLeadingIcon?: ClassNameValue }` {lang="ts-type"}

당신은 [Link](/docs/components/link#props) 구성 요소에서 모든 속성을 전달 할 수 있습니다 `to`, `target` 등.

::component-code
---
상품명 : True
무시하기:
  -  링크
외부:
  -  링크
externalTypes:
  -  PageAnchor []
소품 :
  링크:
    - label: '문서'
      아이콘: i-lucide-book-open
      to: /docs/getting-started 시작
    - label: '구성 요소'
      아이콘: i-lucide-box
      대상: /docs/components
    - label: 'Figma Kit'
      아이콘: i-simple-icons-figma
      대상   :https://go.nuxt.com/figma-ui
      target :   _ blank   대상
    - label :   ' Releases '
      아이콘 :   i - simple - icons - github
      대상 :https://github.com/nuxt/ui/releases
      target :   _ blank   대상
---
::

##   예

::note
이러 한   예 에서 는  [Nuxt   Content](https://content.nuxt.com)를   사용 하 지만   모든   컨텐츠   관리   시스템 과   통합 할   수   있 습니다 .
::

###   레이아웃   내 에서

[PageAside](/docs/components/page-aside)  구성   요소   안 에   PageAnchors   구성   요소 를   사용 하 여   탐색   위 에   링크   목록 을   표시 합니다 .

```vue [layouts/docs.vue]{35}
<script setup lang="ts">
import type { PageAnchor } from '@nuxt/ui'
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<ContentNavigationItem[]>('navigation')

const links: PageAnchor[] = [{
  label: 'Documentation',
  icon: 'i-lucide-book-open',
  to: '/docs/getting-started'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  to: '/docs/components'
}, {
  label: 'Figma Kit',
  icon: 'i-simple-icons-figma',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UPageAnchors :links="links" />

        <USeparator type="dashed" />

        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

## API

### Props   이미지

: 컴포넌트   -   소품

### 슬롯

: 컴포넌트   -   슬롯

## 테마

: 구성 요소   -   주제

## Changelog

: component - changelog   구성 요소   변경   로그

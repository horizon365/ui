---
title: FooterColumns (FooterColumns)
description: '바닥글에 표시할 열로 표시되는 링크 목록.'
category: navigation
keywords:
  - footer links
  - sitemap
  - columns
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FooterColumns.vue
---

##  사용

FooterColumns 구성 요소는 바닥글에 표시할 열 목록을 렌더링합니다.

[Footer](/docs/components/footer) 구성 요소의 `top` 슬롯에서 사용하십시오.

```vue {3-7}
<template>
  <UFooter>
    <template #top>
      <UContainer>
        <UFooterColumns />
      </UContainer>
    </template>
  </UFooter>
</template>
```

###  컬럼

`columns`prop을 다음과 같은 속성을 가진 객체의 배열로 사용합니다.

- `label: string` {lang="ts-type"}
-  @ `children?: FooterColumnLink[]` @ @ {lang="ts-type"} @

각 열에는 링크를 정의하는 `children` 객체 배열이 포함됩니다. 각 링크에는 다음 속성이 있을 수 있습니다.

-  @ `label?: string` @ @ {lang="ts-type"} @
- `icon?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"}

당신은 [Link](/docs/components/link#props) 구성 요소에서 모든 속성을 전달 할 수 있습니다 `to`, `target` 등.

::component-example
---
상품명 : True
이름: 'footer-columns-example'
클래스: P-8
소품 :
  클래스: 'w-full'
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그

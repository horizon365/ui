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

## Usage

FooterColumns 구성 요소는 바닥글에 표시할 열 목록을 렌더링합니다.

[Footer](/docs/components/footer) 구성 요소의 `top` 슬롯에 사용합니다.

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

### 열 Name

`columns` prop을 다음과 같은 속성을 가진 오브젝트 배열로 사용합니다.

- `label: string`{lang="ts-type"}
- `children?: FooterColumnLink[]`{lang="ts-type"}

각 열에는 링크를 정의하는 `children` 객체 배열이 포함됩니다. 각 링크에는 다음 등록 정보가 있을 수 있습니다.

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"} (- `icon?: string`{lang="ts-type"})
- `class?: any`{lang="ts-type"} - {lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"} - {lang="ts-type"}

[Link](/docs/components/link#props) 구성 요소(예: `to`, `target` 등)에서 모든 속성을 전달할 수 있습니다.

::component-example
---
prettier: true
name: 'footer-columns-example'
class: 'p-8'
props:
  class: 'w-full'
---
::

## API

### Props

:component-props

### 슬롯

:component-slots

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog

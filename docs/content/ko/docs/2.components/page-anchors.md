---
title: PageAnchors (페이지 앵커)
description: '페이지에 표시할 앵커 목록입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAnchors.vue
---

## Usage

PageAnchors 구성 요소를 사용하여 링크 목록을 표시합니다.

::component-code
---
collapse: true
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageAnchor[]
props:
  links:
    - label: 'Documentation'
      icon: i-lucide-book-open
      to: /docs/getting-started
    - label: 'Components'
      icon: i-lucide-box
      to: /docs/components
    - label: 'Figma Kit'
      icon: i-simple-icons-figma
      to: https://go.nuxt.com/figma-ui
      target: _blank
    - label: 'Releases'
      icon: i-simple-icons-github
      to: https://github.com/nuxt/ui/releases
      target: _blank
---
::

### 링크 링크

`links` prop을 다음과 같은 속성을 가진 오브젝트 배열로 사용합니다.

- `label: string`{lang="ts-type"} (- `label: string`{lang="ts-type"})
- `icon?: string`{lang="ts-type"} - {lang="ts-type"}
- `class?: any`{lang="ts-type"} - {lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeading?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"}의 발음을 - `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeading?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"}

[Link](/docs/components/link#props) 구성 요소(예: `to`, `target` 등)에서 모든 속성을 전달할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageAnchor[]
props:
  links:
    - label: 'Documentation'
      icon: i-lucide-book-open
      to: /docs/getting-started
    - label: 'Components'
      icon: i-lucide-box
      to: /docs/components
    - label: 'Figma Kit'
      icon: i-simple-icons-figma
      to: https://go.nuxt.com/figma-ui
      target: _blank
    - label: 'Releases'
      icon: i-simple-icons-github
      to: https://github.com/nuxt/ui/releases
      target: _blank
---
::

## 예제

::note
이러한 예제에서는 [Nuxt Content](https://content.nuxt.com)를 사용하지만 구성 요소는 모든 콘텐츠 관리 시스템과 통합 할 수 있습니다.
::

### 레이아웃 내부

[PageAside](/docs/components/page-aside) 구성 요소 안에 있는 PageAnchors 구성 요소를 사용하여 탐색 위에 링크 목록을 표시합니다.

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

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog

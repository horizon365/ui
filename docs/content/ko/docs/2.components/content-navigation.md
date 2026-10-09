---
title: ContentNavigation 내용 탐색
description: '페이지 링크를 구성하는 데 사용되는 아코디언 스타일의 탐색 구성 요소입니다.'
category: content
framework: nuxt
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentNavigation.vue
---

::warning{to="/docs/getting-started/integrations/content"}
이 구성요소는 `@nuxt/content` 모듈이 설치된 경우에만 사용할 수 있습니다.
::

## Usage

앱 탐색을 가져올 때 얻은 `navigation`{lang="ts-type"} 값과 함께 `navigation` prop을 사용합니다.

::component-example
---
name: 'content-navigation-example'
class: 'h-96 overflow-y-auto'
overflowHidden: true
props:
  class: 'w-full'
---
::

### Type 형식

`type` prop을 `single`로 설정하여 한 번에 하나의 항목만 열 수 있도록 합니다. 기본값은 `multiple`입니다.

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
items:
  type:
  - 'single'
  - 'multiple'
hide:
  - class
  - navigation
props:
  class: 'w-full'
  type: 'single'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
        - title: 'Introduction'
          path: '#introduction'
          active: true
        - title: 'Installation'
          path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
        - title: 'defineShortcuts'
          path: '#defineshortcuts'
        - title: 'useModal'
          path: '#usemodal'
---
::

### Color 색상

`color` 소품을 사용하여 탐색 링크의 색상을 변경합니다.

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
hide:
  - class
  - navigation
props:
  class: 'w-full'
  color: 'neutral'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
      - title: 'Introduction'
        path: '#introduction'
        active: true
      - title: 'Installation'
        path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
      - title: 'defineShortcuts'
        path: '#defineshortcuts'
      - title: 'useModal'
        path: '#usemodal'
---
::

### 변형

`variant` Prop을 사용하여 탐색 링크의 변형을 변경합니다.

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
hide:
  - class
  - navigation
items:
  variant:
  - 'link'
  - 'pill'
props:
  class: 'w-full'
  variant: 'link'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
      - title: 'Introduction'
        path: '#introduction'
        active: true
      - title: 'Installation'
        path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
      - title: 'defineShortcuts'
        path: '#defineshortcuts'
      - title: 'useModal'
        path: '#usemodal'
---
::

### Highlight 이미지

`highlight` Prop을 사용하여 활성 링크의 강조 표시된 테두리를 표시합니다.

`highlight-color` prop을 사용하여 테두리 색상을 변경합니다. 기본적으로 `color` prop이 사용됩니다.

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
hide:
  - class
  - navigation
props:
  class: 'w-full'
  highlight: true
  highlightColor: 'primary'
  color: 'primary'
  variant: 'pill'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
      - title: 'Introduction'
        path: '#introduction'
        active: true
      - title: 'Installation'
        path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
      - title: 'defineShortcuts'
        path: '#defineshortcuts'
      - title: 'useModal'
        path: '#usemodal'
---
::

### 트레일 아이콘

`trailing-icon` 소품을 사용하여 하위 항목이 있는 항목의 뒤에 있는 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-chevron-down`입니다.

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
hide:
  - class
  - navigation
props:
  class: 'w-full'
  trailingIcon: 'i-lucide-arrow-up'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
      - title: 'Introduction'
        path: '#introduction'
        active: true
      - title: 'Installation'
        path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
      - title: 'defineShortcuts'
        path: '#defineshortcuts'
      - title: 'useModal'
        path: '#usemodal'
---
::

::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.chevronDown` 키 아래의 `app.config.ts` 내에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
::

## examples 예제

### 레이아웃 내에서

레이아웃 내의 [PageAside](/docs/components/page-aside) 구성 요소 내에서 ContentNavigation 구성 요소를 사용하여 페이지 탐색을 표시합니다.

```vue [layouts/docs.vue]{11}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" highlight />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

### header 내부

[Header](/docs/components/header) 구성 요소의 `content` 슬롯 안에 있는 ContentNavigation 구성 요소를 사용하여 모바일에서 페이지 탐색을 표시합니다.

```vue [components/Header.vue]{9-11}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UHeader>
    <template #body>
      <UContentNavigation :navigation="navigation" highlight />
    </template>
  </UHeader>
</template>
```

## API

### Props (### Props)

:component-props

### 슬롯

:component-slots

### Emits

:component-emits

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog{prefix="content"}

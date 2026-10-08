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
이 구성 요소는 `@nuxt/content` 모듈이 설치된 경우에만 사용할 수 있습니다.
::

##  사용

앱 탐색을 가져올 때 얻은 `navigation`{lang="ts-type"} 값과 함께 `navigation`prop을 사용하십시오.

::component-example
---
이름: "content-navigation-example"
클래스: H-96 overflow-y-auto
overflowHidden: true
소품 :
  클래스: 'w-full'
---
::

###  유형

`type`prop을 `single`로 설정하여 한 번에 하나의 항목만 열 수 있도록 합니다. 기본값은 `multiple`입니다.

::component-code{prefix="content"}
---
상품명 : True
축소: true
외부:
  -  navigation
externalTypes:
  -  ContentNavigationLink []
프로젝트:
  문자:
  -  '싱글'
  - multiple' 다중
숨기기 (Hide):
  -  클래스
  -  navigation
소품 :
  클래스 : 'w-full'
  타입: 'single'
  탐색 :
    - title: '가이드'
      아이콘: i-lucide-book-open
      경로: '#getting-started'
      1차 하위 항목:
        - title: '소개'
          경로: #introduction
          활성: true
        - title: '설치'
          경로: "#installation"
    - title: 'Composables'
      아이콘: 'i-lucide-database'
      경로: "#composables"
      1차 하위 항목:
        - title: 'defineShortcuts'
          #defineshortcuts 경로: #defineshortcuts
        - title: 'useModal'
          경로 : #usemodal
---
::

###  색상

`color`prop을 사용하여 탐색 링크의 색을 변경합니다.

::component-code{prefix="content"}
---
상품명 : True
축소: true
외부:
  -  navigation
externalTypes:
  -  ContentNavigationLink []
숨기기 (Hide):
  -  클래스
  -  navigation
소품 :
  클래스 : 'w-full'
  색상 : Neutral
  탐색 :
    - title: '가이드'
      아이콘: i-lucide-book-open
      경로: '#getting-started'
      1차 하위 항목:
      - title: '소개'
        경로: #introduction
        활성: true
      - title: '설치'
        경로: "#installation"
    - title: '합성 가능'
      아이콘: i-lucide-database
      경로: "#composables"
      1차 하위 항목:
      - title: 'defineShortcuts'
        경로: #defineshortcuts
      - title: 'useModal'
        경로 : #usemodal
---
::

###  변형

`variant`prop 을 사용하여 탐색 링크의 변형을 변경합니다.

::component-code{prefix="content"}
---
상품명 : True
축소: true
외부:
  -  navigation
externalTypes:
  -  ContentNavigationLink []
숨기기 (Hide):
  - class 클래스
  -  navigation
프로젝트:
  변형:
  -  link '
  -  pill '
소품 :
  클래스 : 'w-full'
  변수: 'link'
  탐색 :
    - title: '가이드'
      아이콘: i-lucide-book-open
      경로: '#getting-started'
      1차 하위 항목:
      - title: '소개'
        경로: #introduction
        활성: true
      - title: '설치'
        경로: "#installation"
    - title: '합성 가능'
      아이콘: 'i-lucide-database'
      경로: "#composables"
      1차 하위 항목:
      - title: 'defineShortcuts'
        경로: #defineshortcuts
      - title: 'useModal'
        경로 : #usemodal
---
::

###  하이라이트

`highlight`prop을 사용하여 활성 링크의 강조 표시된 테두리를 표시합니다.

`highlight-color`prop을 사용하여 테두리 색상을 변경합니다. 기본값은 `color`prop입니다.

::component-code{prefix="content"}
---
상품명 : True
축소: true
외부:
  -  navigation
externalTypes:
  -  ContentNavigationLink []
숨기기 (Hide):
  -  클래스
  -  navigation
소품 :
  클래스: 'w-full'
  강조 표시: true
  highlightColor: '기본'
  색상 : primary
  제목: Pill
  탐색 :
    - title: '가이드'
      아이콘 : i-lucide-book-open
      경로: '#getting-started'
      1차 하위 항목:
      - title: '소개'
        경로: #introduction
        활성: true
      - title: '설치'
        경로: "#installation"
    - title: '합성 가능'
      아이콘: i-lucide-database
      경로: '#composables'
      1차 하위 항목:
      - title: 'defineShortcuts'
        경로: #defineshortcuts
      - title: 'useModal'
        경로 : #usemodal
---
::

### 트레일링 아이콘

`trailing-icon`prop을 사용하여 하위 항목의 후행 [Icon](/docs/components/icon) 을 사용자 정의합니다. 기본값은 `i-lucide-chevron-down`입니다.

::component-code{prefix="content"}
---
상품명 : True
축소: true
외부:
  -  navigation
externalTypes:
  -  ContentNavigationLink []
숨기기 (Hide):
  -  클래스
  -  navigation
소품 :
  클래스 : 'w-full'
  trailingIcon: 'i-lucide-arrow-up'
  탐색 :
    - title: '가이드'
      아이콘: i-lucide-book-open
      경로: '#getting-started'
      1차 하위 항목:
      - title: '소개'
        경로: #introduction
        활성: true
      - title: '설치'
        경로: "#installation"
    - title: '합성 가능'
      아이콘: i-lucide-database
      경로: '#composables'
      1차 하위 항목:
      - title: 'defineShortcuts'
        경로: #defineshortcuts
      - title: 'useModal'
        경로: #usemodal
---
::

::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.chevronDown` 키에서 전역적으로 사용자 지정할 수 있습니다.
::

##  예

###  레이아웃 내에서

레이아웃 내에서 [PageAside](/docs/components/page-aside) 구성 요소 내에 있는 ContentNavigation 구성 요소를 사용하여 페이지 탐색을 표시합니다.

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

###  헤더 내에서

[Header](/docs/components/header) 구성요소의 `content` 슬롯 안에 있는 ContentNavigation 구성요소를 사용하여 모바일에서 페이지 탐색을 표시합니다.

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

##  API

### Props @ 프로

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

###  에미츠

:구성요소 - 방출

##  테마

:구성요소 - 주제

##  Changelog

: component-changelog{prefix="content"}

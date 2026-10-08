---
title: ChangelogVersions 버전
description: '타임라인에 변경 로그 버전 목록을 표시합니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersions.vue
---

## 사용

ChangelogVersions   구성 요소 는   유연 한   레이아웃 을   제공 하 여   기본   슬롯 이나  `versions`prop 을   사용 하 여  [ChangelogVersion](/docs/components/changelog-version)  구성 요소   목록 을   표시 합니다 .

```vue {2,8}
<template>
  <UChangelogVersions>
    <UChangelogVersion
      v-for="(version, index) in versions"
      :key="index"
      v-bind="version"
    />
  </UChangelogVersions>
</template>
```

### 버전

`versions`prop 을  [ChangelogVersion](/docs/components/changelog-version#props)  구성   요소 의   속성 을   가진   객체   배열 로   사용 합니다 .

::component-code
---
축소 :   true
무시 하 기 :
  - 버전
외부 :
  - versions
externalTypes :
  - ChangelogVersionProps   [ ]
숨기 기 (Hide) :
  - 클래스
소품   :
  버전   :
    - title :   Nuxt   3 . 17   공식   페이지
      설명   : Nuxt   3 . 17 은   비동기   데이터   계층 의   주요   재 작업 ,   새로운   기본   제공   구성   요소 ,   더   나 은   경고   및   성능   향상 을   제공 합니다 !
      이미지 :https://nuxt.com/assets/blog/v3.17.png
      날짜   :   2025 - 04 - 27
      다음   주소 :   ' https ://nuxt . com/blog/v 3 - 17 '
      대상 :   '_ blank '
      ui . container :   ' max - w - lg '
    - title :   Nuxt   3 . 16
      설명 :   ' Nuxt   3 . 16 은   기능   및   성능   향상 으로   가득   차   있 습니다 ! '
      그림 :https://nuxt.com/assets/blog/v3.16.png
      날짜   :   2025 - 03 - 07
      다음   주소 :   ' https ://nuxt . com/blog/v 3 - 16 '
      대상 :   '_ blank '
      ui . container :   ' max - w - lg '
    - title :   Nuxt   3 . 15
      설명 :   ' Nuxt   3 . 15   출시   -   Vite   6 ,   더   나 은   HMR   및   더   빠른   성능 ! '
      그림 :https://nuxt.com/assets/blog/v3.15.png
      날짜   :   2024 - 12 - 24
      다음   주소 :   ' https ://nuxt . com/blog/v 3 - 15 '
      대상 :   '_ blank '
      ui . container :   ' max - w - lg '
  클래스 :   ' w - full '
---
::

###   지표

`indicator`prop 을   사용 하 여   왼쪽 의   표시기   막대 를   숨 깁니다 .   기본 값 은  `true`입니다 .

::component-code
---
축소 :   true
무시 하 기 :
  - 버전
외부 :
  - 버전
externalTypes :
  - ChangelogVersionProps [ ]
숨기 기 (Hide) :
  - 클래스
소품   :
  지시 자 :   false
  버전   :
    - title :   Nuxt   3 . 17
      설명   : Nuxt   3 . 17 은   비동기   데이터   계층 의   주요   재 작업 ,   새로운   기본   제공   구성   요소 ,   더   나 은   경고   및   성능   향상 을   제공 합니다 !
      그림 :https://nuxt.com/assets/blog/v3.17.png
      날짜   :   2025 - 04 - 27
      다음   주소 :   ' https ://nuxt . com/blog/v 3 - 17 '
      대상 :   '_ blank '
      ui . container :   ' max - w - lg '
    - title :   Nuxt   3 . 16
      설명 :   ' Nuxt   3 . 16 은   기능   및   성능   향상 으로   가득   차   있 습니다 ! '
      그림 :https://nuxt.com/assets/blog/v3.16.png
      날짜   :   2025 - 03 - 07
      다음   주소 :   ' https ://nuxt . com/blog/v 3 - 16 '
      대상 :   '_ blank '
      ui . container :   ' max - w - lg '
    - title :   Nuxt   3 . 15
      설명 :   ' Nuxt   3 . 15   출시   -   Vite   6 ,   더   나 은   HMR   및   더   빠른   성능 ! '
      이미지 :https://nuxt.com/assets/blog/v3.15.png
      날짜   :   2024 - 12 - 24
      다음   주소 :   ' https ://nuxt . com/blog/v 3 - 15 '
      대상 :   '_ blank '
      ui . container :   ' max - w - lg '
  클래스 :   ' w - full '
---
::

###   지시   동작

`indicator-motion`prop 을   사용 하 여   표시기   표시줄 의   모션   효과 를   사용자   정의 하 거나   숨길   수   있 습니다 .   기본 값 은  `true`와   함께  `{ damping: 30, restDelta: 0.001 }`spring   transition   options](https://motion.dev/docs/vue-transitions#spring)  입니다 .

::component-code
---
축소 :   true
무시 하 기 :
  - 버전
외부 :
  - 버전
externalTypes :
  - ChangelogVersionProps   [ ]
숨기 기 (Hide) :
  - class   클래스
항목 :
  indicatorMotion :
    - true
    - false
소품   :
  indicatorMotion   :   true
  버전   :
    - title :   Nuxt   3 . 17
      설명   : Nuxt   3 . 17 은   비동기   데이터   계층 의   주요   재 작업 ,   새로운   기본   제공   구성   요소 ,   더   나 은   경고   및   성능   향상 을   제공 합니다 !
      그림 :https://nuxt.com/assets/blog/v3.17.png
      날짜   :   2025 - 04 - 27
      다음   주소 :   ' https ://nuxt . com/blog/v 3 - 17 '
      대상 :   '_ blank '
      ui . container :   ' max - w - lg '
    - title :   Nuxt   3 . 16
      설명 :   ' Nuxt   3 . 16 은   기능   및   성능   향상 으로   가득   차   있 습니다 ! '
      그림 :https://nuxt.com/assets/blog/v3.16.png
      날짜   :   2025 - 03 - 07
      다음   주소 :   ' https ://nuxt . com/blog/v 3 - 16 '
      대상 :   '_ blank '
      ui . container :   ' max - w - lg '
    - title :   Nuxt   3 . 15
      설명 :   ' Nuxt   3 . 15   출시   -   Vite   6 ,   더   나 은   HMR   및   더   빠른   성능 ! '
      그림 :https://nuxt.com/assets/blog/v3.15.png
      날짜   :   2024 - 12 - 24
      다음   주소 :   ' https ://nuxt . com/blog/v 3 - 15 '
      대상 :   '_ blank '
      ui . container :   ' max - w - lg '
  클래스 :   ' w - full '
---
::

##   예

::note
이러 한   예 에서 는  [Nuxt   Content](https://content.nuxt.com)를   사용 하 지만   모든   컨텐츠   관리   시스템 과   통합 할   수   있 습니다 .
::

###   한   페이지   내 에서

페이지 의   ChangelogVersions   구성   요소 를   사용 하 여   변경   로그   페이지 를   생성 합니다 .

```vue [pages/changelog.vue]{10-17}
<script setup lang="ts">
const { data: versions } = await useAsyncData('versions', () => queryCollection('versions').all())
</script>

<template>
  <UPage>
    <UPageHero title="Changelog" />

    <UPageBody>
      <UChangelogVersions>
        <UChangelogVersion
          v-for="(version, index) in versions"
          :key="index"
          v-bind="version"
          :to="version.path"
        />
      </UChangelogVersions>
    </UPageBody>
  </UPage>
</template>
```

::note
이   예제 에서 는  `versions`  모듈 에서  `queryCollection`  를   사용 하 여  `@nuxt/content`  를   가져옵니다 .
::

::tip
`to`prop 은  `@nuxt/content`  속성 을   사용 하 기   때문 에   여기 서   재정 의 됩니다 .
::

###   고정   표시기   포함

`ui`prop 및 다른 슬롯을 사용하여 표시기를 고정 상태로 만듭니다.

::component-example
---
상품명 : True
축소: true
이름: 'changelog-versions-sticky-example'
분류: P-8
소품 :
  클래스 : 'w-full'
---
::

### 스크롤 컨테이너와 함께 : badge{label="4.4+" class="align-text-top"}

객체를 `indicator`prop에 전달하여 스크롤 컨테이너를 구성합니다. 기본적으로 표시기는 창/페이지 스크롤을 추적합니다(https://motion.dev/docs/vue-use-scroll#page-scroll).

```vue
<script setup lang="ts">
const scrollContainer = ref<HTMLElement>()
</script>

<template>
  <div ref="scrollContainer" class="max-h-96 overflow-y-auto">
    <UChangelogVersions v-if="scrollContainer" :indicator="{ container: scrollContainer }" />
  </div>
</template>
```

::warning
사용자 지정 `container`를 사용할 때는 컨테이너 요소가 `UChangelogVersions` 앞에 마운트되어 있는지 확인합니다.
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

::tip
ChangelogVersions 내부의 [`ChangelogVersion`](/docs/components/changelog-version#slots) 구성 요소의 모든 슬롯을 사용할 수 있으며 자동으로 전달되므로 `versions`prop을 사용할 때 개별 버전을 사용자 정의 할 수 있습니다.

```vue{3-5}
<template>
  <UChangelogVersions :versions="versions">
    <template #body="{ version }">
      <Markdown :value="version.content" />
    </template>
  </UChangelogVersions>
</template>
```
::

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그

---
title: ChangelogVersions 변경하기
description: '일정에 변경 로그 버전 목록을 표시합니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersions.vue
---

## Usage

ChangelogVersion](/docs/components/changelog-version) 구성 요소 목록을 기본 슬롯이나 `versions` prop을 사용하여 표시할 수 있는 유연한 레이아웃을 제공합니다.

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

`versions` prop을 [ChangelogVersion](/docs/components/changelog-version#props) 구성 요소의 속성이 있는 오브젝트 배열로 사용합니다.

::component-code
---
collapse: true
ignore:
  - versions
external:
  - versions
externalTypes:
  - ChangelogVersionProps[]
hide:
  - class
props:
  versions:
    - title: Nuxt 3.17
      description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.17.png
      date: 2025-04-27
      to: 'https://nuxt.com/blog/v3-17'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.16
      description: 'Nuxt 3.16 is out - packed with features and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.16.png
      date: 2025-03-07
      to: 'https://nuxt.com/blog/v3-16'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.15
      description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!'
      image: https://nuxt.com/assets/blog/v3.15.png
      date: 2024-12-24
      to: 'https://nuxt.com/blog/v3-15'
      target: '_blank'
      ui.container: 'max-w-lg'
  class: 'w-full'
---
::

### Indicator (### 표시기)

`indicator` 소품을 사용하여 왼쪽의 지시자 막대를 숨깁니다. 기본값은 `true`입니다.

::component-code
---
collapse: true
ignore:
  - versions
external:
  - versions
externalTypes:
  - ChangelogVersionProps[]
hide:
  - class
props:
  indicator: false
  versions:
    - title: Nuxt 3.17
      description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.17.png
      date: 2025-04-27
      to: 'https://nuxt.com/blog/v3-17'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.16
      description: 'Nuxt 3.16 is out - packed with features and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.16.png
      date: 2025-03-07
      to: 'https://nuxt.com/blog/v3-16'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.15
      description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!'
      image: https://nuxt.com/assets/blog/v3.15.png
      date: 2024-12-24
      to: 'https://nuxt.com/blog/v3-15'
      target: '_blank'
      ui.container: 'max-w-lg'
  class: 'w-full'
---
::

### 표시기 동작

`indicator-motion` 소품을 사용하여 표시기 막대의 모션 효과를 사용자 정의하거나 숨길 수 있습니다. 기본적으로 `{ damping: 30, restDelta: 0.001 }` [spring transition options](https://motion.dev/docs/vue-transitions#spring)가 있는 `true`입니다.

::component-code
---
collapse: true
ignore:
  - versions
external:
  - versions
externalTypes:
  - ChangelogVersionProps[]
hide:
  - class
items:
  indicatorMotion:
    - true
    - false
props:
  indicatorMotion: true
  versions:
    - title: Nuxt 3.17
      description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.17.png
      date: 2025-04-27
      to: 'https://nuxt.com/blog/v3-17'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.16
      description: 'Nuxt 3.16 is out - packed with features and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.16.png
      date: 2025-03-07
      to: 'https://nuxt.com/blog/v3-16'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.15
      description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!'
      image: https://nuxt.com/assets/blog/v3.15.png
      date: 2024-12-24
      to: 'https://nuxt.com/blog/v3-15'
      target: '_blank'
      ui.container: 'max-w-lg'
  class: 'w-full'
---
::

## examples 예제

::note
이러한 예제에서는 [Nuxt Content](https://content.nuxt.com)를 사용하지만 구성 요소는 모든 콘텐츠 관리 시스템과 통합 할 수 있습니다.
::

### 페이지 안에

페이지에서 ChangelogVersions 구성 요소를 사용하여 변경 로그 페이지를 생성합니다.

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
이 예제에서는 `versions`가 `@nuxt/content` 모듈에서 `queryCollection`를 사용하여 인출됩니다.
::

::tip
`@nuxt/content`가 `path` 속성을 사용하기 때문에 `to` prop은 여기서 재정의됩니다.
::

### Sticky 표시기

`ui` prop과 다른 슬롯을 사용하여 표시기를 고정시킬 수 있습니다.

::component-example
---
prettier: true
collapse: true
name: 'changelog-versions-sticky-example'
class: 'p-8'
props:
  class: 'w-full'
---
::

### 스크롤 컨테이너와 함께: badge{label="4.4+" class="align-text-top"}

객체를 `indicator` Prop에 전달하여 스크롤 컨테이너를 구성합니다. 기본적으로 표시기는 창/페이지 스크롤(https://motion.dev/docs/vue-use-scroll#page-scroll)을 추적합니다.

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
사용자 정의 `container`를 사용할 때는 컨테이너 요소가 `UChangelogVersions` 이전에 마운트되어 있는지 확인합니다.
::

## API

### Props (### Props)

:component-props

### 슬롯

:component-slots

::tip
ChangelogVersions 내에서 [`ChangelogVersion`](/docs/components/changelog-version#slots) 구성 요소의 모든 슬롯을 사용할 수 있으며, `versions` prop을 사용할 때 개별 버전을 사용자 정의 할 수 있도록 자동으로 전달됩니다.

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

## Theme 테마

:component-theme

## 변경 로그

:component-changelog

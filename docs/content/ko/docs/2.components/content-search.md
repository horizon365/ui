---
title: ContentSearch 검색
description: '설명서에 추가할 수 있는 CommandPalette 입니다.'
category: content
framework: nuxt
links:
  - label: CommandPalette 명령팔레트
    to: /docs/components/command-palette
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearch.vue
---

::warning{to="/docs/getting-started/integrations/content"}
이 구성요소는 `@nuxt/content` 모듈이 설치된 경우에만 사용할 수 있습니다.
::

## Usage

ContentSearch 구성 요소는 [CommandPalette](/docs/components/command-palette) 구성 요소를 확장하고 내장 [`@nuxt/content`https://content.nuxt.com) 검색 지원을 제공합니다. 탐색 그룹화 및 색상 모드 명령입니다. 클라이언트측 [Fuse.js](https://www.fusejs.io/) 필터링 및 서버측 [FTS5 전체 -텍스트 search](https://www.sqlite.org/fts5.html).`icon`, `placeholder` 등의 CommandPalette 속성을 전달할 수 있습니다.

::component-example
---
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
source: false
name: 'content-search-example'
---
::

::note
명령팔레트는 :kbd{value="meta"}:kbd{value="K" class="ms-px"} 키를 누르거나 [ContentSearchButton](/docs/components/content-search-button) 구성 요소를 사용하거나 `useContentSearch` 컴포지블:`const { open } = useContentSearch()`{lang="ts"} 를 사용하여 열 수 있습니다.
::

::tip
`ContentSearch` 구성 요소를 [ClientOnly](https://nuxt.com/docs/api/components/client-only) 구성 요소로 래핑하여 서버에서 렌더링되지 않도록 하는 것이 좋습니다.
::

### navigation 탐색

`navigation` prop을 [`queryCollectionNavigation`](https://content.nuxt.com/docs/utils/query-collection-navigation)와 함께 사용하여 섹션별로 검색 결과를 그룹화합니다.

```vue [app.vue] {2, 9}
<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))
</script>

<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
</template>
```

### 파일

`files` Prop을 [`queryCollectionSearchSections`](https://content.nuxt.com/docs/utils/query-collection-search-sections)와 함께 사용하여 모든 검색 섹션을 사전에 로드하고 클라이언트측 [Fuse.js](https://www.fusejs.io/) 필터링을 사용합니다.

```vue [app.vue] {4-8, 16}
<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))

const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs', {
  ignoredTags: ['style']
}), {
  server: false
})
</script>

<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        :navigation="navigation"
        :files="files"
        :fuse="{ resultLimit: 20, fuseOptions: { threshold: 0.2 } }"
      />
    </ClientOnly>
  </UApp>
</template>
```

::tip
`fuse` 소품을 사용하여 `resultLimit` (기본 `12`) 및 `fuseOptions.threshold` (기본 `0.1`)와 같은 기본 [CommandPalette](/docs/components/command-palette)에 전달되는 [useFuse](https://vueuse.org/integrations/useFuse) 옵션을 구성합니다.
::

### Search: badge{label="4.8+" class="align-text-top"} 검색

클라이언트측 필터링 대신 강조 표시된 스니펫이 포함된 서버측 [`useSearchCollection`](https://content.nuxt.com/docs/utils/use-search-collectionxph19x 프록시를 사용하여 [FTS5 전체 텍스트 검색 ](https://www.sqlite.org/fts5.html)에 대해 `search` 소품을 사용합니다.

::warning
`@nuxt/content` v3.14+ 가 필요합니다.
::

```vue [app.vue] {4-7, 24-25}
<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))

const { search, status, init } = useSearchCollection('content', {
  immediate: false,
  ignoredTags: ['style']
})

const { open } = useContentSearch()

// Defer index initialization until the user opens the palette when using `immediate: false`
watch(open, (value) => {
  if (value && status.value === 'idle') {
    init()
  }
})
</script>

<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        :navigation="navigation"
        :search="search"
        :search-status="status"
      />
    </ClientOnly>
  </UApp>
</template>
```

::tip
인덱스가 준비되면 구성 요소가 자동으로 검색을 다시 트리거할 수 있도록 `search-status`를 전달합니다. `search-delay`(기본값 `100ms`)를 사용하여 검색이 발생하기 전에 입력을 일시 중지해야 하는 시간을 제어합니다. `fuse.resultLimit` 옵션은 모든 그룹(검색 결과, 링크, 주제 등)에서 반환된 총 결과를 캡처합니다.
::

::note
`search` 소품을 사용할 때 `files`를 전달할 필요가 없습니다. 구성 요소는 Fuse.js가 아닌 각 키 입력에서 async 검색 기능을 호출합니다. 결과는 강조 표시된 조각으로 탐색하여 자동으로 매핑되고 그룹화됩니다. 모든 검색 섹션을 사전에 로드하고 입력하기 전에 탐색 항목을 탐색할 수 있는 `files` 접근 방식과는 달리 `search` 소품은 쿼리를 입력한 후에만 결과를 반환합니다.
::

### Shortcut

`shortcut` prop을 사용하여 [defineShortcuts](/docs/composables/define-shortcuts)에서 사용되는 바로 가기를 변경하여 ContentSearch 구성 요소를 엽니다. 기본값은 `meta_k`(:kbd{value="meta"}:kbd{value="K"})입니다.

```vue [app.vue]{5}
<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        shortcut="meta_k"
      />
    </ClientOnly>
  </UApp>
</template>
```

### 링크 링크

`links` prop을 사용하여 명령 팔레트 맨 위에 빠른 액세스 링크 그룹을 추가합니다.

```vue [app.vue] {21}
<script setup lang="ts">
const links = [{
  label: 'Docs',
  icon: 'i-lucide-book',
  to: '/docs/getting-started'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  to: '/docs/components'
}, {
  label: 'Showcase',
  icon: 'i-lucide-presentation',
  to: '/showcase'
}]
</script>

<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        :links="links"
      />
    </ClientOnly>
  </UApp>
</template>
```

### Color 모드

기본적으로 명령 팔레트에 명령 그룹이 추가되어 밝은 모드와 어두운 모드 사이를 전환할 수 있습니다. 이 명령은 `colorMode`가 `definePageMeta`를 통해 수행할 수 있는 특정 페이지에서 강제로 수행되지 않은 경우에만 적용됩니다.

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

`color-mode` prop을 `false`로 설정하여 이 동작을 비활성화할 수 있습니다.

```vue [app.vue]{5}
<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        :color-mode="false"
      />
    </ClientOnly>
  </UApp>
</template>
```

## API

### Props (### Props)

:component-props

### 슬롯

:component-slots

### Emits

:component-emits

### exose 소개

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `commandPaletteRef`{lang="ts-type"}| `Ref<InstanceType<typeof UCommandPalette> \| null>`{lang="ts-type"}|

## Theme 테마

:component-theme

## 변경 로그

:component-changelog{prefix="content"}

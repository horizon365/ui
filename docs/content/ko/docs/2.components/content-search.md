---
title: ContentSearch 검색
description: '설명서에 추가할 수 있는 CommandPalette.'
category: content
framework: nuxt
links:
  - label: Command팔레트
    to: /docs/components/command-palette
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearch.vue
---

::warning{to="/docs/getting-started/integrations/content"}
이 구성 요소는 `@nuxt/content` 모듈이 설치된 경우에만 사용할 수 있습니다.
::

##  사용

ContentSearch 구성 요소는 [CommandPalette](/docs/components/command-palette`@nuxt/content`](https://content.nuxt.com)검색 지원을 내장하는 ) 구성 요소를 확장합니다. 네비게이션 그룹화 및 색상 모드 명령. 클라이언트측 [Fuse.js](https://www.fusejs.io/)필터링 및 서버측 [FTS5 전체 텍스트 검색](https://www.sqlite.org/fts5.html) . `icon`, `placeholder` 등과 같은 CommandPalette 속성을 전달할 수 있습니다.

::component-example
---
iframe :
  높이 : 500px;
iframeMobile : true
overflowHidden: true
출처 : false
이름: "content-search-example"
---
::

::note
CommandPalette를 열 수 있습니다: kbd{value="meta"}:kbd{value="K" class="ms-px"} 또는 [ContentSearchButton](/docs/components/content-search-button 구성 요소를 사용하거나 `useContentSearch`composable:{lang="ts"} 구성 요소를 사용하여 명령팔레트를 열 수 있습니다.
::

::tip
`ContentSearch` 구성 요소를 [ClientOnly](https://nuxt.com/docs/api/components/client-only) 구성 요소로 래핑하여 서버에서 렌더링되지 않도록 하는 것이 좋습니다.
::

###  탐색

`navigation`prop을 [`queryCollectionNavigation`](https://content.nuxt.com/docs/utils/query-collection-navigation)와 함께 사용하여 검색 결과를 섹션별로 그룹화합니다.

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

###  파일

`files`prop을 사용하여 [`queryCollectionSearchSections`](https://content.nuxt.com/docs/utils/query-collection-search-sections) 클라이언트측 @@Fuse.js](https://www.fusejs.io/ ) 필터링을 사용하여 모든 검색 섹션을 사전에 로드하고 클라이언트측 [Fuse.js](https://www.fusejs.io/) 필터링:

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
`fuse`prop을 사용하여 [useFuse](https://vueuse.org/integrations/useFuse)옵션을 기본 @@CommandPalette](/docs/components/command-palette)와 같은 `resultLimit`PH03@@ 기본 @@PH92@@ 및`resultLimit` 기본 @PH93@ 기본 @ `resultLimit` 기본 @ @PH03 @ @ 기본 @ @ PH03 @ @ 기본 @ `resultLimit` @ 기본 @ `resultLimit` @ 기본 @
::

###  검색: badge{label="4.8+" class="align-text-top"}

`search`prop을 사용하여 [`useSearchCollection`](https://content.nuxt.com/docs/utils/use-search-collection)서버측 )를 서버측 [FTS5 전체 텍스트 검색](](https://www.sqlite.org/fts5.html와 함께 클라이언트측 필터링 대신 강조 표시:

::warning
`@nuxt/content`v3.14+ 필요합니다.
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
인덱스가 준비되면 구성 요소가 자동으로 검색을 다시 트리거할 수 있도록 `search-status`를 전달합니다. `search-delay`(기본값`100ms`)를 사용하여 검색이 발생하기 전에 입력을 일시 중지해야 하는 시간을 제어합니다. `fuse.resultLimit` 옵션은 모든 그룹(검색 결과, 링크, 테마 등)에 대해 반환된 총 결과를 캡처합니다.
::

::note
`search`prop을 사용할 때는 `files`를 전달할 필요가 없습니다. 구성요소는 Fuse.js 대신 각 키 입력에서 비동기 검색 기능을 호출합니다. 결과는 자동으로 매핑되고 강조 표시된 조각으로 그룹화됩니다. 모든 검색 섹션을 사전에 로드하고 입력하기 전에 탐색 항목을 탐색할 수 있게 해주는 `files` 접근법과는 달리,`search`prop은 질의를 입력한 후에만 결과를 반환합니다.
::

###  바로가기

`shortcut`prop을 사용하여 ContentSearch 구성 요소를 열려면 [defineShortcuts](/docs/composables/define-shortcuts)에 사용된 바로 가기를 변경합니다. 기본값은 `meta_k` (:kbd{value="meta"}:kbd{value="K"}).

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

###  링크

`links`prop을 사용하여 명령 팔레트의 맨 위에 빠른 액세스 링크 그룹을 추가합니다.

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

###  색상 모드

기본적으로 명령 팔레트에 명령 그룹이 추가되어 밝은 모드와 어두운 모드 간에 전환할 수 있습니다. 이 명령은 `colorMode` 가 `definePageMeta` 를 통해 수행할 수 있는 특정 페이지에서 강제로 수행되지 않는 경우에만 적용됩니다.

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

`color-mode`prop을 `false`로 설정하여 이 동작을 비활성화할 수 있습니다.

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

##  API

### Props 이미지

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

###  에미츠

:구성요소 - 방출

###  노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `commandPaletteRef`{lang="ts-type"}| `Ref<InstanceType<typeof UCommandPalette> \| null>`{lang="ts-type"}|

##  테마

:구성요소 - 주제

##  Changelog

: component-changelog{prefix="content"}

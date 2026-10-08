---
title: dashboardSearch
description: '대시보드에 추가할 준비가 된 CommandPalette.'
category: dashboard
links:
  - label: Command팔레트
    to: /docs/components/command-palette
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearch.vue
---

##  사용

DashboardSearch 구성 요소는 [CommandPalette](/docs/components/command-palette) 구성 요소를 확장하므로 `icon`, `placeholder` 등의 등록 정보를 전달할 수 있습니다.

[DashboardGroup](/docs/components/dashboard-group) 구성 요소의 기본 슬롯 내에서 사용하십시오.

```vue [layouts/dashboard.vue]{3}
<template>
  <UDashboardGroup>
    <UDashboardSidebar>
      <UDashboardSearchButton />
    </UDashboardSidebar>

    <UDashboardSearch />

    <slot />
  </UDashboardGroup>
</template>
```

::tip
CommandPalette는 다음과 같이 열 수 있습니다. kbd{value="meta"}kbd{value="K" class="ms-px"}를 누르거나 [DashboardSearchButton](/docs/components/dashboard-search-button) 구성 요소를 사용하거나 `v-model:open`{lang="ts"} 지시문을 사용하여 열 수 있습니다.
::

###  바로가기

`shortcut`prop을 사용하여 ContentSearch 구성 요소를 열려면 [defineShortcuts](/docs/composables/define-shortcuts) 에서 사용된 바로 가기를 변경합니다. 기본값은 `meta_k`(:kbd{value="meta"}:kbd{value="K"})입니다.

```vue [app.vue]{4}
<template>
  <UDashboardSearch
    v-model:search-term="searchTerm"
    shortcut="meta_k"
    :groups="groups"
    :fuse="{ resultLimit: 42 }"
  />
</template>
```

###  색상 모드

기본적으로 명령 팔레트에 명령 그룹이 추가되어 밝은 모드와 어두운 모드 사이를 전환할 수 있습니다. 이 명령은 `colorMode` 가 `definePageMeta` 를 통해 수행할 수 있는 특정 페이지에서 강제로 수행되지 않은 경우에만 적용됩니다.

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

`color-mode`prop을 `false`로 설정하면 이 동작을 비활성화할 수 있습니다.

```vue [app.vue]{4}
<template>
  <UDashboardSearch
    v-model:search-term="searchTerm"
    :color-mode="false"
    :groups="groups"
    :fuse="{ resultLimit: 42 }"
  />
</template>
```

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

###  Emits

:구성요소 - 방출

###  노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 Name| 유형 (Type)|
| ---- | ---- |
| `commandPaletteRef`{lang="ts-type"}| `Ref<InstanceType<typeof UCommandPalette> \| null>`{lang="ts-type"}|

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그

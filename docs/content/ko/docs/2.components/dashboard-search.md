---
title: dashboardSearch
description: '대시보드에 추가할 준비가 된 CommandPalette.'
category: dashboard
links:
  - label: CommandPalette 명령팔레트
    to: /docs/components/command-palette
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearch.vue
---

## Usage

DashboardSearch 구성 요소는 [CommandPalette](xph05x) 구성 요소를 확장하므로 `icon`, `placeholder` 등과 같은 모든 속성을 전달할 수 있습니다.

[DashboardGroup](/docs/components/dashboard-group) 구성 요소의 기본 슬롯 내에서 이 옵션을 사용합니다.

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
명령팔레트는 :kbd{value="meta"}:kbd{value="K" class="ms-px"} 키를 누르거나 [DashboardSearchButton](/docs/components/dashboard-search-button) 구성 요소를 사용하거나 `v-model:open`{lang="ts"} 지시어를 사용하여 열 수 있습니다.
::

### 바로 가기

`shortcut` 소품을 사용하여 [defineShortcuts](/docs/composables/define-shortcuts)에서 사용되는 단축키를 변경하여 ContentSearch 구성 요소를 엽니다. 기본값은 `meta_k`(:kbd{value="meta"}:kbd{value="K"})입니다.

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

### Color 모델

기본적으로 명령 팔레트에 명령 그룹이 추가되어 밝은 모드와 어두운 모드 사이를 전환할 수 있습니다. 이 명령은 `colorMode`가 `definePageMeta`를 통해 수행할 수 있는 특정 페이지에서 강제로 수행되지 않은 경우에만 적용됩니다.

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

`color-mode` prop을 `false`로 설정하면 이 동작을 비활성화할 수 있습니다.

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

## API 사용

### Props 코드

:component-props

### 슬롯

:component-slots

### Emits

:component-emits

### 노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `commandPaletteRef`{lang="ts-type"} (`commandPaletteRef`{lang="ts-type"})| `Ref<InstanceType<typeof UCommandPalette> \| null>`{lang="ts-type"} (`Ref<InstanceType<typeof UCommandPalette> \| null>`{lang="ts-type"})|

## Theme 테마

:component-theme

## 변경 로그

:component-changelog

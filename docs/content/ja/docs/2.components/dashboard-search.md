---
title: ダッシュボード検索
description: 'ダッシュボードに追加するためのすぐに使用できるCommandPalette。'
category: dashboard
links:
  - label: コマンドパレット
    to: /docs/components/command-palette
    icon: i-simple-icons-nuxtdotjs
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearch.vue
---

## 使用法

DashboardSearchコンポーネントは[ CommandPalette ](/docs/components/command-palette)コンポーネントを拡張しているため、`icon`、`placeholder`などのプロパティを渡すことができます。

[ DashboardGroup ](/docs/components/dashboard-group)コンポーネントのデフォルトスロット内で使用します。

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
CommandPaletteを開くには、kbd {value="meta"} kbd {value="K" class="ms-px"}を押すか、[ DashboardSearchButton ](/docs/components/dashboard-search-button)コンポーネントを使用するか、`v-model:open`{lang="ts"}ディレクティブを使用します。
::

### ショートカット

`shortcut` propを使用して、[ defineShortcuts ](/docs/composables/define-shortcuts)で使用されているショートカットを変更してContentSearchコンポーネントを開きます。デフォルトは`meta_k` kbd {value="meta"} kbd {value="K"}です。

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

### カラーモード

デフォルトでは、コマンドのグループがコマンドパレットに追加され、ライトモードとダークモードを切り替えることができます。これは、`colorMode`が特定のページで強制されていない場合にのみ有効になります。`definePageMeta`で実行できます。

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

この動作を無効にするには、`color-mode` propを`false`に設定します。

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

component—props

### スロット

コンポーネントスロット

### エミッツ

component—emits

###  Expose

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `commandPaletteRef`{lang="ts-type"}| `Ref<InstanceType<typeof UCommandPalette> \| null>`{lang="ts-type"}|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog

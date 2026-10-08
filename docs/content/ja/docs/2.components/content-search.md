---
title: コンテンツ検索
description: 'すぐに使用できるCommandPaletteドキュメントに追加できます。'
category: content
framework: nuxt
links:
  - label: コマンドパレット
    to: /docs/components/command-palette
    icon: i-simple-icons-nuxtdotjs
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearch.vue
---

::warning{to="/docs/getting-started/integrations/content"}
このコンポーネントは`@nuxt/content`モジュールがインストールされている場合にのみ使用できます。
::

## 使用法

ContentSearchコンポーネントは、[ CommandPalette ](/docs/components/command-palette)[`@nuxt/content`](https://content.nuxt.com)の検索サポートを内蔵して拡張します。ナビゲーショングループ化とカラーモードコマンド。クライアント側の[ Fuse.js ](https://www.fusejs.io/)フィルタリングとサーバー側の[ FTS5全文検索](の両方をサポートしています。https://www.sqlite.org/fts5.html)。`icon`、`placeholder`などのCommandPaletteプロパティを指定できます。

::component-example
---
iframe
  高さ500px；
iframeモバイルtrue
overflowHidden true
ソース：false
名前'content—search—example'
---
::

::note
CommandPaletteを開くには、kbd {value="meta"} kbd {value="K" class="ms-px"}を押すか、[ ContentSearchButton ](/docs/components/content-search-button)コンポーネントを使用するか、`useContentSearch` composable `const { open } = useContentSearch()`{lang="ts"}を使用します。
::

::tip
`ContentSearch`コンポーネントを[ ClientOnly ](https://nuxt.com/docs/api/components/client-only)コンポーネントにラップして、サーバー上でレンダリングされないようにすることをお勧めします。
::

### ナビゲーション

`navigation` propを[`queryCollectionNavigation`](https://content.nuxt.com/docs/utils/query-collection-navigation)と組み合わせて使用して、検索結果をセクションごとにグループ化します。

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

### ファイル

`files`[`queryCollectionSearchSections`](https://content.nuxt.com/docs/utils/query-collection-search-sections)を使用して、すべての検索セクションを事前にロードし、クライアントサイドの[ Fuse.js ](https://www.fusejs.io/)フィルタリングを使用します。

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
`fuse` propを使用して、[ useFuse ](https://vueuse.org/integrations/useFuse)[ CommandPalette ](/docs/components/command-palette)`resultLimit`デフォルト`12`のように、`fuseOptions.threshold`デフォルト`0.1`を設定します。
::

### 検索badge {label="4.8+" class="align-text-top"}

`search`[`useSearchCollection`](https://content.nuxt.com/docs/utils/use-search-collection)を使って、クライアント側のフィルタリングの代わりにハイライトされたスニペットを使用します。

::warning
`@nuxt/content` v3.14+が必要です。
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
インデックスの準備ができたら、コンポーネントが自動的に検索を再トリガーできるように、`search-status`を指定します。検索が開始されるまでに入力を停止する時間を制御するには、`search-delay`（デフォルトは`100ms`）を使用します。`fuse.resultLimit`オプションは、すべてのグループ（検索結果、リンク、テーマなど）で返される合計結果を上限にします。
::

::note
`search`プロパティを使用する場合、`files`を渡す必要はありません。コンポーネントはFuse.jsの代わりに各キーストロークで非同期検索関数を呼び出します。結果は、ハイライトされたスニペットを使用してナビゲーションによって自動的にマッピングされ、グループ化されます。`files`アプローチでは、すべての検索セクションを事前に読み込み、入力前にナビゲーション項目を参照することができます。`search` propは、クエリが入力された後にのみ結果を返します。
::

### ショートカット

`shortcut` propを使用して、[ defineShortcuts ](/docs/composables/define-shortcuts)で使用されているショートカットを変更してContentSearchコンポーネントを開きます。デフォルトは`meta_k` kbd {value="meta"} kbd {value="K"}です。

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

### リンク

`links`プロパティを使用して、コマンドパレットの先頭にクイックアクセスリンクのグループを追加します。

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

### カラーモード

デフォルトでは、コマンドのグループがコマンドパレットに追加され、ライトモードとダークモードを切り替えることができます。これは、`colorMode`が特定のページで強制されていない場合にのみ有効になります。

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

この動作を無効にするには、`color-mode` propを`false`に設定します。

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

###  Props

component—props

### スロット

コンポーネントスロット

### エミッツ

component—emits

### エクスポーズ

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `commandPaletteRef`{lang="ts-type"}| `Ref<InstanceType<typeof UCommandPalette> \| null>`{lang="ts-type"}|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog {prefix="content"}

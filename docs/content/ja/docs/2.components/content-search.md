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

ContentSearchコンポーネントは[ CommandPalette](/docs/components/command-palette)コンポーネントを拡張し、[`@nuxt/content`](https://content.nuxt.com)検索サポートを組み込みます。ナビゲーションのグループ化とカラーモードコマンド。クライアント側の[Fuse.js](https://www.fusejs.io/)フィルタリングとサーバー側の[FTS5フル—text search](https://www.sqlite.org/fts5.html)。`icon`、`placeholder`などのCommandPaletteプロパティを指定できます。

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
CommandPaletteを開くには、kbd{value="meta"} kbd{value="K" class="ms-px"}を押すか、[ContentSearchButton](/docs/components/content-search-button)コンポーネントを使用するか、`useContentSearch`コンポーザー `const { open } = useContentSearch()`{lang="ts"}を使用します。
::

::tip
`ContentSearch`コンポーネントを[ClientOnly](https://nuxt.com/docs/api/components/client-only)コンポーネントにラップすることを推奨します。
::

### ナビゲーション

`navigation`プロパティを[`queryCollectionNavigation`](https://content.nuxt.com/docs/utils/query-collection-navigation)とともに使用して、検索結果をセクション別にグループ化します。

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

`files`プロパティを[`queryCollectionSearchSections`](https://content.nuxt.com/docs/utils/query-collection-search-sections)とともに使用して、すべての検索セクションを事前にロードし、クライアントサイドの[Fuse.js](https://www.fusejs.io/)フィルタリングを使用します。

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
`fuse`プロパティを使用して、`resultLimit`デフォルト`12`や`fuseOptions.threshold`デフォルト`0.1`のような[CommandPalette](/docs/components/command-palettexph11xに渡す[useFuse](https://vueuse.org/integrations/useFuse)オプションを設定します。
::

### 検索badge{label="4.8+" class="align-text-top"}

クライアント側のフィルタリングの代わりに、サーバ側の[FTS5の全文検索](https://www.sqlite.org/fts5.html)にハイライトされたスニペットを含む[`useSearchCollection`](https://content.nuxt.com/docs/utils/use-search-collection)とともに`search`プロパティを使用します。

::warning
`@nuxt/content` v3.14以降が必要です。
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
`search-status`を指定すると、インデックスの準備ができたら、コンポーネントが自動的に検索を再トリガーできるようになります。`search-delay`（デフォルトの`100ms`）を使用して、検索が開始されるまでの入力停止時間を制御します。`fuse.resultLimit`オプションは、すべてのグループ（検索結果、リンク、テーマなど）で返される結果の合計を上限にします。
::

::note
`search`プロパティを使用する場合、`files`を渡す必要はありません。このコンポーネントはFuse.jsの代わりに各キーストロークで非同期検索関数を呼び出します。結果は自動的にマッピングされ、ハイライトされたスニペットを使用してナビゲーションによってグループ化されます。すべての検索セクションを事前にロードし、入力前にナビゲーション項目を参照できる`files`アプローチとは異なり、`search`プロパティはクエリが入力された後にのみ結果を返します。
::

### ショートカット

`shortcut`プロパティを使用して、[defineShortcuts](/docs/composables/define-shortcuts)で使用されているショートカットを変更してContentSearchコンポーネントを開きます。デフォルトは`meta_k` kbd{value="meta"} kbd{value="K"}です。

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

### Links

`links`プロパティを使用して、コマンドパレットの上部にクイックアクセスリンクのグループを追加します。

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

### Colorモード

デフォルトでは、コマンドのグループがコマンドパレットに追加され、ライトモードとダークモードを切り替えることができます。これは、`definePageMeta`を使用して特定のページで`colorMode`を強制的に使用しない場合にのみ有効になります。

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

`color-mode`プロパティを`false`に設定することで、この動作を無効にできます。

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

### Props

:component-props

### スロット

:component-slots

### Emits

:component-emits

### Expose

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `commandPaletteRef`{lang="ts-type"}| `Ref<InstanceType<typeof UCommandPalette> \| null>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog{prefix="content"}

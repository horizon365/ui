---
description: 'NuxtErrorをサポートするビルド済みのエラーコンポーネント。'
category: layout
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Error.vue
---

## 使用法

Errorコンポーネントは`<main>`要素をレンダリングし、[Header](/docs/components/header)コンポーネントと連携してビューポートの使用可能な高さまで拡張するフルハイトレイアウトを作成します。

::tip{to="/docs/getting-started/theme/css-variables#header"}
ErrorコンポーネントはCSS変数`--ui-header-height`を使用して、`Header`の下に正しく配置します。
::

### Error

`error`プロパティを使用してエラーメッセージを表示します。

::framework-only
#nuxt
::note{to="https://nuxt.com/docs/guide/directory-structure/error" target="_blank"}
ほとんどの場合、`error.vue`ファイルの`error`プロパティを受け取ります。
::
::

::component-code
---
hide:
  - class
prettier: true
props:
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

### アイコンbadge{label="4.8+" class="align-text-top"}

`icon`プロパティを使用して、ステータスコードの上にアイコンを表示します。

::component-code
---
hide:
  - class
prettier: true
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
props:
  icon: 'i-lucide-file-x'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

`#leading`スロットを使用して、ロゴなどのカスタム要素を表示します。

::component-code
---
hide:
  - class
prettier: true
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
props:
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
slots:
  leading: |

    <img src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full">
---
#leading
:img{src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full"}
::

### クリア

`clear`プロパティを使用して、クリアボタン（`false`値）をカスタマイズまたは非表示にします。

[Button](/docs/components/button)コンポーネントの任意のプロパティを渡してカスタマイズできます。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
  - clear.color
  - clear.size
  - clear.icon
  - clear.class
props:
  clear:
    color: neutral
    size: xl
    icon: i-lucide-arrow-left
    class: 'rounded-full'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

### Redirect

`redirect`プロパティを使用して、clearボタンがクリックされたときにユーザーを別のページにリダイレクトします。デフォルトは`/`です。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
props:
  redirect: '/docs/getting-started'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

## 例

### x`error.vue`内

`error.vue`のErrorコンポーネントを使用します。

```vue [error.vue]{13}
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <UApp>
    <UHeader />

    <UError :error="error" />

    <UFooter />
  </UApp>
</template>
```

::tip
同じレイアウトと機能を持つように`error.vue`ファイル内で`app.vue`のコードを複製したい場合があります。以下に例を示します：<https://github.com/nuxt/ui/blob/v4/docs/app/error.vue>
::

::note
エラーの処理方法については[Nuxtドキュメント](https://nuxt.com/docs/getting-started/error-handling#error-page)を参照してください。`nuxt generate`を使用する場合は、エラーページが表示されるように`createError`呼び出しの中に`fatal: true`を追加することをお勧めします。

```vue [pages/\[...slug\\].vue]
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>
```

::

## API

### Props

:component-props

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog

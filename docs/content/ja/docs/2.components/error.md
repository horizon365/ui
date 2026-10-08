---
description: 'NuxtErrorをサポートするビルド済みのエラーコンポーネント。'
category: layout
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Error.vue
---

## 使用法

Errorコンポーネントは`<main>`要素をレンダリングし、[ Header ](/docs/components/header)コンポーネントと連携して、ビューポートの使用可能な高さまで拡張されるフルハイトレイアウトを作成します。

::tip{to="/docs/getting-started/theme/css-variables#header"}
Errorコンポーネントは、`--ui-header-height` CSS変数を使用して、自身を`Header`の下に正しく配置します。
::

### エラー

エラーメッセージを表示するには、`error`プロパティを使用します。

::framework-only
#nuxt
::note{to="https://nuxt.com/docs/guide/directory-structure/error" target="_blank"}
ほとんどの場合、`error.vue`ファイルに`error` propが含まれています。
::
::

::component-code
---
隠す
  - クラス
きれい真
小道具
  エラー
    ステータスコード404
    statusMessage 'ページが見つかりません'
    メッセージ：「お探しのページは存在しません。
  クラス'！min—h—96'
---
::

### アイコンbadge {label="4.8+" class="align-text-top"}

`icon`プロパティを使用して、ステータスコードの上にアイコンを表示します。

::component-code
---
隠す
  - クラス
きれい真
無視
  -  error.statusCode
  -  error.statusメッセージ
  - エラーメッセージ
小道具
  アイコン'i—lucide—file—x'
  エラー
    ステータスコード404
    statusMessage 'ページが見つかりません'
    メッセージ：「お探しのページは存在しません。
  クラス'！min—h—96'
---
::

`#leading`スロットを使用して、ロゴなどのカスタム要素を表示します。

::component-code
---
隠す
  - クラス
きれい真
無視
  -  error.statusCode
  -  error.statusメッセージ
  - エラーメッセージ
小道具
  エラー
    ステータスコード404
    statusMessage 'ページが見つかりません'
    メッセージ：「お探しのページは存在しません。
  クラス'！min—h—96'
スロット
  リーダー：|

    <img src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full">
---
#リーディング
img {src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full"}
::

### クリア

`clear`プロパティを使用して、クリアボタンをカスタマイズまたは非表示にします`false`値を指定。

[ Button ](/docs/components/button)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  error.statusCode
  -  error.statusメッセージ
  - エラーメッセージ
  -  clear.color
  - クリアサイズ
  -  clear.icon
  -  clear.class
小道具
  クリア
    色ニュートラル
    サイズXL
    アイコンi—lucide—arrow—left
    クラス：'rounded—full'
  エラー
    ステータスコード404
    statusMessage 'ページが見つかりません'
    メッセージ：「お探しのページは存在しません。
  クラス'！min—h—96'
---
::

### リダイレクト

`redirect`プロパティを使用して、クリアボタンがクリックされたときにユーザーを別のページにリダイレクトします。デフォルトは`/`です。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  error.statusCode
  -  error.statusメッセージ
  - エラーメッセージ
小道具
  redirect '/docs/getting—start'
  エラー
    ステータスコード404
    statusMessage 'ページが見つかりません'
    メッセージ：「お探しのページは存在しません。
  クラス'！min—h—96'
---
::

## 例

### 内`error.vue`

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
`app.vue`のコードを`error.vue`ファイル内で複製して、同じレイアウトと機能を持つようにしたい場合があります。例：<https://github.com/nuxt/ui/blob/v4/docs/app/error.vue>
::

::note
エラーの処理方法については、[ Nuxtドキュメント](https://nuxt.com/docs/getting-started/error-handling#error-page)を参照してくださいが、`nuxt generate`を使用する場合は、エラーページが表示されるように`createError`コールの中に`fatal: true`を追加することをお勧めします。

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

##  API

###  Props

component—props

### スロット

コンポーネントスロット

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog

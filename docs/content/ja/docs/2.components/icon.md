---
description: Iconifyまたは他のコンポーネントから任意のアイコンを表示するコンポーネント。
category: element
keywords:
  - svg
  - iconify
  - symbol
links:
  - label: Iconify
    to: https://iconify.design/
    target: _blank
    icon: i-simple-icons-iconify
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Icon.vue
---

## 使用法

`name`プロパティを使用してアイコンを表示します。

::component-code
---
小道具
  名前'i—lucide電球'
  クラス'サイズ—5'
---
::

::note
<https://iconify.design>コレクションから任意の名前を使用できます。<https://icones.js.org>で簡単に閲覧するか、[`search-icons`](/docs/getting-started/ai/mcp#available-tools) MCPツールを使用してAIアシスタントから直接検索します。
::

::framework-only
#nuxt
:::caution{to="/docs/getting-started/integrations/icons/nuxt#collections"}
必要なアイコンコレクションをインストールすることを強くお勧めします。
:::
::

## 例

###  SVG

`name` propにVueコンポーネントを渡すこともできます。

::component-example
---
名前'icon—svg—example'
---
::

アイコンコンポーネントを自分で定義するか、[`unplugin-icons`](https://github.com/unplugin/unplugin-icons)を使用してSVGファイルから直接インポートできます。

```vue
<script setup lang="ts">
import IconLightbulb from '~icons/lucide/lightbulb'
</script>

<template>
  <UIcon :name="IconLightbulb" class="size-5" />
</template>
```

##  API

###  Props

component—props

##  Changelog

component—changelog

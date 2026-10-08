---
title: カラーモード選択
description: 'システム、ダークモード、ライトモードを切り替えるための選択。'
category: color-mode
links:
  - label: メニューを選択
    to: /docs/components/select-menu
    icon: i-simple-icons-nuxtdotjs
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeSelect.vue
---

## 使用法

ColorModeSelectコンポーネントは[ SelectMenu ](/docs/components/select-menu)コンポーネントを拡張しているので、`color`、`variant`、`size`などのプロパティを渡すことができます。

コンポーネントコード{prefix="color-mode"}

## 例

### カスタムアイコン付き

::framework-only
#nuxt
::div

`app.config.ts`を使用して、`ui.icons`プロパティを使用してアイコンをカスタマイズします。

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    icons: {
      system: 'i-lucide-laptop',
      light: 'i-lucide-sun-medium',
      dark: 'i-lucide-moon-star'
    }
  }
})
```

::

#vue
::div
`vite.config.ts`を使用して、`ui.icons`プロパティでアイコンをカスタマイズします。

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'

export default defineConfig({
  plugins: [
    vue(),
    ui({
      ui: {
        icons: {
          light: 'i-lucide-sun-medium',
          dark: 'i-lucide-moon-star'
        }
      }
    })
  ]
})
```

::

::

##  API

###  Props

component—props

##  Changelog

component—changelog {prefix="color-mode"}

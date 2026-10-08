---
title: ColorModeSwitch
description: 'ライトモードとダークモードを切り替えるスイッチ。'
category: color-mode
links:
  - label: スイッチ
    to: /docs/components/switch
    icon: i-simple-icons-nuxtdotjs
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeSwitch.vue
---

## 使用法

ColorModeSwitchコンポーネントは[ Switch ](/docs/components/switch)コンポーネントを拡張しているので、`color`、`size`などのプロパティを渡すことができます。

コンポーネントコード{prefix="color-mode"}

## 例

### カスタムアイコン付き

::framework-only
#nuxt
::div

`app.config.ts`を使用して、`ui.icons`プロパティでアイコンをカスタマイズします。

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    icons: {
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

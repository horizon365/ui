---
title: ColorModeButton
description: 'ライトモードとダークモードを切り替えるボタン。'
category: color-mode
links:
  - label: ボタン
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeButton.vue
---

## 使用法

ColorModeButtonコンポーネントは[ Button ](/docs/components/button)コンポーネントを拡張しているので、`color`、`variant`、`size`などのプロパティを渡すことができます。

コンポーネントコード{prefix="color-mode"}

::note
ボタンのデフォルトは`color="neutral"`および`variant="ghost"`です。
::

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

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
このコンポーネントは、すべてのネイティブ`<button>` HTML属性もサポートします。
::

##  Changelog

component—changelog {prefix="color-mode"}

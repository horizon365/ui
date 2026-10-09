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

ColorModeButtonコンポーネントは[Button](/docs/components/button)コンポーネントを拡張しているため、`color`、`variant`、`size`などの任意のプロパティを渡すことができます。

:component-code{prefix="color-mode"}

::note
ボタンのデフォルトは`color="neutral"`と`variant="ghost"`です。
::

## サンプル

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

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
このコンポーネントはすべてのネイティブ`<button>` HTML属性もサポートします。
::

## Changelog

:component-changelog{prefix="color-mode"}

---
title: 颜色模式按钮
description: '一个按钮，用于在亮模式和暗模式之间切换。'
category: color-mode
links:
  - label: 按钮
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeButton.vue
---

## 使用情况

ColorModeButton组件扩展了[Button](/docs/components/button)组件，因此您可以传递任何属性，如`color`、`variant`、`size`等。

：组件代码{prefix="color-mode"}

::note
按钮默认为`color="neutral"`和`variant="ghost"`。
::

## Examples

### With custom icons

::framework-only
#nuxt（无文本）
::div

使用`app.config.ts`自定义带有`ui.icons`属性的图标：

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

版本号
::div
使用`vite.config.ts`自定义带有`ui.icons`属性的图标：

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

：组件-支柱

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
此组件还支持所有本机`<button>`HTML属性。
::

## Changelog

：component-changelog{prefix="color-mode"}

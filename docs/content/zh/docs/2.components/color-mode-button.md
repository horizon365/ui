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

## 用法

ColorModeButton组件扩展了[Button](/docs/components/button)组件，因此您可以传递任何属性，如`color`、`variant`、`size`等。

:component-code{prefix="color-mode"}

::note
按钮默认为`color="neutral"`和`variant="ghost"`。
::

## 示例

### 带有自定义图标

::framework-only
#nuxt
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

#vue
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

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
此组件还支持所有原生`<button>` HTML属性。
::

## Changelog

:component-changelog{prefix="color-mode"}

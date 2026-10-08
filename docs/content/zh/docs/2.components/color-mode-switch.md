---
title: ColorModeSwitch
description: '一个用于在浅色和深色模式之间切换的开关。'
category: color-mode
links:
  - label: 开关
    to: /docs/components/switch
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeSwitch.vue
---
## 用法

ColorModeSwitch 组件扩展了 [Switch](/docs/components/switch) 组件，因此你可以传入任何属性，例如 `color`、`size` 等。

:component-code{prefix="color-mode"}

## 示例

### 使用自定义图标

::framework-only
#nuxt
::div

使用 `app.config.ts` 通过 `ui.icons` 属性自定义图标：

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
使用 `vite.config.ts` 通过 `ui.icons` 属性自定义图标：

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

### 属性

:component-props

## 更新日志

:component-changelog{prefix="color-mode"}
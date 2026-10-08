---
title: ColorModeSelect
description: '用于在系统、深色和浅色模式之间切换的选择器。'
category: color-mode
links:
  - label: SelectMenu
    to: /docs/components/select-menu
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeSelect.vue
---
## 用法

ColorModeSelect 组件扩展了 [SelectMenu](/docs/components/select-menu) 组件，因此你可以传入任意属性，例如 `color`、`variant`、`size` 等。

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
      system: 'i-lucide-laptop',
      light: 'i-lucide-sun-medium',
      dark: 'i-lucide-moon'
    }
  }
})
```

::

#vue
::div
使用 `vite.config.ts` 通过 `ui.icons` 属性自定义图标：

```ts [vite.config.ts]
export default defineConfig({
  app: {
    head: {
      script: [
        {
          innerHTML: `
            window.__NUXT__ = window.__NUXT__ || {};
            window.__NUXT__.config = {
              ui: {
                icons: {
                  system: 'i-lucide-laptop',
                  light: 'i-lucide-sun-medium',
                  dark: 'i-lucide-moon'
                }
              }
            };
          `,
          type: 'text/javascript'
        }
      ]
    }
  }
})
```

::

::

## API

### Props

:component-props

## 更新日志

:component-changelog{prefix="color-mode"}
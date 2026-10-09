---
title: ColorModeSwitch (ColorModeSwitch)
description: '밝은 모드와 어두운 모드 사이를 전환합니다.Switch to toggle between light and dark mode.'
category: color-mode
links:
  - label: 스위치 (Switch)
    to: /docs/components/switch
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeSwitch.vue
---

## Usage

ColorModeSwitch 구성 요소는 [Switch](/docs/components/switch) 구성 요소를 확장하므로 `color`, `size` 등의 속성을 전달할 수 있습니다.

:component-code{prefix="color-mode"}

## 예

### 사용자 정의 아이콘 포함

::framework-only
#nuxt
::div

`app.config.ts`를 사용하여 `ui.icons` 속성을 사용하여 아이콘을 사용자 정의합니다.

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
`vite.config.ts`를 사용하여 `ui.icons` 속성을 사용하여 아이콘을 사용자 정의합니다.

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

## API 파일

### Props (### Props)

:component-props

## Changelog 파일

:component-changelog{prefix="color-mode"}

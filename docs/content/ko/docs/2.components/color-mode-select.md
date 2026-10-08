---
title: ColorMode 선택
description: '시스템, 어둡고 밝은 모드 사이를 전환하려면 선택합니다.'
category: color-mode
links:
  - label: SelectMenu 선택
    to: /docs/components/select-menu
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeSelect.vue
---

##  사용

ColorModeSelect 구성 요소는 [SelectMenu](/docs/components/select-menu) 구성 요소를 확장하므로 `color`, `variant`, `size` 등과 같은 속성을 전달할 수 있습니다.

: component-code {prefix="color-mode"}

##  예제

### 사용자 지정 아이콘

::framework-only
#nuxt #nuxt
::div

`app.config.ts`를 사용하여 `ui.icons` 속성을 사용하여 아이콘을 사용자 정의합니다.

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

#vue #vue
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

##  API

### Props 이미지

:컴포넌트 - 소품

##  Changelog

: component-changelog{prefix="color-mode"}

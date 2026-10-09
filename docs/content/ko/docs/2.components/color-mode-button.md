---
title: ColorModeButton 이미지
description: '밝은 모드와 어두운 모드 사이를 전환하는 버튼입니다.'
category: color-mode
links:
  - label: 단추
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeButton.vue
---

## Usage

ColorModeButton 구성 요소는 [Button](/docs/components/button) 구성 요소를 확장하므로 `color`, `variant`, `size` 등의 속성을 전달할 수 있습니다.

:component-code{prefix="color-mode"}

::note
기본적으로 버튼은 `color="neutral"` 및 `variant="ghost"`입니다.
::

## examples 예제

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

## API

### Props (### Props)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<button>` HTML 속성도 지원합니다.
::

## 변경 로그

:component-changelog{prefix="color-mode"}

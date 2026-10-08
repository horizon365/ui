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

##  사용

ColorModeButton 구성 요소는 [Button](/docs/components/button) 구성 요소를 확장하므로 `color`, `variant`, `size` 등과 같은 속성을 전달할 수 있습니다.

: component-code {prefix="color-mode"}

::note
버튼의 기본값은 `color="neutral"` 및 `variant="ghost"`입니다.
::

##  예제

###  사용자 지정 아이콘

::framework-only
#nuxt 코드
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

### Props @ 프로

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 컴포넌트는 모든 네이티브 `<button>`HTML 속성을 지원합니다.
::

##  Changelog

: component-changelog{prefix="color-mode"}

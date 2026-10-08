---
description: Iconify 또는 다른 구성 요소의 아이콘을 표시하는 구성 요소입니다.
category: element
keywords:
  - svg
  - iconify
  - symbol
links:
  - label: Iconify (이코니아)
    to: https://iconify.design/
    target: _blank
    icon: i-simple-icons-iconify
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Icon.vue
---

##  사용

`name`prop을 사용하여 아이콘을 표시합니다.

::component-code
---
소품 :
  이름: i-lucide-lightbulb
  클래스 : 'size-5'
---
::

::note
<https://iconify.design> 컬렉션에서 원하는 이름을 사용할 수 있습니다. <https://icones.js.org> 에서 쉽게 찾아보거나 `search-icons`](/docs/getting-started/ai/mcp#available-tools)MCP 도구를 사용하여 AI 어시스턴트에서 직접 검색할 수 있습니다.
::

::framework-only
#nuxt #nuxt
:::caution{to="/docs/getting-started/integrations/icons/nuxt#collections"}
필요한 아이콘 컬렉션을 설치하는 것이 좋습니다, 이에 대해 자세히 읽어보세요.It's highly recommended to install the icons collections you need, read more about this.
:::
::

##  예제

###  SVG

Vue 컴포넌트를 `name`prop에 전달할 수도 있습니다.

::component-example
---
이름 : 'icon-svg-example'
---
::

아이콘 구성 요소를 직접 정의하거나 [`unplugin-icons`](https://github.com/unplugin/unplugin-icons)를 사용하여 SVG 파일에서 직접 가져올 수 있습니다.

```vue
<script setup lang="ts">
import IconLightbulb from '~icons/lucide/lightbulb'
</script>

<template>
  <UIcon :name="IconLightbulb" class="size-5" />
</template>
```

##  API

### Props 이미지

:컴포넌트 - 소품

##  Changelog

:component-changelog 구성요소 변경 로그

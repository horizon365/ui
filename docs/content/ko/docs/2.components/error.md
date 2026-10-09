---
description: 'NuxtError 지원을 사용하는 미리 빌드된 오류 구성 요소입니다.A pre-built error component with NuxtError support.'
category: layout
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Error.vue
---

## Usage

Error 구성요소는 [Header](/docs/components/headerxph05x 구성요소와 함께 작동하는 `<main>` 요소를 렌더링하여 뷰포트의 사용 가능한 높이까지 확장되는 전체 높이 레이아웃을 만듭니다.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Error 구성 요소는 `--ui-header-height` CSS 변수를 사용하여 `Header` 아래에 정확하게 위치합니다.
::

### Error 오류

`error` prop을 사용하여 오류 메시지를 표시합니다.

::framework-only
#nuxt
::note{to="https://nuxt.com/docs/guide/directory-structure/error" target="_blank"}
대부분의 경우 `error.vue` 파일에서 `error` prop을 받게 됩니다.
::
::

::component-code
---
hide:
  - class
prettier: true
props:
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

### Icon: badge{label="4.8+" class="align-text-top"}

`icon` prop을 사용하여 상태 코드 위에 아이콘을 표시합니다.

::component-code
---
hide:
  - class
prettier: true
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
props:
  icon: 'i-lucide-file-x'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

`#leading` 슬롯을 사용하여 로고와 같은 사용자 정의 요소를 표시할 수 있습니다.

::component-code
---
hide:
  - class
prettier: true
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
props:
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
slots:
  leading: |

    <img src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full">
---
#leading
:img{src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full"}
::

### Clear 지우기

`clear` Prop을 사용하여 지우기 버튼을 사용자 정의하거나 숨깁니다(`false` 값).

[Button](/docs/components/button) 구성 요소의 모든 속성을 전달하여 사용자 정의할 수 있습니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
  - clear.color
  - clear.size
  - clear.icon
  - clear.class
props:
  clear:
    color: neutral
    size: xl
    icon: i-lucide-arrow-left
    class: 'rounded-full'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

### Redirect (리디렉션)

지우기 단추를 누르면 `redirect` 소품을 사용하여 사용자를 다른 페이지로 리디렉션합니다. 기본값은 `/`입니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
props:
  redirect: '/docs/getting-started'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

## examples 예제

### x`error.vue` 내부

`error.vue`에서 Error 구성 요소를 사용하십시오.

```vue [error.vue]{13}
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <UApp>
    <UHeader />

    <UError :error="error" />

    <UFooter />
  </UApp>
</template>
```

::tip
당신은 당신의 `app.vue`의 코드를 당신의 `error.vue` 파일 안에 복제하고 싶을 수도 있습니다, 여기에 예를 들어: <https://github.com/nuxt/ui/blob/v4/docs/app/error.vue>
::

::note
[Nuxt documentation](https://nuxt.com/docs/getting-started/error-handling#error-page)에서 오류를 처리하는 방법에 대한 자세한 내용을 읽을 수 있지만 `nuxt generate`를 사용하는 경우 `createError` 호출 내에 `fatal: true`를 추가하여 오류 페이지가 표시되는지 확인하는 것이 좋습니다.

```vue [pages/\[...slug\\].vue]
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>
```

::

## API 파일

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog

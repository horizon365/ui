---
description: 'NuxtError 지원을 사용하는 미리 빌드된 오류 구성 요소입니다.A pre-built error component with NuxtError support.'
category: layout
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Error.vue
---

##  사용

Error 구성요소는 [Header](/docs/components/header) 구성요소와 함께 작동하는 `<main>` 요소를 렌더링하여 뷰포트의 사용 가능한 높이까지 확장되는 전체 높이 레이아웃을 만듭니다.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Error 컴포넌트는 `--ui-header-height`CSS 변수를 사용하여 `Header` 아래에 정확하게 위치합니다.
::

###  오류

`error`prop을 사용하여 오류 메시지를 표시합니다.

::framework-only
#nuxt #nuxt
::note{to="https://nuxt.com/docs/guide/directory-structure/error" target="_blank"}
대부분의 경우 `error.vue` 파일에 `error`prop이 표시됩니다.
::
::

::component-code
---
숨기기 (Hide):
  -  클래스
상품명 : True
소품 :
  오류:
    statusCode: 404 (코드)
    statusMessage: '페이지를 찾을 수 없습니다.'
    메시지: "찾고 있는 페이지가 존재하지 않습니다."
  클래스: "!min-h-96"
---
::

###  아이콘: badge {label="4.8+" class="align-text-top"}

`icon`prop을 사용하여 상태 코드 위에 아이콘을 표시합니다.

::component-code
---
숨기기 (Hide):
  -  클래스
상품명 : True
무시하기:
  -  error. statusCode
  -  error. statusMessage
  -  error. message
소품 :
  아이콘: 'i-lucide-file-x'
  오류 :
    statusCode: 404 코드
    statusMessage: '페이지를 찾을 수 없습니다'
    메시지: "찾고 있는 페이지가 존재하지 않습니다."
  클래스: "!min-h-96"
---
::

`#leading`슬롯을 사용하여 로고와 같은 사용자 정의 요소를 표시합니다.

::component-code
---
숨기기 (Hide):
  -  class
상품명 : True
무시하기:
  -  error. statusCode
  -  error. statusMessage
  -  error. message
소품 :
  오류 :
    statusCode: 404 코드
    statusMessage: '페이지를 찾을 수 없습니다.'
    메시지: "찾고 있는 페이지가 존재하지 않습니다."
  클래스: "!min-h-96"
슬롯 :
  선행:|

    <img src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full">
---
#leading 지도
: img {src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full"}
::

###  클리어

`clear`prop을 사용하여 지우기 버튼을 사용자 정의하거나 숨깁니다(`false` 값).

[Button](/docs/components/button) 구성 요소에서 모든 속성을 전달하여 사용자 지정할 수 있습니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  error. statusCode
  -  error. statusMessage
  - error.message 에러 메시지
  -  clear. color
  -  clear. size
  - clear.icon - clear.icon
  - clear.class - clear.class
소품 :
  지우기:
    색상: 중립
    크기: xl
    아이콘: i-lucide-arrow-left
    클래스: rounded-full
  오류:
    statusCode: 404 코드
    statusMessage: '페이지를 찾을 수 없습니다'
    메시지: "찾고 있는 페이지가 존재하지 않습니다."
  클래스: "!min-h-96"
---
::

###  리디렉션

`redirect`prop을 사용하여 지우기 단추를 클릭할 때 사용자를 다른 페이지로 리디렉션합니다. 기본값은 `/`입니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  error. statusCode
  -  error. statusMessage
  -  error. message
소품 :
  리디렉션: `/docs/getting-started'
  오류 :
    statusCode: 404 코드
    statusMessage: '페이지를 찾을 수 없습니다'
    메시지: "찾고 있는 페이지가 존재하지 않습니다."
  클래스: "!min-h-96"
---
::

##  예제

###  내부 `error.vue`

`error.vue`의 Error 구성요소를 사용하십시오:

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
`app.vue`의 코드를 `error.vue` 파일 내에 복제하여 동일한 레이아웃과 기능을 갖도록 할 수 있습니다. 예를 들어 <https://github.com/nuxt/ui/blob/v4/docs/app/error.vue>
::

::note
[Nuxt documentation](https://nuxt.com/docs/getting-started/error-handling#error-page)에서 오류를 처리하는 방법에 대한 자세한 내용은 `nuxt generate`를 사용하는 경우 `createError` 호출 내에 `fatal: true`를 추가하여 오류 페이지가 표시되는지 확인하는 것이 좋습니다.

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

##  API

### Props 이미지

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
